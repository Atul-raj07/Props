
var h1 = document.querySelector(".preloader h1");
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
            delay : 1,
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
        // tl.to(image,{
        //     x : 100,
        //     // display : "inline",
        //     // duration : 5 ,
        //     ease: "power4.out",
        //     opacity : 0
        // })
          tl.to(pageloader,{
            y : "-100%",
            duration : 1,
        })
    }
}, 20)
var prdctofday = document.querySelector(".productofday")

gsap.to(".productofday",{
    y : -600,
    scrollTrigger:{
        trigger:".productofday",
        scroller:"body",
        markers:true,
        start : "top 90%",
        end:"top -50%",
        scrub:1,
        // pin:true,
    }
})
gsap.to(".overlay",{
    y : -600,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        markers:true,
        start : "top 0%",
        end:"top 0%",
        scrub:1,
        // pin:true,
    }
})