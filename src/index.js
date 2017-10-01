module.exports = function check(str, bracketsConfig) {
  // your solution
  if(str.length % 2 !== 0) return false;
  var stringArray = str.split('');
  var stringArrayLength = stringArray.length;
  var count = 0;
  while(true) {
  	for(var i = 0; i < stringArray.length - 1; i++) {
  		for(var j = 0; j < bracketsConfig.length; j++) {
  			if(stringArray[i] === bracketsConfig[j][0] && 
  					stringArray[i + 1] === bracketsConfig[j][1]) {
  				stringArray.splice(i, 2);
  				
  			}
  		}
  	}
  	count++;
  	if(stringArray.length === 0) {
  		return true;
  	} else if (count === stringArrayLength) {
  		return false;
  	}
  }

}
