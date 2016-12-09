"use strict";

class App{
	constructor(){
	this.book = [
	{
		"id": 1,
		"title": "The Notebook",
		"year": "2004",
		"author": "Nicholas Sparks",
		"characters": "Ryan Gosling, Rachel McAdams, James Garner, Gena Rowlands, James Marsden",
		"summary":"In 1940s South Carolina, mill worker Noah Calhoun and rich girl Allie are desperately in love. But her parents don't approve. When Noah goes off to serve in World War II, it seems to mark the end of their love affair. In the interim, Allie becomes involved with another man. But when Noah returns to their small town years later, on the cusp of Allie's marriage, it soon becomes clear that their romance is anything but over.",
		"photo":"img/thenotebook.jpg"
	},
	{
		"id": 2,
		"title": "The Fault in our Stars",
		"year": "2014",
		"author": "John Green",
		"characters": "Shailene Woodley, Ansel Elgort, Nat Wolff, Willem Dafoe, Laura Dern",
		"summary":"Hazel Grace Lancaster, a 16-year-old cancer patient, meets and falls in love with Gus Waters, a similarly afflicted teen from her cancer support group. Hazel feels that Gus really understands her. They both share the same acerbic wit and a love of books, especially Grace's touchstone, An Imperial Affliction by Peter Van Houten. When Gus scores an invitation to meet the reclusive author, he and Hazel embark on the adventure of their brief lives.",
		"photo":"img/thefaultinourstars.jpg"
	},
	{
		"id": 3,
		"title": "50 First Dates",
		"year": "2004",
		"author": "George Wing",
		"characters": "Adam Sandler, Drew Barrymore, Rob Schneider, Sean Astin, Lusia Strus",
		"summary":"Playboy vet Henry sets his heart on romancing Lucy, but she has short-term memory loss; she can't remember anything that happened the day before. So every morning, Henry has to woo her again. Her friends and family are very protective, and Henry must convince them that he's in it for love.",
		"photo":"img/fiftyfirstdates.jpg"
	}
	];
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML += html;
	}

	createBook(){

	let id = document.getElementById('book_id');
	let title = document.getElementById('book_title');
	let year = document.getElementById('book_year');
	let author = document.getElementById('book_author');
	let characters = document.getElementById('book_characters');
	let summary = document.getElementById('book_summary');

	let book = {
	"id": id.value,
	"title": title.value,
	"year": year.value,
	"author": author.value,
	"characters": characters.value,
	"summary": summary.value,
	};

	this.book.push(book);
	}

	deleteBook(key){
	let a = this.book;
	for(let i=0;i<a.length;i++){
		if(a[i].id == key){
		this.book.splice(i,1);
		break;
		}
	}
	this.bookLayout();
	}

	findBookById(id){
	let a = this.book;
	for (let i=0;i<a.length;i++){
		if(id==a[i].id){
			return a[i];
			}
		}
	}

