# Examples on Rust 
Reference Book : [The Rust Programming Language](https://nostarch.com/rust-programming-language-2nd-edition) || [HTML Format](https://doc.rust-lang.org/book/title-page.html)

:::tip[Installation]

Install latest version of rust on linux
```
$ curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh   
$ rustc --version
```
:::

The programming examples/projects on the book is tested/written on [this repo](https://github.com/gkaucha/rust_basics).

We will summarize the programming concepts specific to **Rust** in this page.

### Cargo

Cargo is Rust's build system and Package manager. Helps in building your code, downloading the libraries your code depends on,
and building those libraries/dependencies.

1. Creating a project with Cargo
```bash
$ cargo new hello_cargo
$ cd hello_cargo
```
The above command creates:
- a new **hello_cargo** directory
- a **Cargo.toml** file inside the __hello_cargo__ directory.
- a **src** directory
- a **main.rs** file inside the __src__ directory
- initializes a new Git repository along with a .gitignore file (if the repository is not an existing Git repository)