const char = "A"
document.addEventListener('keydown', function(event){isCorrect(event.key);});

window.currentIndex = 0
const exclude = ["Shift","Alt","Escape"]
function isCorrect(key){

    if(key == "Escape"){reset()}
    if(exclude.includes(key)){return}
    if(currentIndex >= window.amountOfWords){return}

    if( key == window.words_arr[currentIndex]){
        document.getElementById(currentIndex).style.color = "green";
    }
    else{
        document.getElementById(currentIndex).style.color = "red" 
    }

    currentIndex++
    console.log(key)

}
