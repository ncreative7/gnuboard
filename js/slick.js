$(document).ready(function(){
    $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    })

    $(".slider2").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    })

    //오른쪽 버튼 따로 분리해야 함
    $('.content_next').click(function(){
        $('.slider2').slick('slickNext')
    })

    //상단 올라가는 버튼
    $('#top_btn').click(function(){
        $("html , body").animate({
          "scrollTop": 0 ,
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

    $('#gnb_wrap .item').onMouseOver(function(){
        $('.item-sub').addClass('active')  
    })

    $('#gnb .item').onMouseOut(function(){
        $('.item-sub').removeClass('active')  
    })
})