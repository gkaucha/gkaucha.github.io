---
sidebar_position: 4
---

# More on Basics of Programming


## Strings

Technically, array of characters. An __array__ is list of *n* elements of same data type.
Arrays also referred to as **buffers**.

Example program: char_array.c
```bash
#include <stdio.h>
int main()
{
char str_a[19];
str_a[0] = 'H';
str_a[1] = 'e';
str_a[2] = 'l';
str_a[3] = 'l';
str_a[4] = 'o';
str_a[5] = ',';
str_a[6] = ' ';
str_a[7] = 'w';
str_a[8] = 'o';
str_a[9] = 'r';
str_a[10] = 'l';
str_a[11] = 'd';
str_a[12] = '!';
str_a[13] = '\n';
str_a[14] = 0;
printf(str_a);
}

```