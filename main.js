
let inputScreen = document.getElementById('inputScreen');
let resultScreen= document.getElementById('resultScreen');
let mathButtons = document.getElementsByClassName('mathButtons'); // except the 3
let clearButton = document.getElementById('clear');
let deleteButton = document.getElementById('del');
let allButtons = document.getElementsByTagName('button');

// when clicked, deleteButton should delete the inputScreen's last character  and refresh
deleteButton.addEventListener('click',function(){
  inputScreen.innerHTML = inputScreen.innerHTML.slice(0, -1);
  resultScreen.innerHTML = (eval(checkValidationAndRepair(inputScreen.innerHTML)));
  CheckUndefinedAndFix(resultScreen.innerHTML);
});



// when clicked, clearButton should clear all the way the input screen, result screen and refresh
clearButton.addEventListener('click', function(){
  inputScreen.innerHTML = "";
  resultScreen.innerHTML = "";
});

// when clicked, all the math (not DEL) buttons should display its value in input screen
for (let i = 0; i < mathButtons.length; i++){
  mathButtons[i].addEventListener('click', function(){
    inputScreen.innerHTML += mathButtons[i].value;
    resultScreen.innerHTML = (eval(checkValidationAndRepair(inputScreen.innerHTML)));
    CheckUndefinedAndFix(resultScreen.innerHTML);
  })
}


// WHEN CLICKED ALL THE BUTTONS SHOULD ANIMATE
for (let i = 0; i < allButtons.length; i++){
  allButtons[i].addEventListener('click', function(){
    allButtons[i].classList.add("animateWhenClicked");
    setTimeout( () => allButtons[i].classList.remove("animateWhenClicked"), 100)
  })
}


function checkValidationAndRepair(inputStr){

  for (let i = 0; i < inputStr.length; i++){


    if (inputStr[i] == '-' && inputStr[i+1] == '-' && inputStr[i+2] == '-'){
      inputStr = inputStr.slice(0,i) + inputStr.slice(i+1);
      inputScreen.innerHTML = inputStr;
    }
    if (inputStr[i] == '-' && inputStr[i+1] == '-' && inputStr[i+2] !== '-'){
      
      if (inputStr[i+2] == '+' || inputStr[i+2] == '/' || inputStr[i+2] == '*'){

        inputStr = inputStr.slice(0,i+2) + inputStr.slice(i+3);
        inputScreen.innerHTML = inputStr;
    }
    }

    if(inputStr[i] == '+' || inputStr[i] == '/' || inputStr[i] == '*' || inputStr[i] == '-' || inputStr[i] == '.' ){
      if (inputStr[i] != '*' && inputStr[i+1] != '*')
      if (inputStr[i+1] == '+' || inputStr[i+1] == '/' || inputStr[i+1] == '*' || inputStr[i+1] == '.'){
        inputStr = inputStr.slice(0,i) + inputStr.slice(i+1);
        inputScreen.innerHTML = inputStr;
      }
    }

    if(inputStr[0] == '+' || inputStr[0] == '/' || inputStr[0] == '*'){
      inputStr = inputStr.slice(1);
      inputScreen.innerHTML = inputStr;
      console.log("DELETED THE FIRST OPE")
  }
  }
    return inputStr;
  }

function CheckUndefinedAndFix(str){
  if (str == 'undefined') {resultScreen.innerHTML = "";}
  
}

