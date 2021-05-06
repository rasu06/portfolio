import "./style.css";
import {
  Link
} from "react-router-dom";
const About = () => {
  return (
    <div className="works">
     <div class="margins">
      <div>
        <h3>File Sharing App</h3>
      <p>
        Built APIs for File Sharing App using Node.js, Express, Mongo DB.
        Used Multer package for uploading file in Node.js and use Nodemailer to send emails using free SMTP from our node server.
        Used Heroku server for deployment and also added script to the server to delete 24 hours old files from storage. 
      </p>
      <Link href="https://filesharefront.herokuapp.com/">Project link</Link>
      </div>
      <br />
      <div>
      <h3>Todo List</h3>
      <p>
      Created a Todo List using React js and Firebase.
      User can perform CRUD operation over all the Todos.
      User can Login/Signup with their Id and Password for that I have used Firebase Authentication.
      </p>
      <Link href="https://listtodo-ytt.herokuapp.com/">Project link</Link>
      </div>
      <br />
      <div>
      <h3>Travel Blog</h3>
      <p>
      Created a dummy Travelling website using Framer Motion and React js.
      Page Transition made possible by framer motion's AnimatePresence and motion
      functionality with focusing on every motion element's entering and exiting duration,
       delay and transition and synced together for cool effect.
      Parallax Effect is created by using useRef hook and useViewportScroll which render
        particular element depending upon its y position.
      </p>
      <Link href="https://ecstatic-engelbart-47e4e9.netlify.app/">Project link</Link>
      </div>
      <br/>
      <div>
      <h3>Issue Tracker</h3>
      <p>
       Created an Chat application using Reactjs and firebase.
       User can Login/Signup with Id and password or using Google Signin option. 
      Once login, they can chat with the other users who are using this App.
      </p>
      <Link href="https://chatapp-tt.herokuapp.com/">Project link</Link>
      </div>
      </div>
    </div>
  );
};

export default About;
