$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    })

    /* 아이콘 슬릭슬라이드 */
    $('.slider2').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    })

    $('.content_next').click(function(){
        $('.slider2').slick('slickNext')
    })

    //상단 올라가는 버튼
    $('#top_btn').click(function(){
        $('html , body').animate({
          'scrollTop': 0 ,
        },1000)
    })

    //전체보기 버튼 눌렀을 때 나타나기
    $('.gnb_all_btn').click(function(){
        if($('#gnb_all_content').hasClass('active')){
            $('#gnb_all_content').removeClass('active')
        } else{
            $('#gnb_all_content').addClass('active')
        }
    })

    /*오토탭 슬라이드*/

    $('#slick_left_tabs2 .slider3').on('init', function(event, slick){  
        $('#slick_left_tabs2 .tabs h3').eq(0).addClass('active');    
    });

    $('#slick_left_tabs2 .slider3').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    })

    $('#slick_left_tabs2 .slider3').on('afterChange', function(event, slick, currentSlide, nextSlide){
        console.log(currentSlide) //작동확인완료
        $('#slick_left_tabs2 .tabs h3').removeClass('active');    
        $('#slick_left_tabs2 .tabs h3').eq(currentSlide).addClass('active');
    })


    /*오토 탭 좌우이동 버튼 */
    $('.tabs_btn_left').click(function(){
        $('.').slick('slickNext')
    })

    $('.tabs_btn_right').click(function(){
        $('.').slick('slickPrev')
    })

    /*자유게시판 오토탭 슬라이드*/

    $('#slick_right_tabs1 .slider3').on('init', function(event, slick){  
        $('#slick_right_tabs1 .tabs h3').eq(0).addClass('active');    
    });

    $('#slick_right_tabs1 .slider3').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    })

    $('#slick_right_tabs1 .slider3').on('afterChange', function(event, slick, currentSlide, nextSlide){
        console.log(currentSlide) //작동확인완료
        $('#slick_right_tabs1 .tabs h3').removeClass('active');    
        $('#slick_right_tabs1 .tabs h3').eq(currentSlide).addClass('active');
    })

    /*제작의뢰 오토탭 슬라이드*/
    $('#slick_right_tabs2 .slider3').on('init', function(event, slick){  
        $('#slick_right_tabs1 .tabs h3').eq(0).addClass('active');    
    });

    $('#slick_right_tabs2 .slider3').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    })

    $('#slick_right_tabs2 .slider3').on('afterChange', function(event, slick, currentSlide, nextSlide){
        console.log(currentSlide) //작동확인완료
        $('#slick_right_tabs2 .tabs h3').removeClass('active');    
        $('#slick_right_tabs2 .tabs h3').eq(currentSlide).addClass('active');
    })

})