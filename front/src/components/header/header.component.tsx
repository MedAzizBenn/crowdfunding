
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
const HeaderComponent = () =>{
    const { t } = useTranslation();
    return (
    <>
        <header className="main_header_arae" dir={t("dir")}>
        <div className="topbar-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <ul className="topbar-list">

                            <li><a href="#!"><i className="fa fa-envelope"></i><span>contact@domain.com</span></a>
                            </li>
                            <li><a href="#!"><i className="fa fa-phone"></i><span>+011 234 567 89</span></a></li>
                            <li><a href="#!"><span>Faqs</span></a></li>
                            <li><a href="#!"onClick={() => changeLanguage("en")}><i className="flag-icon-tn"> </i></a></li>
                            <li><a href="#!" onClick={() => changeLanguage("ar")}><i className=""></i></a></li>
                            
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <ul className="topbar-list-right">
                            <li>
                                <a href="#!"><i className="fab fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#!"><i className="fab fa-twitter-square"></i></a>
                            </li>
                            <li>
                                <a href="#!"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#!"><i className="fab fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="navbar-area">
            <div className="main-responsive-nav">
                <div className="container">
                    <div className="main-responsive-menu">
                        <div className="logo">
                            <a href="index.html">
                                <img src="assets/img/logo.png" alt="logo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-navbar">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <a className="navbar-brand" href="index.html">
                            <img src="assets/img/logo.png" alt="logo"/>
                        </a>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="/" className="nav-link active">{t("Home")}</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/project" className="nav-link">
                                        {t("Projects")}
                                        {/* <i className="fas fa-angle-down"></i> */}
                                    </a>
                                    {/* <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="causes.html" className="nav-link"> {t("Projects")}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="cause-details.html" className="nav-link"> {t("Details")} </a>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        {t("Investments")}
                                        <i className="fas fa-angle-down"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="events.html" className="nav-link">{t("Investments")}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="event-details.html" className="nav-link">{t("Details")}</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        {t("Gallery")}
                                        <i className="fas fa-angle-down"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="gallery-grid.html" className="nav-link">{t("Gallery")} One</a>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a href="gallery-slider.html" className="nav-link">Gallery Two</a>
                                        </li> */}
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        {t("News")}
                                        <i className="fas fa-angle-down"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="news.html" className="nav-link">{t("News")}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="news-details.html" className="nav-link">{t("Details")}</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Pages
                                        <i className="fas fa-angle-down"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                         {/*<li className="nav-item">
                                            <a href="about.html" className="nav-link">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="make-donation.html" className="nav-link">Make Donation</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="testimonials.html" className="nav-link">Testimonials</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="volunter.html" className="nav-link">Volunter</a>
                                        </li>*/}
                                        <li className="nav-item">
                                            <a href="/login" className="nav-link">Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/register" className="nav-link">Register</a>
                                        </li>
                                          {/* <li className="nav-item">
                                            <a href="faqs.html" className="nav-link">FAQ</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="terms-service.html" className="nav-link">Terms Service</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="error.html" className="nav-link">404 Error</a>
                                        </li> */}
                                    </ul>
                                </li>
                                <li className="nav-item">
                                            <a href="/login" className="nav-link">Login</a>
                                        </li>
                            </ul>
                            <div className="others-options d-flex align-items-center">
                                <div className="option-item">
                                    <a href="#" className="search-box"> <img src="assets/img/icon/search_icon.png"
                                            alt="icon"/></a>
                                </div>
                                <div className="option-item">
                                    <a href="make-donation.html" className="btn btn_navber">{t("Donate")}</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="others-option-for-responsive">
                <div className="container">
                    <div className="dot-menu">
                        <div className="inner">
                            <div className="circle circle-one"></div>
                            <div className="circle circle-two"></div>
                            <div className="circle circle-three"></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="option-inner">
                            <div className="others-options d-flex align-items-center">
                                <div className="option-item">
                                    <a href="#" className="search-box"><i className="fas fa-search"></i></a>
                                </div>
                                <div className="option-item">
                                    <a href="make-donation.html" className="btn  btn_navber">Donate now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
        <div className="search-overlay" dir={t("dir")}>
        <div className="d-table">
            <div className="d-table-cell">
                <div className="search-overlay-layer"></div>
                <div className="search-overlay-layer"></div>
                <div className="search-overlay-layer"></div>
                <div className="search-overlay-close">
                    <span className="search-overlay-close-line"></span>
                    <span className="search-overlay-close-line"></span>
                </div>
                <div className="search-overlay-form">
                    <form>
                        <input type="text" className="input-search" placeholder="Search here..." />
                        <button type="button"><i className="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
        </div>
        <div className="preloader"dir={t("dir")}>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="lds-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}


export default HeaderComponent;