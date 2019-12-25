$(function () {
    let titleId
    renderList(0)
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getbaicaijiatitle',
        success: function (info) {
            // console.log(info)
            $('.tab-inbox').html(template('tpl', info))
            // 求内盒子的总宽度
            let tabInboxWidth = 0
            info.result.forEach(element => {
                return tabInboxWidth += $('a[data-id=' + element.titleId + ']').outerWidth(true)
            })
            // console.log(tabInboxWidth)
            $('.tab-inbox').css('width', tabInboxWidth)
        }
    })

    function renderList(titleId) {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getbaicaijiaproduct',
            data: {
                titleid: titleId
            },
            success: function (info) {
                // console.log(info)
                info.result.forEach(element => {
                    element.productCouponRemainPercent = element.productCouponRemain.split('%')[0]
                    element.productCouponRemainQuantity = element.productCouponRemain.split('%')[1]
                    element.productNowPrice = element.productPrice.split('¥')[0]+'¥'+element.productPrice.split('¥')[1]
                    element.productOldPrice = '¥'+element.productPrice.split('¥')[2]
                })
                console.log(info)
                $('.bcj-list ul').html(template('tpl2', info))
            }
        })
    }

    $('.tab-inbox').on('click', '.tab-content a', function () {
        titleId = $(this).data('id')
        renderList(titleId)
    })
})