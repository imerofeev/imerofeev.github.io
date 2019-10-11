const dnaToRna = dna => {
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

export default dnaToRna;