let advice_id= document.querySelector("#advice_id")
let advice_content= document.querySelector("#advice_content")
const btn= document.querySelector("#btn")


ourRequest= new XMLHttpRequest();
ourRequest.open('GET', "https://api.adviceslip.com/advice")
ourRequest.onload = function(){
    let ourData= JSON.parse(ourRequest.responseText);
    advice_id.innerHTML=ourData.slip.id
        advice_content.innerHTML=ourData.slip.advice
    btn.addEventListener("click", ()=>{
        location.reload()
    })
}

ourRequest.send();