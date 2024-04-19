---

---

# Bash Basics



## Access the Bash Shell
Open Bash Shell installed by default in Linux or MacOS with Ctrl+Alt+T.
To Switch from Z Shell to bash shell, enter **exec bash**

Following are basic commands to explore bash shell.

```
//command to switch shell
$ chsh -s /bin/bash

//check bash version
$ bash --version
```

### Checking environment variables

```
//list env. variables available to every new session
$ env

//read individual env. variables
$ echo ${SHELL}
```

Detail list on variables available on this [page](https://www.gnu.org/software/bash/manual/html_node/Bash-Variables.html).  

|Variable name| What it Returns |
|-------------|-----------------|
|BASH_VERSION | the bash version running |
|BASHPID      |The process ID of the current bash process|
|GROUPS       |A list of groups the running user is a member of |
|HOSTNAME     |The name of the host |
|OSTYPE       |The type of operating system |
|PWD          |The current working directory |
|RANDOM       |A random number between 0 and 32,767 |
|UID          | The user ID of the current user |
|SHELL        |The full pathname to the shell |


### Some Linux commands used in Bash Scripts

- Some common linux tools (command line navigation and file-modification utilities) are **cd, ls, chmod, mkdir, touch**
- use **man** (manual) command to try exploring those utilities. Example: __$ man chmod__
- Arguments can be passed in those command using short form or long form argument syntax.
- Short-form syntac uses single dash(-) followed by one or more characters. Example: __$ ls -al  or ls -a -l__
- Long-form syntax is prepended by double dash(--) symbol. Example : __$ ls --help__







