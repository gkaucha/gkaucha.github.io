---
sidebar_position: 1
---

# What is programming?

A program is just a series of instructions written in a specific language. To instruct a computer to do something, the instructions must be written in machine language which consists of raw bit and bytes, and it differs from architecture to architecture.
To overcome this complication, a translation is required.

 **Assembler** is one form of translator. It tranforms assembly language (less cryptic than machine language as it uses names for instructions and variables and not just number) into machine-readable code. However, it is not intuitive and still architecture sepecific.

**Compiler** is other form of translator. It converts high level language (more easy to understand language, architecture independent) into many different types of machine languages for different processor architectures. C, C++, Fortran are some examples. There still are rules on how the instructions are worded or else, compiler won't understand it.

## Pseudo-code

Pseudo-codes are just another form of programming language, which is simply English, arranged with a general structure similar to the high level language. It isn’t understood by compilers, assemblers,or any computers.

Pseudo-code is  sort of the nebulous missing link between English and high-level programming languages like C. It just helps introduce common universal programming concepts.


## Control Structures

A series of instructions in sequential orders would be fine as long as the program is simple. But for more complex programs, the flow of execution of insturcitons need to change from just sequential to more complex and useful flow. And thus Control Structures.


### If-Then-Else

```
If (condition) then
{
Set of instructions to execute if the condition is met;
}
Else
{
Set of instruction to execute if the condition is not met;
}
```

```
Drive down Main Street;
If (street is blocked)
{
Turn right on 15th Street;
Turn left on Pine Street;
Turn right on 16th Street;
}
Else
Turn right on 16th Street;
```


### While/Until Loops

A while loop says to execute the following set of instructions in a loop while a condition is true.

```
While (you are hungry)
{
Find some food;
Eat the food;
}

// Until Loop
Until (you are not hungry)
{
Find some food;
Eat the food;
}
```


### For Loops 

Used when we want to loop for certain number of iterations. In reality, a for loop is just a while loop with a counter. 

```

// For loop

For (5 iterations)
Drive straight for 1 mile;


// While loop
Set the counter to 0;
While (the counter is less than 5)
{
Drive straight for 1 mile;
Add 1 to the counter;
}


// PSEUDO-CODE
For (i=0; i<5; i++)
Drive straight for 1 mile;
```

### Summary

Suppose we have a driving instructions provided as follows.

"Start your journey by heading East on Elm Avenue. Continue along Elm Avenue until you come across a library on your right-hand side. If you encounter a blockage due to construction, make a right turn onto Oak Street, then take a left onto Maple Avenue, and finally, make a right onto Willow Street. However, if the road is clear, simply turn right onto Willow Street and then left onto Arrival Lane. Once on Arrival Lane, drive straight for 5 miles, and you'll find the destination on your right at 743 Arrival Lane.""

The C-like pseudo-code for above instructions would be the following:
```
Begin going East on Elm Avenue;
while (there is not a library on the right)
    Drive down Elm Avenue;

if (street is blocked)
{
    Turn(right, Oak Street);
    Turn(left, Maple Avenue);
    Turn(right, Willow Street);
}
else
    Turn(right, Willow Street);
Turn(left, Arrival Lane);

for (i=0; i<5; i++)
    Drive straight for 1 mile;
Stop at 743 Arrival Lane;
```


