---
layout: post 
title:  Python Essentials  
categories: Programming
comments: true
image: python.png
---


Python is a widely-used, interpreted, object-oriented, and high-level programming language with dynamic semantics, used for general-purpose programming.

<!--continue-->

- [Introduction to Python and Computer Programming](#section-1)
- [Data types, variables, basic input-output operations, basic operators](#section-2)
- [Boolean values, conditional execution, loops, lists and list processing, logical and bitwise operations](#section-3)
- [Functions, tuples, dictionaries, and data processing](#section-4)

#### Why Python?

1. It is easy to learn - the time needed to learn Python is shorter than for many other languages; this means that it's possible to start the actual programming faster
2. It is easy to use for writing new software - it's often possible to write code faster when using Python;
3. It is easy to obtain, install and deploy - Python is free, open and multiplatform; not all languages can boast that.

## 1. Introduction to Python and Computer Programming {#section-1}

### What Makes a language?

- an alphabet
- a lexis (aka a dictionary)
- a syntax
- semantics

## 2. Data types, variables, basic input-output operations, basic operators {#section-2}

## 3. Boolean values, conditional execution, loops, lists and list processing, logical and bitwise operations {#section-3}

## 4. Functions, tuples, dictionaries, and data processing {#section-4}

### Why do we need function?

A function is a block of code that performs a specific task when the function is called (invoked). You can use functions to make your code reusable, better organized, and more readable. Functions can have parameters and return values.

If a particular fragment of the code begins to appear in more than one place, consider the possibility of isolating it in the form of a function invoked from the points where the original code was placed before.

The code (or more accurately: the problem) can be divided into well-isolated pieces, and encod them in the form of a function. This process of encoding and testing separately is **decomposition**.

### Decomposition

It's not only about **sharing the work**, but also about **sharing the responsibility** among many developers.

Each of them writes a clearly defined and described set of functions, which when combined into the module will give the final product.

### Where do the functions come from?

- built-in functions which are an integral part of Python (such as the print() function). You can see a complete list of Python built-in functions at [built-in functions](https://docs.python.org/3/library/functions.html).
- the ones that come from pre-installed modules 
- user-defined functions which are written by users for users - you can write your own functions and use them freely in your code,
- the lambda functions

#### Writing a function

- It always starts with the **keyword** def (for define)
- next after def goes the **name of the function** (the rules for naming functions are exactly the same as for naming variables)
- after the function name, there's a place for a pair of parentheses (they contain nothing here, but that will change soon)
- the line has to be ended with a **colon**;
- the line directly after def begins the **function body** - a couple (at least one) of necessarily **nested instructions**, which will be executed every time the function is invoked; note: **the function ends where the nesting ends**, so you have to be careful.

<pre>
def your_function_name(optional parameters):
    # the body of the function
</pre>


### How functions work

- when you invoke a function, Python remembers the place where it happened and jumps into the invoked function;
- the body of the function is then executed;
- reaching the end of the function forces Python to return to the place directly after the point of invocation.

### Note

1. You mustn't invoke a function which is not known at the moment of invocation.
2. Function and variable name should not be the same.