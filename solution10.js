const num = 9669

var maximum69Number  = function(num) {
    let numString = String(num)
    let arr = numString.split('');
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '6') {
            arr[i] = '9';
            break;
        }
    }
    return Number(arr.join(''));
};