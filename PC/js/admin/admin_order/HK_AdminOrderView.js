$(document).ready(function() {
    /*模拟数据*/
    var cargodata ={"objnum":"SDJHJ54185245415412","commodity":[{"name":"心电仪HC3A250","inventory":"30","val":"1000001","state":"0"},{"name":"电极片一包(20片)","inventory":"10","val":"1000002","state":"1"},{"name":"电极片一包(40片)","inventory":"0","val":"1000003","state":"1"},{"name":"心电仪数据线","inventory":"80","val":"1000004","state":"1"}]};
    /*选择框被选中的值*/
    var sel_val;
    /*layui方面js*/
    layui.use(['form', 'table', 'element'], function() {
        var form = layui.form,
            layer = layui.layer,
            element = layui.element,
            table = layui.table;
        /*初始化下拉框和订单号*/
        sle_initialize();
        function sle_initialize(){
            var objnum = cargodata.objnum;
            $(".span_order_numbox").text(objnum);
            var data_commodity_length = cargodata.commodity.length;
            for (var i = 0; i < data_commodity_length; i++) {
                var opt_key_one = cargodata.commodity[i].val;
                var opt_key_two = cargodata.commodity[i].name + "（库存" + cargodata.commodity[i].inventory+ "件）";
                var optionVar="";
                    optionVar += "<option value=\""+opt_key_one+"\">"+opt_key_two+"<\/option>";
                $(".sle_type_c").append(optionVar);
            };
            form.render('select');
        };
        /*选择产品时表单的变换*/
        form.on('select(sle_type_f)', function(data){
            sel_val = data.value;//得到被选中的值
            var data_commodity_length = cargodata.commodity.length;
            for (var i = 0; i < data_commodity_length; i++) {
                var opt_key_one = cargodata.commodity[i].val;
                if (sel_val == opt_key_one) {
                    var pot_key_state = parseInt(cargodata.commodity[i].state);
                    if (pot_key_state == 0) {
                        $('.cargo_v2_input').val("");
                        $('.cargo_v2_box').removeClass('bounceInRight');
                        $('.cargo_v2_box').addClass('fadeOutRightBig');
                        setTimeout(function(){
                            $(".cargo_v2_box").hide();
                            $('.cargo_v2_box').removeClass('fadeOutRightBig');
                            $('.cargo_v2_box').addClass('bounceInRight');
                            $(".cargo_v1_box").show();
                        }, 200);
                    } else if(pot_key_state == 1){
                        $('.cargo_v1_input').val("");
                        $('.cargo_v1_box').removeClass('bounceInRight');
                        $('.cargo_v1_box').addClass('fadeOutRightBig');
                        setTimeout(function(){
                            $(".cargo_v1_box").hide();
                            $('.cargo_v1_box').removeClass('fadeOutRightBig');
                            $('.cargo_v1_box').addClass('bounceInRight');
                            $(".cargo_v2_box").show();
                        }, 200);
                    };
                }
            };
        });
        $(".cargo_v1_box_add").click(function(){
            var cargo_ipt_val = $(".cargo_v1_input").val();
            if (cargo_ipt_val == null || cargo_ipt_val==""|| typeof(cargo_ipt_val) == "undefined" || isNaN(cargo_ipt_val)) {
                console.log(1);
            }else{
                console.log(2);
            }
            console.log(cargo_ipt_val);
            for (var i = 0; i < cargodata.commodity.length; i++) {
                var opt_key_one = cargodata.commodity[i].val;
                if (sel_val == opt_key_one) {
                    //console.log(cargodata.commodity[i].state);
                }
            };
        });
        $(".cargo_v2_box_add").click(function(){
            console.log(sel_val);
            for (var i = 0; i < cargodata.commodity.length; i++) {
                var opt_key_one = cargodata.commodity[i].val;
                if (sel_val == opt_key_one) {
                    //console.log(cargodata.commodity[i].state);
                }
            };
        });
    });

    

});