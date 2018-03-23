var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("button");

Array.prototype.forEach.call(buttons, function(button) {
    button.addEventListener("click", function() {
		//
        if (button.textContent != "=" &&
            button.textContent != "CE" &&
            button.textContent != "*" &&
            button.textContent != "/" &&
            button.textContent != "sqrt" &&
            button.textContent != "x^2" &&
            button.textContent != "%" &&
            button.textContent != "<=" &&
            button.textContent != "+/-" &&
            button.textContent != "sin" &&
            button.textContent != "cos" &&
            button.textContent != "tan" &&
            button.textContent != "log" &&
            button.textContent != "ln" &&
            button.textContent != "x^" &&
            button.textContent != "x !" &&
            button.textContent != "pi" &&
            button.textContent != "e" &&
            button.textContent != "rad" && button.textContent != "deg") 
		{
            display.value += button.textContent;
        } else if (button.textContent === "=") { 
            equals();
        } else if (button.textContent === "CE") { 
            clear();
        } else if (button.textContent === "*") { 
            multiply();
        } else if (button.textContent === "/") { 
            divide();
        } else if (button.textContent === "+/-") { 
            plusMinus();
        } else if (button.textContent === "<=") { 
            backspace();
        } else if (button.textContent === "%") { 
            percent();
        } else if (button.textContent === "pi") { 
            pi();
        } else if (button.textContent === "x^2") {
            square();
        } else if (button.textContent === "sqrt") { 
            squareRoot();
        } else if (button.textContent === "sin") { 
            sin();
        } else if (button.textContent === "cos") { 
            cos();
        } else if (button.textContent === "tan") { 
            tan();
        } else if (button.textContent === "log") { 
            log();
        } else if (button.textContent === "ln") { 
            ln();
        } else if (button.textContent === "x^") { 
            exponent();
        } else if (button.textContent === "x !") {
            factorial();
        } else if (button.textContent === "e") {
            eulersNumber();
        } else if (button.textContent === "rad") { 
            radians();
        } else if (button.textContent === "deg") { 
            degrees();
        }
    });
});


function syntaxError() {
    if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
        display.value == "Syntax Error";
    }
}


function equals() {
    if ((display.value).indexOf("^") > -1) {
        var base = (display.value).slice(0, (display.value).indexOf("^"));
        var exponent = (display.value).slice((display.value).indexOf("^") + 1);
        display.value = eval("Math.pow(" + base + "," + exponent + ")");
    } else {
		
		display.value = eval(display.value);
        syntaxError();
    }
}

function clear() {
    display.value = "";
}

function backspace() {
    display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
    display.value += "*";
}

function divide() {
    display.value += "/";
}

function plusMinus() {
    if (display.value.charAt(0) === "-") {
        display.value = display.value.slice(1);
    } else {
        display.value = "-" + display.value;
    }
}

function factorial() {
    var number = 1;
    if (display.value === 0) {
        display.value = "1";
    } else if (display.value < 0) {
        display.value = "Undefined";
    } else {
        var number = 1;
		var castedNumber = 1;
		
		if ((display.value * 10) % 10 < 5) {
			castedNumber = Math.floor(display.value);
		}
		else {
			castedNumber = Math.ceil(display.value);
		}
		
        for (var i = castedNumber; i > 1; i--) {
            number *= i;
        }
        display.value = number;
    }
}

function pi() {
	display.value += (Math.PI).toString();
}

function eulersNumber() {
	display.value += (Math.E).toString();
}

function square() {
    display.value = eval(display.value * display.value);
}

function squareRoot() {
    display.value = Math.sqrt(display.value);
}

function percent() {
    display.value = display.value / 100;
}

function sin() {
    display.value = Math.sin(display.value);
}

function cos() {
    display.value = Math.cos(display.value);
}

function tan() {
    display.value = Math.tan(display.value);
}

function log() {
    display.value = Math.log10(display.value);
}

function ln() {
    display.value = Math.log(display.value);
}

function exponent() {
    display.value += "^";
}

function exp() {
    display.value = Math.exp(display.value);
}

function radians() {
    display.value = (display.value / 180) * Math.PI;
}

function degrees() {
    display.value = (display.value / Math.PI) * 180;
}