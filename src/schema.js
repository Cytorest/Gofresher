import React from 'react';

const YourComponent = () => {
    return (
      <div>
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"WebSite",
            "url":"https://gofresher.in",
            "potentialAction":{
            "@type":"SearchAction",
            "target":"https://gofresher.in/search?q={search_term_string}",
            "query-input":"required name=search_term_string"
          }
          }
          `}
        </script>
        
        <script type="application/ld+json">
          {`
          {
            "@context":"http://schema.org/",
            "@type":"WebPage",
            "name":"Gofresher - Helping Jobseekers In India",
            "description":"Gofresher Is A Community Of JobSeekers Seeking Jobs In India. We Help Job Seekers Get A Job Through Our Help.",
            "keywords":"Gofresher, Gofresher.org, Jobs, Jobs In India, Job Updates In India, Job, Jobseeker",
            "speakable":{
            "@type":"SpeakableSpecification",
            "cssSelector":[
            "Gofresher - Helping Jobseekers In India",
            "Gofresher Is A Community Of JobSeekers Seeking Jobs In India. We Help Job Seekers Get A Job Through Our Help."
            ]
            },
            "url":"https://gofresher.in",
            "mainContentOfPage":"Online Job Portal",
            "inLanguage":"en"
          }
          `}
        </script>
      </div>
    )
  };
  
  export default YourComponent;