---
sidebar_position: 1
---

# Python Programming

[What is Programming??](/docs/Programming/basics-of-programming.md)

Please refer to the [page](/docs/Programming/program%20examples/python.md) for examples related to python3 implementation.

## Python in cybersecurity
In cybersecurity, Python is used especially for automation.   
Automation is the use of technology to reduce human and manual effort to perform common and repetitive tasks. These are some specific areas of cybersecurity in which Python might be used to automate specific tasks:

- Log analysis
- Malware analysis
- Access control list management
- Intrusion detection
- Compliance checks
- Network scanning


## Python environments

### Notebooks
An online interface for writing, storing, and running code.
Includes Code cells and Markdown Cells.
Examples:  
- [Jupyter Notebook](https://jupyter.org/about) 
- [Google Colaboratory](https://colab.research.google.com/)

### Integrated development environments (IDEs)

### Command line



## Python Components

### Data Types

- **String**  
   String data is data consisting of an ordered sequence of characters. Characters in a string may include letters, numbers, symbols, and spaces. These characters must be placed within quotation marks.   
   - "updates needed"
   - "30%"
   - "6.0"
   - "29"
   - ""

- **Integer**  
   Integer data is data consisting of a number that does not include a decimal point.  
   - -100 
   - 0
   - 1
   - 500

- **Float** 
   Float data is data consisting of a number with a decimal point.  
   - -2.2
   - 1.34
   - 0.0
   - 0.34 

- **List**  
   List data is a data structure that consists of a collection of data in sequential form. Lists elements can be of any data type, such as strings, integers, Booleans, or even other lists. The elements of a list are placed within square brackets, and each element is separated by a comma. 
   - [22, 39, 58, 3, 7]
   - ["list", "test", "string"]
   - [True, False, True, True]
   - [15, "approved", True, 36.5, False]
   - []

- **Boolean**  
   Boolean data is data that can only be one of two values: either True or False.

- **Tuple**  
   Tuple data is a data structure that consists of a collection of data that cannot be changed. Like lists, tuples can contain elements of varying data types.
   - ("string1", "string2", "string3")
   - (46, 2, 13, 2, 8, 0, 0)
   - (True, False, True, True)  

   **Tuples are more memory efficient than lists**, so they are useful when you are working with a large quantity of data. 

- **Dictionary**  

   **Dictionary data** is data that consists of one or more key-value pairs. Each key is mapped to a value. A colon (:) is placed between the key and value. Commas separate key-value pairs from other key-value pairs, and the dictionary is placed within curly brackets ({}).   

   Dictionaries are useful when you want to store and retrieve data in a predictable way. For example, the following dictionary maps a building name to a number. The building name is the value, and the number is the key. A colon is placed after the key.

   ```
   { 1: "East",

  2: "West",

  3: "North",

  4: "South" }
  ```

- **Set**  
  **Set data** is data that consists of an unordered collection of unique values. This means no two values in a set can be the same.  
  Elements in a set are always placed within curly brackets and are separated by a comma. These elements can be of any data type. This example of a set contains strings of usernames:  
  ```
  {"user1", "user2", "user3"}
  ```



### Variables  

In a programming language, a variable is a container that stores data. It's a named storage location in a computer's memory that can hold a value. It stores the data in a particular data type, such as integer, string, or Boolean. The value that is stored in a variable can change.

### Conditional Statement

A conditional statement is a statement that evaluates code to determine whether it meets a specific set of conditions.   
When a condition is met, it evaluates to a Boolean value of True and performs specified actions.   
When the condition isn’t met, it evaluates a Boolean value of False and doesn’t perform the specified actions. 

#### if statements

```
if status == 200:

    print("OK")

elif status == 400:

    print("Bad Request")

elif status == 500:

    print("Internal Server Error") 
else:

    print("check other status")
```

:::info
Python processes multiple elif statements differently than multiple if statements. When it reaches an elif statement that evaluates to True, it won’t check the following elif statements. On the other hand, Python will run all if statements.
:::

##### Logical operators for multiple conditions

- **and** : The and operator requires both conditions on either side of the operator to evaluate to True.  
- **or** : The or operator requires only one of the conditions on either side of the operator to evaluate to True.  
- **not** : The not operator negates a given condition so that it evaluates to False if the condition is True and to True if it is False.