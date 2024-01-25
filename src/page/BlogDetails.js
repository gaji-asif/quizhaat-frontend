import Header from "./Header";
// import FooterTwo from "./FooterTwo";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Preloader from "./Preloader";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function BlogDetails() {
    const [Blogs, setBlogs] = useState([])
    const [busy, setBusy] = useState(true)
    const { id } = useParams();
    const [blogDetails, setBlogDetails] = useState({});
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/blog-short')
            .then(response => response.json())
            .then(data => setBlogs(data.blogs))
            .then(() => setBusy(false))

    }, [])
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/blog-details/${id}`)
            .then(response => response.json())
            .then(data => setBlogDetails(data.blogs))
            .then(() => setBusy(false));
    }, [id]);
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
                    <div className="container inner pt-80" style={{ paddingBottom: '0px !important' }}>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="blog classic-view">
                                    <div className="post mb-0">
                                        <figure className="rounded"><img src={'http://127.0.0.1:8000/uploads/blog/' + blogDetails.thumbnail} alt="" /></figure>
                                        <div className="space40"></div>
                                        <div className="post-content">
                                            <div className="category text-center"><a href="#"
                                                className="badge badge-pill bg-purple">{blogDetails.category}</a></div>
                                            <h2 className="post-title text-center">{blogDetails.title}</h2>
                                            <div className="meta text-center"><span className="date"><i
                                                className="jam jam-clock"></i>{blogDetails.date}</span><span
                                                    className="author"><i className="jam jam-user"></i><a href="#">By
                                                        {blogDetails.created_by} {/* {{ isset($blog-> createdUser) ? $blog->createdUser->full_name : '' }} */}
                                                    </a></span>
                                            </div>
                                            {blogDetails.details}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* others blogs */}
                <div className="wrapper light-wrapper">
                    <div className="container inner" style={{ paddingTop: '50px !important' }}>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <h3 className="mb-30">You Might Also Like</h3>
                                <div className="grid-view">
                                    <div className="carousel owl-carousel owl-loaded owl-drag" data-margin="30" data-dots="true"
                                        data-autoplay="false" data-autoplay-timeout="5000"
                                        data-responsive="{&quot;0&quot;:{&quot;items&quot;: &quot;1&quot;}, &quot;768&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;992&quot;:{&quot;items&quot;: &quot;3&quot;}}">


                                        <div className="owl-stage-outer">
                                            <div className="owl-stage"
                                                style={{ transform: 'translate3d(-650px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '1625px' }}>

                                                {/* @foreach ($blogs as $blog) */}
                                                {Blogs ? (
                                                    Blogs.map((v, i) => {
                                                        if (v.id !== blogDetails.id && i < 5) {
                                                            return (
                                                                <div className="owl-item" style={{ width: '295px', marginRight: '30px' }} key={i}>
                                                                    <div className="item">
                                                                        <Link to={`/blog-details/${v.id}`}>
                                                                            <figure className="overlay overlay1 rounded mb-30">
                                                                                <Link to={`/blog-details/${v.id}`}>
                                                                                    <span className="bg"></span> <img src={'http://127.0.0.1:8000/uploads/blog/' + v.thumbnail} alt="" width="295px" height="196px" />
                                                                                </Link>
                                                                                <figcaption>
                                                                                    <h5 className="from-top mb-0">Read More</h5>
                                                                                </figcaption>
                                                                            </figure>
                                                                        </Link>
                                                                        <div className="category"><a href="#" className="badge badge-pill bg-purple">{v.category}</a></div>
                                                                        <h2 className="post-title">
                                                                            <Link to={`/blog-details/${v.id}`}>{v.blogtitle}</Link>
                                                                        </h2>
                                                                        <div className="meta mb-0"><span className="date"><i className="jam jam-clock"></i>{v.date}</span></div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                        return null; // Make sure to include this line
                                                    })
                                                ) : (
                                                    <p>Loading or no data available</p>
                                                )}

                                                {/* @endforeach */}


                                            </div>
                                        </div>
                                        <div className="owl-nav disabled"><button type="button" role="presentation"
                                            className="owl-prev"><span aria-label="Previous">‹</span></button><button
                                                type="button" role="presentation" className="owl-next"><span
                                                    aria-label="Next">›</span></button></div>
                                        <div className="owl-dots">
                                            <button role="button" className="owl-dot active"><span></span></button>
                                            <button role="button" className="owl-dot"><span></span></button>
                                            <button role="button" className="owl-dot "><span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Footer />

            </>
        )
    }

}