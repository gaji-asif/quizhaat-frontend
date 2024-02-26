import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preloader from "./Preloader";
import Swal from 'sweetalert2';
import '../style/css/today_quiz.css';

const TodaysQuizs = () => {
  const [dailyQuiz, setDailyQuiz] = useState({});
  const [busy, setBusy] = useState(true);
  const [userID, setUserId] = useState('');
  const [userAnswerId, setUserAnswerId] = useState('');
  const [questionId, setQuestionId] = useState('');

  useEffect(() => {
    // Fetch data from API
    fetch('http://127.0.0.1:8000/api/daily-quiz')
      .then(response => response.json())
      .then(data => {
      // Log the API response for debugging
        if (data.is_data) {
          setDailyQuiz(data.data);
        } else {
          console.log("No data available in the API response.");
        }
        setBusy(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setBusy(false);
      });
  }, []);

  const sendRequest = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('User not logged in. Please log in first.');
      return; // Do not proceed if the user is not logged in
    }

    const postData = {
      set_user_answer_id: userAnswerId,
      quistion_id: questionId,
      userID: userID,
    };
    // Make a POST request to submit quiz answers
    fetch('http://127.0.0.1:8000/api/submit-quiz-answer', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Authorization': `Bearer ${token}`,
      // },
      body: JSON.stringify(postData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.status);
        if (data.status == "true") {
          //  localStorage.setItem('isSubmitted', "true")
          alert('quiz answer submitted successfully')
          Swal.fire({
            title: "Good job!",
            text: "quiz answer submitted successfully",
            icon: "success"
          });
        }
        if (data.status == "false" && data.message == "already given") {
          // localStorage.setItem('isSubmitted', "true")
          Swal.fire({
            title: " you already submitted ",
            text: "Try next day!",
            icon: "error"
          });
          // sweet alert TODO::
        }
        setUserAnswerId('');
        setQuestionId('');
      })
      .catch(error => {
        console.error('Error submitting quiz answer:', error);
      });
  };

  if (busy) {
    return <Preloader />;
  } else {
    return (
      <>
        <Header />
        <div className="wrapper light-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="common_wrapper" style={{ paddingTop: '170px', paddingBottom: '170px' }}>
                  <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="card col-lg-9">
                      {/* {localStorage.getItem('isSubmitted') == "true" ? (
                        <div className="card-body text-center">
                          <div className=" col-sm-12">
                            <p className="quiz_message">You already perticipate</p>
                          </div>
                        </div>
                      ) : (
                        <> */}
                          {dailyQuiz && dailyQuiz.question_id ? (
                            <div className="card-body text-center">
                              <h5 className="margin_bottom_0">কুইজ নং -<span id="quiz_number">{dailyQuiz.question_id}</span></h5>
                              <p className="margin_bottom_0" id="quiz_date">{dailyQuiz.date}</p>
                              <p className="margin_bottom_0" id="quiz_subject">বিষয় : {dailyQuiz.subject} <strong></strong></p>
                              <p className="mt-3 mb-3" id="quiz_question">{dailyQuiz.question}</p>
                              <div className="row ans_part hide" data-toggle="buttons">
                                {dailyQuiz.options.map((option, i) => (
                                  <div className="col-lg-6 col-sm-12" key={option.option_id}>
                                    <button type="button" className="btn btn-warning btn-block ans_btn"
                                      onClick={() => {
                                        setQuestionId(dailyQuiz.question_id);
                                        setUserAnswerId(option.option_id);
                                        setUserId(localStorage.getItem('userid'));
                                      }}
                                    >
                                      <span id={`quiz_ans_${i + 1}`}>{option.option}</span>
                                      <input type="radio" name="options" id={`option${i + 1}`} autoComplete="off" onChange={(e) => setUserAnswerId(e.target.value)} value={option.option_id} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                              {dailyQuiz.question_id !== '' && localStorage.getItem('token') ? (
                                <button className="btn btn-success btn-block ans_btn text-center col-lg-3 mt-4 submit_btn" data-toggle="modal" data-target="#exampleModal"
                                  onClick={sendRequest}>Submit</button>
                              ) : (
                                <button className="btn btn-success btn-block ans_btn text-center col-lg-3 mt-4 submit_btn" data-toggle="modal" data-target="#exampleModal" disabled>Login First</button>
                              )}
                              <div className=" col-sm-12">
                                <p className="quiz_message"></p>
                              </div>
                            </div>
                          ) : (
                            <div className="card-body text-center">
                              <div className=" col-sm-12">
                                <p className="quiz_message">No quiz for today</p>
                              </div>
                            </div>
                          )}
                      {/* 
                        </>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default TodaysQuizs