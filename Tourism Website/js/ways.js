	window.onload = function() {
			changeTheSection_2();
		}
		//section的点击事件
		function changeTheSection_2() {
			var nav_1 = document.getElementById('sec_1');
			var nav_2 = document.getElementById('sec_2');
			var nav_3 = document.getElementById('sec_3');
			var nav_4 = document.getElementById('sec_4');
			var first=document.getElementById('firstSec');
			var second=document.getElementById('secondSec');
			var third=document.getElementById('thirdSec');
			var four=document.getElementById('fourSec');
			nav_1.onclick = function() {
				second.style.display='none';
				third.style.display='none';
				four.style.display='none';
				first.style.display='block';
			}
			
			nav_2.addEventListener('click',function() {
				first.style.display='none';
				third.style.display='none';
				four.style.display='none';
				second.style.display='block';
			},false);
			nav_3.onclick = function() {
				second.style.display='none';
				first.style.display='none';
				four.style.display='none';
				third.style.display='block';
			}
			nav_4.onclick = function() {
				second.style.display='none';
				third.style.display='none';
				first.style.display='none';
				four.style.display='block';
			}
		}