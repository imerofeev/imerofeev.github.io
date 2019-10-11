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

export default isPalindrome;