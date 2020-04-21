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

// 图书分类下拉
$('#xl2').mouseenter(function(){
    $('.search-book-xiala').show()
    // console.log(111)
})
$('.search-book-xiala').mouseleave(function(){
    $('.search-book-xiala').hide()
})