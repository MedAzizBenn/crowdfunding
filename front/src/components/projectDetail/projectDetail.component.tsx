import axios from "axios";
import { useEffect, useState } from "react";
import {  useLocation, useNavigate, useParams } from "react-router-dom";

const ProjectDetailComponent = () =>{
    const location = useLocation();
    const {id} = useParams();
    const [project, setProject] = useState<any>();
    const [maxcap,setMaxCap] = useState<any>("");
    const [titre,setTitre] = useState("");
    const [category , setCategory] = useState("");
    const [porteur, setPorteur] = useState<any>();
    const [namePorteur,setNamePorteur] = useState<any>("");
    const [date,setDate] = useState<any>();
    const [description, setDescription] = useState<any>("");
    useEffect(() =>{
        fetchProject();
        fetchCategory();
        fetchPorteur();
    },[project]);


    const fetchProject =async () => {
        const {data: response} =  await axios.get(`http://127.0.0.1:3000/project/${id}`);
        setProject(response.value);
        console.log(project);























        
        setMaxCap(project.maxcap);
        setTitre(project.titre);
        setDate(project.created_at);
        setDescription(project.description);

    }    
    const fetchCategory = async () => {
        const {data : response} = await axios.get(`http://127.0.0.1:3000/categoryproj/${project.category}`);
        console.log(response.value);
        setCategory(response.value.name);

    }
    const fetchPorteur =async () => {
        const {data: response} = await axios.get(`http://localhost:3000/porteur/${project.porteur}`);
        console.log(response.value);
        setPorteur(response.value);
        setNamePorteur(porteur.name);

    }
    const navigate = useNavigate();

    const donate = async() =>{
        navigate(`/donation/${project._id}`)
    }
return (

<>

<section id="trending_causes_main" className="section_padding">
        <div className="container">
            <div className="row" id="counter">
                <div className="col-lg-8">
                    <div className="details_wrapper_area">
                        <div className="details_big_img">
                            <img src="../../assets/img/causes/details-big.png" alt="img" />
                            <span className="causes_badge bg-yellow">{category}</span>
                        </div>
                        <div className="details_skill_area">
                            <div className="class-full causes_pro_bar_flex progress_bar">
                                <div className="class-full-bar-box">
                                    <h3 className="h3-title">Goal: <span>TND{maxcap}</span></h3>
                                    <div className="class-full-bar-percent">
                                        <h2><span className="counting-data" data-count="89">0</span>
                                            <span>%</span>
                                        </h2>
                                    </div>
                                    <div className="skill-bar class-bar" data-width="89%">
                                        <div className="skill-bar-inner class-bar-in"></div>
                                    </div>
                                </div>
                                <div className="details_top_btn">
                                    <a onClick={donate} className="btn btn_md btn_theme">Donate now</a>
                                </div>
                            </div>

                        </div>
                        <div className="details_text_wrapper">
                            <h2>{titre}</h2>
                            <p>
                               {description}
                            </p>
                            <p>
                               
                            </p>
                            <h3>We want to ensure the education for the kids.</h3>
                            <p>
                                Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many
                                variations of passages of Lorem Ipsum available, but the majority have alteration in
                                some injected or words which don't look even slightly believable.
                            </p>
                            <ul>
                                <li><i className="fas fa-circle"></i> Lorem ipsum dolor sit amet, cibo mundi ea duo, vim
                                    exerci phaedrum.</li>
                                <li><i className="fas fa-circle"></i> There are many variations of passages of Lorem Ipsum.
                                </li>
                                <li><i className="fas fa-circle"></i> Available but the majority have alteration in some
                                    injected or words.</li>
                                <li><i className="fas fa-circle"></i> There are many variations of passages of Lorem Ipsum
                                    which don't look even slightly
                                    believable.</li>
                            </ul>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="details_small_img">
                                        <img src="../../assets/img/causes/details-small-1.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="details_small_img">
                                        <img src="../../assets/img/causes/details-small-2.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many
                                variations of passages of Lorem Ipsum available, but the majority have alteration in
                                some injected or words which don't look even slightly believable.
                            </p>
                        </div>
                        <div className="download_pdf_area">
                            <div className="pdf_download_left">
                                <img src="../../assets/img/icon/pdf.png" alt="icon" />
                                <h4>Children education manual .pdf</h4>
                            </div>
                            <div className="pdf_download_right">
                                <a href="!#" className="btn btn_md btn_theme">Download now</a>
                            </div>
                        </div>
                        <div className="comment_area_details">
                            <h3>2 Comments</h3>
                            <div className="post_comment_wrapper">
                                <div className="post_comment_item">
                                    <div className="post_comment_img">
                                        <img src="../../assets/img/common/post-1.png" alt="img" />
                                    </div>
                                    <div className="post_comment_text">
                                        <div className="post_names_replay">
                                            <h5>James martin</h5>
                                            <a href="#!"><i className="fas fa-reply"></i>Reply</a>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are
                                            many variations of passages of Lorem Ipsum available but the majority.</p>
                                    </div>
                                </div>
                                <div className="post_comment_item">
                                    <div className="post_comment_img">
                                        <img src="../../assets/img/common/post-2.png" alt="img" />
                                    </div>
                                    <div className="post_comment_text">
                                        <div className="post_names_replay">
                                            <h5>James martin</h5>
                                            <a href="#!"><i className="fas fa-reply"></i>Reply</a>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are
                                            many variations of passages of Lorem Ipsum available but the majority.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="comment_form_area">
                            <h3>Leave a comment</h3>
                            <div className="comment_form">
                                <form action="#!" id="comment_form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter full name"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                    placeholder="Enter email address" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea rows={5} placeholder="Write your comments"
                                                    className="form-control" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="submit_btn">
                                                <button className="btn btn_theme btn_md">Submit comment</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="sidebar_first">
                        <div className="project_organizer_wrapper sidebar_boxed">
                            <div className="project_organizer_img">
                                <img src="../../assets/img/sidebar/project_organizer.png" alt="img" />
                            </div>
                            <div className="project_organizer_text">
                                <h5>Project organizer:</h5>
                                {<h3>{namePorteur}</h3>}
                                <p></p>
                                <ul>
                                    <li><img src="../../assets/img/icon/tag.png" alt="icon" /> Category: <span>{category}</span>
                                    </li>
                                    <li><img src="../../assets/img/icon/map.png" alt="icon" /> Location: <span>ariana</span></li>
                                    <li><img src="../../assets/img/icon/cal.png" alt="icon" /> Date: <span>{date}</span>
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
                                    <a href="cause-details.html"><img src="../../assets/img/sidebar/rec-donet-1.png"
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
                                    <a href="cause-details.html"><img src="../../assets/img/sidebar/rec-donet-2.png"
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
                                    <a href="cause-details.html"><img src="../../assets/img/sidebar/rec-donet-3.png"
                                            alt="img" /></a>
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
                                    <a href="cause-details.html"><img src="../../assets/img/sidebar/rec-donet-4.png"
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
                            <div className="recent_donet_item">
                                <div className="recent_donet_img">
                                    <a href="cause-details.html"><img src="../../assets/img/sidebar/rec-donet-5.png"
                                            alt="img" /></a>
                                </div>
                                <div className="recent_donet_text">
                                    <div className="sidebar_inner_heading">
                                        <h4><a href="cause-details.html">Julia flora</a></h4>
                                        <h5>$300.00</h5>
                                    </div>
                                    <p>House wife</p>
                                    <h6>5 hours ago</h6>
                                </div>
                            </div>
                        </div>
                        <div className="recent_causes_wrapper sidebar_boxed">
                            <div className="sidebar_heading_main">
                                <h3>Recent causes</h3>
                            </div>
                            <div className="recent_donet_item">
                                <div className="recent_donet_img">
                                    <a href="cause-details.html"><img src="../../assets/img/sidebar/rec-cas-1.png"
                                            alt="img" /></a>
                                </div>
                                <div className="recent_donet_text">
                                    <div className="sidebar_inner_heading">
                                        <h4><a href="cause-details.html">Stop early marriage and educate
                                                your girl child</a></h4>
                                    </div>
                                    <h6>3rd January, 2022</h6>
                                </div>
                            </div>
                            <div className="recent_donet_item">
                                <div className="recent_donet_img">
                                    <a href="cause-details.html"><img src="../../assets/img/sidebar/rec-cas-2.png"
                                            alt="img" /></a>
                                </div>
                                <div className="recent_donet_text">
                                    <div className="sidebar_inner_heading">
                                        <h4><a href="cause-details.html">Ensure a secure and free life for
                                                the wild animal</a></h4>
                                    </div>
                                    <h6>10th January, 2022</h6>
                                </div>
                            </div>
                            <div className="recent_donet_item">
                                <div className="recent_donet_img">
                                    <a href="cause-details.html"><img src="../../assets/img/sidebar/rec-cas-3.png"
                                            alt="img" /></a>
                                </div>
                                <div className="recent_donet_text">
                                    <div className="sidebar_inner_heading">
                                        <h4><a href="cause-details.html">Ensure pure and mineral drinking
                                                water for rural people</a></h4>
                                    </div>
                                    <h6>15th January, 2022</h6>
                                </div>
                            </div>
                            <div className="recent_donet_item">
                                <div className="recent_donet_img">
                                    <a href="cause-details.html"><img src="../../assets/img/sidebar/rec-cas-4.png"
                                            alt="img" /></a>
                                </div>
                                <div className="recent_donet_text">
                                    <div className="sidebar_inner_heading">
                                        <h4><a href="cause-details.html"> Collect fund for drinking water &
                                                healthy food</a></h4>
                                    </div>
                                    <h6>30th Dec, 2021</h6>
                                </div>
                            </div>
                        </div>
                        <div className="share_causes_wrapper sidebar_boxed">
                            <div className="sidebar_heading_main">
                                <h3>Share causes</h3>
                            </div>
                            <div className="social_icon_sidebar">
                                <ul>
                                    <li><a href="#!"><img src="../../assets/img/icon/facebook.png" alt="icon" /></a></li>
                                    <li><a href="#!"><img src="../../assets/img/icon/instagram.png" alt="icon" /></a></li>
                                    <li><a href="#!"><img src="../../assets/img/icon/twitter.png" alt="icon" /></a></li>
                                    <li><a href="#!"><img src="../../assets/img/icon/linkedin.png" alt="icon"/></a></li>
                                </ul>
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
export default ProjectDetailComponent;