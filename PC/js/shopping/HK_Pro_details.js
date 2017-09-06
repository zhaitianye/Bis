$(document).ready(function() {
    /*头部导航下划线*/
    $(".mainnav").find("a").mouseenter(function() {
        $(this).addClass("navbor");
    });
    $(".mainnav").find("a").mouseleave(function() {
        $(this).removeClass("navbor");
    });
    /*头部输入框变化*/
    $(".mainsearch").click(function() {
        event.stopPropagation();
        $(".mainsearchinput").fadeIn();
    });
    $(document).click(function() {
        $('.mainsearchinput').fadeOut();
    });
    /*商品展示页浮层定位*/
    $(window).scroll(function() {
        var floatscroll = $(".header").height();
        if ($(this).scrollTop() > floatscroll) {
            $(".flo-menuv2-aff").show();
        } else {
            $(".flo-menuv2-aff").hide();
        }
    });

    /*商品展示页4层背景变化*/
    $(window).scroll(function() {
        //下面这句主要是获取网页的总高度，主要是考虑兼容性所以把Ie支持的documentElement也写了，这个方法至少支持IE8  
        var htmlHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        //clientHeight是网页在浏览器中的可视高度，  
        var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
        //scrollTop是浏览器滚动条的top位置，  
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；
        var starbgpos = $(".header").height() + $(".flo-menuv2").height() + $(".first-floor").height() + $(".second-floor").height() + $(".third-floor").height() - clientHeight;

        var endbgpos = $(".header").height() + $(".first-floor").height() + $(".second-floor").height() + $(".third-floor").height() + $(".fourth-floor").height();
        var speed = 200;
        if (scrollTop >= starbgpos && scrollTop <= endbgpos) {
            var changebgpos = [(scrollTop - starbgpos) / (endbgpos - starbgpos) - 0.5] * -1000 - 500;
            var changste = changebgpos + "px";
            $(".img-peodetailfv4-1").stop();
            $(".img-peodetailfv4-1").animate({ top: changste }, 1000);

        }
    });
    /*页面加载完毕后自动贴第一个边*/
    var location = $(".first-floor").offset().top-51;
    $('body,html').animate({ scrollTop: location }, 900);
    /*页面元素向上滚动延迟加载*/
    setTimeout(addanifirstflooraniv2, 500);

    function addanifirstflooraniv2() {
        $('.first-floor-aniv2').addClass("ani-topa-re");
        setTimeout(addanisecondflooraniv1, 300);

        function addanisecondflooraniv1() {
            $('.second-floor-aniv1').addClass("ani-topa-re");
            setTimeout(addanisecondflooraniv2, 300);

            function addanisecondflooraniv2() {
                $('.second-floor-aniv2').addClass("ani-topa-re");
                setTimeout(addanisecondflooraniv3, 300);

                function addanisecondflooraniv3() {
                    $('.second-floor-aniv3').addClass("ani-topa-re");
                };
            };
        };
    };
    $(window).scroll(function() {
        //下面这句主要是获取网页的总高度，主要是考虑兼容性所以把Ie支持的documentElement也写了，这个方法至少支持IE8  
        var htmlHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        //clientHeight是网页在浏览器中的可视高度，  
        var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
        //scrollTop是浏览器滚动条的top位置，  
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；
        var firstendh = $(".header").height() + $(".first-floor").height();
        var secondendh = $(".header").height() + $(".first-floor").height() + $(".second-floor").height();
        var thirdendh = $(".header").height() + $(".first-floor").height() + $(".second-floor").height() + $(".third-floor").height();
        var fourthendh = $(".header").height() + $(".first-floor").height() + $(".second-floor").height() + $(".third-floor").height() + $(".fourth-floor").height();
        var fifthendh = $(".header").height() + $(".first-floor").height() + $(".second-floor").height() + $(".third-floor").height() + $(".fourth-floor").height() + $(".fifth-floor").height();
        var sixendh = $(".header").height() + $(".first-floor").height() + $(".second-floor").height() + $(".third-floor").height() + $(".fourth-floor").height() + $(".fifth-floor").height() + $(".six-floor").height();
        var sevenendh = $(".header").height() + $(".first-floor").height() + $(".second-floor").height() + $(".third-floor").height() + $(".fourth-floor").height() + $(".fifth-floor").height() + $(".six-floor").height() + $(".seven-floor").height();
        var eightendh = $(".header").height() + $(".first-floor").height() + $(".second-floor").height() + $(".third-floor").height() + $(".fourth-floor").height() + $(".fifth-floor").height() + $(".six-floor").height() + $(".seven-floor").height() + $(".eight-floor").height();


        /*一楼*/
        if (0<=($(".first-floor").offset().top-scrollTop) && (clientHeight-51)*5/7>=($(".first-floor").offset().top-scrollTop)) {
            if ($('.first-floor-aniv1').hasClass('ani-topa-re')) {

            } else {
                $('.first-floor-aniv1').addClass("ani-topa-re");
            };
            setTimeout(anifirstflooraniv2, 500);

            function anifirstflooraniv2() {
                if ($('.first-floor-aniv2').hasClass('ani-topa-re')) {

                } else {
                    $('.first-floor-aniv2').addClass("ani-topa-re");
                }
            };
        }
        /*二楼*/
        if (0<=($(".second-floor").offset().top-scrollTop) && (clientHeight-51)*5/7>=($(".second-floor").offset().top-scrollTop)) {
            if ($('.second-floor-aniv1').hasClass('ani-topa-re')) {

            } else {
                $('.second-floor-aniv1').addClass("ani-topa-re");
            };
            setTimeout(anisecondflooraniv2, 500);

            function anisecondflooraniv2() {
                if ($('.second-floor-aniv2').hasClass('ani-topa-re')) {

                } else {
                    $('.second-floor-aniv2').addClass("ani-topa-re");
                }
                setTimeout(anisecondflooraniv3, 500);

                function anisecondflooraniv3() {
                    if ($('.second-floor-aniv3').hasClass('ani-topa-re')) {} else {
                        $('.second-floor-aniv3').addClass("ani-topa-re");
                    }
                };
            };
        };
        /*三楼*/
        if (0<=($(".third-floor").offset().top-scrollTop) && (clientHeight-51)*5/7>=($(".third-floor").offset().top-scrollTop)) {
            if ($('.third-floor-aniv1').hasClass('ani-topa-re')) {

            } else {
                $('.third-floor-aniv1').addClass("ani-topa-re");
            };
            setTimeout(anithirdflooraniv2, 300);
            function anithirdflooraniv2() {
                if ($('.third-floor-aniv2').hasClass('ani-topa-re')) {

                } else {
                    $('.third-floor-aniv2').addClass("ani-topa-re");
                };
                setTimeout(anithirdflooraniv3, 300);
                function anithirdflooraniv3() {
                    if ($('.third-floor-aniv3').hasClass('ani-topa-re')) {

                    } else {
                        $('.third-floor-aniv3').addClass("ani-topa-re");
                    };
                    setTimeout(anithirdflooraniv4, 300);
                    function anithirdflooraniv4() {
                        if ($('.third-floor-aniv4').hasClass('ani-topa-re')) {
                            
                        } else {
                            $('.third-floor-aniv4').addClass("ani-topa-re");
                        }
                    };
                };
            };
        };
        /*四楼*/
        if (0<=($(".fourth-floor").offset().top-scrollTop) && (clientHeight-51)*5/7>=($(".fourth-floor").offset().top-scrollTop)) {
            setTimeout(anifourthflooraniv1, 500);
            function anifourthflooraniv1() {
                if ($('.fourth-floor-aniv1').hasClass('ani-topa-re')) {

                } else {
                    $('.fourth-floor-aniv1').addClass("ani-topa-re");
                };
                setTimeout(anifourthflooraniv2, 500);
                function anifourthflooraniv2() {
                    if ($('.fourth-floor-aniv2').hasClass('ani-topa-re')) {

                    } else {
                        $('.fourth-floor-aniv2').addClass("ani-topa-re");
                    };
                };
            };
        };
        /*五楼*/
        if (0<=($(".fifth-floor").offset().top-scrollTop) && (clientHeight-51)*5/7>=($(".fifth-floor").offset().top-scrollTop)) {
            setTimeout(anififthflooraniv1, 1000);
            function anififthflooraniv1() {
                if ($('.fifth-floor-aniv1').hasClass('ani-topa-re')) {

                } else {
                    $('.fifth-floor-aniv1').addClass("ani-topa-re");
                };
                setTimeout(anififthflooraniv2, 300);
                function anififthflooraniv2() {
                    if ($('.fifth-floor-aniv2').hasClass('ani-topa-re')) {

                    } else {
                        $('.fifth-floor-aniv2').addClass("ani-topa-re");
                    };
                    setTimeout(anififthflooraniv3, 300);
                    function anififthflooraniv3() {
                        if ($('.fifth-floor-aniv3').hasClass('ani-topa-re')) {

                        } else {
                            $('.fifth-floor-aniv3').addClass("ani-topa-re");
                        };
                        setTimeout(anififthflooraniv4, 300);
                        function anififthflooraniv4() {
                            if ($('.fifth-floor-aniv4').hasClass('ani-topa-re')) {
                                
                            } else {
                                $('.fifth-floor-aniv4').addClass("ani-topa-re");
                            };
                            if ($('.fifth-floor-aniv5').hasClass('ani-fif-left')) {
                            } else {
                                $('.fifth-floor-aniv5').addClass("ani-fif-left");
                            };
                            if ($('.fifth-floor-aniv6').hasClass('ani-fif-right')) {
                            } else {
                                $('.fifth-floor-aniv6').addClass("ani-fif-right");
                            };
                        };
                    };
                };
            };
        };
        /*六楼*/
        if (0<=($(".six-floor").offset().top-scrollTop) && (clientHeight-51)*5/7>=($(".six-floor").offset().top-scrollTop)) {
            if ($('.six-floor-aniv1').hasClass('ani-topa-re')) {

            } else {
                $('.six-floor-aniv1').addClass("ani-topa-re");
            };
            setTimeout(anisixflooraniv2, 300);
            function anisixflooraniv2() {
                if ($('.six-floor-aniv2').hasClass('ani-topa-re')) {

                } else {
                    $('.six-floor-aniv2').addClass("ani-topa-re");
                };
                setTimeout(anisixflooraniv3, 300);
                function anisixflooraniv3() {
                    if ($('.six-floor-aniv3').hasClass('ani-topa-re')) {

                    } else {
                        $('.six-floor-aniv3').addClass("ani-topa-re");
                    };
                    setTimeout(anisixflooraniv4, 300);
                    function anisixflooraniv4() {
                        if ($('.six-floor-aniv4').hasClass('ani-topa-re')) {
                            
                        } else {
                            $('.six-floor-aniv4').addClass("ani-topa-re");
                        }
                    };
                };
            };
        };
        /*七楼*/
        if (0<=($(".seven-floor").offset().top-scrollTop) && (clientHeight-51)*5/7>=($(".seven-floor").offset().top-scrollTop)) {
            setTimeout(anisevenflooraniv1, 500);
            function anisevenflooraniv1() {
                if ($('.seven-floor-aniv1').hasClass('ani-topa-re')) {

                } else {
                    $('.seven-floor-aniv1').addClass("ani-topa-re");
                };
                setTimeout(anisevenflooraniv2, 200);
                function anisevenflooraniv2() {
                    if ($('.seven-floor-aniv2').hasClass('ani-topa-re')) {

                    } else {
                        $('.seven-floor-aniv2').addClass("ani-topa-re");
                    };
                    setTimeout(anisevenflooraniv3, 200);
                    function anisevenflooraniv3() {
                        if ($('.seven-floor-aniv3').hasClass('ani-topa-re')) {

                        } else {
                            $('.seven-floor-aniv3').addClass("ani-topa-re");
                        };
                        setTimeout(anisevenflooraniv4, 200);
                        function anisevenflooraniv4() {
                            if ($('.seven-floor-aniv4').hasClass('ani-topa-re')) {
                                
                            } else {
                                $('.seven-floor-aniv4').addClass("ani-topa-re");
                            }
                            setTimeout(anisevenflooraniv5, 200);
                            function anisevenflooraniv5() {
                                if ($('.seven-floor-aniv5').hasClass('ani-topa-re')) {
                                    
                                } else {
                                    $('.seven-floor-aniv5').addClass("ani-topa-re");
                                }
                            };
                        };
                    };
                };
            };
        };
        /*八楼*/
        if (0<=($(".eight-floor").offset().top-scrollTop) && (clientHeight-51)*5/7>=($(".eight-floor").offset().top-scrollTop)) {
            setTimeout(anieightflooraniv1, 300);
            function anieightflooraniv1() {
                if ($('.eight-floor-aniv1').hasClass('ani-topa-re')) {

                } else {
                    $('.eight-floor-aniv1').addClass("ani-topa-re");
                };
                setTimeout(anieightflooraniv2, 200);
                function anieightflooraniv2() {
                    if ($('.eight-floor-aniv2').hasClass('ani-topa-re')) {

                    } else {
                        $('.eight-floor-aniv2').addClass("ani-topa-re");
                    };
                    setTimeout(anieightflooraniv3, 200);
                    function anieightflooraniv3() {
                        if ($('.eight-floor-aniv3').hasClass('ani-topa-re')) {

                        } else {
                            $('.eight-floor-aniv3').addClass("ani-topa-re");
                        };
                    };
                };
            };
        };
        /*九楼*/
        if (0<=($(".nine-floor").offset().top-scrollTop) && (clientHeight-51)*5/7>=($(".nine-floor").offset().top-scrollTop)) {
            setTimeout(aninineflooraniv1, 300);
            function aninineflooraniv1() {
                if ($('.nine-floor-aniv1').hasClass('ani-topa-re')) {

                } else {
                    $('.nine-floor-aniv1').addClass("ani-topa-re");
                };
                setTimeout(aninineflooraniv2, 200);
                function aninineflooraniv2() {
                    if ($('.nine-floor-aniv2').hasClass('ani-topa-re')) {

                    } else {
                        $('.nine-floor-aniv2').addClass("ani-topa-re");
                    };
                    setTimeout(aninineflooraniv3, 200);
                    function aninineflooraniv3() {
                        if ($('.nine-floor-aniv3').hasClass('ani-topa-re')) {

                        } else {
                            $('.nine-floor-aniv3').addClass("ani-topa-re");
                        };
                        setTimeout(aninineflooraniv4, 200);
                        function aninineflooraniv4() {
                            if ($('.nine-floor-aniv4').hasClass('ani-topa-re')) {

                            } else {
                                $('.nine-floor-aniv4').addClass("ani-topa-re");
                            };
                        };
                    };
                };
            };
        };
        /*磁性边*/
        /*一楼*/
        if (0<=($(".first-floor").offset().top-scrollTop-51)&& 40>=($(".first-floor").offset().top-scrollTop-51)) {
            setTimeout(magnetismfloor, 0);
            function magnetismfloor() {
                if ($('.first-floor').hasClass('isscrfit')) {
                } else {
                    $('.first-floor').addClass("isscrfit");
                    
                    var locationv1 = $(".first-floor").offset().top-51;
                    $('body,html').stop();
                    $('body,html').animate({ scrollTop: locationv1 }, 500);
                    setTimeout(doisscrfit, 5000);
                    function doisscrfit(){
                        $('.first-floor').removeClass("isscrfit");
                    }
                };
                
            };
        };
        /*二楼*/
        if (-40<=($(".second-floor").offset().top-scrollTop-51)&& 40>=($(".second-floor").offset().top-scrollTop-51)) {
            setTimeout(magnetismfloor, 0);
            function magnetismfloor() {
                if ($('.second-floor').hasClass('isscrfit')) {
                } else {
                    $('.second-floor').addClass("isscrfit");
                    
                    var locationv1 = $(".second-floor").offset().top-51;
                    $('body,html').stop();
                    $('body,html').animate({ scrollTop: locationv1 }, 500);
                    setTimeout(doisscrfit, 5000);
                    function doisscrfit(){
                        $('.second-floor').removeClass("isscrfit");
                    }
                };
                
            };
        };
        /*三楼*/
        if (-40<=($(".third-floor").offset().top-scrollTop-51)&& 40>=($(".third-floor").offset().top-scrollTop-51)) {
            setTimeout(magnetismfloor, 0);
            function magnetismfloor() {
                if ($('.third-floor').hasClass('isscrfit')) {
                } else {
                    $('.third-floor').addClass("isscrfit");
                    
                    var locationv1 = $(".third-floor").offset().top-51;
                    $('body,html').stop();
                    $('body,html').animate({ scrollTop: locationv1 }, 500);
                    setTimeout(doisscrfit, 5000);
                    function doisscrfit(){
                        $('.third-floor').removeClass("isscrfit");
                    }
                };
                
            };
        };
        /*四楼*/
        if (-40<=($(".fourth-floor").offset().top-scrollTop-51)&& 40>=($(".fourth-floor").offset().top-scrollTop-51)) {
            setTimeout(magnetismfloor, 0);
            function magnetismfloor() {
                if ($('.fourth-floor').hasClass('isscrfit')) {
                } else {
                    $('.fourth-floor').addClass("isscrfit");
                    
                    var locationv1 = $(".fourth-floor").offset().top-51;
                    $('body,html').stop();
                    $('body,html').animate({ scrollTop: locationv1 }, 500);
                    setTimeout(doisscrfit, 5000);
                    function doisscrfit(){
                        $('.fourth-floor').removeClass("isscrfit");
                    }
                };
                
            };
        };
        /*五楼*/
        if (-40<=($(".fifth-floor").offset().top-scrollTop-51)&& 40>=($(".fifth-floor").offset().top-scrollTop-51)) {
            setTimeout(magnetismfloor, 0);
            function magnetismfloor() {
                if ($('.fifth-floor').hasClass('isscrfit')) {
                } else {
                    $('.fifth-floor').addClass("isscrfit");
                    
                    var locationv1 = $(".fifth-floor").offset().top-51;
                    $('body,html').stop();
                    $('body,html').animate({ scrollTop: locationv1 }, 500);
                    setTimeout(doisscrfit, 5000);
                    function doisscrfit(){
                        $('.fifth-floor').removeClass("isscrfit");
                    }
                };
                
            };
        };
        /*六楼*/
        if (-40<=($(".six-floor").offset().top-scrollTop-51)&& 40>=($(".six-floor").offset().top-scrollTop-51)) {
            setTimeout(magnetismfloor, 0);
            function magnetismfloor() {
                if ($('.six-floor').hasClass('isscrfit')) {
                } else {
                    $('.six-floor').addClass("isscrfit");
                    
                    var locationv1 = $(".six-floor").offset().top-51;
                    $('body,html').stop();
                    $('body,html').animate({ scrollTop: locationv1 }, 500);
                    setTimeout(doisscrfit, 5000);
                    function doisscrfit(){
                        $('.six-floor').removeClass("isscrfit");
                    }
                };
                
            };
        };
        /*七楼*/
        if (-40<=($(".seven-floor").offset().top-scrollTop-51)&& 40>=($(".seven-floor").offset().top-scrollTop-51)) {
            setTimeout(magnetismfloor, 0);
            function magnetismfloor() {
                if ($('.seven-floor').hasClass('isscrfit')) {
                } else {
                    $('.seven-floor').addClass("isscrfit");
                    
                    var locationv1 = $(".seven-floor").offset().top-51;
                    $('body,html').stop();
                    $('body,html').animate({ scrollTop: locationv1 }, 500);
                    setTimeout(doisscrfit, 5000);
                    function doisscrfit(){
                        $('.seven-floor').removeClass("isscrfit");
                    }
                };
                
            };
        };
        /*八楼*/
        if (-40<=($(".eight-floor").offset().top-scrollTop-51)&& 40>=($(".eight-floor").offset().top-scrollTop-51)) {
            setTimeout(magnetismfloor, 0);
            function magnetismfloor() {
                if ($('.eight-floor').hasClass('isscrfit')) {
                } else {
                    $('.eight-floor').addClass("isscrfit");
                    
                    var locationv1 = $(".eight-floor").offset().top-51;
                    $('body,html').stop();
                    $('body,html').animate({ scrollTop: locationv1 }, 500);
                    setTimeout(doisscrfit, 5000);
                    function doisscrfit(){
                        $('.eight-floor').removeClass("isscrfit");
                    }
                };
                
            };
        };
        /*九楼*/
        if (-40<=($(".nine-floor").offset().top-scrollTop-51)&& 40>=($(".nine-floor").offset().top-scrollTop-51)) {
            setTimeout(magnetismfloor, 0);
            function magnetismfloor() {
                if ($('.nine-floor').hasClass('isscrfit')) {
                } else {
                    $('.nine-floor').addClass("isscrfit");
                    
                    var locationv1 = $(".nine-floor").offset().top-51;
                    $('body,html').stop();
                    $('body,html').animate({ scrollTop: locationv1 }, 500);
                    setTimeout(doisscrfit, 5000);
                    function doisscrfit(){
                        $('.nine-floor').removeClass("isscrfit");
                    }
                };
                
            };
        };
    });
    /*根据宽度定义高度*/
    var thirdfwishvw = $(".thirdf-w-is-h").width();
    $(".thirdf-w-is-h").height(thirdfwishvw);   
    $(".thirdf-w-is-hv2").height(thirdfwishvw/5);
    $(".thirdf-w-is-hv2").width(thirdfwishvw/5);
    $(".thirdf-w-is-hv2").css({"left":thirdfwishvw/15,"top":thirdfwishvw/30});
});