// card-6-----------
document.getElementById('cardNo6').addEventListener('click', function () {
   const cardPrice6 = document.getElementById('priceCard6')
   const cardPrice6String = cardPrice6.innerText;
   const price6 = parseFloat(cardPrice6String);
   // ---------------------------------
   const totalPrice = document.getElementById('total-Price');
   const totalPriceString = totalPrice.innerText;
   const inTotalPrice = parseFloat(totalPriceString);
   const currentPrice = inTotalPrice + price6;
   totalPrice.innerText = currentPrice;
   var couponCode = document.getElementById('coupon-Code')

   if (currentPrice >= 200) {
      couponCode.removeAttribute('disabled');
   }
   else {
      couponCode.setAttribute('disabled');
   }
    
})
// card-5------------
document.getElementById('cardNo5').addEventListener('click', function () {
   const cardPrice6 = document.getElementById('priceCard5')
   const cardPrice6String = cardPrice6.innerText;
   const price6 = parseFloat(cardPrice6String);
   // ---------------------------------
   const totalPrice = document.getElementById('total-Price');
   const totalPriceString = totalPrice.innerText;
   const inTotalPrice = parseFloat(totalPriceString);
   const currentPrice = inTotalPrice + price6;
   totalPrice.innerText = currentPrice;
   totalPrice.innerText = currentPrice;
   var couponCode = document.getElementById('coupon-Code')

   if (currentPrice >= 200) {
      couponCode.removeAttribute('disabled');
   }
   else {
      couponCode.setAttribute('disabled');
   }
    
})
// card-4------------
document.getElementById('cardNo4').addEventListener('click', function () {
   const cardPrice6 = document.getElementById('priceCard4')
   const cardPrice6String = cardPrice6.innerText;
   const price6 = parseFloat(cardPrice6String);
   // ---------------------------------
   const totalPrice = document.getElementById('total-Price');
   const totalPriceString = totalPrice.innerText;
   const inTotalPrice = parseFloat(totalPriceString);
   const currentPrice = inTotalPrice + price6;
   totalPrice.innerText = currentPrice;
   totalPrice.innerText = currentPrice;
   var couponCode = document.getElementById('coupon-Code')

   if (currentPrice >= 200) {
      couponCode.removeAttribute('disabled');
   }
   else {
      couponCode.setAttribute('disabled');
   }
 
})
// card-3------------
document.getElementById('cardNo3').addEventListener('click', function () {
   const cardPrice6 = document.getElementById('priceCard3')
   const cardPrice6String = cardPrice6.innerText;
   const price6 = parseFloat(cardPrice6String);
   // ---------------------------------
   const totalPrice = document.getElementById('total-Price');
   const totalPriceString = totalPrice.innerText;
   const inTotalPrice = parseFloat(totalPriceString);
   const currentPrice = inTotalPrice + price6;
   totalPrice.innerText = currentPrice;
   totalPrice.innerText = currentPrice;
   var couponCode = document.getElementById('coupon-Code')

   if (currentPrice >= 200) {
      couponCode.removeAttribute('disabled');
   }
   else {
      couponCode.setAttribute('disabled');
   }
   
})
// card-2------------
document.getElementById('cardNo2').addEventListener('click', function () {
   const cardPrice6 = document.getElementById('priceCard2')
   const cardPrice6String = cardPrice6.innerText;
   const price6 = parseFloat(cardPrice6String);
   // ---------------------------------
   const totalPrice = document.getElementById('total-Price');
   const totalPriceString = totalPrice.innerText;
   const inTotalPrice = parseFloat(totalPriceString);
   const currentPrice = inTotalPrice + price6;
   totalPrice.innerText = currentPrice;
   totalPrice.innerText = currentPrice;
   var couponCode = document.getElementById('coupon-Code')

   if (currentPrice >= 200) {
      couponCode.removeAttribute('disabled');
   }
   else {
      couponCode.setAttribute('disabled');
   }

   
})
// card-1------------
document.getElementById('cardNo1').addEventListener('click', function () {
   const cardPrice6 = document.getElementById('priceCard1')
   const cardPrice6String = cardPrice6.innerText;
   const price6 = parseFloat(cardPrice6String);
   // ---------------------------------
   const totalPrice = document.getElementById('total-Price');
   const totalPriceString = totalPrice.innerText;
   const inTotalPrice = parseFloat(totalPriceString);
   const currentPrice = inTotalPrice + price6;
   totalPrice.innerText = currentPrice;
   totalPrice.innerText = currentPrice;
   var couponCode = document.getElementById('coupon-Code')

   if (currentPrice >= 200) {
      couponCode.removeAttribute('disabled');
   }
   else {
      couponCode.setAttribute('disabled');
   }
    
})
document.getElementById('btn-apply').addEventListener('click', function () {
   const totalPrice = document.getElementById('total-Price')
   const totalPriceString = totalPrice.innerText;
   const currentPrice = parseFloat(totalPriceString);
   const discountPrice = document.getElementById('discount')
   const discountPriceString = discountPrice.innerText;
   const previousdiscountPrice = parseFloat(discountPriceString);
   const currentdiscountPrice = 20 / 100 * currentPrice;
   const fixedDiscountPrice = currentdiscountPrice.toFixed(2);
   discountPrice.innerText = fixedDiscountPrice;
   const totalMoneyCost = document.getElementById('total');
   const totalMoneyCostString = totalMoneyCost.innerText;
   const previousTotalMoney = parseFloat(totalMoneyCostString);
   const currentTotalMoney = currentPrice - currentdiscountPrice;
   totalMoneyCost.innerText = currentTotalMoney;
})

document.getElementById('btn-home').addEventListener('click', function () {
   const inputTotal = document.getElementById('total');
   const inputTotalString = inputTotal.innerText;
   inputTotal.innerText = '00';
   const discountPrice = document.getElementById('discount')
   const discountPriceString = discountPrice.innerText;
   discountPrice.innerText = '00';
   const totalPrice = document.getElementById('total-Price')
   const totalPriceString = totalPrice.innerText;
   totalPrice.innerText = '00';
   const outputTextArea = document.getElementById('outputTextArea')
   const outputTextAreaString = outputTextArea.value;
   outputTextArea.value = '';
})