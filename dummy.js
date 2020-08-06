function firstaNameValidation()
{
  var fname = document.getElementById("fname").value;
  if (!fname.match(/^\D+$/) ) {
    alert("Invalid First Name");
    document.getElementById("buttonSubmit").disabled = true; 
  }
  else {
    document.getElementById("buttonSubmit").disabled = false;
  }
}

function validate() {
  var fn = document.forms["myForm"]["fname"].value;
  var ln = document.forms["myForm"]["lname"].value;
  var cls = document.forms["myForm"]["cls"].value;
  var d = document.forms["myForm"]["yop"].value;
  var allowBlank = true;
  var maxY = 2017;
  var err = "";

  if (!fn.match(/^\D+$/) || !ln.match(/^\D+$/)) {
    alert("Invalid Name");
  }
  if (!cls.match(/^[a-z0-9]+$/i)) {
    alert("Invalid Class");
  }
  if (d != ''){
    if (regs = d.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)) {
      if (regs[1] < 1 || regs[1] > 31) {
        err = "invalid day " + regs[1];
      }
      else if (regs[2] < 1 || regs[2] > 12) {
        err = " invalid month " + regs[2];
      }
      else if (regs[3] < maxY) {
        err = " invalid year " + regs[2] + " . Year must be greater than 2017";
      }
      else {
        err = "Invalid date format " + d;
      }
    }
    else{
      err = "Invalid date format " + d;
    }    

    if (err != "") {
      alert(err);
      d.focus();
      return false;
    }
    return true;
  }
  else if (!allowBlank) {
    err = "Empty date not allowed";
  }
  
}