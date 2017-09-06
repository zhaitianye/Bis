/*收费页面部分js*/
$(document).ready(function() {
    /*页面的环形图*/
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [0.7, 0.1, 0.2],
                backgroundColor: [
                    'rgba(38, 186, 154, 1)',
                    'rgba(217, 84, 79, 1)',
                    'rgba(239, 173, 77, 1)'
                ],
                borderColor: [
                    'rgba(177,224,196,1)',
                    'rgba(177,224,196,1)',
                    'rgba(177,224,196,1)'
                ],
            }],
            labels: [
                '正常心率',
                '过快心率',
                '过慢心率'
            ]
        },
        options: {
            legend: {
                display: false,
                labels: {
                    boxWidth: 20,
                },
                position: 'right',
            },
            cutoutPercentage: 50,
            layout: {
	            padding: {
	                left: 20,
	                right: 15,
	                top: 15,
	                bottom: 15
	            }
	        },
        }
    });
    /*本页面弹窗部分js*/
    var contentval = $(".layerfortestv1").html();
    $('#layer-testv1').on('click', function(){
      layer.open({
          type: 1,
          title :['总结','font-size:16px;'],
          skin: 'layui-layer-rim', //加上边框
          area: ['90%'], //宽高
          content: contentval,
        });
    });
    /*本页面swiper部分js*/
    var mySwiper = new Swiper ('.swiper-container', {        
        // 如果需要分页器
        pagination: '.swiper-pagination',
        slidesPerView : 1.1,
        //slidesOffsetBefore : 10,
        spaceBetween : 5,
        centeredSlides : true,
      });
});