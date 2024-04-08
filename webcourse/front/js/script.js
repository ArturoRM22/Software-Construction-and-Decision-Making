function changeButtonText(){
    let newText = document.getElementById('inputMessage');
    let button = document.getElementById('changeMessage');
    button.innerHTML = newText.value;
}


document.getElementById('changeMessage').addEventListener('click',function(){
    document.getElementById('greeting').innerHTML = 'Goodbye world!'; 
})

let counterValue = 0;
document.getElementById('incrementCounterButton').addEventListener('click',function(){
    document.getElementById('incrementCounter').innerHTML = counterValue++;
})












