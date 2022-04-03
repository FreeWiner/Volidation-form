function insertElem() {
    var p = document.createElement('p');
    document.getElementById('info').appendChild(p)
    var input2 = document.getElementById("input2");
    var input1 = document.getElementById("input1");
    var input1_value = input1.value;
    var input2_value = input2.value;
    if (input1_value == 123 && input2_value == 'qwerty'){
        p.innerHTML = 'True'
    }
    else{
        p.innerHTML = 'False'
    }
}