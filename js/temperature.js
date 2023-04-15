let degreesInfo = document.getElementById("degrees");
let addTemp = document.querySelector(".block_plus")
let minTemp = document.querySelector(".block_minus")

let degree = 2;
degreesInfo.innerHTML = degree


addTemp.onclick = function(){

    degree++;
    degreesInfo.innerHTML = degree;


}

minTemp.onclick = function(){

    degree--
    degreesInfo.innerHTML = degree

}



