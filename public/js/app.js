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

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	createBook(){
		let z = document.getElementById('newTitle');
		let x = document.getElementById('newYear');
		let c = document.getElementById('newAuthor');
		let v = document.getElementById('newSummary');
		let b = document.getElementById('newPhoto');
		let n = document.getElementById('newCharacters');

		let book = {"title":z.value,"year":x.value,"author":c.value,"summary":v.value,"photo":b.value,"characters":n.value};
		this.book.push(book);

		z.value = x.value = c.value = v.value = b.value = n.value = ''; //Clear Fields
		this.bookListInfo();
	}

	deleteBook(key){	
		let table = document.getElementById('bookListInfo');
		table.deleteRow(key);
		this.book.splice(key,1);

		// let m = this.movies;
		// let dummy = [];
		// for(let i=0;i<m;i++){
		// 	if(key!=i){
		// 		dummy.push(m[i]);
		// 	}
		// }
		// this.movies = dummy;
		let details = document.getElementById('bookDetails');
		details.innerHTML = "";
		
		this.bookListInfo();	
		this.showBookList();	
	}

	updateBook(key){

		let z = document.getElementById('updateTitle');
		let x = document.getElementById('updateYear');
		let c = document.getElementById('updateAuthor');
		let v = document.getElementById('updateSummary');
		let b = document.getElementById('updateCharacters');
		
		let m = this.book[key];
		let book = {"id":m.id,"title":z.value,"year":x.value,"author":c.value,"summary":v.value,"photo":m.photo,"characters":b.value};
		//this.book.push(book);

		this.book[key] = book;
		let details = document.getElementById('bookDetails');
		details.innerHTML = "";
		
		this.bookListInfo();
		this.showBookList();
	}

	showLandingPage(){
		$('#landingPage').show();
		$('#createpage').hide();
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}	

	showBookList(){
		$('#landingPage').hide();
		$('#createpage').hide();
		$('#readpage').show();
		$('#updatedeletepage').hide();
	}

	showBookCreate(){
		$('#landingPage').hide();
		$('#createpage').show();		
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}

	showUpdateDelete(){
		$('#landingPage').hide();
		$('#createpage').hide();		
		$('#readpage').hide();
		$('#updatedeletepage').show();
	}	

	searchBook(value=""){
		let objects = [];
		let r = this.book;
		for(let i=0;i<r.length;i++){
			let expr1 = (r[i].title.toUpperCase().indexOf(value.toUpperCase()) > -1);
			if(expr1){
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

	bookList(){
		this.render(
			`


<nav class="navbar navbar-light bg-inverse">
  <ul class="nav navbar-nav">
    <li class="nav-item active">
      <a href="#" onclick="component.showLandingPage()">Home</a>
    </li>
    <li class="nav-item">
      <a href="#"  onclick="component.showBookList()" >Book List</a>
    </li>
    <li class="nav-item">
     <a href="#" onclick="component.showBookCreate()">Book Create</a>
    </li>
  </ul>
</nav>

       	<div id="landingPage">
			<div class="container">
          		<center><img src="img/1.jpg" width="500" height="500"></center>
          </div>

  

		</div>
				
				<div id="createpage" class="row marketing">
					<div class="col col-sm-12">
						<div id="bookCreate"></div>						
					</div>
				</div>

				<div id="readpage" class="row marketing">
					<div class="col col-sm-12">
						<h1><center>Book List</center></h1>
						<table id="bookList" class="table">
							<thead>
								<tr>
									<th>Title</th>
									<th>Year</th>
									<th>Action</th>
								</tr>
							</thead>
							<div class="form-group">
							    <div class="input-group">
							      <input oninput="component.bookListInfo(this.value)" type="text" class="form-control" placeholder="Search">
							    </div>
							  </div>
							<tbody id="bookListInfo"></tbody>
						</table>
					</div>
				</div>

				<div id="updatedeletepage" class="row marketing">
					<div id="bookDetails"></div>
				</div>
				
         <div class="footer">
						<div class="row">
						<div class="col-sm-9 col-md-8 col-lg-12" style="background-color: #EA4928;">
				<p><b><center>“Books are the ultimate Dumpees: put them down and they’ll wait for you forever; <br> pay attention to them and they always love you back.” <br>
					― John Green, An Abundance of Katherines"</center></b></p>
					<center>© 2016 Copyright Text</center>
							</div>
						</div>
				</div>
				</footer>			

			`
			,document.getElementById('app'));
		this.bookListInfo();
		$('#landingpage').show();
		$('#createpage').hide();		
		$('#readpage').hide();
	}

	bookListInfo(filter){
		// console.log(filter);
		let html = "";
		// let m = this.movies;
		let m = this.searchBook(filter);
		for(let i=0;i<m.length;i++){	
			html += `
				<tr>
					<td>${m[i].title}</td>
					<td>${m[i].year}</td>
					<td><button class="btn btn-primary"  onclick="component.bookDetails(${i})">Show Details</button></td>
				</tr>
			`;
		}
		this.reRender(html,document.getElementById('bookListInfo'));
	}

	bookDetails(key){
		this.reRender(
			`

				<h1><center>Book Details</center></h1>
				<div class="media">
				    <div class="media-left">
				        <a href="#">
				            <img class="media-object img-thumbnail" src="${this.book[key].photo}" width="220" />
				        </a>
				    </div>
				    <div class="media-body" id="bookDetailsInfo">
				        <h4 class="media-heading">${this.book[key].title}</h4>
				        Year: ${this.book[key].year}<br/></br>
				        Author: ${this.book[key].author}<br/></br>
						Characters: ${this.book[key].characters}<br/></br>
						Summary: ${this.book[key].summary}<br/></br>
						<button class="btn btn-info btn-sm" onclick="component.bookUpdate(${key})">Update</button>
						<button class="btn btn-info btn-sm" onclick="component.deleteBook(${key})">Delete</button>
						<button class="btn btn-info btn-sm" onclick="component.showBookList()">Back</button>
					</div>	
				</div>			
			`,document.getElementById('bookDetails'));
			this.showUpdateDelete();
	}

	bookCreate(){
		this.render(
			`
				<h1><center>Book Create</center></h1>
				Title: <input class="form-control" id="newTitle" type="" placeholder="Enter Title" /><br/>
				Year: <input class="form-control" id="newYear" type="" placeholder="Enter Year" /><br/>
				Director: <input class="form-control" id="newAuthor" type="" placeholder="Enter Director" /><br/>
				Poster: <input class="form-control" id="newPhoto" type="" placeholder="Enter Poster" /><br/>
				Actors: <input class="form-control" id="newCharacters" type="" placeholder="Separate using comma" /><br/>
				Summary: <input class="form-control" id="newSummary" type="" placeholder="Enter Summary" ><br/>
				<button class="btn btn-primary" onclick="component.createBook()">Create</button>
			`,document.getElementById('bookCreate'));
	}

	bookUpdate(key){

		this.reRender(

			`



				<div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>ID</span>
		        	</span>
		        	<input readonly class="form-control" type="text" value="${this.book[key].id}" /><br/>
		        </div>
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Title</span>
		        	</span>
		        	<input class="form-control" id="updateTitle" type="text" value="${this.book[key].title}" /><br/>
		        </div>
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Year</span>
		        	</span>
		        	<input class="form-control" id="updateYear" type="text" value="${this.book[key].year}" /><br/>
		        </div>
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Director</span>
		        	</span>
		        	<input class="form-control" id="updateAuthor" type="text" value="${this.book[key].author}" /><br/>
		        </div>	
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Characters</span>
		        	</span>
		        	<input class="form-control" id="updateCharacters" type="text" value="${this.book[key].characters}" /><br/>
		        </div>
		        </br>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Summary</span>
		        	</span>
		        	<input class="form-control" id="updateSummary" type="text" value="${this.book[key].summary}" /><br/>
		        </div>	
				<br/>
				<br/>
				<br/>
				<button class="btn btn-success btn-block" onclick="component.updateBook(${key})">Save</button>
			`,document.getElementById('bookDetailsInfo'));
	}


	
}

let component = new Component();
component.bookList();
component.bookCreate();
