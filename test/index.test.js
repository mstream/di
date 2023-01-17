import { describe, expect, it } from "vitest";
import { createContainer } from "../src";

describe(`createContainer()`, () => {
  it(`allows to register and invoke creators`, () => {
    const container = createContainer();
    container.register(`string`, () => `abc`);
    expect(container.context.string).toBe(`abc`);
  });
  it(`does not call a creator until requested`, () => {
    const container = createContainer();
    container.register(`error`, () => {
      throw Error();
    });
    container.register(`string`, () => `abc`);
    expect(container.context.string).toBe(`abc`);
  });
  it(`allow registring creators in any order`, () => {
    const container = createContainer();
    container.register(`string`, ({ number }) => `abc${number}`);
    container.register(`number`, () => 1);
    expect(container.context.string).toBe(`abc1`);
  });
  it(`prevents from overriding creators`, () => {
    const container = createContainer();
    container.register(`string`, () => `abc`);
    expect(() => container.register(`string`, () => `def`)).toThrow(
      /"string" is already registered in the context/
    );
  });
  it(`does not execute creators more than once`, () => {
    let counter = 0;
    const container = createContainer();
    container.register(`string`, () => {
      counter += 1;
      return `abc`;
    });
    container.context.string;
    expect(container.context.string).toBe(`abc`);
    expect(counter).toBe(1);
  });
});
