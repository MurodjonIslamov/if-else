let son1 = 5, son2 = 3;

if (son1 < son2 && son1 != son2) {
    console.log("Kichik son A va bu = " + son1);
    console.log("Katta son B va bu = " + son2);
    
}else if (son1 > son2 && son1 != son2) {
    son2 = son1 - son2;
    son1 = son1 - son2;
    son2 = son1 + son1;

    console.log("A soni katta ekan va B soni bilan qiymati almashdi");
    console.log("Natija:");
    console.log("Kichik son A va bu = " + son1);
    console.log("Katta son B va bu = " + son2);
}else{
    console.log("Ikkala sonning qiymati bir xil");
}

/*Ushbu misol xech qanday o'zgaruvchi ochmasdan ishlandi...*/