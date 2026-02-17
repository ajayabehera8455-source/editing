function bookService(service, price){
localStorage.setItem("serviceName", service);
localStorage.setItem("price", price);
window.location.href="booking.html";
}

if(document.getElementById("serviceName")){
document.getElementById("serviceName").value=
localStorage.getItem("serviceName");
}

const form=document.getElementById("bookingForm");
if(form){
form.addEventListener("submit",function(e){
e.preventDefault();
window.location.href="payment.html";
});
}

const payBtn=document.getElementById("payBtn");
if(payBtn){
payBtn.onclick=function(){
var options={
"key":"rzp_test_SH7mpATSCo6Wiy", 
"amount":localStorage.getItem("price")*100,
"currency":"INR",
"name":"AKSHAYA KUMAR",
"description":"Service Payment",
"handler":function(response){
window.location.href="success.html?payment_id="+response.razorpay_payment_id;
}
};
var rzp=new Razorpay(options);
rzp.open();
}
}
