$(document).ready(function() {
/*头像控制宽高*/
    set_h_w();
    $(window).resize(function(){
        set_h_w();
    });
    function set_h_w(){
        var headerimgw = $(".main_header_img").width();
        $(".main_header_img").height(headerimgw);
    };
/*心搏总数图*/
    var ctx = document.getElementById("photo_re_sum").getContext('2d');
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
                    'rgba(255,255,255,1)',
                    'rgba(255,255,255,1)',
                    'rgba(255,255,255,1)'
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
                    right: 10,
                    top: 0,
                    bottom: 0
                }
            },
        }
    });
/*十五分钟心率曲线图*/
    f_quarter_eccentricity();
    function f_quarter_eccentricity(){
        /*初始化*/
        var qua_ecc=document.getElementById("quarter_eccentricity");
        var qua_ecc_ctx=qua_ecc.getContext("2d");
        /*模式数据*/
        var qua_ecc_testdatav2 = ["62","71","66","69","70","66","64","72","66","73","66","66","62","74","62"];
        var qua_ecc_testdata = ["50","60","70","80","90","60","40","20","30","15","18","30","45","20","48"];
        /*给canvas宽高防止模糊*/
        qua_ecc_w = $(".quarter_eccentricity_box").width()*2;
        qua_ecc_h = 200*2;
        /*点的大小*/
        dot_wh = 6;
        /*文字大小*/
        dot_font_size =20;
        qua_ecc.width = qua_ecc_w;
        qua_ecc.height = qua_ecc_h;
        /*开始绘图*/
            /*渐变*/
                qua_ecc_ctx.beginPath();
                var my_gradient=qua_ecc_ctx.createLinearGradient(0,0,0,qua_ecc_h);
                my_gradient.addColorStop(0,"#DDEDFF");
                my_gradient.addColorStop(1,"white");
                qua_ecc_ctx.fillStyle=my_gradient;
                qua_ecc_ctx.fillRect(0,0,qua_ecc_w,qua_ecc_h);
                qua_ecc_ctx.stroke();
            /*间距*/
            var qua_ecc_btw = (qua_ecc_w-10)/(qua_ecc_testdata.length-1);
            /*路径遮罩*/
                /*第一个之前的坐标*/
                var y_num_f = qua_ecc_testdata[0];
                var y_space_f = qua_ecc_h-(y_num_f * qua_ecc_h/100);
                var x_space_f = 0;
                /*最后一个之后的坐标*/
                var y_num_l = qua_ecc_testdata[qua_ecc_testdata.length-1];
                var y_space_l = qua_ecc_h-(y_num_l * qua_ecc_h/100);
                var x_space_l = qua_ecc_w;
                qua_ecc_ctx.beginPath();
                qua_ecc_ctx.moveTo(0,0);
                qua_ecc_ctx.lineTo(0,y_space_f);
                for (var i = 0; i < qua_ecc_testdata.length; i++) {
                    var y_num = qua_ecc_testdata[i];
                    var y_space = qua_ecc_h-(y_num * qua_ecc_h/100);
                    var x_space = i*qua_ecc_btw + 6;
                    qua_ecc_ctx.lineTo(x_space,y_space);
                };
                qua_ecc_ctx.lineTo(x_space_l,y_space_l);
                qua_ecc_ctx.lineTo(qua_ecc_w,0);
                qua_ecc_ctx.lineTo(0,0);
                qua_ecc_ctx.fillStyle="white";
                qua_ecc_ctx.strokeStyle="white";
                qua_ecc_ctx.fill();
                qua_ecc_ctx.stroke();
            /*描点*/
            for (var i = 0; i < qua_ecc_testdata.length; i++) {
                qua_ecc_ctx.beginPath();
                var y_num = qua_ecc_testdata[i];
                var y_space = qua_ecc_h-(y_num * qua_ecc_h/100);
                var x_space = i*qua_ecc_btw + 6;
                qua_ecc_ctx.arc(x_space,y_space,dot_wh,0,360,false);
                qua_ecc_ctx.strokeStyle="#53A6FF";
                qua_ecc_ctx.fillStyle = '#53A6FF';
                qua_ecc_ctx.lineWidth=0;
                qua_ecc_ctx.fill();
                qua_ecc_ctx.stroke();
            };
            /*划线*/
            for (var i = 0; i < qua_ecc_testdata.length-1; i++) {
                qua_ecc_ctx.beginPath();
                qua_ecc_ctx.strokeStyle="#53A6FF";
                qua_ecc_ctx.lineCap="square";
                qua_ecc_ctx.lineWidth=3;
                var y_num = qua_ecc_testdata[i];
                var y_space = qua_ecc_h-(y_num * qua_ecc_h/100);
                var x_space = i*qua_ecc_btw + 6;
                var y_num_n = qua_ecc_testdata[i+1];
                var y_space_n = qua_ecc_h-(y_num_n * qua_ecc_h/100);
                var x_space_n = (i+1)*qua_ecc_btw + 6;
                qua_ecc_ctx.moveTo(x_space,y_space);
                qua_ecc_ctx.lineTo(x_space_n,y_space_n);
                qua_ecc_ctx.stroke();
            };
            /*文字*/
            for (var i = 0; i < qua_ecc_testdata.length; i++) {
                qua_ecc_ctx.beginPath();
                qua_ecc_ctx.fillStyle="#53A6FF";
                qua_ecc_ctx.font=dot_font_size+"px Arial";

                var y_num = qua_ecc_testdata[i];
                var y_space = qua_ecc_h-(y_num * qua_ecc_h/100)-12;
                if (i==0) {
                    var x_space = i*qua_ecc_btw;
                }else if(i==qua_ecc_testdata.length-1){
                    var x_space = i*qua_ecc_btw-13;
                }else{
                    var x_space = i*qua_ecc_btw-6;
                }
                qua_ecc_ctx.fillText(y_num,x_space,y_space);
                qua_ecc_ctx.stroke();
            };
    };
        
});