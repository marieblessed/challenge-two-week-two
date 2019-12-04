function fizzBuzz(list1 =[], list2=[]) {
list1.length;
list2.length;
if(((list1.length+list2.length) % 5 === 0 )&& ((list1.length + list2.length )% 3 === 0)){
    console.log('Fizzbuzz');
    return "Fizzbuzz";
}
if((list1.length+list2.length)% 5 === 0) {
return "Buzz";
}


if((list1.length + list2.length )% 3 === 0){
return "Fizz";


    console.log('Fizz');
}

if(((list1.length+list2.length) % 5 != 0 )&& ((list1.length + list2.length )% 3 != 0)){
    
    return list1.length+list2.length;
}


}


module.exports = fizzBuzz;