$(document).ready(function() {
    /*修改密码部分的校验*/
    $.validator.setDefaults({
        submitHandler: function() {
            alert("提交事件!");
        }
    });
    $().ready(function() {
        // 在键盘按下并释放及提交后验证提交表单
        $(".contactus-form").validate({
            rules: {
                cname: {
                    required: true,
                },
                cphone: {
                    required: true,
                    minlength:8,
                },
                cabout: {
                    required: true,
                },
            },
            messages: {
                cname: {
                    required: "请输入您的姓名",
                },
                cphone: {
                    required: "手机号不能为空",
                    minlength:"手机号最小长度6位",
                },
                cabout: {
                    required: "留言内容不能为空",
                },
            }
        });
    });

    // 百度地图API功能
    var sContent =
    "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>碧沙科技（香港）有限公司</h4>" + 
    "<img style='float:right;margin:4px' id='imgDemo' src='../../img/HK_About/about_logo.png' width='139' height='104' title='碧沙科技（香港）有限公司'/>" + 
    "<p style='margin:0;line-height:1.5;font-size:13px;'>地址：香港新界葵涌健康街18号315室&nbsp;&nbsp;电话：(852) 2423 0600</p>" + 
    "</div>";
    var map = new BMap.Map("bisa-map");    //初始化
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    map.addControl(new BMap.NavigationControl()); //添加工具类
    map.addControl(new BMap.ScaleControl()); //添加比例尺
    var point = new BMap.Point(114.141702,22.373798); //添加地图上的点
    map.centerAndZoom(point, 19); //缩放比例
    /*--------------------我是一条华丽分割线----------------------------------*/
    var myIcon = new BMap.Icon("../../img/HK_About/in_this.gif", new BMap.Size(40,40));
    var marker = new BMap.Marker(point,{icon:myIcon});  // 创建标注,定义这个点
    map.addOverlay(marker);              // 将标注添加到地图中
    /*--------------------我是一条华丽分割线----------------------------------*/
    var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
    map.addOverlay(marker); //加载弹出层内容
    marker.addEventListener("click", function(){          
       this.openInfoWindow(infoWindow);
       //图片加载完毕重绘infowindow
       document.getElementById('imgDemo').onload = function (){
           infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
       }
    });
});

