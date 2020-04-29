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

// 移入创建遮罩层
$('.main-content-1-lists .content-list').hover(function(){
    $(this).append(`<div class="box"></div>`)
    $(".box").css({
        "opacity":"0.2",
         "width":"188px",
         "height":" 275px",
         "backgroundColor":"#fff",
         "position":"absolute",
         "top":0,
         "left":0
    })
    $(this).find("p").css("color","red")
},function(){
    $(".box").remove()
    $(this).find("p").css("color","#333")
})
