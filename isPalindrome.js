const isPalindrome = (str) => {
  if (str == undefined) {
    return false;
  }
  if (str.length == 0) {
    return false;
  }
  let string = str.toString().replace(/[^\w]/gi, "").toLowerCase();
  return string == string.split('').reverse().join('');
};

export default isPalindrome;