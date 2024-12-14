function isAnagram(s,t){
    /* for (let j = 0; j < t.length; j++) {
        for (let i = 0; i < s.length; i++) {
            if(s.length === t.length){
               return true;    
            }
            if(s[i]===t[j]){
                return true;
            }
            if(s[i]!==t[j]){
                return true;
            }

        
        }
    }
    return false; */

    const sSorted = s.split('').sort().join("")
    const tSorted = t.split('').sort().join("")
    return sSorted == tSorted;


}

console.log(isAnagram('anagram','nagaram'));
console.log(isAnagram('anagram','nagarm'));
