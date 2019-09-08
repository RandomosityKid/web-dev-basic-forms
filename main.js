function getInput(){
    let input = document.getElementById('textInput').value;
    let output = document.getElementById('textOutput');
    output.setAttribute('value', input);
    console.log(input);
}

// console.log(document.getElementsByClassName('textfield'));