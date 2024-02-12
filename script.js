
var h1 = document.querySelector(".preloader h1");
var pageloader = document.querySelector(".preloader")
var tl = gsap.timeline()
var image = document.querySelector("img")

let i = 0;
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
        start : "top 80%",
        end:"top -50%",
        scrub:1,
    }
})
gsap.to(".page1 video",{
    transform : "scale(1)",
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        scrub:2,
        start:("top 10%")
    }
})
gsap.to(".page2 img",{
    y : -100,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start : "top 40%",
        end:"top -60%",
        scrub:2,
        // pin:true,
    }
})

const productElements = document.querySelectorAll(".product");
const totalWidth = Array.from(productElements).reduce(
    (acc, element) => acc + element.offsetWidth,
    0
);

// Set the GSAP animation with a duration based on the total width
gsap.to(".products", {
    transform : "translateX(-100%)",
    duration: 30, // Adjust the factor as needed
    ease: "linear",
    repeat: -1,
});
gsap.to(".parentproducts",{
    transform : "translateX(-100%)",
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start : "top 60%",
        end:"top -100%",
        scrub:2,
    }
})
gsap.to(".prdctcatg",{
    // x: `-${totalWidth}px`,
    transform : "translateX(-370%)",
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
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
        scroller:"body",
        // markers : true,
        start:"top 50%",
        end: "top -100%",
        // pin : true,
        scrub :1,
    }
})
gsap.to(".page6 .latestarrival", {
    transform :"translateX(-100%)",
    duration:25, // Adjust the factor as needed
    ease: "linear",
    repeat: -1,
    
});
gsap.to(".page6 .parentproducts",{
    transform :"translateX(-100%)", 
    scrollTrigger:{
        trigger:".page6",
        scroller:"body",
        start : "top 60%",
        end:"top -100%",
        scrub:2,
    }
})
gsap.to(".page7 .leftimg img",{
    scale:1,
    // y:"-100%",
    scrollTrigger:{
        scroller:"body",
        trigger:".leftimg",
        // markers:true,
        scrub:2,
        start:"top 90%"
    }
})
gsap.to(".page7 .leftimg",{
    // scale:1,
    y:"-100%",
    scrollTrigger:{
        scroller:"body",
        trigger:".leftimg",
        // markers:true,
        scrub:2,
        start:"top 50%",
        // end:"top -50%",
    }
})
gsap.to(".page7 .newsletter",{
    // scale:1,
    y:"-120%",
    scrollTrigger:{
        scroller:"body",
        trigger:".leftimg",
        // markers:true,
        scrub:2,
        start:"top -30%",
        // end:"top -50%",
    }
})
gsap.to(".page7 .subscribe",{
    // scale:1,
    y:"-180%",
    scrollTrigger:{
        scroller:"body",
        trigger:".subscribe",
        // markers:true,
        scrub:2,
        start:"top 50%",
        // end:"top -20%",
    }
})
gsap.to(".page7 .right",{
    // scale:1,
    // y:"-100%",
    scrollTrigger:{
        scroller:"body",
        trigger:".page7",
        // markers:true,
        pin:true,
        scrub:2,
        start:"top 0%"
    }
})
gsap.to(".page8 .footer img",{
    scale:.8,
    // y:"-100%",
    // ease: "power1.inOut",
    scrollTrigger:{
        scroller:"body",
        trigger:".page8",
        scrub:2,
        start:"top 50%"
    }
})