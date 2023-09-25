---
sidebar_position: 3
---

# Processor and Assembly Language

### Program Overview
Let's write a simple source code in C.

```bash
//program name firstcode.c
#include<stdio.h>

int main()
{
 int i;
 for(i=0; i<5; i++)
 {
   puts("Hello, World!\n");
 }
 return 0;
}
```
The above C-source code needs to be compiled to an executable binary file that the CPU can understand.
Let's compile the source code with gcc compiler to ouput the file as "first_binary_program".

```bash
$ gcc firstprogram.c -o first_binary_program
$ ls -al first_binary_program
```
The "first_binary_program" binary instructions is written in machine language.

- The compiler translates the language of C code into machine language for a variety of processor architecutres like **_x86_**.  
  **Each architecture has a different machine language**

#### What does an executable binary look like?
We can use **objdump** program provided on GNU development tools, to examine complied binaries.
Let's look how the main() function was translated into the machine code.

```bash
$ objdump -D first_binary_program | grep -A20  main.:
0000000000001149 <main>:
    1149:	f3 0f 1e fa          	endbr64 
    114d:	55                   	push   %rbp
    114e:	48 89 e5             	mov    %rsp,%rbp
    1151:	48 83 ec 10          	sub    $0x10,%rsp
    1155:	c7 45 fc 00 00 00 00 	movl   $0x0,-0x4(%rbp)
    115c:	eb 13                	jmp    1171 <main+0x28>
    115e:	48 8d 05 9f 0e 00 00 	lea    0xe9f(%rip),%rax        # 2004 <_IO_stdin_used+0x4>
    1165:	48 89 c7             	mov    %rax,%rdi
    1168:	e8 e3 fe ff ff       	call   1050 <puts@plt>
    116d:	83 45 fc 01          	addl   $0x1,-0x4(%rbp)
    1171:	83 7d fc 09          	cmpl   $0x9,-0x4(%rbp)
    1175:	7e e7                	jle    115e <main+0x15>
    1177:	b8 00 00 00 00       	mov    $0x0,%eax
    117c:	c9                   	leave  
    117d:	c3                   	ret 
```
:::info Output of OBJDUMP
**A20 : filters the output to only display 20 lines after regular expression main.:**

_First column_ : **1149**, **114d**.. the hexadecimal numbers are **memory addresses**; collection of bytes of temporary storage space where bits of machine language instrucitons are stored.

_Second column_ : **f3 0f 1e fa** ... the hexadecimal bytes are the Operation Codes (Op codes); represents specific machine-level instructions that CPU can execute.

_Third column_ : **push**, **mov** .. these are assembly language; collection of mnemonics for the corresponding machine language instructions. For example: **ret** instruction(short for "return") is easier to remember than **c3** or **11000011**.

_Fourth column_ : **%rsp, %rbp** .. these are regsiters like stack pointer register(rsp), base pointer register(bsp). Also includes immediate value, memory addressess.
:::

- Processors have their own set of variables called **registers**. The instructions use these registers to read or write data.


### The x86 Processor 

The _x86_ processor has several registers. 
We can use _debugger_ tool called *GDB*, included in GNU development tools, to step through compiled programs, examine program memory, and view processor registers.

Let's inspect through our compiled program using the GDB debugger.

```bash
$ gdb -q ./first_binary_program
[Thread debugging using libthread_db enabled]
Using host libthread_db library "/lib/x86_64-linux-gnu/libthread_db.so.1".

Breakpoint 1, 0x0000555555555151 in main ()
(gdb) info registers
rax            0x555555555149      93824992235849
rbx            0x0                 0
rcx            0x555555557dc0      93824992247232
rdx            0x7fffffffde48      140737488346696
rsi            0x7fffffffde38      140737488346680
rdi            0x1                 1
rbp            0x7fffffffdd20      0x7fffffffdd20
rsp            0x7fffffffdd20      0x7fffffffdd20
r8             0x7ffff7f95f10      140737353703184
r9             0x7ffff7fc9040      140737353912384
r10            0x7ffff7fc3908      140737353890056
r11            0x7ffff7fde6c0      140737354000064
r12            0x7fffffffde38      140737488346680
r13            0x555555555149      93824992235849
r14            0x555555557dc0      93824992247232
r15            0x7ffff7ffd040      140737354125376
--Type <RET> for more, q to quit, c to continue without paging--
rip            0x555555555151      0x555555555151 <main+8>
eflags         0x246               [ PF ZF IF ]
cs             0x33                51
ss             0x2b                43
ds             0x0                 0
es             0x0                 0
fs             0x0                 0
gs             0x0                 0
k0             0x40004000          1073758208
k1             0x2200000           35651584
k2             0x0                 0
k3             0x0                 0
k4             0x0                 0
k5             0x0                 0
k6             0x0                 0
k7             0x0                 0
(gdb) quit
A debugging session is active.

	Inferior 1 [process 598254] will be killed.

Quit anyway? (y or n) y
```
:::info breakdown of debugger exectuion
- first we set a breakpoint on the main() function so exection will stop right before the code is executed.
- GDB runs the program and stops at the breakpoint, and with "info registers", displays all the processoer registers and their current states.
- The first four registers (rax,rbx,rcx,rdx) are general-purpose registers called _Accumulator_, _Base_, _Counter_ and _Data_ registers respectively. **Mainly used as temporary variables for the CPU while executing instructions.**
- The second four registers(rsi,rdi,rbp,rsp) are also general purpose resiters, but also known as **Pointers** and **Indexes**. They stand for _Source Index_, _Destination Index_, _Base Pointer_ and _Stack Pointer_.
- **Pointers** beacause they store 32-bit addresses, which point to that location in memory. Important to program execution and memory management.
- **Indexes** are technically pointers, commonly used to point to the source and destination when data  needs to be read from or written to. There are load and store instructions that use these registers.

- The *rip* register is the **Instruction Pointer** register. It points to the current instruction the processor is reading. Currently, it points to the memory address at _0x555555555151_.

- The other *eflags* register consists of several bigt flags that are used for comparisons and memory segmentations. These registers keep track of different segments, the acual memory has been split to.
:::

### Assembly Language
