function countVowels(name){
    var vowels = ['a','e','o','i','u'];
    var vowelList = '';


    for(i=0;i<name.length;i++){

   for(j=0;j<vowels.length;j++){
    
    if(name[i] === vowels[j]){
        if (vowelList.includes(name[i])){
            console.log('Yeah')
        }
        else {
            vowelList += name[i];
        }
       
    } 
    
   }


}
// vowelList = 'aia';
var x = Array.from(new Set(vowelList.split(','))).toString();
console.log(x);
}
countVowels('maria');