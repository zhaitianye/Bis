$(document).ready(function() {
    /*layui方面js*/
    layui.use(['form', 'table', 'element', 'laydate'], function() {
        var form = layui.form,
            layer = layui.layer,
            element = layui.element,
            laydate = layui.laydate,
            table = layui.table;
        /*日期部分*/
        /*按年查询*/
        laydate.render({
            elem: '#ipt_year',
            type: 'year',
            max: 0
        });
        /*按月查询*/
        laydate.render({
            elem: '#ipt_month',
            type: 'month',
            max: 0
        });
        /*按日查询*/
        laydate.render({
            elem: '#ipt_day',
            max: 0
        });
        /*按范围查询*/
        laydate.render({
            elem: '#ipt_datarange',
            type: 'month',
            range: true,
            max: 0
        });
        /*下拉框选择之后的联动*/
        form.on('select(sle_type_f)', function(data) {
            switch(parseInt(data.value))
            {
                case 1:
                    $(".sel_value").hide();
                    $(".sel_value").attr("lay-verify","");
                    $("#ipt_transnum").siblings(".sel_value").val("");
                    $("#ipt_transnum").show();
                    $("#ipt_transnum").attr("lay-verify","required");
                    break;
                case 2:
                    $(".sel_value").hide();
                    $(".sel_value").attr("lay-verify","");
                    $("#ipt_ordernum").siblings(".sel_value").val("");
                    $("#ipt_ordernum").show();
                    $("#ipt_ordernum").attr("lay-verify","required");
                    break;
                case 3:
                    $(".sel_value").hide();
                    $(".sel_value").attr("lay-verify","");
                    $("#ipt_year").siblings(".sel_value").val("");
                    $("#ipt_year").show();
                    $("#ipt_year").attr("lay-verify","required");
                    break;
                case 4:
                    $(".sel_value").hide();
                    $(".sel_value").attr("lay-verify","");
                    $("#ipt_month").siblings(".sel_value").val("");
                    $("#ipt_month").show();
                    $("#ipt_month").attr("lay-verify","required");
                    break;
                case 5:
                    $(".sel_value").hide();
                    $(".sel_value").attr("lay-verify","");
                    $("#ipt_day").siblings(".sel_value").val("");
                    $("#ipt_day").show();
                    $("#ipt_day").attr("lay-verify","required");
                    break;
                case 6:
                    $(".sel_value").hide();
                    $(".sel_value").attr("lay-verify","");
                    $("#ipt_datarange").siblings(".sel_value").val("");
                    $("#ipt_datarange").show();
                    $("#ipt_datarange").attr("lay-verify","required");
                    break;
                default:
                    break;
            }

        });
        //监听提交
        form.on('submit(search1)', function(data) {
            layer.alert(JSON.stringify(data.field), {
                title: '最终的提交信息'
            })
            //console.log(JSON.stringify(data.field));
            return false;
        });
        //执行渲染
        table.render({
            elem: '#tradelist', //指定原始表格元素选择器（推荐id选择器）
            height: 400, //容器高度
            cols: [
                [ //标题栏
                    { field: 'op_user_guid', title: '客服ID', width: 200 },
                    { field: 'order_guid', title: '订单号', width: 200},
                    { field: 'user_guid', title: '用户ID', width: 180 },
                    { field: 'statu', title: '状态', width: 100, sort: true},
                    { field: 'refund_price', title: '退款金额', width: 160},
                    { field: 'start_time', title: '创建时间', width: 200, sort: true},
                    { field: 'refund_time', title: '退款完成时间', width: 200, sort: true},
                    { fixed: 'right', title: '操作', width: 100, align: 'center', toolbar: '#barDemo' }
                ]
            ],
            /*在这里使用的是静态数据，参考layui文档，使用服务器上的数据进行更替*/
            data: [{"op_user_guid":"5154DEEDGRCE","order_guid":"SD415671235445155","user_guid":"A6DE564115","statu":"未退款","refund_price":"1500","start_time":"2017/10/12 9:55:52","refund_time":"2017/10/13 9:55:52"},{"op_user_guid":"5154DEED4124","order_guid":"SD41567123544515522","user_guid":"A6DE56411522","statu":"已退款","refund_price":"2500","start_time":"2017/10/12 9:55:52","refund_time":"2017/10/13 9:55:52"},{"op_user_guid":"5154DEEDG123","order_guid":"SD415671235445155","user_guid":"A6DE564115123","statu":"未退款","refund_price":"3500","start_time":"2017/10/12 9:55:52","refund_time":"2017/10/13 9:55:52"}],
            page: true,
        });
        //监听工具条
        table.on('tool(tradelist_filter)', function(obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var data = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值
            var tr = obj.tr; //获得当前行 tr 的DOM对象

            if(layEvent === 'btn_refund'){ //查看
                layer.confirm('需要要进行  ' +data.op_user_guid +'  的退款操作么？', function(index) {
                    /*在这里如果点确定执行的函数*/
                    /*在这进行退款操作*/
                    layer.close(index);
                });
            }
        });

    });
});