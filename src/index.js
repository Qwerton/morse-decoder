const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const array = [];
  let sum = '';

  for (let i = 0; i < expr.length; i += 10) array.push(expr.slice(i, i + 10));
  array.forEach((item) => {
    item = item.replace(/^0{1,}/, '').replace(/11/g, '-').replace(/10/g, '.').replace(/\*{10}/g, ' ');
    MORSE_TABLE[item] ? sum = sum + MORSE_TABLE[item] : sum = sum + item;
  });

  return sum;
}

module.exports = {
    decode
}