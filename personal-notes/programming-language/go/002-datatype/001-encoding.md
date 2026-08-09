# Text Encoding

> Outline: how to computer store text/character.

Different ways to store encoding data in Go.

# How data store

Source: [Unicode, in friendly terms: ASCII, UTF-8, code points, character encodings, and more](https://www.youtube.com/watch?v=ut74oHojxqo)

Data is stored in memory or in disk in bit format -> `010101010101`, whether the
data is `number: 25` or `char: d`.

## Bytes

- `bit`
  - raw structure of data in the memory or disk
  - base 2 of numbering system, representative of how transistor work and save 
    data
  - example:
    - `7` stored as `111`
- byte
  - collection of `8 bits`
  - `1 byte` == `8 bits`
  - `7` in `8-bit` (1 Byte) format: `00000111`

  - in Go, byte could be constructed using decimal hexadecimal number


## Number

Storing number is quite easy, just convert the number from `base10` to `base2`.

Example: `26` -> `11010`

Then the bits `11010` stored in memory or disk.

## Non-number

**Non-number** character include multiple type of:
- letter
- chinese letter
- arabic letter
- emoji

that could lead into problem to solve for convert them into binary data.

To solve this problem, there are some collectively agreed to solve saving
`Non-number` problem into binary data, to make it sense it's like a protocol to
save `Non-number` data into computer to follow.

Example: `char: d` map into `number: 100`

- So if data stored as `100` in a certain format, it refered as `d`.

# ASCII

ASCII is format to store basic western character between `0` and `127`, which can
be store 128 different character.

Example case:

```yaml
string: "hello"

ASCII:
    h: 72
    e: 101
    l: 108
    l: 108
    o: 111

Binary:
    72: 01001000
    101: 01100101
    108: 01101100
    108: 01101100
    111: 01101111
```

Each character becomes `1 byte` or `8 bits` -> `01101100`

So, ASCII encoding represented as:

`l` -> `108` -> `01101100`

For decoding the binary data into character data, just **Reverse** the process.

---

ASCII has great encoding system which `number of character == number of bytes`.

```yaml
string: "hello"

byte: (5 long)
    h: 01001000
    e: 01100101
    l: 01101100
    l: 01101100
    o: 01101111
```

<!-- In Go programming language, `length` of string return `number of bytes` in the -->
<!-- string which is the same as number of character in the string. -->

In Go programming language, `length` of string return `number of bytes` that 
construct the string.

This is simple example of simple character:

```go
fmt.Print(len("hello")) // 5
```

For complex character

```go
fmt.Print(len("¡Hola 🌎!")) // 12
```

- This because the string of "¡Hola 🌎!" constructed by 12 bytes.
- later on you'll understand why this happen, because of UTF-8 encoding-decoding in go.

basically this is the same as in C programming language

```C
strlen("hello") == 5
```

- Go spirited from C, often sees as "successor of C".

## Drawback of ASCII

[Source](https://www.youtube.com/watch?v=DntKZ9xJ1sM)

- The original `7 bits` only enough to represent english character and punctuation
- Since a byte is 8 bits, there was a lot of competition on which other character
  should be supported.

# Unicode

[Source](https://www.youtube.com/watch?v=DntKZ9xJ1sM)

> Unicode is a universal character encoding

- support many different alphabets and even emojis
- Unlike ASCII, Unicode does not define how its mapping should be implemented  
  Example of ASCII:
  - `97` for `a`
  - `98` for `b`
  - etc
- only specifies which character refers to which code point.
    - code point is a hex number representing a character

Example Unicode

- `U+0041` -> A

# Grapheme

Later on, we don't want to say the data as character, it could lead into
confusion because we'll not only referring for character and number, also for
emoji and any language typograph. For next reference through the material, we
define it as **grapheme**.

> Grapheme: A single unit of a human writing system

Grapheme Example:

- 👌: Emoji
- دت: Arabic Character
- 水: Chinese Character  
  etc.

Word is not **Grapheme** because it can be broken down into a character/letters.

## Grapheme Expression

Grapheme expression can be made up from one or more code points.

Example:

```yaml
d: latin small letter D
  code: 100

你L: (ni) CJK Unified Ideograph-4F60
  code: 20320
```

More complex grapheme can be made up either from single code point or more than
one code point.

```yaml
# single code point
é: latin small letter E with acute
  code: 233

# multiple code point
é: native small letter E + acute accent modifier
  code: 101 + 769
```

## Code point to Bytes (Binary) -> encoding

ASII has only single encoding strategy:

1. detect ASCII value (example `72`)
2. convert into binary value (change into `01001000` -> `8-bits` or `1-byte`)

Unicode in the other hand has multiple encoding strategy because each one has
pros and cons.

# UTF-32

UTF-32 utlize `32-bits` for storing each character.

```yaml
code point value (base10): 127998
encoded value: 00000000 00000001 111100011 11111110
```

UTF-32 system same as ASCII but takes 4 btye (4x space).

To make it easy to recognize, this UTF-32 converted into hexadecimal equivalent
value.

| String | Code Points | UTF-32 Encoding |
| ------ | ----------- | --------------- |
| H      | 72          | 00 00 00 48     |
| e      | 101         | 00 00 00 65     |
| l      | 108         | 00 00 00 6C     |
| l      | 108         | 00 00 00 6C     |
| o      | 111         | 00 00 00 6F     |
| !      | 33          | 00 00 00 21     |
| 👍     | 128077      | 00 01 F4 4D     |
|        | 127998      | 00 01 F3 FE     |

Read data represented in `UTF-32` is quite simple, every character start in fourth
step bit.

Example

```txt
00 00 00 48 00 00 00 65 00 00 00 6C 00 00 00 6C
^ first     ^ second    ^ third     ^ fourth
  char        char        char        char
```

In terms of space perspective `UTF32` is wastefull, consideration:

```txt
Text: hello world

ASCII:
48 65 6C 6C 6F 20 77 6F 72 6C 64 21

UTF-32:
00 00 00 48 00 00 00 65 00 00 00 6C
00 00 00 6C 00 00 00 6F 00 00 00 20
00 00 00 77 00 00 00 6F 00 00 00 72
00 00 00 6C 00 00 00 64 00 00 00 21
```

As you can see that `UTF-32` Utilize a lof of space rather than ASCII. Most usage
value that takes less 4 byte to store are store same space as long rare usage
value.

# UTF-8

`UTF-8` map each point between `1-byte < point < 4-byte`. Code point with lower
value are map into `1-byte` which save a lot of space. Larger value can be stored
to `2` till `4` byte. Even better, `d` and `z` has same code point in unicode as in
ASII.

```yaml
d: 100
    encoding: 64 (same in ASCII)
```

The equivalent in the code point can be advantage for backward compatibility,
because all ASCII program can read `UTF-8` code without even knowing that the code
is `UTF-8`.

## UTF-8 Disadvantage

> Code point has UNEQUAL size in byte.

```txt
C2 A1 48 6F 6C 61 20 F0 9F 8C 8E 21
| ¡ | H  o  l  a  <> |    🌍   | !
```

- Hard to index

> You don't have to worry about this, premarily `utf-8` is most used encoding
> standard.

**Thought**

1. why it hard to index?
   the character of ¡ utilize two bytes -> C2 + A1
   if you want to get the 3rd character using the bytes, it will not get the
   inteded result.
    - intended result (3rd character) -> o (`6F`)
    - access using 3rd byte -> H (`48`)

> check out 1.1.1-UTF-8disadvantage.go

# General Rules for encoding-decoding

1. To Decode bytes into graphemes, we must know the original encoding used.
2. In unicode, a grapheme != a code point != a byte.  
   This is very important because in many programming language, string manipulation
   is only with with bytes in ASCII.
   In ASCII, string manipulatin completely fine because one byte represent one
   character
    - Use Unicode-unaware function only if every grapheme is a byte: ASCII or UTF-8
      with ASCII character.
    - Use unicode-aware function to properly handle code points. For more accurate
      string manipulation and string computation.
    - Use grapheme-aware function when maximum accuracy is needed.

# Example in Programming

```go
func main() {
    s1 := "string"
    thumb := "👍"
	fmt.Println("Length of string:", len(s1))
    // Length of string: 6
	fmt.Println("Length of thumb:", len(thumb))
    // Length of thumb: 4
}
```

## Handling string manipulation with byte level in the non-english alphabet

Source: [Unicode, in friendly terms: ASCII, UTF-8, code points, character encodings, and more](https://youtu.be/ut74oHojxqo?t=472)


**Case**

```go
func main() {
	emoji := "👍"

    // 1. print the emoji
    // 2. print length of emoji byte
    // 3. get individual emoji byte
	fmt.Printf("Actual emoji: %v - Length: %v \n", emoji, len(emoji))
    // output: Actual emoji: 👍 - Length: 4                                                                                                                                                    
    // get individual emoji byte
    for i := 0; i < len(emoji); i++{
        fmt.Printf("Emoji bytes: %v \n", emoji[i])
    }
    // Output: 
    // Emoji bytes [0]: 240                                                                                                                                                            
    // Emoji bytes [1]: 159 
    // Emoji bytes [2]: 145 
    // Emoji bytes [3]: 141
}
```

In this example, this called **Unicode Unaware String Function** because unicode 
operates on the bytes and *doesn't understand the meaning behind them*. 

To make it **Unicode Aware String Functions**, you can use `rune` data type to store the 
**Unicode Code Point** in `int32` type

- remember that `rune` is type alias for `int32`

You can check the code in `4-rune/4.2-unicode-aware-string-function.go`

# Resources

[What are UTF-8 and UTF-16? Working with Unicode encodings](https://www.youtube.com/watch?v=QCEqpd807z4)

