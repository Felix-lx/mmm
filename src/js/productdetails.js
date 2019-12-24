$(function () {
    let address = decodeURI(window.location.search).replace('?', '')
    const arr = address.split('&')
    console.log(arr);
    const categoryId = arr[0].split('=')
    const productId = arr[1].split('=')
    console.log(productId[1]);
    

    // 导航请求
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getcategorybyid',
        data: {
            categoryid: categoryId[1],
        },
        success: function (info) {
            console.log(info.result);
            $('.breadcrumb').html(template('tpl', info))
        }
    })

    // 产品信息
    function render() {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getproduct',
            data: {
                productid: productId[1],
            },
            success: function (info) {
                console.log(info);
                $('.box-productdetails').html(template('tpl2',info))
            }
        })
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getproductcom',
            data: {
                productid: productId[1],
            },
            success: function (info) {
                console.log(info);
                $('.box-productevaluate').html(template('tpl3',info))
            }
        })
    }

    render()
})