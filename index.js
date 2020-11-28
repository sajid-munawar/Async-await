let response;
async function getData(){
    const response=await fetch("https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple")
    return response
    // const data=await response.json()
    // data1=data
    // console.log(data.results[0].question)
    // return data.results[0].question
    // document.write(data1.results[0].question)
    // document.write(<div>Hell</div>)
}
getData();
console.log(response)
// document.getElementById("div").innerHTML=data1.results[0].correct_answer
