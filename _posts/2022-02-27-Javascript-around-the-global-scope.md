---
layout: post
title: Around the Global Scope
categories: Javascript
comments: true
---

Fully understanding the global scope is critical in your mastery of using lexical scope to structure your programs.

<!--continue-->

- [Why Global Scope?](#section-1)
- [](#section-2)
- [](#section-3)

## 1. Why Global Scope? {#section-1}

Most applications are composed of multiple individual JS files. So how exactly do all those seperate files get stitched together in a single runtime context by the JS engine?

With respect to browser-executed applications, there are three main ways.

1. First, if you're directly using ES modules (not transpiling them into some other module-bundle format), these files are loaded individually by the JS environment. Each module then imports refrences to whichever other modules it needs to access. The seperate module files cooperate with each other exclusively through these shared imports, without needing any shared outer scope.

2. Second, if you're using a bundler in your build process, all the files are typically concatenated together before delivery to the browser and JS engine, which then oly process one big file. Even with all the pieces of the application co-located in a single file, some mechanism is necessary for each piece to register a name to be referred to by other pieces, as well as some facility for the access to occur.

   In some build setups, the entire contents of the file are wrapped in a single enclosing scope, such as a wrapper function, universal module (UMD) etc. Each piece can register itself for access from other pieces by way of local variables in that shared scope.

   For example:

   <pre>
   (function wrappingOuterScope(){
       var moduleOne = (function one(){
           // ..
       })();
   
       var moduleTwo = (function two(){
           // ..
   
           function callModuleOne() {
               moduleOne.someMethod();
           }
   
           // ..
       })();
   
   })();
   </pre>

   The moduleOne and moduleTwo local variables inside the wrappingOuterScope() function scope are declared so that these modules can access each other for their cooperation.

   The scope of wrappingOuterScope() is a function but not the full environment global scope, it does act as a sort of "application-wide scope", a bucket where all the top-level identifiers can be stored, though not in the real global scope. It's kind of like a stand-in for the global scope in that respect.

3. And finally, the third way: whether a bundler tool is used for an application, or whether the (non-ES module) files are simply loaded in the browser individually (via **script** tags or other dynamic JS resource loading), if there is no single surrounding scope encompassing all these pieces, the global scope is only way for them to cooperate with each other:

   A bundled file of this sort often look like this:

   <pre>
   var moduleOne = (function one() {
       // ..
   })();
   
   var moduleTwo = (function two() {
       // ..
   
       function callModuleOne() {
           moduleOne.someMethod();
       }
   
       // ..
   })();
   </pre>

   Since, there is no surrounding function scope, these moduleOne and moduleTwo declarations are simply dropped into the global scope.

   This is effectively the same as if the file hadn't been concatenated, but loaded seperately.

   #### **module1.js:**

    <pre>
    var moduleOne = (function one() {
        // ..
    })();
    </pre>

   #### **module2.js:**

    <pre>
    var moduleTwo = (function two() {
        // ..
   
        function callModuleOne() {
            moduleOne.someMethods();
        }
   
        // ..
    })();
    </pre>

   If these files are loaded seperately as normal standalone.js files in a browser environment, each top-level variable declaration will end up as a global variable, since the global scope is the only shared resources between two seperate files. They are independent programs, from the perspective of the JS engine.

   The global scope is also where:

   1. JS exposes its build-ins:

      **primitive: undefined, null, Infinity, NaN**

      **natives: Date(), Object(), String(), etc.**

      **global functions: eval(), parseInt(), etc.**

      **namespaces: Math, Atomics, JSON**

      **friends of JS: Intl, WebAssembly**

   2. The environment hosting the JS engine exposes its own built-ins:

      **console(and its methods)**

      **the DOM(window, document, etc)**

      **timers(setTimeout(..), etc)**

      **web platform APIs: navigator, history, geolocation, WebRTC, etc**
