# west-pad

Behold, a far superior alternative to [`left-pad`](https://github.com/left-pad/left-pad).

Inserts padding to the West of a string.

## Praise for `west-pad`

> West pad is absolute 🔥
> For the past 6 months my team has been migrating 2 of our in house web apps from left-pad to west-pad and TBH I just wish we’d done it sooner.
> We’re iterating way faster now, initial page load time is down 30%, and generally our apps are just way less buggy
> Highly recommend
> -- <cite>[source](https://www.reddit.com/r/reactjs/comments/165y1hm/comment/jygzae3/?utm_source=share&utm_medium=web2x&context=3)<cite>

> west pad is best pad
> -- <cite>[source](https://www.reddit.com/r/reactjs/comments/165y1hm/comment/jyhqpyw/?utm_source=share&utm_medium=web2x&context=3)<cite>

## Install

```bash
npm install west-pad
```

## Usage

0. First grab the cardinal direction from your device. This direction can be the cardinal char value or a number value representing degrees from North.

```ts
type Direction = "N" | "S" | "E" | "W" | number;
```

1. west-pad exports a class to hold cardinal state for your repeated padding convenience 

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

2. alternatively you can use the standalone function

```ts
import { westPad } from 'west-pad';

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

const paddedEastFromMethod = westPad.turnAroundThenPad(s, 3);
console.log(paddedEastFromMethod); // "Hello World   "
```

```ts
import { notWestPad } from 'west-pad';

const direction = "N";
const s = "Hello World";

const paddedEast = notWestPad(direction, s, 3);
console.log(paddedEast); // "Hello World   "
```

## Troubleshooting

**Padding is being added in the wrong direction?**

Step 1. Try turning your computer/device in a different direction.  
Step 2. Profit  


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

