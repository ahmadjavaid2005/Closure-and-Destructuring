let clickCounter = (function () {
  let count = 0;

  return function () {
    count++;
    console.log(`Button clicked ${count} times`);
  };
})();

// Usage
clickCounter(); // Clicked 1 times
clickCounter(); // Clicked 2 times
