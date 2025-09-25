
  
  setInterval(changeButtonText, 2000);
    function changeButtonText(){
        let button1 = document.getElementById("courseButton");
        let button2 = document.getElementById("not_completed")
        completedId = ["completed1","completed2","completed3","completed4","completed5"];
        notCompletedID = ["not_completed1","not_completed2","not_completed3","not_completed4","not_completed5"];
        i=0;
        j=0;
        button1.innerHTML=completedId[i++].innerHTML;
        button2.innerHTML=notCompletedID[j++].innerHTML;
        i=completedIdId.length === 1? 0:1;
        j=completedIdId.length === 1? 0:1;

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
        
            fetch("nav.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("footer-placeholder").innerHTML = data;

            })
            .catch(error => console.log("Error: ", error))
        };
        
    document.addEventListener("DOMContentLoaded", function(){
        navBar();
        footer();
    });
  
