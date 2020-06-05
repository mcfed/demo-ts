import { BaseAction } from "../index";

class Action extends BaseAction {}

describe("BaseAction unit test", () => {
  it("包含方法测试", () => {
    const action = new Action({}, {}, {});
    expect(Action.prototype.hasOwnProperty("fetchPage")).toBeTruthy();
    expect(Action.prototype.hasOwnProperty("fetchItem")).toBeTruthy();
    expect(Action.prototype.hasOwnProperty("fetchDelete")).toBeTruthy();
    expect(Action.prototype.hasOwnProperty("fetchSave")).toBeTruthy();
    expect(Action.prototype.hasOwnProperty("fetchUpdate")).toBeTruthy();
  });
});
