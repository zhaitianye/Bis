	$().ready(function(){
		path = $('base').attr('href'),
		setResProp("0","code")
	});

//把当前url中的uap去掉
function changeURLPar(destiny, par, par_value){ 
	var pattern = par+'=([^&]*)'; 
	var replaceText = par+'='+par_value; 
	if (destiny.match(pattern)){ 
		var tmp = '/\\'+par+'=[^&]*/'; 
		tmp = destiny.replace(eval(tmp), replaceText); 
		return (tmp); 
	}else{ 
	if (destiny.match('[\?]')){ 
	return destiny+'&'+ replaceText; 
	}else{ 
	return destiny+'?'+replaceText; 
	} 
	} 
	return destiny+'\n'+par+'\n'+par_value; 
} 
function winopen(s){
	window.open(s)
}


function fOptRes(url, vWith, vHeight){
	var dtitle = $("#laytitle").val();
	dtitle=dtitle&&dtitle!=""?dtitle:("入园申请");
	var ua=(navigator.userAgent).toLowerCase();
	//iframe层
	if(/android|iphone|symbianos|windows phone|blackberry/i.test(ua)){
		window.location.href=url;
		var index=layer.open({
			  type: 2,
			  shadeClose: true,
			  title: dtitle,
			  shade: 0.6,
			  skin: 'info-submit',
			  content: url,
			  area:["90%","370px"]
		});
	}
	else if (/ipad|ipod/i.test(ua)) {
		var index=layer.open({
			  type: 2,
			  shadeClose: true,
			  title: dtitle,
			  shade: 0.6,
			  skin: 'info-submit',
			  content: url,
			  area:["430px","370px"]
		});
	}
	else{
		var index=layer.open({
			  type: 2,
			  shadeClose: true,
			  title: dtitle,
			  shade: 0.6,
			  skin: 'info-submit',
			  content: url,
			  area:["430px","370px"]
		});
	}
}


function fxx(url, vWith, vHeight){
	var dtitle = $("#laytitle").val();
	dtitle=dtitle&&dtitle!=""?dtitle:("EMBA报名");
	var ua=(navigator.userAgent).toLowerCase();
	//iframe层
	if(/android|iphone|symbianos|windows phone|blackberry/i.test(ua)){
		window.location.href=url;
		var index=layer.open({
			  type: 2,
			  shadeClose: true,
			  title: dtitle,
			  shade: 0.6,
			  skin: 'info-submit',
			  content: url,
			  area:["90%","370px"]
		});
	}
	else if (/ipad|ipod/i.test(ua)) {
		var index=layer.open({
			  type: 2,
			  shadeClose: true,
			  title: dtitle,
			  shade: 0.6,
			  skin: 'info-submit',
			  content: url,
			  area:["430px","370px"]
		});
	}
	else{
		var index=layer.open({
			  type: 2,
			  shadeClose: true,
			  title: dtitle,
			  shade: 0.6,
			  skin: 'info-submit',
			  content: url,
			  area:["430px","370px"]
		});
	}
}




/**
 * 用户名的显示
 * 	前两位***后两位
 * @param str
 * @returns {String}
 */
function intercept(nick,name,mobile,email){
	var stred = "";
	if(nick != null && nick.length > 0){
		stred = nick;
	}else if(name != null && name.length > 0){
		stred = name;
	}else if(mobile != null && mobile.length > 0){
		stred = mobile;
	}else{
		stred = email;
	}
	stred = stred.substring(0, 2)+"***"+stred.substring(stred.length-2, stred.length);
	return stred;
}


var trim=function(s){
    return s.replace(/(^\s*)|(\s*$)/g, "");
 }
function loginout(){

		jQuery.cookie("username",null,{expires:30});
		jQuery.cookie("password",null,{expires:30});
		jQuery.cookie("kyq.mc",null,{expires:30});
	
		window.location.href="<%=path %>/logout.do";
	}

function Nulls(snull) {
	return (snull == "" || snull == undefined|| snull == 'undefined' || snull == null) ? "" : snull;
}

