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
// 图书分类下拉
$('#xl2').mouseenter(function () {
    $('.search-book-xiala').show()
    // console.log(111)
})
$('.search-book-xiala').mouseleave(function () {
    $('.search-book-xiala').hide()
})

// 下拉
$('.carousel-left-content>li').hover(function(){
    $(this).find(".carousel-left-content-hide").css("display","block")
},function(){
    $(this).find(".carousel-left-content-hide").css("display","none")
})

//轮播图
$(function () {
    var num = 0
    $('.slider').css("width", `${990 * 7}`)
    //让小圆点对应图片
    $(".span_list").each(function (index) {
        $(this).mouseenter(function () {
            num = index;
            $(".span_list").css("backgroundColor", "#4642a3")
            $(".span_list").eq(num).css("backgroundColor", "#6059cb")
            $(".slider").stop().animate({ "marginLeft": -990 * num + "px" })
            if(num==2){
                $('.carousel').css("backgroundColor","#2163af")
            }
            else{
                $('.carousel').css("backgroundColor","#fff")
            }
        })
    })
      //点击左右键
   $(".right_click").click(function(){
        if(num<7){num++}
        if(num>=7){
            num=0
            $(".slider").css("margin-left","0px")
        }
        if(num==7){
            $(".span_list").css("backgroundColor","#4642a3")
            $(".span_list").eq(0).css("backgroundColor","#6059cb")
        }
        else{
            $(".span_list").css("backgroundColor","#4642a3")
            $(".span_list").eq(num).css("backgroundColor","#6059cb")
        }
        $(".slider").stop().animate({"marginLeft":-990*num+"px"})
        if(num==2){
            $('.carousel').css("backgroundColor","#2163af")
        }
        else{
            $('.carousel').css("backgroundColor","#fff")
        }
    })

    $(".left_click").click(function(){
        if(num>0){num--}
        if(num<=0){
            num=7
            $(".slider").css("margin-left","-4950px")
            $(".span_list").css("backgroundColor","#4642a3");
            $(".span_list").eq(6).css("backgroundColor","#6059cb");
        }
        else{
            $(".span_list").css("backgroundColor","#4642a3");
            $(".span_list").eq(num).css("backgroundColor","#6059cb");
        }
        $(".slider").stop().animate({"marginLeft":-990*num+"px"});
        if(num==2){
            $('.carousel').css("backgroundColor","#2163af")
        }
        else{
            $('.carousel').css("backgroundColor","#fff")
        }
    })
})
