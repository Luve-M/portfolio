import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";        
import 'primeflex/primeflex.css';
import logo from './logo.svg';
import './App.css';
import Texts from "./Texts";

import { useState } from "react";
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';

function App() {
  const [aboutmeButton, setAboutMeButton] = useState(true)
  const [workExpButton, setWorkExpButton] = useState(false)
  const [Achievements, setAchievements] = useState(false)
  const [Projects, setProjects] = useState(false)

  return (
    <div>
      <header className="App-header">
        <div className="p-grid">
          <div className="p-col-2">
            <img src={logo} className="App-logo flex items-center justify-center" alt="logo" />
          </div>
          <div className="p-col-10 items-center p-mt-5">
          <div>Name: Shailja Thakur</div>
          <div>Number: +91 80758 91171</div>
          <div>Email: shailja@iiitkalyani.ac.in</div>
          <div>To traverse down the world, carving a niche with all the acquired, accomplished, conquering skills.
</div>
        </div>
        </div>
      </header>
      <div className="p-grid">
        <div className="p-col-2 background-panel">
          <div className="flex items-center justify-center">
            <Button 
              label="About" 
              className="p-button-secondary w-full p-m-1"
              onClick={()=>{
                setAboutMeButton(true)
                setWorkExpButton(false)
                setAchievements(false)
                setProjects(false)
              }}
            />
          </div>
          <div className="flex items-center justify-center">
            <Button 
              label="Work Experience" 
              className="p-button-secondary w-full p-m-1"
              onClick={()=>{
                setAboutMeButton(false)
                setWorkExpButton(true)
                setAchievements(false)
                setProjects(false)
              }}
            />
          </div>
          <div className="flex items-center justify-center">
            <Button 
              label="Achievements" 
              className="p-button-secondary w-full p-m-1"
              onClick={()=>{
                setAboutMeButton(false)
                setWorkExpButton(false)
                setAchievements(true)
                setProjects(false)
              }}
            />
          </div>
          <div className="flex items-center justify-center">
            <Button 
              label="Projects" 
              className="p-button-secondary w-full p-m-1"
              onClick={()=>{
                setAboutMeButton(false)
                setWorkExpButton(false)
                setAchievements(false)
                setProjects(true)
              }}
            />
          </div>
        </div>
        <div className="p-col-10">
        {aboutmeButton && <Panel header = "About Me" className={`p-mt-1 p-mr-1`}>
            <p>{Texts.aboutMe.line1}</p>
            <p>{Texts.aboutMe.line2}</p>
            <p><ul>
            <li>
                {Texts.aboutMe.line3}
              </li>
              <li>
                {Texts.aboutMe.line4}
              </li>
            </ul></p>
            <p>{Texts.aboutMe.line5}</p>
            <p><ol>
              <li>{Texts.aboutMe.line6}</li>
              <li>{Texts.aboutMe.line7}</li>
            </ol></p>
            <p>{Texts.aboutMe.line8}</p>
            <p>{Texts.aboutMe.line9}</p>
        </Panel>}
        {workExpButton && <Panel header="Work Experience" className={`p-mt-1 p-mr-1`}>
          <div className="p-grid">
            <div className="p-col-10 boldText">Intangles Lab, Applied Machine Learning Engineer</div>
            <div className="p-col-2">11/2019 - 10/2021</div>
          </div><hr/>
          <ul>
            <li>
            Generated Fleet Performance Insight for OEMs, the process
            generates insights for requested duration in regards to - Fuel, Distance, Driven Hours, Idling, Hardbraking, Overspeeding, Mileage etc in the fleet. Impact was
            improvement in daily driver duty.
            </li>
            <li>
            Generated Driver Performance Model using TOPSIS. The
            algorithm generates performance insights for each driver
            duty for a particular route. The model helped customers in
            keeping a track of good and bad driver duty and rewarding
            and warning accordingly.
            </li>
            <li>
            Improvised algorithm for live tracking Adblue level
            mechanism in vehicles. The accuracy went from 75% to 99%. OEM customers were then able to keep a track of thefts, refills, b-point in real time.
            </li>
          </ul>

          <div className="p-grid">
            <div className="p-col-10 boldText">Shipsy, Data Scientist Intern</div>
            <div className="p-col-2">08/2019 - 10/2019</div>
          </div><hr/>
          <ul>
            <li>
            Devised an algorithm that increased accuracy score from
            50% to 82% for one of the strategies to geocode logistic
            delivery addresses. It was further used by delivery agents
            across the Hub - Gurgaon.
            </li>
          </ul>

          <div className="p-grid">
            <div className="p-col-10 boldText">Tech-Tailor Solutions Pvt. Ltd., Thermal Image Processing Intern</div>
            <div className="p-col-2">12/2017 - 01/2018</div>
          </div><hr/>
          <ul>
            <li>
            Generated Automated Measurement Tool for Human Body
            measurement using the concept of Thermal Imaging with
            the help of MATLAB/Octave, accuracy was around 90% for 6
            measurements. The project was deployed for final use-case
            </li>
          </ul>
        </Panel>}
        {Achievements && <Panel header="Achievements" className={`p-mt-1 p-mr-1`}>
        <div className="p-grid">
            <div className="p-col-10 boldText">N/Core Ideathon Winner</div>
            <div className="p-col-2">06/2018</div>
          </div><hr/>
          <ul>
            <li>
            Project Awaaz - One Lakh Seed Grant. From a total of 946 teams, we were among the top 10 and as well as the Winner. We received an offer of incubation as well as prize money of 1 Lakh.
            </li>
          </ul>
          
          <div className="p-grid">
            <div className="p-col-10 boldText">Smart India Hackathon</div>
            <div className="p-col-2">2019</div>
          </div><hr/>
          <ul>
            <li>
            From a total of 1000+ ideas on the problem statement of 'PERSON
            TRACKING SYSTEM' given by HCL, our Team was chosen among the top
            5, we also received an offer to come onsite and implement our proposed
            solution.
            </li>
          </ul>
        </Panel>}
        {Projects && <Panel header="Projects" className={`p-mt-1 p-mr-1`}>
        <div className="p-grid">
            <div className="p-col-10 boldText">Intelligent Document Processing System</div>
          </div><hr/>
          <ul>
            <li>
            The goal was to build a multi-classifier to classify a set of 35k
            documents. Generated TF-IDF score to vectorize the text.
            </li>
            <li>Logistic Regression model to build a multi-classifier. With an
            accuracy score of 98%</li>
          </ul>

          <div className="p-grid">
            <div className="p-col-10 boldText">Person Tracking and Re-identification</div>
          </div><hr/>
          <ul>
            <li>
            The goal of the project was to uniquely identify a person in a video frame. 
            </li>
            <li>Used YOLO algorithm to detect person. Siamese Network to reidentify and track the person through unique features from the body.</li>
            <li>Used MTCNN to extract face. Facenet model to re-identify through unique features from the face</li>
          </ul>

          <div className="p-grid">
            <div className="p-col-10 boldText">Ashrae Great Energy Predictor</div>
          </div><hr/>
          <ul>
            <li>
            Assessing the value of energy efficiency improvements - predicting how much energy a building would have used.
            </li>
            <li>
            Built model across four energy types based on historic usage rates and observed weather.
            </li>
          </ul>
        </Panel>}
        </div>
      </div>
    </div>
  );
}

export default App;
