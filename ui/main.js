var button = document.getElementById('counter');

button.onclick = function() {
    // Create a request object
    var request = new XMLHttpRequest();
    console.log(responseText);
    request.onreadyStateChange = function() {
        console.log(responseText);
        if(request.readyState === XMLHttpRequest.DONE) {
            console.log(responseText);
            if(request.status === 200) {
                var counter = responseText;
                console.log(responseText);
            }
        }
    };
    
    // Make a request
    request.open('GET', 'http://bijith90.imad.hasura-app.io/counter', true);
    request.send(null);
    
};