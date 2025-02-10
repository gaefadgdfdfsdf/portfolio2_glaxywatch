
document.addEventListener("DOMContentLoaded", () => {
    //  main fadeIn
    const watch = document.querySelector('.bg-wrap .watch');

    function fadeIn(watch, duration) {
        if (!watch) return; // 요소가 없으면 실행하지 않음

        watch.style.opacity = "0.01";
        watch.style.position = "relative"; // top 적용을 위해 relative 설정

        let opacity = 0.5;
        let top = -90; // 숫자로 변경

        const interval = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.01;
                watch.style.opacity = opacity;
            }

            if (top < -30) { // top이 -30px이 될 때까지 증가
                top += 1;
                watch.style.top = top + "px";
            }

            if (opacity >= 1 && top >= -30) {
                clearInterval(interval);
            }
        }, duration / 100);
    }

    fadeIn(watch, 1000); // fadeIn 함수 실행


    const mainText = document.querySelector('.galaxy');

    function fadeIn2(mainText, duration){
        if(!mainText) return;
        mainText.style.opacity =0.01;

        let opacity2 = 0.01;
      

        const interval2 = setInterval(() => {
            if (opacity2 < 1){
                opacity2 += 0.01;
                mainText.style.opacity = opacity2;

            }

            if (opacity2 >= 1){
                clearInterval(interval2);
            }
        },duration / 100)

    }

    fadeIn2(mainText, 2000); // fadeIn 함수 실행


    //   main fadeIn
});
