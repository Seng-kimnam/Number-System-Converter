
const btn = document.getElementById("btnConvert");

btn.addEventListener("click",function(e){
    e.preventDefault();

const result = document.getElementById("result")
    let dec = 0;
    let bin = document.getElementById("binary").value

    for(let i= bin.length-1; i>=0; i--) {

        if(bin[i] == "1"){

            dec += Math.pow(2, i);

        }
        else{
            alert("None of 1 does not exist");
            document.getElementById("binary").value = ""
            break;
        }
    }
    result.textContent = dec;
    

}); 


