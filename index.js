function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];

    result.push(string);
  }

  return result;
}
function johnLennonFacts(array){
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var string = array[i] + "!!!";
  result.push(string);
  }
 return result;
}

johnLennonFacts(lennonArray);
