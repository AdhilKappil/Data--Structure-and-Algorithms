const str = 'My name is Adhil'
console.log(str.split(' ').reverse().join(' '));
console.log(str.split(' ').map((val)=>val.split('').reverse().join('')).join(' '));