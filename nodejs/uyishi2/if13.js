let A, B, C;
let min, max, middle;

if (A <= B && A >= C || A >= B && A <= C) {
    middle = A;
}else if (B <= A && B >= C || B >= A && B <= C) {
    middle = B;
}else{
    middle = C;
}

console.log("Ortacha son bu = " + middle);