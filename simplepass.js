//type checkString below
function checkString(str){
  if (str.length < 8 || str.length > 20) {
    throw new Error("This password in not between 8 and 20")
  }
  else{
    console.log("Good Length");
  }
}


//type getString below
function getString(str){
  try{
    str = checkString(str);
  }
  catch (e){
    console.log(e.message);
    getString(str);
  }
}
checkString("asdfghjk")
