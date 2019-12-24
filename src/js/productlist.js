$(function(){  
    let address =window.location.search
    address = decodeURI(address).replace('?','')
    const arr = address.split('&')
    // console.log(arr);
    const categoryid = arr[0].split('=')
    const category = arr[1].split('=')
    // console.log(categoryid[1]);
    // console.log(category[1]);

    // 导航请求
    $.ajax({
        type:'get',
        url:'http://localhost:3000/api/getcategorybyid',
        data:{
            categoryid:categoryid[1]
        },
        success:function(info){
            // console.log(info.result);
            $('.breadcrumb').html(template('tpl',info))
        }
    })
    // 产品信息和导航生成
    function render(){
        $.ajax({
            type:'get',
            url:'http://localhost:3000/api/getproductlist',
            data:{
                categoryid:categoryid[1],
                category:category[1]
            },
            success:function(info){
                // tpl2产品列表动态渲染
                // console.log(info.result.list);
                $('.productlist ul').html(template('tpl2',info))

                // tpl3分页动态渲染
                pageNum = Math.ceil(info.result.count/10)
                let arr = []
                for(let i=1 ; i<=pageNum ; i++){
                    arr.push(i)
                }
                console.log(arr)
                // console.log({page:arr})
                $('.pages-box').html(template('tpl3',{page:arr}))
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
            url:'http://localhost:3000/api/getproductlist',
            data:{
                categoryid:categoryid[1],
                category:category[1],
                pageid:id
            },
            success:function(info){
                // console.log(info);
                $('.productlist ul').html(template('tpl2',info))
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