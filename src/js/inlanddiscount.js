$(function(){
    $.ajax({
        type:'get',
        url:'http://localhost:3000/api/getinlanddiscount',
        success:function(info){
            console.log(info);
            $('.inland-discount').html(template('tpl',info))
            
        }
    })
})