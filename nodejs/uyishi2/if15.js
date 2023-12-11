let A = 3, B = 9, C = 5, middle;
let min = Math.min(A, B, C); 
let maks = Math.max(A, B, C); 

if (A <= B && A >= C || A >= B && A <= C) {
    middle = A;
}else if (B <= A && B >= C || B >= A && B <= C) {
    middle = B;
}else{
    middle = C;
}

let engkattayigindi = maks + middle;
let engkatta2yigindi = maks + min;

console.log(engkattayigindi);
console.log(engkatta2yigindi);