$(function(){
    // 一级模板引擎的ajax请求
    $.ajax({
        type:'get',
        url:'http://localhost:3000/api/getcategorytitle',
        success:function(info){
            $('.category-title').html(template('tpl',info))
            }
        })

    // 二级模板引擎的ajax请求
    function secondContent(titleId) {
        $.ajax({
            type:'get',
            url:'http://localhost:3000/api/getcategory?titleid='+ titleId,
            success:function(info2){
                $('#'+titleId).html(template('tpl2',info2)) 
            }
        })
    }
    // 点击一级菜单触发二级模板引擎发送请求
    $('.category-title').on('click','li',function(){
        let titleId = $(this).data('titleid')
        $(this).children('ul').toggleClass('hidden').hasClass('hidden')? '':secondContent(titleId)
    })
})