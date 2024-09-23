
document.getElementById("btn1").addEventListener('click', function(){
  
  // document.getElementById("mainDiv").classList.remove("hidden")

})

document.getElementById('donate-btn-1').addEventListener('click',function(){
  
  const donateInput1 = parseFloat(document.getElementById('donate-input-1').value)
  if(isNaN(donateInput1)|| donateInput1<0 ){
    alert("Please Enter Valid Amount")
    return
   }

   if(donateInput1 > 10000){
    alert("You Don't have suficient Balance")
    return
  }
  const para1Amount = document.getElementById('para1-amount')
  para1Amount.innerText = donateInput1
  const accountBalance = document.getElementById('account-balance').innerText
  const newAccountBalance = parseFloat(accountBalance)
const remainingBalance= newAccountBalance - donateInput1
 accountBalance.innerText= remainingBalance

 if(donateInput1 > remainingBalance){
  alert("You Don't have suficient Balance")
  return
}
 document.getElementById('account-balance').innerText = remainingBalance 
})

document.getElementById('donate-btn-2').addEventListener('click',function(){
  
  const donateInput1 = parseFloat(document.getElementById('donate-input-2').value)
  const para1Amount = document.getElementById('para2-amount')
  para1Amount.innerText = donateInput1
  const accountBalance = document.getElementById('account-balance').innerText
  const newAccountBalance = parseFloat(accountBalance)
  
 const remainingBalance= newAccountBalance - donateInput1
 accountBalance.innerText= remainingBalance
 document.getElementById('account-balance').innerText = remainingBalance 
})

document.getElementById('donate-btn-3').addEventListener('click',function(){
  
  const donateInput1 = parseFloat(document.getElementById('donate-input-3').value)
  const para1Amount = document.getElementById('para3-amount')
  para1Amount.innerText = donateInput1
  const accountBalance = document.getElementById('account-balance').innerText
  const newAccountBalance = parseFloat(accountBalance)
  
 const remainingBalance= newAccountBalance - donateInput1
 accountBalance.innerText= remainingBalance
 document.getElementById('account-balance').innerText = remainingBalance 
})

