   //下一页 
		function next_pic(wrap) { 
			index++; 
			if (index > 4) {
				index = 0; 
			} 
			showCurrentDot(wrap);
			var newLeft;
			if (wrap.style.left === "-7200px") {
				newLeft = -2400;
			} else {
				newLeft = parseInt(wrap.style.left) - 1200; 
			}
			wrap.style.left = newLeft + "px";
		} 
		// 上一页
		function prev_pic(wrap) {
			index--; 
			if (index < 0) {
				index = 4;
			} 
			showCurrentDot(wrap);
			var newLeft;
			if (wrap.style.left === "0px") {
				newLeft = -4800; } else {
					newLeft = parseInt(wrap.style.left) + 1200;
				} 
				wrap.style.left = newLeft + "px";
		} 
		// 定时器 --- 自动播放
		let timer = null;
		function autoPlay(wrap) {
			timer = setInterval(function () {
				next_pic(wrap); }, 2000);
		}
		// 圆点导航
		let index = 0;
		let dots = document.getElementsByTagName("span");
		function showCurrentDot(wrap) {
			 len = dots.length
			for (var i = 0; i < len; i++) {
				dots[i].className = "";
			}
			dots[index].className = "on";
		}
		for (var i = 0, len = dots.length; i < len; i++) {
			(function (i) {
				let wrap = document.querySelector(".wrap");
				dots[i].onclick = function () {
					var dis = index - i;
					if (index == 4 && parseInt(wrap.style.left) !== -6000) {
						dis = dis - 5; 
					}
					if (index == 0 && parseInt(wrap.style.left) !== -1200) {
						dis = 5 + dis;
					}
					wrap.style.left = (parseInt(wrap.style.left) + dis * 1200) + "px";
					index = i;
					showCurrentDot(wrap);
				}
				})(i);
		} 
		function init() {
			var wrap = document.querySelector(".wrap");
			var next = document.querySelector(".arrow_right");
			var prev = document.querySelector(".arrow_left");
			// 当鼠标点击上下箭头
			next.onclick = function () {
				next_pic(wrap);
			}
			prev.onclick = function () {
				prev_pic(wrap);
			}
			//启动定时器 
			autoPlay(wrap);
			// 鼠标滑过 取消自动播放
			var container = document.querySelector(".imgShow");
			container.onmouseenter = function () {
				clearInterval(timer);
			}
			container.onmouseleave = function () {
				autoPlay(wrap);
			}
			}
		window.addEventListener('load', init, false);s
		