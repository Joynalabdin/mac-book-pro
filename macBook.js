// Memory Cost
const extraMemoryCost = document.getElementById("extra-memory-cost");
const totalPrice = document.getElementById("total-price");
// Memory Button
document.getElementById("eightGB-memory").addEventListener("click",function(){
    extraMemoryCost.innerText= 0;
    updateTotal();
})
document.getElementById("sixteenGB-memory").addEventListener("click",function(){
    extraMemoryCost.innerText= 180;
    updateTotal();
    
})
// Memroy update function
function updateTotal(){
    let memoryCharge = parseInt(extraMemoryCost.innerText)
    let priceCharge = parseInt(totalPrice.innerText)
    let grandTotal = priceCharge + memoryCharge;
    if(memoryCharge == 0){
    grandTotal = priceCharge - 180;
    }
    document.getElementById("total-price").innerText = grandTotal;
    document.getElementById("sub-total").innerText = grandTotal;

}


// storage Cost
const extraStorageCost = document.getElementById("extra-storage-cost");
const totalStoragePrice = document.getElementById("total-price");

// storage button
document.getElementById("256GB-storage").addEventListener("click",function(){
    extraStorageCost.innerText= 0; 
})
document.getElementById("512GB-storage").addEventListener("click",function(){
    extraStorageCost.innerText= 100;
    updateStorageTotal();
})
document.getElementById("1TB-storage").addEventListener("click",function(){
    extraStorageCost.innerText= 180;
    updateStorageTotal();
})

// storage function
function updateStorageTotal(){
    let storageCharge = parseInt(extraStorageCost.innerText)
    let priceCharge = parseInt(totalStoragePrice.innerText);
    let grandTotal = priceCharge + storageCharge;
    if(storageCharge == 0){
        grandTotal = priceCharge - 100;
    }
    document.getElementById("total-price").innerText = grandTotal;
    document.getElementById("sub-total").innerText = grandTotal;
}

// delivery Cost
const deliveryCharge = document.getElementById("delivery-charge");
const deliveryTotal = document.getElementById("total-price");

// Delivery Button
document.getElementById("free-delivery").addEventListener("click",function(){
    deliveryCharge.innerText= 0;
    updateTotal();
})
document.getElementById("normal-delivery").addEventListener("click",function(){
    deliveryCharge.innerText= 20;
    updateTotal();
    
})
// Delivery update function
function updateTotal(){
    let memoryCharge = parseInt(deliveryCharge.innerText)
    let priceCharge = parseInt(deliveryTotal.innerText)
    let grandTotal = priceCharge + memoryCharge;
    if(memoryCharge == 0){
    grandTotal = priceCharge - 20;
    }
    document.getElementById("total-price").innerText = grandTotal;
    document.getElementById("sub-total").innerText = grandTotal;

}

document.getElementById("button-addon2").addEventListener("click",function(){
    let promoCode = document.getElementById("promo-code").value
    let promoTotal = document.getElementById("sub-total").innerText 
    let grandAmount = document.getElementById("total-price").innerText
    if(promoCode == "stevekaku"){
        promoTotal = promoTotal/20;
    }
    const setTotal = grandAmount - promoTotal;
    document.getElementById("sub-total").innerText=setTotal ;
    document.getElementById("promo-code").value = "";
})