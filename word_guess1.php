 <html>
	<head>
		
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
	<!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	  <link rel="stylesheet" href="style.css">
	  
	  <script src="main.js"></script>

	</head>
	<body onload="myFunction()">
	
		<h3>Guess the Word from the given Image</h3><br>
		<div id="demo"></div>
		<img id="imgs" style="height:50%;width:40%;border-radius:10px;"></img><br>
		<h5>Enter Your Answer Below</h5>
		<div id="answer_box"></div><div id="done"></div><br>
		<button type="button" id="check" onclick="check()" class="waves-effect waves-light btn-large">Check</button>
	</body>
</html>