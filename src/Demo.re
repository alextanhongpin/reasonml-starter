Js.log("Hello, BuckleScript and Reason!");

 /* Alias */
type scoreType = int;
let add = (x: scoreType, y: scoreType) : scoreType => x + y;

switch (11) {
| 1 => Js.log("one")
| 2 => Js.log("two")
| 3 => Js.log("three")
| _ => Js.log("neither")
};

type answer =
	| Yes 
	| No;

let message = (ans: answer) => {
	switch (ans) {
	| Yes => Js.log("It's a yes!")
	| No => Js.log("It's a no!")
	};
};

message(Yes);

Js.log(add(1, 10));