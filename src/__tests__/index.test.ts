import WestPad, { westPad, notWestPad } from '../index';

jest.mock('cardinal-direction', () => {
  const originalModule = jest.requireActual('cardinal-direction');

  return {
    ...originalModule,
  }
});


describe("WestPad", () => {
  it("should pad a string to the left", () => {
    expect.assertions(2);
    const wp = new WestPad("N");
    expect(wp.pad("foo", 3)).toBe("   foo");
    wp.updateDirection(0);
    expect(wp.pad("foo", 3)).toBe("   foo");
  });

  it("should pad a string to the right", () => {
    expect.assertions(2);
    const wp = new WestPad("S");
    expect(wp.pad("foo", 3)).toBe("foo   ");
    wp.updateDirection(180);
    expect(wp.pad("foo", 3)).toBe("foo   ");
  });

  it("should pad a string to the top", () => {
    expect.assertions(2);
    const wp = new WestPad("W");
    expect(wp.pad("foo", 3)).toBe(" \n \n \nfoo");
    wp.updateDirection(270);
    expect(wp.pad("foo", 3)).toBe(" \n \n \nfoo");
  });

  it("should pad a string to the bottom", () => {
    expect.assertions(2);
    const wp = new WestPad("E");
    expect(wp.pad("foo", 3)).toBe("foo\n \n \n ");
    wp.updateDirection(90);
    expect(wp.pad("foo", 3)).toBe("foo\n \n \n ");
  });

  it("should pad a string to the left, then turn around and pad to the right", () => {
    expect.assertions(2);
    const wp = new WestPad("N");
    expect(wp.pad("foo", 3)).toBe("   foo");
    expect(wp.turnAroundThenPad("foo", 3)).toBe("foo   ");
  });

  it("should pad a string to the left with standalone function", () => {
    expect.assertions(4);
    expect(westPad("N", "foo", 3)).toBe("   foo");
    expect(westPad(0, "foo", 3)).toBe("   foo");
    expect(notWestPad("S", "foo", 3)).toBe("   foo");
    expect(notWestPad(180, "foo", 3)).toBe("   foo");
  });

  it("should pas a string to the right with standalone function", () => {
    expect.assertions(4);
    expect(westPad("S", "foo", 3)).toBe("foo   ");
    expect(westPad(180, "foo", 3)).toBe("foo   ");
    expect(notWestPad("N", "foo", 3)).toBe("foo   ");
    expect(notWestPad(0, "foo", 3)).toBe("foo   ");
  });

  it("should pad a string to the top with standalone function", () => {
    expect.assertions(4);
    expect(westPad("W", "foo", 3)).toBe(" \n \n \nfoo");
    expect(westPad(270, "foo", 3)).toBe(" \n \n \nfoo");
    expect(notWestPad("E", "foo", 3)).toBe(" \n \n \nfoo");
    expect(notWestPad(90, "foo", 3)).toBe(" \n \n \nfoo");
  });

  it("should pad a string to the bottom with standalone function", () => {
    expect.assertions(4);
    expect(westPad("E", "foo", 3)).toBe("foo\n \n \n ");
    expect(westPad(90, "foo", 3)).toBe("foo\n \n \n ");
    expect(notWestPad("W", "foo", 3)).toBe("foo\n \n \n ");
    expect(notWestPad(270, "foo", 3)).toBe("foo\n \n \n ");
  });
});
