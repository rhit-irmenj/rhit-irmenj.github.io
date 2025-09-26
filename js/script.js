
   let i=0;
    let button1 = document.getElementById("courseButton1");
    let button2 = document.getElementById("courseButton2");
   function changeButtonText(){

        completedId = ["completed1","completed2","completed3","completed4","completed5"];
        notCompletedID = ["not_complete1","not_complete2","not_complete3","not_complete4","not_complete5"];

        let text1= document.getElementById(completedId[i]).innerHTML;
        let text2 = document.getElementById(notCompletedID[i]).innerHTML;
        i++;
        button1.innerHTML = text1;
        button2.innerHTML = text2;
        if( i >= completedId.length ){
            i = 0;
        }

    }
    let scrollButton = document.getElementById("toTop");
    scrollButton.addEventListener("click", () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"

        })
    });
   
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
        setInterval(changeButtonText,2000);
    });
  
