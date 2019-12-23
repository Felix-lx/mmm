$(function(){
    $.ajax({
        type:'get',
        url:'http://localhost:3000/api/getindexmenu',
        success:function(info){
            $('.menu ul').html(template('tpl',info))
            $('.menu>ul>li:nth-child(8)').addClass('more')
        }
    })

    $('.menu ul').on('click','.more',function(){
        $(this).nextAll().toggleClass('conceal')
    })

    $.ajax({
        type:'get',
        url:'http://localhost:3000/api/getmoneyctrl',
        success:function(info){
            $('.title-product ul').html(template('tpl2',info))
        }
    })

    $('.back-top').on('click',function(){
        // $(window).scrollTop(0)
        $('html').animate({scrollTop:0},500,'linear')
    })
    
})