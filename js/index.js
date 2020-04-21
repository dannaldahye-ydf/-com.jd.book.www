//顶部导航下拉菜单
$('#jx').mouseenter(function(){
    $('.diqu').show()
})
$('.diqu').mouseleave(function(){
    $('.diqu').hide()
})

$('#xl1').mouseenter(function(){
    $('.my-jd').show()
})
$('.my-jd').mouseleave(function(){
    $('.my-jd').hide()
})
//广告
$('#ad-close').click(function(){
    $('.ad').css("display","none")
})