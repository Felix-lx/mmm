$(function(){
    const couponid = decodeURI(window.location.search.replace('?','').split('&')[0].split('=')[1])
    const name = decodeURI(window.location.search.replace('?','').split('&')[1].split('=')[1])
    //标题栏动态渲染 
    $('.header-center').html(template('tpl2',{name1:name}))
    // 优惠券列表发送ajax请求
    $.ajax({
        type:'get',
        url:'http://localhost:3000/api/getcouponproduct',
        data:{
            couponid:couponid
        },
        success:function(info){
            console.log(info);
            $('.coupon-product-list').html(template('tpl',info))
        }
    })
})