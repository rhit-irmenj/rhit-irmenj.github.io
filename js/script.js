
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

        let navHeaders = {"Main Page": "./index.html", "Resume":"./resume.html","Portfolio": "./portfolio.html"};
        
        function navBar1(){
            let list1 = document.getElementById("nav-placeholder");
            for(const[name,url] of Object.entries(navHeaders)){
             
            let p = document.createElement("p");
            let a = document.createElement("a");
            a.href = url;
            a.innerHTML = name;
            p.append(a);
            list1.append(p);
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

        let links={"Handshake Profile" :"https://rose-hulman.joinhandshake.com/profiles/5n9pf8", "Linkedin Profile": "https://www.linkedin.com/in/julia-irmen/"};
        function footer1(){
                let footer =document.getElementById("footer-placeholder");
                // let p = document.createElement("p");
                for(const[name, url] of Objects.entries(links)){
                let p = document.createElement("p");
                   let a1 = document.createElement("a");
                    a1.href= url;
                    a1.title = "Julia Irmen's "+ name;
                    a1.innerHTML = name
                    p.appendChild(a1);
                    footer.appendChild(p);
                }
                // let a1 = document.createElement("a");
                // a1.href=links["handshake"]
                // a1.title ="Handshake Profile"
                // a1.innerHTML = "Handshake Profile"
                // p.appendChild(a1);
                // footer.appendChild(p);

                // let a2 =document.createElement("a");
                // a2.href=links["linkedin"]
                // a2.title ="Linked Profile"
                // a2.innerHTML = "Linked Profile"
                // p.appendChild(a2);
                // footer.appendChild(p);
        
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
            //setupListeners();
            //setInterval(changeButtonText(),2000);  
        })
    


  
