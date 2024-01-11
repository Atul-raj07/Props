
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
        // markers:true,
        start : "top 80%",
        end:"top -50%",
        scrub:1,
        // pin:true,
    }
})
gsap.to(".page2 img",{
    y : -100,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start : "top 40%",
        end:"top -60%",
        scrub:2,
        // pin:true,
    }
})
// gsap.from(".productofday p",{
//     y : 100,
//     opacity :0,
//     scrollTrigger:{
//         trigger:".productofday",
//         scroller:"body",
//         markers:true,
//         start : "top 80%",
//         end:"top 0%",
//         scrub:1,
//         pin:true,
//     }
// })

gsap.to(".overlay",{
    y : -100,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        // markers:true,
        start : "top 0%",
        end:"top 0%",
        scrub:1,
        // pin:true,
    }
})
// Get the total width of all .product elements
const productElements = document.querySelectorAll(".product");
const totalWidth = Array.from(productElements).reduce(
    (acc, element) => acc + element.offsetWidth,
    0
);

// Set the GSAP animation with a duration based on the total width
gsap.to(".product", {
    x: `-${totalWidth}px`,
    duration: totalWidth / 200, // Adjust the factor as needed
    ease: "linear",
    repeat: -1,
    
});
gsap.to(".product",{
    x: `-${totalWidth}px`,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        markers:true,
        start : "top 60%",
        end:"top -100%",
        scrub:4,
    }
})