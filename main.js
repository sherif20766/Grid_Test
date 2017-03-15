
// Creation of axes ranging from -10 to +10 (Y axis), and -10 to +10 (X axis)


const max =  10; //max value for both X & Y
const min = -10; //min value for both X & Y

let user = [];

const coord = new Array();

//random number generator
const rand = (a, b) => Math.floor((Math.random()*b)+a);

//prompt user for location
const findUser = () => {
	user[0] = parseInt(prompt("what is your X axis location"));
	user[1] = parseInt(prompt("what is your Y axis location"));
}
//create grid with randomly generated event ids, ticket numbers & ticket prices
for (let i = min; i <= max;i++) {
 coord[i] = new Array();
 for (let j = min; j <= max;j++) {
 	coord[i][j] = {
  					Event_ID: rand(1, 999),
  					Number_of_Tickets: rand(100, 10000),
  					Ticket_Price: rand(10, 100)
 				};
 }

}




