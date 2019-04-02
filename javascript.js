document.getElementById("navigation").onmouseover = function(event){
	var tar = event.target;
	if(tar.className == "menu-item"){
		let s = tar.getElementsByClassName("submenu");
		closeMenu();
		s[0].style.display = 'block';
	}
}

function closeMenu(){
	var subm = document.getElementsByClassName('submenu');
	for(var i = 0; i < subm.length; i++){
		subm[i].style.display="none";
	}
}

document.onmouseover =  function(event){
	var target = event.target;
	console.log(event.target);
	if(target.className != 'menu-item' && target.className != 'submenu'){
		closeMenu();
	}
}