function isNull(a){
	if (typeof(a) == "undefined" || typeof(a) == "null" || a=="" || a==null)
		return true;
	return false;
}

function uuid(){
	var len=32;//32长度
	var radix=16;//16进制
	var chars='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');var uuid=[],i;radix=radix||chars.length;if(len){for(i=0;i<len;i++)uuid[i]=chars[0|Math.random()*radix];}else{var r;uuid[8]=uuid[13]=uuid[18]=uuid[23]='-';uuid[14]='4';for(i=0;i<36;i++){if(!uuid[i]){r=0|Math.random()*16;uuid[i]=chars[(i==19)?(r&0x3)|0x8:r];}}}
	return uuid.join('');
} 




/**
 * 
 * @param gift	红包的id,name,price,maximum_units
 * @param user	判断是用户中心使用红包，还是详细页内的选择红包
 * @returns {Array}
 */
function giftQuota(gift,user){
	
	var num= 0;
	var money = 0;
	var leastInvestMoney = 0;
	var leastInvestMoneyTemp = 0;
	var giftIds = "";
	var retQuota=[];
	for(var i = 0 ;i < gift.length ; i ++){
		if((gift[i].checked == true) || user == 'user'){
			var gilf = gift[i].value.split("`");
			money = parseFloat(money) + parseFloat(gilf[2]);
			var gilf3=Number(gilf[3]);
			if( gilf3 != 0){
				leastInvestMoneyTemp = gilf[2]/gilf3;
				leastInvestMoneyTemp = Math.round(leastInvestMoneyTemp*100)/100;
	    		
				
				if(user != 'user')
					leastInvestMoney = parseFloat(leastInvestMoney) + parseFloat(leastInvestMoneyTemp);
				else
					leastInvestMoney = parseFloat(leastInvestMoneyTemp);
				
				var tmpMoney=parseInt((leastInvestMoney+99.99)*100);
		   		tmpMoney=parseInt(tmpMoney/10000);
		   		tmpMoney*=10000;
		   		
		   		leastInvestMoney = tmpMoney;
		   		leastInvestMoney /= 100;
			}
			
			leastInvestMoneyTemp = 0;
			num = num +1;
			giftIds = giftIds + "," + gilf[0];
			
			retQuota.push({
				"giftIds":gilf[0],
				"num":num,
				"money":money.toFixed(2),
				"leastInvestMoney":leastInvestMoney.toFixed(2)
			})
		}
		//console.log("本次投标使用"+num+"个红包共计"+money+"元,至少投资"+leastInvestMoney+"元红包被激活");
		$('span[name=quota]').eq(i).html(leastInvestMoney);
		
		if(user != 'daiinfo')
			leastInvestMoney = 0;
	}
	return retQuota;
}

 
var path = objmsgs($("base").attr("href")); 
function objmsgs(msg){return (msg == "" || msg == undefined || msg == null) ? "" : msg;}
/**
 * 地区
 * @param value
 * @param id
 */
function setArea(value, id) {
	var Str = ("请选择");
	var nextId = "";
	if(id=="province") nextId = "city";
	if(id=="city"){
		nextId = "county";
		$("#city,#county").parents(".sel").find(".s-input span").html("请选择");
		$("#county").html("");
	}
	var html = '<li value="0">='+Str+'=</li>';
	if (value != 0) {
		$.ajax({
			url : path+"/comm/chinaArea.do",
			type : 'POST',
			cache : false,
			async : false,
			data:{
				"parentid":value
			},
			dataType : 'json',
			success : function(retdt) {
				var arealst = retdt.obj;
				for ( var i = 0; i < arealst.length; i++) {
					if (arealst[i].parentid == value) {
						html += "<li value='" + arealst[i].id + "' onclick=setArea(\'" + arealst[i].id + "\',\'"+nextId+"\')>" + arealst[i].areaname + "</li>";
					}
				}
				$('#' + id).html(html);
			}
		});
	}
};


