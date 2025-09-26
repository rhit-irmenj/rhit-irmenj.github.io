
    function changeButtonText(){
        let button1 = document.getElementById("courseButton");
        let button2 = document.getElementById("not_completed")
        completedId = ["completed1","completed2","completed3","completed4","completed5"];
        notCompletedID = ["not_completed1","not_completed2","not_completed3","not_completed4","not_completed5"];
        i=0;
      
        let text1= document.getElementById(completedId[i]).innerHTML;
        let text2 = document.getElementById(notCompletedID[i]).innerHTML;
        i++;
        button1.innerHTML = text1;
        button2.innerHTML = text2;
        if( i >= completedId.length ){
            i = 0;
        }
       
    }
    

    function navBar(){
              
            fetch("nav.html")
            .then(response=> response.text())
            .then(data => {
                document.getElementById("nav-placeholder").innerHTML = data;
            })
            .catch( error => console.log("Error: ", error))
        };
       
     function footer(){
        
            fetch("footer.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("footer-placeholder").innerHTML = data;

            })
            .catch(error => console.log("Error: ", error))
        };

    document.addEventListener("DOMContentLoaded", function(){
        navBar();
        footer();
        setInterval(changeButtonText(),2000);
    });
  
