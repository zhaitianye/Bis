$(document).ready(function() {
/*定义全局变量*/
    /*此时的数据段的数据,大部分为实时数据*/
    //心博总数饼图实时数据
    var nowtime_pie_cardiac_tot_data  = pie_cardiac_tot_data_v1;
    //十五分钟心率曲线图实时数据
    var nowtime_qua_ecc_data = qua_ecc_testdata_v1;
    //最大心率心电图此时数据
    nowtime_hrmax_date = hrmax_date_v1;
    //最小心率心电图此时数据
    nowtime_hrmin_date = hrmin_date_v1;
    /*PVC,PAC全局变量*/
    //在背景里面绘制
    //当前索引，正式情况下一共15分钟，15段，模拟5分钟
    var nowtime_sim_pvac_index = 1;
    //当前数据的时间
    var nowtime_sim_pvac_bg_time = sim_pvac_bg_timev1;
    //当前数据内容
    var nowtime_sim_pvac_date = analog_pvac_datev1;
    //当前数据对应的标记点内容
    var nowtime_sim_pvac_point = analog_pvac_pointv1;

/*窗口宽高变化时重汇心电图*/
    $(window).resize(function(){
        set_h_w();
        f_hrmax(nowtime_hrmax_date);
        f_hrmin(nowtime_hrmin_date);
        f_quarter_eccentricity(nowtime_qua_ecc_data);
        f_pvac_bg(nowtime_sim_pvac_bg_time,nowtime_sim_pvac_index);
    });
    set_h_w();
    function set_h_w(){
        var headerimgw = $(".main_header_img").width();
        $(".main_header_img").height(headerimgw);
    };
/*心搏总数饼图图*/
    f_tot_num(nowtime_pie_cardiac_tot_data);
    function f_tot_num(pie_date){
        var tot_num = document.getElementById("photo_re_sum").getContext('2d');
        var myChart = new Chart(tot_num, {
            type: 'pie',
            data: {
                datasets: [{
                    data: pie_date,
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
                    '过快（%）',
                    '过慢（%）',
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
    f_quarter_eccentricity(nowtime_qua_ecc_data);
    function f_quarter_eccentricity(qua_ecc_date){
        /*初始化*/
        var qua_ecc=document.getElementById("quarter_eccentricity");
        var qua_ecc_ctx=qua_ecc.getContext("2d");
        qua_ecc_ctx.clearRect(0,0,qua_ecc.width,qua_ecc.height);
        
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
            var qua_ecc_btw = (qua_ecc_w-10)/(qua_ecc_date.length-1);
            /*路径遮罩*/
                /*第一个之前的坐标*/
                var y_num_f = qua_ecc_date[0];
                var y_space_f = qua_ecc_h-(y_num_f * qua_ecc_h/100);
                var x_space_f = 0;
                /*最后一个之后的坐标*/
                var y_num_l = qua_ecc_date[qua_ecc_date.length-1];
                var y_space_l = qua_ecc_h-(y_num_l * qua_ecc_h/100);
                var x_space_l = qua_ecc_w;
                qua_ecc_ctx.beginPath();
                qua_ecc_ctx.moveTo(0,0);
                qua_ecc_ctx.lineTo(0,y_space_f);
                for (var i = 0; i < qua_ecc_date.length; i++) {
                    var y_num = qua_ecc_date[i];
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
            for (var i = 0; i < qua_ecc_date.length; i++) {
                qua_ecc_ctx.beginPath();
                var y_num = qua_ecc_date[i];
                var y_space = qua_ecc_h-(y_num * qua_ecc_h/100);
                if (i==0) {
                    var x_space = i*qua_ecc_btw+12;
                }else if(i==qua_ecc_date.length-1){
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
            for (var i = 0; i < qua_ecc_date.length-1; i++) {
                qua_ecc_ctx.beginPath();
                qua_ecc_ctx.strokeStyle="#53A6FF";
                qua_ecc_ctx.lineCap="square";
                qua_ecc_ctx.lineWidth=3;
                var y_num = qua_ecc_date[i];
                var y_space = qua_ecc_h-(y_num * qua_ecc_h/100);
                if (i==0) {
                    var x_space = i*qua_ecc_btw+12;
                }else{
                    var x_space = i*qua_ecc_btw + 6;
                }
                var y_num_n = qua_ecc_date[i+1];
                var y_space_n = qua_ecc_h-(y_num_n * qua_ecc_h/100);

                if (i==qua_ecc_date.length-2) {
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
            for (var i = 0; i < qua_ecc_date.length; i++) {
                qua_ecc_ctx.beginPath();
                qua_ecc_ctx.fillStyle="#53A6FF";
                qua_ecc_ctx.font=dot_font_size+"px Arial";

                var y_num = qua_ecc_date[i];
                var y_space = qua_ecc_h-(y_num * qua_ecc_h/100)-12;
                if (i==0) {
                    var x_space = i*qua_ecc_btw+5;
                }else if(i==qua_ecc_date.length-1){
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
    f_hrmax(nowtime_hrmax_date);
    function f_hrmax(hrmax_date_box){
        /*初始化*/
        var hrmax=document.getElementById("hrmax");
        var hrmax_ctx=hrmax.getContext("2d");
        hrmax_ctx.clearRect(0,0,hrmax.width,hrmax.height);
        /*定义一个空数据容器*/
        var hrmax_date = new Array;
        /*转换数据*/
        for (var i = 0; i < hrmax_date_box.length; i++) {
            var this_indate16 = hrmax_date_box[i];
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
            hrmax_ctx.closePath();
            /*时间图例*/
            hrmax_ctx.beginPath();
            hrmax_ctx.fillStyle="#FFFFFF";
            hrmax_ctx.font= dot_font_size+"px Arial";
            hrmax_ctx.fillText("Detecting time:"+hr_max_time+"    最大心率："+hrmax_date[max_dot_index],black_side+5,black_side-5);
            hrmax_ctx.closePath();
    };
/*最小心率心电图*/
    f_hrmin(nowtime_hrmin_date);
    function f_hrmin(hrmin_date_box){
        /*初始化*/
        var hrmin=document.getElementById("hrmin");
        var hrmin_ctx=hrmin.getContext("2d");
        hrmin_ctx.clearRect(0,0,hrmin.width,hrmin.height);
        /*定义一个空数据容器*/
        var hrmin_date = new Array;
        /*转换数据*/
        for (var i = 0; i < hrmin_date_box.length; i++) {
            var this_indate16 = hrmin_date_box[i];
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
            hrmin_ctx.closePath();
            /*时间图例*/
            hrmin_ctx.beginPath();
            hrmin_ctx.fillStyle="#FFFFFF";
            hrmin_ctx.font= dot_font_size+"px Arial";
            hrmin_ctx.fillText("Detecting time:"+hr_min_time+"    最小心率："+hrmin_date[min_dot_index],black_side+5,black_side-5);
            hrmin_ctx.closePath();
    };
/*PVC，PAC心电图*/
    f_pvac_bg(nowtime_sim_pvac_bg_time,nowtime_sim_pvac_index);
    //背景图
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
    //数据图
    f_pvac(nowtime_sim_pvac_date,nowtime_sim_pvac_point);
    function f_pvac(pvac_date_box,pvac_point){
        /*初始化*/
        var pvac=document.getElementById("hrpvac");
        var pvac_ctx=pvac.getContext("2d");
        pvac_ctx.clearRect(0,0,pvac.width,pvac.height);
        /*定义一个空数据容器*/
        var pvac_date = new Array;
        /*转换数据*/
        for (var i = 0; i < pvac_date_box.length; i++) {
            var this_indate16 = pvac_date_box[i];
            pvac_date[i] = parseInt(this_indate16,16);
        };
        /*文字大小*/
        var dot_font_size =10;
        /*采样率*/
        var sam_rate =125;
        /*外部黑边边距*/
        var black_side = 20;
        /*给canvas宽高防止模糊*/
        //宽高放大两倍防止模糊
        var pvac_in_box_w = $(".hrpvac_in_box").width()*2;
        var pvac_between_w = pvac_in_box_w/(sam_rate*5);
        //如果是一分钟数据
        //var pvac_w = pvac_between_w*sam_rate*60*2;
        /*如果是不固定数据长度的数据*/
        var pvac_w = pvac_date.length*pvac_between_w;
        var pvac_h = $(".hrpvac_in_box").height()*2;
        pvac.width = pvac_w;
        pvac.height = pvac_h;
        /*开始绘图*/
            /*画点*/
            var between_h = 1/1000*pvac_h;
            for (var i = 0 ; i < pvac_date.length; i++) {
                /*第一个点的坐标*/
                var msi_w = i*pvac_between_w;
                var msi_h = pvac_h-(pvac_date[i]*between_h);
                /*下一个点的坐标*/
                var msi_wt = (i+1)*pvac_between_w;
                var msi_ht = pvac_h-(pvac_date[i+1]*between_h);

                pvac_ctx.beginPath();
                pvac_ctx.strokeStyle="#8FFF00";
                pvac_ctx.lineCap="square";
                pvac_ctx.lineWidth=1;
                pvac_ctx.moveTo(msi_w,msi_h);
                pvac_ctx.lineTo(msi_wt,msi_ht);
                pvac_ctx.stroke();
                pvac_ctx.closePath();
            };
            /*文字x轴*/
            pvac_ctx.beginPath();
            pvac_ctx.fillStyle="#fff";
            pvac_ctx.font= dot_font_size+"px Arial";
            for (var i = 0; i <= pvac_date.length/sam_rate; i++) {
                pvac_ctx.fillText(i+"s",((pvac_in_box_w*1/5)*i),pvac_h-5);
            };
            pvac_ctx.closePath();
            /*索引线和文字*/
            pvac_ctx.beginPath();
            pvac_ctx.strokeStyle="#FFFF07";
            pvac_ctx.lineCap="square";
            pvac_ctx.lineWidth=1;
            for (var i = 0; i < pvac_point.length; i++) {
                var this_x = pvac_point[i].num*pvac_between_w;
                pvac_ctx.moveTo(this_x,0);
                pvac_ctx.lineTo(this_x,pvac_h-black_side);
                pvac_ctx.fillStyle="#FFFF07";
                pvac_ctx.font="14px Arial";
                pvac_ctx.fillText(pvac_point[i].val,this_x+3,pvac_h/20);
            };
            pvac_ctx.stroke();
            pvac_ctx.closePath();
    };
    $(".hrpvac_in_box").scroll(function(){
        /*实时偏移量*/
        var hrpvac_x_exc = Math.abs($("#hrpvac").offset().left-$(".hrpvac_in_box").offset().left) ;
        /*临界偏移量*/
        var hrpvac_x_critical = Math.round($("#hrpvac").width()-$(".hrpvac_in_box").width());
        if (hrpvac_x_exc==0) {
            /*弹出loading层*/
            var hrpvac_loading = layer.load(2, {
              shade: [0.2,'#000'] //0.1透明度的白色背景
            });
            /*模拟异步加载函数*/
            //把全局变量的实时数据替换，重新绘图
            var forward_load =  function forward_load_naxtone(){
                switch(nowtime_sim_pvac_index)
                {
                    case 2:
                        nowtime_sim_pvac_index -= 1;
                        nowtime_sim_pvac_bg_time = sim_pvac_bg_timev1;
                        nowtime_sim_pvac_date = analog_pvac_datev1;
                        nowtime_sim_pvac_point = analog_pvac_pointv1;
                        f_pvac_bg(nowtime_sim_pvac_bg_time,nowtime_sim_pvac_index);
                        f_pvac(nowtime_sim_pvac_date,nowtime_sim_pvac_point);
                        $(".hrpvac_in_box").scrollLeft(hrpvac_x_critical-1);
                        layer.closeAll();
                        break;
                    case 3:
                        nowtime_sim_pvac_index -= 1;
                        nowtime_sim_pvac_bg_time = sim_pvac_bg_timev2;
                        nowtime_sim_pvac_date = analog_pvac_datev2;
                        nowtime_sim_pvac_point = analog_pvac_pointv2;
                        f_pvac_bg(nowtime_sim_pvac_bg_time,nowtime_sim_pvac_index);
                        f_pvac(nowtime_sim_pvac_date,nowtime_sim_pvac_point);
                        $(".hrpvac_in_box").scrollLeft(hrpvac_x_critical-1);
                        layer.closeAll();
                        break;
                    case 4:
                        nowtime_sim_pvac_index -= 1;
                        nowtime_sim_pvac_bg_time = sim_pvac_bg_timev3;
                        nowtime_sim_pvac_date = analog_pvac_datev3;
                        nowtime_sim_pvac_point = analog_pvac_pointv3;
                        f_pvac_bg(nowtime_sim_pvac_bg_time,nowtime_sim_pvac_index);
                        f_pvac(nowtime_sim_pvac_date,nowtime_sim_pvac_point);
                        $(".hrpvac_in_box").scrollLeft(hrpvac_x_critical-1);
                        layer.closeAll();
                        break;
                    case 5:
                        nowtime_sim_pvac_index -= 1;
                        nowtime_sim_pvac_bg_time = sim_pvac_bg_timev4;
                        nowtime_sim_pvac_date = analog_pvac_datev4;
                        nowtime_sim_pvac_point = analog_pvac_pointv4;
                        f_pvac_bg(nowtime_sim_pvac_bg_time,nowtime_sim_pvac_index);
                        f_pvac(nowtime_sim_pvac_date,nowtime_sim_pvac_point);
                        $(".hrpvac_in_box").scrollLeft(hrpvac_x_critical-1);
                        layer.closeAll();
                        break;
                    default:
                        layer.closeAll();
                        layer.alert('没有更多内容')
                };
                
            };
            /*模拟异步加载*/
            var t=setTimeout(forward_load,1000);
        }else if(hrpvac_x_exc==hrpvac_x_critical){
            /*弹出loading层*/
            var hrpvac_loading = layer.load(2, {
              shade: [0.2,'#000'] //0.1透明度的白色背景
            });
            /*模拟异步加载函数*/
            var next_load =  function next_load_naxtone(){
                switch(nowtime_sim_pvac_index)
                {
                    case 1:
                        nowtime_sim_pvac_index += 1;
                        nowtime_sim_pvac_bg_time = sim_pvac_bg_timev2;
                        nowtime_sim_pvac_date = analog_pvac_datev2;
                        nowtime_sim_pvac_point = analog_pvac_pointv2;
                        f_pvac_bg(nowtime_sim_pvac_bg_time,nowtime_sim_pvac_index);
                        f_pvac(nowtime_sim_pvac_date,nowtime_sim_pvac_point);
                        $(".hrpvac_in_box").scrollLeft(1);
                        layer.closeAll();
                        break;
                    case 2:
                        nowtime_sim_pvac_index += 1;
                        nowtime_sim_pvac_bg_time = sim_pvac_bg_timev3;
                        nowtime_sim_pvac_date = analog_pvac_datev3;
                        nowtime_sim_pvac_point = analog_pvac_pointv3;
                        f_pvac_bg(nowtime_sim_pvac_bg_time,nowtime_sim_pvac_index);
                        f_pvac(nowtime_sim_pvac_date,nowtime_sim_pvac_point);
                        $(".hrpvac_in_box").scrollLeft(1);
                        layer.closeAll();
                        break;
                    case 3:
                        nowtime_sim_pvac_index += 1;
                        nowtime_sim_pvac_bg_time = sim_pvac_bg_timev4;
                        nowtime_sim_pvac_date = analog_pvac_datev4;
                        nowtime_sim_pvac_point = analog_pvac_pointv4;
                        f_pvac_bg(nowtime_sim_pvac_bg_time,nowtime_sim_pvac_index);
                        f_pvac(nowtime_sim_pvac_date,nowtime_sim_pvac_point);
                        $(".hrpvac_in_box").scrollLeft(1);
                        layer.closeAll();
                        break;
                    case 4:
                        nowtime_sim_pvac_index += 1;
                        nowtime_sim_pvac_bg_time = sim_pvac_bg_timev5;
                        nowtime_sim_pvac_date = analog_pvac_datev5;
                        nowtime_sim_pvac_point = analog_pvac_pointv5;
                        f_pvac_bg(nowtime_sim_pvac_bg_time,nowtime_sim_pvac_index);
                        f_pvac(nowtime_sim_pvac_date,nowtime_sim_pvac_point);
                        $(".hrpvac_in_box").scrollLeft(1);
                        layer.closeAll();
                        break;
                    default:
                        layer.closeAll();
                        layer.alert('没有更多内容')
                };
            };
            /*模拟异步加载*/
            var t=setTimeout(next_load,1000);
        };
    });
/*弹出部分*/
    var doc_h = $(document).height();
    $(".doc_h").height(doc_h);
    $(".doc_h").on("touchmove",function(event){
        event.preventDefault;
    }, false);
});