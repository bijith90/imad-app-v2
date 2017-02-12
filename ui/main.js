var button = document.getElementById('counter');

button.onclick = function() {
    // Create a request object
    var xhr = new XMLHttpRequest();

    xhr.onreadyStateChange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
                var counter = xhr.responseText;
                console.log(xhr.responseText);
                
            }
        }
    }
    
    // Make a request
    xhr.open("GET", "http://bijith90.imad.hasura-app.io/counter", true);
    xhr.send(null);
    
};