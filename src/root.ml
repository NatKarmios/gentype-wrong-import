type foo = Types.bar * Types.bar [@@genType]

let hello = Types.greet "world" [@@genType]
