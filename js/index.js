//顶部导航下拉菜单
$('#jx').mouseenter(function () {
    $('.diqu').show()
})
$('.diqu').mouseleave(function () {
    $('.diqu').hide()
})

$('#xl1').mouseenter(function () {
    $('.my-jd').show()
})
$('.my-jd').mouseleave(function () {
    $('.my-jd').hide()
})
//广告
$('#ad-close').click(function () {
    $('.ad').css("display", "none")
})

// 图书分类下拉
$('#xl2').mouseenter(function () {
    $('.search-book-xiala').show()
    // console.log(111)
})
$('.search-book-xiala').mouseleave(function () {
    $('.search-book-xiala').hide()
})
//图书分类下拉
$('.fenlei-list li').mouseenter(function () {
    $(this).find("div").show()
    $(this).css('backgroundColor', "#f2eeeb")
})
$('.fenlei-list li').mouseleave(function () {
    $(this).find("div").hide()
    $(this).css('backgroundColor', "#fff")
})
//轮播图
$(function () {
    $('.slider').css("width", `${734 * 5}`)
    var num = 0
    var timer = null
    go()
    $(".fenlei-center-lunbo").mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        go()
    })
    // 轮播图默认向左走定时器
    function go() {
        timer = setInterval(function () {
            num++;
            if (num > 4) {
                num = 1;
                $(".slider").css("margin-left", "0px");
            }
            if (num == 4) {
                $(".span_list").css("backgroundColor", "transparent");
                $(".span_list").eq(0).css("backgroundColor", "white");
            }
            else {
                $(".span_list").css("backgroundColor", "transparent");
                $(".span_list").eq(num).css("backgroundColor", "white");
            }
            $(".slider").animate({ "marginLeft": -734 * num + "px" }, 580);
        }, 2000);
    }
    //让小圆点对应图片
    $(".span_list").each(function (index) {
        $(this).click(function () {
            num = index;
            $(".span_list").css("backgroundColor", "transparent");
            $(".span_list").eq(num).css("backgroundColor", "white");
            $(".slider").stop().animate({ "marginLeft": -734 * num + "px" }, 580);
        })
    })
   //点击左右键
   $(".right_click").click(function(){
        if(num<5){num++;}
        if(num>=5){
            num=0;
            $(".slider").css("margin-left","0px");
        }
        if(num==5){
            $(".span_list").css("backgroundColor","transparent");
            $(".span_list").eq(0).css("backgroundColor","white");
        }
        else{
            $(".span_list").css("backgroundColor","transparent");
            $(".span_list").eq(num).css("backgroundColor","white");
        }
        $(".slider").stop().animate({"marginLeft":-734*num+"px"},580);

    });

    $(".left_click").click(function(){
        if(num>0){num--;}
        if(num<=0){
            num=5;
            $(".slider").css("margin-left","-3670px")
            $(".span_list").css("backgroundColor","transparent");
            $(".span_list").eq(5).css("backgroundColor","white");
        }
        else{
            $(".span_list").css("backgroundColor","transparent");
            $(".span_list").eq(num).css("backgroundColor","white");
        }
        $(".slider").stop().animate({"marginLeft":-734*num+"px"},580);

    });
})

//tab切换
$('.aa-tuijian-jingxuan span').mouseenter(function(){
    let index=$('.aa-tuijian-jingxuan span').index($(this))
    $('.jingxuan-content li').each(function(){
        $('.jingxuan-content>li').css("display","none")
    })
    $('.jingxuan-content>li').eq(index).css("display","block")
    $('.aa-tuijian-jingxuan span').removeClass('active')
     $(this).addClass("active")
})
$('.aa-tuijian-xinshu span').mouseenter(function(){
    let index=$('.aa-tuijian-xinshu span').index($(this))
    $('.xinshu-content li').each(function(){
        $('.xinshu-content>li').css("display","none")
    })
    $('.xinshu-content>li').eq(index).css("display","block")
    $('.aa-tuijian-xinshu span').removeClass('active')
     $(this).addClass("active")
})
// 手风琴
$(".box ul li").hover(function(){
    $(this).addClass('on').siblings().removeClass('on');
});