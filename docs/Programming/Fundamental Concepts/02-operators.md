### Arithmetic Operators

| Operator          | Symbol    | Example   |
| :----             | :----     | :---      |
| Addition          | +         | b = a + 5 |
| Substraction      | -         | b = a - 5 |
| Multiplication    | *         | b = a* 5  |
| Division          | /         | b = a / 5 |
| Modulo reduction  | %         | b = a % 5 |


| Full Expression   | Shorthand      | Explanation  |
| :----             | :----         | :---         |
| c = c + 1         | c++ or ++c    | Add 1 to the variable |
| c = c - 1         | c-- or --c    | Substract 1 from the variable |  
| d = d + 21        | d+=21         | Add some value to the variable    |
| d = d - 12        | d-=12         | Substract some value from the variable  |
| e = e * 33        | e*=33         | Multiply some value by the variable   |
| f = f /12         | f/=12         | Divide some value from the variable   |



### Comparison Operators  

| Condition                 | Symbol          | Example   |
| :----                     | :----           | :---      |
| Less than                 | \<              | (a < b)   |
| Greater than              | >               | (a > b)   |  
| Less than or equal to     |   \<\=          | (a \<= b)  |
| Greater than or equal to  | >=              | (a >= b)   |
| Equal to          | ==        | (a == b)  |
| Not equal to      | !=        | (a != b)  |    

SO, **!(d < z)** is equivalent to **(d >= z)**

| Logic             | Symbol    | Example   |
| :----             | :----     | :---      |
| OR                | \|\|        | ((a < b) \|\| (a < c))  |
| AND               | &&        | ((a < b) && !(a < c)) |

Statement consisting of conditions joined with OR logic will fire if any one condition is TRUE.
Statement consisting of Conditions joined with AND logic will fire only and only if all conditions are TRUE.

In C, any non-zero value is considered true. The value of 0 is considered false. In the following mouse program :) example, "hungry" equals 1.

``` bash
while (hungry)
{
  Find some food;
  Eat the food;
}
```
More smarter mouse program would be the following.
```bash
while((hungry) && !(cat_present))
{
  Find some food;
  if(!(food_is_on_a_mousetrap))
    Eat the food;
}
```