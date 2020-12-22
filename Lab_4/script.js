var b = document.getElementById("button");

b.onclick = function() {
	
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	var x1 = document.getElementById("res1");
	var x2 = document.getElementById("res2");
	
	var D = Math.pow(b, 2) - 4 * a * c;
		if (D>0){
		var k1 = (-b - Math.sqrt(D))/(2*a);
		var k2 = (-b + Math.sqrt(D))/(2*a);
		x1.textContent = k1;
		x2.textContent = k2;
		}
		else if (D==0){
			var k1 = (-b/(2*a));
			x1.textContent = k1;
			x2.textContent = 'только один корень';
		}
		else if (D<0) alert('Уравнение не имеет корней');
}