function setResProp(value, id) {
	var dfStr = "请选择三级分类";
	var nextId = "";
	if(id=="code"){
		nextId = "code2";
		dfStr = "请选择一级分类";
	}
	if(id=="code2"){
		nextId = "code3";
		$("#code2").parents(".sel").find(".s-input span").html("请选择二级分类");
		$("#code3").parents(".sel").find(".s-input span").html("请选择三级分类");
		$("#code3").html("");
		dfStr = "请选择二级分类";
	}
	var html = '<li value="">='+dfStr+'=</li>';
	
	//回显使用
	var rpCode = $("#rpCode").val();
	var code , code2, code3;
	if(!isNull(rpCode)){
		if(rpCode.length>=1)
			code = rpCode.substr(0,1);
		if(rpCode.length>=4)
			code2 = rpCode.substr(0,4);
		if(rpCode.length>=7)
			code3 = rpCode.substr(0,7);
	}
	
	
	if (this.ajaxRequest_ != undefined && this.ajaxRequest_.readyState < 4) {
		layer.alert("请稍候",{yes:function(app){ layer.close(app); }});
		return false;
	}
	this.ajaxRequest_ = $.ajax({
		url : path+"/comm/resProp.do",
		type : 'POST',
		cache : false,
		async : false,
		data:{
			"parentcode":value
		},
		dataType : 'json',
		success : function(retdt) {
			var proplst = retdt.obj;
			for ( var i = 0; i < proplst.length; i++) {
				if (proplst[i].parent_code == value) {
					html += "<li value='" + proplst[i].code + "' onclick=setResProp(\'" + proplst[i].code + "\',\'"+nextId+"\')>" + proplst[i].name + "</li>";
				}
				
				
				if(!isNull(code) && proplst[i].code == code){
					$("div[name='code'] span").html(proplst[i].name);
					setResProp(code, 'code2');
				}
				if(!isNull(code2) && proplst[i].code == code2){
					$("div[name='code2'] span").html(proplst[i].name);
					setResProp(code2, 'code3');
				}
				if(!isNull(code3) && proplst[i].code == code3){
					$("div[name='code3'] span").html(proplst[i].name);
				}
			}
			$('#' + id).html(html);
		}
	});
};



/**
 * 
 * @param demo 结果集 遍历
 * @param lstId 你要遍历
 * @param cl
 * @param tb
 * @param st
 * @param num
 * @param size
 */
function queryInfo(demo, lstId, cl, tb, st, num, size){
	
	if(!isNull(cl) && !isNull(tb) && !isNull(st)){
		
		demoS = demo; lstIdS = lstId; clS = cl; tbS = tb; stS = st;
		
		$.ajax({
			url:path+"/comm/qsql.do",
			type:"post",
			data:{
				"cl":cl,
				"tb":tb,
				"st":st,
				"pageNum":num,
				"pageSize":size
			},
			dataType:"json",
			success:function(retdt){
				
				var pageNum = retdt.attributes.pageNum;
				var pageSize = retdt.attributes.pageSize;
				var totalCount = retdt.attributes.totalCount;
				
				$("#pageNum").val(pageNum);
				$("#pageSize").val(pageSize);
				$("#totalCount").val(totalCount);
				
				var list = retdt.attributes.datalist;
				
				
				if(!isNull(list) &&  list.length > 0){
		
					var gettpl = $('#'+demo).html();   //获取拼接部分的内容  
					var result = laytpl(gettpl).render(list);
					$("#"+lstId).html( result );
					
					
					if(typeof initPage === "function")
						initPage();
					
				}else{
					var lstHtml = "<p class='pd-20 text-center '><img src='"+path+"/img/m/user/icon-sign.png' alt=''><span class='pl-10'>暂无数据</span></p>";
					$("#"+lstId).html(lstHtml);
				}
			}
		})
	}
}







/* 
 * formatMoney(s,type) 
 * 功能：金额按千位逗号分割 
 * 参数：s，需要格式化的金额数值. 
 * 参数：type,判断格式化后的金额是否需要小数位. 
 * 返回：返回格式化后的数值字符串. 
 */  
