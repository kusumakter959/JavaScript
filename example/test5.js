// Sentace koyta vowel ache ta check kora

const vowels = ['a','e','i','o','u','A','E','I','O','U'];

function countVowel(santence){
    let letters = Array.from(santence);
    let count = 0;
    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });
    return count;
}
console.log(countVowel('I love Bangladesh'));