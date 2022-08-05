type bar = int * string [@@genType]

let greet name = "Hello " ^ name [@@genType]
