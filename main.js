
let btn_List = document.querySelectorAll("input");
let output = document.querySelector(".output");

var var_btn;
var result;

for (let i = 0; i < btn_List.length; i++) { //for-start
    let btn = btn_List[i];
    btn.addEventListener("click", function(e) { // function-start
    var_btn = this.value;
    var_btn = (var_btn == "x") ? "*" : var_btn ;
    var_btn = (var_btn == "mod") ? "%" : var_btn ;

    /* Reg-Exp */
    var reg_exp_num = new RegExp('[0-9]');
    var reg_exp_op = new RegExp('[*,%,+,/,-]');


    if(reg_exp_num.test(var_btn)){ // if number, keep adding the numbers until 16
      output.innerHTML +=var_btn;
      return false;
    }
    else if(reg_exp_op.test(var_btn)){ // if itz an operator
      output.innerHTML = (output.innerHTML === "")? output.innerHTML ="" : (output.innerHTML + var_btn);
      return false;
    }
    else if(var_btn == "."){ // if itz a period
      output.innerHTML = (output.innerHTML === "")? "0." : (output.innerHTML + ".");
      return false;
    }
    else if(var_btn == "C"){ // if itz cancel
      output.innerHTML = "";
      return false;
    }
    else if(this.id == "id_sqrt"){
      output.innerHTML +=var_btn;
      return false;
    }
    else if(var_btn == "="){ //results
    /*  var split_num = output.innerHTML.split(/(\d)/);
      if(split_num[0] == "&radic;")
      {
        result = Math.sqrt(split_num);
        output.innerHTML = result;
        return false;
      }*/
      result = eval(output.innerHTML);
      if(result%1 === 0){
        output.innerHTML = result;
      }
      else{
        output.innerHTML = result.toFixed(2);
      }
    }
    return false;
  }); //function click-end
} // for-end
