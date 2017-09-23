module.exports = function check(str, bracketsConfig) {
		length1=str.length;
		length2=str.length-1;
		while (length2<length1){
			length1=str.length;
 	for (var i = 0; i<bracketsConfig.length; i++) {
 		while (str.indexOf(bracketsConfig[i][0]+bracketsConfig[i][1])>=0){
 			str= str.slice(0,str.indexOf(bracketsConfig[i][0]+bracketsConfig[i][1]))+str.slice(str.indexOf(bracketsConfig[i][0]+bracketsConfig[i][1])+2)
 		}
 		length2=str.length;
 	}
 	}
 	if (!str.length) {return true} else {return false}
 }