
const quatityText = document.getElementById('quatity-text');
const showQuantity = document.getElementById('show-quantity');
const showTotal = document.getElementById('show-total');

function inc(){
    let quatity = parseInt(quatityText.innerText);

    if(quatity<10){
        quatityText.innerText = ++quatity;
    }
    else{
        alert("You can't add more than 10 items");
    }
    
    setTotalAmount(quatity);
}

function dec(){
  let quatity = parseInt(quatityText.innerText);

    if(quatity > 1){
        quatityText.innerText = --quatity;
    }
    else{
        alert("You can't add less than 1 item");
    }

    setTotalAmount(quatity);
}
function setTotalAmount(quatity){
    showQuantity.innerText = `${quatity} x 900`;
    showTotal.innerText = `Total: ${quatity * 900}`;
}

