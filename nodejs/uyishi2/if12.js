let son1, son2, son3;
let min, max;

if (son1 <= son2 && son1 <= son3) {
    min = son1;
}else if (son2 <= son1 && son2 <= son3) {
    min = son2;
}else{
    min = son3;
}
    console.log("Eng kichik son = " + min);