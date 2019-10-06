const substr = (str, strStart = 0, subLength = str.lenght) => {
  str = str.toString();
  if (str === undefined) return 'The string is not defined.';
  let newStart = (strStart < 0) ? 0 : strStart;
  let newSubLength = (subLength < 0) ? 1 : 
    ((strStart + subLength - 1) < str.length) ? subLength :
    str.length;
  if (strStart > str.length || newSubLength === 0) return '';
  return str.split('').slice(newStart, newStart + newSubLength).join('');
};

export default substr;