import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals';

const myfirstelement = (
  <div>
  <div className="one col-sm-12">
      <div className="contact col-sm-10">
        <div className="phone-container"><i className="fas fa-phone"></i> <span className="number">+91-9667606944</span></div>
        <div className="email-container"><i className="fas fa-envelope"></i> <span className="email">support@gofresher.org</span></div>
      </div>
      
      <div className="social-connect col-sm-2">
        <div className="icon-holder">
         <i className="fab fa-facebook-f"></i>
         <i className="fab fa-instagram"></i>
         <i className="fab fa-linkedin"></i>
         <i className="fab fa-twitter"></i>
         <i className="fab fa-whatsapp"></i>
         <i className="fab fa-telegram"></i>
        </div>
      </div>
  </div>
  
  <div className="two col-sm-12">
    <div className="logo col-sm-4">
      <div className="logo-img"><img src='gofresher-logo.svg' alt='Gofresher Company Logo'/></div>
    </div>
    <div className="menu col-sm-8">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Feedback</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
  
  <div className="three col-sm-12">
  <div className="about-head col-sm-12">About Us</div>
    <div className="dot-and-bar"><span className="line"></span><span className="circle"></span><span className="line"></span></div>
    <div className="companyDetails col-sm-6">
      <div className="companyText"><h1>Gofresher</h1> is one of the Indian leaders in helping jobseekers get their dream job. We specialize in resume development services and placement assistance services that aims at guiding job seekers on how to land a job and search for jobs in the right manner.</div>
  
  <div className="focus-detail col-sm-12">
        <div className="left-detail col-sm-6">
        <div className="left-heading"><h2>20+ Years Of Experience</h2><div className="left-text">We are backed by a highly dedicated placement assistance team to ensure that jobseekers with different backgrounds are able to pursure leads with a high chance for response. The resume development and designing team spends a lot of time understanding the latest trends and plans the portfolio accordingly.</div></div>
        </div>
        <div className="right-detail col-sm-6">
        <div className="right-heading"><h2>Commited To Helping And Assisting</h2><div className="right-text">While the market is very dynamic and the hiring pattern for companies is changing regularly, the team offers dedicated jobseelers to cultivate and utilize our experience and knowledge in the jobseeking domain to land a job. Since we are working professions who aim to help jobseekers through whatever help we get from company professionals and employees, the pricing has been included so that it is justifiable to our team as well as is easy on your pockets.</div></div>
        </div>
      </div>
  
      </div>
    <div className="companyImage col-sm-6">
      <div className="imageHolder">
        <div className="imageBorder">
          <div className="mainImage"><img src="company-building.svg" alt="Company Interior"/></div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="four col-sm-12">
    <div className="client-head col-sm-12">Services</div>
    <div className="dot-and-bar"><span className="line"></span><span className="circle"></span><span className="line"></span></div>
    <div className="client-name col-sm-12">
      <div className="pri col-sm-4"><div className="client 1"><img src='max.svg' alt='Max Fashion'/></div><div className="client 2"><img src='reliance.svg' alt='Reliance'/></div></div>
      <div className="sec col-sm-4"><div className="client 3"><img src='soch.svg' alt='Soch Apparels'/></div><div className="client 4"><img src='pantaloons.svg' alt='Pantaloons'/></div></div>
      <div className="tre col-sm-4"><div className="client 5"><img src='vishal.svg' alt='Vishal Mega Mart'/></div><div className="client 6"><img src='home-shop-18.svg' alt='Home Shop 18'/></div></div>
      <div className="fou col-sm-4"><div className="client 7"><img src='more.svg' alt='More Retail Office'/></div><div className="client 8"><img src='empty.svg' alt='empty'/></div></div>
    </div>
  </div>
  
  <div className="five col-sm-12">
    <div className="automation col-sm-12">Feedback</div>
    <div className="dot-and-bar"><span className="line"></span><span className="circle"></span><span className="line"></span></div>
    <div className="automation-text">We are putting up a <h3>Highly Automated Garments Manufacturing Plant</h3> with complete <h3>Cutting Room Automation</h3> which includes CAD/CAM, Plotter, Automatic Fabric Spreader and Automatic CNC Cutting Machine. We have <h3>IOT</h3> technology installed on each sewing machine to maximise the efficiency. The factory will be managed by an <h3>ERP system.</h3></div>
    <div className="machines col-sm-12">
      <div className="left-m col-sm-6"><img src='cnc-machine.svg' alt='CNC Machine'/><div className="machine-name-l">Automatic CNC Cutting Machine</div></div>
      <div className="right-m col-sm-6"><img src='automatic-fabric-cutter.svg' alt='Automatic Fabric Cutter'/><div className="machine-name-r">Automatic Fabric Spreader</div></div>
    </div>
  </div>
  
  <div className="six col-sm-12">
    <div className="address col-sm-6">
    <div className="address-font">Address</div>
    <div className="dot-and-bar"><span className="circle"></span><span className="line"></span></div>
    <div className="address-details">
      <div className="name-div"><i className="fas fa-tag"></i><div className="company-name">Gofresher</div></div>
      <div className="phone-div"><i className="fas fa-phone"></i><div className="number"> +91-9667606944</div></div>
      <div className="email-div"><i className="fas fa-envelope"></i><div className="email"> support@gofresher.org</div></div>
      <div className="location-div"><i className="fas fa-map-marked-alt"></i><div className="location-text"> Lucknow</div></div>
      {/* <div className="social">
        <div className="fb-circle"><i className="fab fa-facebook-f"></i></div>
        <div className="in-circle"><i className="fab fa-instagram"></i></div>
        <div className="li-circle"><i className="fab fa-linkedin"></i></div>
        <div className="tw-circle"><i className="fab fa-twitter"></i></div>
        <div className="wh-circle"><i className="fab fa-whatsapp"></i></div>
        <div className="te-circle"><i className="fab fa-telegram"></i></div>
      </div> */}
    </div>
    <div className="team">
      <div className="col-sm-12">
      <div className="fix col-sm-3"><div className="member-1"><img src='rajiv-goyal.svg' alt='Rajiv Goyal'></img></div><div className="detail-1">Rajiv Goyal, Director</div></div>
      <div className="col-sm-3"><div className="member-2"><img src='vandana-goyal.svg' alt='Vandana Goyal'></img></div><div className="detail-2">Vandana Goyal, Director</div></div>
      <div className="col-sm-3"><div className="member-3"><img src='Ashok-Jain.svg' alt='Ashok Jain'></img></div><div className="detail-3">Ashok Jain, Head, Marketing</div></div>
      <div className="col-sm-3"><div className="member-4"><img src='rajat-goyal.svg' alt='Rajat Goyal'></img></div><div className="detail-4">Rajat Goyal, Head, Merchandizing</div></div>
      </div>
      </div>
    </div>
    <div className="contact col-sm-6">
    <div className="contact-font">Contact</div>
    <div className="dot-and-bar"><span className="circle"></span><span className="line"></span></div>
    <div className="contact-details">
      <div className="user-message">If you have any questions or just want to get in touch, use the form below. We look forward to hearing from you! You can get in touch with us directly at contact@purpletree.in</div>
      <div className="successful-message">Your Message Has Been Sent Successfully! We Will get back To You Within 24 - 48 Hours.</div>
      <div className="user-form">
        <form id="contactForm">
          <div className="userName">
            <input type="Text" name="Name" id="name" placeholder="Name" required></input>
          </div>
          <div className="userEmail">
            <input type="Text" name="Email" id="email" placeholder="Email Id" required></input>
          </div>
          <div className="userMessage">
            <textarea name="Message" rows="6" cols="50" id="message" placeholder="Message" required></textarea>
          </div>
          <div className="userSubmit">
            <button type="submit">Submit</button>
          </div>       
        </form>
      </div>
    </div>
    </div>
  </div>
  </div>
  )
  
  ReactDOM.render(myfirstelement, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorkerRegistration.register();
