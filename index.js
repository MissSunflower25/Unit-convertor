const btn = document.getElementById("btn");
const input = document.getElementById("input");
const length = document.querySelectorAll(".length");
const volume = document.querySelectorAll(".volume");
const mass = document.querySelectorAll(".mass");
const feetOutput = document.querySelector("#feet-output");
const metersOutput = document.querySelector("#meters-output");
const gallonsOutput = document.querySelector("#gallons-output");
const litresOutput = document.querySelector("#litres-output");
const poundsOutput = document.querySelector("#pounds-output");
const kilosOutput = document.querySelector("#kilos-output");

btn.addEventListener("click", ()=>{

    if(input.value === "" || !/^[0-9.,\b]+$/.test(input.value))
        {
            alert("Please enter numeric characters only")
            input.value = "";
            feetOutput.textContent = 0;
            metersOutput.textContent = 0;
            gallonsOutput.textContent = 0;
            litresOutput.textContent = 0;
            poundsOutput.textContent = 0;
            kilosOutput.textContent = 0;

            length.forEach((lengthInput)=>{
                lengthInput.textContent = 0})
            volume.forEach((volumeInput)=>{
                volumeInput.textContent = 0})
            mass.forEach((massInput)=>{
                massInput.textContent = 0})

        }else
        {length.forEach((lengthInput)=>{
            lengthInput.textContent = input.value})
        volume.forEach((volumeInput)=>{
            volumeInput.textContent = input.value})
        mass.forEach((massInput)=>{
            massInput.textContent = input.value})
        
        feetOutput.textContent = (input.value * 3.281).toFixed(3);
        metersOutput.textContent = (input.value / 3.281).toFixed(3);
        gallonsOutput.textContent = (input.value * 0.264).toFixed(3);
        litresOutput.textContent = (input.value / 0.264).toFixed(3);
        poundsOutput.textContent = (input.value * 2.204).toFixed(3);
        kilosOutput.textContent = (input.value / 2.204).toFixed(3);}

})