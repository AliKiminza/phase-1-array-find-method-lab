// code your solution here
const superbowlWin = (record) => {
    let Win =  record.find((record) => record.result === "W");


    if (Win){
        return Win.year
    }

}
console.log(superbowlWin(record))