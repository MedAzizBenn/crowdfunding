import { Route,Routes,  BrowserRouter as Router} from "react-router-dom";
import { DonationComponent } from "../donation";
import { DonatorComponent } from "../donator";
import { FooterComponent } from "../footer";
import { HeaderComponent } from "../header";
import { HomeComponent } from "../home";
import {LoginComponent} from "../login";
import { ProjectComponent } from "../project/";

import { ProjectDetailComponent } from "../projectDetail";
import {RegisterComponent} from "../register";

const MainComponent = () =>{
    return (
       
            <>
                <HeaderComponent/>
                    <Router>
                      <Routes>
                        <Route path="/" element={<HomeComponent />} />
                        <Route path="/login" element={<LoginComponent/>} />
                        <Route path="/register" element={<RegisterComponent/>} />
                        <Route path="/project" element={<ProjectComponent/>}/>
                        <Route path="/donator" element={<DonatorComponent/>}/>

                        <Route path="/project/:id" element= {<ProjectDetailComponent/>}/>
                        <Route path="/donation/:idProject" element = {<DonationComponent/>}/>
                    </Routes>
                    </Router>
                <FooterComponent/>
            </>
            
    );
}

export default MainComponent;