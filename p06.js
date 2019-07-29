/*
06. SELF and THIS
*/

// Example 1

var myCar = {
    color: "Blue",
    logColor: function() {
        var self = this;
        console.log("In logColor - this.color: " + this.color);
        console.log("In logColor - self.color: " + self.color);
        (function() {
            console.log("In IIFE - this.color: " + this.color);
            console.log("In IIFE - self.color: " + self.color);
        })();
    }
};

console.log("\nExample 1's Output:\n");
myCar.logColor();

/*
To know in detail

https://dev.to/alexandrafren/a-javascript-fundamentals-cheat-sheet-scope-context-and-this-28ai

Video 

https://www.youtube.com/watch?v=URVdQG96MUw

*/
