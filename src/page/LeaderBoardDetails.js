import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Preloader from "./Preloader";

export default function LeaderBoardDetails() {
    const [Quiz, setQuizList] = useState({});
    const [busy, setBusy] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/all-quiz-answer-list')
            .then(response => response.json())
            .then(data => setQuizList(data.data))
            .catch(error => console.error('Error fetching data:', error))
            .finally(() => setBusy(false));

    }, []);
    if (busy) {
        return <Preloader />
    } else {
    return (
        <>
            <Header />
            <div className="wrapper bg-opacity-default">
                <div className="rev_slider_wrapper fullwidth-container dark-spinner">
                    <div className="container inner text-center">
                        <div className="space40"></div>
                        <h1 className="page-title">Answer Giver List</h1>
                    </div>
                </div>
            </div>

            <div className="wrapper white-wrapper">
                <div className="container inner">
                    <table className="table table-bordered data-table">
                        <thead>
                            <tr>
                                <th style={{ width: '50%' }} className="text-left">User ID</th>
                                <th style={{ width: '50%' }}>User Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(Quiz).length > 0 ? (
                                Object.keys(Quiz).map(quizNumber => (
                                    <tr key={quizNumber}>
                                        <td style={{ width: '50%' }} className="text-left">{Quiz[quizNumber].quiz_number}</td>
                                        <td style={{ width: '50%' }}><a href="#">{Quiz[quizNumber].total_correct_answers}</a></td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2">Loading or no data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
}
}
