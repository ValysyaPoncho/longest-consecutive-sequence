module.exports = function longestConsecutiveLength(array) {
  if(array.length == 0) {
    return 0;
  };
  
  if(array.length == 1) {
    return 1;
  };

  array = array.sort(function fn(a, b){return a - b});
  let longSeqAtThisMom = 1;
  let Sequence = 1;

  for(let i = 0, arrLen = array.length; i < arrLen; i++) {
    if (array[i] === array[i + 1] - 1) {
      longSeqAtThisMom++;
    } else if (array[i] === array[i + 1]) {
        continue;
    } else if (longSeqAtThisMom > Sequence) {
      Sequence = longSeqAtThisMom;
      longSeqAtThisMom = 1;
    } else {
      longSeqAtThisMom = 1;
    };
  };
  
  return Sequence;
}