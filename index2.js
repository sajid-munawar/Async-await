const shuffleArray = (array) =>
    [...array].sort(() => Math.random() - 0.5)

let data;
async function getData(){
    const response=await fetch("https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple")
    const data= await response.json()
    // console.log(data)
    return data
    // return await response/
}
getData()
// console.log(data[0].results)
.then(response=>{
    let d=response.results[0]
    var arr=shuffleArray(d.incorrect_answers.concat(d.correct_answer).map(function(value,ind){
        return value 
      }))
     
    document.getElementById("div").innerHTML=d.question
    document.getElementById("div1").innerHTML=d.correct_answer
    // document.getElementById("div2").innerHTML=d.incorrect_answers
    // document.getElementById("li0").innerHTML=arr[0]
    // document.getElementById("li1").innerHTML=arr[1]
    // document.getElementById("li2").innerHTML=arr[2]
    // document.getElementById("li3").innerHTML=arr[3]
    for (var i=0;i<arr.length;i++){
        document.getElementById(`li${i}`).innerHTML=arr[i]
      }
    
    // console.log(d.incorrect_answers)
})
// console.log(data.results[0])
// console.log(response)