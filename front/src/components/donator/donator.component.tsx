import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import { format } from 'date-fns';
import {useForm } from 'react-hook-form';
import { useEffect, useState } from "react";
import axios from "axios";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Form from 'react-bootstrap/Form';

import Select from 'react-select'

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {useRef} from 'react';


export default function DonatorComponent() {
  type Profile={
    name:string,
    email:string,
    mobile:string,
    address:string,
    gouvernorat:string,
    city:string,
    position:string
  }
  const gouvernorats = [
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
  const [img, setImg] = useState<string>("../../assets/img/icon/user2.png");

  const inputRef = useRef<HTMLInputElement>(null);
  //const {register,handleUpdate}=useForm<Profile>()
  const id="6346e1b7e3c089f549685f9f";
    const [donator,setDonator]=useState<any>("");
      
    const [totalDonations,setTotalDonations]=useState<any>(0);

    const [idProject,setIdProject]=useState<any>("");
    const [donations,setDonations]=useState<any[]>([]);
    
    const  [history,setHistory]=useState<any[]>([]);
    const [image, setImage] = useState({ preview: "", raw: "" });

    const [name,setName]=useState("");
    const columns = [
      { dataField: 'project', text: 'titre', sort: true },
      { dataField: 'date', text: 'date', sort: true },
      { dataField: 'montant', text: 'montant', sort: true }

    ];

    useEffect(() =>{
        fetchDonator();
        fetchDonations();
        
        
    },[]);

    useEffect(() =>{
      getProject(idProject);
      
  },[idProject]);

    

    const fetchDonator = async() =>{
        const {data: response} = await axios.get(`http://localhost:3000/donator/${id}`);
        
        const donator = response?.value;
        
        setDonator(donator);

    }


    const fetchDonations = async() =>{
      const {data: response} = await axios.get(`http://localhost:3000/donation/bydonator/${id}`);
      
      const _donations = response?.value;
      setDonations(_donations);
      _donations.map((donation:any,index:any) => 
         {
         

            getProject(donation.project).then((res)=>{
              setHistory(prevHistory => [... prevHistory,{
                project:res,
                date:format (new Date(donation.date),"yyyy-MM-dd HH:mm"),
                montant:donation.montant
  
           }]);
           
            });

            setTotalDonations((prev:any)=>prev+parseInt(donation.montant));
           
          


         }
      );
      history.map((obj:any,index:any)=>{
        console.log(obj.montant);
      })
     
  }

  const handleUpdate=async(e:any)=>
  {
    e.preventDefault();
    console.log(JSON.stringify(donator))
    await axios.put(`http://localhost:3000/donator/${id}`, {
        donator:donator
      })
        .then((res) => 
        
        console.log(res))
        
        .catch((err) => {
           console.log(err.message);
        });
  }


  const getProject = async(id:any) =>{
    const {data: response} = await axios.get(`http://localhost:3000/project/${id}`)
    const project = response?.value;
   return project?.titre;
}



function handleFileChange(e:any) {  
  setImg(URL.createObjectURL(e.target.files[0]));
}


const handleChange=(e:any)=>{
  console.log(e.target.name)
  const name=e.target.name;
  const value=e.target.value;
  setDonator((prev:any)=>{
    return {...prev,[name]:value}
  })

}


  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
          <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={img}
                  alt="avatar"
                  className="rounded-circle "
                  style={{ width: '200px' ,height:'200px' }}
                  fluid />
                <p className="text-muted mb-4 mt-2">{donator.name}</p>
             
                <div className="d-flex justify-content-center mb-2">
            
                <input type="file" onChange={handleFileChange} />
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
              <MDBCardBody className="text-center">
               
               <p className="text-dark h5 p-3" >Total amount donated</p>
               <span className=""  style={{color:"#E04033"}}>{totalDonations} TND</span>
               <div className="d-flex justify-content-center mb-2">
               </div>
             </MDBCardBody>              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
              <form onSubmit={handleUpdate}>
                   
              <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <input type="text" name="name"  style={{ height:'50px' }}  onChange={handleChange} className="form-control" value={donator.name}/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input type="text" name="email"  style={{ height:'50px' }} onChange={handleChange} className="form-control" value={donator.email}/>
                  </MDBCol>
                </MDBRow>
         
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input type="text" name="telephone" style={{ height:'50px' }} onChange={handleChange}  className="form-control" value={donator.telephone}/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input type="text"  style={{ height:'50px' }} name="address" onChange={handleChange} className="form-control" value={donator.address}/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gouvernorat</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
<select className="form-select" name="gouvernorat" onChange={handleChange} defaultValue={donator.gouvernorat}>
            {gouvernorats.map((option:any,index:any) => (
          <option   value={option}   key={index}>
            {option}
          </option>
        ))}
      </select>      
                        </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>city</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input type="text" name="city" style={{ height:'50px' }}  onChange={handleChange} className="form-control" value={donator.city}/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>position</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input type="text" name="position" style={{ height:'50px' }} onChange={handleChange} className="form-control" value={donator.position}/>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol sm="3 p-4">
                  <Button variant="outline-dark " onClick={handleUpdate}>Update</Button>
                  </MDBCol>
                 
                </MDBRow>
              </form>
              </MDBCardBody>
            </MDBCard>
            <div className="App">
              <div className="history">
              <MDBRow>
          <MDBCol >
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
              <MDBCardText className="mb-4"><span className="text-primary h4 font-italic me-1">Donations history</span>  </MDBCardText>

              <BootstrapTable
      rowStyle={ { backgroundColor: 'white' } }
        bootstrap4
        keyField="id"
        data={history}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 5 })}
      />
     
      </MDBCardBody>
      </MDBCard>
      </MDBCol>
      </MDBRow>
              </div>
    
    </div>
            

           
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}