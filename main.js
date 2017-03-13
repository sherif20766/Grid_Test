
// Creation of axes ranging from -10 to +10 (Y axis), and -10 to +10 (X axis)


const max =  10; //max value for both X & Y
const min = -10; //min value for both X & Y

const matrix = new Array();

for (let i = min; i <= max;i++) {
 matrix[i]= new Array();
 for (let j = min; j <= max;j++) {
  matrix[i][j]=0;
 }
}

