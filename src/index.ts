import compass, { CardinalSubset } from 'cardinal-direction';

const PadPosition = {
  N: "L",
  E: "B",
  S: "R",
  W: "T"
} as const;

type Direction = keyof typeof PadPosition;
type PadPosition = typeof PadPosition[Direction];

class WestPad {
  private direction: Direction;
  private padpos: PadPosition;

  constructor(direction: Direction | number) {
    if (typeof direction === 'number') {
      this.direction = compass.cardinalFromDegree(direction % 360, CardinalSubset.Basic) as Direction;
    } else {
      this.direction = direction;
    }

    this.padpos = PadPosition[this.direction];
  }

  updateDirection(direction: Direction | number) {
    if (typeof direction === 'number') {
      this.direction = compass.cardinalFromDegree(direction % 360, CardinalSubset.Basic) as Direction;
    } else {
      this.direction = direction;
    }

    this.padpos = PadPosition[this.direction];
  }

  pad(s: string, multiplicand: number = 1, p: string = " "): string {
    switch (this.padpos) {
      case "L": return `${p.repeat(multiplicand)}${s}`;
      case "R": return `${s}${p.repeat(multiplicand)}`;
      case "T": return `${(p + "\n").repeat(multiplicand)}${s}`;
      case "B": return `${s}${("\n" + p).repeat(multiplicand)}`;
      default: return s;
    }
  }

  turnAroundThenPad(s: string, multiplicand: number = 1, p: string = " "): string {
    switch (this.padpos) {
      case "L": return `${s}${p.repeat(multiplicand)}`;
      case "R": return `${p.repeat(multiplicand)}${s}`;
      case "T": return `${s}${("\n" + p).repeat(multiplicand)}`;
      case "B": return `${(p + "\n").repeat(multiplicand)}${s}`;
      default: return s;
    }
  }
};

const westPad = (direction: Direction | number, s: string, multiplicand: number = 1, p: string = " "): string => {
  const padpos = typeof direction === 'number'
    ? PadPosition[compass.cardinalFromDegree(direction % 360, CardinalSubset.Basic) as Direction]
    : PadPosition[direction];

  switch (padpos) {
    case "L": return `${p.repeat(multiplicand)}${s}`;
    case "R": return `${s}${p.repeat(multiplicand)}`;
    case "T": return `${(p + "\n").repeat(multiplicand)}${s}`;
    case "B": return `${s}${("\n" + p).repeat(multiplicand)}`;
    default: return s;
  }
};

const notWestPad = (direction: Direction | number, s: string, multiplicand: number = 1, p: string = " "): string => {
  const padpos = typeof direction === 'number'
    ? PadPosition[compass.cardinalFromDegree(direction % 360, CardinalSubset.Basic) as Direction]
    : PadPosition[direction];

  switch (padpos) {
    case "L": return `${s}${p.repeat(multiplicand)}`;
    case "R": return `${p.repeat(multiplicand)}${s}`;
    case "T": return `${s}${("\n" + p).repeat(multiplicand)}`;
    case "B": return `${(p + "\n").repeat(multiplicand)}${s}`;
  }
};


export default WestPad;

export {
  westPad,
  notWestPad
};

export type {
  Direction,
};