function formatMoney(s, type) {  
    if (/[^0-9\.]/.test(s))  
        return "0";  
    if (s == null || s == "")  
        return "0";  
    s = s.toString().replace(/^(\d*)$/, "$1.");  
    s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");  
    s = s.replace(".", ",");  
    var re = /(\d)(\d{3},)/;  
    while (re.test(s))  
        s = s.replace(re, "$1,$2");  
    s = s.replace(/,(\d\d)$/, ".$1");  
    if (type == 0) {// 不带小数位(默认是有小数位)  
        var a = s.split(".");  
        if (a[1] == "00") {  
            s = a[0];  
        }  
    }  
    return s;  
}  



/**
 * 
 * @param phone
 * @returns {Boolean}
 */
function testMoney(money){
	var r = new RegExp("^\\d+(\\.\\d+)?$");
	if(r.test(money))
		return true;
	else
		return false;
}


/*

 * 验证手机号
 */
function testPhone(phone){
	var partten = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
		///^0?(13[0-9]|15[012356789]|17[678]|18[012356789]|14[57]|)[0-9]{8}$/;
	
	if (partten.test(phone)) 
		return true;
	else
		return false;
}




/*
 * 验证邮箱
 */
function testEmail(email){
	var partten = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (partten.test(email)) 
		return true;
	else
		return false;
	}



function checkDate(strInputDate) {
	// 定义一个月份天数常量数组
	var DA = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
 

	// 分解出年月日
	var arrD = strInputDate.split("-");
	
	if (arrD.length != 3)
		return false;
	y = parseInt(arrD[0], 10);
	m = parseInt(arrD[1], 10);
	d = parseInt(arrD[2], 10);
 
	// 判断年月日是否是数字
	if (isNaN(y) || isNaN(m) || isNaN(d))
		return false;

	// 判断月份是否在1-12之间
	if (m > 12 || m < 1)
		return false;
	// 判断是否是闰年
	if (isLoopYear(y))
		DA[2] = 29;

	// 判断输入的日是否超过了当月月份的总天数。
	if (d > DA[m])
		return false;

	// 各种条件都验证了，则应该是一个合法的日期了。
	// 如果要对日期进行一次格式化，则可以在这里进行处理了，下面格式化成数据库识别的日期格式 yyyy-MM-dd
	// str = y + "-" + (m<10?"0":"") + m + "-" + (d<10?"0":"") + d;
	str = y + "-" + (m < 10 ? "0" : "") + m + "-" + (d < 10 ? "0" : "") + d;
//	alert(str)
	return true;
}

function isLoopYear(theYear) {
  return (new Date(theYear, 1, 29).getDate() == 29);
}


/**
 * 解决 ie，火狐浏览器不兼容new Date(s)
 * @param strDate
 * 返回 date对象
 * add by zyf at 2015年11月5日
 */
