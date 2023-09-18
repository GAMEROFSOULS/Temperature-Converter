<script>
    function convert() {
        const temperatureInput = document.getElementById('temperature');
        const unitSelector = document.getElementById('unit');
        const resultElement = document.getElementById('result');
        
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelector.value;
        
        if (isNaN(temperature)) {
            resultElement.innerHTML = 'Please enter a valid number.';
            resultElement.style.opacity = 1; // Ensure result is visible
            return;
        }
        
        let result;
        if (unit === 'celsius') {
            result = (temperature * 9/5) + 32;
            resultElement.innerHTML = `${temperature} Celsius is equal to ${result} Fahrenheit.`;
        } else if (unit === 'fahrenheit') {
            result = (temperature - 32) * 5/9;
            resultElement.innerHTML = `${temperature} Fahrenheit is equal to ${result} Celsius.`;
        }

        // Show the result with animation
        resultElement.style.opacity = 1;
    }
</script>
