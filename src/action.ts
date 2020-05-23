import { InjectFactory } from "@mcf/core";
import { PK } from "@mcf/crud";
import { ICarAction } from "./interface";
import Api from "./api";
import Reducer from "./reducer";

const { Injectable } = InjectFactory;

@Injectable
class CarAction implements ICarAction {
  constructor(public readonly reducer: Reducer, public readonly api: Api) {}
  fetchDelete(ids: PK | PK[]): void {
    throw new Error("Method not implemented.");
  }
  stop(payload: { a: string; b: number }) {
    console.log("stop", payload.a, payload.b);
  }
  fetchItem() {
    throw new Error("Method not implemented.");
  }
  async fetchPage() {
    this.reducer.savePage(await this.api.fetchPage());
  }
}

export { CarAction };
