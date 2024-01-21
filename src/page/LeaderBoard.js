import Header from "./Header";
// import FooterTwo from "./FooterTwo";
import Footer from "./Footer";
export default function LeaderBoard() {
    return (
        <>
        
            <Header />
            <div className="wrapper bg-opacity-default">
                <div className="rev_slider_wrapper fullwidth-container dark-spinner">
                    <div className="container inner text-center">
                        <div className="space40"></div>
                        <h1 className="page-title">Leader Board</h1>
                    </div>
                </div>
                {/* <!-- /.rev_slider_wrapper --> */}
            </div>

            <div className="wrapper white-wrapper">
                <div className="container inner">
                    <table className="table table-bordered data-table">
                        <thead>
                            <tr>

                                <th style={{ width: '50%' }} className="text-left">Quiz No</th>
                                <th style={{ width: '50%' }}>Total Correct Answerer</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td style={{ width: '50%' }} className="text-left">2</td>
                                <td style={{ width: '50%' }}>7</td>

                            </tr>
                            <tr>

                                <td style={{ width: '50%' }} className="text-left">3</td>
                                <td style={{ width: '50%' }}>5</td>

                            </tr>
                            <tr>

                                <td style={{ width: '50%' }} className="text-left">1</td>
                                <td style={{ width: '50%' }}>2</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <!-- /.container --> */}
            </div>


            <Footer />

        </>
    )
}