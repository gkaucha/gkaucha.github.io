
### Functions

Sometimes a particular set of instructions need to be run several times. These set of instructions can be groupd into a small sub-program called **function**. Also called sub-routines or procedures.

- Variables can be passed as arguments to a function in order to modify the way the function operates.

  ```
  Function Turn(variable_direction)
  {
    Activate the variable_direction blinker;
    Slow down;

    Check for oncoming traffic;
    while(there is oncoming traffic)
    {
      Stop;
      Watch for oncoming traffic;
    }

    Turn the steering wheel to the variable_direction;
    while(turn is not complete)
    {
      if(speed < 5 mph)
      Accelerate;
    }

    Turn the steering wheel back to the original position;
    Turn off the variable_direction blinker;
  }
  ```

- Functions can return a value to a caller.

  ```bash
  int factorial(int x)
  {
    int i;
    for(i=1; i < x; i++)
      x *= i;
    return x;
  }
  ```

- **Function Prototypes** tell compiler to expect function with this name, 
this return data type, and these data types as its functional arguments.

  ```
  int factorial(int)
  ```

- If a function doesn't have any value to return, it should be declared as **void**
  ```
  void turn(variable_direction, target_street_name)
  {
    Look for a street sign;
    current_intersection_name = read street sign name;
  
    while(current_intersection_name != target_street_name)
    {
      Look for another street sign;
      current_intersection_name = read street sign name;
    }

    Activate the variable_direction blinker;
    Slow down;
    Check for oncoming traffic;
    while(there is oncoming traffic)
      {
        Stop;
        Watch for oncoming traffic;
      }
    
    Turn the steering wheel to the variable_direction;
    while(turn is not complete)
    {
      if(speed < 5 mph)
      Accelerate;
    }

    Turn the steering wheel right back to the original position;
    Turn off the variable_direction blinker;
    }
  ```

- **libraries**; the collection of existing Functions are used heavily on C.