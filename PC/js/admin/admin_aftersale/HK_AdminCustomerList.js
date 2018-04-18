$(document).ready(function() {
    /*layui方面js*/
    layui.use(['form', 'table', 'element'], function() {
        var form = layui.form,
            layer = layui.layer,
            element = layui.element,
            table = layui.table;
        //监听提交
        /*查找部分的提交*/
        form.on('submit(search1)', function(data) {
            layer.alert(JSON.stringify(data.field), {
                title: '最终的提交信息'
            })
            //console.log(JSON.stringify(data.field));
            return false;
        });
        /*设置运单号部分的提交*/
        form.on('submit(sub_setway)', function(data) {
            /*获取此时的id*/
            var this_id = $(".ipt_waybill_id").val();
            layer.closeAll();
            layer.alert(JSON.stringify(data.field), {
                title: '最终的提交信息'
            })
            //console.log(JSON.stringify(data.field));
            return false;
        });
        //执行渲染
        table.render({
            elem: '#DeliverList', //指定原始表格元素选择器（推荐id选择器）
            id: 'DeliverList',
            height: 400, //容器高度
            cols: [
                [ //标题栏
                    { checkbox: true, fixed: true },
                    { field: 'service_id', title: '服务单号', width: 160, sort: true},
                    { field: 'username', title: '用户名', width: 160},
                    { field: 'ordernum', title: '订单号', width: 240},
                    { field: 'sn_id', title: 'SN码', width: 160},
                    { field: 'producttype', title: '产品类型', width: 100},
                    { field: 'application_time', title: '申请时间', width: 160 },
                    { field: 'after_state', title: '售后状态', width: 160 },
                    { field: 'payment_state', title: '支付状态', width: 120 },
                    { fixed: 'right', title: '操作', width: 180, align: 'center', toolbar: '#barDemo' }
                ]
            ],
            /*在这里使用的是静态数据，参考layui文档，使用服务器上的数据进行更替*/
            data: [{"service_id":"HDCKL10005356","username":"王小塞","ordernum":"HAHGUBUN54185245415","sn_id":"SN4818435868461","producttype":"心电仪","application_time":"2017/10/12 9:55:52","after_state":"售出","payment_state":"已支付"},{"service_id":"HDCKL1000535v2","username":"王小塞v2","ordernum":"HAHGUBUN54185245415v2","sn_id":"SN4818435868461v2","producttype":"心电仪v2","application_time":"2017/10/12 9:55:52v2","after_state":"售出v2","payment_state":"已支付v2"},{"service_id":"HDCKL1000535v3","username":"王小塞v3","ordernum":"HAHGUBUN54185245415v3","sn_id":"SN4818435868461v3","producttype":"心电仪v3","application_time":"2017/10/12 9:55:52v3","after_state":"售出v3","payment_state":"已支付v3"}],
            page: true,
        });
        //监听工具条
        table.on('tool(DLtest)', function(obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var data = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值
            if (layEvent === 'detail') { //查看详情
                /*取data里面需要的值，跳转页面*/
            };
            if (layEvent === 'repair_record') { //维修记录
                var layloading = layer.load(2, {
                    shade: [0.1,'#fff']
                });
                /*在这里进行ajax调用返回json数据*/
                var service_log_data = [{"id":"HDCKL10005356","oper_content":"退货","oper_time":"2017/10/12 9:55:52","sn_id":"SN4818435868461","new_sn_id":"SN8415164223141","money":"500.00","apply_time":"2017/10/12 15:30:20","after_state":"退货待审核","remark":"退货待审核退货待审核退货待审核退货待审核退货待审核退货待审核退货待审核退货待审核退货待审核退货待审核退货待审核退货待审核退货待审核退货待审核退货待审核退货待审核"},{"id":"HDCKL10005356v2","oper_content":"退v2","oper_time":"2017/10/12 9:55:52v2","sn_id":"SN4818435868461v2","new_sn_id":"SN8415164223141v2","money":"500.00v2","apply_time":"2017/10/12 15:30:20v2","after_state":"退货待审核v2","remark":"退货待审核退v2"},{"id":"HDCKL10005356v3","oper_content":"退v3","oper_time":"2017/10/12 9:55:52v3","sn_id":"SN4818435868461v3","new_sn_id":"SN8415164223141v3","money":"500.00v3","apply_time":"2017/10/12 15:30:20v3","after_state":"退货待审核v3","remark":"退货待审核退v3"}];
                /*模拟延迟,引入了ajax就把这个延迟给取消掉*/
                var set_tim_out = setTimeout(function open_detael(){
                    layer.close(layloading); //关闭loading层
                    var tr_list=""; //定义列表变量
                    for (var i = 0; i < service_log_data.length; i++) {
                            tr_list += "<tr>";
                            tr_list += "    <td>"+service_log_data[i].id+"<\/td>";
                            tr_list += "    <td>"+service_log_data[i].oper_content+"<\/td>";
                            tr_list += "    <td>"+service_log_data[i].oper_time+"<\/td>";
                            tr_list += "    <td>"+service_log_data[i].sn_id+"<\/td>";
                            tr_list += "    <td>"+service_log_data[i].new_sn_id+"<\/td>";
                            tr_list += "    <td>"+service_log_data[i].money+"<\/td>";
                            tr_list += "    <td>"+service_log_data[i].apply_time+"<\/td>";
                            tr_list += "    <td>"+service_log_data[i].after_state+"<\/td>";
                            tr_list += "    <td>"+service_log_data[i].remark+"<\/td>";
                            tr_list += "<\/tr>";
                    };
                    $("#table_service_log").empty();
                    $("#table_service_log").html(tr_list);
                    layer.open({
                        type: 1,
                        title: "服务单号为" + data.service_id + "的维修记录",
                        area: ['80%', '700px'], //宽高
                        btn: ['我知道了'],
                        content: $('.detailcontent'),
                    });
                },400);
                
            };
        });
        /*打印发货单相关操作*/
        var $ = layui.$, active = {
                getCheckData: function() {
                    /*获取选中的id*/
                    var checkStatus = table.checkStatus('DeliverList');
                    var data = checkStatus.data;
                    /*判断data的数量是否为0*/
                    if (data.length == 0) {
                        layer.alert('请先选择需要打印的条目。', {
                            icon: 6,
                            title: '打印服务单提示'
                        })
                    }else{
                        var jsonprintid = [];
                        var manifest_box_content = "";
                        for (var i = 0; i < data.length; i++) {
                            /*把id封装成json*/
                            var row ={};
                            row.id = data[i].id;
                            jsonprintid.push(row);
                            /*把订单添加到相应位置*/
                            manifest_box_content += "<p class=\"clear h-40 line-h-40 col-red\">";
                            manifest_box_content += data[i].service_id;
                            manifest_box_content += "<\/p>";
                        }
                        $(".manifest_box").html(manifest_box_content);
                        layer.open({
                            type: 1,
                            title: "打印服务单",
                            area: ['560px', '700px'], //宽高
                            btn: ['打印', '取消'],
                            btn1: function(index, layero) {
                                /*开启加载loading层*/
                                var index = layer.load(1);
                                /*在这里进行ajax调用返回json数据*/
                                /*-------------------------------
                                说明：
                                service_id-----------售后单号
                                ordernum-------------订单号
                                producttype----------产品类型
                                sn_id----------------SN码
                                repair_state---------保修状态
                                application_time-----申请时间
                                after_class----------售后类别
                                service_mode---------服务方式
                                description----------问题描述
                                take_goods_name------收货姓名
                                take_goods_phone-----收货手机
                                take_goods_address---收货地址
                                visit_name-----------回访姓名
                                visit_phone----------回访手机
                                --------------------------------*/
                                var print_data = [{"service_id":"HDCKL10005356","ordernum":"HAHGUBUN54185245415","producttype":"悉心心电仪","sn_id":"SN4818435868461","repair_state":"保修中","application_time":"2017/10/12 15:30:20","after_class":"维修","service_mode":"寄修","description":"一般快递的物流时间为省内1-3天左右，省外3-6天左右，偏远地区7-10天左右。超过这些时间段没有收到货，或没有新的物流信息更新的订单，物流时间异常，就需要客服去打电话查询包裹的情况。","take_goods_name":"张先森","take_goods_phone":"18580808081","take_goods_address":"深圳市南山区深云路9号(沙河建工村对面)","visit_name":"凯先森","visit_phone":"13684951542"},{"service_id":"HDCKL10005356v2","ordernum":"HAHGUBUN54185245415v2","producttype":"悉心心电仪v2","sn_id":"SN4818435868461v2","repair_state":"保修中v2","application_time":"2017/10/12 15:30:20v2","after_class":"维修v2","service_mode":"寄修v2","description":"一般快递的物流时间为省内1-3天左右，省外3-6天左右，偏远地区7-10天左右。超过这些时间段没有收到货，或没有新的物流信息更新的订单，物流时间异常，就需要客服去打电话查询包裹的情况。v2","take_goods_name":"张先森v2","take_goods_phone":"18580808081v2","take_goods_address":"深圳市南山区深云路9号(沙河建工村对面)v2","visit_name":"凯先森v2","visit_phone":"13684951542v2"},{"service_id":"HDCKL10005356v3","ordernum":"HAHGUBUN54185245415v3","producttype":"悉心心电仪v3","sn_id":"SN4818435868461v3","repair_state":"保修中v3","application_time":"2017/10/12 15:30:20v3","after_class":"维修v3","service_mode":"寄修v3","description":"一般快递的物流时间为省内1-3天左右，省外3-6天左右，偏远地区7-10天左右。超过这些时间段没有收到货，或没有新的物流信息更新的订单，物流时间异常，就需要客服去打电话查询包裹的情况。v3","take_goods_name":"张先森v3","take_goods_phone":"18580808081v3","take_goods_address":"深圳市南山区深云路9号(沙河建工村对面)v3","visit_name":"凯先森v3","visit_phone":"13684951542v3"}];
                                /*AJAX--------------华丽分割线------------AJAX*/
                                printorderlist();
                                function printorderlist(){
                                    /*定义页面信息*/
                                    var html_page = "";
                                    for (i = 0; i < print_data.length; i++) {
                                        html_page += "<div class=\"clear\">";
                                        html_page += "  <div class=\"clear h-40 mb-5 line-h-40 text-center f-16\">";
                                        html_page += "      <div class=\"clear dis-ib\">";
                                        html_page += "          <span class=\"f-28 ml-10 f-w family-s pull-left h-40 line-h-40 col-black family-s\">BISA<\/span>";
                                        html_page += "          <span class=\"f-28 ml-10 f-w family-s pull-left h-40 line-h-40 col-black\">售后服务单<\/span>";
                                        html_page += "      <\/div>";
                                        html_page += "  <\/div>";
                                        html_page += "  <fieldset class=\"layui-elem-field layui-field-title bor-col-black mt-30\">";
                                        html_page += "      <legend class=\"col-black bg-white\">售后信息<\/legend>";
                                        html_page += "  <\/fieldset>";
                                        html_page += "  <div class=\"clear full-w f-12 mb-15\">";
                                        html_page += "      <div class=\"clear layui-col-xs4 pl-0 pr-0\">";
                                        html_page += "          <div class=\"clear layui-col-xs4 pr-0 col-black\">";
                                        html_page += "              售后单号：";
                                        html_page += "          <\/div>";
                                        html_page += "          <div class=\"clear layui-col-xs8 pl-0 col-black\">";
                                        html_page += print_data[i].service_id;
                                        html_page += "          <\/div>";
                                        html_page += "      <\/div>";
                                        html_page += "      <div class=\"clear layui-col-xs4 pl-0 pr-0\">";
                                        html_page += "          <div class=\"clear layui-col-xs4 pr-0 col-black\">";
                                        html_page += "              订单号：";
                                        html_page += "          <\/div>";
                                        html_page += "          <div class=\"clear layui-col-xs8 pl-0 col-black\">";
                                        html_page += print_data[i].ordernum;
                                        html_page += "          <\/div>";
                                        html_page += "      <\/div>";
                                        html_page += "      <div class=\"clear layui-col-xs4 pl-0 pr-0\">";
                                        html_page += "          <div class=\"clear layui-col-xs4 pr-0 col-black\">";
                                        html_page += "              产品类型：";
                                        html_page += "          <\/div>";
                                        html_page += "          <div class=\"clear layui-col-xs8 pl-0 col-black\">";
                                        html_page += print_data[i].producttype;
                                        html_page += "          <\/div>";
                                        html_page += "      <\/div>";
                                        html_page += "  <\/div>";
                                        html_page += "  <div class=\"clear full-w f-12 mb-15\">";
                                        html_page += "      <div class=\"clear layui-col-xs4 pl-0 pr-0\">";
                                        html_page += "          <div class=\"clear layui-col-xs4 pr-0 col-black\">";
                                        html_page += "              SN码：";
                                        html_page += "          <\/div>";
                                        html_page += "          <div class=\"clear layui-col-xs8 pl-0 col-black\">";
                                        html_page += print_data[i].sn_id;
                                        html_page += "          <\/div>";
                                        html_page += "      <\/div>";
                                        html_page += "      <div class=\"clear layui-col-xs4 pl-0 pr-0\">";
                                        html_page += "          <div class=\"clear layui-col-xs4 pr-0 col-black\">";
                                        html_page += "              保修状态：";
                                        html_page += "          <\/div>";
                                        html_page += "          <div class=\"clear layui-col-xs8 pl-0 col-black\">";
                                        html_page += print_data[i].repair_state;
                                        html_page += "          <\/div>";
                                        html_page += "      <\/div>";
                                        html_page += "      <div class=\"clear layui-col-xs4 pl-0 pr-0\">";
                                        html_page += "          <div class=\"clear layui-col-xs4 pr-0 col-black\">";
                                        html_page += "              申请时间：";
                                        html_page += "          <\/div>";
                                        html_page += "          <div class=\"clear layui-col-xs8 pl-0 col-black\">";
                                        html_page += print_data[i].application_time;
                                        html_page += "          <\/div>";
                                        html_page += "      <\/div>";
                                        html_page += "  <\/div>";
                                        html_page += "  <div class=\"clear full-w f-12 mb-15\">";
                                        html_page += "      <div class=\"clear layui-col-xs4 pl-0 pr-0\">";
                                        html_page += "          <div class=\"clear layui-col-xs4 pr-0 col-black\">";
                                        html_page += "              售后类别：";
                                        html_page += "          <\/div>";
                                        html_page += "          <div class=\"clear layui-col-xs8 pl-0 col-black\">";
                                        html_page += print_data[i].after_class;
                                        html_page += "          <\/div>";
                                        html_page += "      <\/div>";
                                        html_page += "      <div class=\"clear layui-col-xs4 pl-0 pr-0\">";
                                        html_page += "          <div class=\"clear layui-col-xs4 pr-0 col-black\">";
                                        html_page += "              服务方式：";
                                        html_page += "          <\/div>";
                                        html_page += "          <div class=\"clear layui-col-xs8 pl-0 col-black\">";
                                        html_page += print_data[i].service_mode;
                                        html_page += "          <\/div>";
                                        html_page += "      <\/div>";
                                        html_page += "  <\/div>";
                                        html_page += "  <div class=\"clear full-w f-12 mb-15\">";
                                        html_page += "      <div class=\"clear layui-col-xs4 pl-0 pr-0\">";
                                        html_page += "          <div class=\"clear layui-col-xs4 pr-0 col-black\">";
                                        html_page += "              问题描述：";
                                        html_page += "          <\/div>";
                                        html_page += "      <\/div>";
                                        html_page += "  <\/div>";
                                        html_page += "  <div class=\"clear full-w f-12 mb-15 line-h-20 text-ind col-black\">";
                                        html_page += print_data[i].description;
                                        html_page += "  <\/div>";
                                        html_page += "  <fieldset class=\"layui-elem-field layui-field-title bor-col-black mt-30\">";
                                        html_page += "      <legend class=\"col-black bg-white\">收货信息<\/legend>";
                                        html_page += "  <\/fieldset>";
                                        html_page += "  <div class=\"clear full-w f-12 mb-15\">";
                                        html_page += "      <div class=\"clear layui-col-xs4 pl-0 pr-0\">";
                                        html_page += "          <div class=\"clear layui-col-xs3 pr-0 col-black\">";
                                        html_page += "              姓名：";
                                        html_page += "          <\/div>";
                                        html_page += "          <div class=\"clear layui-col-xs9 pl-0 col-black\">";
                                        html_page += print_data[i].take_goods_name;
                                        html_page += "          <\/div>";
                                        html_page += "      <\/div>";
                                        html_page += "      <div class=\"clear layui-col-xs4 pl-0 pr-0\">";
                                        html_page += "          <div class=\"clear layui-col-xs3 pr-0 col-black\">";
                                        html_page += "              手机号：";
                                        html_page += "          <\/div>";
                                        html_page += "          <div class=\"clear layui-col-xs9 pl-0 col-black\">";
                                        html_page += print_data[i].take_goods_phone;
                                        html_page += "          <\/div>";
                                        html_page += "      <\/div>";
                                        html_page += "      <div class=\"clear layui-col-xs4 pl-0 pr-0\">";
                                        html_page += "          <div class=\"clear layui-col-xs3 pr-0 col-black\">";
                                        html_page += "              地址：";
                                        html_page += "          <\/div>";
                                        html_page += "          <div class=\"clear layui-col-xs9 pl-0 col-black\">";
                                        html_page += print_data[i].take_goods_address;
                                        html_page += "          <\/div>";
                                        html_page += "      <\/div>";
                                        html_page += "  <\/div>";
                                        html_page += "  <fieldset class=\"layui-elem-field layui-field-title bor-col-black mt-30\">";
                                        html_page += "      <legend class=\"col-black bg-white\">回访信息<\/legend>";
                                        html_page += "  <\/fieldset>";
                                        html_page += "  <div class=\"clear full-w f-12 mb-15\">";
                                        html_page += "      <div class=\"clear layui-col-xs4 pl-0 pr-0\">";
                                        html_page += "          <div class=\"clear layui-col-xs3 pr-0 col-black\">";
                                        html_page += "              姓名：";
                                        html_page += "          <\/div>";
                                        html_page += "          <div class=\"clear layui-col-xs9 pl-0 col-black\">";
                                        html_page += print_data[i].visit_name;
                                        html_page += "          <\/div>";
                                        html_page += "      <\/div>";
                                        html_page += "      <div class=\"clear layui-col-xs4 pl-0 pr-0\">";
                                        html_page += "          <div class=\"clear layui-col-xs3 pr-0 col-black\">";
                                        html_page += "              手机号：";
                                        html_page += "          <\/div>";
                                        html_page += "          <div class=\"clear layui-col-xs9 pl-0 col-black\">";
                                        html_page += print_data[i].visit_phone;
                                        html_page += "          <\/div>";
                                        html_page += "      <\/div>";
                                        html_page += "  <\/div>";
                                        html_page += "  <div class=\"clear full-w mt-60 pt-60 f-12 col-black text-center\">";
                                        html_page += "      扫描 二维码 进入碧沙商城";
                                        html_page += "  <\/div>";
                                        html_page += "  <div class=\"clear full-w mt-15 text-center\">";
                                        html_page += "      <img class=\"img-100\" src=\"..\/..\/..\/img\/admin\/admin_comm\/shop_qr.png\" alt=\"\">";
                                        html_page += "  <\/div>";
                                        html_page += "  <div class=\"clear pd-15\" style=\"page-break-after: always;\">";
                                        html_page += "  <\/div>";
                                        html_page += "<\/div>";
                                    };
                                    $("#print_content").html("");
                                    $("#print_content").html(html_page);
                                    $("#print_content").print();
                                };
                                /*打印结束关闭loading层*/
                                layer.close(index);

                            },
                            content: $('.sureprint'),
                        });
                    }
                }
            };
            /*这里应该是cative的回调相关操作，和上面结合用的*/
        $('.demoTable .layui-btn').on('click', function(){
            var type = $(this).data('type');
            active[type] ? active[type].call(this) : '';
          });
    });
    
    
    /*页面方面js*/
    $(".btn-sidebar").click(function() {
        $(".btn-sidebar").removeClass("layui-btn-primary");
        $(".btn-sidebar").removeClass("bor-009688");
        $(this).siblings().addClass("layui-btn-primary");
        $(this).addClass("bor-009688");
    });
});