import { ORMModel } from "@mcf/core";
import { IModel } from "./interface";
import { BaseModel } from "./base";

const { attr, pk } = ORMModel;

export const namespace = "Abcd";

export default class Abcd extends BaseModel implements IModel {
  constructor(props: any) {
    super(props);
    this.initFields(props);
  }
  static modelName: string = namespace;
  @pk()
  id!: number;
  @attr("title")
  name!: string;
  // @attr()
  title!: string;

  getName() {
    return Reflect.getMetadata("name", Abcd);
  }
}
