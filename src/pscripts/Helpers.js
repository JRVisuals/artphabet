const unique_char = (str1) =>
{
 const str=str1;
 let uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))===-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  


const getCharacterCodeArray = (theString) =>
{

    const letters = theString.split('');

    const mapped = letters.map( 
        (letter, idx) => getLetterElement(letter, idx)
    )

    return mapped;
}

const getLetterElement = (letter, idx) => {

    const letterUpper = letter.toUpperCase();
    const charCodeUpper = letterUpper.charCodeAt();

    return charCodeUpper

}

const isPunctuation = (str) => {
    const charCode = str.charCodeAt();
    const isPunctuation = (charCode>=33 && charCode<=64 ) ? true : false;
    return isPunctuation
}

const isVowel = (str) => {
    const upperStr = str.toUpperCase();
    const charCode = upperStr.charCodeAt();
    const isVowel = (
        charCode===65 ||
        charCode===69 ||
        charCode===73 ||
        charCode===79 ||
        charCode===85 ||
        charCode===89
        ) ? true : false;
    return isVowel
}

export { unique_char, getCharacterCodeArray, isPunctuation, isVowel}