function totalPrice() {
    var price1 = Number(document.getElementById("price1").value);
    var price2 = Number(document.getElementById("price2").value);
    var price3 = Number(document.getElementById("price3").value);
    var price4 = Number(document.getElementById("price4").value);
    var price5 = Number(document.getElementById("price5").value);

    var item1 = document.getElementById("item1").value;
    var item2 = document.getElementById("item2").value;
    var item3 = document.getElementById("item3").value;
    var item4 = document.getElementById("item4").value;
    var item5 = document.getElementById("item5").value;

    // Total price show 
    const total = price1 + price2 + price3 + price4 + price5;
    document.getElementById("totalPrice").innerHTML = total;
    document.getElementById("tk").innerHTML = '&nbsp;TK';

    // Item list 
    if (item1 != "") {
        const para = document.createElement("li");
        const node = document.createTextNode(item1);
        para.appendChild(node);
        const element = document.getElementById("itemlist");
        element.appendChild(para);
    }
    if (item2 != "") {
        const para1 = document.createElement("li");
        const node2 = document.createTextNode(item2);
        para1.appendChild(node2);
        const element1 = document.getElementById("itemlist");
        element1.appendChild(para1);
    }
    if (item3 != "") {
        const para3 = document.createElement("li");
        const node3 = document.createTextNode(item3);
        para3.appendChild(node3);
        const element3 = document.getElementById("itemlist");
        element3.appendChild(para3);
    }
    if (item4 != "") {
        const para4 = document.createElement("li");
        const node4 = document.createTextNode(item4);
        para4.appendChild(node4);
        const element4 = document.getElementById("itemlist");
        element4.appendChild(para4);
    }
    if (item5 != "") {
        const para5 = document.createElement("li");
        const node5 = document.createTextNode(item5);
        para5.appendChild(node5);
        const element5 = document.getElementById("itemlist");
        element5.appendChild(para5);
    }



    // Price list
    if (price1 != 0) {
        const paraP1 = document.createElement("li");
        const nodeP1 = document.createTextNode(price1);
        paraP1.appendChild(nodeP1);
        const elementP1 = document.getElementById("pricelist");
        elementP1.appendChild(paraP1);
    }
    if (price2 != 0) {
        const paraP2 = document.createElement("li");
        const nodeP2 = document.createTextNode(price2);
        paraP2.appendChild(nodeP2);
        const elementP2 = document.getElementById("pricelist");
        elementP2.appendChild(paraP2);
    }
    if (price3 != 0) {
        const paraP3 = document.createElement("li");
        const nodeP3 = document.createTextNode(price3);
        paraP3.appendChild(nodeP3);
        const elementP3 = document.getElementById("pricelist");
        elementP3.appendChild(paraP3);
    }
    if (price4 != 0) {
        const paraP4 = document.createElement("li");
        const nodeP4 = document.createTextNode(price4);
        paraP4.appendChild(nodeP4);
        const elementP4 = document.getElementById("pricelist");
        elementP4.appendChild(paraP4);
    }
    if (price5 != 0) {
        const paraP5 = document.createElement("li");
        const nodeP5 = document.createTextNode(price5);
        paraP5.appendChild(nodeP5);
        const elementP5 = document.getElementById("pricelist");
        elementP5.appendChild(paraP5);
    }

    if ( (item1 != "" && item2 != "") && (price1 != 0 && price2 != 0)){ 
        document.getElementById("line").innerHTML = "----------------------------------";
        document.getElementById("itotal").innerHTML = "Total(tk):";
        document.getElementById("ptotal").innerHTML = total;

    } 

}

window.onload = function () {

    document.getElementById('item1').value = '';
    document.getElementById('item2').value = '';
    document.getElementById('item3').value = '';
    document.getElementById('item4').value = '';
    document.getElementById('item5').value = '';

    document.getElementById('price1').value = '';
    document.getElementById('price2').value = '';
    document.getElementById('price3').value = '';
    document.getElementById('price4').value = '';
    document.getElementById('price5').value = '';
}