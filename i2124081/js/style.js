 // profile
 const PROFILE = document.getElementsByClassName('pc_profile_box_wrap')[0];    
 let _button = document.querySelectorAll('.profile_button_wrap button');
     // let _buttonSP = document.querySelectorAll('.sp_profile_button_wrap button');
     let _txtBox = document.getElementsByClassName('profile_txt_box_wrap');
     // let _txtBoxSP = document.getElementsByClassName('sp_profile_txt_box_wrap');
     let _txtUl = document.getElementsByClassName('profile_ul');
     // let _txtUlSP = document.getElementsByClassName('sp_profile_ul');
     //1

     const mediaQuery = window.matchMedia('(max-width: 800px)');
     
     function Media() {
         // console.log('resized');
         if(mediaQuery.matches) {
         PROFILE.classList.remove('pc_profile_box_wrap');
         PROFILE.classList.add('sp_profile_box_wrap');
         } else {
             PROFILE.classList.add('pc_profile_box_wrap');
             PROFILE.classList.remove('sp_profile_box_wrap');
         }
     }
     window.addEventListener('load', function(){
         Media();
     });
     window.addEventListener('resize', function() {
         Media();
     }, false);
     

     _button[0].addEventListener('click', function() {
         for(let i = 0; i < _button.length; i++) {
             _button[i].classList.remove('button_show');
             _txtBox[i].classList.remove('txt_box_show');
             _txtUl[i].classList.remove('profile_txt_show');
         }
         _button[0].classList.add('button_show');
         _txtBox[0].classList.add('txt_box_show');
         _txtUl[0].classList.add('profile_txt_show');
     });
     // _buttonSP[0].addEventListener('click', function() {
     //     for(let i = 0; i < _buttonSP.length; i++) {
     //         _buttonSP[i].classList.remove('button_show');
     //         _txtBoxSP[i].classList.remove('txt_box_show');
     //         _txtUlSP[i].classList.remove('profile_txt_show');
     //     }
     //     _buttonSP[0].classList.add('button_show');
     //     _txtBoxSP[0].classList.add('txt_box_show');
     //     _txtUlSP[0].classList.add('profile_txt_show');
     // });
     //2
     _button[1].addEventListener('click', function() {
         for(let i = 0; i < _button.length; i++) {
             _button[i].classList.remove('button_show');
             _txtBox[i].classList.remove('txt_box_show');
             _txtUl[i].classList.remove('profile_txt_show');
         }
         _button[1].classList.add('button_show');
         _txtBox[1].classList.add('txt_box_show');
         _txtUl[1].classList.add('profile_txt_show');
     });
     // _buttonSP[1].addEventListener('click', function() {
     //     for(let i = 0; i < _buttonSP.length; i++) {
     //         _buttonSP[i].classList.remove('button_show');
     //         _txtBoxSP[i].classList.remove('txt_box_show');
     //         _txtUlSP[i].classList.remove('profile_txt_show');
     //     }
     //     _buttonSP[1].classList.add('button_show');
     //     _txtBoxSP[1].classList.add('txt_box_show');
     //     _txtUlSP[1].classList.add('profile_txt_show');
     // });
     //3
     _button[2].addEventListener('click', function() {
         for(let i = 0; i < _button.length; i++) {
             _button[i].classList.remove('button_show');
             _txtBox[i].classList.remove('txt_box_show');
             _txtUl[i].classList.remove('profile_txt_show');
         }
         _button[2].classList.add('button_show');
         _txtBox[2].classList.add('txt_box_show');
         _txtUl[2].classList.add('profile_txt_show');
     });
     // _buttonSP[2].addEventListener('click', function() {
     //     for(let i = 0; i < _buttonSP.length; i++) {
     //         _buttonSP[i].classList.remove('button_show');
     //         _txtBoxSP[i].classList.remove('txt_box_show');
     //         _txtUlSP[i].classList.remove('profile_txt_show');
     //     }
     //     _buttonSP[2].classList.add('button_show');
     //     _txtBoxSP[2].classList.add('txt_box_show');
     //     _txtUlSP[2].classList.add('profile_txt_show');
     // });
 
 // その他タブ
 let _worksBox = document.getElementsByClassName('works_div_other');
 let _worksPulldown = document.getElementsByClassName('works_pulldown');

 _worksBox[0].addEventListener('mouseover', function() {
     _worksBox[0].classList.add('pulldown_show');
     _worksPulldown[0].classList.add('pulldown_show');
 });
 _worksBox[0].addEventListener('mouseout', function() {
     _worksBox[0].classList.remove('pulldown_show');
     _worksPulldown[0].classList.remove('pulldown_show');
 });

 //タブリンク
 let _linkPlotter = document.getElementsByClassName('works_div_plotter');
 let _linkOsora = document.getElementsByClassName('works_div_osora');
 let _linkGraph = document.getElementsByClassName('works_div_graph');

 _linkPlotter[0].addEventListener('click' ,function() {
     window.location.href = 'single-plotter.html';
 });
 _linkOsora[0].addEventListener('click' ,function() {
     window.location.href = 'single-osora.html';
 });
 _linkGraph[0].addEventListener('click' ,function() {
     window.location.href = 'single-graph.html';
 });