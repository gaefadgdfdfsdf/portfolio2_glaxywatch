

// gsap.registerPlugin(ScrollTrigger);

// let panels = gsap.utils.toArray(".section2_container"); //.section_2box
// let lastPanel = panels[panels.length - 1];

// // ScrollTrigger 등록
// let tops = panels.map(panel =>
//   ScrollTrigger.create({ trigger: panel, start: "top top" })
// );

// // 각 패널을 고정
// panels.forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top top",
//     pin: i !== panels.length - 1, // 마지막 패널에서는 pin을 해제
//     pinSpacing: i !== panels.length - 1, // 마지막 패널에서는 pinSpacing도 해제
//   });
// });

// // Snap 설정 (section2 내부에서만 적용)
// ScrollTrigger.create({
//   trigger: ".part-inner", //.section2_container
//   start: "top top",
//   end: "bottom bottom",
//   snap: {
//     snapTo: (progress, self) => {
//      let panelStarts = tops.map(st => st.start);
//       let snapScroll = gsap.utils.snap(panelStarts, self.scroll());
//       return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
//     },
//     duration: 0.5
//   }
// });




