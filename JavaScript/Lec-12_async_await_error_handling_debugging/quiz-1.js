console.log('A syn stack'); // Executed immediately, synchronous
requestAnimationFrame(function () {
  console.log('B requestAnimationFrame');
});

setTimeout(function () {
  console.log('C task queue');
}, 300);

queueMicrotask(function () {
  console.log('D microtask');
});

console.log('E syn stack');

Promise.resolve().then(function () {
  console.log('F Promise Microtask');
});

/**
 *  
 * 
 * 
 */