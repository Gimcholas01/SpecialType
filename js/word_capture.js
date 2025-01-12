document.addEventListener('keydown', function(event){isCorrect(event.key);});

window.currentIndex = 0
const exclude = ["Shift","Alt"]

function isCorrect(key){

    if(exclude.includes(key)){return}

    if(key == "Escape"){
        reset()
        return
    }

    if(key == "Backspace"){
        currentIndex--
        document.getElementById(currentIndex).style.color = "#646669";
        return
    }


    if(currentIndex >= window.amountOfWords){
        if(currentIndex >= window.amountOfWords+1){
            reset()
            return
        }
        currentIndex++
        return
    }

    if( key == window.words_arr[currentIndex]){
        document.getElementById(currentIndex).style.color = "white";
    }
    else{
        document.getElementById(currentIndex).style.color = "red" 
        console.log(key)
    }

    document.getElementById(currentIndex.toString()).append(document.getElementById("typeWriter"));
    currentIndex++

}
