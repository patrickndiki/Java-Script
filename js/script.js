function fn(){
  var d = new Date();

  var date = parseInt(document.getElementById("date").value);
  var month = parseInt(document.getElementById("month").value)
  var year = parseInt(document.getElementById("yeae").value)

  if (day < 0 || day > 31) {
    document.getElementsByClassName("dayerror").innerhtml = "Enter valid date";
    return false;
  } else if (date == ""){
    document.getElementsByClassName("dayerror").innerhtml = "Cannot be empty"
    return false;
  } else {
    d.setDate(date);
  }

  if (month < 0 || day > 12) {
    document.getElementsByClassName("montherror").innerhtml = "Enter valid month";
    return false;
  } else if (month == "") {
    document.getElementsByClassName("montherror").innerhtml = "Cannot be empty";
    return false;
  } else {
    d.setMonth(month);
  }

  if (month < 0) {
    document.getElementsByClassName("yearerror").innerhtml = "Enter valid year"
    return false;
  } else if (year == "") {
    document.getElementsByClassName("yearerror").innerhtml = "Cannot be empty"
    return false
  }




