function longestPrefixCommon(v){
    v.sort()
    let first = v[0];
    let last = v[v.length -1];

    result = [];

    for (let i = 0; i < Math.min(first.length,last.length); i++) {
        if(first[i]!== last[i]){
            return result.join('');    
        }
        result.push(first[i]);
        
    }
  return result.join('');
}

console.log(longestPrefixCommon(["flowers","flow","flight"]));