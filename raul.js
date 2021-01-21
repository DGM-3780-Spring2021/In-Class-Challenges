//Change time to 24 hours format
let militarytime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
});
let date = new Date();
console.log(
    militarytime.format(date)
);



//replace space with underscore
var sentence="Hello everyone, I replaced spaces with underscore"
console.log(sentence)
console.log(sentence.trim())
console.log(sentence.replace(/\s/g,'_'))



//reverse an string
const phrase = 'With great power, comes great responsibility.'
const newphrase = phrase.split('');
console.log(newphrase.reverse().join(''));