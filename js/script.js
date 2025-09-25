
  
  setInterval(changeButtonText, 2000);
    function changeButtonText(){
        let button = document.getElementById("completedCoursed");
        courseId = ["course1","course2","course3","course4","course5"];
        i=0;
        button.innerHTML=courseId[i++].innerHTML;
        i=courseId.length === 1? 0:1;
    }

    function navBar(){
        let nav = document.getElementById("nav-placeholder");
        nav.onload("nav.html");
    }
     function footer(){
        let foot = document.getElementById("footer-placeholder");
        nav.onload("footer.html");
    }
  
