let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnValue = e.target.innerHTML;

        if (btnValue === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } 
        else if (btnValue === 'AC') {
            string = "";
            input.value = string;
        } 
        else if (btnValue === 'Del') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } 
        else {
            // Prevent leading zeros
            if ((string === "" && (btnValue === "0" || btnValue === "00")) || 
                (string.endsWith("0") && (btnValue === "0" || btnValue === "00") && string.length === 1)) {
                return; // Ignore adding "0" or "00" at the beginning
            }
            string += btnValue;
            input.value = string;
        }
    });
});