var isFirefox=navigator.userAgent.toUpperCase().indexOf("FIREFOX")?true:false;//是否是火狐浏览器
function getStrDate(strDate){
	//切割年月日与时分秒称为数组
    var s = strDate.split(" "); 
    var s1 = s[0].split("-"); 
    var s2 = s[1].split(":");
    if(s2.length==2){
        s2.push("00");
    }
    return isFirefox?new Date(s1[0],s1[1]-1,s1[2],s2[0],s2[1],s2[2]):new Date(strDate);
}
function monthDiff(d1, d2) {
	var months;
	months = (d2.getFullYear() - d1.getFullYear()) * 12;
	months -= d1.getMonth() + 1;
	months += d2.getMonth();
	return months <= 0 ? 0 : months;
}
function countTimeLength(interval, date1, date2) {  
    var objInterval = {'D' : 1000 * 60 * 60 * 24, 'H' : 1000 * 60 * 60, 'M' : 1000 * 60, 'S' : 1000, 'T' : 1};  
    interval = interval.toUpperCase();  
    var dt1 = Date.parse(date1.replace(/-/g, "/"));  
    var dt2 = Date.parse(date2.replace(/-/g, "/"));  
    try{  
        return ((dt2 - dt1) / objInterval[interval]);//保留两位小数点  
    }catch (e){  
        return e.message;  
    }  
} 
function getMonthAndDay(startdate, enddate) {  
	var startd=getStrDate(startdate);
	var endd=getStrDate(enddate);
	var starts=getStrDate(startdate).Format("yyyy-MM-dd");
	var ends=getStrDate(enddate).Format("yyyy-MM-dd");
	
	var month=monthDiff(startd,endd)
	var dates=countTimeLength("D",startdate,enddate)
	var hov=countTimeLength("H",startdate,enddate)
	var fen=countTimeLength("M",startdate,enddate)
	var mao=countTimeLength("S",startdate,enddate)

	dates=parseInt(dates);
	hov=parseInt(hov);
	fen=parseInt(fen);
	mao=parseInt(mao);
	
	var a={  
        "mounth" : month,  
        "day" : dates,
        "hov":hov,
        "fen":fen,
        "mao":mao
    };  
   return a
} 
function getMd(start,end,s){
	var getM=getMonthAndDay(start, end)
	var nowT=new Date().Format("yyyy-MM-dd hh:mm:ss");
	var tmes;
	if(nowT===start){
		tmes=end;
	}else if(nowT===end){
		tmes=start;
	}
	////console.log(tmes)
	var tmes1=tmes.substr(5,5);
	var mounth=getM.mounth
	var days=getM.day;
	var hov=getM.hov;
	var fen=getM.fen;
	var mao=getM.mao;
	if(mounth>0){
		if(s&&s>0){
			var dayData = ("个月");
			return mounth+dayData;
		}else{
			if(mounth>12){
				return tmes1;
			}else{
				var dayData = ("个月前");
				return mounth+dayData;
			}
		}
	}else if(days>0){
		if(s&&s>0){
			var dayData = ("天");
			return days+dayData;
		}else{
			var dayData = ("天前");
			return days+dayData;
		}
	}else if(hov>0){
		if(s&&s>0){
			var dayData = ("小时");
			return hov+dayData;
		}else{
			var dayData = ("小时前");
			return hov+dayData;
		}
	}else if(fen>0){
		if(s&&s>0){
			var dayData = ("分钟");
			return fen+dayData;
		}else{
			var dayData = ("分钟前");
			return fen+dayData;
		}
	}else if(mao>0){
		if(s&&s>0){
			var dayData = ("秒");
			return mao+dayData;
		}else{
			var dayData = ("秒前");
			return mao+dayData;
		}
	}else{
		if(s&&s>0){
			var dayData = ("2个月");
			return dayData;
		}else{
			var dayData = ("1秒前");
			return dayData;
		}
	}
}





Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth() + 1, // month
		"d+" : this.getDate(), // day
		"h+" : this.getHours(), // hour
		"m+" : this.getMinutes(), // minute
		"s+" : this.getSeconds(), // second
		"q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
		"S" : this.getMilliseconds()
		// millisecond
	}
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4
						- RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1
							? o[k]
							: ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
} 

function checkMoney(obj) {  
     //检查是否是非数字值  
     if (isNaN(obj.value)) {  
         obj.value = "";  
     }  
     if (obj != null) {  
         //检查小数点后是否对于两位http://blog.csdn.net/shanzhizi  
         if (obj.value.toString().split(".").length > 1 && obj.value.toString().split(".")[1].length > 3) {  
        	 var Alert = ("小数点后多于3位！");
             alert(Alert);  
             obj.value = "";  
         }  
     }  
 } 
 
 function dfmt(s, n)
{
   n = n > 0 && n <= 20 ? n : 2;
   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
   var l = s.split(".")[0].split("").reverse(),
   r = s.split(".")[1];
    t = "";
   for(i = 0; i < l.length; i ++ )
   {
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "" : "");
   }
   return t.split("").reverse().join("") + "." + r;
}
 
 
 function dmoney(s, n)
{
   n = n > 0 && n <= 20 ? n : 2;
   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
   var l = s.split(".")[0].split("").reverse(),
   r = s.split(".")[1];
   t = "";
   for(i = 0; i < l.length; i ++ )
   {
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
   }
   return t.split("").reverse().join("") + "." + r;
}

 
 function ipmt(a, r, m){
 	return (a*r * Math.pow((1+r),m))/( Math.pow((1+r),m)-1);
 }
 
 //函数名：CheckDateTime  
