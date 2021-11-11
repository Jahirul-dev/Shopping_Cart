var subval1 = 0;
var subval2 = 0;
var test3 =0;
var test2 = 0;
var IncreaseProductPrice ;
function Products(Product,val,total){
    //code for increase and decrease
    const ProductQuantity1 = document.getElementById(Product);
    let ProductQuantityNum = parseInt(ProductQuantity1.value);
    if (val == true){
        ProductQuantityNum++;
    }   
    if(val == false && ProductQuantityNum>0)
    ProductQuantityNum--;
    document.getElementById(Product).value = ProductQuantityNum;
    //code for increase and price
    const ProductPrices = document.getElementById(total).innerHTML;
    if(total == "Phonetotal"){
    IncreaseProductPrice = ProductQuantityNum * 1219;
    document.getElementById(total).innerHTML = '$' +IncreaseProductPrice;
    test2 = IncreaseProductPrice;
    }
    if(total == "Casetotal") {
    IncreaseProductPrice = ProductQuantityNum * 50;
    document.getElementById(total).innerHTML = '$'+ IncreaseProductPrice;
    test3 = IncreaseProductPrice;
    }
    subtotal1 =  test3 + test2 ;
    if(val == true){
        subval1 =  subtotal1;
        document.getElementById('subtotal').innerHTML = subval1;
    }
    if( val == false && ProductQuantityNum>=0){
        subval2 =  subtotal1;
        document.getElementById('subtotal').innerHTML = subval2 ;
    }
    let tax = (subtotal1/100)*15;
    document.getElementById('tax').innerHTML =  tax;
    document.getElementById('total').innerHTML = tax+subtotal1
    
}