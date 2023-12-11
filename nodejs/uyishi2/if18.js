function tartibRaqaminiAniqlash(son1, son2, son3) {
    var tartibRaqami;
    
    if (son1 === son2 && son2 === son3) {
      tartibRaqami = 0;
    } else if (son1 === son2) {
      tartibRaqami = 3;
    } else if (son1 === son3) {
      tartibRaqami = 2;
    } else if (son2 === son3) {
      tartibRaqami = 1;
    } else {
      tartibRaqami = -1;
    }
    
    console.log("Tartib raqami: " + tartibRaqami);
  }
  
  tartibRaqaminiAniqlash(2, 2, 3);