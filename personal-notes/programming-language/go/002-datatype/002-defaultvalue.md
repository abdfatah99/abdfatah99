# Default Value in `Go`

[source](https://stackoverflow.com/questions/35983118/what-does-nil-mean-in-golang#:~:text=nil%20is%20a%20predeclared%20identifier,qualify%20to%20be%20assigned%20nil%20.)

| value                           | types                                                        |
| ------------------------------- | ------------------------------------------------------------ |
| `0`                             | `integer`, `float32`, `float64`                              |
| `false`                         | `bool`                                                       |
| `""`                            | `string`                                                     |
| `nil` means `0` (uninitialized) | `interface, slice, channels, maps, pointers` and `functions` |

```go
var a int
var s []int
var s1 []int = []int{1, 2}

fmt.Println(a == nil) // throw error
// invalid operation: a == nil (mismatched types int and untyped nil)

fmt.Println(s == nil) // true
fmt.Println(s1 == nil) // false
```

- `error` is interface in `Go`

```go
_, err := Parse("")
if err != nil { // if there is an error
  // handle error
}
```
