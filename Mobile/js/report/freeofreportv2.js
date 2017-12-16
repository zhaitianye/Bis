$(document).ready(function() {
    /*计算高度*/
    var freebox_h = $(".free_re_box").height();
    $(".free_re_c").height(freebox_h);
    /*绘图*/
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                data: [60, 21, 19],
                backgroundColor: [
                    'rgba(180,235,255, 1)',
                    'rgba(37,141,251, 1)',
                    'rgba(156,205,254, 1)'
                ],
                borderColor: [
                    'rgba(83,166,255,1)',
                    'rgba(83,166,255,1)',
                    'rgba(83,166,255,1)'
                ],
            }],
            labels: [
                '正常（%）',
                '过慢（%）',
                '过快（%）',
            ]
        },
        options: {
            legend: {
                display: false,
                labels: {
                    boxWidth: 0,
                },
                position: 'right',
            },
            cutoutPercentage: 0,
            layout: {
	            padding: {
	                left: 10,
	                right: 20,
	                top: 5,
	                bottom: 0
	            }
	        },
        }
    });
});