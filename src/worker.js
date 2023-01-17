const start = () => {
  let count = 0;
  setInterval(() => {
    postMessage(++count);
  }, 10000);
};

start();
