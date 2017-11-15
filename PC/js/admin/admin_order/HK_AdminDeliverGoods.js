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
                    { field: 'id', title: 'ID', width: 80, sort: true, fixed: true },
                    { field: 'status', title: '订单状态', width: 120, sort: true },
                    { field: 'ordernum', title: '订单号', width: 240, event: 'ordernum_e' },
                    { field: 'waybillnum', title: '运单号', width: 240, event: 'waybillnum_e' },
                    { field: 'goodscontent', title: '商品内容', width: 240, event: 'goodscontent_e' },
                    { field: 'consignee', title: '收货人', width: 160 },
                    { field: 'phone', title: '联系电话', width: 160 },
                    { field: 'address', title: '收货地址', width: 240 },
                    { field: 'time', title: '下单时间', width: 180 },
                    { field: 'logistics', title: '物流公司', width: 120, sort: true },
                    { fixed: 'right', title: '查看详细', width: 180, align: 'center', toolbar: '#barDemo' }
                ]
            ],
            /*在这里使用的是静态数据，参考layui文档，使用服务器上的数据进行更替*/
            data: [
                { "id": 10000, "ordernum": "SDJHJ5418524541541", "waybillnum": "HAHGUBUN54185245415", "goodscontent": "HC3A250 悉心心电仪", "consignee": "李小姐", "phone": "18623695862", "address": "香港国宏大道305号", "time": "2017/10/12 9:55:52", "status": "未发货", "logistics": "顺丰空运", },
                { "id": 10002, "ordernum": "SSDFF5141424541541", "waybillnum": "", "goodscontent": "电极片（*3）", "consignee": "王先森", "phone": "14851155415", "address": "深圳宝安后亭社区456号", "time": "2017/10/12 9:55:52", "status": "已发货", "logistics": "EMS", },
                { "id": 10003, "ordernum": "GRECBEW41424541541", "waybillnum": "ETTYCCXBF418524541541", "goodscontent": "血压计(*3)", "consignee": "李先森", "phone": "16698569854", "address": "深圳罗湖区34716号", "time": "2017/10/12 9:55:52", "status": "已发货", "logistics": "顺丰空运", },
            ],
            page: true,
        });
        //监听工具条
        table.on('tool(DLtest)', function(obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var data = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值
            var tr = obj.tr; //获得当前行 tr 的DOM对象
            if (layEvent === 'detail') { //查看
                $(".detail_consignee").html(data.consignee);
                $(".detail_phone").html(data.phone);
                $(".detail_ordernum").html(data.ordernum);
                $(".detail_waybillnum").html(data.waybillnum);
                $(".detail_goodscontent").html(data.goodscontent);
                $(".detail_address").html(data.address);
                $(".detail_time").html(data.time);
                $(".detail_status").html(data.status);
                $(".detail_logistics").html(data.logistics);
                layer.open({
                    type: 1,
                    title: "ID为" + data.id + "的基本信息",
                    area: ['560px', '700px'], //宽高
                    btn: ['打印', '取消'],
                    btn1: function(index, layero) {
                        $(".detailcontent").print();
                    },
                    content: $('.detailcontent'),
                });
            };
            if (layEvent === 'edit') { //编辑
                $(".ipt_waybill_id").val(data.id);
                $(".ipt_waybill").val("");
                $(".detail_waybillnum").html(data.waybillnum);
                layer.open({
                    type: 1,
                    title: "编辑ID为" + data.id + "的运单信息",
                    area: ['500px', '300px'], //宽高
                    content: $('.detailwaybill'),
                });
            };
            if (obj.event === 'ordernum_e') {
                layer.alert(data.ordernum, {
                    title: 'ID 为 &nbsp;' + data.id + '&nbsp; 订单号',
                });
            };
            if (obj.event === 'waybillnum_e') {
                layer.alert(data.waybillnum, {
                    title: 'ID 为 &nbsp;' + data.id + '&nbsp; 运单号',
                });
            };
            if (obj.event === 'goodscontent_e') {
                layer.alert(data.goodscontent, {
                    title: 'ID 为 &nbsp;' + data.id + '&nbsp; 商品内容',
                });
            };
        });
        /*获取表格中数据相关操作*/
        var $ = layui.$, active = {
                getCheckData: function() {
                    /*获取选中的id*/
                    var checkStatus = table.checkStatus('DeliverList');
                    var data = checkStatus.data;
                    /*判断data的数量是否为0*/
                    if (data.length == 0) {
                        layer.alert('请先选择需要打印的订单。', {
                            icon: 6,
                            title: '打印发货单提示'
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
                            manifest_box_content += data[i].ordernum;
                            manifest_box_content += "<\/p>";
                        }
                        $(".manifest_box").html(manifest_box_content);
                        layer.open({
                            type: 1,
                            title: "打印发货单",
                            area: ['560px', '700px'], //宽高
                            btn: ['打印', '取消'],
                            btn1: function(index, layero) {
                                //var index = layer.load(0, {shade: false});
                                //$(".aaaaaa").print();
                                /*在这里进行ajax调用返回json数据*/
                                //console.log(JSON.stringify(jsonprintid));
                                /*AJAX--------------华丽分割线------------AJAX*/
                                /*定义一条测试数据*/
                                var orderlist_data = {"order_book":[{"name":"和小凯","order_no":"JKADJFI484184818481","start_time":"2017/11/15 22:10:59","county_address":"深圳市宝安区后亭社区全至科技创新园10E","count_total":"800","sub_total":"￥800.00","post_price":"￥0.00","price_total":"￥2800000.00","page_side":[{"product_name":"HC3A250 悉心心电仪","ascription_guid":"456457ad87f6491982c8ee11f781d463","count":"30","price":"￥54000.00"},{"product_name":"HC3A250 悉心心电仪2","ascription_guid":"456457ad87f6491982c8ee11f781d463","count":"30","price":"￥54000.00"},{"product_name":"HC3A250 悉心心电仪3","ascription_guid":"456457ad87f6491982c8ee11f781d463","count":"30","price":"￥54000.00"},{"product_name":"HC3A250 悉心心电仪4","ascription_guid":"456457ad87f6491982c8ee11f781d463","count":"30","price":"￥54000.00"},{"product_name":"HC3A250 悉心心电仪5","ascription_guid":"456457ad87f6491982c8ee11f781d463","count":"30","price":"￥54000.00"},{"product_name":"HC3A250 悉心心电仪6","ascription_guid":"456457ad87f6491982c8ee11f781d463","count":"30","price":"￥54000.00"},{"product_name":"HC3A250 悉心心电仪7","ascription_guid":"456457ad87f6491982c8ee11f781d463","count":"30","price":"￥54000.00"},{"product_name":"HC3A250 悉心心电仪8","ascription_guid":"456457ad87f6491982c8ee11f781d463","count":"30","price":"￥54000.00"},{"product_name":"HC3A250 悉心心电仪9","ascription_guid":"456457ad87f6491982c8ee11f781d463","count":"30","price":"￥54000.00"},{"product_name":"电极片","ascription_guid":"qwesq7a12321321382c8ee11f781d463","count":"160","price":"￥3200.00"}]},{"name":"和小凯2","order_no":"JKADJFI484184818482","start_time":"2018/11/15 22:10:59","county_address":"香港","count_total":"800","sub_total":"￥800.00","post_price":"￥0.00","price_total":"￥2800000.00","page_side":[{"product_name":"HC3A250 悉心心电仪21212","ascription_guid":"456457ad87f6491982c8ee11f781d463","count":"30","price":"￥54000.00"},{"product_name":"电极片121212","ascription_guid":"qwesq7a12321321382c8ee11f781d463","count":"160","price":"￥3200.00"}]}]};
                                /*在此处进行打印内容的拼接操作*/
                                printorderlist();
                                function printorderlist(){
                                    var page = orderlist_data.order_book;
                                    var page_length = orderlist_data.order_book.length;
                                    var html_page = "";
                                    for (i=0; i < page_length; i++) {
                                        /*定义第一段需要拼接的html*/
                                            var html_page_tipsv1="";
                                                html_page_tipsv1 += "<div class=\"clear pd-15\" style=\"page-break-after: always;\">";
                                                html_page_tipsv1 += "<p class=\"f-18 text-center col-black h-25 line-h-25\">";
                                                html_page_tipsv1 += "    BISA";
                                                html_page_tipsv1 += "<\/p>";
                                                html_page_tipsv1 += "<p class=\"f-20 f-w text-center col-black h-25 line-h-25 mb-15 family-s\">";
                                                html_page_tipsv1 += "    碧沙康健";
                                                html_page_tipsv1 += "<\/p>";
                                                html_page_tipsv1 += "<div class=\"clear full-w bor bor-b\">";
                                                html_page_tipsv1 += "<\/div>";
                                                html_page_tipsv1 += "<div class=\"clear full-w mt-15 f-12\">";
                                                html_page_tipsv1 += "    <div class=\"clear layui-col-xs6 line-h-20 col-black\">";
                                                html_page_tipsv1 += "        <span class=\"f-w col-black\">收货人姓名：<\/span>"+page[i].name;
                                                html_page_tipsv1 += "    <\/div>";
                                                html_page_tipsv1 += "    <div class=\"clear layui-col-xs6 line-h-20 col-black\">";
                                                html_page_tipsv1 += "        <span class=\"f-w col-black\">订单编号：<\/span>"+page[i].order_no;
                                                html_page_tipsv1 += "    <\/div>";
                                                html_page_tipsv1 += "<\/div>";
                                                html_page_tipsv1 += "<div class=\"clear full-w mt-10 f-12\">";
                                                html_page_tipsv1 += "    <div class=\"clear layui-col-xs12 line-h-20 col-black\">";
                                                html_page_tipsv1 += "        <span class=\"f-w col-black\">下单日期：<\/span>"+page[i].start_time;
                                                html_page_tipsv1 += "    <\/div>";
                                                html_page_tipsv1 += "<\/div>";
                                                html_page_tipsv1 += "<div class=\"clear full-w mt-10 f-12 mb-15\">";
                                                html_page_tipsv1 += "    <div class=\"clear layui-col-xs12 line-h-20 col-black\">";
                                                html_page_tipsv1 += "        <span class=\"f-w col-black\">收货人地址：<\/span>"+page[i].county_address;
                                                html_page_tipsv1 += "    <\/div>";
                                                html_page_tipsv1 += "<\/div>";
                                                html_page_tipsv1 += "<div class=\"clear full-w bor bor-b\">";
                                                html_page_tipsv1 += "<\/div>";
                                                html_page_tipsv1 += "<div class=\"clear full-w mt-15 f-12\">";
                                                html_page_tipsv1 += "    <div class=\"clear layui-col-xs3 f-w col-black pl-0 pr-0 newline\">";
                                                html_page_tipsv1 += "        商品名";
                                                html_page_tipsv1 += "    <\/div>";
                                                html_page_tipsv1 += "    <div class=\"clear layui-col-xs5 f-w col-black pl-0 pr-0 text-center newline\">";
                                                html_page_tipsv1 += "        商品编号";
                                                html_page_tipsv1 += "    <\/div>";
                                                html_page_tipsv1 += "    <div class=\"clear layui-col-xs2 f-w col-black pl-0 pr-0 text-center newline\">";
                                                html_page_tipsv1 += "        商品数量";
                                                html_page_tipsv1 += "    <\/div>";
                                                html_page_tipsv1 += "    <div class=\"clear layui-col-xs2 f-w col-black pl-0 pr-0 text-right newline\">";
                                                html_page_tipsv1 += "        单项总价";
                                                html_page_tipsv1 += "    <\/div>";
                                                html_page_tipsv1 += "<\/div>";
                                        /*定义第一段需要拼接的html结束*/
                                        /*定义第二段需要拼接的html内容*/
                                            var page_side = page[i].page_side;
                                            var page_side_length = page[i].page_side.length;
                                            var html_page_tipsv2 = "";
                                            for (j=0; j < page_side_length; j++) {
                                                /*定义第二段内部需要拼接的html内容*/
                                                var html_page_tipsv2_side="";
                                                    html_page_tipsv2_side += "<div class=\"clear full-w mt-15 f-12\">";
                                                    html_page_tipsv2_side += "    <div class=\"clear layui-col-xs3 col-black pl-0 pr-0 newline\">";
                                                    html_page_tipsv2_side += page_side[j].product_name;
                                                    html_page_tipsv2_side += "    <\/div>";
                                                    html_page_tipsv2_side += "    <div class=\"clear layui-col-xs5 col-black pl-0 pr-0 text-center newline\">";
                                                    html_page_tipsv2_side += page_side[j].ascription_guid;
                                                    html_page_tipsv2_side += "    <\/div>";
                                                    html_page_tipsv2_side += "    <div class=\"clear layui-col-xs2 col-black pl-0 pr-0 text-center newline\">";
                                                    html_page_tipsv2_side += page_side[j].count;
                                                    html_page_tipsv2_side += "    <\/div>";
                                                    html_page_tipsv2_side += "    <div class=\"clear layui-col-xs2 col-black pl-0 pr-0 text-right newline\">";
                                                    html_page_tipsv2_side += page_side[j].price;
                                                    html_page_tipsv2_side += "    <\/div>";
                                                    html_page_tipsv2_side += "<\/div>";
                                                    /*定义第二段需要拼接的html内容结束*/
                                                    html_page_tipsv2 += html_page_tipsv2_side;
                                            }
                                        /*定义第二段需要拼接的html内容结束*/
                                        /*定义第三段需要拼接的html*/
                                            var html_page_tipsv3="";
                                                html_page_tipsv3 += "<div class=\"clear full-w mt-40 f-12 mb-15\">";
                                                html_page_tipsv3 += "    <div class=\"clear layui-col-xs4 layui-col-xs-offset8 pl-0 pr-0\">";
                                                html_page_tipsv3 += "        <span class=\"f-w col-black dis-ib pull-left\">商品总数：<\/span>";
                                                html_page_tipsv3 += "        <span class=\"col-black dis-ib pull-right\">"+page[i].count_total+"<\/span>";
                                                html_page_tipsv3 += "    <\/div>";
                                                html_page_tipsv3 += "<\/div>";
                                                html_page_tipsv3 += "<div class=\"clear full-w bor bor-b\">";
                                                html_page_tipsv3 += "<\/div>";
                                                html_page_tipsv3 += "<div class=\"clear full-w mt-15 f-12\">";
                                                html_page_tipsv3 += "    <div class=\"clear layui-col-xs4 layui-col-xs-offset8 pl-0 pr-0\">";
                                                html_page_tipsv3 += "        <span class=\"f-w col-black dis-ib pull-left\">小计：<\/span>";
                                                html_page_tipsv3 += "        <span class=\"col-black dis-ib pull-right\">"+page[i].sub_total+"<\/span>";
                                                html_page_tipsv3 += "    <\/div>";
                                                html_page_tipsv3 += "<\/div>";
                                                html_page_tipsv3 += "<div class=\"clear full-w mt-10 f-12\">";
                                                html_page_tipsv3 += "    <div class=\"clear layui-col-xs4 layui-col-xs-offset8 pl-0 pr-0\">";
                                                html_page_tipsv3 += "        <span class=\"f-w col-black dis-ib pull-left\">运费：<\/span>";
                                                html_page_tipsv3 += "        <span class=\"col-black dis-ib pull-right\">"+page[i].post_price+"<\/span>";
                                                html_page_tipsv3 += "    <\/div>";
                                                html_page_tipsv3 += "<\/div>";
                                                html_page_tipsv3 += "<div class=\"clear full-w mt-10 f-12 mb-15\">";
                                                html_page_tipsv3 += "    <div class=\"clear layui-col-xs4 layui-col-xs-offset8 pl-0 pr-0\">";
                                                html_page_tipsv3 += "        <span class=\"f-w col-black dis-ib pull-left\">合计金额：<\/span>";
                                                html_page_tipsv3 += "        <span class=\"col-black dis-ib pull-right\">"+page[i].price_total+"<\/span>";
                                                html_page_tipsv3 += "    <\/div>";
                                                html_page_tipsv3 += "<\/div>";
                                                html_page_tipsv3 += "<div class=\"clear full-w bor bor-b\">";
                                                html_page_tipsv3 += "<\/div>";
                                                html_page_tipsv3 += "<div class=\"clear full-w mt-15 f-12 mb-10 col-black\">";
                                                html_page_tipsv3 += "    感谢您购买碧沙康健的产品，如您对产品感到满意记得登录碧沙商城给我们好评哦！";
                                                html_page_tipsv3 += "<\/div>";
                                                html_page_tipsv3 += "<div class=\"clear full-w bor bor-b\">";
                                                html_page_tipsv3 += "<\/div>";
                                                html_page_tipsv3 += "<div class=\"clear full-w mt-15 f-12 col-black text-center\">";
                                                html_page_tipsv3 += "    扫描 二维码 进入碧沙商城";
                                                html_page_tipsv3 += "<\/div>";
                                                html_page_tipsv3 += "<div class=\"clear full-w mt-15 text-center\">";
                                                html_page_tipsv3 += "    <img class=\"img-100\" src=\"..\/..\/..\/img\/admin\/admin_comm\/shop_qr.png\" alt=\"\">";
                                                html_page_tipsv3 += "<\/div>";
                                                html_page_tipsv3 += "<\/div>";
                                        /*定义第三段需要拼接的html结束*/
                                        html_page = html_page + html_page_tipsv1 + html_page_tipsv2 + html_page_tipsv3;
                                    }
                                    /*把拼接好的html内容插入页面进行打印*/
                                    $("#print_content").html(html_page);
                                    $("#print_content").print();
                                }
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
        $(this).siblings().addClass("layui-btn-primary");
    });
    $(".wwwwww").click(function() {
        $(".aaaaaa").print();
    });
});