//功能介绍：检查是否为日期时间  
function CheckDateTime(str) {
	var reg = /^(\d+)-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
	var r = str.match(reg);
	if (r == null)
		return false;
	r[2] = r[2] - 1;
	var d = new Date(r[1], r[2], r[3], r[4], r[5], r[6]);
	if (d.getFullYear() != r[1])
		return false;
	if (d.getMonth() != r[2])
		return false;
	if (d.getDate() != r[3])
		return false;
	if (d.getHours() != r[4])
		return false;
	if (d.getMinutes() != r[5])
		return false;
	if (d.getSeconds() != r[6])
		return false;
	return true;
}

/**  
判断输入框中输入的日期格式为yyyy-mm-dd和正确的日期  
*/  

function IsDate(sm, mystring) {
	var reg = /^(\d{4})-(\d{2})-(\d{2})$/;
	var str = mystring;
	var arr = reg.exec(str);
	if (str == "")
		return true;
	if (!reg.test(str) && RegExp.$2 <= 12 && RegExp.$3 <= 31) {
		var Alert = ("请保证");
		var Content = ("中输入的日期格式为yyyy-mm-dd或正确的日期!");
		alert(Alert + sm + Content);
		return false;
	}
	return true;
}

/**  
*/  

function fmtDate(strDate) {
	var arr1 = strDate.split("-");  
	return new Date(arr1[0],parseInt(arr1[1])-1,arr1[2]); 
}


 

function formatSeconds(value) { 

	var symbol = "";
	
	var theTime = parseInt(value);// 秒 
	if (theTime<0){
		symbol = "-";
		theTime*=-1;
	}
	
	
	var theTime1 = 0;// 分 
	var theTime2 = 0;// 小时 
	var theTime3 = 0;//天
	
	if (theTime>=86400){
		theTime3 = parseInt(theTime/86400);
		theTime = parseInt(theTime%86400)
	}
	// alert(theTime); 
	if(theTime > 60) { 
		theTime1 = parseInt(theTime/60); 
		theTime = parseInt(theTime%60); 
		// alert(theTime1+"-"+theTime); 
		if(theTime1 > 60) { 
			theTime2 = parseInt(theTime1/60); 
			theTime1 = parseInt(theTime1%60); 
		} 
	} 
	var result = symbol; 
	if (theTime3 > 0){
		var Day = ("天");
		result = result + parseInt(theTime3)+Day; 
	}
	if(theTime2 > 0) { 
		var Day = ("时");
		result = result + parseInt(theTime2)+Day; 
	}
	if(theTime3==0 && theTime1 > 0) { 
		var Day = ("分");
		result = result+parseInt(theTime1)+Day; 
	} 
	if(theTime3==0 && theTime2==0 && theTime > 0) {
		var Day = ("秒");
		result = result+parseInt(theTime)+Day; 
	} 
	return result; 
}


//对Date的扩展，将 Date 转化为指定格式的String
//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
//例子： 
//(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
//(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function (fmt) { //author: meizz 
 var o = {
     "M+": this.getMonth() + 1, //月份 
     "d+": this.getDate(), //日 
     "h+": this.getHours(), //小时 
     "m+": this.getMinutes(), //分 
     "s+": this.getSeconds(), //秒 
     "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
     "S": this.getMilliseconds() //毫秒 
 };
 if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
 for (var k in o)
 if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
 return fmt;
}
//将数字转换为金额
function toDecimal2(x) {    
    var f = parseFloat(x);    
    if (isNaN(f)) {    
        return false;    
    }    
    var f = Math.round(x*100)/100;    
    var s = f.toString();    
    var rs = s.indexOf('.');    
    if (rs < 0) {    
        rs = s.length;    
        s += '.';    
    }    
    while (s.length <= rs + 2) {    
        s += '0';    
    }    
    return s;    
} 
