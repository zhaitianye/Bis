$(document).ready(function(){
    /*平安钟服务数量增加减*/
    $(function() { 
        $(".addv1").click(function() {  
            var t = $(".text_boxv1").text();
            if(parseInt(t)==""||undefined||null||isNaN(t) || isNaN(parseInt(t))){  
                $(".text_boxv1").text(0);  
            }
            $(".text_boxv1").text(parseInt(t) + 1)  
            setTotalv1();
        })
        $(".minv1").click(function() {  
            var t = $(".text_boxv1").text();  
            if(parseInt(t)==""||undefined||null||isNaN(t) || isNaN(parseInt(t))){  
                $(".text_boxv1").text(0);  
            }
            $(".text_boxv1").text(parseInt(t) - 1)
            if(parseInt(t)<="0"||undefined||null||isNaN(t) || isNaN(parseInt(t))){  
                $(".text_boxv1").text(0);  
            }
            setTotalv1();
        })
        function setTotalv1() {  
            var t = $(".text_boxv1").text();
            if(parseInt(t)==""||undefined||null ||isNaN(t) || isNaN(parseInt(t))){  
                    t=0;  
                }  
            var p = $(".pricev1").val();    
            var s = parseInt(t) * parseFloat(p);  
            $(".totalv1").html(s.toFixed(2));  
        }
     }); 
    /*15分钟报告服务数量增加减*/
     $(function() {    
        $(".addv2").click(function() {  
            var t = $(".text_boxv2").text();
            if(parseInt(t)==""||undefined||null||isNaN(t) || isNaN(parseInt(t))){  
                $(".text_boxv2").text(0);  
            }
            $(".text_boxv2").text(parseInt(t) + 1)  
            setTotalv2();
        })
        $(".minv2").click(function() {  
            var t = $(".text_boxv2").text();  
            if(parseInt(t)==""||undefined||null||isNaN(t) || isNaN(parseInt(t))){  
                $(".text_boxv2").text(0);  
            }
            $(".text_boxv2").text(parseInt(t) - 1)
            if(parseInt(t)<="0"||undefined||null||isNaN(t) || isNaN(parseInt(t))){  
                $(".text_boxv2").text(0);  
            }
            setTotalv2();
        })
        function setTotalv2() {  
            var t = $(".text_boxv2").text();
            if(parseInt(t)==""||undefined||null ||isNaN(t) || isNaN(parseInt(t))){  
                    t=0;  
                }  
            var p = $(".pricev2").val();    
            var s = parseInt(t) * parseFloat(p);  
            $(".totalv2").html(s.toFixed(2));
            $(".text_boxv2_val").text(t);
        } 
    });
    /*24小时报告服务数量增加减*/
     $(function() {    
        $(".addv3").click(function() {  
            var t = $(".text_boxv3").text();
            if(parseInt(t)==""||undefined||null||isNaN(t) || isNaN(parseInt(t))){  
                $(".text_boxv3").text(0);  
            }
            $(".text_boxv3").text(parseInt(t) + 1)  
            setTotalv3();
        })
        $(".minv3").click(function() {  
            var t = $(".text_boxv3").text();  
            if(parseInt(t)==""||undefined||null||isNaN(t) || isNaN(parseInt(t))){  
                $(".text_boxv3").text(0);  
            }
            $(".text_boxv3").text(parseInt(t) - 1)
            if(parseInt(t)<="0"||undefined||null||isNaN(t) || isNaN(parseInt(t))){  
                $(".text_boxv3").text(0);  
            }
            setTotalv3();
        })
        function setTotalv3() {  
            var t = $(".text_boxv3").text();
            if(parseInt(t)==""||undefined||null ||isNaN(t) || isNaN(parseInt(t))){  
                    t=0;  
                }  
            var p = $(".pricev3").val();    
            var s = parseInt(t) * parseFloat(p);  
            $(".totalv3").html(s.toFixed(2));
            $(".text_boxv3_val").text(t);
        } 
    });

      /*15和24切换*/
      $(".15pagon").click(function(){
        $(".tabsv2").hide();
        $(".tabsv1").show();
      });
      $(".24pagon").click(function(){
        $(".tabsv1").hide();
        $(".tabsv2").show();
      });
      /*返回按钮*/
      $(".back").click(function(){
        $(".back").attr("src","../../img/bisserve/backv2.png");
      });
});



/* 弹出层*/
function payshow_show(){
  $(".payshow").show();
}
$(".payshow").on("click",function(event){
     event.stopPropagation();
     var target=event.target;
     if (!$(target).closest(".modal-content").length>0||$(target).attr("class").indexOf("close-mod")!=-1) {
        $(".payshow").hide()
     };
})