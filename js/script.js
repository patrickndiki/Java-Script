function fn(){
  var d = new Date();

  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value)
  var year = parseInt(document.getElementById("year").value)

  if (day < 0 || day > 31) {
    document.getElementsByClassName("dayerror").innerhtml = "Enter valid date";
    return false;
  } else if (day == ""){
    document.getElementsByClassName("dayerror").innerhtml = "Cannot be empty"
    return false;
  } else {
    d.setDate(day);
  }

  if (month < 0 || month > 12) {
    document.getElementsByClassName("montherror").innerhtml = "Enter valid month";
    return false;
  } else if (month == "") {
    document.getElementsByClassName("montherror").innerhtml = "Cannot be empty";
    return false;
  } else {
    d.setMonth(month);
  }

  if ( year 
    < 0) {
    document.getElementsByClassName("yearerror").innerhtml = "Enter valid year"
    return false;
  } else if (year == "") {
    document.getElementsByClassName("yearerror").innerhtml = "Cannot be empty"
    return false
  }  else {
  d.setFullYear(year);

  }
   


   var day = d.getDay;
   var days = ["sunday","monday","tuesday","wednesay","thursday","friday","sartuday"]
   var male = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"]
   var female = ["Akosua", "Adwoa","Abenaa","Akua", "Yaa","Afua","Ama"];


   function getAkanName() {
    var ismale = document.getElementById('male').checked; 
    var isfemale = document.getElementById('female').checked;
    if (ismale == true && isfemale == false)
    {
       if (day == 0) {
           alert('your name is' + male[0]);
         
       }
       else if (day == 1) {
          alert('your name is' + male[1])
       }
       else if (day ==2) {
          alert('your name is' + male[2])
       }
       else if (day == 3) {
          alert('your name is' + male[3])
       }
       else if (day == 4) {
          alert ('your name is' + male[4]);
       }
       else if (day == 5) {
          alert('your name is' + male[5]);
       }
       else if (day == 6) {
          alert('your name is' + male[6]);
       }
 
         
     } else if (ismale == false && isfemale == true) {
         if (day == 0) {
           alert('your name is' + female[0]);
           
         }
         else if (day == 1) {
           alert('your name is' + female[1])
         }
         else if (day == 2) {
           alert('your name is' + female[2])
         }
         else if (day == 3) {
            alert('your name is' + female[3])
         }
         else if (day == 4) {
            alert('your name is' + female[4])
         }
         else if (day == 5) {
           alert('your name is' + female[5])
         }
         else if (day == 6) {
           alert('your name is' + female[6])
         }
        } 
    }
    getAkanName();
  }


