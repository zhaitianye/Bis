$(document).ready(function() {
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
                '正常心率',
                '过慢心率',
                '过快心率',
            ]
        },
        options: {
            legend: {
                display: false,
                labels: {
                    boxWidth: 10,
                },
                position: 'right',
            },
            cutoutPercentage: 0,
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
});