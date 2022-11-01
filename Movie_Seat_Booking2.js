/*
获取用户选择的电影，获取用户选择的座位
添加适当的效果，并且实时计算价格并输出到网页的对应内容
*/ 

/*
    获取用户获得的电影，我们默认设置为第一个，当哪一个的状态改变时，就设置为获取那一个
*/
// 设置cookie 计数，计数值，价格，价格值，cookie过期时间(分钟)
function set_cookie(count,count_value,price,price_value,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = count+"="+count_value+"."+price+"="+price_value+"."+ expires;	//"Thu, 01 Jan 1970 00:00:00 GMT"
}
var arr = [1,2,2,3,0,0,1];	//表示用户选座结果
set_cookie("count",arr,"price",200,10);
console.log(document.cookie);

// get_cookie() 
function get_cookie(count_value){
	if(document.cookie.length > 0){
		console.log("cookie已经设置");
	}else{
		console.log("cookie未设置");
	}
}
function gradeChange(){ // 获取用户当前选择的电影
	var str = document.cookie;
	var start = str.indexOf("e=");
	var end = str.indexOf("0.e");
	var new_str = str.substring((start+2),(end+1));
	console.log("start = "+start+" end = "+ end);
	console.log(new_str);
}

gradeChange();