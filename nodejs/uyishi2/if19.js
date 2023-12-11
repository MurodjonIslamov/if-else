function tartibRaqaminiAniqlash(son1, son2, son3, son4) {
    var tartibRaqami;
    
    if (son1 === son2 && son2 === son3) {
      tartibRaqami = 4;
    } else if (son1 === son2 && son2 === son4) {
      tartibRaqami = 3;
    } else if (son1 === son3 && son3 === son4) {
      tartibRaqami = 2;
    } else if (son2 === son3 && son3 === son4) {
      tartibRaqami = 1;
    } else {
      tartibRaqami = 0;
    }
    
    console.log("Tartib raqami: " + tartibRaqami);
  }
  
  tartibRaqaminiAniqlash(2, 2, 2, 5);