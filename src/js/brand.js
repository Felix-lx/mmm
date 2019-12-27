$(function(){
    const brandtitleid = parseInt(decodeURI(window.location.search.replace('?','').split('&')[0].split('=')[1]))
    const brandtitle = decodeURI(window.location.search.replace('?','').split('&')[1].split('=')[1]).split('十大品牌')[0]
    console.log(brandtitle);
    $('.brand-tip').html(template('tpl2',{result:brandtitle}))
    $.ajax({
        url:'http://localhost:3000/api/getbrand',
        data:{
            brandtitleid:brandtitleid
        },
        success:function(info){
            console.log(info);
            
            $('.brand-title').html(template('tpl',info))
        }
    })
    
})