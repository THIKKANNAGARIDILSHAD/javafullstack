// stack array to store elements
let stack = [];

// Push function
function push() {
    let value = document.getElementById("value").value;

    if (value === "") {
        document.getElementById("output").innerText = "Enter a value to push!";
        return;
    }

    stack.push(value);  // add value to stack
    document.getElementById("output").innerText = "Pushed: " + value;
    document.getElementById("value").value = ""; // clear input
}

// Pop function
function pop() {
    if (stack.length === 0) {
        document.getElementById("output").innerText = "Stack is empty!";
        return;
    }

    let removed = stack.pop(); // remove last element
    document.getElementById("output").innerText = "Popped: " + removed;
}

// Status function
function status() {
    if (stack.length === 0) {
        document.getElementById("output").innerText = "Stack is empty!";
        return;
    }

    document.getElementById("output").innerText = "Stack: " + stack.join(", ");
}