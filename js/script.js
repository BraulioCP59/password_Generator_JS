// selectors
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//var declarations
var lowerCaseList = 'abdcefghijklmnopqrstuvwxyz';
var upperCaseList = lowerCaseList.toLocaleUpperCase();
var specCharList = '!”#$%&’()*+,-./:;<=>?@[^_`{|}~';
var numberList = '0123456789';

//object for storing users password criteria
var passCriteria = {
  charLength: 0,
  charTypes: {
    lowerCase: false,
    upperCase: false,
    numeric: false,
    specialChar: false
  },
};

// Write password to the #password input
function writePassword() 
{
  //prompt the user for a char length and store it in the criteria obj 
  genPasswordLength();
  //series of prompts for what char types to include
  genCharTypeCriteria();
  //assigns returned password using criteria above to var. 
  var password = generatePassword();
  //displays password result in pass word text element.
  passwordText.textContent = password;
}

//prompts user for passwordlength
function genPasswordLength()
{
    //prompt the user for a char length and store it in the criteria obj 
    passLength = parseInt(prompt("Enter Password Length Between 8 and 128 Characters."), 10); 

    if(passLength >= 8 && passLength <= 128)
    {
      passCriteria.charLength = passLength;
    }else
    {
      alert("Invalid Entry, try again..");
      genPasswordLength();
    }
}

//prompts user for each character type stored in password criteria obj
function genCharTypeCriteria()
{
    //loop asks user whether to inlcude each character type in password or not
    for ( var property in passCriteria.charTypes ) {

      if(confirm("would you like to include a " +  property + " ?" ))
      {
  
        //sets current property in chartypes to true
        passCriteria.charTypes[property] = true;
  
      }else
      {
  
        //sets current property in chartypes to true
        passCriteria.charTypes[property] = false;
  
      }
    }
}

//executes a series of user prompts and uses the input to generate a password
function generatePassword()
{
  // password to be returned
  var result = [];
  console.log(passCriteria);

  //
  var charSet = [];

  //
  if(passCriteria.charTypes.lowerCase)
  {
    charSet.push(...lowerCaseList.split(''));     
  }

  if(passCriteria.charTypes.upperCase)
  {
    charSet.push(...upperCaseList.split(''));   
  }

  if(passCriteria.charTypes.numeric)
  {
    charSet.push(...numberList.split('')); 
  }

  if(passCriteria.charTypes.specialChar)
  {
    charSet.push(...specCharList.split('')); 
  }

  //loop that runs by the number of characters requested by the user
  for(var i = 0; i < passCriteria.charLength; i++)
  {
    //builds result using a randomly selected char from the approved char set. 
    result.push(charSet[getRandomInt(charSet.length)]);
  }

  //returns password for assignment
    return result.join("");
  };

//generates a random number between zero and the given highest value parameter
function getRandomInt(highestValue)
{
  return Math.floor(Math.random()*highestValue);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
