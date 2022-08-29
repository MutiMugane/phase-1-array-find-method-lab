
// code your solution here

const record = [
    { year: "2015", result: "Win"},
    { year: "2014", result: "Loss"}
];

function superbowlWin(team){
        return team.result === "Win";

}
return (record.find(superbowlWin));
