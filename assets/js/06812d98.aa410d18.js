"use strict";(self.webpackChunkgkaucha_github_io=self.webpackChunkgkaucha_github_io||[]).push([[2760],{6845:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(5893),r=t(1151);const i={sidebar_position:1},s="What is programming?",a={id:"Programming/basics-of-programming",title:"What is programming?",description:"A program is just a series of instructions written in a specific language. To instruct a computer to do something, the instructions must be written in machine language which consists of raw bit and bytes, and it differs from architecture to architecture.",source:"@site/docs/Programming/basics-of-programming.md",sourceDirName:"Programming",slug:"/Programming/basics-of-programming",permalink:"/docs/Programming/basics-of-programming",draft:!1,unlisted:!1,editUrl:"https://github.com/gkaucha/gkaucha.github.io/tree/main/docs/docs/Programming/basics-of-programming.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Programming",permalink:"/docs/category/programming"},next:{title:"Fundamental Programming Concepts",permalink:"/docs/Programming/fundamental-programming-concepts"}},l={},c=[{value:"Pseudo-code",id:"pseudo-code",level:2},{value:"Control Structures",id:"control-structures",level:2},{value:"If-Then-Else",id:"if-then-else",level:3},{value:"While/Until Loops",id:"whileuntil-loops",level:3},{value:"For Loops",id:"for-loops",level:3},{value:"Summary",id:"summary",level:3}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"what-is-programming",children:"What is programming?"}),"\n",(0,o.jsx)(n.p,{children:"A program is just a series of instructions written in a specific language. To instruct a computer to do something, the instructions must be written in machine language which consists of raw bit and bytes, and it differs from architecture to architecture.\nTo overcome this complication, a translation is required."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Assembler"})," is one form of translator. It tranforms assembly language (less cryptic than machine language as it uses names for instructions and variables and not just number) into machine-readable code. However, it is not intuitive and still architecture sepecific."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Compiler"})," is other form of translator. It converts high level language (more easy to understand language, architecture independent) into many different types of machine languages for different processor architectures. C, C++, Fortran are some examples. There still are rules on how the instructions are worded or else, compiler won't understand it."]}),"\n",(0,o.jsx)(n.h2,{id:"pseudo-code",children:"Pseudo-code"}),"\n",(0,o.jsx)(n.p,{children:"Pseudo-codes are just another form of programming language, which is simply English, arranged with a general structure similar to the high level language. It isn\u2019t understood by compilers, assemblers,or any computers."}),"\n",(0,o.jsx)(n.p,{children:"Pseudo-code is  sort of the nebulous missing link between English and high-level programming languages like C. It just helps introduce common universal programming concepts."}),"\n",(0,o.jsx)(n.h2,{id:"control-structures",children:"Control Structures"}),"\n",(0,o.jsx)(n.p,{children:"A series of instructions in sequential orders would be fine as long as the program is simple. But for more complex programs, the flow of execution of insturcitons need to change from just sequential to more complex and useful flow. And thus Control Structures."}),"\n",(0,o.jsx)(n.h3,{id:"if-then-else",children:"If-Then-Else"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"If (condition) then\n{\nSet of instructions to execute if the condition is met;\n}\nElse\n{\nSet of instruction to execute if the condition is not met;\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Drive down Main Street;\nIf (street is blocked)\n{\nTurn right on 15th Street;\nTurn left on Pine Street;\nTurn right on 16th Street;\n}\nElse\nTurn right on 16th Street;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"whileuntil-loops",children:"While/Until Loops"}),"\n",(0,o.jsx)(n.p,{children:"A while loop says to execute the following set of instructions in a loop while a condition is true."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"While (you are hungry)\n{\nFind some food;\nEat the food;\n}\n\n// Until Loop\nUntil (you are not hungry)\n{\nFind some food;\nEat the food;\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"for-loops",children:"For Loops"}),"\n",(0,o.jsx)(n.p,{children:"Used when we want to loop for certain number of iterations. In reality, a for loop is just a while loop with a counter."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\n// For loop\n\nFor (5 iterations)\nDrive straight for 1 mile;\n\n\n// While loop\nSet the counter to 0;\nWhile (the counter is less than 5)\n{\nDrive straight for 1 mile;\nAdd 1 to the counter;\n}\n\n\n// PSEUDO-CODE\nFor (i=0; i<5; i++)\nDrive straight for 1 mile;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(n.p,{children:"Suppose we have a driving instructions provided as follows."}),"\n",(0,o.jsx)(n.p,{children:'"Start your journey by heading East on Elm Avenue. Continue along Elm Avenue until you come across a library on your right-hand side. If you encounter a blockage due to construction, make a right turn onto Oak Street, then take a left onto Maple Avenue, and finally, make a right onto Willow Street. However, if the road is clear, simply turn right onto Willow Street and then left onto Arrival Lane. Once on Arrival Lane, drive straight for 5 miles, and you\'ll find the destination on your right at 743 Arrival Lane.""'}),"\n",(0,o.jsx)(n.p,{children:"The C-like pseudo-code for above instructions would be the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Begin going East on Elm Avenue;\nwhile (there is not a library on the right)\n    Drive down Elm Avenue;\n\nif (street is blocked)\n{\n    Turn(right, Oak Street);\n    Turn(left, Maple Avenue);\n    Turn(right, Willow Street);\n}\nelse\n    Turn(right, Willow Street);\nTurn(left, Arrival Lane);\n\nfor (i=0; i<5; i++)\n    Drive straight for 1 mile;\nStop at 743 Arrival Lane;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(7294);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);