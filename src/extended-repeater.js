const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = [];
    let oneBlock = [];

    if (!options.repeatTimes) options.repeatTimes = 1;
    if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
    if (String(options.addition) == 'undefined') {
        options.addition = '';
    }
    if (!options.separator) options.separator = '+';
    if (!options.additionSeparator) options.additionSeparator = '|';

    for (let i = 1; i < 2; i += 1){
        oneBlock.push(String(str));        
        for (let a = 1; a < options.additionRepeatTimes; a += 1) {
            oneBlock.push(String(options.addition));
            for (let b = 1; b < 2; b += 1){
                oneBlock.push(options.additionSeparator);
            }            
        }
        oneBlock.push(String(options.addition));
    }
    for (let c = 1; c < options.repeatTimes; c += 1) {
        res.push(oneBlock.join(''));
        res.push(options.separator);
    }
    res.push(oneBlock.join(''));
    // return String(options.addition);
    return res.join('');
}

module.exports = {
  repeater
};
