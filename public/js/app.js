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
		},
		{
			"id": 4,
			"title": "A walk to remember",
			"year": "2002",
			"author": "Nicholas Sparks",
			"characters": "Mandy Moore, Shane West, Daryl Hannah, Peter Coyote, Lauren German",
			"summary":"Playboy vet Henry sets his heart on romancing Lucy, but she has short-term memory loss; she can't remember anything that happened the day before. So every morning, Henry has to woo her again. Her friends and family are very protective, and Henry must convince them that he's in it for love.",
			"photo":"img/awalktoremember.jpg"
		},
		{
			"id": 5,
			"title": "Love, Rosie",
			"year": "2014",
			"author": "Cecelia Ahern",
			"characters": "Lily Collins, Sam Claflin, Christian Cooke, Suki Waterhouse, Tamsin Egerton",
			"summary":"Since the moment they met at age 5, Rosie and Alex have been best friends, facing the highs and lows of growing up side by side. A fleeting shared moment, one missed opportunity, and the decisions that follow send their lives in completely different directions. As each navigates the complexities of life, love, and everything in between, they always find their way back to each other - but is it just friendship, or something more?",
			"photo":"img/loverosie.jpg"
		},
		{
			"id": 6,
			"title": "Me Before You",
			"year": "2016",
			"author": "Jojo Moyes",
			"characters": "Emilia Clarke, Sam Claflin, Matthew Lewis, Jenna Coleman, Charles Dance",
			"summary":"Me Before You. Louisa Clark is an ordinary girl living an exceedingly ordinary life—steady boyfriend, close family—who has barely been farther afield than her tiny village. She takes a badly needed job working for ex-Master of the Universe Will Traynor, who is wheelchair-bound after an accident.",
			"photo":"img/mebeforeyou.jpg"
		}
		];
		}

		render(html,component){
			
			component.innerHTML = html;
		}

		reRender(html,component){
			
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
		let r = this.book;
		for(let i=0;i<r.length;i++){
			if(r[i].id == key){
			this.book.splice(i,1);
			break;
			}
		}
		this.pageLayout();
		}

		findBookById(id){
		let r = this.book;
		for (let i=0;i<r.length;i++){
			if(id==r[i].id){
				return r[i];
				}
			}
		}

		findBookByTitle(title){
		let objects = [];
		let r = this.book;
		for (let i=0; i<r.length; i++){
			let expr = (r[i].title.toUpperCase().indexOf(title.toUpperCase()) > -1);
			if(expr){
				objects.push(r[i]);
			}
		}
		return objects;

		}

	}
	class Component extends App{
		constructor(){

			super();
		}
			landingPage(){
			let html = `


				<nav class="green accent-4">
					<div class="nav-wrapper">
						<a href="app.html" class="brand-logo">Bookworms <img src="img/book.jpg" height="30" width="40"></i></a>
							<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
							<ul class="right hide-on-med-and-down">
							<li><a href="#" onclick="component.bookList()" >Books</a></li>
							<li><a href="#" onclick="component.bookCreate()">Create</a></li>
							</ul>
							<ul class="side-nav" id="mobile-demo">
							<li><a href="#" onclick="component.bookList()" >Books</a></li>
							<li><a href="#" onclick="component.bookCreate()">Create</a></li>
							</ul>
						</div>
					</nav>

					<div id="bookRecent"></div>
					<div id="bookView"></div>
					<div id="bookList"></div>
					<div id="bookCreate"></div>

				<div class="carouselLandingPage">
					<h1 class="green accent-4" "green-text"><center>Best Books</center margin="10px"></h1>
					 <div class="carousel">
					    <a class="carousel-item" href="#one!"><img src="img/awalktoremember.jpg"></a>
					    <a class="carousel-item" href="#two!"><img src="img/thefaultinourstars.jpg"></a>
					    <a class="carousel-item" href="#three!"><img src="img/thenotebook.jpg"></a>
					 </div>
					 <br>
				<center><a class="waves-effect waves-light btn" href="#" onclick="component.bookRecent()">Recent Book</a></center>
					  

					<hr>
					<footer class="light-green accent-4">
					<div class="footer">
						<div class="row">
							<div class="col 16 s12">
				<p class="black-text text-lighten-4"><center>“Books are the ultimate Dumpees: put them down and they’ll wait for you forever; <br> pay attention to them and they always love you back.” <br>
					― John Green, An Abundance of Katherines"</center></p>
					<center>© 2016 Copyright Text</center>
							</div>
						</div>
				</div>
				</footer>			


			`;
			this.render(`
				${html}

				`,document.getElementById("app"));		
		}

			bookRecent(){
			
			let html = `
				<h5 class="center-align">Recent Added</h5>
				<div class="row">
			`;

			let r = this.book;
			let count = 0;
			for(let i=(r.length-1);i>=0;i--){
				if(count++ === 3)break;
				html+= `
					<div class="col s12 m4">
						<div class="card large hoverable">
							<div class="card-image">
								<img src="${r[i].photo}">
								<span class="card-title">${r[i].title}</span>
							</div>
							<div class="card-content">
								<p>${r[i].summary}</p>
							</div>
							<div class="card-action">
								<a href="#" onclick="component.bookView(${r[i].id})">More</a>
							</div>
						</div>
					</div>
				`;
			}

			html += `</div>`;



			this.reRender(html,document.getElementById("bookRecent"));
			$('.carouselLandingPage').hide();
			}

		bookView(id){
			let r = this.findBookById(id);

			let html = `
				<h5 class="center-align">${r.title}</h5>
				<div class="row">				
					<div class="col s12 m12">
						<div class="card horizontal large">
							<div class="card-image">
								<img src="${r.photo}">
							</div>
							<div class="card-stacked">
								<div class="card-content">
									<p>Summary: ${r.summary}</p>
									<p>Year: ${r.year}</p>
									<p>Author: ${r.author}</p>
									<p>Character: ${r.characters}</p>
								</div>
								<div class="card-action small">		
									<span onclick="component.deleteBook(${r.id})" class="new badge small blue" data-badge-caption="">EDIT</span>						
									<span onclick="component.deleteBook(${r.id})" class="new badge small red" data-badge-caption="">DELETE</span>
									<span onclick="component.landingPage()" class="new badge small" data-badge-caption="">BACK TO HOME</span>
								</div>
							</div>					
						</div>				
					</div>			
				</div>
			`;
			this.reRender(`		
				${html}			
				`,document.getElementById("bookView"));
			//hide page 1
			$('#landingPage').hide();
			$('.carouselLandingPage').hide();
			$('#bookView').show();
			$('#bookRecent').hide();
			$('#bookList').hide();
			$('#bookCreate').hide();
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
						</div>
					</form>
					</div>
				</nav>
				<br/>
			`;

			html += `
				<div class="row" id="bookListItems">
			`;
			let r = this.book;
			for(let i=0;i<r.length;i++){
				html+= `
					<div class="col s12 m4">
						<div class="card large hoverable">
							<div class="card-image">
								<img src="${r[i].photo}">
								<span class="card-title">${r[i].title}</span>
							</div>
							<div class="card-content">
								<p>${r[i].summary}</p>
							</div>
							<div class="card-action">
								<a href="#" onclick="component.bookView(${r[i].id})">More</a>
							</div>
						</div>
					</div>
				`;
			}

			html += `</div>`;

			this.reRender(`
				${html}
				`,document.getElementById("bookList"));
			$('landingPage').hide();
			$('.carouselLandingPage').hide();
			$('#bookList').show();
			$('#bookView').hide();
			$('#bookRecent').hide();
			$('#bookCreate').hide();
				
		}
		bookListItems(title){
			let html = ``;
			let r = this.findBookByTitle(title);
			for(let i=0;i<r.length;i++){
				html+= `
					<div class="col s12 m4">
						<div class="card large hoverable">
							<div class="card-image">
								<img src="${r[i].photo}">
								<span class="card-title">${r[i].title}</span>
							</div>
							<div class="card-content">
								<p>${r[i].summary}</p>
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
			$('#landingPage').hide();
			$('.carouselLandingPage').hide();
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
						<div class="row">
							<div class="input-field col s4">
								<input id="book_year" type="text" class="validate">
								<label for="book_year">YEAR</label>
							</div>
							<div class="input-field col s4">
								<input id="book_author" type="text" class="validate">
								<label for="book_author">AUTHOR</label>
							</div>
							<div class="input-field col s4">
								<input id="book_characters" type="text" class="validate">
								<label for="book_characters">CHARACTERS</label>
							</div>
						</div>
						`;

			this.reRender(`
				${html}
				`,document.getElementById("bookCreate"));
			$('#landingPage').hide();
			$('.carouselLandingPage').hide();
			$('#bookCreate').show();
			$('#bookList').hide();
			$('#bookView').hide();
			$('#bookRecent').hide();
	}
	}
	let component = new Component();
	component.landingPage();
