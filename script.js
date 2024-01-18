gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

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
        scroller:".main",
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
        scroller:".main",
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
        scroller:".main",
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
        scroller:".main",
        // markers:true,
        start : "top 60%",
        end:"top -100%",
        scrub:2,
    }
})
// gsap.to(".prdctcatg", {
    // x: `-${totalWidth}px`,
    // duration: totalWidth / 200, // Adjust the factor as needed
    // ease: "linear",
    // repeat: -1,
    
// });

gsap.to(".prdctcatg",{
    // x: `-${totalWidth}px`,
    transform : "translateX(-370%)",
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        // markers:true,
        start : "top 0%",
        // end:"top -50%",
        scrub:1,
        pin:true,
    }
})
gsap.to(".page5 img",{

    scale : 1,
    scrollTrigger:{
        trigger:".page5",
        scroller:".main",
        // markers : true,
        start:"top 50%",
        end: "top -100%",
        // pin : true,
        scrub :1,
    }
})
gsap.to(".page5",{
    y : -100,
    scrollTrigger:{
        trigger:".page5",
        scroller:".main",
        markers : true,
        start:"top 50%",
        end: "top -50%",
        // pin : true,
        scrub :1,
    }
})
