# Separating Go source code and Go binary file.

Directory

```bash
project-root/
├── src/
│   └── main.go
└── dist/
```

In order to make the uotput file live inside `dist` folder, you can define the
output directory while building the project using `-o` tag.

First, you have to run the syntax inside root-directory.

```bash
cd /path/to/project-root
```

Then build the project

```bash
go build -o dist/mybinary src/main.go
```

Run the binary output

```bash
.dist/mybinary
```

## Using Makefile

> `Makefile` file can be used to automate your work.

```Makefile
all: build

build:
    go build -o dist/mybinary src/main.go

clean:
    rm -f dist/mybinary
```

Run the build process

```bash
make
```

clearn the binary

```bash
make clean
```
