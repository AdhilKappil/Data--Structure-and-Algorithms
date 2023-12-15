
// 
function sorting(arr){

    let swaped
    do{
        swaped = false
        for(let i=0; i<arr.length; i++){
            let temmp
            if(arr[i]>arr[i+1]){
                temmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temmp;
                swaped = true;
            }
        }
    }
    while(swaped)
}

const arr = [4,7,1,2,7,0]
sorting(arr)
console.log(arr);