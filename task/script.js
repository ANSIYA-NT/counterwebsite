document.addEventListener('DOMContentLoaded', function() {
    const counterDisplay = document.getElementById('counterDisplay');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');
    let counter = 0;

      function updateDisplay() {
        counterDisplay.textContent = counter;
      }
    incrementBtn.addEventListener('click', function() {
        counter++;  
        updateDisplay();  
    });

    decrementBtn.addEventListener('click', function() {
        counter--; 
        updateDisplay();  
    });

    resetBtn.addEventListener('click', function() {
        counter = 0;  
        updateDisplay();  
    });
});
