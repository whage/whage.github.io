# stack-heap
- struggled with this topic for years without a proper explanation
- CS:APP helped a lot
- they are areas in a process's virtual memory space

# names
- unfortunate naming: both refer to a data structure as well as a type of memory allocation
- the heap as in virtual memory has nothing to do with the heap data structure
- the stack as in the mechanism used in static mamory allocation (?) follows the stack principle (?)
- "call stack" and "stack memory" - different things?

# key differences
- the stack uses hardware support from the processor (push, pop, etc...), the heap doesn't

# garbage collection
- relation to the stack or heap?

# call stack
- the roots of the call stack
- note on tail-call optimization
    - http://blog.moertel.com/posts/2013-05-11-recursive-to-iterative.html
    - http://benignbemine.github.io/2015/07/19/es6-tail-calls/ (don't mind its javascript, it contains some great notes!)
    - tail call optimization is not limited to recursive functions!
