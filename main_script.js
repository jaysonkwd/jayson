window.onload = () => { 
	let main_icon = document.querySelector(".main_icon1");
	main_icon.addEventListener("click", function(){
		 window.open("projects_page.html", "_self");
	});

	let main_icon2 = document.querySelector(".main_icon2");
	main_icon2.addEventListener("click", function(){
		 window.open("about_me_page.html", "_self");
	});

	let main_icon3 = document.querySelector(".main_icon3");
	main_icon3.addEventListener("click", function(){
		 window.open("contact_page.html", "_self");
	});
}
