var nShares = document.querySelector("#quantity");
var bPrice = document.querySelector("#buyprice");
var lPrice = document.querySelector("#latestprice");
var btncheck = document.querySelector("#btnC");
var outputDiv = document.querySelector("#containerO");
var inputDiv = document.querySelector("#containerC");

btncheck.addEventListener("click", CalCHandler);

function CalCHandler(){
    if(nShares.value==""||bPrice.value==""||lPrice.value==""||nShares.value<="0"||bPrice.value<="0"||lPrice.value<0){
        outputDiv.innerText="Please enter the correct info about the shares.";
    }
    else{
        if(lPrice.value>bPrice.value){
            var profit= ((lPrice.value-bPrice.value)*(nShares.value)).toFixed(3);
            outputDiv.innerHTML=`Total Profit Booked: ${profit} INR 💹🤑💹<hr>Profit Percentage: ${(((lPrice.value-bPrice.value)/bPrice.value)*100).toFixed(2)}% 💹🤑💹`;
            inputDiv.style.backgroundColor="lightgreen";
            outputDiv.style.backgroundColor="lightgreen";
            
        }
        else if(bPrice.value>lPrice.value){
            var loss= ((bPrice.value-lPrice.value)*(nShares.value)).toFixed(3);
            outputDiv.innerHTML=`Total Loss Booked: ${loss} INR 📉🔴📉<hr>Loss Percentage: ${(((bPrice.value-lPrice.value)/bPrice.value)*100).toFixed(2)}% 📉🔴📉`; 
            if(((bPrice.value-lPrice.value)/bPrice.value)*100>=50){
               inputDiv.style.backgroundColor="red";
               outputDiv.style.backgroundColor="red";
            }
            else{
                inputDiv.style.backgroundColor="lightpink";
               outputDiv.style.backgroundColor="lightpink";
            }
        }
        else if(lPrice.value==bPrice.value){
        outputDiv.innerText="NO profit No Loss";
        }
    }
}