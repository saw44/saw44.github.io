/*Each cell is numbered 1-16
let value =1;
for(let row=1; row<=5; row++){
    for(let col=1; col<=3; col++){
        num=value++;
        process.stdout.write(num.toString() + '  ');
    }
    console.log();
}
//This is a grid of stars
let value= '*';
for(let row = 1; row<= 5; row++){
    for(let col = 1; col <= 3; col++){
        process.stdout.write(value + ' ');
    }
    console.log(value);
}
*/
//This was to have the rows show the row number in each cell of the row. 
//The important part is row.toString
/*let row_lim = 6;
let col_lim = 5;
for(let row = 1; row <= row_lim; row++){
    for(let col = 1; col <= col_lim; col++){
        process.stdout.write(row.toString() + ' ')
    }
    console.log();
}
*/
//Each cell should have its address of its (row,column) printed inside
//Also you can make another variable to store (row,column) cell = row + ',' + col + ' '.
//And then you can plug cell into process.stdout.write(cell.toString())
let row_lim = 6;
let col_lim = 5;
for(let row = 1; row <= row_lim; row++){
    for(let col = 1; col <= col_lim; col++){
        process.stdout.write(row.toString() + ',' + col.toString() + '  ');
    }

    console.log();
}