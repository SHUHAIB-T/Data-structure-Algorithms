const worker = new Worker("worker.js");
worker.postMessage("Hello from main thread");

worker.onmessage((e) => {
    console.log(e);
})