	findBookByTitle(title){
	let objects = [];
	let a = this.book;
	for (let i=0; i<a.length; i++){
		let expr = (a[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
		if(expr){
			objects.push(a[i]);
		}
	}
	return objects;

	}

}

	class Component extends App{
	constructor(){
		
		super();
	}


   bookPageLanding(){
    	let html = ` 
	 <nav>
   	 <div class="nav-wrapper">
      <a href="bookLayout" class="brand-logo">Bookworms</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#" onclick="component.bookCreate()">Create Book</a></li>
        <li><a href="#" onclick-"component.bookView">Books</a></li>
      		</ul>
    	</div>
  	</nav> 
		<div id="bookRecent"></div>
		<div id="bookView"></div>
		<div id="bookList"></div> 
		<div id="bookCreate"></div> 
		

						<footer class="page-footer">
						<div class="container">
						<div class="row">
								<h5 class="white-text">Book App</h5>
								<p class="grey-text text-lighten-4"
							</div>
									<div class="footer-copyright">
										<div class="container">
										BOOKWORMS © 2016-2017 Copyright Text 
										</div>
									</div>
								</footer>	

							</div>

										</div>

		`;

		this.reRender(`
			${html}
			`,document.getElementById("app"));
		this.bookRecent();		
	}


	bookRecent(){

		let html = `

		<h5 class="center-align">Recent Books</h5>
		<div class="row">

		`
 
		let a = this.book;
		let count = 0;
		for(let i=(a.length-1);i>=0;i--){
			if(count++ === 3)break;
			html+= `

				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${a[i].photo}">
							<span class="card-title">${a[i].title}</span>
						</div>
						<div class="card-content">
							<p>${a[i].summary}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.bookView(${a[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}
        
   html += `</div>`;

		this.render(`		
			${html}
			`,document.getElementById("bookRecent"));
	}

bookView(){
	let  a = this.book;
		for(let i=(a.length-1);i>=0;i--){
		let html = `
			<h5 class="center-align">${a.title}</h5>
			<div class="row">				
				<div class="col s12 m12">
					<div class="card horizontal small">
						<div class="card-image">
							<img src="${a.photo}">
						</div>
						<div class="card-stacked">
							<div class="card-content">
								<p>${a.summary}</p>
							</div>
							<div class="card-action small">								
								<span onclick="component.deleteBook(${a.id})" class="new badge small red" data-badge-caption="">DELETE</span>
								<span onclick="component.bookLayout()" class="new badge small" data-badge-caption="">BACK TO HOME</span>
							</div>
						</div>					
					</div>				
				</div>			
			</div>
		`;

		this.reRender(`		
			${html}			
			`,document.getElementById("bookView"));
		$('#bookView').show();
		$('#bookRecent').hide();
		$('#bookList').hide();
		$('#bookCreate').hide();
		}

	}

	bookList(){
		let html = `
			<br/>
		  	<nav>
	    		<div class="nav-wrapper white">
					<form>
						<div class="input-field">				
							<input onkeyup="component.bookListItems(this.value)" id="search" type="search" placeholder="Search" required>
							<label for="search"><i class="material-icons">search</i></label>
							<i class="material-icons">close</i>
						</div>
					</form>
				</div>
			</nav>
			<br/>
		`;

		html += `
			<div class="row" id="bookListItems">
		`;
		let a = this.book;
		for(let i=0;i<a.length;i++){
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${a[i].photo}">
							<span class="card-title">${a[i].title}</span>
						</div>
						<div class="card-content">
							<p>${a[i].summary}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.bookView(${a[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}

		html += `</div>`;

		this.reRender(`
			${html}
			`,document.getElementById("bookList"));
		$('#bookList').show();
		$('#bookView').hide();
		$('#bookRecent').hide();
		$('#bookCreate').hide();		
	}

bookListItems(title){
		let html = ``;
		let a = this.findBookByName(title);
		for(let i=0;i<a.length;i++){
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${a[i].photo}">
							<span class="card-title">${a[i].name}</span>
						</div>
						<div class="card-content">
							<p>${a[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.bookView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}		
		this.reRender(`
			${html}
			`,document.getElementById("bookListItems"));
		$('#bookList').show();
		$('#bookView').hide();
		$('#bookRecent').hide();	
		$('#bookCreate').hide();
	}

bookCreate(){
		let html = `
			<div class="row">
				<form class="col s12">
				<h5 class="center-align">Create New Book</h5>
				<button onclick="component.createBook()" class="btn waves-effect waves-light">Save</button>
					<div class="row">
						<div class="input-field col s6">
							<input disabled value="${this.book.length+1}" id="book_id" type="text" class="validate">
						</div>
						<div class="input-field col s6">
							<input id="book_title" type="text" class="validate">
							<label for="book_title">TITLE</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col s6">
							<input id="book_summary" type="text" class="validate">
							<label for="book_summary">SUMMARY</label>
						</div>
						<div class="input-field col s6">
							<input id="book_photo" type="text" class="validate">
							<label for="book_photo">PHOTO</label>
						</div>
					</div>
				</form>
			</div>			
		`;

		this.reRender(`
			${html}
			`,document.getElementById("bookCreate"));
		$('#bookCreate').show();
		$('#bookList').hide();
		$('#bookView').hide();
		$('#rbookRecent').hide();	
	}
	}	

let component = new Component();
component.bookPageLanding();
