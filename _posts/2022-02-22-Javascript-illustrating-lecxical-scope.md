---
layout: post
title: Illustrating Lexical Scope
categories: Javascript
comments: true
---

Scope is determined during code compilation, a model called “lexical scope.” The term "lexical" refers to the first stage of compilation (lexing/parsing).

<!--continue-->

- [Compiled vs. Interpreted](#section-1)
- [Compiling Code](#section-2)
- [Compile Speak](#section-3)
- [Cheating: Runtime Scope Modifications](#section-4)
- [Lexical Scope](#section-5)

This blog will illustrate scope with several metaphors. The goal is to think how your program is handled by the JS engine.

## Marbles, and Buckets, and Bubbles..

Imagine you come across a pile of marbles, and notice that all the marbles are colored red, blue, or green. Let’s sort all the marbles, dropping the red ones into a red bucket, green into a
green bucket, and blue into a blue bucket. After sorting, when you later need a green marble, you already know the green bucket is where to go to get it.

In this metaphor, the marbles are the variables in our program. The buckets are scopes ( functions and blocks ), which we just conceptually assign individual colors for our discussion purposes. The color of each marble is thus determined by which color scope we find the marble originally created in.

Let’s annotate the program:

<pre>
  // outer/global scope: RED

  var students = [
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }
  ];

  function getStudentName(studentID) {
    // function scope: BLUE

    for (let student of students) {
        // loop scope: GREEN

      if (student.id == studentID) {
        return student.name;
      }
    }
  }

  var nextStudent = getStudentName(73);
  console.log(nextStudent);  // Suzy
</pre>

We've designated three scope colors with code comments: **RED ( outermost global scope ), BLUE ( scope of function getStudentName(..) ), and GREEN ( scope of/inside the for loop ).**

- **RED** ecompasses the global scope, which holds three identifiers/variables:students, getStudentName and nextStudent
- **BLUE** ecompasses the scope of the function getStudentName(..), which holds only one identifier/variable: the parameter studentID
- **GREEN** encopasses the scope of the for-loop, which holds just one identifier/variable:
  student.

## Note

Technically, the parameter studentID is not exactly in the BLUE scope. For now, it’s close enough to label studentID a BLUE variable/identifier.

As the JS engine process a program (during compilation), and finds a declaration of variable, it essentially asks, **"Which scope (bubble or bucket) am I currently in?"** The variable is designed as that same color, meaning it belongs to that bucket/bubble/scope. The GREEN scope is wholly nested inside of the BLUE scope and similarly the BLUE scope is wholly nested inside the RED scope. Scopes can nest inside each other, to any depth of nesting as your program needs.

Refrences to variables/identifiers are allowed if there's a matching declaration either in the current scope, or any scope above/outside the current scope, but not with declarations from lower/nested scopes.

An expression in RED scope only has access to RED variables/identifiers, not BLUE or GREEN. An expression in BLUE scope can reference either BLUE or RED variables/identifiers, not
