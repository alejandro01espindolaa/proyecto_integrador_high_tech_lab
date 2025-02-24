// Refer to Task 5 in your Instructions to complete this task

for (let i = 1; i < 106; i++) {
  let esMultiplo = "";
  
  if (i % 3 == 0) esMultiplo += "Fizz";
  if (i % 5 == 0) esMultiplo += "Buzz";
  if (i % 7 == 0) esMultiplo += "Woof";

  console.log(esMultiplo || i);
}

