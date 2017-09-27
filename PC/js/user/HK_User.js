$(document).ready(function() {
    /*选择头像的弹出层*/
    $(".set-heads").click(function() {
        $(".show-selhead").show();
        $(".selhead-content").removeClass("ani-selhead-logoout");
        $(".selhead-content").addClass("ani-selhead-logoin");
    });
    $(".show-selhead").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".selhead-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".selhead-content").removeClass("ani-selhead-logoin");
            $(".selhead-content").addClass("ani-selhead-logoout");
            $(".show-selhead").fadeOut();
        };
    });
    /*选择头像部分图像操作部分js*/
    cutimg();
    function cutimg(){
        $('#show-main-img').cropper({
            aspectRatio: 1 / 1,
            crop: function(e) {
                var nowspace = $('#show-main-img').cropper("getCroppedCanvas",{width:200,height:200});
                var dataurl = nowspace.toDataURL('image/jpeg');
                $("#show-little-imgv1").attr("src",dataurl);
                $("#show-little-imgv2").attr("src",dataurl);
            }
        });
    };
    
    $('#sel-file').change(function(e){
        var file = e.target.files[0];
        var bloburl = URL.createObjectURL(file);
        $('#show-main-img').attr("src",bloburl);
        $('#show-main-img').cropper("destroy");
        cutimg();
    });
    $(".cro-btn-big").click(function(){
        $('#show-main-img').cropper("zoom",0.1);
    })
    $(".cro-btn-small").click(function(){
        $('#show-main-img').cropper("zoom",-0.1);
    })
    $(".cro-btn-left").click(function(){
        $('#show-main-img').cropper("rotate",-90);
    })
    $(".cro-btn-right").click(function(){
        $('#show-main-img').cropper("rotate",90);
    })
    $(".cro-btn-reset").click(function(){
        $('#show-main-img').cropper("reset");
    })
    $(".cro-btn-submit").click(function(){
        var submitspace = $('#show-main-img').cropper("getCroppedCanvas",{width:200,height:200});
        var submiturl = submitspace.toDataURL('image/jpeg');
        console.log(submiturl);

        var layindex = layer.load(2, {
          shade: [0.4,'#000'] //0.1透明度的白色背景
        });
        //此处用setTimeout演示ajax的回调
        setTimeout(function(){
          layer.close(layindex);
        }, 3000);
        
    })
});