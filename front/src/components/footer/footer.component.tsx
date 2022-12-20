
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

const FooterComponent = () => {
    const { t } = useTranslation();

    return (
        <>
        <footer id="footer_area" dir={t("dir")}>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="footer_area_about">
                        <img src="assets/img/logo.png" alt="img" />
                        <p>Lorem ipsum dolor sit amet consec elit sed eiusmod tempor incididunt ut labore etdolore magna
                            aliqua.</p>
                        <h6><strong>Address:</strong> 858 Walnutwood Ave. Webster, NY 14580</h6>
                        <h6><strong>Phone:</strong> <a href="tel:123-284-2554">+011 234-567-890</a></h6>
                        <h6><strong>Email:</strong> <a href="mailto:info@example.com">info@example.com</a></h6>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                    <div className="footer_navitem_ara">
                        <h3>Quick links</h3>
                        <div className="nav_item_footer">
                            <ul>
                                <li><a href="about.html">About us</a></li>
                                <li><a href="causes.html">Services</a></li>
                                <li><a href="events.html">Projects</a></li>
                                <li><a href="news.html">News</a></li>
                                <li><a href="about.html">Career</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                    <div className="footer_navitem_ara">
                        <h3>Support</h3>
                        <div className="nav_item_footer">
                            <ul>
                                <li><a href="faqs.html">Help & FAQ</a></li>
                                <li><a href="causes.html">Causes</a></li>
                                <li><a href="events.html">Events</a></li>
                                <li><a href="contact.html">Contact us</a></li>
                                <li><a href="terms-service.html">Terms of service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="footer_navitem_ara">
                        <h3>Latest tweets</h3>
                        <div className="footer_twitter_area">
                            <a href="#!" className="footer_twit_title"><i className="fab fa-twitter"></i> #digitalmarketing</a>
                            <p>Lorem ipsum dolor sit amet consec elit sed eiusmod tempor incididunt ut labore etdolore
                                magna aliqua. Sit amet consec elit sed eiusmod tempor</p>
                            <a href="#!" className="footer_twit_two">twitter.com/i/#puredrinkingwater</a>
                            <h6>December 13, 2021 04:20 PM</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright_area">
        <div className="container">
            <div className="row align-items-center">
                <div className="co-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="copyright_left">
                        <p>Copyright © 2022 All Rights Reserved</p>
                    </div>
                </div>
                <div className="co-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="copyright_right">
                        <ul>
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
    </div>
        </footer>
        </>
    );
}

export default FooterComponent;