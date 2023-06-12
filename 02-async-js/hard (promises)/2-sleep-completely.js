/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {

    let d = Date.now();
    while (true) {
        let D = Date.now();

        if ((D - d) >= seconds * 1000) break;
    }
}

sleep(4)
console.log('hello')