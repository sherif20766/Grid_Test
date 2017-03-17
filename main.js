

const max =  10; //max value for both X & Y Axes
const min = -10; //min value for both X & Y Axes

let user  = [];	 //stores user coordinates
let store = [];	 //stores closest events


const coord = new Array();

//random number generator
const rand = (a, b) => Math.floor((Math.random()*b)+a);


//Function prompts user for location
const findUser = () => {

	user[0] = parseInt(prompt("Enter your X axis location (between -10 & 10)"));
	user[1] = parseInt(prompt("Enter your Y axis location (between -10 & 10)"));

	console.log("Your location is " + user);
	console.log(closest(user[0],user[1]));

	store.map((x) => {
		// displays results to console for reference
		console.log(x);
	});

	//displays final results 
	view();
}

//function iterates through points and pushes data to "store" array
const closest = (x, y) => {
	store = [];

	//iterate in both directions
		for(let i=0;i<4;i++){
			for(let j=0;j<4;j++){
				if(((user[0]+i)<=10) && ((user[1]+i) <=10)) {		
					store.push(coord[user[0]+i][user[1]+j]);		
				}
			}
		}

		for(let l=0;l>-4;l--){
			for(let m=0;m>-4;m--){
				if(((user[0]+l)>=-10) && ((user[1]+l) >=-10))    {			
					store.push(coord[user[0]+l][user[1]+m]);
				}
			}
		}
}

//function prints to screen
const view = () => {

   let ul = document.querySelector('ul');
    ul.innerHTML = '';
    //filter through, sort and isolate closest 5
    store.filter(x=> x!=undefined)  //filter out undefined values, i.e values > 10 || <-10
    	 .filter(x=> x.Event!=0)	//filter 0 events, i.e locations without events
    	 .filter((item, index, inputArray )=>inputArray.indexOf(item) == index)  //remove dulplicate values
    	//.sort((a,b)=>(Math.pow(a.Event_ID[0],2)+Math.pow(b.Event_ID[0],2))-(Math.pow(b.Event_ID[0],2) + Math.pow(b.Event_ID[1],2)))
    	 .sort((a,b)=> Math.sqrt(  Math.pow(a.Event_ID[0] - b.Event_ID[0] ,2) + Math.pow(a.Event_ID[1] - b.Event_ID[1] ,2)      )    )
  		 //.sort((a,b)=> Math.abs(b.Event_ID[0]-a.Event_ID[0]) + Math.abs(b.Event_ID[1]-a.Event_ID[0]))
    	 .slice(0,5).forEach(x => {
							       	let li = document.createElement('li');
							       	li.textContent = `Event Location ID: ${x.Event_ID} - Price: $${x.Ticket_Price}`
							      	ul.appendChild(li);
							      });
} 

//create grid with randomly generated event ids, ticket numbers & ticket prices
for (let i = min; i <= max; i++) {
	coord[i] = new Array();
	for (let j = min; j <= max;j++) {
 		coord[i][j] = {	
	 					Event: rand(0.5,1), 			  // 50% chance of event taking place
	  					Event_ID: [i,j],				  // unque ID based on position for ease of use
	  					Number_of_Tickets: rand(0, 1000), // number of tickets left
	  					Ticket_Price: rand(10, 100) 	  // ticket price between 10 & 100 pounds
 				 	 };
 	}

}

