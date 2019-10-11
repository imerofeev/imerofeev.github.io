const openDnaModal = document.querySelectorAll('.dna-to-rna-open');
const dnaModal = document.querySelector(".modal-dna");
const closeDnaModal = dnaModal.querySelector(".modal-close");

for (var i = 0; i < openDnaModal.length; i++) {
  openDnaModal[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    dnaModal.classList.add("modal-show");
  });
}

closeDnaModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  dnaModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (dnaModal.classList.contains("modal-dna")) {
      dnaModal.classList.remove("modal-show");
    }
  }
});

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

const openPalindromeModal = document.querySelectorAll('.palindrome-open');
const palindromeModal = document.querySelector(".modal-palindrome");
const closePalindromeModal = palindromeModal.querySelector(".modal-close");

for (var i = 0; i < openPalindromeModal.length; i++) {
  openPalindromeModal[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    palindromeModal.classList.add("modal-show");
  });
}

closePalindromeModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  palindromeModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (palindromeModal.classList.contains("modal-palindrome")) {
      palindromeModal.classList.remove("modal-show");
    }
  }
});

const checkPalindrome = () => {
  const input = document.getElementById('palindrome-input').value;
  const output = document.getElementById('palindrome-output').innerHTML = isPalindrome(input);
}

const isPalindrome = (str) =>{
  if (str == undefined) {
    return false;
  }
  str = str.toString();
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

const openSubstringModal = document.querySelectorAll('.substring-open');
const substringModal = document.querySelector(".modal-substring");
const closeSubstringModal = substringModal.querySelector(".modal-close");

for (var i = 0; i < openSubstringModal.length; i++) {
  openSubstringModal[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    substringModal.classList.add("modal-show");
  });
}

closeSubstringModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  substringModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (substringModal.classList.contains("modal-substring")) {
      substringModal.classList.remove("modal-show");
    }
  }
});

const getsubstring = () => {
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