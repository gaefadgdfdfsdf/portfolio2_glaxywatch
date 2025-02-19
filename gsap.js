// gsap.registerPlugin(ScrollTrigger);

// let panels = gsap.utils.toArray(".section_2box");
// // we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
// let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

// panels.forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
//     pin: true, 
//     pinSpacing: false 
//   });
// });

// ScrollTrigger.create({
//   snap: {
//     snapTo: (progress, self) => {
//       let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
//           snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
//       return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
//     },
//     duration: 0.5
//   }
// });



gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".section_2box");
let lastPanel = panels[panels.length - 1];

// ScrollTrigger 등록
let tops = panels.map(panel =>
  ScrollTrigger.create({ trigger: panel, start: "top top" })
);

// 각 패널을 고정
panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: i !== panels.length - 1, // 마지막 패널에서는 pin을 해제
    pinSpacing: i !== panels.length - 1, // 마지막 패널에서는 pinSpacing도 해제
  });
});

// Snap 설정 (section2 내부에서만 적용)
ScrollTrigger.create({
  trigger: ".section2_container",
  start: "top top",
  end: "bottom bottom",
  snap: {
    snapTo: (progress, self) => {
     let panelStarts = tops.map(st => st.start);
      let snapScroll = gsap.utils.snap(panelStarts, self.scroll());
      return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
    },
    duration: 0.5
  }
});






