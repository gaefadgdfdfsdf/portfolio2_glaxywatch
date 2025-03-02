

// 페이지 전체 풀 페이지 스크롤
let page = 1;
const html = document.documentElement;
const sections = document.querySelectorAll(".section");
const lastPage = 7; //sections.length

const section2Container = document.querySelector(".section2_container");

// 페이지 로딩 시 맨 위로 설정
html.scrollTo({ top: 0, behavior: "smooth" });

// wheel 이벤트 리스너 추가
let iswheel = false;
window.addEventListener("wheel", (e) => {
    // 페이지 이동을 위한 상태 관리
    if (iswheel) return;
    iswheel = true;

    // 일반적인 스크롤 로직
    if (e.deltaY > 0) {
        if (page === lastPage) {
            iswheel = false;
            return;
        }

        page++;

      
        // page === 2일 때 시계 fadeIn
        if (page === 2) {
            const watchstrap = document.querySelector('.right_side .watchstrap');
            fadeIn3(watchstrap, 1000);

        }

        if (page === 3){
            const section2_part1 = document.querySelector('.section2 .part1');
            const section2_part0 = document.querySelector('.section2 .part0');
            const section2_part2 = document.querySelector('.section2 .part2');
            const part0_copy = document.querySelector('.part0 .copy');
            const part1_copy = document.querySelector('.part1 .copy');
            const part2_copy = document.querySelector('.part2 .copy');
            const part_img1 = document.querySelector('.part-inner .img:nth-child(1)');
            const part_img2 = document.querySelector('.part-inner .img:nth-child(2)');
            const part_img3 = document.querySelector('.part-inner .img:nth-child(3)');
           
            part0_copy.style.opacity ='1';
            part1_copy.style.opacity ='0';
            part2_copy.style.opacity ='0';
            part_img1.style.opacity = '1';
            part_img2.style.opacity = '0';
            part_img3.style.opacity = '0';
            section2_part0.style.height = '100vh';
            section2_part1.style.height = '0';
            section2_part2.style.height = '0';

            const section2_imgs = document.querySelectorAll('.section2 .img');
            const section2_copys = document.querySelectorAll('.section2 .copy');

            section2_imgs.forEach(img => {
                img.classList.remove('animate2');
               });
   
                section2_copys.forEach(img => {
                    img.classList.remove('animate2');
                   });
         
            
        }

        if(page === 4){
            const section2_part1 = document.querySelector('.section2 .part1');
            const section2_part0 = document.querySelector('.section2 .part0');
            const section2_part2 = document.querySelector('.section2 .part2');
            const part0_copy = document.querySelector('.part0 .copy');
            const part1_copy = document.querySelector('.part1 .copy');
            const part2_copy = document.querySelector('.part2 .copy');
            const part_img1 = document.querySelector('.part-inner .img:nth-child(1)');
            const part_img2 = document.querySelector('.part-inner .img:nth-child(2)');
            const part_img3 = document.querySelector('.part-inner .img:nth-child(3)');
            const section2 = document.querySelector('.section2');
            section2_part0.style.height = '0';
            section2_part1.style.height = '100vh';
            section2_part2.style.height = '0';
            part0_copy.style.opacity ='0';
            part1_copy.style.opacity ='1';
            part2_copy.style.opacity ='0';
            part_img1.style.opacity ='0';
            part_img2.style.opacity ='1';
            part_img3.style.opacity ='0';
     
                
        }

        if (page === 5){
            const section2_part1 = document.querySelector('.section2 .part1');
            const section2_part0 = document.querySelector('.section2 .part0');
            const section2_part2 = document.querySelector('.section2 .part2');
            const part0_copy = document.querySelector('.part0 .copy');
            const part1_copy = document.querySelector('.part1 .copy');
            const part2_copy = document.querySelector('.part2 .copy');
            const part_img1 = document.querySelector('.part-inner .img:nth-child(1)');
            const part_img2 = document.querySelector('.part-inner .img:nth-child(2)');
            const part_img3 = document.querySelector('.part-inner .img:nth-child(3)');
        
            section2_part0.style.height = '0';
            section2_part1.style.height = '0';
            section2_part2.style.height = '100vh';
            part0_copy.style.opacity ='0';
            part1_copy.style.opacity ='0';
            part2_copy.style.opacity ='1';
            part_img1.style.opacity ='0';
            part_img2.style.opacity ='0';
            part_img3.style.opacity ='1';
        }


        
        if (page === 6){
           const section2_imgs = document.querySelectorAll('.section2 .img');
           const section2_copys = document.querySelectorAll('.section2 .copy');

           section2_imgs.forEach(img => {
            img.classList.add('animate');
           });

          section2_copys.forEach(img => {
            img.classList.add('animate');
           });
        
        }
    } else if (e.deltaY < 0) {
        if (page === 1) {
            iswheel = false;
            return;
        }

        page--;

        // page === 2일 때 시계 fadeIn
        if (page === 2) {
            const watchstrap = document.querySelector('.right_side .watchstrap');
            fadeIn3(watchstrap, 1000);
            const part0_copy = document.querySelector('.part0 .copy');
            const part1_copy = document.querySelector('.part1 .copy');
            const part2_copy = document.querySelector('.part2 .copy');
            const part_img3 = document.querySelector('.part-inner .img:nth-child(3)');
            const part_img2 = document.querySelector('.part-inner .img:nth-child(2)');
            const part_img1 = document.querySelector('.part-inner .img:nth-child(1)');
         
        }

        if (page === 5){
            const section2_part1 = document.querySelector('.section2 .part1');
            const section2_part0 = document.querySelector('.section2 .part0');
            const section2_part2 = document.querySelector('.section2 .part2');
            const part0_copy = document.querySelector('.part0 .copy');
            const part1_copy = document.querySelector('.part1 .copy');
            const part2_copy = document.querySelector('.part2 .copy');
            const part_img1 = document.querySelector('.part-inner .img:nth-child(1)');
            const part_img2 = document.querySelector('.part-inner .img:nth-child(2)');
            const part_img3 = document.querySelector('.part-inner .img:nth-child(3)');
          
            section2_part1.style.height = '0';
            section2_part0.style.height = '0';
            section2_part2.style.height = '100vh';
            part0_copy.style.opacity ='0';
            part1_copy.style.opacity ='0';
            part2_copy.style.opacity ='1';
            part_img1.style.opacity ='0';
            part_img2.style.opacity ='0';
            part_img3.style.opacity ='1';

            const section2_imgs = document.querySelectorAll('.section2 .img');
            const section2_copys = document.querySelectorAll('.section2 .copy');

            section2_imgs.forEach(img => {
             img.classList.remove('animate');
            });

             section2_copys.forEach(img => {
                img.classList.remove('animate');
                });
        }


        if(page === 4){
            const section2_part1 = document.querySelector('.section2 .part1');
            const section2_part0 = document.querySelector('.section2 .part0');
            const section2_part2 = document.querySelector('.section2 .part2');
            const part0_copy = document.querySelector('.part0 .copy');
            const part1_copy = document.querySelector('.part1 .copy');
            const part2_copy = document.querySelector('.part2 .copy');
            const part_img1 = document.querySelector('.part-inner .img:nth-child(1)');
            const part_img2 = document.querySelector('.part-inner .img:nth-child(2)');
            const part_img3 = document.querySelector('.part-inner .img:nth-child(3)');
            section2_part1.style.height = '100vh';
            section2_part0.style.height = '0';
            section2_part2.style.height = '0';
            part0_copy.style.opacity ='0';
            part1_copy.style.opacity ='1';
            part2_copy.style.opacity ='0';
            part_img1.style.opacity ='0';
            part_img2.style.opacity ='1';
            part_img3.style.opacity ='0';
                
        }

        if (page === 3){
            const section2_part1 = document.querySelector('.section2 .part1');
            const section2_part0 = document.querySelector('.section2 .part0');
            const section2_part2 = document.querySelector('.section2 .part2');
            const part0_copy = document.querySelector('.part0 .copy');
            const part1_copy = document.querySelector('.part1 .copy');
            const part2_copy = document.querySelector('.part2 .copy');
            const part_img1 = document.querySelector('.part-inner .img:nth-child(1)');
            const part_img2 = document.querySelector('.part-inner .img:nth-child(2)');
            part0_copy.style.opacity ='1';
            part1_copy.style.opacity ='0';
            part2_copy.style.opacity ='0';
            part_img1.style.opacity = '1';
            part_img2.style.opacity = '0';
            section2_part1.style.height = '0';
            section2_part0.style.height = '100vh';
            section2_part2.style.height = '0';
            
           

        }

        if (page === 2){
            const section2_part1 = document.querySelector('.section2 .part1');
            const section2_part0 = document.querySelector('.section2 .part0');
            const section2_part2 = document.querySelector('.section2 .part2');
            const part0_copy = document.querySelector('.part0 .copy');
            const part1_copy = document.querySelector('.part1 .copy');
            const part2_copy = document.querySelector('.part2 .copy');
            const part_img1 = document.querySelector('.part-inner .img:nth-child(1)');
            const part_img2 = document.querySelector('.part-inner .img:nth-child(2)');
            const part_img3 = document.querySelector('.part-inner .img:nth-child(3)');
            section2_part1.style.height = '0';
            section2_part0.style.height = '0';
            section2_part2.style.height = '0';
            part0_copy.style.opacity ='0';
            part1_copy.style.opacity ='0';
            part2_copy.style.opacity ='0';
            part_img1.style.opacity ='0';
            part_img2.style.opacity ='0';
            part_img3.style.opacity ='0';

            const section2_imgs = document.querySelectorAll('.section2 .img');
            const section2_copys = document.querySelectorAll('.section2 .copy');

            section2_imgs.forEach(img => {
             img.classList.add('animate2');
            });

             section2_copys.forEach(img => {
                img.classList.add('animate2');
                });
        }
    }

    // 1024px 초과일 때만 scrollToPage 실행
    if (window.innerWidth > 1024) {
        scrollToPage(page);
    }

    // 일정 시간 후에 스크롤 이벤트 처리 가능하도록 설정
    setTimeout(() => {
        iswheel = false;
    }, 500);
});

