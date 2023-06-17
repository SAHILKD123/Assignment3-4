function convert() {
    //event.preventDefault();
  
    var cadInput = document.getElementById('cad');
    var usdInput = document.getElementById('usd');
    var cadAmount = cadInput.value;
    var usdAmount = usdInput.value;
  
    // Check if both CAD and USD amounts are filled
    if (cadAmount && usdAmount) {
      alert('Please fill either CAD or USD amount, not both.');
      return;
    }
  
    // Check if CAD amount is filled
    if (cadAmount) {
      // Convert CAD to USD
      if (isNaN(cadAmount)) {
        usdInput.value = ''; // Clear USD input field
        alert('Invalid input. Please enter a valid CAD amount.');
        return;
      }
  
      var usdAmount = (cadAmount / 1.23).toFixed(3);
      usdInput.value = usdAmount;
    }
  
    // Check if USD amount is filled
    if (usdAmount) {
      // Convert USD to CAD
      if (isNaN(usdAmount)) {
        cadInput.value = ''; // Clear CAD input field
        alert('Invalid input. Please enter a valid USD amount.');
        return;
      }
  
      var cadAmount = (usdAmount * 1.23).toFixed(3);
      cadInput.value = cadAmount;
    }
  
   
}
  

