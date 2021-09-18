// work as post man
// difine the link


const urlbf = "https://whereisthemarblebackend.herokuapp.com/api/score"




async function getScores(){
//Get request by default
const data = await fetch(urlbf)
const updated_data = await data.json()
return updated_data 
}


async function postScore(name,score){
    const data = await fetch(urlbf,{


method:"POST",
headers:{

'Accept': 'application/json',

'content-type':'application/json '

},
body: JSON.stringify({name,score})

    })
    const updated_data = await data.json()
    return updated_data 
}


