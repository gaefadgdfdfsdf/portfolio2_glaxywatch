

// 페이지 전체 풀 페이지 스크롤
let page = 1;
const html = document.documentElement;
const sections = document.querySelectorAll(".section");
const lastPage = 9; //sections.length

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

        if(page === 1){
            const section_1box = document.querySelectorAll('.section1_container .section_1box');

            const right_side_1 = document.querySelector('.right_side.right_1');

            const watchbg_1_circle_1 = document.querySelector('.watchbg_1 .circle_1');
            const watchbg_2_circle_2 = document.querySelector('.watchbg_2 .circle_2');
            const watchbg_3_circle_3 = document.querySelector('.watchbg_3 .circle_3');

            watchbg_1_circle_1.classList.remove('animate');
            watchbg_2_circle_2.classList.remove('animate');
            watchbg_3_circle_3.classList.remove('animate');
           

            right_side_1.classList.remove('animate');

            // NodeList의 각 요소에 대해 스타일 적용
            section_1box.forEach(box => {
                box.style.position = 'absolute';
            });
        }
      
        // page === 2일 때 시계 fadeIn
        if (page === 2) {
            
            const section_1box = document.querySelectorAll('.section1_container .section_1box');
            const section1 = document.querySelector('.sec1box .section1.one');
            const section2 = document.querySelector('.sec1box .second');
            const section3 = document.querySelector('.sec1box .third');
            const h1 = document.querySelectorAll('.section1:nth-child(1) h1');
            const h5 = document.querySelectorAll('.section1:nth-child(1) h5');
            const h1_3 = document.querySelectorAll('.section1:nth-child(3) h1');
            const h5_3 = document.querySelectorAll('.section1:nth-child(3) h5');
            const h1_2 = document.querySelectorAll('.section1:nth-child(2) h1');
            const h5_2 = document.querySelectorAll('.section1:nth-child(2) h5');
            const section2_all = document.querySelector('.section1:nth-child(2)');
            const section3_all = document.querySelector('.section1:nth-child(3)');
            const bg_text = document.querySelector('.bg-wrap .text');
            const left_side_text = document.querySelector('.left_side .text_1');
            const right_side_1 = document.querySelector('.right_side.right_1');
            const right_side_2 = document.querySelector('.right_side.right_2');
            const right_side_3 = document.querySelector('.right_side.right_3');
            const nth2_watchbg_1_circle_1 = document.querySelector('.section1:nth-child(2) .watchbg_1 .circle_1');
            const nth2_watchbg_2_circle_2 = document.querySelector('.section1:nth-child(2) .watchbg_2 .circle_2');
            const nth2_watchbg_3_circle_3 = document.querySelector('.section1:nth-child(2) .watchbg_3 .circle_3');


  
            nth2_watchbg_1_circle_1.classList.remove('animate');
            nth2_watchbg_2_circle_2.classList.remove('animate');
            nth2_watchbg_3_circle_3.classList.remove('animate');

           

            setTimeout(watch_cir_1_1, 500);
            setTimeout(watch_cir_1_2, 700);
            setTimeout(watch_cir_1_3, 900);


            right_side_1.classList.add('animate');
            right_side_2.classList.remove('animate');
            right_side_3.classList.remove('animate');
            
    
            left_side_text.classList.add('animaate');


            bg_text.classList.add('animate');

            
            // fadeIn3(watchstrap, 1000);


           
            section2_all.style.opacity ='0';
            section3_all.style.opacity ='0';

            // NodeList의 각 요소에 대해 스타일 적용
            section_1box.forEach(box => {
                box.style.position = 'fixed';
            });
           
            section1.style.height = '100vh';
            section2.style.height = '0';
            section3.style.height = '0';

            h1.forEach(h1=>{
                h1.style.opacity = '1'
            })

            h1_2.forEach(h1=>{
                h1.style.opacity = '0'
            })


            h1_3.forEach(h1=>{
                h1.style.opacity = '0'
            })


            h5.forEach(h5=>{
                h5.style.opacity = '1'
            })

            h5_2.forEach(h5=>{
                h5.style.opacity = '0'
            })

            h5_3.forEach(h5=>{
                h5.style.opacity = '0'
            })
           

        }


        if (page === 3) {
            
            const section1 = document.querySelector('.sec1box .section1.one');
            const section2 = document.querySelector('.sec1box .second');
            const section3 = document.querySelector('.sec1box .third');
            const section1_all = document.querySelector('.section1:nth-child(1)'); 
            const section2_all = document.querySelector('.section1:nth-child(2)');
            const h1 = document.querySelectorAll('.section1:nth-child(1) h1');
            const h5 = document.querySelectorAll('.section1:nth-child(1) h5');
            const h1_2 = document.querySelectorAll('.section1:nth-child(2) h1');
            const h5_2 = document.querySelectorAll('.section1:nth-child(2) h5');
            const h1_3 = document.querySelectorAll('.section1:nth-child(3) h1');
            const h5_3 = document.querySelectorAll('.section1:nth-child(3) h5');
            const left_side_text2 = document.querySelector('.left_side .text_2');
            const left_side_text = document.querySelector('.left_side .text_1');

            const right_side_1 = document.querySelector('.right_side.right_1');
            const right_side_2 = document.querySelector('.right_side.right_2');


            const right_side_3 = document.querySelector('.right_side.right_3');

            const watchbg_1_circle_1 = document.querySelector('.watchbg_1 .circle_1');
            const watchbg_2_circle_2 = document.querySelector('.watchbg_2 .circle_2');
            const watchbg_3_circle_3 = document.querySelector('.watchbg_3 .circle_3');

            watchbg_1_circle_1.classList.remove('animate');
            watchbg_2_circle_2.classList.remove('animate');
            watchbg_3_circle_3.classList.remove('animate');

            const nth3_watchbg_1_circle_1 = document.querySelector('.section1:nth-child(3) .watchbg_1 .circle_1');
            const nth3_watchbg_2_circle_2 = document.querySelector('.section1:nth-child(3) .watchbg_2 .circle_2');
            const nth3_watchbg_3_circle_3 = document.querySelector('.section1:nth-child(3) .watchbg_3 .circle_3');


  
            nth3_watchbg_1_circle_1.classList.remove('animate');
            nth3_watchbg_2_circle_2.classList.remove('animate');
            nth3_watchbg_3_circle_3.classList.remove('animate');



            
           
            setTimeout(watch_cir_2_1, 500);
            setTimeout(watch_cir_2_2, 700);
            setTimeout(watch_cir_2_3, 900);


            right_side_3.style.opacity ='0';

            right_side_1.classList.remove('animate');
            right_side_2.classList.add('animate');
            
    
            left_side_text.classList.remove('animaate');
            
    
           
            left_side_text2.classList.add('animaate');
         
           

            section1.style.height = '0';
            section2.style.height = '100vh';
            section3.style.height = '0';
            section2_all.style.opacity ='1';
            section1_all.style.opacity ='0';

            h1.forEach(h1=>{
                h1.style.opacity = '0'
            })

            h1_2.forEach(h1=>{
                h1.style.opacity = '1'
            })

            h1_3.forEach(h1=>{
                h1.style.opacity = '0'
            })


            h5.forEach(h5=>{
                h5.style.opacity = '0'
            })

            h5_2.forEach(h5=>{
                h5.style.opacity = '1'
            })
           

            h5_3.forEach(h5=>{
                h5.style.opacity = '0'
            })
           
           

        }

        if (page === 4){
            const section1 = document.querySelector('.sec1box .section1.one');
            const section2 = document.querySelector('.sec1box .second');
            const section3 = document.querySelector('.sec1box .third');
            const section1_all = document.querySelector('.section1:nth-child(1)'); 
            const section2_all = document.querySelector('.section1:nth-child(2)');
            const section3_all = document.querySelector('.section1:nth-child(3)');
            const h1 = document.querySelectorAll('.section1:nth-child(1) h1');
            const h5 = document.querySelectorAll('.section1:nth-child(1) h5');
            const h1_2 = document.querySelectorAll('.section1:nth-child(2) h1');
            const h5_2 = document.querySelectorAll('.section1:nth-child(2) h5');
            const h1_3 = document.querySelectorAll('.section1:nth-child(3) h1');
            const h5_3 = document.querySelectorAll('.section1:nth-child(3) h5');
            const right_side_2 = document.querySelector('.right_side.right_2');
            const right_side_3 = document.querySelector('.right_side.right_3');
            const nth3_section1_container = document.querySelector('.section:nth-child(3) .section1_container');
            const nth2_watchbg_1_circle_1 = document.querySelector('.section1:nth-child(2) .watchbg_1 .circle_1');
            const nth2_watchbg_2_circle_2 = document.querySelector('.section1:nth-child(2) .watchbg_2 .circle_2');
            const nth2_watchbg_3_circle_3 = document.querySelector('.section1:nth-child(2) .watchbg_3 .circle_3');


  
            nth2_watchbg_1_circle_1.classList.remove('animate');
            nth2_watchbg_2_circle_2.classList.remove('animate');
            nth2_watchbg_3_circle_3.classList.remove('animate');


            const watchbg_1_circle_1 = document.querySelector('.watchbg_1 .circle_1');
            const watchbg_2_circle_2 = document.querySelector('.watchbg_2 .circle_2');
            const watchbg_3_circle_3 = document.querySelector('.watchbg_3 .circle_3');

            watchbg_1_circle_1.classList.remove('animate');
            watchbg_2_circle_2.classList.remove('animate');
            watchbg_3_circle_3.classList.remove('animate');

            setTimeout(watch_cir_3_1, 500);
            setTimeout(watch_cir_3_2, 700);
            setTimeout(watch_cir_3_3, 900); 


            nth3_section1_container.style.opacity='1';
           

            right_side_3.style.opacity ='1';

          
            right_side_2.classList.remove('animate');
            right_side_3.classList.add('animate');

         
            const left_side_text3 = document.querySelector('.left_side .text_3');

            left_side_text3.classList.add('animaate');
            
            const left_side_text2 = document.querySelector('.left_side .text_2');
          
    
           
            left_side_text2.classList.remove('animaate');
    
          

            section2_all.style.opacity ='0';
            section1_all.style.opacity ='0';
            section3_all.style.opacity ='1';

            section1.style.height = '0';
            section2.style.height = '0';
            section3.style.height = '100vh';


            h1.forEach(h1=>{
                h1.style.opacity = '0'
            })

            h1_2.forEach(h1=>{
                h1.style.opacity = '0'
            })

            h1_3.forEach(h1=>{
                h1.style.opacity = '1'
            })


            h5.forEach(h5=>{
                h5.style.opacity = '0'
            })

            h5_2.forEach(h5=>{
                h5.style.opacity = '0'
            })
           

            h5_3.forEach(h5=>{
                h5.style.opacity = '1'
            })

           
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
            const section_1box = document.querySelectorAll('.section1_container .section_1box');
            const left_side_text3 = document.querySelector('.left_side .text_3');
            const right_side_3 = document.querySelector('.right_side.right_3');
            const nth3_section1_container = document.querySelector('.section:nth-child(3) .section1_container');
           

            const nth3_watchbg_1_circle_1 = document.querySelector('.section1:nth-child(3) .watchbg_1 .circle_1');
            const nth3_watchbg_2_circle_2 = document.querySelector('.section1:nth-child(3) .watchbg_2 .circle_2');
            const nth3_watchbg_3_circle_3 = document.querySelector('.section1:nth-child(3) .watchbg_3 .circle_3');


  
            nth3_watchbg_1_circle_1.classList.remove('animate');
            nth3_watchbg_2_circle_2.classList.remove('animate');
            nth3_watchbg_3_circle_3.classList.remove('animate');

            const watchbg_1_circle_1 = document.querySelector('.watchbg_1 .circle_1');
            const watchbg_2_circle_2 = document.querySelector('.watchbg_2 .circle_2');
            const watchbg_3_circle_3 = document.querySelector('.watchbg_3 .circle_3');

            watchbg_1_circle_1.classList.remove('animate');
            watchbg_2_circle_2.classList.remove('animate');
            watchbg_3_circle_3.classList.remove('animate');

            

            nth3_section1_container.style.opacity='0';

          
            right_side_3.classList.remove('animate');

            left_side_text3.classList.remove('animaate');


            section_1box.forEach(box => {
                box.style.position = 'absolute';
            });
           
           
           

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

        if(page === 6){
            const section2_part1 = document.querySelector('.section2 .part1');
            const section2_part0 = document.querySelector('.section2 .part0');
            const section2_part2 = document.querySelector('.section2 .part2');
            const part0_copy = document.querySelector('.part0 .copy');
            const part1_copy = document.querySelector('.part1 .copy');
            const part2_copy = document.querySelector('.part2 .copy');
            const part_img1 = document.querySelector('.part-inner .img:nth-child(1)');
            const part_img2 = document.querySelector('.part-inner .img:nth-child(2)');
            const part_img3 = document.querySelector('.part-inner .img:nth-child(3)');

            const watchbg_1_circle_1 = document.querySelector('.watchbg_1 .circle_1');
            const watchbg_2_circle_2 = document.querySelector('.watchbg_2 .circle_2');
            const watchbg_3_circle_3 = document.querySelector('.watchbg_3 .circle_3');

            watchbg_1_circle_1.classList.remove('animate');
            watchbg_2_circle_2.classList.remove('animate');
            watchbg_3_circle_3.classList.remove('animate');
           

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

        if (page === 7){
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

            const watchbg_1_circle_1 = document.querySelector('.watchbg_1 .circle_1');
            const watchbg_2_circle_2 = document.querySelector('.watchbg_2 .circle_2');
            const watchbg_3_circle_3 = document.querySelector('.watchbg_3 .circle_3');

            watchbg_1_circle_1.classList.remove('animate');
            watchbg_2_circle_2.classList.remove('animate');
            watchbg_3_circle_3.classList.remove('animate');

            section2.style.background = '#8e81b6'; // 배경색 변경

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


        
        if (page === 8){
           const section2_imgs = document.querySelectorAll('.section2 .img');
           const section2_copys = document.querySelectorAll('.section2 .copy');

           const section2 = document.querySelector('.section2');
           section2.style.background = '#3d404c'; // 다음 단계 배경색 (원래 색상)

           const watchbg_1_circle_1 = document.querySelector('.watchbg_1 .circle_1');
           const watchbg_2_circle_2 = document.querySelector('.watchbg_2 .circle_2');
           const watchbg_3_circle_3 = document.querySelector('.watchbg_3 .circle_3');

           watchbg_1_circle_1.classList.remove('animate');
           watchbg_2_circle_2.classList.remove('animate');
           watchbg_3_circle_3.classList.remove('animate');

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

        if(page === 1){
            const section_1box = document.querySelectorAll('.section1_container .section_1box');

            const bg_text = document.querySelector('.bg-wrap .text');

            const right_side_1 = document.querySelector('.right_side.right_1');

            const watchbg_1_circle_1 = document.querySelector('.watchbg_1 .circle_1');
            const watchbg_2_circle_2 = document.querySelector('.watchbg_2 .circle_2');
            const watchbg_3_circle_3 = document.querySelector('.watchbg_3 .circle_3');

            

            watchbg_1_circle_1.classList.remove('animate');
            watchbg_2_circle_2.classList.remove('animate');
            watchbg_3_circle_3.classList.remove('animate');

            right_side_1.classList.remove('animate');

            // NodeList의 각 요소에 대해 스타일 적용
            section_1box.forEach(box => {
                box.style.position = 'absolute';
            });

            bg_text.classList.remove('animate');


            const left_side_text = document.querySelector('.left_side .text_1');
            
    
            left_side_text.classList.remove('animaate');

        }

        // page === 2일 때 시계 fadeIn
        if (page === 2) {
            
            const section1 = document.querySelector('.sec1box .section1.one');
            const section2 = document.querySelector('.sec1box .second');
            const section3 = document.querySelector('.sec1box .third');
            const h1 = document.querySelectorAll('.section1:nth-child(1) h1');
            const h5 = document.querySelectorAll('.section1:nth-child(1) h5');
            const h1_3 = document.querySelectorAll('.section1:nth-child(3) h1');
            const h5_3 = document.querySelectorAll('.section1:nth-child(3) h5');
            const h1_2 = document.querySelectorAll('.section1:nth-child(2) h1');
            const h5_2 = document.querySelectorAll('.section1:nth-child(2) h5');
            const section2_all = document.querySelector('.section1:nth-child(2)');
            const section3_all = document.querySelector('.section1:nth-child(3)');
            const section1_all = document.querySelector('.section1:nth-child(1)');
            const left_side_text = document.querySelector('.left_side .text_1');
            const left_side_text2 = document.querySelector('.left_side .text_2');
            const right_side_1 = document.querySelector('.right_side.right_1');
            const right_side_2 = document.querySelector('.right_side.right_2');
            const right_side_3 = document.querySelector('.right_side.right_3');

            setTimeout(watch_cir_1_1, 700);
            setTimeout(watch_cir_1_2, 900);
            setTimeout(watch_cir_1_3, 1100);

            const nth2_watchbg_1_circle_1 = document.querySelector('.section1:nth-child(2) .watchbg_1 .circle_1');
            const nth2_watchbg_2_circle_2 = document.querySelector('.section1:nth-child(2) .watchbg_2 .circle_2');
            const nth2_watchbg_3_circle_3 = document.querySelector('.section1:nth-child(2) .watchbg_3 .circle_3');


  
            nth2_watchbg_1_circle_1.classList.remove('animate');
            nth2_watchbg_2_circle_2.classList.remove('animate');
            nth2_watchbg_3_circle_3.classList.remove('animate');

           
            right_side_2.classList.remove('animate');
            right_side_3.classList.remove('animate');



           

            right_side_1.classList.add('animate');

            section1_all.style.opacity ='1';
            section2_all.style.opacity ='0';
            section3_all.style.opacity ='0';

            // NodeList의 각 요소에 대해 스타일 적용
          
           
            section1.style.height = '100vh';
            section2.style.height = '0';
            section3.style.height = '0';

          
             
           left_side_text.classList.add('animaate');
           left_side_text2.classList.remove('animaate');
           

            h1.forEach(h1=>{
                h1.style.opacity = '1'
            })

            h1_2.forEach(h1=>{
                h1.style.opacity = '0'
            })


            h1_3.forEach(h1=>{
                h1.style.opacity = '0'
            })


            h5.forEach(h5=>{
                h5.style.opacity = '1'
            })

            h5_2.forEach(h5=>{
                h5.style.opacity = '0'
            })

            h5_3.forEach(h5=>{
                h5.style.opacity = '0'
            })
           
            


         
        }

        if (page === 3) {
            const watchstrap = document.querySelector('.right_side .watchstrap');
            // fadeIn3(watchstrap, 1000);
            const section1 = document.querySelector('.sec1box .section1.one');
            const section2 = document.querySelector('.sec1box .second');
            const section3 = document.querySelector('.sec1box .third');
            const section1_all = document.querySelector('.section1:nth-child(1)'); 
            const section2_all = document.querySelector('.section1:nth-child(2)');
            const h1 = document.querySelectorAll('.section1:nth-child(1) h1');
            const h5 = document.querySelectorAll('.section1:nth-child(1) h5');
            const h1_2 = document.querySelectorAll('.section1:nth-child(2) h1');
            const h5_2 = document.querySelectorAll('.section1:nth-child(2) h5');
            const h1_3 = document.querySelectorAll('.section1:nth-child(3) h1');
            const h5_3 = document.querySelectorAll('.section1:nth-child(3) h5');
            const left_side_text2 = document.querySelector('.left_side .text_2');
            const left_side_text3 = document.querySelector('.left_side .text_3');
            

       
            const right_side_1 = document.querySelector('.right_side.right_1');
            const right_side_2 = document.querySelector('.right_side.right_2');
            const right_side_3 = document.querySelector('.right_side.right_3');

            const nth3_watchbg_1_circle_1 = document.querySelector('.section1:nth-child(3) .watchbg_1 .circle_1');
            const nth3_watchbg_2_circle_2 = document.querySelector('.section1:nth-child(3) .watchbg_2 .circle_2');
            const nth3_watchbg_3_circle_3 = document.querySelector('.section1:nth-child(3) .watchbg_3 .circle_3');


  
            nth3_watchbg_1_circle_1.classList.remove('animate');
            nth3_watchbg_2_circle_2.classList.remove('animate');
            nth3_watchbg_3_circle_3.classList.remove('animate');


            const watchbg_1_circle_1 = document.querySelector('.watchbg_1 .circle_1');
            const watchbg_2_circle_2 = document.querySelector('.watchbg_2 .circle_2');
            const watchbg_3_circle_3 = document.querySelector('.watchbg_3 .circle_3');

            watchbg_1_circle_1.classList.remove('animate');
            watchbg_2_circle_2.classList.remove('animate');
            watchbg_3_circle_3.classList.remove('animate');

        
            setTimeout(watch_cir_2_1, 700);
            setTimeout(watch_cir_2_2, 900);
            setTimeout(watch_cir_2_3, 1100);

            right_side_1.classList.remove('animate');
            right_side_2.classList.add('animate');
            right_side_3.style.opacity ='0';


            left_side_text2.classList.add('animaate');
            left_side_text3.classList.remove('animaate');


            section1.style.height = '0';
            section2.style.height = '100vh';
            section3.style.height = '0';
            section2_all.style.opacity ='1';
            section1_all.style.opacity ='0';

            h1.forEach(h1=>{
                h1.style.opacity = '0'
            })

            h1_2.forEach(h1=>{
                h1.style.opacity = '1'
            })

            h1_3.forEach(h1=>{
                h1.style.opacity = '0'
            })


            h5.forEach(h5=>{
                h5.style.opacity = '0'
            })

            h5_2.forEach(h5=>{
                h5.style.opacity = '1'
            })
           

            h5_3.forEach(h5=>{
                h5.style.opacity = '0'
            })
          
         
        }


        if (page === 4){
            const section2_part1 = document.querySelector('.section2 .part1');
            const section2_part0 = document.querySelector('.section2 .part0');
            const section2_part2 = document.querySelector('.section2 .part2');
            const part0_copy = document.querySelector('.part0 .copy');
            const part1_copy = document.querySelector('.part1 .copy');
            const part2_copy = document.querySelector('.part2 .copy');
            const part_img1 = document.querySelector('.part-inner .img:nth-child(1)');
            const part_img2 = document.querySelector('.part-inner .img:nth-child(2)');
            const part_img3 = document.querySelector('.part-inner .img:nth-child(3)');

            const section1 = document.querySelector('.sec1box .section1.one');
            const section2 = document.querySelector('.sec1box .second');
            const section3 = document.querySelector('.sec1box .third');
            const section1_all = document.querySelector('.section1:nth-child(1)'); 
            const section2_all = document.querySelector('.section1:nth-child(2)');
            const section3_all = document.querySelector('.section1:nth-child(3)');
            const h1 = document.querySelectorAll('.section1:nth-child(1) h1');
            const h5 = document.querySelectorAll('.section1:nth-child(1) h5');
            const h1_2 = document.querySelectorAll('.section1:nth-child(2) h1');
            const h5_2 = document.querySelectorAll('.section1:nth-child(2) h5');
            const h1_3 = document.querySelectorAll('.section1:nth-child(3) h1');
            const h5_3 = document.querySelectorAll('.section1:nth-child(3) h5');
            const section_1box = document.querySelectorAll('.section1_container .section_1box');

            const left_side_text3 = document.querySelector('.left_side .text_3');


            const right_side_2 = document.querySelector('.right_side.right_2');
            const right_side_3 = document.querySelector('.right_side.right_3');
            const nth3_section1_container = document.querySelector('.section:nth-child(3) .section1_container');
           

            const nth2_watchbg_1_circle_1 = document.querySelector('.section1:nth-child(2) .watchbg_1 .circle_1');
            const nth2_watchbg_2_circle_2 = document.querySelector('.section1:nth-child(2) .watchbg_2 .circle_2');
            const nth2_watchbg_3_circle_3 = document.querySelector('.section1:nth-child(2) .watchbg_3 .circle_3');


            setTimeout(watch_cir_3_1, 700);
            setTimeout(watch_cir_3_2, 900);
            setTimeout(watch_cir_3_3, 1100); 
  
            nth2_watchbg_1_circle_1.classList.remove('animate');
            nth2_watchbg_2_circle_2.classList.remove('animate');
            nth2_watchbg_3_circle_3.classList.remove('animate');

            nth3_section1_container.style.opacity='1';

          
            right_side_2.classList.remove('animate');
            right_side_3.classList.add('animate');



            left_side_text3.classList.add('animaate');

            section_1box.forEach(box => {
                box.style.position = 'fixed';
            });
           

            left_side_text3.classList.add('animaate');
           

            
            section2_all.style.opacity ='0';
            section1_all.style.opacity ='0';
            section3_all.style.opacity ='1';

            section1.style.height = '0';
            section2.style.height = '0';
            section3.style.height = '100vh';


            h1.forEach(h1=>{
                h1.style.opacity = '0'
            })

            h1_2.forEach(h1=>{
                h1.style.opacity = '0'
            })

            h1_3.forEach(h1=>{
                h1.style.opacity = '1'
            })


            h5.forEach(h5=>{
                h5.style.opacity = '0'
            })

            h5_2.forEach(h5=>{
                h5.style.opacity = '0'
            })
           

            h5_3.forEach(h5=>{
                h5.style.opacity = '1'
            })




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

        if (page === 5){
            const section2_part1 = document.querySelector('.section2 .part1');
            const section2_part0 = document.querySelector('.section2 .part0');
            const section2_part2 = document.querySelector('.section2 .part2');
            const part0_copy = document.querySelector('.part0 .copy');
            const part1_copy = document.querySelector('.part1 .copy');
            const part2_copy = document.querySelector('.part2 .copy');
            const part_img1 = document.querySelector('.part-inner .img:nth-child(1)');
            const part_img2 = document.querySelector('.part-inner .img:nth-child(2)');
            const section2 = document.querySelector('.section2');

            const nth3_watchbg_1_circle_1 = document.querySelector('.section1:nth-child(3) .watchbg_1 .circle_1');
            const nth3_watchbg_2_circle_2 = document.querySelector('.section1:nth-child(3) .watchbg_2 .circle_2');
            const nth3_watchbg_3_circle_3 = document.querySelector('.section1:nth-child(3) .watchbg_3 .circle_3');


  
            nth3_watchbg_1_circle_1.classList.remove('animate');
            nth3_watchbg_2_circle_2.classList.remove('animate');
            nth3_watchbg_3_circle_3.classList.remove('animate');

            section2.style.background = '#edd0c2'; // 배경색 변경
            part0_copy.style.opacity ='1';
            part1_copy.style.opacity ='0';
            part2_copy.style.opacity ='0';
            part_img1.style.opacity = '1';
            part_img2.style.opacity = '0';
            section2_part1.style.height = '0';
            section2_part0.style.height = '100vh';
            section2_part2.style.height = '0';
            
           

        }

        if(page === 6){
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



        if (page === 7){
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


     
      
        
    }

    // 1024px 초과일 때만 scrollToPage 실행
    if (window.innerWidth > 1024) {
        scrollToPage(page);
    }

    // 일정 시간 후에 스크롤 이벤트 처리 가능하도록 설정
    setTimeout(() => {
        iswheel = false;
    }, 500);

    function watch_cir_1_1(){
       const cir_1_1 = document.querySelector('.section:nth-child(1) .watchbg_1 .circle_1');
       if (window.innerWidth > 1024) {
        cir_1_1.classList.add('animate');
    }
       
    }   

    function watch_cir_1_2(){
        const cir_1_1 = document.querySelector('.section:nth-child(1) .watchbg_2 .circle_2');
        if (window.innerWidth > 1024) {
            cir_1_1.classList.add('animate');
        }
        
     }  

     function watch_cir_1_3(){
        const cir_1_1 = document.querySelector('.section:nth-child(1) .watchbg_3 .circle_3');
        if (window.innerWidth > 1024) {
            cir_1_1.classList.add('animate');
        }
        
     }   
    


     function watch_cir_2_1(){
        const cir_2_1 = document.querySelector('.section:nth-child(2) .watchbg_1 .circle_1');
        cir_2_1.classList.add('animate');
     }   
 
     function watch_cir_2_2(){
         const cir_2_1 = document.querySelector('.section:nth-child(2) .watchbg_2 .circle_2');
         cir_2_1.classList.add('animate');
      }  
 
      function watch_cir_2_3(){
         const cir_2_1 = document.querySelector('.section:nth-child(2) .watchbg_3 .circle_3');
         cir_2_1.classList.add('animate');
      }    



      function watch_cir_3_1(){
        const cir_3_1 = document.querySelector('.section:nth-child(3) .watchbg_1 .circle_1');
        cir_3_1.classList.add('animate');
     }   
 
     function watch_cir_3_2(){
         const cir_3_1 = document.querySelector('.section:nth-child(3) .watchbg_2 .circle_2');
         cir_3_1.classList.add('animate');
      }  
 
      function watch_cir_3_3(){
         const cir_3_1 = document.querySelector('.section:nth-child(3) .watchbg_3 .circle_3');
         cir_3_1.classList.add('animate');
      }   
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

    






  



