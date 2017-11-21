
//封装一个颜色随机的效果
		function randomColor(){
		var color = "rgb("
		var r = parseInt(Math.random()*256);
		var g = parseInt(Math.random()*256);
		var b = parseInt(Math.random()*256);
		color = color+r+","+g+","+b+")";
		return color;	
	}
//创建一个制造烟花的构造函数，第一个参数为元素，第二参数为初始x轴位置，第三参数为y轴位置。
	function Fireworks(Div,x,y){		
		Div.style.backgroundColor=randomColor();   //给烟花添加背景色
		Div.className="firworks";					//添加一个class
		document.body.appendChild(Div);
		Div.style.left=x+"px";						//把鼠标点击坐标给div
		Div.style.top=y+"px";
		var speedX = (parseInt(Math.random()*2) == 0 ? 1 : -1)*parseInt(Math.random()*16 + 1);  //三目运算符随机移动方向，概率50%,为1时往正方向移动，负1时往反方向移动第二个随机数随机速度快慢
		var speedY = (parseInt(Math.random()*2) == 0 ? 1 : -1)*parseInt(Math.random()*20 + 1);
		this.move=function(){
			var i = 3;
			var time1=setInterval(function(){
				i++;
				Div.style.left=Div.offsetLeft+speedX+"px";			
				Div.style.top=Div.offsetTop+speedY+i+"px";   //当i+speedY>0时,烟花朝下运动。
				if(Div.offsetLeft+Div.offsetWidth>window.innerWidth|| Div.offsetLeft<2 || Div.offsetTop+Div.offsetHeight>window.innerHeight || Div.offsetTop<2 ){
					Div.remove();		//移动出可视区域记得删除div和清除定时器
					clearInterval(time1);
				}
			},30);
		}		
	}
document.onclick=function (e){
	var evt=e||window.event;	//兼容性处理
	for(var i=0;i<80;i++){		//随机烟花的数量
		var div=document.createElement("div");
		var b=new Fireworks(div,evt.pageX,evt.pageY);
		b.move();
	}
}
