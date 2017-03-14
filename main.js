
// Creation of axes ranging from -10 to +10 (Y axis), and -10 to +10 (X axis)


const max =  10; //max value for both X & Y
const min = -10; //min value for both X & Y

const coord = new Array();

for (let i = min; i <= max;i++) {
 coord[i]= new Array();
 for (let j = min; j <= max;j++) {
 	coord[i][j] = {
  					Event_ID: rand(1, 999),
  					Number_of_Tickets: rand(100, 10000),
  					Ticket_Price: rand(10, 100)
 				};
 }

}

//random number generator
function rand (a, b){return Math.floor((Math.random()*b)+a)};