// 페이지 이동 함수
function scrollToPage(pageNum) {
   
    console.log(pageNum);
    const posTop = (pageNum - 1) * window.innerHeight;
    html.style.scrollBehavior = "smooth";
    html.scrollTo({ top: posTop, behavior: "smooth" });

    // 애니메이션이 끝난 후 scrollBehavior 초기화
    setTimeout(() => {
        html.style.scrollBehavior = "auto";
    }, 500);
}







// 시계 fadeIn 애니메이션 함수
function fadeIn3(watchstrap, duration) {
    if (!watchstrap) return;

    let opacity = 0.01;
    let left = 100;

    function animate() {
        if (opacity < 1) {
            opacity += 0.01;
            watchstrap.style.opacity = opacity;
        }

        if (left > 0) {
            left -= 1;
            watchstrap.style.left = left + 'px';
        }

        if (opacity < 1 || left > 0) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

// 페이지 전체 풀 페이지 스크롤




//   main fadeIn


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


 //   main fadeIn






// section2 fadeIn
   

document.addEventListener("DOMContentLoaded", function () {
    const watchOpacity = document.querySelectorAll('.watch_opacity'); // ID 대신 클래스 사용
    const saTriggerMargin = 300; // 화면에서 300px 위로 올라왔을 때 실행

    const saFnc = function () {
        for (const element of watchOpacity) {
            const rect = element.getBoundingClientRect(); 
            const windowHeight = window.innerHeight;

            if (windowHeight > rect.top + saTriggerMargin) {
                element.classList.add('show'); // 스크롤 내릴 때 보이기
            } else {
                element.classList.remove('show'); // 스크롤 올릴 때 숨기기
                
            }
        
        }
    };

    window.addEventListener('scroll', saFnc); // 스크롤 이벤트 등록
    saFnc(); // 새로고침 후에도 즉시 실행 (화면에 보이는 요소 활성화)
});

// section2 fadeIn














// horizen swiper


document.addEventListener("DOMContentLoaded", function () {
    
    // if (window.innerWidth <= 1024) {
    //     return;
    // }
    
    const swiperUl = document.querySelector('.swiper_horizon .swiper_ul');
    const swiperLi = document.querySelectorAll('.swiper_horizon .swiper_li');
    const buttonNext = document.querySelector('.swiper_horizon .button_next');
    const buttonPrev = document.querySelector('.swiper_horizon .button_prev');
    const progressBar = document.querySelector('.swiper-pagination-progressbar-fill');
    const swiperPagination = document.querySelector('.swiper-pagination');
    const totalSlides = swiperLi.length;
    let currentIndex = 0;
    
    // Set the width of each slide dynamically
    const slideWidth = swiperLi[0].offsetWidth;
    
    // Update the progress bar based on current slide
    function updateProgressBar() {
        const progress = (currentIndex + 1) / totalSlides;
        progressBar.style.transform = `scaleX(${progress})`;
    }

    // Move to the next slide
    buttonNext.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            swiperUl.style.transform = `translateX(-${slideWidth * currentIndex}px)`; // Move the swiper
            updateProgressBar(); // Update the progress bar
        }
    });

    // Move to the previous slide
    buttonPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            swiperUl.style.transform = `translateX(-${slideWidth * currentIndex}px)`; // Move the swiper
            updateProgressBar(); // Update the progress bar
        }
    });
});

