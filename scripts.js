// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// prepares code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
		
			if ((this.readyState == 4) && (this.status == 200)) {
				document.getElementById(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
				
			}
		
	} // end ajax.onreadystatechange

	// now that everything is set, initiate request
	ajax.send();

}


window.onload = function() {
  
  loadFileInto("ingredients.html", "column1");
  
  loadFileInto("equipment.html", "column2");
  
  loadFileInto("directions.html", "column3");
};

/* Changing Raspberry Header to a bigger font.. Got help from demos and GeeksforGeeks.org */

 var h1 = document.getElementById('h1');

 window.onload = function() {
  h1.style.fontSize = "200px";
 };

 /* change font color using click function on h1 to green */


 function myFunction() {
   document.getElementById("h1").style.color = "green";
 }


 /* dissapearing lists */
a = document.querySelector("div#column1");
a.onclick = function () {
  a.classList.toggle("iClicked");
};

/* this way works, overcomplexed it the first time */

b = document.querySelector("div#column2");
b.onclick = function () {
  b.classList.toggle("eClicked");
};

c = document.querySelector("div#column3");
c.onclick = function () {
  c.classList.toggle("dClicked");
};

/* Last prompt then done */


 h = document.getElementById("headache");
h.innerHTML = "I am not going to procastinate anymore.";



