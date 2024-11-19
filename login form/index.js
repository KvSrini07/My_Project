//TODO : Its a Completed Code
function formvalid() {
    var vaildpass = document.getElementById("pass").value;
  
    if (validdpass.length <= 4 || validdpass.length >= 20) {
      document.getElementById("valid-pass").innerHTML = "Minimum 4 characters";
      return false;
    } else {
      document.getElementById("valid-pass").innerHTML = "";
    }
    if(username=='kvs07'&& password==2002)
    {
        window.location.assign('');
        alert("login Successfully");
    }
    else{
        alert("Invalid Username / Password");
        return;
    }
  }
  function show() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("showimg").src =
        "https://static.thenounproject.com/png/777494-200.png";
    } else {
      x.type = "password";
      document.getElementById("showimg").src =
        "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
    }
  }