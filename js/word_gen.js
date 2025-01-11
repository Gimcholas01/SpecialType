const list_of_words="`1234567890-=~!@#$%^&*()_+".split("");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function set(){
    window.words_arr = "";
    document.getElementById("display").innerHTML += "<a id='typeWriter'></a>"
    window.amountOfWords = 20
    for (let i = 0; i < amountOfWords; i++) {

        var temp = list_of_words[getRandomInt(list_of_words.length)]
        words_arr+=temp

        document.getElementById("display").innerHTML += "<a id=" + i + ">" + temp + "<a id=" + i + ">";
    }
}

function reset(){
    document.getElementById("display").innerHTML=""
    currentIndex=0
    set()
}

set()
