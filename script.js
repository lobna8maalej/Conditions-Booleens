 function returntrue(){


    returntrue();// true 
}
function returnfalse(){

returnfalse();// false
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;   // pair
  } else {
    return false;  // impair
  }
}
isEven(2);true
isEven(3);false


    
function isOdd(nombre) {
  return nombre % 2 !== 0;
}

isOdd(3); // true
isOdd(2); // false
 
function isgreaterthan10(nombre){

return  nombre>10;//true

 }

 isgreaterthan10(5);//false
 isgreaterthan10(10);//false
 isgreaterthan10(11);//true


 function islessthan30(nombre){

  if   (nombre<30 ){

    return true; si <30
  } else {


    return false; // sinon
  }

 }
 islessthan30(5);//true
 islessthan30(30);//false
 islessthan30(32);//false


 function isEqualTo10(nombre) {
  if (nombre === 10) {
    return true; // si égal à 10
  } else {
    return false; // sinon
  }
}

// Tests
isEqualTo10(1); // true
isEqualTo10(10);  // false
isEqualTo10(15); // false

function isGreaterOrEqualto15(nombre) {
  if (nombre >= 15) {
    return true; // si >= 15
  } else {
    return false; // sinon
  }
}

// Tests
isGreaterOrEqual(0); // false
isGreaterOrEqual(15); // true
isGreaterOrEqual(20); // true


function islessorequalto8(nombre){

    if (nombre<=8){

        return true;si<=8
    }else{
        return false; //sinon
    }
}

islessorequalto8(2);true
islessorequalto8(8);true
islessorequalto8(12);false


function islessthan(nombre1,nombre2){
if (nombre1<nombre2){

    return true; // nombre1 est inferieur a nombre2

} else{
    return false; //sinon
}



}
islessthan(2,3);//true
islessthan(3,2);//false
islessthan(3,3);//false






function isoldenoughtodrive(nombre1, nombre2) {
  return nombre1 === nombre2;
}

console.log(isoldenoughtodrive(3, 3)); // true
console.log(isoldenoughtodrive(3, 2)); // false
 

function isoldenoughtodrive(age){

return age>=18;

}
console.log(isoldenoughtodrive(12));//false
console.log(isoldenoughtodrive(18));//true
console.log(isoldenoughtodrive(20));//true


function isvalidpassword(password){

return password.length>=8;

}


isvalidpassword("hello");//false
isvalidpassword("password");//true
isvalidpassword("strongpassword");//true


function longerstring(string1, string2) {
  if (string1.length > string2.length) {
    return string1;
  } else if (string2.length > string1.length) {
    return string2;
  } else {
    return "both";
  }
}
longerstring("cat","kitty");//kitty
longerstring("hello","hi");//hello
longerstring("hello","world");//both

  
function opposite(boolean) {
  return !boolean;
}

opposite(true);  // false
opposite(false); // true
   


function rectareagreaterthan50(length,width){

return(length*width)>=50

}
rectareagreaterthan50(10,6);//true
rectareagreaterthan50(10,5);//true
rectareagreaterthan50(2,3);//false

function budgetstatus(nombre) {
  if (nombre > 250) {
    return "over budget";
  } else {
    return "under budget";
  }
}
budgetstatus(260); // "over budget"
budgetstatus(250); // "under budget"
budgetstatus(240); // "under budget"
