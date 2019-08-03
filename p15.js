/*
04. EVENT LOOP

The event loop got its name because of how it's usually implemented, which usually resembles:

while (queue.waitForMessage()) {
  queue.processNextMessage();
}
queue.waitForMessage() waits synchronously for a message to arrive if there is none currently.

*/

// Example 1 (See the output)

function logNumbers() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4);
}

console.log("\nExample 1's Output:\n");
logNumbers();


// 1 is logged out first, then 2 is setTimeout so would occur after 3000 ms, then 3 is also setTimeout but for 0 ms i.e. no delay so it must be printed instantly but 4 is printed first. This happen because 2, 3 are pushed into event loop and no matter how fast they are the will be printed after 1,4.


/*
To know in detail

https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4

Video 

https://www.youtube.com/watch?v=8aGhZQkoFbQ

*/