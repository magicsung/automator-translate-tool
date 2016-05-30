const apiKey = 'your_apiKey';
var googleTranslate = require('google-translate')(apiKey);

var input = process.argv[2];
googleTranslate.translate(input, 'en', function(err, translation) {
  console.log(translation.translatedText);
  return(translation.translatedText);
});
