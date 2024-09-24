document.getElementById('btn1').addEventListener('click', function() {
  
 document.getElementById('mainDiv').classList.remove('hidden');
  
  document.getElementById('history-main-div').classList.add('hidden');
});


document.getElementById('btn2').addEventListener('click', function() {
  
  document.getElementById('history-main-div').classList.remove('hidden');

  document.getElementById('mainDiv').classList.add('hidden');
});

               //  FUND CALCULATION

                 // DONATE-1
document.getElementById('donate-btn-1').addEventListener('click', function() {
  
  const donateInput1 = parseFloat(document.getElementById('donate-input-1').value);
  if (isNaN(donateInput1) || donateInput1 <= 0) {
    alert("Please Enter a Valid Amount");
    return;
  }
  const accountBalanceElement = document.getElementById('account-balance');
  const currentBalance = parseFloat(accountBalanceElement.innerText);

   if (donateInput1 > currentBalance) {
    alert("You Don't have sufficient balance");
    return;
  }

  const para1Amount = document.getElementById('para1-amount');
  para1Amount.innerText = donateInput1;
  const remainingBalance = currentBalance - donateInput1;
  accountBalanceElement.innerText = remainingBalance;
  const p = document.createElement("p");
  p.classList.add('text-lg', 'font-bold', 'my-2', 'border-gray-900', 'border', 'border-gray-400', 'border-1', 'rounded-md', 'p-4', 'my-4');
  p.innerText = `${donateInput1} TK Donated for Flood at Noakhali, Bangladesh`;
  document.getElementById('transection-data').appendChild(p);
});

                   // DONATE-2

document.getElementById('donate-btn-2').addEventListener('click', function() {
  
  const donateInput1 = parseFloat(document.getElementById('donate-input-2').value);
  if (isNaN(donateInput1) || donateInput1 <= 0) {
    alert("Please Enter a Valid Amount");
    return;
  }

  const accountBalanceElement = document.getElementById('account-balance');
  const currentBalance = parseFloat(accountBalanceElement.innerText);
  
  if (donateInput1 > currentBalance) {
    alert("You Don't have sufficient balance");
    return;
  }
 const para1Amount = document.getElementById('para2-amount');
 para1Amount.innerText = donateInput1;
 const remainingBalance = currentBalance - donateInput1;
 accountBalanceElement.innerText = remainingBalance;
  
  const p = document.createElement("p");
  p.classList.add('text-lg', 'font-bold', 'my-2', 'border-gray-900', 'border', 'border-gray-400', 'border-1', 'rounded-md', 'p-4', 'my-4');
  p.innerText = `${donateInput1} TK Donated for Flood at Noakhali, Bangladesh`;
  document.getElementById('transection-data').appendChild(p);
});

                  // DONATE-3

document.getElementById('donate-btn-3').addEventListener('click', function() {
  
  const donateInput1 = parseFloat(document.getElementById('donate-input-3').value);
  if (isNaN(donateInput1) || donateInput1 <= 0) {
    alert("Please Enter a Valid Amount");
    return;
  }
  const accountBalanceElement = document.getElementById('account-balance');
  const currentBalance = parseFloat(accountBalanceElement.innerText);
  if (donateInput1 > currentBalance) {
    alert("You Don't have sufficient balance");
    return;
  }
  const para1Amount = document.getElementById('para3-amount');
  para1Amount.innerText = donateInput1;
  const remainingBalance = currentBalance - donateInput1;
  accountBalanceElement.innerText = remainingBalance;
  
  const p = document.createElement("p");
  p.classList.add('text-lg', 'font-bold', 'my-2', 'border-gray-900', 'border', 'border-gray-400', 'border-1', 'rounded-md', 'p-4', 'my-4');
  p.innerText = `${donateInput1} TK Donated for Flood at Noakhali, Bangladesh`;
  document.getElementById('transection-data').appendChild(p);
});

