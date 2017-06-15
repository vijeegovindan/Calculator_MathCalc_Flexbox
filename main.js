
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
    }
    else if(reg_exp_op.test(var_btn)){ // if itz an operator
      output.innerHTML = (output.innerHTML === "")? output.innerHTML ="" : (output.innerHTML + var_btn);
    }
    else if(var_btn == "."){ // if itz a period
      output.innerHTML = (output.innerHTML === "")? "0." : (output.innerHTML + ".");
    }
    else if(var_btn == "C"){ // if itz cancel
      output.innerHTML = "";
    }
    else if(this.id == "id_sqrt"){
      output.innerHTML +=var_btn;
    }
    else if(var_btn == "="){ //results
      if(reg_exp_op.test(output.innerHTML))
      {
        result = eval(output.innerHTML);
        if (result % 1 === 0){
          output.innerHTML = result;
        }
        else{
          output.innerHTML = result.toFixed(2);
        }
      }

      var sqrt = parseInt(output.innerHTML.charCodeAt(0));
      if(sqrt === 8730)
      {
        var str = output.innerHTML;
         str1 = str.slice(1,output.innerHTML.length);
         result = Math.sqrt(str1);
         output.innerHTML = result.toFixed(3);
         return false;
       }
       return false;
    }
  }); //function click-end
} // for-end
