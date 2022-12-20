import axios from "axios";
import Button from 'react-bootstrap/Button';
import { FaFilter } from 'react-icons/fa';

import { useEffect, useState,useMemo } from "react";
import { Container } from "react-bootstrap";
import { generatePath} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { verify } from "crypto";
const ProjectComponent= () => {

    const CountryList = [
        "Ariana",
        "Béja",
        "Ben Arous",
        "Bizerte",
        "Gabès",
        "Gafsa",
        "Jendouba",
        "Kairouan",
        "Kasserine",
        "Kébili",
        "Le Kef",
        "Mahdia",
        "La Manouba",
        "Médenine",
        "Monastir",
        "Nabeul",
        "Sfax",
        "Sidi Bouzid",
        "Siliana",
        "Sousse",
        "Tataouine",
        "Tozeur",
        "Tunis",
        "Zaghouan"
    ];        
        const [sort,setSort]=useState("asc");
        const [projects  , setProjects] = useState<any[]>([]);
        const [selectedGouv , setSelectedGouv] = useState<any>();
        const [selectedCateg , setSelectedCateg] = useState<any>();
        const [donators , setDonators] = useState<any[]>([]);

        const [allProjects  , setAllProjects] = useState<any[]>([]);
        const [project  , setProject] = useState<any[]>([]);
        const [show,setShow]=useState(false);
        const[idPorteur, setIdPorteur] = useState<any>("");
        const [projectCard,setProjectCard]=useState<any[]>([]);

        const [sortedProj  , setSortedProj] = useState<any[]>([]);
        const[category, setCategory] = useState<any>("");
        const[allCategories, setCategories] = useState<any[]>([]);
        const [porteur, setPorteur] = useState<any>("");
        const [id,setId] = useState<any>("");
        const [searchTerm,setSearchTerm]=useState('')
        useEffect(() =>{
            fetchProjects();
            fetchCategories();
        },[]);
    
    const fetchProjects =async () => {
        const {data : response} = await axios.get("http://127.0.0.1:3000/project")
        setProjects(response); 

        response.map((project:any)=>
        {

            fetchPorteur(project.porteur).then((porteur)=>{
                fetchCategory(project.category).then((category)=>{
                    fetchDonators(project._id).then((totalDonators)=>
                    {
                        console.log(totalDonators);
                setProjectCard(prevProj => [... prevProj,{
                    porteur:porteur.name,
                    category:category,
                    date:project.delay,
                    description:project.description,
                    maxCap:project.maxcap,
                    titre:project.titre,
                    gouvernorat:porteur.gouvernorat,
                    img:project.photo,
                    currentAmount:project.currentAmount,
                    currentPers:project.currentAmount!=0?(project.currentAmount/project.maxcap)*100:0,
                    totalDonators:totalDonators
               }]);
               
            })
                
            
        })  
        })            
            console.log(allProjects);
        });
        
        
            
    }

 const fetchDonators = async(id:any) =>{
  
try{


        const {data:response}=await axios.get(`http://localhost:3000/donation/byproject/${id}`);
            if(response.value!=false)
            {
                response.value.map((res:any)=>{
                    if(donators.indexOf(res.donator)===-1)
                    {
                        donators.push(res.donator)
                        console.log("fess",donators.length);
                    }
                   
        
                });
                return donators.length; 
            }
            else

            {
                return 0;
            }
        }
            catch(error:any){
                if(error.response.data.value==false)
                    return 0;

            }

    }

    const fetchCategory = async(id:any) =>{

        const {data: response} = await axios.get(`http://localhost:3000/categoryproj/${id}`);
        console.log(response.value);
        return response.value.name;
        
    }

    const fetchPorteur =async (_id:any) => {
        const {data: response} = await axios.get(`http://localhost:3000/porteur/${_id}`);
        return response.value;
      
    }

    const fetchCategories = async() =>{
        const {data: response} = await axios.get(`http://localhost:3000/categoryproj`);
        setCategories(response.value);
        allCategories.map((option:any,index:any) => {
            console.log(option.name);

        }
        );
        }

    const navigate = useNavigate();
    const goTo = async(_id: any) =>{
        navigate(`/project/${_id}`,{state: _id});
    }

    const onPersSort=()=>
    {
        const sorting=filteredCards.sort((a,b)=>{
            return (a.currentPers>b.currentPers)? 1 : -1;
        })
        setSortedProj(sorting);
    }

    const onDonatorsSort=()=>
    {
        const sorting=filteredCards.sort((a,b)=>{
            return (a.totalDonators>b.totalDonators)? 1 : -1;
        })
        setSortedProj(sorting);
    }

    useEffect(() =>{
        
        setProjects(sortedProj);
    },[]);

    const setIdFunc=(id:any)=>
    {
        if(id!="")
        {
            console.log(id);
            setIdPorteur(id);
        }
     
    }

    const handleCateg=(e:any)=>
    {
        setSelectedCateg(e.target.value);       
    }
   
    const handleGouv=(e:any)=>
    {
        setSelectedGouv(e.target.value);

        console.log(e.target.value);
       
    }

    


       const filteredCards = useMemo(
        () => {
            if (!selectedGouv && !selectedCateg) {
                return projectCard;
              }
            
            return projectCard.filter((project)=>{
            
                return(
                 project.category?.toLowerCase()==(selectedCateg?.toLowerCase()) ||
                 project.gouvernorat?.toLowerCase()==(selectedGouv?.toLowerCase())
                );
    
              });
        },[selectedCateg,selectedGouv,[]] );

    
      

   return(
    <Container>
    <section id="trending_causes_main" className="section_padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                <div className="section_heading">
                    <h3>Trending causes</h3>
                    <h2> We are always where other people <span className="color_big_heading">need</span> help</h2>
                </div>
                <a href="/donator" className="nav-link">
                                      Donator
                                    </a>            </div>
        </div>
        <div className="input-group rounded" style={{ margin:'20px' }} > 
  <input type="search" className="form-control rounded" onChange={event=>{setSearchTerm(event.target.value)}} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span className="input-group-text border-0" id="search-addon">
    <i className="fas fa-search"></i>
  </span>
</div>  
<Button  variant="outline-dark pd-3 m-4" style={{ width: '15%',margin:'10px' }} onClick={()=>setShow(true)}>Filter <FaFilter/>
 </Button>
{show?
    <div className="d-flex justify-content-center">
{/*<Button variant="outline-dark pd-3" style={{ width: '15%',margin:'10px' }} onClick={()=>onSort()}>Sort by date</Button>*/}

        <Form.Select aria-label="Default select example" style={{ width: '15%',margin:'20px' }} onChange={handleCateg}>
            <option>Category</option>
            {allCategories.map((option:any,index:any) => (
               
          <option value={option.name} key={index}>
            {option.name}
          </option>
        ))}
      </Form.Select>

      <Form.Select aria-label="Default select example" style={{ width: '15%',margin:'20px' }} onChange={handleGouv}>
            <option>Gouvernorats</option>
            {CountryList.map((option:any,index:any) => (
               
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </Form.Select>
    
      <Button  variant="outline-dark pd-3 m-4" style={{ width: '15%',margin:'10px' }} onClick={()=>onPersSort()}>Progress
 </Button>
 <Button  variant="outline-dark pd-3 m-4" style={{ width: '15%',margin:'10px' }} onClick={()=>onDonatorsSort()}>Donators
 </Button>
      
      
</div>:null
}    

  


<div className="row" id="counter">
    

{
     
     filteredCards.filter((val)=>{
        if(searchTerm=="")
        {
            return val;
        }
        else if(val.titre?.toLowerCase().includes(searchTerm?.toLowerCase()))
        {
            console.log(val," ",selectedGouv?.toLowerCase());

            return val;
        }
      
     }).map( (project: any) => {

         return (
             <div className="col-lg-4 col-md-12 col-sm-12 col-12" key={project._id}>
                 <div className="case_boxed_wrapper">
                     <div className="case_boxed_img">
                         <a href="#" /*onClick= {() => {goTo(project._id)}}*/><img src="../../assets/img/causes/causes-1.png" alt="img" /></a>
                        
                           
                                <span className="causes_badge bg-theme">{project.category}</span>
                           
                     </div>
                     <div className="causes_boxed_text">
                         <div className="class-full causes_pro_bar progress_bar">
                             <div className="class-full-bar-box">
                                 <h3 className="h3-title">Goal: <span>{project.maxCap}</span></h3>
                                 <div className="class-full-bar-percent">
                                     <h2><span className="counting-data" data-count={project.currentPers}>{project.currentPers}</span>
                                         <span>%</span>
                                     </h2>
                                 </div>
                                 <div className="skill-bar class-bar" data-width={`${project.currentPers}%`}>
                                     <div className="skill-bar-inner class-bar-in"></div>
                                 </div>
                             </div>
                         </div>
                         <h3><a href="#">{project.titre}</a></h3>
                         <p>{project.description}</p>
                         <p>{project.gouvernorat}</p>

                         <div className="causes_boxed_bottom_wrapper">
                             <div className="row">
                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                     <div className="casuses_bottom_boxed">
                                         <div className="casuses_bottom_icon">
                                             <img src="assets/img/icon/cal.png" alt="icon" />
                                         </div>
                                         <div className="casuses_bottom_content">
                                             <h5>Date:</h5>
                                             <p>{project.date}</p>
                                         </div>
                                     </div>
                                 </div>


                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                     <div className="casuses_bottom_boxed casuses_left_padding">
                                         <div className="casuses_bottom_icon">
                                             <img src="assets/img/icon/user.png" alt="icon" />
                                         </div>
                                         <div className="casuses_bottom_content">
                                             <h5>By:</h5>
                                             <p>{project.porteur}</p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         );
     })

}
</div>
    </div>
    </section>
    </Container>
   );        
}

export default ProjectComponent;
