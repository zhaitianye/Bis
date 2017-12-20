$(document).ready(function() {
/*头像控制宽高*/
    $(window).resize(function(){
        set_h_w();
        f_hrmax();
        f_hrmin();
        f_quarter_eccentricity();
        f_pvac_bg(sim_pvac_bg_time,sin_pvac_bg_index);
    });
    set_h_w();
    function set_h_w(){
        var headerimgw = $(".main_header_img").width();
        $(".main_header_img").height(headerimgw);
    };
/*心搏总数饼图图*/
    f_tot_num();
    function f_tot_num(){
        var tot_num = document.getElementById("photo_re_sum").getContext('2d');
        var myChart = new Chart(tot_num, {
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
    };
/*十五分钟心率曲线图*/
    f_quarter_eccentricity();
    function f_quarter_eccentricity(){
        /*初始化*/
        var qua_ecc=document.getElementById("quarter_eccentricity");
        var qua_ecc_ctx=qua_ecc.getContext("2d");
        qua_ecc_ctx.clearRect(0,0,qua_ecc.width,qua_ecc.height);
        /*模式数据*/
        var qua_ecc_testdata = ["62","71","66","69","70","66","64","72","66","73","66","66","62","74","62"];
        var qua_ecc_testdatav2 = ["50","60","70","80","90","60","40","20","30","15","18","30","45","20","48"];
        /*给canvas宽高防止模糊*/
        var qua_ecc_w = $(".quarter_eccentricity_box").width()*2;
        var qua_ecc_h = 200*2;
        /*点的大小*/
        var dot_wh = 6;
        /*文字大小*/
        var dot_font_size =20;
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
                qua_ecc_ctx.closePath();
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
                qua_ecc_ctx.closePath();
            /*描点*/
            for (var i = 0; i < qua_ecc_testdata.length; i++) {
                qua_ecc_ctx.beginPath();
                var y_num = qua_ecc_testdata[i];
                var y_space = qua_ecc_h-(y_num * qua_ecc_h/100);
                if (i==0) {
                    var x_space = i*qua_ecc_btw+12;
                }else if(i==qua_ecc_testdata.length-1){
                    var x_space = i*qua_ecc_btw-2;
                }else{
                    var x_space = i*qua_ecc_btw + 6;
                }
                qua_ecc_ctx.arc(x_space,y_space,dot_wh,0,360,false);
                qua_ecc_ctx.strokeStyle="#53A6FF";
                qua_ecc_ctx.fillStyle = '#53A6FF';
                qua_ecc_ctx.lineWidth=0;
                qua_ecc_ctx.fill();
                qua_ecc_ctx.stroke();
                qua_ecc_ctx.closePath();
            };
            /*划线*/
            for (var i = 0; i < qua_ecc_testdata.length-1; i++) {
                qua_ecc_ctx.beginPath();
                qua_ecc_ctx.strokeStyle="#53A6FF";
                qua_ecc_ctx.lineCap="square";
                qua_ecc_ctx.lineWidth=3;
                var y_num = qua_ecc_testdata[i];
                var y_space = qua_ecc_h-(y_num * qua_ecc_h/100);
                if (i==0) {
                    var x_space = i*qua_ecc_btw+12;
                }else{
                    var x_space = i*qua_ecc_btw + 6;
                }
                var y_num_n = qua_ecc_testdata[i+1];
                var y_space_n = qua_ecc_h-(y_num_n * qua_ecc_h/100);

                if (i==qua_ecc_testdata.length-2) {
                    var x_space_n = (i+1)*qua_ecc_btw - 2;
                }else{
                    var x_space_n = (i+1)*qua_ecc_btw + 6;
                }
                qua_ecc_ctx.moveTo(x_space,y_space);
                qua_ecc_ctx.lineTo(x_space_n,y_space_n);
                qua_ecc_ctx.stroke();
                qua_ecc_ctx.closePath();
            };
            /*文字*/
            for (var i = 0; i < qua_ecc_testdata.length; i++) {
                qua_ecc_ctx.beginPath();
                qua_ecc_ctx.fillStyle="#53A6FF";
                qua_ecc_ctx.font=dot_font_size+"px Arial";

                var y_num = qua_ecc_testdata[i];
                var y_space = qua_ecc_h-(y_num * qua_ecc_h/100)-12;
                if (i==0) {
                    var x_space = i*qua_ecc_btw+5;
                }else if(i==qua_ecc_testdata.length-1){
                    var x_space = i*qua_ecc_btw-13;
                }else{
                    var x_space = i*qua_ecc_btw-6;
                }
                qua_ecc_ctx.fillText(y_num,x_space,y_space);
                qua_ecc_ctx.stroke();
                qua_ecc_ctx.closePath();
            };
    };
/*最大心率心电图*/
    f_hrmax();
    function f_hrmax(){
        /*初始化*/
        var hrmax=document.getElementById("hrmax");
        var hrmax_ctx=hrmax.getContext("2d");
        hrmax_ctx.clearRect(0,0,hrmax.width,hrmax.height);
        /*模式数据*/
        var hrmax_date = ["01F4","01F3","01F3","01F3","01F3","01F3","01F3","01F3","01F3","01F3","01F4","01F4","01F4","01F4","01F4","01F4","01F4","01F4","01F5","01F4","01F5","01F5","01F5","01F5","01F6","01F5","01F6","01F5","01F5","01F6","01F6","01F9","01FB","01FD","01FB","01F9","01F9","01F9","01F8","01F7","01F7","01F6","01F7","01F7","01F7","01F7","01F5","0200","0215","022D","0201","01DC","01BC","01B7","01CF","01E2","01F0","01F4","01F5","01F7","01F8","01F9","01F9","01FB","01FB","01FD","01FE","0200","0201","0203","0206","0208","020C","020E","0212","0216","021B","021F","0223","0226","0229","022A","022A","0229","0225","021F","0216","020D","0203","01FB","01F6","01F1","01EE","01ED","01EC","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01ED","01EC","01EC","01EC","01EC","01EB","01EB","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EB","01EA","01EA","01EB","01EA","01EB","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01EC","01EC","01EC","01EC","01EC","01ED","01EF","01F2","01F2","01F0","01EF","01EF","01EF","01EF","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01FD","0215","0228","01F4","01CC","01BA","01C2","01D8","01E9","01F2","01F4","01F6","01F7","01F8","01F9","01FA","01FB","01FD","01FE","01FF","0201","0203","0205","0208","020B","020E","0212","0216","021B","0220","0224","0228","022B","022D","022E","022D","022A","0225","021D","0213","0209","0200","01F8","01F2","01EF","01ED","01EC","01EC","01EB","01EB","01ED","01EC","01EC","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EA","01EA","01E9","0207","0223","0212","01D9","01B7","01A7","01C1","01DF","01ED","01F0","01F2","01F3","01F5","01F5","01F6","01F7","01F9","01FA","01FB","01FD","01FF","0201","0204","0207","020A","020E","0213","0217","021B","021F","0222","0223","0225","0224","0220","0219","0211","0207","01FD","01F6","01EF","01EB","01E9","01E8","01E8","01E8","01E8","01E8","01E8","01E8","01E9","01E8","01E8","01E8","01E8","01E8","01E8","01E8","01E7","01E7","01E7","01E7","01E7","01E7","01E7","01E7","01E7","01E7","01E7","01E8","01E8","01E8","01E8","01E8","01E8","01E8","01E8","01E8","01E9","01E9","01E9","01E9","01E9","01EA","01E9","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01ED","01EC","01EC","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01EE","01EE","01EE","01ED","01ED","01ED","01ED","01F0","01F2","01F2","01F2","01F1","01F0","01EF","01EF","01EF","01EF","01EE","01EE","01EF","01EE","01ED","01F8","020F","022B","0203","01DF","01C2","01BC","01D2","01E2","01F0","01F4","01F6","01F7","01F8","01F8","01FA","01FA","01FB","01FC","01FD","01FF","0200","0202","0204","0206","0209","020C","020F","0212","0216","021A","021D","0220","0222","0224","0225","0224","0222","021E","0219","0212","0209","0203","01FC","01F6","01F2","01F0","01EF","01EE","01EE","01EE","01EE","01EE","01EE","01ED","01ED","01EE","01ED","01ED","01ED","01ED","01ED","01EB","01EC","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EB","01EB","01EA","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EA","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01EC","01ED","01EC","01EC","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01EE","01F1","01F3","01F4","01F2","01F1","01F1","01F0","01EF","01EF","01EE","01EE","01EE","01EE","01EE","01EE","01EC","01FD","0215","0229","01F7","01D0","01BE","01C3","01D7","01E8","01F3","01F5","01F7","01F8","01F9","01FB","01FB","01FC","01FD","01FE","0200","0202","0204","0206","0208","020C","020E","0212","0215","0219","021D","0222","0226","0229","022A","022C","022B","0229","0225","021E","0216","020C","0203","01FC","01F5","01F1","01EE","01ED","01EC","01EC","01EC","01EC","01ED","01ED","01EC","01ED","01ED","01ED","01ED","01EC","01EC","01EC","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EA","01EA","01E9","01E9","01E9","01E9","01EA","01EA","01EA","01E9","01EA","01EA","01EA","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01EB","01EC","01EC","01EC","01EC","01EC","01ED","01EF","01F2","01F2","01F0","01EF","01EF","01EF","01ED","01EC","01ED","01ED","01ED","01ED","01ED","01ED","01EB","01F7","0211","022F","0201","01DA","01BA","01B9","01D3","01E6","01F1","01F3","01F5","01F7","01F8","01F9","01FA","01FA","01FC","01FD","01FE","0201","0202","0204","0207","0209","020C","020F","0214","0218","021D","0221","0225","0228","022A","022B","022C","022A","0226","021F","0216","020C","0203","01FA","01F4","01F0","01ED","01EB","01EB","01EA","01EA","01EA","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01E9","01E9","01E9","01E9","01E9","01E9","01E9","01E9","01E8","01E9","01E9","01E9","01E9","01E9","01E9","01E9","01E9","01EA","01E9","01EA","01EA","01EA","01EA","01EA","01EA","01EB","01EB","01EB","01EA","01EA","01EB","01EC","01EF","01F1","01F1","01EF","01EE","01EE","01ED","01EC","01EB","01EB","01EB","01EB","01EB","01EC","01EB","01EA","01FA","0214","022B","01F7","01D0","01B6","01BB","01CF","01E2","01EE","01F3","01F4","01F6","01F7","01F8","01F9","01FA","01FA","01FB","01FD","01FF","0200","0203","0205","0208","020A","020E","0212","0216","021A","021D","0221","0224","0226","0227","0227","0226","0222","021B","0213","020A","0201","01FA","01F3","01EF","01ED","01EB","01EA","01EA","01EA","01EA","01EA","01EB","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EA","01EA","01E9","01E9","01E9","01E9","01E9","01E9","01E8","01E9","01E8","01E9","01E9","01E9","01E9","01E9","01E9","01E9","01E9","01EA","01EA","01EA","01EA","01E9","01EA","01EA","01EA","01EA","01EB","01EB","01EA","01EB","01ED","01EF","01F2","01F1","01EF","01EE","01EE","01ED","01EC","01EB","01EB","01EB","01EC","01EC","01ED","01EB","01EC","0202","021C","0214","01E6","01CA","01B7","01C2","01D8","01E9","01F2","01F4","01F6","01F7","01F8","01F8","01FA","01FB","01FB","01FD","01FE","0200","0202","0204","0206","0209","020C","020F","0213","0218","021B","0220","0223","0225","0227","0228","0228","0225","0220","0219","0211","0207","01FF","01F8","01F2","01EF","01ED","01EC","01EB","01EB","01EB","01EC","01EC","01EC","01EC","01ED","01ED","01ED","01EC","01EC","01EC","01EB","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EA","01EA","01E9","01EA","01EA","01EA","01EA","01EA","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01ED","01EC","01EC","01EE","01F0","01F3","01F2","01F0","01EF","01F0","01EF","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01EB","01FF","021D","0219","01EE","01CC","01B8","01C5","01DC","01EC","01F3","01F5","01F7","01F8","01F9","01FA","01FB","01FB","01FD","01FF","0200","0201","0203","0205","0208","020B","020E","0212","0216","021B","021F","0224","0227","022A","022C","022D","022C","0229","0224","021C","0212","0208","01FF","01F8","01F3","01F0","01ED","01EC","01EB","01EB","01EB","01EB","01EC","01EB","01EC","01EC","01EC","01EC","01EC","01ED","01EC","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01EC","01ED","01ED","01ED","01EF","01F1","01F3","01F2","01F0","01F0","01EF","01EE","01ED","01ED","01ED","01ED","01ED","01ED","01EE","01EC","01ED","0209","0221","0214","01DF","01C5","01B4","01C8","01DF","01EF","01F3","01F5","01F7","01F8","01F9","01FA","01FB","01FC","01FD","01FF","0200","0203","0205","0207","0209","020C","020F","0213","0217","021B","0220","0224","0227","022A","022B","022C","022A","0227","0221","0219","0210","0206","01FD","01F7","01F2","01EF","01ED","01EC","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01EC","01EC","01EC","01EB","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01E9","01E9","01E9","01E9","01E9","01EA","01EA","01EA","01EA","01EA","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01EB","01EC","01EC","01EC","01EE","01F1","01F3","01F1","01EF","01EF","01EF","01ED","01EC","01EC","01EC","01EC","01EC","01EC","01ED","01EB","01ED","0209","021D","020E","01D9","01BD","01B4","01C7","01DC","01ED","01F2","01F3","01F5","01F6","01F7","01F9","01F9","01FB","01FB","01FD","01FF","0200","0202","0204","0207","0209","020D","0211","0215","0218","021D","0221","0223","0226","0227","0227","0226","0222","021C","0214","020C","0203","01FB","01F5","01F1","01EE","01ED","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01EC","01ED","01EC","01EC","01EC","01EC","01EB","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EB","01EA","01EB","01EB","01EB","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01ED","01EF","01F1","01F3","01F1","01F0","01EF","01EF","01EE","01EE","01ED","01ED","01ED","01ED","01ED","01ED","01EB","01F5","020B","022F","0214","01E0"];
        /*转换数据*/
        for (var i = 0; i < hrmax_date.length; i++) {
            var this_indate16 = hrmax_date[i];
            hrmax_date[i] = parseInt(this_indate16,16);
        };
        /*给canvas宽高防止模糊*/
        var hrmax_w = $(".hrmax_box").width()*2;
        var hrmax_h = 200*2;
        hrmax.width = hrmax_w;
        hrmax.height = hrmax_h;
        /*文字大小*/
        var dot_font_size =10;
        /*采样率*/
        var sam_rate =125;
        /*外部黑边边距*/
        var black_side = 20;
        /*最大心率索引*/
        var max_dot_index = 180;
        /*时间*/
        var hr_max_time = "2016/08/10/ 19:15:38"
        /*开始绘图*/
            /*背景*/
            hrmax_ctx.beginPath();
            hrmax_ctx.fillStyle="#000";
            hrmax_ctx.fillRect(0,0,hrmax_w,hrmax_h);
            hrmax_ctx.closePath();
            /*竖线*/
            for (var i = 0; i <= 25; i++) {
                hrmax_ctx.beginPath();
                hrmax_ctx.strokeStyle="#444";
                hrmax_ctx.lineCap="square";
                hrmax_ctx.lineWidth=1;
                if (i==5 || i==10 || i==15 ||i==20 ||i==25) {
                    hrmax_ctx.strokeStyle="#888";
                    hrmax_ctx.lineWidth=1;
                }else{
                    hrmax_ctx.strokeStyle="#444";
                    hrmax_ctx.lineWidth=1;
                };
                var this_w = ((hrmax_w-black_side-black_side)*i/25)+black_side;
                hrmax_ctx.moveTo(this_w,black_side);
                hrmax_ctx.lineTo(this_w,hrmax_h-black_side);
                hrmax_ctx.stroke();
                hrmax_ctx.closePath();
            };
            /*横线*/
            for (var j = 0; j <= 20; j++) {
                hrmax_ctx.beginPath();
                hrmax_ctx.strokeStyle="#444";
                hrmax_ctx.lineCap="square";
                hrmax_ctx.lineWidth=1;
                if (j==4 || j==8 || j==12 ||j==16) {
                    hrmax_ctx.strokeStyle="#888";
                    hrmax_ctx.lineWidth=1;
                }else{
                    hrmax_ctx.strokeStyle="#444";
                    hrmax_ctx.lineWidth=1;
                };
                var this_h = ((hrmax_h-black_side-black_side)*j/20)+black_side;
                hrmax_ctx.moveTo(black_side,this_h);
                hrmax_ctx.lineTo(hrmax_w-black_side,this_h);
                hrmax_ctx.stroke();
                hrmax_ctx.closePath();
            };
            /*画点*/
            var hrmax_dal = hrmax_date.length;
            if (hrmax_dal>sam_rate*5) {
                hrmax_dal = sam_rate*5;
            };
            var between_w = (hrmax_w-black_side-black_side)/hrmax_dal;
            var between_h = 1/1000*(hrmax_h-black_side-black_side);
            for (var i = 0 ; i < hrmax_dal; i++) {
                /*第一个点的坐标*/
                var msi_w = i*between_w+black_side;
                var msi_h = hrmax_h-(hrmax_date[i]*between_h+black_side);
                /*下一个点的坐标*/
                var msi_wt = (i+1)*between_w+black_side;
                var msi_ht = hrmax_h-(hrmax_date[i+1]*between_h+black_side);
                hrmax_ctx.beginPath();
                hrmax_ctx.strokeStyle="#8FFF00";
                hrmax_ctx.lineCap="square";
                hrmax_ctx.lineWidth=1;
                hrmax_ctx.moveTo(msi_w,msi_h);
                hrmax_ctx.lineTo(msi_wt,msi_ht);
                hrmax_ctx.stroke();
                hrmax_ctx.closePath();
            };
            /*文字y轴*/
            hrmax_ctx.beginPath();
            hrmax_ctx.fillStyle="#fff";
            hrmax_ctx.font= dot_font_size+"px Arial";
            hrmax_ctx.fillText("200",0,((hrmax_h-black_side-black_side)*4/5)+black_side+3);
            hrmax_ctx.fillText("400",0,((hrmax_h-black_side-black_side)*3/5)+black_side+3);
            hrmax_ctx.fillText("600",0,((hrmax_h-black_side-black_side)*2/5)+black_side+3);
            hrmax_ctx.fillText("800",0,((hrmax_h-black_side-black_side)*1/5)+black_side+3);
            hrmax_ctx.fillText("1000",0,((hrmax_h-black_side-black_side)*0/5)+black_side+3);
            hrmax_ctx.closePath();
            /*文字x轴*/
            hrmax_ctx.beginPath();
            hrmax_ctx.fillStyle="#fff";
            hrmax_ctx.font= dot_font_size+"px Arial";
            for (var i = 0; i <= hrmax_dal/sam_rate; i++) {
                var fill_x = (((hrmax_w-black_side-black_side)/hrmax_dal*sam_rate)*i)+20;
                var fill_y = hrmax_h-5;
                hrmax_ctx.fillText(i+"s",fill_x,fill_y);
            };
            hrmax_ctx.closePath();
            /*索引线*/
            hrmax_ctx.beginPath();
            hrmax_ctx.strokeStyle="#FFFF07";
            hrmax_ctx.lineCap="square";
            hrmax_ctx.lineWidth=1;
            var this_x = ((hrmax_w-black_side-black_side)/hrmax_dal)*max_dot_index+black_side;
            var this_y = hrmax_h-(hrmax_date[max_dot_index]*between_h+black_side);
            hrmax_ctx.moveTo(this_x,black_side);
            hrmax_ctx.lineTo(this_x,hrmax_h-black_side);
            hrmax_ctx.stroke();
            /*索引文字*/
            /*hrmax_ctx.fillStyle="#FFFF07";
            hrmax_ctx.font= dot_font_size+"px Arial";
            hrmax_ctx.fillText("最大心率："+hrmax_date[max_dot_index],this_x+3,((hrmax_h-black_side-black_side)*1/10)+black_side-5);*/
            hrmax_ctx.closePath();
            /*时间图例*/
            hrmax_ctx.beginPath();
            hrmax_ctx.fillStyle="#FFFFFF";
            hrmax_ctx.font= dot_font_size+"px Arial";
            hrmax_ctx.fillText("Detecting time:"+hr_max_time+"    最大心率："+hrmax_date[max_dot_index],black_side+5,black_side-5);
            hrmax_ctx.closePath();
    };
/*最小心率心电图*/
    f_hrmin();
    function f_hrmin(){
        /*初始化*/
        var hrmin=document.getElementById("hrmin");
        var hrmin_ctx=hrmin.getContext("2d");
        hrmin_ctx.clearRect(0,0,hrmin.width,hrmin.height);
        /*模式数据*/
        var hrmin_date = ["01EB","01FF","021D","0219","01EE","01CC","01B8","01C5","01DC","01EC","01F3","01F5","01F7","01F8","01F9","01FA","01FB","01FB","01FD","01FF","0200","0201","0203","0205","0208","020B","020E","0212","0216","021B","021F","0224","0227","022A","022C","022D","022C","0229","0224","021C","0212","0208","01FF","01F8","01F3","01F0","01ED","01EC","01EB","01EB","01EB","01EB","01EC","01EB","01EC","01EC","01EC","01EC","01EC","01ED","01EC","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01EC","01ED","01ED","01ED","01EF","01F1","01F3","01F2","01F0","01F0","01EF","01EE","01ED","01ED","01ED","01ED","01ED","01ED","01EE","01EC","01ED","0209","0221","0214","01DF","01C5","01B4","01C8","01DF","01EF","01F3","01F5","01F7","01F8","01F9","01FA","01FB","01FC","01FD","01FF","0200","0203","0205","0207","0209","020C","020F","0213","0217","021B","0220","0224","0227","022A","022B","022C","022A","0227","0221","0219","0210","0206","01FD","01F7","01F2","01EF","01ED","01EC","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01EC","01EC","01EC","01EB","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01E9","01E9","01E9","01E9","01E9","01EA","01EA","01EA","01EA","01EA","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01EB","01EC","01EC","01EC","01EE","01F1","01F3","01F1","01EF","01EF","01EF","01ED","01EC","01EC","01EC","01EC","01EC","01EC","01ED","01EB","01ED","0209","021D","020E","01D9","01BD","01B4","01C7","01DC","01ED","01F2","01F3","01F5","01F6","01F7","01F9","01F9","01FB","01FB","01FD","01FF","0200","0202","0204","0207","0209","020D","0211","0215","0218","021D","0221","0223","0226","0227","0227","0226","0222","021C","0214","020C","0203","01FB","01F5","01F1","01EE","01ED","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01EC","01ED","01EC","01EC","01EC","01EC","01EB","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EB","01EA","01EB","01EB","01EB","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01ED","01EF","01F1","01F3","01F1","01F0","01EF","01EF","01EE","01EE","01ED","01ED","01ED","01ED","01ED","01ED","01EB","01F5","020B","022F","0214","01F4","01F3","01F3","01F3","01F3","01F3","01F3","01F3","01F3","01F3","01F4","01F4","01F4","01F4","01F4","01F4","01F4","01F4","01F5","01F4","01F5","01F5","01F5","01F5","01F6","01F5","01F6","01F5","01F5","01F6","01F6","01F9","01FB","01FD","01FB","01F9","01F9","01F9","01F8","01F7","01F7","01F6","01F7","01F7","01F7","01F7","01F5","0200","0215","022D","0201","01DC","01BC","01B7","01CF","01E2","01F0","01F4","01F5","01F7","01F8","01F9","01F9","01FB","01FB","01FD","01FE","0200","0201","0203","0206","0208","020C","020E","0212","0216","021B","021F","0223","0226","0229","022A","022A","0229","0225","021F","0216","020D","0203","01FB","01F6","01F1","01EE","01ED","01EC","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01ED","01EC","01EC","01EC","01EC","01EB","01EB","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EB","01EA","01EA","01EB","01EA","01EB","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01EC","01EC","01EC","01EC","01EC","01ED","01EF","01F2","01F2","01F0","01EF","01EF","01EF","01EF","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01FD","0215","0228","01F4","01CC","01BA","01C2","01D8","01E9","01F2","01F4","01F6","01F7","01F8","01F9","01FA","01FB","01FD","01FE","01FF","0201","0203","0205","0208","020B","020E","0212","0216","021B","0220","0224","0228","022B","022D","022E","022D","022A","0225","021D","0213","0209","0200","01F8","01F2","01EF","01ED","01EC","01EC","01EB","01EB","01ED","01EC","01EC","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EA","01EA","01E9","0207","0223","0212","01D9","01B7","01A7","01C1","01DF","01ED","01F0","01F2","01F3","01F5","01F5","01F6","01F7","01F9","01FA","01FB","01FD","01FF","0201","0204","0207","020A","020E","0213","0217","021B","021F","0222","0223","0225","0224","0220","0219","0211","0207","01FD","01F6","01EF","01EB","01E9","01E8","01E8","01E8","01E8","01E8","01E8","01E8","01E9","01E8","01E8","01E8","01E8","01E8","01E8","01E8","01E7","01E7","01E7","01E7","01E7","01E7","01E7","01E7","01E7","01E7","01E7","01E8","01E8","01E8","01E8","01E8","01E8","01E8","01E8","01E8","01E9","01E9","01E9","01E9","01E9","01EA","01E9","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01ED","01EC","01EC","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01EE","01EE","01EE","01ED","01ED","01ED","01ED","01F0","01F2","01F2","01F2","01F1","01F0","01EF","01EF","01EF","01EF","01EE","01EE","01EF","01EE","01ED","01F8","020F","022B","0203","01DF","01C2","01BC","01D2","01E2","01F0","01F4","01F6","01F7","01F8","01F8","01FA","01FA","01FB","01FC","01FD","01FF","0200","0202","0204","0206","0209","020C","020F","0212","0216","021A","021D","0220","0222","0224","0225","0224","0222","021E","0219","0212","0209","0203","01FC","01F6","01F2","01F0","01EF","01EE","01EE","01EE","01EE","01EE","01EE","01ED","01ED","01EE","01ED","01ED","01ED","01ED","01ED","01EB","01EC","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EB","01EB","01EA","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EA","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01EC","01ED","01EC","01EC","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01EE","01F1","01F3","01F4","01F2","01F1","01F1","01F0","01EF","01EF","01EE","01EE","01EE","01EE","01EE","01EE","01EC","01FD","0215","0229","01F7","01D0","01BE","01C3","01D7","01E8","01F3","01F5","01F7","01F8","01F9","01FB","01FB","01FC","01FD","01FE","0200","0202","0204","0206","0208","020C","020E","0212","0215","0219","021D","0222","0226","0229","022A","022C","022B","0229","0225","021E","0216","020C","0203","01FC","01F5","01F1","01EE","01ED","01EC","01EC","01EC","01EC","01ED","01ED","01EC","01ED","01ED","01ED","01ED","01EC","01EC","01EC","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EA","01EA","01E9","01E9","01E9","01E9","01EA","01EA","01EA","01E9","01EA","01EA","01EA","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01EB","01EC","01EC","01EC","01EC","01EC","01ED","01EF","01F2","01F2","01F0","01EF","01EF","01EF","01ED","01EC","01ED","01ED","01ED","01ED","01ED","01ED","01EB","01F7","0211","022F","0201","01DA","01BA","01B9","01D3","01E6","01F1","01F3","01F5","01F7","01F8","01F9","01FA","01FA","01FC","01FD","01FE","0201","0202","0204","0207","0209","020C","020F","0214","0218","021D","0221","0225","0228","022A","022B","022C","022A","0226","021F","0216","020C","0203","01FA","01F4","01F0","01ED","01EB","01EB","01EA","01EA","01EA","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01E9","01E9","01E9","01E9","01E9","01E9","01E9","01E9","01E8","01E9","01E9","01E9","01E9","01E9","01E9","01E9","01E9","01EA","01E9","01EA","01EA","01EA","01EA","01EA","01EA","01EB","01EB","01EB","01EA","01EA","01EB","01EC","01EF","01F1","01F1","01EF","01EE","01EE","01ED","01EC","01EB","01EB","01EB","01EB","01EB","01EC","01EB","01EA","01FA","0214","022B","01F7","01D0","01B6","01BB","01CF","01E2","01EE","01F3","01F4","01F6","01F7","01F8","01F9","01FA","01FA","01FB","01FD","01FF","0200","0203","0205","0208","020A","020E","0212","0216","021A","021D","0221","0224","0226","0227","0227","0226","0222","021B","0213","020A","0201","01FA","01F3","01EF","01ED","01EB","01EA","01EA","01EA","01EA","01EA","01EB","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EA","01EA","01E9","01E9","01E9","01E9","01E9","01E9","01E8","01E9","01E8","01E9","01E9","01E9","01E9","01E9","01E9","01E9","01E9","01EA","01EA","01EA","01EA","01E9","01EA","01EA","01EA","01EA","01EB","01EB","01EA","01EB","01ED","01EF","01F2","01F1","01EF","01EE","01EE","01ED","01EC","01EB","01EB","01EB","01EC","01EC","01ED","01EB","01EC","0202","021C","0214","01E6","01CA","01B7","01C2","01D8","01E9","01F2","01F4","01F6","01F7","01F8","01F8","01FA","01FB","01FB","01FD","01FE","0200","0202","0204","0206","0209","020C","020F","0213","0218","021B","0220","0223","0225","0227","0228","0228","0225","0220","0219","0211","0207","01FF","01F8","01F2","01EF","01ED","01EC","01EB","01EB","01EB","01EC","01EC","01EC","01EC","01ED","01ED","01ED","01EC","01EC","01EC","01EB","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EA","01EA","01E9","01EA","01EA","01EA","01EA","01EA","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01ED","01EC","01EC","01EE","01F0","01F3","01F2","01F0","01EF","01F0","01EF","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01ED","01EB","01FF","021D","0219","01EE","01CC","01B8","01C5","01DC","01EC","01F3","01F5","01F7","01F8","01F9","01FA","01FB","01FB","01FD","01FF","0200","0201","0203","0205","0208","020B","020E","0212","0216","021B","021F","0224","0227","022A","022C","022D","022C","0229","0224","021C","0212","0208","01FF","01F8","01F3","01F0","01ED","01EC","01EB","01EB","01EB","01EB","01EC","01EB","01EC","01EC","01EC","01EC","01EC","01ED","01EC","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01EC","01ED","01ED","01ED","01EF","01F1","01F3","01F2","01F0","01F0","01EF","01EE","01ED","01ED","01ED","01ED","01ED","01ED","01EE","01EC","01ED","0209","0221","0214","01DF","01C5","01B4","01C8","01DF","01EF","01F3","01F5","01F7","01F8","01F9","01FA","01FB","01FC","01FD","01FF","0200","0203","0205","0207","0209","020C","020F","0213","0217","021B","0220","0224","0227","022A","022B","022C","022A","0227","0221","0219","0210","0206","01FD","01F7","01F2","01EF","01ED","01EC","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01EC","01EC","01EC","01EB","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01E9","01E9","01E9","01E9","01E9","01EA","01EA","01EA","01EA","01EA","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01EB","01EC","01EC","01EC","01EE","01F1","01F3","01F1","01EF","01EF","01EF","01ED","01EC","01EC","01EC","01EC","01EC","01EC","01ED","01EB","01ED","0209","021D","020E","01D9","01BD","01B4","01C7","01DC","01ED","01F2","01F3","01F5","01F6","01F7","01F9","01F9","01FB","01FB","01FD","01FF","0200","0202","0204","0207","0209","020D","0211","0215","0218","021D","0221","0223","0226","0227","0227","0226","0222","021C","0214","020C","0203","01FB","01F5","01F1","01EE","01ED","01EB","01EB","01EB","01EB","01EC","01EC","01EC","01EC","01ED","01EC","01EC","01EC","01EC","01EB","01EB","01EB","01EB","01EB","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EA","01EB","01EA","01EB","01EB","01EB","01EA","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EB","01EC","01EC","01ED","01EF","01F1","01F3","01F1","01F0","01EF","01EF","01EE","01EE","01ED","01ED","01ED","01ED","01ED","01ED","01EB","01F5","020B","022F","0214","01E0"];
        /*转换数据*/
        for (var i = 0; i < hrmin_date.length; i++) {
            var this_indate16 = hrmin_date[i];
            hrmin_date[i] = parseInt(this_indate16,16);
        };
        /*给canvas宽高防止模糊*/
        var hrmin_w = $(".hrmin_box").width()*2;
        var hrmin_h = 200*2;
        hrmin.width = hrmin_w;
        hrmin.height = hrmin_h;
        /*文字大小*/
        var dot_font_size =10;
        /*采样率*/
        var sam_rate =125;
        /*外部黑边边距*/
        var black_side = 20;
        /*最小心率索引*/
        var min_dot_index = 500;
        /*时间*/
        var hr_min_time = "2016/08/15/ 19:24:38"
        /*开始绘图*/
            /*背景*/
            hrmin_ctx.beginPath();
            hrmin_ctx.fillStyle="#000";
            hrmin_ctx.fillRect(0,0,hrmin_w,hrmin_h);
            hrmin_ctx.closePath();
            /*竖线*/
            for (var i = 0; i <= 25; i++) {
                hrmin_ctx.beginPath();
                hrmin_ctx.strokeStyle="#444";
                hrmin_ctx.lineCap="square";
                hrmin_ctx.lineWidth=1;
                if (i==5 || i==10 || i==15 ||i==20 ||i==25) {
                    hrmin_ctx.strokeStyle="#888";
                    hrmin_ctx.lineWidth=1;
                }else{
                    hrmin_ctx.strokeStyle="#444";
                    hrmin_ctx.lineWidth=1;
                };
                var this_w = ((hrmin_w-black_side-black_side)*i/25)+black_side;
                hrmin_ctx.moveTo(this_w,black_side);
                hrmin_ctx.lineTo(this_w,hrmin_h-black_side);
                hrmin_ctx.stroke();
                hrmin_ctx.closePath();
            };
            /*横线*/
            for (var j = 0; j <= 20; j++) {
                hrmin_ctx.beginPath();
                hrmin_ctx.strokeStyle="#444";
                hrmin_ctx.lineCap="square";
                hrmin_ctx.lineWidth=1;
                if (j==4 || j==8 || j==12 ||j==16) {
                    hrmin_ctx.strokeStyle="#888";
                    hrmin_ctx.lineWidth=1;
                }else{
                    hrmin_ctx.strokeStyle="#444";
                    hrmin_ctx.lineWidth=1;
                };
                var this_h = ((hrmin_h-black_side-black_side)*j/20)+black_side;
                hrmin_ctx.moveTo(black_side,this_h);
                hrmin_ctx.lineTo(hrmin_w-black_side,this_h);
                hrmin_ctx.stroke();
                hrmin_ctx.closePath();
            };
            /*画点*/
            var hrmin_dal = hrmin_date.length;
            if (hrmin_dal>sam_rate*5) {
                hrmin_dal = sam_rate*5;
            };
            var between_w = (hrmin_w-black_side-black_side)/hrmin_dal;
            var between_h = 1/1000*(hrmin_h-black_side-black_side);
            for (var i = 0 ; i < hrmin_dal; i++) {
                /*第一个点的坐标*/
                var msi_w = i*between_w+black_side;
                var msi_h = hrmin_h-(hrmin_date[i]*between_h+black_side);
                /*下一个点的坐标*/
                var msi_wt = (i+1)*between_w+black_side;
                var msi_ht = hrmin_h-(hrmin_date[i+1]*between_h+black_side);

                hrmin_ctx.beginPath();
                hrmin_ctx.strokeStyle="#8FFF00";
                hrmin_ctx.lineCap="square";
                hrmin_ctx.lineWidth=1;
                hrmin_ctx.moveTo(msi_w,msi_h);
                hrmin_ctx.lineTo(msi_wt,msi_ht);
                hrmin_ctx.stroke();
                hrmin_ctx.closePath();
            };
            /*文字y轴*/
            hrmin_ctx.beginPath();
            hrmin_ctx.fillStyle="#fff";
            hrmin_ctx.font= dot_font_size+"px Arial";
            hrmin_ctx.fillText("200",0,((hrmin_h-black_side-black_side)*4/5)+black_side+3);
            hrmin_ctx.fillText("400",0,((hrmin_h-black_side-black_side)*3/5)+black_side+3);
            hrmin_ctx.fillText("600",0,((hrmin_h-black_side-black_side)*2/5)+black_side+3);
            hrmin_ctx.fillText("800",0,((hrmin_h-black_side-black_side)*1/5)+black_side+3);
            hrmin_ctx.fillText("1000",0,((hrmin_h-black_side-black_side)*0/5)+black_side+3);
            hrmin_ctx.closePath();
            /*文字x轴*/
            hrmin_ctx.beginPath();
            hrmin_ctx.fillStyle="#fff";
            hrmin_ctx.font= dot_font_size+"px Arial";
            for (var i = 0; i <= hrmin_dal/sam_rate; i++) {
                var fill_x = (((hrmin_w-black_side-black_side)/hrmin_dal*sam_rate)*i)+20;
                var fill_y = hrmin_h-5;
                hrmin_ctx.fillText(i+"s",fill_x,fill_y);
            };
            hrmin_ctx.closePath();
            /*索引线*/
            hrmin_ctx.beginPath();
            hrmin_ctx.strokeStyle="#FFFF07";
            hrmin_ctx.lineCap="square";
            hrmin_ctx.lineWidth=1;
            var this_x = ((hrmin_w-black_side-black_side)/hrmin_dal)*min_dot_index+black_side;
            var this_y = hrmin_h-(hrmin_date[min_dot_index]*between_h+black_side);
            hrmin_ctx.moveTo(this_x,black_side);
            hrmin_ctx.lineTo(this_x,hrmin_h-black_side);
            hrmin_ctx.stroke();
            /*索引文字*/
            /*hrmin_ctx.fillStyle="#FFFF07";
            hrmin_ctx.font= dot_font_size+"px Arial";
            hrmin_ctx.fillText("最大心率："+hrmin_date[min_dot_index],this_x+3,((hrmin_h-black_side-black_side)*1/10)+black_side-5);*/
            hrmin_ctx.closePath();
            /*时间图例*/
            hrmin_ctx.beginPath();
            hrmin_ctx.fillStyle="#FFFFFF";
            hrmin_ctx.font= dot_font_size+"px Arial";

           hrmin_ctx.fillText("Detecting time:"+hr_min_time+"    最小心率："+hrmin_date[min_dot_index],black_side+5,black_side-5);
            hrmin_ctx.closePath();
    };
/*PVC，PAC心电图*/
    var sim_pvac_bg_time = "2016/08/15/ 19:24:38";
    var sin_pvac_bg_index = 1;
    f_pvac_bg(sim_pvac_bg_time,sin_pvac_bg_index);
    function f_pvac_bg(p_b_time,p_b_index){
        /*初始化*/
        var pvacbg=document.getElementById("hrpvac_bg");
        var pvacbg_ctx=pvacbg.getContext("2d");
        pvacbg_ctx.clearRect(0,0,pvacbg.width,pvacbg.height);
        /*给canvas宽高防止模糊*/
        var pvacbg_w = $(".hrpvac_box").width()*2;
        var pvacbg_h = 200*2;
        pvacbg.width = pvacbg_w;
        pvacbg.height = pvacbg_h;
        /*文字大小*/
        var dot_font_size =10;
        /*外部黑边边距*/
        var black_side = 20;
        /*时间*/
        var pvac_bg_time = p_b_time;
        /*图几*/
        var pvac_index = p_b_index;
        /*开始绘图*/
            /*背景*/
            pvacbg_ctx.beginPath();
            pvacbg_ctx.fillStyle="#000";
            pvacbg_ctx.fillRect(0,0,pvacbg_w,pvacbg_h);
            pvacbg_ctx.closePath();
            /*竖线*/
            for (var i = 0; i <= 25; i++) {
                pvacbg_ctx.beginPath();
                pvacbg_ctx.strokeStyle="#444";
                pvacbg_ctx.lineCap="square";
                pvacbg_ctx.lineWidth=1;
                if (i==5 || i==10 || i==15 ||i==20 ||i==25) {
                    pvacbg_ctx.strokeStyle="#888";
                    pvacbg_ctx.lineWidth=1;
                }else{
                    pvacbg_ctx.strokeStyle="#444";
                    pvacbg_ctx.lineWidth=1;
                };
                var this_w = ((pvacbg_w-black_side-black_side)*i/25)+black_side;
                pvacbg_ctx.moveTo(this_w,black_side);
                pvacbg_ctx.lineTo(this_w,pvacbg_h-black_side);
                pvacbg_ctx.stroke();
                pvacbg_ctx.closePath();
            };
            /*横线*/
            for (var j = 0; j <= 20; j++) {
                pvacbg_ctx.beginPath();
                pvacbg_ctx.strokeStyle="#444";
                pvacbg_ctx.lineCap="square";
                pvacbg_ctx.lineWidth=1;
                if (j==4 || j==8 || j==12 ||j==16) {
                    pvacbg_ctx.strokeStyle="#888";
                    pvacbg_ctx.lineWidth=1;
                }else{
                    pvacbg_ctx.strokeStyle="#444";
                    pvacbg_ctx.lineWidth=1;
                };
                var this_h = ((pvacbg_h-black_side-black_side)*j/20)+black_side;
                pvacbg_ctx.moveTo(black_side,this_h);
                pvacbg_ctx.lineTo(pvacbg_w-black_side,this_h);
                pvacbg_ctx.stroke();
                pvacbg_ctx.closePath();
            };
            /*文字y轴*/
            pvacbg_ctx.beginPath();
            pvacbg_ctx.fillStyle="#fff";
            pvacbg_ctx.font= dot_font_size+"px Arial";
            pvacbg_ctx.fillText("200",0,((pvacbg_h-black_side-black_side)*4/5)+black_side+3);
            pvacbg_ctx.fillText("400",0,((pvacbg_h-black_side-black_side)*3/5)+black_side+3);
            pvacbg_ctx.fillText("600",0,((pvacbg_h-black_side-black_side)*2/5)+black_side+3);
            pvacbg_ctx.fillText("800",0,((pvacbg_h-black_side-black_side)*1/5)+black_side+3);
            pvacbg_ctx.fillText("1000",0,((pvacbg_h-black_side-black_side)*0/5)+black_side+3);
            pvacbg_ctx.closePath();
            /*时间图例*/
            pvacbg_ctx.beginPath();
            pvacbg_ctx.fillStyle="#FFFFFF";
            pvacbg_ctx.font= dot_font_size+"px Arial";
            pvacbg_ctx.fillText("Detecting time:"+pvac_bg_time+"    第"+pvac_index+"分钟/15分钟",black_side+5,black_side-5);
            pvacbg_ctx.closePath();
    };
});