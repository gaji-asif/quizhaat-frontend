import Header from "./Header";
// import FooterTwo from "./FooterTwo";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Preloader from "./Preloader";
import {Link} from 'react-router-dom';
import axios from "axios";
const Blog = () => {
    const [Blogs, setBlogs] = useState([])
    const [busy, setBusy] = useState(true);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/blog-short')
            .then(response => response.json())
            .then(data => setBlogs(data.data))
            .then(() => setBusy(false))

    }, [])
    // axios.get('http://127.0.0.1:8000/api/blog-short')
    // .then(data => setBlogs(data.data))
    // .then(() => setBusy(false))
    // console.log(typeof(Blogs));
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
                            <h1 className="page-title">Blogs</h1>
                        </div>
                    </div>
                    {/* <!-- /.rev_slider_wrapper --> */}
                </div>

                <div className="wrapper light-wrapper">
                    <div className="container inner">
                        <div className="blog grid grid-view">
                            <div className="row isotope" style={{ position: 'relative', height: '2400px' }}>
                                {Blogs ? (
                                    Blogs.map((v, i) => (
                                        <div className="item post grid-sizer col-md-6 col-lg-4 p-3" key={i}>

                                            <Link to={`/blog-details/${v.id}`} >
                                                <figure className="overlay overlay1 rounded mb-30">
                                                <Link to={`/blog-details/${v.id}`} >
                                                        <span className="bg"></span> <img src={'http://127.0.0.1:8000/uploads/blog/' + v.thumbnail} alt="" width="360px" height="240px" />
                                                    </Link>
                                                    <figcaption>
                                                        <h5 className="from-top mb-0">Read More</h5>
                                                    </figcaption>
                                                </figure>
                                            </Link>
                                            <div className="category">
                                                <a href="#" className="badge badge-pill bg-purple">{v.category}</a>
                                            </div>
                                            <h2 className="post-title">
                                                <Link to={`/blog-details/${v.id}`} >{v.blogtitle}</Link>
                                            </h2>
                                            <div className="post-content">
                                                <p>This is short details </p>
                                            </div>
                                            <div className="meta mb-0"><span className="date"><i className="jam jam-clock"></i>{v.date}</span></div>
                                        </div>
                                    ))
                                ) : (
                                    <p>Loading or no data available</p>
                                )}



                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </>
        )
    }

}
export default Blog