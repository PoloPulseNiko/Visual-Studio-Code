function palindromes(integers){
    for (let str of integers) {
        let reversed = String(str).split('').reverse().join('');
        console.log(String(str) === reversed);
    }
}
// palindromes([123,323,421,121]);
// palindromes([32,2,232,1010]);