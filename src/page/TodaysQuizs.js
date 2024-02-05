import { useEffect, useState } from "react";
import Header from "./Header";
// import FooterTwo from "./FooterTwo";
import Footer from "./Footer";
import Preloader from "./Preloader";
import axios from "axios";
export default function TodaysQuizs() {

    const [dailyQuiz, setDailyQuiz] = useState([])
    const [busy, setBusy] = useState(true)
    const [userID, setUserId] = useState('')
    const [set_user_answer_id, setUserAnswerId] = useState('')
    const [quistion_id, setQuistionId] = useState('')
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/daily-quiz')
            .then(response => response.json())
            .then(data => setDailyQuiz(data.data))
            .then(() => setBusy(false))

    }, [])
    const onSubmit = (e) => {
        e.preventDefault();

    };
    const sendRequest = () => {
        console.log('ok');
        const token = localStorage.getItem('token');
        // const headers = {
        //     'Content-Type': 'application/json',
        //     // 'Authorization': `Bearer ${token}` 
        //     'Authorization': "this is token" 
        // };
        // const postData = {
        //     set_user_answer_id: set_user_answer_id,
        //     quistion_id: quistion_id,
        //     userID: userID,
        // };
        // console.log(postData);
        // axios.post('http://127.0.0.1:8000/api/submit-quize-answer', postData)
        //     .then(function (response) {
        //         // Handle successful response
        //         setUserAnswerId('');
        //         setQuistionId('');
        //     })
        axios.post('http://127.0.0.1:8000/api/submit-quiz-answer', {
            set_user_answer_id: set_user_answer_id,
            quistion_id: quistion_id,
            userID: userID,
        })
            .catch(function (error) {
                if (error.response) {
                    console.error('Axios Response Status:', error.response.status);
                    console.error('Axios Response Data:', error.response.data);
                } else if (error.request) {
                    console.error('Axios Request Error:', error.request);
                } else {
                    console.error('Axios Error Message:', error.message);
                }
            });
    }
    if (busy) {
        return <Preloader />
    } else {
        return (
            <>
                <Header />

                <style>
                    {`
                .btn.active, .btn:active {
                    opacity: 1.1;
                    background-color: #f5f5f5;
                    color: #000000;
                    font-weight: bold;
                    }input {
            
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    }
            
                    .page-item.active .page-link {
                    z-index: 10 !important;
                
                    }
                    /* .hide{
                    display: none;
                    }
                    .show{
                    
                    } */
                  `}

                </style>
                <div className="wrapper light-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="common_wrapper" style={{ paddingTop: '170px', paddingBottom: '170px' }}>
                                    <div className="row">
                                        <div className="col-lg-1">
                                        </div>
                                        <div className="card col-lg-9">
                                            {/* <!-- <h5 className="card-header">Featured</h5> --> */}
                                            {dailyQuiz && dailyQuiz.question_id ? (
                                                <div className="card-body text-center">
                                                    <h5 className="margin_bottom_0" >কুইজ নং -<span id="quiz_number">{dailyQuiz.question_id}</span></h5>
                                                    <p className="margin_bottom_0" id="quiz_date">{dailyQuiz.date}</p>
                                                    <p className="margin_bottom_0" id="quiz_subject">বিষয় : {dailyQuiz.subject} <strong></strong></p>
                                                    <p className="mt-3 mb-3" id="quiz_question">{dailyQuiz.question}</p>
                                                    {/* <form method="POST" action="" onClick={onSubmit}> */}
                                                        <div className="row ans_part hide" data-toggle="buttons">
                                                            {dailyQuiz && dailyQuiz.question_id && dailyQuiz.options ? (
                                                                dailyQuiz.options.map((v, i) => (
                                                                    <div className="col-lg-6 col-sm-12" key={i}>
                                                                        <button type="button" className="btn btn-warning btn-block ans_btn"
                                                                            onClick={() => {
                                                                                setQuistionId(dailyQuiz.question_id);
                                                                                setUserAnswerId(v.option_id);
                                                                                setUserId(localStorage.getItem('userid'));
                                                                            }}
                                                                            >
                                                                            <span id={`quiz_ans_${i + 1}`}>{v.option}</span>
                                                                            <input type="radio" name="options" id={`option${i + 1}`} autoComplete="off" onChange={(e) => setUserAnswerId(e.target.value)} value={v.option_id} />
                                                                        </button>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <p>Loading or no data available</p>
                                                            )}
                                                        </div>
                                                        { dailyQuiz.question_id != '' &&  localStorage.getItem('token') ? (
                                                            <>
                                                                <button className="btn btn-success btn-block ans_btn text-center col-lg-3 mt-4 submit_btn " data-toggle="modal" data-target="#exampleModal"
                                                                    onClick={sendRequest}>Submit</button>
                                                            </>
                                                        ) : (
                                                            <button className="btn btn-success btn-block ans_btn text-center col-lg-3 mt-4 submit_btn " data-toggle="modal" data-target="#exampleModal" disabled>Login First</button>
                                                        )}

                                                    {/* </form>  */}
                                                    <div className=" col-sm-12">
                                                        <p className="quiz_message" ></p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="card-body text-center">
                                                    <div className=" col-sm-12">
                                                        <p className="quiz_message" >No quiz for today</p>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                    <Footer />
                    {/* @include('web.partials.footer') */}
                </div>
            </>
        )
    }

}