const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

const formatResult = (result) => {
    if (typeof result === 'number') {
        if (result % 1 === 0) {
            return result.toString();
        } else {
            return parseFloat(result.toFixed(5));
        }
    }
    return result;
}

function calculate(expression) {
    return new Function(`return ${expression}`)();
}

buttons.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.id == 'clear') {
            display.textContent = '';
        } else if (item.id == 'backspace') {
            display.textContent = display.textContent.slice(0, -1);
        } else if (display.textContent != '' && item.id == 'equal') {
            let result = calculate(display.textContent);
                result = formatResult(result);
                display.textContent = result;
        } else if (display.textContent == '' && item.id == 'equal') {
            display.textContent = 'Empty';
            setTimeout(() => {
                display.textContent = '';
            }, 2000);
        } else {
            display.textContent += item.id;
        }
    });
});
