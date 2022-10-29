function createPages(name,value,days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = date.toGMTString();
    document.cookie = name+"="+value+"; expires="+expires+"; path=/";
 }
 
 function readPages(name) {
     var flag = 0;
     var dcmntPages = document.cookie.split(';');
     for(var i=0;i < dcmntPages.length;i++) {
         var ck = dcmntPages[i];
         while (ck.charAt(0)==' ') {
             ck = ck.substring(1,ck.length);
         }
         if(ck) {
             cparts = ck.split('=');
             if (cparts[0] == name) flag=1;
         }              
     }     
     if(flag) { 
         return true; 
     } else {
         return false; 
     }  
 }
 
 function checkPages(name) {
     if (readPages(name)) {
         content.innerHTML += "<div class='bell-icon' id='bell-icon-"+i+"'><img src='bell-icon.png'></div><span id='hiring-organisation-logo-"+i+"' class='logo-top'><img src="+ doc.data()['hol'] +"></span><br><br><span id='custom-top-text'>"+doc.data()['ctt']+"</span><br><br><span class='pub_date'>Published Date: </span><span class='pub_date'>"+date+" at "+time+"</span><br><br><span class='postings'>Hiring Organisation Name: </span><span class='postings-text' id='hiring-organisation-name="+i+"'>"+doc.data()['hon']+"</span><br><br><span class='postings'>Job Title: </span> <span class='postings-text' id='job-title-"+i+"'>"+doc.data()['jt']+"</span><br><br><span class='postings'>Job Description: </span> <span class='postings-text' id='job-description"+i+"'>"+doc.data()['jd']+"</span><br><br><span class='postings'>Date Posted: </span><span class='postings-text' id='date-posted'>"+doc.data()['dp']+"</span><br><br><span class='postings'>Date Closing: </span> <span class='postings-text' id='date-closing'>"+doc.data()['dc']+"</span><br><br><span class='postings'>Employment Type: </span> <span class='postings-text' id='employment-type'>"+doc.data()['et']+"</span><br><br><span class='postings'>Hiring Organisation Type: </span> <span class='postings-text' id='hiring-organisation-type'>"+doc.data()['hot']+"</span><br><br><span class='postings'>Hiring Organisation Url: </span><span class='postings-text' id='hiring-organisation-url'>"+doc.data()['hou']+"</span><br><br><span class='postings'>Job Location Address: </span><span class='postings-text' id='location-address'>"+doc.data()['jla']+"</span><br><br><span class='postings'>Job Location City: </span><span class='postings-text' id='location-city'>"+doc.data()['jlc']+"</span><br><br><span class='postings'>Job Location Region: </span><span class='postings-text' id='location-region'>"+doc.data()['jlr']+"</span><br><br><span class='postings'>Job Location Postal Code: </span><span class='postings-text' id='location-postal-code'>"+doc.data()['jlpc']+"</span><br><br><span class='postings'>Job Location Address Country: </span><span class='postings-text' id='location-address-country'>"+doc.data()['jlac']+"</span><br><br><span class='postings'>Salary Currency: </span><span class='postings-text' id='salary-currency'>"+doc.data()['sc']+"</span><br><br><span class='postings'>Salary Value: </span><span class='postings-text' id='salary-value'>"+doc.data()['sv']+"</span><br><br><span class='postings'>Salary Unit: </span><span class='postings-text' id='salary-unit'>"+doc.data()['su']+"</span><br><br><span class='postings'>Application Link: </span><span class='postings-text' id='application-link'><a href="+doc.data()['al']+" target='_blank'>"+doc.data()['al']+"</a></span><br><br><div class='bottom-gradient' id='bottom-graident-"+i+"'><div class='read-full-article' id='read-id-"+i+"'>Read Full Article</div></div>";
         $(document).on('click','#read-id-'+i, function(){
            element = $(this).attr("id").slice(-1);
            console.log(element);
            console.log(previous);
            if(previous != undefined){
                $("#job-wrapper-"+previous).css("background-color", "#ffffff");
            }
            if(counter==1){
                $("#read-id-"+element).hide();
                $("#bottom-graident-"+element).hide();
                $("#job-wrapper-"+element).css('height','auto');
                $("#job-wrapper-"+element).css("background-color", "#effdff");
                previous = element;
                console.log(previous);
                return;
            }
            else{
            if(counter==0)
            {
            console.log("Login To Apply");
            $(".background-gradient").show();
            $(".central-popup").show();
            $(".close").show();
            }
            }
        });
     }
     
     else {
            createPages(name,"cookie 4 the day",30);console.log("Cookie Added For 30 Days");
            content.innerHTML += "<div class='bell-icon' id='bell-icon-"+i+"'><img src='bell-icon.png'></div><span id='hiring-organisation-logo-"+i+"' class='logo-top'><img src="+ doc.data()['hol'] +"></span><br><br><span id='custom-top-text'>"+doc.data()['ctt']+"</span><br><br><span class='pub_date'>Published Date: </span><span class='pub_date'>"+date+" at "+time+"</span><br><br><span class='postings'>Hiring Organisation Name: </span><span class='postings-text' id='hiring-organisation-name="+i+"'>"+doc.data()['hon']+"</span><br><br><span class='postings'>Job Title: </span> <span class='postings-text' id='job-title-"+i+"'>"+doc.data()['jt']+"</span><br><br><span class='postings'>Job Description: </span> <span class='postings-text' id='job-description"+i+"'>"+doc.data()['jd']+"</span><br><br><span class='postings'>Date Posted: </span><span class='postings-text' id='date-posted'>"+doc.data()['dp']+"</span><br><br><span class='postings'>Date Closing: </span> <span class='postings-text' id='date-closing'>"+doc.data()['dc']+"</span><br><br><span class='postings'>Employment Type: </span> <span class='postings-text' id='employment-type'>"+doc.data()['et']+"</span><br><br><span class='postings'>Hiring Organisation Type: </span> <span class='postings-text' id='hiring-organisation-type'>"+doc.data()['hot']+"</span><br><br><span class='postings'>Hiring Organisation Url: </span><span class='postings-text' id='hiring-organisation-url'>"+doc.data()['hou']+"</span><br><br><span class='postings'>Job Location Address: </span><span class='postings-text' id='location-address'>"+doc.data()['jla']+"</span><br><br><span class='postings'>Job Location City: </span><span class='postings-text' id='location-city'>"+doc.data()['jlc']+"</span><br><br><span class='postings'>Job Location Region: </span><span class='postings-text' id='location-region'>"+doc.data()['jlr']+"</span><br><br><span class='postings'>Job Location Postal Code: </span><span class='postings-text' id='location-postal-code'>"+doc.data()['jlpc']+"</span><br><br><span class='postings'>Job Location Address Country: </span><span class='postings-text' id='location-address-country'>"+doc.data()['jlac']+"</span><br><br><span class='postings'>Salary Currency: </span><span class='postings-text' id='salary-currency'>"+doc.data()['sc']+"</span><br><br><span class='postings'>Salary Value: </span><span class='postings-text' id='salary-value'>"+doc.data()['sv']+"</span><br><br><span class='postings'>Salary Unit: </span><span class='postings-text' id='salary-unit'>"+doc.data()['su']+"</span><br><br><span class='postings'>Application Link: </span><span class='postings-text' id='application-link'><a href="+doc.data()['al']+" target='_blank'>"+doc.data()['al']+"</a></span><br><br><div class='bottom-gradient' id='bottom-graident-"+i+"'><div class='read-full-article' id='read-id-"+i+"'>Double Click To Apply</div></div>";
            $(document).on('click','#read-id-'+i, function(){
                window.scrollBy(0, 110);
                element = $(this).attr("id").slice(-1);
                console.log(element);
                console.log(previous);
                if(previous != undefined){
                    $("#job-wrapper-"+previous).css("background-color", "#ffffff");
                }
                if(counter==1){
                    setTimeout(function(){
                    $("#read-id-"+element).hide();
                    $("#bottom-graident-"+element).hide();
                    $("#job-wrapper-"+element).css('height','auto');
                    $("#job-wrapper-"+element).css("background-color", "#effdff");
                    previous = element;
                    console.log(previous);
                    return;
                    },2000);
                }
                else{
                if(counter==0)
                {
                console.log("Login To Apply");
                $(".background-gradient").show();
                $(".central-popup").show();
                $(".close").show();
                }
                }
            });
    }
}
 
 checkPages("MyPages");