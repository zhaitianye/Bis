$(document).ready(function() {
    /*layui方面js*/
    layui.use(['form', 'layer', 'element'], function() {
        var form = layui.form,
            layer = layui.layer,
            element = layui.element;
        $(".print_this").click(function(){
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
            var print_data = [{"service_id":"HDCKL10005356","ordernum":"HAHGUBUN54185245415","producttype":"悉心心电仪","sn_id":"SN4818435868461","repair_state":"保修中","application_time":"2017/10/12 15:30:20","after_class":"维修","service_mode":"寄修","description":"一般快递的物流时间为省内1-3天左右，省外3-6天左右，偏远地区7-10天左右。超过这些时间段没有收到货，或没有新的物流信息更新的订单，物流时间异常，就需要客服去打电话查询包裹的情况。","take_goods_name":"张先森","take_goods_phone":"18580808081","take_goods_address":"深圳市南山区深云路9号(沙河建工村对面)","visit_name":"凯先森","visit_phone":"13684951542"}];
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
        });
        $(".edit_remark").click(function(){
            var remark_content = $(".remark_content").text();
            //清楚文字前后空格
            remark_content=remark_content.replace(/^\s+|\s+$/g,"");
            $(".text_edit_remark").val(remark_content);
            layer.open({
                type: 1,
                title: "编辑备注",
                area: ['600px', '360px'], //宽高
                btn: ['确认编辑', '取消'],
                btn1: function(index, layero) {
                    console.log(1);
                },
                content: $('.show_edit_remark'),
            });
        });
        /*录入sn码*/
        $(".btn_enter_sn").click(function(){
            layer.prompt({ title: '请录入SN码', formType: 0 }, function(enter_sn, index) {
                layer.close(index);
                /*enter_sn就是录入的sn码*/
                console.log(enter_sn);
            });
        });
        /*重录sn码*/
        $(".btn_re_enter_sn").click(function(){
            var sn_code = $(".sn_code").text();
            layer.prompt({ title: '修改原来的SN码，原SN码将删除。', formType: 0 , value: sn_code}, function(enter_sn, index) {
                layer.close(index);
                /*enter_sn就是录入的sn码*/
                console.log(enter_sn);
            });
        });
        /*换货登记*/
        $(".btn_exchanges").click(function(){
            $(".re_new_sncode").val("");
            var sn_code = $(".sn_code").text();
            $(".old_sn_code").text(sn_code);
            layer.open({
                type: 1,
                title: "换货登记",
                area: ['360px', '300px'], //宽高
                btn: ['确定', '取消'],
                btn1: function(index, layero) {
                    var re_new_sn_code = $(".re_new_sncode").val();
                    if (re_new_sn_code == "") {
                        layer.msg('输入新SN码不能为空', {icon: 5,anim: 6});
                    } else {
                        console.log(re_new_sn_code);
                    }
                    
                },
                content: $('#show_exchanges'),
            });
        }); 
        /*维修报价*/
        $(".btn_repair_quo").click(function(){
            layer.open({
                type: 1,
                title: "换货登记",
                area: ['360px', '230px'], //宽高
                btn: ['确定', '取消'],
                btn1: function(index, layero) {
                    var re_money = $(".ipt_money").val();
                    if (re_money == "") {
                        layer.msg('输入金额不能为空', {icon: 5,anim: 6});
                    } else {
                        console.log(re_money);
                    }
                },
                content: $('#show_repair_quo'),
            });
        });
        /*输入框只能输入金额的校验*/
        $(".ipt_money").keyup(function () {
            var reg = $(this).val().match(/\d+\.?\d{0,2}/);
            var txt = '';
            if (reg != null) {
                txt = reg[0];
            }
            $(this).val(txt);
        }).change(function () {
            $(this).keypress();
            var v = $(this).val();
            if (/\.$/.test(v))
            {
                $(this).val(v.substr(0, v.length - 1));
            }
        });
        /*退款返库*/
        $(".btn_refund").click(function(){
            layer.confirm('是否同意退款并返还库存？', {
                title: '退款返库',
                btn: ['确定','取消']
            }, function(){
              /*在这里执行确定的操作*/
              layer.closeAll();
            });
        });
        /*填写运单号*/
        $(".btn_take_waybill").click(function(){
            /*初始化请空所有表单内的值*/
            $(".aft_sal_situ").val("");
            $(".cour_company").val("");
            form.render('select', 'lay_take_waybill');
            $(".ipt_racking_num").val("");
            layer.open({
                type: 1,
                title: "填写运单号",
                area: ['600px', '450px'], //宽高
                btn: ['确定', '取消'],
                btn1: function(index, layero) {
                    var aft_sal_situ_val = $(".aft_sal_situ").val();
                    var cour_company_val = $(".cour_company").val();
                    var ipt_racking_num_val = $(".ipt_racking_num").val();
                    if (aft_sal_situ_val == "") {
                        layer.msg('售后情况不能为空', {icon: 5,anim: 6});
                    } else if(cour_company_val == ""){
                        layer.msg('快递公司不能为空', {icon: 5,anim: 6});
                    } else if(ipt_racking_num_val == ""){
                        layer.msg('运单号不能为空', {icon: 5,anim: 6});
                    }else{
                        /*进行非空验证后在这里获取数据进行提交*/
                        console.log(aft_sal_situ_val);
                        console.log(cour_company_val);
                        console.log(ipt_racking_num_val);
                    }
                },
                content: $('#show_take_waybill'),
            });
        });

        
        
    });
    
    

});

