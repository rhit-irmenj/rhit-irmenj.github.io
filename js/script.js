
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

        let links = {"Handshake Profile" :"https://rose-hulman.joinhandshake.com/profiles/5n9pf8", "Linkedin Profile": "https://www.linkedin.com/in/julia-irmen/"};
        function footer1(){
                let footer =document.getElementById("footer-placeholder");
                
                for(const[name, url] of Object.entries(links)){
                    let p = document.createElement("p");
                   let a1 = document.createElement("a");
                    a1.href= url;
                    a1.title = "Julia Irmen's "+ name;
                    a1.innerHTML = name
                    p.appendChild(a1);
                    footer.appendChild(p);
                }
                let button = document.createElement("button");
                button.textContent = "Click me to return to the top!";
                button.id = "button1";
                footer.append(button);

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
            document.querySelector("#button1").addEventListener("click", () =>{
                window.scrollTo({
                    top:0,
                    behavior:"smooth"});
                })
        }

    let index = 0;
    notCompleteID = ["Computer Architecture 1 and 2","Intro to Web Programming","Programming Language Concepts","Intro to Database Systems","Operating Systems"]; 
    completeId= ["Intro to Software Development","Object Oriented Software Development","Intro to Systems Programming","Intro to Systems","Data Structures and Algorithms"]; 
    function changeButtonText(){
        let button1 = document.getElementById("courseButton1");
        let button2 = document.getElementById("courseButton2");
        
        index++;
        button1.innerText = completeId[index];
        button2.innerText = notCompleteID[index];
        if(index == completeId.length-1){
            index =0;
        }


    }              

        window.addEventListener("load", (event) => {
          navBar1();
            footer1();
            setupListeners();
            setInterval(changeButtonText,2000);  
        })
    
    


  
