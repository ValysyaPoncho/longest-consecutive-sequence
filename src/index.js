module.exports = function longestConsecutiveLength(array) {
  if(array.length == 0) {
    return 0;
  };
  
  let sortedArray = array.sort(fn);
  let longSeqAtThisMom = 1;
  let Sequence = 1;

  for(let i = 0, arrLen = sortedArray.length; i < arrLen; i++) {
    if (sortedArray[i] === sortedArray[i + 1] - 1) {
      longSeqAtThisMom++;
    } else if (sortedArray[i] === sortedArray[i + 1]) {
        continue;
    } else if (longSeqAtThisMom > Sequence) {
      Sequence = longSeqAtThisMom;
      longSeqAtThisMom = 1;
    } else {
      longSeqAtThisMom = 1;
    };
  };
  
  function fn(a, b) {
    return a - b;
  }
  
  return Sequence;
}