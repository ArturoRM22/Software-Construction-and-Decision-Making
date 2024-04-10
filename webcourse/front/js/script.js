document.getElementById('changeMessage').addEventListener('click',function(){
    const new_message = document.getElementById('inputMessage').value;
    document.getElementById('greeting').innerHTML = new_message; 
})

let counterValue = 0;
document.getElementById('incrementCounterButton').addEventListener('click',function(){
    document.getElementById('incrementCounter').innerHTML = counterValue++;
})

//Form function to send a message to the API server

document.getElementById('nameForm').addEventListener('submit',function(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    console.log(name);
    fetch('http://localhost:3000/api/customGreeting', {
        method: 'POST',
        headers:{
            'Content-Type': "application/json",
        },
        body: JSON.stringify({name: name})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('serverResponse').innerHTML = data.greeting + " from server";
    })
})











