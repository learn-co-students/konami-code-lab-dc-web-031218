const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//up up down down left right left right B A

function init() {
  // Write your JavaScript code inside the init() function
  let i = 0;

  document.body.addEventListener('keydown', function(e) {
  	  let key  = parseInt(e.detail);
	  if(key === code[i]){
	  	i++;
	  	if(i === code.length){
	  		window.alert("Success!");
	  	}
	  }else{
	  	i = 0;
	  }
  })
}
