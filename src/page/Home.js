import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import Preloader from "./Preloader";

const Home = () => {
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        // Simulate a 5-second delay
        const delay = setTimeout(() => {
            setShowComponent(true);
        }, 2000);

        // Clear the timeout to prevent memory leaks
        return () => clearTimeout(delay);
    }, []);
    
    return (
        <>
            {/* Render preloader while waiting */}
            {!showComponent ? (
                <Preloader />
            ) : (
                // Render the Home component after the delay
                <>
                    {/* // @include('web.partials.header') */}
                    <Header />

                    {/* // <!-- /.navbar --> */}

                    {/* // <!-- /.offcanvas-info --> */}
                    <div className="wrapper bg-opacity-default">
                        <div className="rev_slider_wrapper fullwidth-container dark-spinner">
                            <div id="slider7" className="rev_slider fullwidthbanner" data-version="5.4.7">
                                <ul>
                                    <li data-transition="fade" data-thumb=""><img src="style/images/dummy.png" alt="" />
                                        <div className="tp-caption"
                                            data-x="['center','center','center','center']"
                                            data-y="['bottom','bottom','bottom','bottom']"
                                            data-hoffset="['0','0','0','0']"
                                            data-voffset="['-2','-2','-2','-2']"
                                            data-frames='[{"delay":0,"speed":1200,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                            data-visibility="['on','on','on','on']"
                                            data-width="none"
                                            data-height="none"
                                            data-type="image"
                                            data-responsive="on"
                                            data-responsive_offset="on"
                                            data-basealign="slide" ><img
                                                data-lazyload="" src="/assets/style/images/art/rocket1.png"
                                                data-ww="['100%','100%','100%','100%']"
                                                data-hh="auto" alt="" />
                                        </div>
                                        {/* <!-- /.tp-caption --> */}
                                        <div className="tp-caption"
                                            data-x="['center','center','center','center']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-hoffset="['260','260','260','260']"
                                            data-voffset="['60','60','60','60']"
                                            data-frames='[{"delay":600,"speed":1200,"frame":"0","from":"y:bottom;rX:90deg;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                            data-visibility="['on','on','on','off']"
                                            data-width="none"
                                            data-height="none"
                                            data-type="image"
                                            data-responsive="on"
                                            data-responsive_offset="on"
                                            data-basealign="slide"><img
                                                data-lazyload="" src="/assets/style/images/art/rocket2.png"
                                                data-ww="['220','220','220','220']"
                                                data-hh="auto" alt="" />
                                        </div>
                                        {/* <!-- /.tp-caption --> */}
                                        <div className="tp-caption"
                                            data-x="['center','center','center','center']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-hoffset="['260','260','260','260']"
                                            data-voffset="['-170','-170','-170','-170']"
                                            data-frames='[{"delay":0,"speed":1200,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                            data-visibility="['on','on','on','off']"
                                            data-width="none"
                                            data-height="none"
                                            data-type="image"
                                            data-responsive="on"
                                            data-responsive_offset="on"
                                            data-basealign="slide"><img
                                                data-lazyload="" src="/assets/style/images/art/rocket3.png"
                                                data-ww="['380','380','380','380']"
                                                data-hh="auto" alt="" />
                                        </div>
                                        {/* <!-- /.tp-caption --> */}
                                        <div className="tp-caption"
                                            data-x="['center','center','center','center']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-hoffset="['300','300','300','300']"
                                            data-voffset="['70','70','70','70']"
                                            data-frames='[{"delay":0,"speed":1200,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                            data-visibility="['on','on','on','off']"
                                            data-width="none"
                                            data-height="none"
                                            data-type="image"
                                            data-responsive="on"
                                            data-responsive_offset="on"
                                            data-basealign="slide" ><img
                                                data-lazyload="" src="/assets/style/images/art/rocket4.png"
                                                data-ww="['480','480','480','480']"
                                                data-hh="auto" alt="" />
                                        </div>
                                        {/* <!-- /.tp-caption --> */}
                                        <div className="tp-caption font-weight-500 color-dark"
                                            data-x="['left','left','left','center']"
                                            data-y="middle"
                                            data-hoffset="['50','30','30','0']"
                                            data-voffset="['-125','-125','-125','-105']"
                                            data-fontsize="['34','34','34','34']"
                                            data-lineheight="['50','50','44','46']"
                                            data-width="['500','500','420','340']"
                                            data-textAlign="['left','left','left','center']"
                                            data-whitespace="['normal','normal','normal','normal']"
                                            data-frames='[{"delay":1000,"speed":1200,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                            data-responsive="on"
                                            data-responsive_offset="on">
                                            প্রতিদিন আমাদের কুইজে অংশগ্রহণ করে জিতে নিতে পার
                                            <font >নগদ টাকা</font>  এবং
                                            <font >মোবাইল ব্যালান্স</font>

                                        </div>
                                        {/* <!-- /.tp-caption --> */}
                                        <div className="tp-caption font-weight-300 color-dark"
                                            data-x="['left','left','left','center']"
                                            data-y="middle"
                                            data-hoffset="['50','30','30','0']"
                                            data-voffset="['-20','-20','-20','30']"
                                            data-fontsize="['26','26','22','24']"
                                            data-lineheight="['36','36','32','34']"
                                            data-width="['500','500','420','340']"
                                            data-textAlign="['left','left','left','center']"
                                            data-whitespace="['normal','normal','normal','normal']"
                                            data-frames='[{"delay":1500,"speed":1200,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                            data-responsive="on"
                                            data-responsive_offset="on" >
                                            {/* <!-- We help our clients to increase their website traffic, rankings and visibility in search results. --> */}
                                        </div>
                                        {/* <!-- /.tp-caption --> */}
                                        <a className="tp-caption btn btn-l btn-default"
                                            data-x="['left','left','left','center']"
                                            data-y="middle"
                                            data-hoffset="['50','30','30','0']"
                                            data-voffset="['75','75','75','135']"
                                            data-width="['auto','auto','auto','auto']"
                                            data-textAlign="['left','left','left','center']"
                                            data-frames='[{"delay":2000,"speed":1200,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                            data-responsive="on"
                                            data-responsive_offset="on" href="#">অংশগ্রহণ কর
                                        </a>
                                        {/* <!-- /.tp-caption --> */}
                                    </li>
                                </ul>
                                <div className="tp-bannertimer tp-bottom"></div>
                            </div>
                            {/* <!-- /.rev_slider --> */}
                        </div>
                        {/* <!-- /.rev_slider_wrapper --> */}
                    </div>
                    {/* // <!-- /.wrapper --> */}



                    <div className="wrapper white-wrapper">
                        <div className="container inner pt-100">
                            {/* <!-- <h2 className="title-color color-gray text-center">What We Do?</h2> --> */}
                            <h3 className="display-3 text-center">কিভাবে কুইজ হাট কাজ করে ?
                                {/* <!-- <br className="d-none d-lg-block" />designed to meet your business needs. --> */}
                            </h3>
                            <div className="space40"></div>
                            <div className="row text-center gutter-60">
                                <div className="col-md-6 col-lg-3">
                                    <div className="icon icon-blob icon-blob-rose color-rose mb-20"> <i className="jam jam-search"></i> </div>
                                    <h5>নুতুন একাউন্ট খুলুন</h5>
                                    <p>রেজিস্টার এ গিয়ে আপনার ইনফরমেশন দিন এবং সাবমিট করুন</p>
                                </div>
                                {/* <!--/column --> */}
                                <div className="col-md-6 col-lg-3">
                                    <div className="icon icon-blob icon-blob-blue color-blue mb-20"> <i className="jam jam-layout"></i> </div>
                                    <h5>লগিন করুন</h5>
                                    <p>আমাদের লগিন পেজ এ গিয়ে লগিন করুন</p>
                                </div>
                                {/* <!--/column --> */}
                                <div className="space30 d-none d-md-block d-lg-none"></div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="icon icon-blob icon-blob-green color-green mb-20"> <i className="jam jam-share-alt"></i> </div>
                                    <h5>ক্যাটাগরি নির্বাচন করুন</h5>
                                    <p>কুইজ এ অংশগ্রহণ এর জন্য বিষয় নির্বাচন করুন</p>
                                </div>
                                {/* <!--/column --> */}
                                <div className="col-md-6 col-lg-3">
                                    <div className="icon icon-blob icon-blob-purple color-purple mb-20"> <i className="jam jam-task-list"></i> </div>
                                    <h5>কুইজ এ অংশ নিন</h5>
                                    <p>সঠিক উত্তর সিলেক্ট করে কুইজ এর উত্তর দিন</p>
                                </div>
                                {/* <!--/column --> */}
                            </div>
                            {/* <!--/.row --> */}
                            <div className="space140"></div>
                            <div className="gray-wrapper row">
                                <div className="container">
                                    {/* <!--  <h2 className="section-title mb-40 text-center">Boxed Counter with Icons</h2> --> */}
                                    <div className="row counter">
                                        <div className="col-md-6 col-lg-3 text-center">
                                            <div className="box bg-white shadow">
                                                <div className="icon icon-svg mb-20"><img
                                                    src="/assets/style/images/icons/hs-check.png" alt="" /></div>
                                                <h3 className="value">55</h3>
                                                <p>অংশগ্রহণকারী</p>
                                            </div>
                                            {/* <!--/.box --> */}
                                        </div>
                                        {/* <!--/column --> */}
                                        <div className="col-md-6 col-lg-3 text-center">
                                            <div className="box bg-white shadow">
                                                <div className="icon icon-svg mb-20"><img
                                                    src="/assets/style/images/icons/st-handshake.png" alt="" /></div>
                                                <h3 className="value">50 </h3>
                                                <p>কুইজ </p>
                                            </div>
                                            {/* <!--/.box --> */}
                                        </div>
                                        {/* <!--/column --> */}
                                        <div className="space30 d-none d-md-block d-lg-none"></div>
                                        <div className="col-md-6 col-lg-3 text-center">
                                            <div className="box bg-white shadow">
                                                <div className="icon icon-svg mb-20">
                                                    <img src="/assets/style/images/icons/sm-develop.png" alt="" />
                                                </div>
                                                <h3 className="value">20</h3>
                                                <p>উত্তর দিয়েছেন</p>
                                            </div>
                                            {/* <!--/.box --> */}
                                        </div>
                                        {/* <!--/column --> */}
                                        <div className="col-md-6 col-lg-3 text-center">
                                            <div className="box bg-white shadow">
                                                <div className="icon icon-svg mb-20"><img
                                                    src="/assets/style/images/icons/ms-medal.png" alt="" /></div>
                                                <h3 className="value">15</h3>
                                                <p>ব্লগ</p>
                                            </div>
                                            {/* <!--/.box --> */}
                                        </div>
                                        {/* <!--/column --> */}
                                    </div>
                                    {/* <!--/.row --> */}
                                </div>
                                {/* <!-- /.container --> */}
                            </div>
                            {/* <!--/.row --> */}
                        </div>
                        {/* <!-- /.container --> */}
                    </div>
                    <Footer />
                    {/* @include('web.partials.footer') */}
                </>
            )}
        </>
    );
}

export default Home;