//  require MessageMixer module
// const MessageMixer = require('./messageMixer');

// // import MessageMixer with import !
// import MessageMixer from "./messageMixer.mjs";



// function displayMessage() {
//     console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
//     console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
//     console.log(MessageMixer.reverseWord("What is the color of the sky?"));
//     console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
//     console.log(MessageMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
//     console.log(MessageMixer.encode("What is the color of the sky?"));
//     console.log(MessageMixer.palindrome("What is the color of the sky?"));
//     console.log(MessageMixer.pigLatin("What is the color of the sky?", 'V'));
//   }
  
//   displayMessage();

// Import each function by name
import { 
  countCharacter, 
  capitalizeFirstCharacterOfWords, 
  reverseWord, 
  reverseAllWords, 
  replaceFirstOccurence, 
  encode, 
  palindrome, 
  pigLatin 
} from "./messageMixer.mjs";

function displayMessage() {
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(reverseWord("What is the color of the sky?"));
  console.log(reverseAllWords("What is the color of the sky?"));
  console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(encode("What is the color of the sky?"));
  console.log(palindrome("What is the color of the sky?"));
  console.log(pigLatin("What is the color of the sky?", 'V'));
}

displayMessage();