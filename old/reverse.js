function reverse(text){
  if (!text) return '';
  if (text.length === 1) return text;

  return `${text[text.length - 1]}${reverse(text.slice(0, text.length - 1))}`
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
