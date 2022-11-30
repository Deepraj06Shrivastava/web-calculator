// ***************************** ON CLICK FUNCTION ******************************************** 
function Functions(data){
    let screen_value = document.getElementById("input_screen");
    screen_value.value = screen_value.value + data;
}
function Clear(){
    let screen_value = document.getElementById("input_screen");
    screen_value.value ="";
    document.getElementById("Head_Text").innerHTML = ":: Calculator ::";

}
function Functions_Equal(){
    let screen_value = document.getElementById("input_screen");
    let result =  document.getElementById("Head_Text")
    document.getElementById("Head_Text").innerHTML = screen_value.value;

    
    if (screen_value.value != "") {
        let number = screen_value.value = eval(screen_value.value);

    }else{
        screen_value.value = null;
        document.getElementById("Head_Text").innerHTML = ":: Calculator ::";
    }
}

let mode = document.getElementById('mode');
let border = document.getElementById('conatiner_cal');


mode.addEventListener('click', function(){
    body.style.background = "black";
    border.style.border = "2px solid white"
    border.style.borderRadius = "5px"
    console.log(border)
})


// ***************************** ON CLICK FUNCTION ******************************************** 
