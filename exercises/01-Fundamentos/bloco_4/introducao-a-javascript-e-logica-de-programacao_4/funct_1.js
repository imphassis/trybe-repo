/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
function verificaPalindrome(string) {
  let reversedWord = string.split('').reverse().join('');
  if (reversedWord === string) {
    console.log(`true`);
  } else {
    console.log(`false`);
  }
}

verificaPalindrome('desenvolvimento');
