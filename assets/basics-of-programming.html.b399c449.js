import{_ as e,o as t,c as i,a as n}from"./app.7c967e04.js";const l={},a=n(`<h1 id="what-is-programming" tabindex="-1"><a class="header-anchor" href="#what-is-programming" aria-hidden="true">#</a> What is programming?</h1><p>A program is just a series of instructions written in a specific language. To instruct a computer to do something, the instructions must be written in machine language which consists of raw bit and bytes, and it differs from architecture to architecture. smoothScroll: true, To overcome this complication, a translation is required. <strong>Assembler</strong> is one form of translator. It tranforms assembly language (less cryptic than machine language as it uses names for instructions and variables and not just number) into machine-readable code. However, it is not intuitive and still architecture sepecific.</p><p><strong>Compiler</strong> is other form of translator. It converts high level language (more easy to understand language, architecture independent) into many different types of machine languages for different processor architectures. C, C++, Fortran are some examples. There still are rules on how the instructions are worded or else, compiler won&#39;t understand it.</p><h2 id="pseudo-code" tabindex="-1"><a class="header-anchor" href="#pseudo-code" aria-hidden="true">#</a> Pseudo-code</h2><p>Pseudo-codes are just another form of programming language, which is simply English, arranged with a general structure similar to the high level language. It isn\u2019t understood by compilers, assemblers,or any computers.</p><p>Pseudo-code is sort of the nebulous missing link between English and high-level programming languages like C. It just helps introduce common universal programming concepts.</p><h2 id="control-structures" tabindex="-1"><a class="header-anchor" href="#control-structures" aria-hidden="true">#</a> Control Structures</h2><p>A series of instructions in sequential orders would be fine as long as the program is simple. But for more complex programs, the flow of execution of insturcitons need to change from just sequential to more complex and useful flow. And thus Control Structures.</p><h3 id="if-then-else" tabindex="-1"><a class="header-anchor" href="#if-then-else" aria-hidden="true">#</a> If-Then-Else</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>If (condition) then
{
Set of instructions to execute if the condition is met;
}
Else
{
Set of instruction to execute if the condition is not met;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Drive down Main Street;
If (street is blocked)
{
Turn right on 15th Street;
Turn left on Pine Street;
Turn right on 16th Street;
}
Else
Turn right on 16th Street;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while-until-loops" tabindex="-1"><a class="header-anchor" href="#while-until-loops" aria-hidden="true">#</a> While/Until Loops</h3><p>A while loop says to execute the following set of instructions in a loop while a condition is true.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>While (you are hungry)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-loops" tabindex="-1"><a class="header-anchor" href="#for-loops" aria-hidden="true">#</a> For Loops</h3><p>Used when we want to loop for certain number of iterations. In reality, a for loop is just a while loop with a counter.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
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
For (i=0; i&lt;5; i++)
Drive straight for 1 mile;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h3><p>&quot;Start out down Main Street headed east. Continue on Main Street until you see a church on your right. If the street is blocked because of construction, turn right there at 15th Street, turn left on Pine Street, and then turn right on 16th Street. Otherwise, you can just continue and make a right on 16th Street. Continue on 16th Street, and turn left onto Destination Road. Drive straight down Destination Road for 5 miles, and then you&#39;ll see the house on the right. The address is 743 Destination Road.&quot;</p><p>The C-like pseudo-code for above instructions would be the following:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Begin going East on Main Street;
While (there is not a church on the right)
Drive down Main Street;
If (street is blocked)
{
Turn right on 15th Street;
Turn left on Pine Street;
Turn right on 16th Street;
}
Else
Turn right on 16th Street;
Turn left on Destination Road;
For (i=0; i&lt;5; i++)
Drive straight for 1 mile;
Stop at 743 Destination Road;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fundamental-programming-concepts" tabindex="-1"><a class="header-anchor" href="#fundamental-programming-concepts" aria-hidden="true">#</a> Fundamental Programming concepts</h2><h3 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h3><p>A variable can be thought of as an object that holds data that can be changed. There are also variables that don&#39;t change, called <strong>Constants</strong>.</p><p>All variables are stored in memory somewhere, and their declarations allow the compiler to organize this memory more efficiently. Despite all of the variable type declarations, everything is all just memory.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int a = 13, b;
float k;
char z = &#39;A&#39;;
k = 3.14;
z = &#39;w&#39;;
b = a + 5;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="arithmetic-operators" tabindex="-1"><a class="header-anchor" href="#arithmetic-operators" aria-hidden="true">#</a> Arithmetic Operators</h3><table><thead><tr><th style="text-align:left;">Operator</th><th style="text-align:left;">Symbol</th><th style="text-align:left;">Example</th></tr></thead><tbody><tr><td style="text-align:left;">Addition</td><td style="text-align:left;">+</td><td style="text-align:left;">b = a + 5</td></tr><tr><td style="text-align:left;">Substraction</td><td style="text-align:left;">-</td><td style="text-align:left;">b = a - 5</td></tr><tr><td style="text-align:left;">Multiplication</td><td style="text-align:left;">*</td><td style="text-align:left;">b = a* 5</td></tr><tr><td style="text-align:left;">Division</td><td style="text-align:left;">/</td><td style="text-align:left;">b = a / 5</td></tr><tr><td style="text-align:left;">Modulo reduction</td><td style="text-align:left;">%</td><td style="text-align:left;">b = a % 5</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">Full Expression</th><th style="text-align:left;">Shorhand</th><th style="text-align:left;">Explanation</th></tr></thead><tbody><tr><td style="text-align:left;">c = c + 1</td><td style="text-align:left;">c++ or ++c</td><td style="text-align:left;">Add 1 to the variable</td></tr><tr><td style="text-align:left;">c = c - 1</td><td style="text-align:left;">c-- or --c</td><td style="text-align:left;">Substract 1 from the variable</td></tr><tr><td style="text-align:left;">d = d + 21</td><td style="text-align:left;">d+=21</td><td style="text-align:left;">Add some value to the variable</td></tr><tr><td style="text-align:left;">d = d - 12</td><td style="text-align:left;">d-=12</td><td style="text-align:left;">Substract some value from the variable</td></tr><tr><td style="text-align:left;">e = e * 33</td><td style="text-align:left;">e*=33</td><td style="text-align:left;">Multiply some value by the variable</td></tr><tr><td style="text-align:left;">f = f /12</td><td style="text-align:left;">f/=12</td><td style="text-align:left;">Divide some value from the variable</td></tr></tbody></table><h3 id="comparison-operators" tabindex="-1"><a class="header-anchor" href="#comparison-operators" aria-hidden="true">#</a> Comparison Operators</h3><table><thead><tr><th style="text-align:left;">Condition</th><th style="text-align:left;">Symbol</th><th style="text-align:left;">Example</th></tr></thead><tbody><tr><td style="text-align:left;">Less than</td><td style="text-align:left;">&lt;</td><td style="text-align:left;">(a &lt; b)</td></tr><tr><td style="text-align:left;">Greater than</td><td style="text-align:left;">&gt;</td><td style="text-align:left;">(a &gt; b)</td></tr><tr><td style="text-align:left;">Less than or equal to</td><td style="text-align:left;">&lt;=</td><td style="text-align:left;">(a &lt;= b)</td></tr><tr><td style="text-align:left;">Greater than or equal to</td><td style="text-align:left;">&gt;=</td><td style="text-align:left;">(a &gt;= b)</td></tr><tr><td style="text-align:left;">Equal to</td><td style="text-align:left;">==</td><td style="text-align:left;">(a == b)</td></tr><tr><td style="text-align:left;">Not equal to</td><td style="text-align:left;">!=</td><td style="text-align:left;">(a != b)</td></tr></tbody></table><p>SO, <strong>!(d &lt; z)</strong> is equivalent to <strong>(d &gt;= z)</strong></p><table><thead><tr><th style="text-align:left;">Logic</th><th style="text-align:left;">Symbol</th><th style="text-align:left;">Example</th></tr></thead><tbody><tr><td style="text-align:left;">OR</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">AND</td><td style="text-align:left;">&amp;&amp;</td><td style="text-align:left;">((a &lt; b) &amp;&amp; !(a &lt; c))</td></tr></tbody></table><p>Statement consisting of conditions joined with OR logic will fire if any one condition is TRUE. Statement consisting of Conditions joined with AND logic will fire only and only if all conditions are TRUE.</p><p>In C, any non-zero value is considered true. The value of 0 is considered false.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>whiel

### Functions

Sometimes a particular set of instructions need to be run several times. These set of instructions can be groupd into a small sub-program called **function**. Also called sub-routines or procedures.

Variables can be passed as arguments to a function in order to modify the way the function operates.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Function Turn(variable_direction) { Activate the variable_direction blinker; Slow down; Check for oncoming traffic; while(there is oncoming traffic) { Stop; Watch for oncoming traffic; } Turn the steering wheel to the variable_direction; while(turn is not complete) { if(speed &lt; 5 mph) Accelerate; } Turn the steering wheel back to the original position; Turn off the variable_direction blinker; }</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
Functions can return a value to a caller.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>int factorial(int x) { int i; for(i=1; i &lt; x; i++) x *= i; return x; }</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
## More on Basics

### Strings 
### Signed, Unsigned, Long, and Short 
### Pointers 
### Format Strings
### Typecasting 
### Command-Line Arguments 
### Variable Scoping </code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),s=[a];function r(d,o){return t(),i("div",null,s)}const u=e(l,[["render",r],["__file","basics-of-programming.html.vue"]]);export{u as default};
