$(function () {
    function render(){
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getmoneyctrl',
            data: {
                pageid: 1
            },
            success: function (info) {
                console.log(info);
                $('.title-product ul').html(template('tpl2', info))
                // tpl3分页动态渲染
                pageNum = Math.ceil(info.count / 10)
                let arr = []
                for (let i = 1; i <= pageNum; i++) {
                    arr.push(i)
                }
                console.log(arr)
                // console.log({page:arr})
                $('.pages-box').html(template('tpl3', {page: arr}))
            }
        })
    }
    let pageNum
    render()
        // 导航的单独点击事件

    // 产品列表更新函数
    function pages(id){
        $.ajax({
            type:'get',
            url:'http://localhost:3000/api/getmoneyctrl',
            data:{
                pageid:id
            },
            success:function(info){
                // console.log(info);
                $('.title-product ul').html(template('tpl2', info))
            }
        })
    }
    // 页码点击
    $('.pages-box').on('click','.pages-a',function(){
        $(this).parents().addClass('mui-active').siblings().removeClass('mui-active')
        const id = $(this).data('id')
        pages(id)
    })

    // 左点击
    $('.pages-box').on('mouseup','.pages-prev',function(){
        let id = $('.mui-active').children('a').data('id')
        console.log(id);
        if(id <= 1){
            return
        }else{
            id = id-1
            $('.mui-active').removeClass('mui-active').prev().addClass('mui-active')
            pages(id)
        }
    })
    // 右点击
    $('.pages-box').on('click','.pages-next',function(){
        console.log(111);
        let id = $('.mui-active').children('a').data('id')
        console.log(id);
        if(id >= pageNum){
            return
        }else{
            id = id+1
            $('.mui-active').removeClass('mui-active').next().addClass('mui-active')
            pages(id)
        }
    })

})