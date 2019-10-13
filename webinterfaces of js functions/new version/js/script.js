const convert = () => {
  const input = document.getElementById('dna-input').value;
  const output = document.getElementById('rna-output').innerHTML = dnaToRna(input);
}

const dnaToRna = dna => {
  if (typeof dna !== 'string') return 'Entered data is not string';
  if (dna.length === 0) return 'Entered data is empty';
  let rna = '';
  dna = dna.toUpperCase();
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'G': rna += 'C'
        break;
      case 'C': rna += 'G'
        break;
      case 'T': rna += 'A'
        break;
      case 'A': rna += 'U'
        break;
      default: return 'Entered data is not DNA chain';
    }
  }
  return rna;
}

const checkPalindrome = () => {
  const input = document.getElementById('palindrome-input').value;
  const output = document.getElementById('palindrome-output').innerHTML = isPalindrome(input);
}

const isPalindrome = (str) =>{
  if (str == undefined) {
    return false;
  }
  str = str.toString().toLowerCase();
  let i = str.length;
  if (i == 0) {
    return false;
  }
  if (i <= 1) {
    return true;
  }
  if (str.substr(0, 1) !== str.substr(i - 1, 1)) {
    return false;
  } else if (i == 2) {
    if (str.substr(0, 1) !== str.substr(i - 1, 1)) {
      return false;
    } else {
      return true;
    }
  } else {
    return isPalindrome(str.substr(1, i -2));
  }
};

const getSubstring = () => {
  const inputStr = document.getElementById('substring-str-input').value;
  const inputStart = document.getElementById('substring-start-input').value;
  const inputLenght = document.getElementById('substring-length-input').value;
  const output = document.getElementById('substring-output').innerHTML = substr(inputStr, inputStart, inputLenght);
}

const substr = (str, strStart = 0, subLength = str.lenght) => {
  str = str.toString();
  strStart = Number(strStart);
  subLength = Number(subLength);
  if (str === undefined) return 'The string is not defined.';
  let newStart = (strStart < 0) ? 0 : strStart;
  let newSubLength = (subLength < 0) ? 1 : 
    ((strStart + subLength - 1) < str.length) ? subLength :
    str.length;
  if (strStart > str.length || newSubLength === 0) return '';
  return str.split('').slice(newStart, newStart + newSubLength).join('');
};
