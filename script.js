var body = document.querySelector(".preloader")
var h1 = document.querySelector("h1");

var tl = gsap.timeline()



let i = 0
 var int = setInterval(function(){
    if(i<100){
        i++
        // console.log(i)
        h1.innerHTML = i + "%"
        
    }else{
        // h1.innerHTML = ,
        tl.to("h1",{
            duration:2,
            delay : 1,
            opacity :0
        }) 
        tl.to(".preloader",{
            top: "-100%",
            // delay:2,
        }) 
        
    }
}, 40)
