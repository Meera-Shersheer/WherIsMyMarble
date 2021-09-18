//console.log("im in scores page")
//actullay calling the getScore() function,
// which fetch all names and scores from the database

getScores().then((data)=>{
    //to do : next class
//console.log(data)
let display = ""
for (let i=0 ; i<DataTransfer.length ; i++){

display +=
`<li class="score-item ">
<span>${data[i].name}</span> <span>${data[i].score}</span>
</li>`



}
document.getElementById("displayScores").innerHTML = display
})
