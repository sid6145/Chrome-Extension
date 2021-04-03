document.getElementById('submit').addEventListener('click', function(){
    let text = document.getElementById('name').value;
    document.getElementById('hello').innerHTML = "Hello " + text;
})