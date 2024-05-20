document.getElementById("submit").addEventListener("click", () => {
    let prompt = document.getElementById("req").value;
    fetch('http://localhost:4000/gpt', {
        method: 'POST',
        headers:{
            'Content-Type': "application/json",
        },
        body: JSON.stringify({prompt: prompt})
    })
    .then(response => response.json())
    .then(data => {
        // Create a new div element to hold the response
        let responseDiv = document.createElement('div');
        responseDiv.className = 'response-item';
        responseDiv.innerHTML = data.response_gpt.completionContent;
        
        // Get the response container element
        let responseContainer = document.getElementById('response-container');
        
        // Append the new response div to the container
        responseContainer.appendChild(responseDiv);
        let separacion = document.createElement('hr');
        responseContainer.appendChild(separacion);
        
        // Reset input value after receiving response
        document.getElementById('req').value = ''; // Reset input value
        console.log(data.response_gpt.messages);
    });
});
