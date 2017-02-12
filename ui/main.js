var button = document.getElementById('counter');

button.onclick = function() {
    // Create a request object
    var request = new XMLHttpRequest();
    
    request.onreadyStateChange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            alert('inside');
            if(request.status === 200) {
                alert('inside');
                var counter = request.responseText;
                alert(counter);
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    }
    
    // Make a request
    request.open("GET", "http://bijith90.imad.hasura-app.io/counter", true);
    request.send(null);
    
};