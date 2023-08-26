function fullscreen(id){
	var element = document.getElementById(id);
	if(element.wozRequestFullScreen){
		element.wozRequestFullScreen();
	}else if (element.webkitRequestFullScreen){
		element.webkitRequestFullScreen();
	}
}

