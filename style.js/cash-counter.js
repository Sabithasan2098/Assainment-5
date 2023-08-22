var btnApply = document.getElementById('btn-apply');
var couponCode = document.getElementById('coupon-Code');
var couponCodeString = couponCode.value;
if(couponCodeString === 'SELL200'){
   btnApply.removeAttribute('disabled');
}
else{
   this.setAttribute('disabled');
}