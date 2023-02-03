//const arr= [10,20,25,35,45,30,40,50,60]
// let a= arr.map(ele=>ele*10)
// let b= arr.filter(ele=>ele % 2 ==0)
// let currVal=0
// let c = arr.reduce((accu,currVal)=>accu+currVal)
// console.log(a);
// console.log(b);
// console.log(c);

// let arr=['a','b','c']
// console.log(...arr)


// var myArray = ["sagar","sagarsolanki","sagar"];

// let unique = [...new Set(myArray)];

// console.log(unique); // unique is ['a', 1, 2, '1']


// Images= ["https://www.helenemoda.com/wp-content/uploads/2016/10/122_cotd_2.jpg", "https://www.helenemoda.com/wp-content/uploads/2016/10/122_cotd_2.jpg", "https://www.helenemoda.com/wp-content/uploads/2016/10/122_cotd_2_1.jpg", "https://www.helenemoda.com/wp-content/uploads/2021/11/final-size-chart-women.png"]

// let unique = [...new Set(Images)];

// console.log(unique); // unique is ['a', 1, 2, '1']

let text="This CHIC One Piece has soft cups and transparent details with a mesh insert, halter neckline, wrap design, open back. It can be used as a swimwear or as a sophisticated top. \\n- Aqua Perla beachwear \\n- For women \\n- Style: One Piece Swimsuit \\n- Fit: Regular \\n- Soft cups \\n- Halter neckline \\n- Wrap design \\n- Front mesh panel \\n- Lycra \\n- Chlorine and mildew resistance \\n- Composition: 80% Polyamide 20% Lycra \\n- Wet or dry lasting shape retention \\n- Hand wash with care \\n- Country of origin: Turkey \\n- Our model wears 38 (10 or M) \\n- Available in women's sizing - see size chart for correct fit! \\nPlease note: Change of mind returns will not be accepted for this item due to hygiene reasons."
let change=text.replace(/\\n-/g, ",");
console.log(change);