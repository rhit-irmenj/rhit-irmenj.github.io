
   let i=0;
    let button1 = document.getElementById("courseButton1");
    let button2 = document.getElementById("courseButton2");
    completedId = ["completed1","completed2","completed3","completed4","completed5"];
     notCompletedID = ["not_complete1","not_complete2","not_complete3","not_complete4","not_complete5"];

   function changeButtonText(){

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

        let navHeaders = {"index": "./index.html", "resume":"./resume.hmtl","portfolio": "./portfolio.html"};
        
        function navBar1(){

            for(value in navHeaders.values()){
             let list1 = document.querySelector("#nav");
             let li = document.createElement("li");
            li.href = value;
            li.title=navHeaders.keys(value);
            list1.append(li);
            }
}

       
     function footer(){
        
            fetch("footer.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("footer-placeholder").innerHTML = data;

            })
            .catch(error => console.log("Error: ", error))
        };

        let links={"handshake" :"https://rose-hulman.joinhandshake.com/profiles/5n9pf8", "linkedin": "https://www.linkedin.com/in/julia-irmen/"};
        function footer1(){
         
                let p = document.createElement("p");
                let a1 = document.createAttribute("a");
                a1.href=links[handshake]
                a1.title ="Handshake Profile"
                a1.textContent = "Handshake Profile"
                p.appendChild(a);

                let a2 =document.createAttribute("a");
                a1.href=links[linkedin]
                a1.title ="Linked Profile"
                a1.textContent = "Linked Profile"
                p.appendChild(a);
            };

    
        
        function setupListeners(){
                  let scrollButton = document.getElementById("toTop");
        scrollButton.addEventListener("click", () => {
            console.log("click");
        window.scrollTo({
            top:0,
            behavior:"smooth"
    });
}
)
        };

        window.addEventListener("load", (event) => {
          navBar1();
            footer1();
            setupListeners();
            setInterval(changeButtonText(),2000);  
        })
    


  
