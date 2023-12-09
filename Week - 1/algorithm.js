// ======= Factorial ========
function factorial (n){
    let fac =1
    for(let i=n; i>0; i--){
       fac *= i
    }
    return fac
}
console.log(factorial(4));
// big o = o(n)



// ======= Prime ========
function prime (n){

    if(n<2)return false

    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i==0)return false
    }
    return true
}
console.log(prime(10));
// big o = o(n)



// ======= power of two ========
function powerOf2 (n){

    if(n<1){
        return false
    }

   return (n & (n-1)) === 0
}
console.log(powerOf2(16));
console.log(powerOf2(10));
console.log(powerOf2(8));
// big o = o(1)



// ======= fibinachi ========
function fibinachi(n){
    
    let feb = [0,1];

    for(let i=2; i<n; i++){
        feb[i] =feb[i-1] + feb[i-2];
    }
    return feb
} 
console.log(fibinachi(1));
console.log(fibinachi(3));
console.log(fibinachi(7));
// big o = o(n)



// ======= Factorial using recuation ======== 
function recfactorial(n){  

    if(n===0){
        return 1
    }

    return n*recfactorial(n-1)

} 
console.log(recfactorial(1));
console.log(recfactorial(3));
console.log(recfactorial(5));
// big o = o(n)



// ======= linear search ========
function linearSearch(arr,n){  
    let r = -1

      arr.forEach((v,i)=>{
        if(v===n){
            r = i
        }
    })
    
    return r

} 
console.log(linearSearch([1,2,3,4,5,6],1));
console.log(linearSearch([10,93,3,3,5],100));
console.log(linearSearch([1,2,3,4,2,6],2));
// big o = o(n)



// ======= binary search ========
function BinarySearch(arr,n){  

    let right = arr.length-1;
    let left = 0
    let midd 

    while(left<=right){
       midd = Math.floor((right+left)/2);
       if(n===arr[midd]){
        return midd
       }else if(n<arr[midd]){
         right = midd-1
       }else{
         left = midd+1
       }
    }
    return false

} 
console.log(BinarySearch([1,2,3,4,5,6],1));
console.log(BinarySearch([10,20,30,4],100));
console.log(BinarySearch([1,2,3,4,5,6],2));
// big o = o(log(n))
