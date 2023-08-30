## west-pad

Behold, a far superior alternative to [`left-pad`](https://github.com/left-pad/left-pad).

Insert padding to the West of a string.

## Install

```bash
npm install west-pad
```

## Usage

0. First grab the cardinal direction from your device. This direction can be the cardinal char value or a number value representing degrees from North.

```ts
type Direction = "N" | "S" | "E" | "W" | number;
```

1a. west-pad exports a class to hold cardinal state for your repeated padding convenience 

```ts
import WestPad from 'west-pad';

const direction = getDeviceDirection(); // "N" or 0
const westPad = new WestPad(direction);

const s = "Hello World";

console.log(westPad(s)); // " Hello World"

console.log(westPad(s, 5)); // "     Hello World"

console.log(westPad(s, 5, "+")); // "+++++Hello World"

const newDirection = "E";
westPad.updateDirection(newDirection);

console.log(westPad(s, 2)); // "Hello World\n \n"
```

1b. alternatively you can use the standalone function

```ts
import {westPad} from 'west-pad';

const direction = getDeviceDirection(); // "N"
const s = "Hello World";

console.log(westPad(direction, s, 3)); // "   Hello World"
console.log(westPad("S", s, 3, "+")); // "Hello World+++"
console.log(westPad(220, s, 3)); // " \n \n \nHello World"
```

## What if I want to East pad?

Don't worry, `west-pad` has you covered. There is both a class method and a standalone function for you East-ers!

```ts
import WestPad from 'west-pad';

const direction = "N";
const s = "Hello World";

const westPad = new WestPad(direction);

const paddedWestFromMethod = westPad.pad(s, 3);
console.log(paddedWestFromMethod); // "   Hello World"

const paddedEastFromMethod = westPad.turnAroundThenPad(s, 3);
console.log(paddedEastFromMethod); // "Hello World   "
```

```ts
import {westPad, notWestPad} from 'west-pad';

const direction = "N";
const s = "Hello World";

const paddedWest = westPad(direction, s, 3);
console.log(paddedWest); // "   Hello World"

const paddedEast = notWestPad(direction, s, 3);
console.log(paddedEast); // "Hello World   "
```

## Parameters

### Class `constructor`

| Param  | Type           | Required | Description                                                                                                                                             |
| ------ | -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| direction | Direction or number | yes      | "N", "S", "E" or "W", or a number representing degrees from North

### Class Method `updateDirection`

| Param  | Type           | Required | Description                                                                                                                                             |
| ------ | -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| direction | Direction or number | yes      | "N", "S", "E" or "W", or a number representing degrees from North

### Class Method `pad`

| Param  | Type           | Required | Description                                                                                                                                             |
| ------ | -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| s | string | yes      | the target string to pad
| multiplicand | number | no; default = 1 | the number of times parameter `p` will be padded
| p | string | no; default = " " | the string that will pad target string `s` `multiplicand` times

### Class Method `turnAroundThenPad`

| Param  | Type           | Required | Description                                                                                                                                             |
| ------ | -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| s | string | yes      | the target string to pad
| multiplicand | number | no; default = 1 | the number of times parameter `p` will be padded
| p | string | no; default = " " | the string that will pad target string `s` `multiplicand` times

### Function `westPad`

| Param  | Type           | Required | Description                                                                                                                                             |
| ------ | -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| direction | Direction or number | yes      | "N", "S", "E" or "W", or a number representing degrees from North
| s | string | yes      | the target string to pad
| multiplicand | number | no; default = 1 | the number of times parameter `p` will be padded
| p | string | no; default = " " | the string that will pad target string `s` `multiplicand` times

### Function `notWestPad`

| Param  | Type           | Required | Description                                                                                                                                             |
| ------ | -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| direction | Direction or number | yes      | "N", "S", "E" or "W", or a number representing degrees from North
| s | string | yes      | the target string to pad
| multiplicand | number | no; default = 1 | the number of times parameter `p` will be padded
| p | string | no; default = " " | the string that will pad target string `s` `multiplicand` times


## Troubleshooting

***Padding is being added in the wrong direction?**

Step 1. Try turning your computer/device in a different direction.
Step 2. Profit
