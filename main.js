document.getElementById('btn1').addEventListener('click', function() {
  
  document.getElementById('mainDiv').classList.remove('hidden');
  
  document.getElementById('history-main-div').classList.add('hidden');
});


document.getElementById('btn2').addEventListener('click', function() {
  
  document.getElementById('history-main-div').classList.remove('hidden');

  document.getElementById('mainDiv').classList.add('hidden');
});


   


//  FUND CALCULATION

document.getElementById('donate-btn-1').addEventListener('click',function(){
      //  MODAL
  
      
  
  // MODAL END
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
    //  HISTORY 1
 const p= document.createElement("p")
 p.classList.add( 'text-lg', 'font-bold', 'my-2' ,'border-gray-900','border',   
  'border-gray-400','border-1','rounded-md','p-4','my-4', 
)
 p.innerText=` ${donateInput1} TK Donate for Flood at Noakhali, Bangladesh`
 document.getElementById('transection-data').appendChild(p)


 if(donateInput1 > remainingBalance){
  alert("You Don't have suficient Balance")
  return
}
 document.getElementById('account-balance').innerText = remainingBalance 
})

document.getElementById('donate-btn-2').addEventListener('click',function(){
  
  const donateInput1 = parseFloat(document.getElementById('donate-input-2').value)
  if(isNaN(donateInput1)|| donateInput1<0 ){
    alert("Please Enter Valid Amount")
    return
   }

   if(donateInput1 > 10000){
    alert("You Don't have suficient Balance")
    return
  }
  const para1Amount = document.getElementById('para2-amount')
  para1Amount.innerText = donateInput1
  const accountBalance = document.getElementById('account-balance').innerText
  const newAccountBalance = parseFloat(accountBalance)
  
 const remainingBalance= newAccountBalance - donateInput1
 accountBalance.innerText= remainingBalance
          //  HISTORY 2
 const p= document.createElement("p")
 p.classList.add( 'text-lg', 'font-bold', 'my-2' ,'border-gray-900','border',   
  'border-gray-400','border-1','rounded-md','p-4','my-4', 
)
 p.innerText=` ${donateInput1} TK Donate for Flood Relief in Feni,Bangladesh`
 document.getElementById('transection-data').appendChild(p)
 
 
 if(donateInput1 > remainingBalance){
  alert("You Don't have suficient Balance")
  return
}
 document.getElementById('account-balance').innerText = remainingBalance 
})

document.getElementById('donate-btn-3').addEventListener('click',function(){
  
  const donateInput1 = parseFloat(document.getElementById('donate-input-3').value)
  if(isNaN(donateInput1)|| donateInput1<0 ){
    alert("Please Enter Valid Amount")
    return
   }

   if(donateInput1 > 10000){
    alert("You Don't have suficient Balance")
    return
  }
  const para1Amount = document.getElementById('para3-amount')
  para1Amount.innerText = donateInput1
  const accountBalance = document.getElementById('account-balance').innerText
  const newAccountBalance = parseFloat(accountBalance)
  
 const remainingBalance= newAccountBalance - donateInput1
 accountBalance.innerText= remainingBalance
           //  HISTORY 3
 const p= document.createElement("p")
 p.classList.add( 'text-lg', 'font-bold', 'my-2' ,'border-gray-900','border',   
  'border-gray-400','border-1','rounded-md','p-4','my-4', 
)
 p.innerText=` ${donateInput1} TK Aid for Injured in the Quota Movement`
 document.getElementById('transection-data').appendChild(p)
 if(donateInput1 > remainingBalance){
  alert("You Don't have suficient Balance")
  return
}
 document.getElementById('account-balance').innerText = remainingBalance 
})

