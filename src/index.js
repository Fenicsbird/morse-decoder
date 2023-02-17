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
    const ten_dot = /.{10}/g
    const arr = expr.match(ten_dot);

    const morse_arr = [];
    arr.forEach(function (element) {
        element = element.replace(/10/g,'.').replace(/11/g,'-').replace(/00/g,'');
        morse_arr.push(element);
    });

    let string = '';
    morse_arr.forEach(function (element) {
        if(element === '**********'){
            string += ' ';
        } else{
            string += MORSE_TABLE[element];
        }
    });

    return string;
}

module.exports = {
    decode
}