function firstNameValidation()
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

function lastNameValidation()
{
  var lname = document.getElementById("lname").value;
  if (!lname.match(/^\D+$/) ) {
    alert("Invalid Last Name");
    document.getElementById("buttonSubmit").disabled = true; 
  }
  else {
    document.getElementById("buttonSubmit").disabled = false;
  }
}

function classValidation()
{
  var cls = document.getElementById("cls").value;
  if (!cls.match(/^[a-z0-9]+$/i)) {
    alert("Invalid Class");
    document.getElementById("buttonSubmit").disabled = true; 
  }
  else {
    document.getElementById("buttonSubmit").disabled = false;
  }
}

function percentageValidation()
{
  var p = document.getElementById("p").value;
  if (!p.match(/^[0-9]+$/i)) {
    alert("Invalid Percentage");
    document.getElementById("buttonSubmit").disabled = true; 
  }
  else {
    document.getElementById("buttonSubmit").disabled = false;
  }
}

function dateValidation()
{
  var yop = document.getElementById("yop").value;
  var allowBlank = true;
  var maxY = 2017;
  var err = "";

  if (yop != ''){
    if (regs = yop.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/)) {
      if (regs[3] < 1 || regs[3] > 31) {
        err = "invalid day " + regs[1];
      }
      else if (regs[2] < 1 || regs[2] > 12) {
        err = " invalid month " + regs[2];
      }
      else if (regs[1] < maxY) {
        err = " invalid year " + regs[2] + " . Year must be greater than 2017";
      }
      else {
        err = "Invalid date format " + yop;
      }
    }
    else{
      err = "Invalid date format " + yop;
    }    

    if (err != "") {
      alert(err);
    }
  }
  else if (!allowBlank) {
    err = "Empty date not allowed";
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
  var p = document.forms["myForm"]["p"].value;
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

  if (!p.match(/^[0-9]+$/i)) {
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
    }
  }
  else if (!allowBlank) {
    err = "Empty date not allowed";
  }
  
}