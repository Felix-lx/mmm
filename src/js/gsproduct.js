$(function(){
    let shopId = 0
    let areaId = 0
    renderList(shopId,areaId)
    // 来源店铺的点击事件
    $('.tab-inbox-list-from').on('click',function(){
        $('.tab-content1').css('display','block').siblings().css('display','none')
        $.ajax({
            type:'get',
            url: 'http://localhost:3000/api/getgsshop',
            success:function(info){
                // console.log(info)
                $('.tab-content1').html(template('tpl1',info))
            }
        })
        let thatFrom = $(this)
        
        $('.tab-content1').on('click','.tab-content-list',function(){
            shopId = $(this).data('shopid')
            thatFrom.text($(this).text())
            renderList(shopId,areaId)
        })
        console.log(shopId,areaId);
    })

    // 来源地区的点击事件
    $('.tab-inbox-list-area').on('click',function(){
        $('.tab-content2').css('display','block').siblings().css('display','none')
        $.ajax({
            type:'get',
            url: 'http://localhost:3000/api/getgsshoparea',
            success:function(info){
                $('.tab-content2').html(template('tpl2',info))
            }
        })
        let thatArea = $(this)

        $('.tab-content2').on('click','.tab-content-list',function(){
            areaId = $(this).data('areaid')
            thatArea.text($(this).text())
            renderList(shopId,areaId)
        })
        console.log(shopId,areaId);
    })

    //产品列表渲染函数封装 
    function renderList(shopId,areaId){
        $.ajax({
            type:'get',
            url:'http://localhost:3000/api/getgsproduct',
            data:{
                shopid:shopId,
                areaid:areaId
            },
            success:function(info){
                $('.gsproduct-list').html(template('tpl3',info))
                $('.tab-content').css('display','none')
            }
        })
    }
})