const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
  arr[1].splice(10,0,42);
  console.log("---------" + arr + "---------");
  
  arr.push([30,31,32,33,34,35]);
  console.log("---------" + arr + "---------");

  arr[1].splice(10,1);
  console.log("---------" + arr + "---------");

  arr[2].reverse();
  console.log("---------" + arr + "---------");
  // Type your code above this line!