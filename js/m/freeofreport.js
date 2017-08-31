$(document).ready(function() {
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
});