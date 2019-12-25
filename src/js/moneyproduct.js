$(function(){
    let address = decodeURI(window.location.search).replace('?','')
    const productid = address.split('=')
    
    $.ajax({
        type:'get',
        url:'http://localhost:3000/api/getmoneyctrlproduct',
        data:{
            productid:productid[1]
        },
        success:function(info){
            console.log(info);
            let arr = []
            info.result.productCity.forEach(element => arr.push(element.replace('有货','')))
            info.result.arr = arr
            $('.mp-details').html(template('tpl',info))
        }
    })
})