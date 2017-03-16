
// Creation of axes ranging from -10 to +10 (Y axis), and -10 to +10 (X axis)


const max =  10; //max value for both X & Y
const min = -10; //min value for both X & Y

let user  = [];	 //stores user coordinates
let store = [];	 //stores closest events


const coord = new Array();

//random number generator
const rand = (a, b) => Math.floor((Math.random()*b)+a);


//prompt user for location
const findUser = () => {

	user[0] = parseInt(prompt("Enter your X axis location (between -10 & 10)"));
	user[1] = parseInt(prompt("Enter your Y axis location (between -10 & 10)"));

	console.log("Your location is " + user);
	console.log(closest(user[0],user[1]));

	store.map((x) => {
		// displays results to console for reference
		console.log(`Event Location ID: ${x.Event_ID} - Price: $${x.Ticket_Price}`);
	});

	//displays final results 
	view();
}

//show closest events
const closest = (x, y) => {
	store = [];
	
	let s = 0;
	let d = 0;
	

	//iterate in both directions
		for(let i=0;i<3;i++){
			for(let j=0;j<3;j++){
				if(coord[user[0]+i][user[1]+j].Event !==0){
		
					if(((user[0]+i)<=10) && ((user[1]+i) <=10))    {		store.push(coord[user[0]+i][user[1]+j]);		}
					
				}
			}
		}
		for(let i=0;i>-3;i--){
			for(let j=1;j>-3;j--){
				if((coord[user[0]+i][user[1]+j].Event !==0)){
					store.push(coord[user[0]+i][user[1]+j]);
				}
			}
		}

}

//print to screen
const view = () => {

    let ul = document.querySelector('ul');
    ul.innerHTML = '';
    store.sort((a,b)=>(Math.pow(a.Event_ID[0],2)+Math.pow(b.Event_ID[0],2))-(Math.pow(b.Event_ID[0],2) + Math.pow(b.Event_ID[1],2)))  //sort and isolate closest 5
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

