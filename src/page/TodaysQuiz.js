import { useEffect, useState } from "react";
import Header from "./Header";
// import FooterTwo from "./FooterTwo";
import Footer from "./Footer";
import Preloader from "./Preloader";
export default function TodaysQuiz() {

    const [dailyQuiz, setDailyQuiz] = useState([])
    const [busy, setBusy] = useState(true)
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/daily-quize')
            .then(response => response.json())
            .then(data => setDailyQuiz(data.data))
            .then(() => setBusy(false))

    }, [])
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
                {/* <div className="wrapper bg-opacity-default">
                    <div className="rev_slider_wrapper fullwidth-container dark-spinner">
                        <div className="container inner text-center">
                            <div className="space40"></div>
                            <h1 className="page-title">Todays Quiz</h1>
                        </div>
                    </div>
                    
                </div> */}
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
                                            {dailyQuiz ? (
                                                <div className="card-body text-center">
                                                    <h5 className="margin_bottom_0" >কুইজ নং -<span id="quiz_number">{dailyQuiz.question_id}</span></h5>
                                                    <p className="margin_bottom_0" id="quiz_date">{dailyQuiz.date}</p>
                                                    <p className="margin_bottom_0" id="quiz_subject">বিষয় : {dailyQuiz.subject} <strong></strong></p>
                                                    <p className="mt-3 mb-3" id="quiz_question">{dailyQuiz.question}</p>
                                                    <input type="hidden" name="quiz_question_id" id="quiz_question_id" />
                                                    <div className="row ans_part hide" data-toggle="buttons">
                                                        {dailyQuiz && dailyQuiz.question_id && dailyQuiz.options ? (
                                                            dailyQuiz.options.map((v, i) => (
                                                                <div className="col-lg-6 col-sm-12" key={i}>
                                                                    <button type="button" className="btn btn-warning btn-block ans_btn">
                                                                        <span id={`quiz_ans_${i + 1}`}>{v.option}</span>
                                                                        <input type="radio" name="options" id={`option${i + 1}`} autoComplete="off" value={v.option_id} />
                                                                    </button>
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <p>Loading or no data available</p>
                                                        )}
                                                    </div>
                                                    <button className="btn btn-success btn-block ans_btn text-center col-lg-3 mt-4 submit_btn " data-toggle="modal" data-target="#exampleModal" >Submit</button>

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