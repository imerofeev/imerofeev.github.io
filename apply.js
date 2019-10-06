const apply = (num, func, argument) => {
  if (num === 0) return argument;
  if (num < 0) return 'Invalid number of iterations entered - negative number';
  if (typeof num !== 'number') return 'Invalid number of iterations entered - type is not number';
  if (typeof func !== 'function') return 'Invalid function entered - not function';
  if (argument === undefined) return 'Invalid argument for function entered';
  return apply(num - 1, func, func(argument));
};

export default apply;