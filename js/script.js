
    let button = document.getElementById("completedCoursed");
    courseId = ["course1","course2","course3","course4","course5"];
    i=0;
    setInterval(function(){
        button.innerHTML=courseId[i++].innerHTML;
        i=courseId.length === 1? 0:1;
    },2000);
    