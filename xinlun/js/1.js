/**
 * Created by Administrator on 2017/8/16 0016.
 */
//下拉菜单

$('#ul li').hover(
    function () {
        $(this).find("dl").stop().slideDown(500);
    },
    function () {
        $(this).find("dl").stop().slideUp(500);
    }
);
//轮播图开始
