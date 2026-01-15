var _=require('lodash');


var data=['sonu','sonu',1,2,3,,1,1,1,true,false];
var result=_.uniq(data);
console.log(result);