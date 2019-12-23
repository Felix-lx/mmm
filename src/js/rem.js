$(window).on('resize', function () {
    // 自适应公式：设计图的宽度375px÷基于这个设计图自己设定的html的font-size 50px = 主流屏幕 ÷ 该主流屏幕的html的font-size
    //屏幕宽度
    let width = $(window).width()
    width = Math.max(width,320)
    width = Math.min(width,750)
    let fontSize = width/(375/50).toFixed(2)
    $('html').css('fontSize',fontSize+'px')
})
$(window).resize()