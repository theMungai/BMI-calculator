const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const resultmessage = document.querySelector(".result-message");
const resultTip = document.querySelector(".result-tips");
const calculateButton = document.querySelector(".calculate-button");
const welcomeDiv = document.querySelector(".welcome-div");
const heighterrorMessage = document.querySelector(".error-message");
const weightErrorMessage = document.querySelector(".weight-error-message")


calculateButton.addEventListener('click', () =>{
    welcomeDiv.style.display = "none"
    const BMI = Math.floor((weight.value / ((height.value / 100) ** 2)) * 10) / 10;


    if (height.value == ""){
        heighterrorMessage.textContent = 'this field is required';
        heighterrorMessage.style.color = "red";
        height.style.borderColor = "red";
        welcomeDiv.style.display = "block"
        weight.style.borderColor = "red";
        weightErrorMessage.textContent = 'this field is required';
        weightErrorMessage.style.color = "red";
    }

    else{
        if (BMI < 18.5){
            resultmessage.textContent  = `Your BMI is...
             ${BMI}`
             resultmessage.style.fontWeight ="600";
             resultmessage.style.fontSize = "1.5rem";
            resultTip.textContent = `Your BMI suggests that you are underweight.
             Your ideal weight should be between ${Math.floor((18.5 * (height.value / 100) ** 2) * 10) /10}kgs 
             to ${Math.floor((24.9 * (height.value / 100) ** 2) * 10) /10}kgs`

         }
     
         else if(BMI === 18.5 || BMI <= 24.9 ){
            resultmessage.textContent  = `Your BMI is...
             ${BMI}`
             resultmessage.style.fontWeight ="600";
             resultmessage.style.fontSize = "1.5rem";

             resultTip.textContent = `Your BMI suggests that you are healthy.
             Your ideal weight should be between ${Math.floor((18.5 * (height.value / 100) ** 2) * 10) /10}kgs 
             to ${Math.floor((24.9 * (height.value / 100) ** 2) * 10) /10}kgs`
         }
     
         else if(BMI === 25.0 || BMI <= 29.9 ){
            resultmessage.textContent  = `Your BMI is...
            ${BMI}`

            resultmessage.style.fontWeight ="600";
             resultmessage.style.fontSize = "1.5rem";
             resultTip.textContent = `Your BMI suggests that you are overweight.
             Your ideal weight should be between ${Math.floor((18.5 * (height.value / 100) ** 2) * 10) /10}kgs 
             to ${Math.floor((24.9 * (height.value / 100) ** 2) * 10) /10}kgs`
         }
     
         else if(BMI === 30.0 || BMI <= 34.9 ){
            resultmessage.textContent  = `Your BMI is...
            ${BMI}`
            resultmessage.style.fontWeight ="600";
            resultmessage.style.fontSize = "1.5rem";

             resultTip.textContent = `Your BMI suggests that you are in Obese Class I .
             Your ideal weight should be between ${Math.floor((18.5 * (height.value / 100) ** 2) * 10) /10}kgs 
             to ${Math.floor((24.9 * (height.value / 100) ** 2) * 10) /10}kgs`
         }
     
         else if(BMI === 35.0 || BMI <= 39.9 ){
            resultmessage.textContent  = `Your BMI is...
            ${BMI}`
            resultmessage.style.fontWeight ="600";
             resultmessage.style.fontSize = "1.5rem";

             resultTip.textContent = `Your BMI suggests that you are in Obese Class II .
             Your ideal weight should be between ${Math.floor((18.5 * (height.value / 100) ** 2) * 10) /10}kgs 
             to ${Math.floor((24.9 * (height.value / 100) ** 2) * 10) /10}kgs`
         }
     
         else if(BMI >= 40 ){
            resultmessage.textContent  = `Your BMI is...
            ${BMI}`
            resultmessage.style.fontWeight ="600";
             resultmessage.style.fontSize = "1.5rem";
             resultTip.textContent = `Your BMI suggests that you are in Obese Class III .
             Your ideal weight should be between ${Math.floor((18.5 * (height.value / 100) ** 2) * 10) /10}kgs 
             to ${Math.floor((24.9 * (height.value / 100) ** 2) * 10) /10}kgs`
         }
    }


    
})

