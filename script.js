var body = document.querySelector(".preloader")
var h1 = document.querySelector("h1");
var pageloader = document.querySelector(".preloader")
var tl = gsap.timeline()
var image = document.querySelector("img")

let i = 0;
// while(i < 100){
//     i++
// }
const intervalId = setInterval(() => {
    if(i < 100){
        i++
        console.log(i)
        h1.innerHTML = i + "%";
    }else{
        tl.to(h1,{
            // y : "10%",
            delay : 2,
            innerHTML : "PROPS",
            ease: "power4.out",
        })
        tl.to(image,{
            // x : 100,
            opacity : 1,
            display : "inline",
            duration : 2,
            ease: "power4.out",
        })
        tl.to(image,{
            x : 100,
            // display : "inline",
            // duration : 5 ,
            ease: "power4.out",
            opacity : 0
        })
          tl.to(pageloader,{
            y : "-100%",
            duration : 1,
        })
    }
}, 30)