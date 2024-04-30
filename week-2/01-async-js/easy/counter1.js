let counter = 0;

function increaseCounter() {
    console.log(counter++)
    setTimeout(increaseCounter, 1000);
}

increaseCounter()