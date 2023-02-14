import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import YourComponent from './schema.js';

const schema =(
    <div>
      <YourComponent/>
    </div>
  );

const myfirstelement = (
  <div>
  <div className="one col-sm-12">
      <div className="contact col-sm-10">
        <div className="phone-container"><i className="fas fa-phone"></i> <span className="number">+91-9870967898</span></div>
        <div className="email-container"><i className="fas fa-envelope"></i> <span className="email">support@gofresher.in</span></div>
      </div>
      
      <div className="social-connect col-sm-2">
        {/* <div className="icon-holder">
         <i className="fab fa-facebook-f"></i>
         <i className="fab fa-instagram"></i>
         <i className="fab fa-linkedin"></i>
         <i className="fab fa-twitter"></i>
         <i className="fab fa-whatsapp"></i>
         <i className="fab fa-telegram"></i>
        </div> */}
        <div id="user"></div>
      </div>
  </div>
  
  <div className="two col-sm-12">
    <div className="logo col-sm-4">
      <div className="logo-img"><img src='gofresher-logo.svg' width="250" height="102" alt='Gofresher Company Logo'/></div>
    </div>
    <div className="menu col-sm-8">
      <ul>
        <a href="https://gofresher.in"><li>Home</li></a>
        <a href="https://gofresher.in/about-us.html"><li>About</li></a>
        <a href="https://gofresher.in"><li>Services</li></a>
        <a href="https://gofresher.in"><li>Feedback</li></a>
        <a href="https://gofresher.in/contact-us.html"><li>Contact</li></a>
      </ul>
    </div>
  </div>

  <div class="navigation-menu col-sm-12">
        <div class="navigation-items">
            <a class="navigation-item" href="/topic/fresher-jobs.html">Fresher Jobs</a>
            <a class="navigation-item" href="/topic/internships-in-india.html">Internships</a>
            <a class="navigation-item" href="/topic/2021-batch.html">2021 Batch</a>
            <a class="navigation-item" href="/topic/2022-batch.html">2022 Batch</a>
            <a class="navigation-item" href="/topic/2023-batch.html">2023 Batch</a>
            <a class="navigation-item" href="/topic/bangalore-fresher-jobs.html">Bangalore Fresher Jobs</a>
            <a class="navigation-item" href="/topic/chennai-fresher-jobs.html">Chennai Fresher Jobs</a>
            <a class="navigation-item" href="/topic/hyderabad-fresher-jobs.html">Hyderabad Fresher Jobs</a>
            <a class="navigation-item" href="/topic/mumbai-fresher-jobs.html">Mumbai Fresher Jobs</a>
            <a class="navigation-item" href="/topic/noida-fresher-jobs.html">Noida Fresher Jobs</a>
            <a class="navigation-item" href="/topic/pune-fresher-jobs.html">Pune Fresher Jobs</a>
            <a class="navigation-item" href="/topic/off-campus-updates.html">Off Campus Updates</a>
        </div>
    </div>
  
  <div className="three col-sm-12">
  <div className="about-head col-sm-12">About Us</div>
    <div className="dot-and-bar"><span className="line"></span><span className="circle"></span><span className="line"></span></div>
    <div className="companyDetails col-sm-6">
      <div className="companyText"><h1>Gofresher</h1> is a group of working professionals who help jobseekers get their dream job. We provide resume development services and placement assistance services with an aim of guiding job seekers on how to score a job and search for a job in the right way.</div>
  
  <div className="focus-detail col-sm-12">
        <div className="left-detail col-sm-6">
        <div className="left-heading"><h2>20+ Years Of Experience</h2><div className="left-text">We are backed by a highly dedicated placement assistance team to ensure that jobseekers with different backgrounds are able to pursue leads with a high chance of response. The resume development and designing team spends a lot of time understanding the latest trends and plans the portfolio accordingly.</div></div>
        </div>
        <div className="right-detail col-sm-6">
        <div className="right-heading"><h2>Committed To Helping And Assisting</h2><div className="right-text">While the market is very dynamic and the hiring pattern for companies is changing regularly, the team offers dedicated jobseekers to cultivate and utilize our experience and knowledge in the jobseeking domain to land a job. Since we are working professionals who aim to help job seekers through whatever help we get from company professionals and employees, the pricing has been included so that it is justifiable to our team as well as is easy on your pockets.</div></div>
        </div>
      </div>
  
      </div>
    <div className="companyImage col-sm-6">
      <div className="imageHolder">
        <div className="imageBorder">
          <div className="mainImage"><img src="company-building.svg" width="320" height="350" alt="Company Interior"/></div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="four col-sm-12">
    <div className="client-head col-sm-12">Services</div>
    <div className="dot-and-bar"><span className="line"></span><span className="circle"></span><span className="line"></span></div>
    <div className="client-name col-sm-12">
      <div className="pri col-sm-4"><a href="listings.html" target="_blank" rel="noreferrer"><div className="client 1"><img src='max.svg' width='150' height='150' alt='Max Fashion'/></div></a><div className="client 2"><img src='reliance.svg' width='150' height='150' alt='Reliance'/></div></div>
      <div className="sec col-sm-4"><div className="client 3"><img src='soch.svg' width='150' height='150' alt='Soch Apparels'/></div><div className="client 4"><img src='pantaloons.svg' width='150' height='150' alt='Pantaloons'/></div></div>
      <div className="tre col-sm-4"><div className="client 5"><img src='vishal.svg' width='150' height='150' alt='Vishal Mega Mart'/></div><a href="off-campus-job-updates.html"><div className="client 6"><img src='home-shop-18.svg' width='150' height='150' alt='Home Shop 18'/></div></a></div>
      <div className="fou col-sm-4"><div className="client 7"><img src='more.svg' width='150' height='150' alt='More Retail Office'/></div></div>
    </div>
  </div>
  
  <div className="five col-sm-12">
    <div className="automation col-sm-12">Feedback</div>
    <div className="dot-and-bar"><span className="line"></span><span className="circle"></span><span className="line"></span></div>
    <div className="automation-text">We are overwhelmed by the kind of response received from<h3> all our placed jobseekers through guidance from professionals on our site and through groups like Facebook & Twitter</h3> who have written to us with such delightful reviews. People have been placed in companies like <h3>TCS, Cognizant, Wipro, Larsen & Toubro, Ernst & Young</h3>, and many more. Through your hard work and dedication and a little help from us, <h3>you can also get placed.</h3> Connect with us and achieve your dream job. <h3>We are always here for your help.</h3></div>
    <div className="seven col-sm-12">
      <div className="smallBox">
        <div className="avt col-sm-4"><img src='feedback-placeholder.svg' width='456' height='404' alt='Feedback Placeholder 1 Gofresher'/></div>
        <div className="avt col-sm-4"><img src='feedback-placeholder.svg' width='456' height='404' alt='Feedback Placeholder 2 Gofresher'/></div>
        <div className="avt col-sm-4"><img src='feedback-placeholder.svg' width='456' height='404' alt='Feedback Placeholder 3 Gofresher'/></div>
      </div>
    </div>
    <div className="eight col-sm-12">
      <div className="smallBox">
        <div className="avt col-sm-4"><img src='feedback-placeholder.svg' width='456' height='404' alt='Feedback Placeholder 1 Gofresher'/></div>
        <div className="avt col-sm-4"><img src='feedback-placeholder.svg' width='456' height='404' alt='Feedback Placeholder 2 Gofresher'/></div>
        <div className="avt col-sm-4"><img src='feedback-placeholder.svg' width='456' height='404' alt='Feedback Placeholder 3 Gofresher'/></div>
      </div>
    </div>
    <div className="nine col-sm-12">
      <a href="https://www.facebook.com/groups/1570589976551608" target="_blank" rel="noreferrer"><div className="review-button">
      See All Reviews &gt;&gt;
      </div></a>
    </div>
  </div>
  
  <div className="six col-sm-12">
    <div className="address col-sm-6">
    <div className="address-font">Address</div>
    <div className="dot-and-bar"><span className="circle"></span><span className="line"></span></div>
    <div className="address-details">
      <div className="name-div"><i className="fas fa-tag"></i><div className="company-name">Gofresher</div></div>
      <div className="phone-div"><i className="fas fa-phone"></i><div className="number"> +91-9870967898</div></div>
      <div className="email-div"><i className="fas fa-envelope"></i><div className="email"> support@gofresher.in</div></div>
      <div className="location-div"><i className="fas fa-map-marked-alt"></i><div className="location-text"> Lucknow</div></div>
      <div className="social">
        <div className="fb-circle"><i className="fab fa-facebook-f"></i></div>
        <div className="in-circle"><i className="fab fa-instagram"></i></div>
        <div className="li-circle"><i className="fab fa-linkedin"></i></div>
        <div className="tw-circle"><i className="fab fa-twitter"></i></div>
        <div className="wh-circle"><i className="fab fa-whatsapp"></i></div>
        <div className="te-circle"><i className="fab fa-telegram"></i></div>
      </div>
    </div>
    {/* <div className="team">
      <div className="col-sm-12">
      <div className="fix col-sm-3"><div className="member-1"><img src='rajiv-goyal.svg' alt='Rajiv Goyal'></img></div><div className="detail-1">Rajiv Goyal, Director</div></div>
      <div className="col-sm-3"><div className="member-2"><img src='vandana-goyal.svg' alt='Vandana Goyal'></img></div><div className="detail-2">Vandana Goyal, Director</div></div>
      <div className="col-sm-3"><div className="member-3"><img src='Ashok-Jain.svg' alt='Ashok Jain'></img></div><div className="detail-3">Ashok Jain, Head, Marketing</div></div>
      <div className="col-sm-3"><div className="member-4"><img src='rajat-goyal.svg' alt='Rajat Goyal'></img></div><div className="detail-4">Rajat Goyal, Head, Merchandizing</div></div>
      </div>
      </div> */}
    </div>
    <div className="contact col-sm-6">
    <div className="contact-font">Contact</div>
    <div className="dot-and-bar"><span className="circle"></span><span className="line"></span></div>
    <div className="contact-details">
      <div className="user-message">If you have any questions or just want to get in touch, use the form below. We look forward to hearing from you! You can get in touch with us directly at support@gofresher.in</div>
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

ReactDOM.render(schema, document.getElementById('schema'));

reportWebVitals();

serviceWorkerRegistration.register();

window.addEventListener("load", () => {
  window.setTimeout(function () {
    $(".client.1 img").hover(function () {
      $(this).attr("src", "max-replace.svg");
    }, function () {
      $(this).attr("src", "max.svg");
    });
    $(".client.2 img").hover(function () {
      $(this).attr("src", "reliance-replace.svg");
    }, function () {
      $(this).attr("src", "reliance.svg");
    });
    $(".client.3 img").hover(function () {
      $(this).attr("src", "soch-replace.svg");
    }, function () {
      $(this).attr("src", "soch.svg");
    });
    $(".client.4 img").hover(function () {
      $(this).attr("src", "pantaloons-replace.svg");
    }, function () {
      $(this).attr("src", "pantaloons.svg");
    });
    $(".client.5 img").hover(function () {
      $(this).attr("src", "vishal-replace.svg");
    }, function () {
      $(this).attr("src", "vishal.svg");
    });
    $(".client.6 img").hover(function () {
      $(this).attr("src", "home-shop-18-replace.svg");
    }, function () {
      $(this).attr("src", "home-shop-18.svg");
    });
    $(".client.7 img").hover(function () {
      $(this).attr("src", "more-replace.svg");
    }, function () {
      $(this).attr("src", "more.svg");
    });
  },5000);
});

window.addEventListener("load", () => {
  window.setTimeout(function () {
  document.getElementsByClassName("avt")[0].innerHTML = "<img src='review-1.svg' width='456' height='404' alt='Review 1 Gofresher'/>";
  document.getElementsByClassName("avt")[1].innerHTML = "<img src='review-2.svg' width='456' height='404' alt='Review 2 Gofresher'/>";
  document.getElementsByClassName("avt")[2].innerHTML = "<img src='review-3.svg' width='456' height='404' alt='Review 3 Gofresher'/>";
  document.getElementsByClassName("avt")[3].innerHTML = "<img src='review-4.svg' width='456' height='404' alt='Review 4 Gofresher'/>";
  document.getElementsByClassName("avt")[4].innerHTML = "<img src='review-5.svg' width='456' height='404' alt='Review 5 Gofresher'/>";
  document.getElementsByClassName("avt")[5].innerHTML = "<img src='review-6.svg' width='456' height='404' alt='Review 6 Gofresher'/>";
  },3000);
});
