---
title: Introduction to Go Package
---

# Package Main

- `package main` is an obligation for `Go` project. `package main` is entry point
  for the app build using `Go`.

# Package

[How to Write Package in Go](https://www.digitalocean.com/community/tutorials/how-to-write-packages-in-go)  
[GoLang Package and Module](https://www.youtube.com/watch?v=nLaxs5w9bZc)  
[Golang Imports Tutorial, How to import golang local package](https://www.youtube.com/watch?v=Nv8J_Ruc280)

Organizing code makes our program readable and easy to understand and construct.
for example we have a program for managing payment. In this payment program, we
implement some software `design pattern` for constructing the program to make it
easier to manage and maintanance.

The design pattern we create is like this

```bash
paymentAPI
   |- controller
   |   | payment-controller.go
   |- model
   |   | user-model.go
   |- utils
   |   | conversion.go
   |  main.go
   |  go.mod
```

In the example, the root directory is `paymentAPI`. The `main package` is belong
to `paymentAPI` directory while the rest of the directory (controller, model, utils) is
called `user-define package`.

Each of source file inside the `user-define-package` should state with the package
name, for example `contoller package`.

`paymentController.go`

```go
package paymentController

// your rest of the code
```

`model.go`

```go
package model

// your rest of the code
```

> Note:
>
> - don't forget to use PascalCase (ex. `PaymentMethod()`, `TimeSerialization()`)
>   for the function naming to make it accessible (for export-import) to the
> - `main.go` the `user-define-package` name should be the same like the
>   directory name.

# Module

[Module](https://go.dev/doc/code)

A `module` contain one or more package. A `module` is a collection of related
that are release together. Typically one `Go` Project contain one module.

In the example above, `paymentAPI` is a **`module`** contain three packages `controller`,
`model`, `utils`. To register module path, you need to create a file called
`go.mod`.

> `go.mod` is like `package.json` in JavaScript

# Import and Compiling Process

`go.mod` is the package's dependencies manager of the application. When you
compile (build) the app, `Go` will mix all of the code inside paymentAPI directory
into a single output executable file. Therefore, you need to add the package
(controller, model, utils) into the `main.go`.

> `Go` `function` and `variable` only accessible of other file at the same
> package. Therefor, two file with same package can share and accessible code
> without import.

`main.go`

```go
package main
import (
   "go_mod_package_name/controller"
   "go_mod_package_name/model"
   "go_mod_package_name/utils"
)
```

## Run project without compile

If you have multiple file in the same package and want to run the program, you need
to address which file you want to run. For example, you import `func A` from file
`A.go` and want to import it from `main.go`, you don't need an import statement
because it still in the same package, but to run the main file, you need to address
all file inside the package.

```bash
go run main.go A.go
```

To make it easy for running all file, you can use this syntax:

```bash
go run .
```

**Summary**

1. Every Go Program is inside a `package`.
   - A **Package** is a collection of source files in the same directory that are
     compiled together.
   - **Actually, `package` is only a directory in our computer** that contain
     multiple source-code file (`Go` files).

2. A program should has a `main package` and inside this `main package` contain
   `main()` function for the **entry point** of executable file.

3. declare a package using `package` keyword at the beginning of the file.
   ```go
   package go
   ```
4. `package main`: entry point of executable program (contain `main() function`).
5. `package packageName`: your (custom) package that support your program (library
   package).
6. **Package**  
   made up of `Go` files in the same directory (has same package statement -file
   at the same directory defined as same package-).  
   _Standard Package_: package that included by Go program during instalation  
   _non-Standard Package_: installed by using `go get` command
7. creating your own package by create a directory, and create your source code
   file for the package inside the directory. Don't forget to name the package
   same as the directory name.

## non-Standard Package

Because `package` as terminology is just a directory, for create a package just
create a directory in the root project directory.

Then create the file for holding the package source code. Don't forget to address
the package with `package PackageName` with `PackageName` same as the directory
name.

Package can contain definition of

- function
- types
- variable

> It is just normal of Go Program File (but without main func)

## Package Example

**For Example**

```go
package main

import "fmt"

func main(){
   fmt.println("hello world")
}
```

This program is belong to `package main`, as special package, this file should
contain `main() function` inside it for initial execution program.

# function Naming for Package or Library

[PZN - Access Modifiers](https://www.youtube.com/watch?v=usKtv5KdBrg&list=PL-CtdCApEFH_t5_dtCQZgWJqWF45WRgZw)

- use `PascalCase` (use Capital for the first character) for make it accessible
  from outside of the file, in the other word, make it exportable function.  
  or in `java` or `OOP` this called public function.
- use `camelCase` for make the function not exportable.

> also work for variable.

TODO: Understanding go Dependencies

# Resources

[custom package is not in golang std](https://stackoverflow.com/questions/77162842/custom-package-is-not-in-golang-std)
