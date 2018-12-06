const uniqueCharacters = (str1: string) =>
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


const getCharacterCodeArray = (theString: string) =>
{

    const letters = theString.split('');

    const mapped = letters.map( 
        (letter, idx) => getLetterElement(letter, idx)
    )

    return mapped;
}

const getLetterElement = (letter: string, idx: number) => {

    const letterUpper = letter.toUpperCase();
    const charCodeUpper = letterUpper.charCodeAt(0);

    return charCodeUpper

}

const isPunctuation = (str:string) => {
    const charCode = str.charCodeAt(0);
    const isPunctuation = (charCode>=33 && charCode<=64 ) ? true : false;
    return isPunctuation
}

const isVowel = (str:string) => {
    const upperStr = str.toUpperCase();
    const charCode = upperStr.charCodeAt(0);
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

export { uniqueCharacters, getCharacterCodeArray, isPunctuation, isVowel}