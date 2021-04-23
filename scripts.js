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







/* object constructor */

function Recipe(recipeName, imageURL, contributorName, ingredientFilename, directionsFilename, equipmentFilename) {
  this.name = recipeName;
  this.imgsrc = imageURL; 
  this.contributor = contributorName;
  this.ingFile = ingredientFilename;
  this.dirFile = directionsFilename;
  this.equipFile = equipmentFilename;
  
  this.displayRecipe = function() {
    document.querySelector("#h1").innerHTML = this.name;
    
     document.querySelector("h3").innerHTML = "contributed by: " + this.contributor;
   document.querySelector("img").src = this.imgsrc;
    
    
     loadFileInto(this.ingFile, "column1");
      loadFileInto(this.equipFile, "column2");
      loadFileInto(this.dirFile, "column3");
    
  }
  
  
  
  
  
 
  
  
  
}

 RaspberryStreuselTart = new Recipe("Raspberry Streusel Tart", 
                                   "https://source.unsplash.com/2nAR96Mil_c",
                                   "Jack",
                                   "ingredients.html",
                                   "equipment.html",
                                    "directions.html"
                                    
                                   );



chicken = new Recipe("Cheesy Buffalo Chicken Dip", 
 	"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2143192.jpg&w=596&h=596&c=sc&poi=face&q=85",
 	"Edison Soliman",
 	"chicken-ingredients.html",
 	"chicken-equipment.html",
 	"chicken-directions.html"
 );


pasta = new Recipe("Spaghetti Aglio e Olio",
  "https://media4.s-nbcnews.com/i/newscms/2017_41/1288319/20170828_20170822_11424_pastalikeapro_scottconant_styleddishes_0030_6aa19146b263f4803e6a06c1798de5a0.jpg",
  "Bruno",
  "pasta-ingredients.html",
  "pasta-equipment.html",
  "pasta-directions.html"
  );



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



