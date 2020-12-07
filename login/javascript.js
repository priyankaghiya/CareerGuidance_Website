
// function checkph()
// {
// var e=document.getElementById("abc");

// var pat="^[A-Z a-z]{3,12}$";
// var reg=new RegExp(pat);
// if(reg.test(data))
// {}
// else{
//     alert("ENTER PROPER INFORMATION");
//     return false;
// }
// }

function validateform(){  
    var data=f1.Username.value;
    var email=f1.email.value;
    var password=f1.password.value;
    
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
      else if(email==null || email==""){
        alert("Email can't be blank");  
      }
    }  



// function checkph()
// {
// var e=document.getElementById("abc");
// var data=f1.Username.value;
// var pat="[\\w]*[\\w]\\@[\\w]+[\\w][\\.][\\w]+[\\w]";
// var reg=new RegExp(pat);
// if(reg.test(data))
// {}
// else{
//     alert("ENTER PROPER INFORMATION");
//     return false;
// }

// }

