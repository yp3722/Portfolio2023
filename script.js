// const lenis = new Lenis()

// lenis.on('scroll', ScrollTrigger.update);

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000);
// })

// gsap.ticker.lagSmoothing(0);


function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// let initialLoadTimeline = gsap.timeline({defaults:{duration: 0.75, opacity: 0, ease: "expo.out"}});
// initialLoadTimeline
//     .from('.landing-introduction h1',{x :'-95%'}, 0)
//     .from('.landing-introduction h4',{x :'-60%'}, 0)
//     .from('.landing-introduction p' ,{x :'-25%'}, 0)
//     .from('.button-wrapper '        ,{x :'-35%'}, 0);


// gsap.to(".landing-introduction", {
//     scrollTrigger: {
//         trigger: ".landing-introduction",
//         pin: true,
//         scrub: true,
//         toggleActions: 'play none reverse none',
//         start: 0,
//         end: 500,
//     },
//     opacity: 0,
//     scale: 0.85
// });

// gsap.to("body", {
//   scrollTrigger: {
//       trigger: "body",
//       scrub: true,
//       toggleActions: 'play none reverse none',
//       start: 490,
//       end: 800,
//   },
//   backgroundColor: "black"
// });