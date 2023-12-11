let A, B, C;

if (A < B && B < C || A > B && B > C) {
    console.log("Sonlar o'sish tartibida berilgan");
    console.log("A qiymati: " + A*2);
    console.log("B qiymati: " + B*2);
    console.log("C qiymati: " + C*2);
  } else {
    console.log("Sonlar o'sish tartibida berilmagan");
    console.log("A qiymati: " + A*(-1));
    console.log("B qiymati: " + B*(-1));
    console.log("C qiymati: " + C*(-1));
  }