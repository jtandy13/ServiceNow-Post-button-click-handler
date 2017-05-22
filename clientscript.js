function onLoad() {
	var workNotesDiv = document.querySelector(".comment-box");
	var buttons = workNotesDiv.querySelectorAll("button");

	var postBtn;
	for (var i = 0; i < buttons.length; i++){
		if(buttons[i].firstChild.nodeValue.includes("Post"))
			postBtn = buttons[i];
	}
	if(postBtn){
		postBtn.addEventListener("click", function(){
			// Add in useful scripting here . . .
		});
	}
}
