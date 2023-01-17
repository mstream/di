import { describe, expect, it } from "vitest";
import { createContainer } from "../src";

describe(`createContainer()`, () => {
  it(`allows to register and invoke creators`, () => {
    const { string } = createContainer().register(
      `string`,
      () => `abc`
    ).context;

    expect(string).toBe(`abc`);
  });
  it(`does not call a creator until requested`, () => {
    const { string } = createContainer()
      .register(`error`, () => {
        throw Error();
      })
      .register(`string`, () => `abc`).context;

    expect(string).toBe(`abc`);
  });
  it(`allow registring creators in any order`, () => {
    const { string } = createContainer()
      .register(`string`, ({ number }) => `abc${number}`)
      .register(`number`, () => 1).context;

    expect(string).toBe(`abc1`);
  });
  it(`fails when creator is not a function`, () => {
    expect(() => createContainer().register(`string`, `abc`)).toThrow(
      /"string" creator is not a function/
    );
  });
  it(`prevents from overriding creators`, () => {
    const container = createContainer().register(`string`, () => `abc`);
    expect(() => container.register(`string`, () => `def`)).toThrow(
      /"string" is already registered in the context/
    );
  });
  it(`does not execute creators more than once`, () => {
    let counter = 0;
    const { context } = createContainer().register(`string`, () => {
      counter += 1;
      return `abc`;
    });
    context.string;
    expect(context.string).toBe(`abc`);
    expect(counter).toBe(1);
  });
});
