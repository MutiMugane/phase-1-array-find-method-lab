
// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "L"}
];

const winn =record.find(superbowlWin).year

function superbowlWin(array){
    for(let record of array){
        if ( record.result === "W"){
            return record.year;
        }
    }     
    

}