// horizen swiper







// 마지막 페이지 시계 svg 애니메이션
   

document.addEventListener("DOMContentLoaded", function () {
    const section4 = document.querySelector('.section4 '); 
    const saTriggerMargin = 300; // 화면에서 300px 위로 올라왔을 때 실행
    const svgLine = document.querySelectorAll('.svg polyline'); // polyline 요소 가져오기
    // const svgLine2 = document.querySelectorAll('.svg .st0'); 
    const circle = document.querySelectorAll('.svg .circle');

    const saFnc_4 = function () {

        const rect_2 = section4.getBoundingClientRect();
        const windowHeight = window.innerHeight;


        if (windowHeight > rect_2.top + saTriggerMargin) {
            svgLine.forEach((svg) =>{
                svg.classList.add('lineAni'); // 스크롤 내릴 때 보이기
            })    

            circle.forEach((svg) =>{
                svg.classList.add('lineAni_el'); // 스크롤 내릴 때 보이기
            })  
        } else {
            svgLine.forEach((svg) =>{
                svg.classList.remove('lineAni'); // 스크롤 내릴 때 보이기
            })  
            circle.forEach((svg) =>{
                svg.classList.remove('lineAni_el'); // 스크롤 내릴 때 보이기
            })  
        
        }


    };

    window.addEventListener('scroll', saFnc_4); // 스크롤 이벤트 등록
    saFnc_4(); // 새로고침 후에도 즉시 실행 (화면에 보이는 요소 활성화)




});

// 마지막 페이지 시계 svg 애니메이션

    






  



