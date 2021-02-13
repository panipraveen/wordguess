var item,answers,tmp;
function myFunction() {
  //alert("Page is loaded");
  answers = ["HORSE","TIGER","LION"];
  item = Math.floor(Math.random() * answers.length);
  tmp = answers[item];
  
	//document.getElementById("demo").innerHTML = item;
	document.getElementById("imgs").src = "images/image"+item+".jpg";
	for (var i = 0; i < answers[item].length; i++) {
		document.getElementById("answer_box").innerHTML += "<input type='text' maxlength=1 class='ans_box' id='ans"+i+"' style='width:50px;text-align:center;font-size:26px;text-transform:uppercase;'>&nbsp&nbsp&nbsp";
	}
	//document.getElementById("answer_box").innerHTML = answers[item].length;
	//text.innerHTML = "<input type='text' maxlength=1 class='ans_box' name='ans' style='width:50px;text-align:center;font-size:26px;text-transform:uppercase;'>&nbsp&nbsp&nbsp";
}
function check(){
	var get = '';
	//alert("i am working");
	//document.getElementById("done").innerHTML = answers[item];
	for(var j = 0;j < answers[item].length;j++){
		//ocument.getElementById("done").innerHTML += document.getElementById("ans"+j).value;
		if(document.getElementById("ans"+j).value == ''){
			document.getElementById("done").innerHTML = "Please Enter value in the above fields";
			document.getElementById("done").style.color="red";
			return;
		}
		else{
			get = get + document.getElementById("ans"+j).value;
		}
	}
	get = get.toUpperCase();
	if(tmp.localeCompare(get) == 0){
		document.getElementById("done").innerHTML = "Right Guess!";
		document.getElementById("done").style.color="green";
		setTimeout(function(){
			alert('Well Gone! Get Back in the Game!');
			window.location = 'http://www.google.com';
		}, 1000);
	}
	else{
		document.getElementById("done").innerHTML = "Oops! Wrong Guess";
		document.getElementById("done").style.color="red";
	}
	
}