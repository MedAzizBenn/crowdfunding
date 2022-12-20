import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const DonationComponent = () => {
   
    const {idProject} = useParams();
    const [amount,setMontant] = useState();
    const [nom,setNom] = useState("");
    const[email,setEmail] = useState("");
    const[address,setAddress] = useState("");
    const [phone,setPhone] = useState("");
    const handleMontantChange =((event: any)=>{
        setMontant(event.target.value);
    })
    useEffect(() =>{
        fetchPorteur();
    },[]);
    const fetchPorteur = async() =>{
        const {data: response} = await axios.get(`http://localhost:3000/donator/63315c4e71c6ba59467a6390`);
        const donator = response.value;
        setNom(donator.name);
        setEmail(donator.email);
        setAddress(donator.gouvernorat)
        setPhone(donator.telephone);


    }
    const makeDonation = async() =>{

        await axios.post("http://localhost:3000/donation",{
            donator: "63315c4e71c6ba59467a6390",
            project: idProject,
            montant: amount
        }).then((response) =>{
            console.log(response);
        })
    }
    return (  
        <>
        <section id="make_donation_area" className="section_padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="section_heading">
                        <h3>Make a donation</h3>
                        <h2><span className="color_big_heading">Donate</span> now to help the  people</h2>
                    </div>
                </div>
            </div>
            <div className="row" id="counter">
                <div className="col-lg-8">
                    <div className="details_wrapper_area">
                        <div className="donet_amount_area doner_content_pbottom">
                            <h3>Enter your donation amount</h3>
                            <div className="input_donet_amount">
                                <span>$</span>
                                <input name="amount" type="number" onChange={handleMontantChange} />
                            </div>
                            <div className="payment_amount_submit">
                                <button className="btn btn_theme btn_md" onClick={makeDonation}>Donate now</button>
                            </div>
                        </div>
                        <form action="#!" id="donet_amount_main_form">
                            <div className="donet_amount_form_area doner_content_pbottom">
                                <h3>Enter your donation amount</h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Enter fast & last name*" value={nom}required />
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Enter last name*"
                                                required />
                                        </div>
                                    </div> */}
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Enter email address" value={email}
                                                required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Enter phone number*" value={phone}
                                                required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Enter address" value={address}
                                                required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option>Country</option>
                                                <option>Tunisia</option>
                                    
                                            </select>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea rows={5} className="form-control" placeholder="Write your comment"
                                                required></textarea>
                                        </div>
                                    </div> */}
                                </div>
    
                            </div>
                            <div className="donet_amount_form_area doner_content_pbottom">
                                <h3>Enter your donation amount</h3>
                                <div className="payment_donet_area">
                                    <div className="payment_option_area">
                                        <ul>
                                            <li><img src="assets/img/icon/visa.png" alt="icon"/></li>
                                            <li><img src="assets/img/icon/skill.png" alt="icon"/></li>
                                            <li><img src="assets/img/icon/master.png" alt="icon"/></li>
                                            <li><img src="assets/img/icon/paypal.png" alt="icon"/></li>
                                        </ul>
                                    </div>
                                    <div className="payment_option_input">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control"
                                                        placeholder="Account holder name*" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Card number*"
                                                        required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Expire date*"
                                                        required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="CVV*"
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
    
                            </div>
                            <div className="payment_amount_submit">
                                <button className="btn btn_theme btn_md">Donate now</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="sidebar_first">
                        <div className="case_boxed_wrapper">
                            <div className="case_boxed_img">
                                <a href="cause-details.html"><img src="assets/img/causes/causes-1.png" alt="img" /></a>
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
                                <h3><a href="cause-details.html">Collect fund for drinking water & healthy food</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur notted
                                    adipisicing elit sed do eiusmod tempor.</p>
                            </div>
                        </div>
                        <div className="project_organizer_wrapper sidebar_boxed">
                            <div className="project_organizer_img">
                                <img src="assets/img/sidebar/project_organizer.png" alt="img" />
                            </div>
                            <div className="project_organizer_text">
                                <h5>Project organizer:</h5>
                                <h3>Polin sarika</h3>
                                <p>Manager at ABC company</p>
                                <ul>
                                    <li><img src="assets/img/icon/tag.png" alt="icon"/> Category: <span>Education</span>
                                    </li>
                                    <li><img src="assets/img/icon/map.png" alt="icon" /> Location: <span>Niger,
                                            Nigeria</span></li>
                                    <li><img src="assets/img/icon/cal.png" alt="icon" /> Date: <span>20 Dec, 2021</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="project_recentdonet_wrapper sidebar_boxed">
                            <div className="sidebar_heading_main">
                                <h3>Recent donations</h3>
                            </div>
                            <div className="recent_donet_item">
                                <div className="recent_donet_img">
                                    <a href="cause-details.html"><img src="assets/img/sidebar/rec-donet-1.png"
                                            alt="img" /></a>
                                </div>
                                <div className="recent_donet_text">
                                    <div className="sidebar_inner_heading">
                                        <h4><a href="cause-details.html">Mike richard</a></h4>
                                        <h5>$300.00</h5>
                                    </div>
                                    <p>Business man</p>
                                    <h6>2 hours ago</h6>
                                </div>
                            </div>
                            <div className="recent_donet_item">
                                <div className="recent_donet_img">
                                    <a href="cause-details.html"><img src="assets/img/sidebar/rec-donet-2.png"
                                            alt="img" /></a>
                                </div>
                                <div className="recent_donet_text">
                                    <div className="sidebar_inner_heading">
                                        <h4><a href="cause-details.html">Jenifar lawrence</a></h4>
                                        <h5>$400.00</h5>
                                    </div>
                                    <p>Entrepreneur</p>
                                    <h6>7 hours ago</h6>
                                </div>
                            </div>
                            <div className="recent_donet_item">
                                <div className="recent_donet_img">
                                    <a href="cause-details.html"><img src="assets/img/sidebar/rec-donet-3.png"
                                            alt="img"/></a>
                                </div>
                                <div className="recent_donet_text">
                                    <div className="sidebar_inner_heading">
                                        <h4><a href="cause-details.html">David jovan</a></h4>
                                        <h5>$250.00</h5>
                                    </div>
                                    <p>Manager</p>
                                    <h6>3 hours 25 min ago</h6>
                                </div>
                            </div>
                            <div className="recent_donet_item">
                                <div className="recent_donet_img">
                                    <a href="cause-details.html"><img src="assets/img/sidebar/rec-donet-4.png"
                                            alt="img" /></a>
                                </div>
                                <div className="recent_donet_text">
                                    <div className="sidebar_inner_heading">
                                        <h4><a href="cause-details.html">Calvin roy</a></h4>
                                        <h5>$100.00</h5>
                                    </div>
                                    <p>Student</p>
                                    <h6>4 hours ago</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
}
export default DonationComponent;