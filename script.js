function calculate(type, button){
    if(type == 'action'){
        if(button == 'c'){
            document.getElementById('screen').value = '';
        }

        if(button == '+' || button == '-' || button == '*' || button == '/' || button == '.'){
            document.getElementById('screen').value += button;
        }

        if(button == '='){
            var field = document.getElementById('screen').value;
            document.getElementById('screen').value = (eval(field));
        }
    } else if(type == 'value'){
        document.getElementById('screen').value += button;
    }
}