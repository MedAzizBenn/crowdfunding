import { useTranslation } from "react-i18next";
import "../translations/i18n";

const HomeComponent = () =>{
    const { t } = useTranslation();

    return (
        <>
    <section id="home_one_banner" dir={t("dir")}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="banner_one_text">
                        <h1><span><span className="color_big">Share</span> your love to</span>
                            make someone’s life better</h1>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a type and scrambled.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="banner_one_img">
                        <img src="assets/img/banner/banner.png" alt="img"/>
                        <div className="banner_element">
                            <img src="assets/img/banner/element-1.png" alt="icon" className="element_1 shape-1"/>
                            <img src="assets/img/banner/element-2.png" alt="icon" className="element_2 shape-2"/>
                            <img src="assets/img/banner/element-3.png" alt="icon" className="element_3 shape-3"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about_top_area" className="section_padding" dir={t("dir")}>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="about_top_boxed bg_one">
                        <div className="about_top_boxed_icon">
                            <img src="assets/img/icon/book.png" alt="img"/>
                        </div>
                        <div className="about_top_boxed_text">
                            <p>Donate for</p>
                            <h3>Children education</h3>
                            <a href="about.html">More details...</a>
                        </div>
                        <div className="about_top_boxed_vector">
                            <img src="assets/img/icon/round.png" alt="img"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="about_top_boxed bg_two">
                        <div className="about_top_boxed_icon">
                            <img src="assets/img/icon/paint.png" alt="img"/>
                        </div>
                        <div className="about_top_boxed_text">
                            <p>Donate for</p>
                            <h3>Clean mineral water</h3>
                            <a href="about.html">More details...</a>
                        </div>
                        <div className="about_top_boxed_vector">
                            <img src="assets/img/icon/round.png" alt="img"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="about_top_boxed bg_three">
                        <div className="about_top_boxed_icon">
                            <img src="assets/img/icon/heart.png" alt="img"/>
                        </div>
                        <div className="about_top_boxed_text">
                            <p>Donate for</p>
                            <h3>Surgery & treatment</h3>
                            <a href="about.html">More details...</a>
                        </div>
                        <div className="about_top_boxed_vector">
                            <img src="assets/img/icon/round.png" alt="img"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="about_top_boxed bg_four">
                        <div className="about_top_boxed_icon">
                            <img src="assets/img/icon/restaurant.png" alt="img"/>
                        </div>
                        <div className="about_top_boxed_text">
                            <p>Donate for</p>
                            <h3>Healthy & good food</h3>
                            <a href="about.html">More details...</a>
                        </div>
                        <div className="about_top_boxed_vector">
                            <img src="assets/img/icon/round.png" alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about_area" className="section_padding_bottom" dir={t("dir")}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="about_area_img">
                        <img src="assets/img/common/about.png" alt="img"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="about_area_main_text">
                        <div className="about_area_heading">
                            <img src="assets/img/icon/about.png" alt="img"/>
                            <h3>Welcome to Jago</h3>
                        </div>
                        <div className="about_area_heading_two">
                            <h2>A world where <span className="color_big_heading">poverty</span> <br />
                                will not exists</h2>
                            <h3>We are the largest crowdfunding</h3>
                        </div>
                        <div className="about_area_para">
                            <h5>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do
                                eiusmod tempor incididunt ut labore.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do
                                eiusmod tempor incididunt ut labore et simply free text dolore magna
                                aliqua lonm andhn.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do
                                eiusmod tempor incididunt ut labore et simply.</p>
                        </div>
                        <div className="about_vedio_area">
                            <a href="about.html" className="btn btn_theme btn_md">Learn more</a>
                            <a href="https://vimeo.com/45830194" className="vedio_btn popup-vimeo"><i
                                    className="fa fa-play"></i>How we work</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="trending_causes" className="section_after section_padding bg-color" dir={t("dir")}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="section_heading">
                        <h3>Trending causes</h3>
                        <h2> We are always where other people <span className="color_big_heading">need</span> help</h2>
                    </div>
                </div>
            </div>
            <div className="row" id="counter">
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="case_boxed_wrapper">
                        <div className="case_boxed_img">
                            <a href="causes.html"><img src="assets/img/causes/causes-1.png" alt="img"/></a>
                            <span className="causes_badge bg-theme">Food & water</span>
                        </div>
                        <div className="causes_boxed_text">
                            <div className="class-full causes_pro_bar progress_bar">
                                <div className="class-full-bar-box">
                                    <h3 className="h3-title">Goal: <span>$10,000</span></h3>
                                    <div className="class-full-bar-percent">
                                        <h2><span className="counting-data" data-count="85">0</span>
                                            <span>%</span>
                                        </h2>
                                    </div>
                                    <div className="skill-bar class-bar" data-width="85%">
                                        <div className="skill-bar-inner class-bar-in"></div>
                                    </div>
                                </div>
                            </div>
                            <h3><a href="causes.html">Collect fund for drinking water & healthy food</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur notted
                                adipisicing elit sed do eiusmod tempor.</p>
                            <div className="causes_boxed_bottom_wrapper">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="casuses_bottom_boxed">
                                            <div className="casuses_bottom_icon">
                                                <img src="assets/img/icon/cal.png" alt="icon"/>
                                            </div>
                                            <div className="casuses_bottom_content">
                                                <h5>Date:</h5>
                                                <p>20 Dec, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="casuses_bottom_boxed casuses_left_padding">
                                            <div className="casuses_bottom_icon">
                                                <img src="assets/img/icon/user.png" alt="icon"/>
                                            </div>
                                            <div className="casuses_bottom_content">
                                                <h5>By:</h5>
                                                <p>Admin</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="case_boxed_wrapper">
                        <div className="case_boxed_img">
                            <a href="causes.html"><img src="assets/img/causes/causes-2.png" alt="img"/></a>
                            <span className="causes_badge bg-yellow">Education</span>
                        </div>
                        <div className="causes_boxed_text">
                            <div className="class-full causes_pro_bar progress_bar">
                                <div className="class-full-bar-box">
                                    <h3 className="h3-title">Goal: <span>$45,000</span></h3>
                                    <div className="class-full-bar-percent">
                                        <h2><span className="counting-data" data-count="45">0</span>
                                            <span>%</span>
                                        </h2>
                                    </div>
                                    <div className="skill-bar class-bar" data-width="45%">
                                        <div className="skill-bar-inner class-bar-in"></div>
                                    </div>
                                </div>
                            </div>
                            <h3><a href="causes.html">Give children a good education
                                    & better life</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur notted
                                adipisicing elit sed do eiusmod tempor.</p>
                            <div className="causes_boxed_bottom_wrapper">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="casuses_bottom_boxed">
                                            <div className="casuses_bottom_icon">
                                                <img src="assets/img/icon/cal.png" alt="icon"/>
                                            </div>
                                            <div className="casuses_bottom_content">
                                                <h5>Date:</h5>
                                                <p>20 Dec, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="casuses_bottom_boxed casuses_left_padding">
                                            <div className="casuses_bottom_icon">
                                                <img src="assets/img/icon/user.png" alt="icon"/>
                                            </div>
                                            <div className="casuses_bottom_content">
                                                <h5>By:</h5>
                                                <p>Admin</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="case_boxed_wrapper">
                        <div className="case_boxed_img">
                            <a href="causes.html"><img src="assets/img/causes/causes-3.png" alt="img"/></a>
                            <span className="causes_badge bg-theme">Home & shelter</span>
                        </div>
                        <div className="causes_boxed_text">
                            <div className="class-full causes_pro_bar progress_bar">
                                <div className="class-full-bar-box">
                                    <h3 className="h3-title">Goal: <span>$14,000</span></h3>
                                    <div className="class-full-bar-percent">
                                        <h2><span className="counting-data" data-count="55">0</span>
                                            <span>%</span>
                                        </h2>
                                    </div>
                                    <div className="skill-bar class-bar" data-width="55%">
                                        <div className="skill-bar-inner class-bar-in"></div>
                                    </div>
                                </div>
                            </div>
                            <h3><a href="causes.html">Collect fund for drinking water & healthy food</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur notted
                                adipisicing elit sed do eiusmod tempor.</p>
                            <div className="causes_boxed_bottom_wrapper">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="casuses_bottom_boxed">
                                            <div className="casuses_bottom_icon">
                                                <img src="assets/img/icon/cal.png" alt="icon"/>
                                            </div>
                                            <div className="casuses_bottom_content">
                                                <h5>Date:</h5>
                                                <p>20 Dec, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="casuses_bottom_boxed casuses_left_padding">
                                            <div className="casuses_bottom_icon">
                                                <img src="assets/img/icon/user.png" alt="icon"/>
                                            </div>
                                            <div className="casuses_bottom_content">
                                                <h5>By:</h5>
                                                <p>Admin</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="upcoming_events" className="section_padding_bottom" dir={t("dir")}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="section_heading">
                        <h3>Upcoming events</h3>
                        <h2>Join our upcoming
                            <span className="color_big_heading">events</span> for contribution
                        </h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="event_left_side_wrapper">
                        <div className="event_big_img">
                            <a href="event-detail.html"><img src="assets/img/event/event-big.png" alt="img"/></a>
                        </div>
                        <div className="event_content_area big_content_padding">
                            <div className="event_tag_area">
                                <a href="event.html">#FoodCamp</a>
                            </div>
                            <div className="event_heading_area">
                                <div className="event_heading">
                                    <h3><a href="event-details.html">Healthy food and nutritions awreness campaign
                                            december</a></h3>
                                </div>
                                <div className="event_date">
                                    <img src="assets/img/icon/date.png" alt="icon"/>
                                    <h6>20 <span>Dec</span></h6>
                                </div>
                            </div>
                            <div className="event_para">
                                <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                    tempor. Lorem ipsum dolor sit amet, consectetur notted duber
                                    adipisicing elit sed do eiusmod tempor.</p>
                            </div>
                            <div className="event_boxed_bottom_wrapper">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="event_bottom_boxed">
                                            <div className="event_bottom_icon">
                                                <img src="assets/img/icon/map.png" alt="icon"/>
                                            </div>
                                            <div className="event_bottom_content">
                                                <h5>Location:</h5>
                                                <p>Montgomery, Alabama.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="event_bottom_boxed">
                                            <div className="event_bottom_icon">
                                                <img src="assets/img/icon/clock.png" alt="icon"/>
                                            </div>
                                            <div className="event_bottom_content">
                                                <h5>Starts at:</h5>
                                                <p>10 am</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="event_button">
                                <a href="event-details.html" className="btn btn_md btn_theme">Join event</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="event_left_side_wrapper">
                        <div className="event_content_area small_content_padding">
                            <div className="event_tag_area">
                                <a href="event.html">#FoodCamp</a>
                            </div>
                            <div className="event_heading_area">
                                <div className="event_heading">
                                    <h3><a href="event-details.html">Run for the senior citizens.</a></h3>
                                </div>
                                <div className="event_date">
                                    <img src="assets/img/icon/date.png" alt="icon"/>
                                    <h6>20 <span>Dec</span></h6>
                                </div>
                            </div>
                            <div className="event_para">
                                <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                    tempor. Lorem ipsum dolor sitr.</p>
                            </div>
                            <div className="event_boxed_bottom_wrapper">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="event_bottom_boxed">
                                            <div className="event_bottom_icon">
                                                <img src="assets/img/icon/map.png" alt="icon"/>
                                            </div>
                                            <div className="event_bottom_content">
                                                <h5>Location:</h5>
                                                <p>Montgomery, Alabama.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="event_bottom_boxed">
                                            <div className="event_bottom_icon">
                                                <img src="assets/img/icon/clock.png" alt="icon"/>
                                            </div>
                                            <div className="event_bottom_content">
                                                <h5>Starts at:</h5>
                                                <p>10 am</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="event_left_side_wrapper">
                        <div className="event_content_area small_content_padding">
                            <div className="event_tag_area">
                                <a href="event.html">#FoodCamp</a>
                            </div>
                            <div className="event_heading_area">
                                <div className="event_heading">
                                    <h3><a href="event-details.html">Run for the senior citizens.</a></h3>
                                </div>
                                <div className="event_date">
                                    <img src="assets/img/icon/date.png" alt="icon"/>
                                    <h6>20 <span>Dec</span></h6>
                                </div>
                            </div>
                            <div className="event_para">
                                <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                    tempor. Lorem ipsum dolor sitr.</p>
                            </div>
                            <div className="event_boxed_bottom_wrapper">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="event_bottom_boxed">
                                            <div className="event_bottom_icon">
                                                <img src="assets/img/icon/map.png" alt="icon"/>
                                            </div>
                                            <div className="event_bottom_content">
                                                <h5>Location:</h5>
                                                <p>Montgomery, Alabama.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="event_bottom_boxed">
                                            <div className="event_bottom_icon">
                                                <img src="assets/img/icon/clock.png" alt="icon"/>
                                            </div>
                                            <div className="event_bottom_content">
                                                <h5>Starts at:</h5>
                                                <p>10 am</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="event_left_side_wrapper">
                        <div className="event_content_area small_content_padding">
                            <div className="event_tag_area">
                                <a href="event.html">#FoodCamp</a>
                            </div>
                            <div className="event_heading_area">
                                <div className="event_heading">
                                    <h3><a href="event-details.html">Run for the senior citizens.</a></h3>
                                </div>
                                <div className="event_date">
                                    <img src="assets/img/icon/date.png" alt="icon"/>
                                    <h6>20 <span>Dec</span></h6>
                                </div>
                            </div>
                            <div className="event_para">
                                <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                    tempor. Lorem ipsum dolor sitr.</p>
                            </div>
                            <div className="event_boxed_bottom_wrapper">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="event_bottom_boxed">
                                            <div className="event_bottom_icon">
                                                <img src="assets/img/icon/map.png" alt="icon"/>
                                            </div>
                                            <div className="event_bottom_content">
                                                <h5>Location:</h5>
                                                <p>Montgomery, Alabama.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="event_bottom_boxed">
                                            <div className="event_bottom_icon">
                                                <img src="assets/img/icon/clock.png" alt="icon"/>
                                            </div>
                                            <div className="event_bottom_content">
                                                <h5>Starts at:</h5>
                                                <p>10 am</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="donate_area" dir={t("dir")}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="donate_text">
                        <h3>We are here to stop poverty</h3>
                        <h2>
                            We are fundraising for the <span className="color_big_heading">people</span> who are
                            fighting against poverty
                        </h2>
                        <a href="make-donation.html" className="btn btn_md btn_theme">Donate now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="partner_area" dir={t("dir")}>
        <h2 className="d-none">Heading</h2>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="partner_slider_wrapper owl-theme owl-carousel">
                        <div className="partner_logo">
                            <a href="#!"><img src="assets/img/partner/logo-1.png" alt="img"/></a>
                        </div>
                        <div className="partner_logo">
                            <a href="#!"><img src="assets/img/partner/logo-2.png" alt="img"/></a>
                        </div>
                        <div className="partner_logo">
                            <a href="#!"><img src="assets/img/partner/logo-3.png" alt="img"/></a>
                        </div>
                        <div className="partner_logo">
                            <a href="#!"><img src="assets/img/partner/logo-4.png" alt="img"/></a>
                        </div>
                        <div className="partner_logo">
                            <a href="#!"><img src="assets/img/partner/logo-5.png" alt="img"/></a>
                        </div>
                        <div className="partner_logo">
                            <a href="#!"><img src="assets/img/partner/logo-6.png" alt="img"/></a>
                        </div>
                        <div className="partner_logo">
                            <a href="#!"><img src="assets/img/partner/logo-7.png" alt="img"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="counter_area" dir={t("dir")}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="counter_area_wrapper">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="counter_item">
                                    <img src="assets/img/icon/camp2.png" alt="icon"/>
                                    <h2 className="counter">2348</h2>
                                    <p>Total campaign</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="counter_item">
                                    <img src="assets/img/icon/hand.png" alt="icon"/>
                                    <h2 className="counter">1785</h2>
                                    <p>Satisfied donors</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="counter_item">
                                    <img src="assets/img/icon/mone.png" alt="icon"/>
                                    <h2 className="counter">4287</h2>
                                    <p>Fund raised</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="counter_item">
                                    <img src="assets/img/icon/camp.png" alt="icon"/>
                                    <h2 className="counter">1294</h2>
                                    <p>Happy volunteers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="home_blog_area" className="section_after bg-color" dir={t("dir")}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="section_heading">
                        <h3>Our latest news</h3>
                        <h2>Check all
                            <span className="color_big_heading">our latest</span> news
                            and updates
                        </h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="blog_card_wrapper">
                        <div className="blog_card_img">
                            <a href="news-details.html"><img src="assets/img/blog/blog-1.png" alt="img"/></a>
                        </div>
                        <div className="blog_card_text">
                            <div className="blog_card_tags">
                                <a href="news.html">#Nutrition</a>
                            </div>
                            <div className="blog_card_heading">
                                <h3><a href="news-details.html">Healthy food and nutrition among
                                        all the children</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod...</p>
                            </div>
                            <div className="blog_boxed_bottom_wrapper">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="blog_bottom_boxed">
                                            <div className="blog_bottom_icon">
                                                <img src="assets/img/icon/cal.png" alt="icon"/>
                                            </div>
                                            <div className="blog_bottom_content">
                                                <h5>Date:</h5>
                                                <p>20 Dec, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="blog_bottom_boxed blog_left_padding">
                                            <div className="blog_bottom_icon">
                                                <img src="assets/img/icon/user.png" alt="icon"/>
                                            </div>
                                            <div className="blog_bottom_content">
                                                <h5>By:</h5>
                                                <p>Admin</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog_card_wrapper">
                        <div className="blog_card_img">
                            <a href="news-details.html"><img src="assets/img/blog/blog-2.png" alt="img"/></a>
                        </div>
                        <div className="blog_card_text">
                            <div className="blog_card_tags">
                                <a href="news.html">#Education</a>
                            </div>
                            <div className="blog_card_heading">
                                <h3><a href="news-details.html">New era for children learning and
                                        remove discrimination</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod...</p>
                            </div>
                            <div className="blog_boxed_bottom_wrapper">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="blog_bottom_boxed">
                                            <div className="blog_bottom_icon">
                                                <img src="assets/img/icon/cal.png" alt="icon"/>
                                            </div>
                                            <div className="blog_bottom_content">
                                                <h5>Date:</h5>
                                                <p>20 Dec, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="blog_bottom_boxed blog_left_padding">
                                            <div className="blog_bottom_icon">
                                                <img src="assets/img/icon/user.png" alt="icon"/>
                                            </div>
                                            <div className="blog_bottom_content">
                                                <h5>By:</h5>
                                                <p>Admin</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog_card_wrapper">
                        <div className="blog_card_img">
                            <a href="news-details.html"><img src="assets/img/blog/blog-3.png" alt="img"/></a>
                        </div>
                        <div className="blog_card_text">
                            <div className="blog_card_tags">
                                <a href="news.html">#Water</a>
                            </div>
                            <div className="blog_card_heading">
                                <h3><a href="news-details.html">Ensure pure and mineral drinking
                                        water for rural people</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod...</p>
                            </div>
                            <div className="blog_boxed_bottom_wrapper">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="blog_bottom_boxed">
                                            <div className="blog_bottom_icon">
                                                <img src="assets/img/icon/cal.png" alt="icon"/>
                                            </div>
                                            <div className="blog_bottom_content">
                                                <h5>Date:</h5>
                                                <p>20 Dec, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="blog_bottom_boxed blog_left_padding">
                                            <div className="blog_bottom_icon">
                                                <img src="assets/img/icon/user.png" alt="icon"/>
                                            </div>
                                            <div className="blog_bottom_content">
                                                <h5>By:</h5>
                                                <p>Admin</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section id="subscribe_area" dir={t("dir")}>
        <div className="container">
            <div className="subscribe_wrapper">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="subscribe_text">
                            <p>Newsletter</p>
                            <h3>To get weekly & monthly news,
                                <span className="color_big_heading">Subscribe</span> to our newsletter.
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cta_right_side">
                            <form action="#!" id="subscribe_form">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Your mail address"/>
                                    <button className="btn btn_theme btn_md" type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
    );
}

export default HomeComponent