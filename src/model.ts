import { ORMModel } from "@mcf/core";
import { IModel } from "./interface";

const { attr, BaseModel, pk } = ORMModel;

export const namespace = "Abcd";

export default class Abcd extends BaseModel implements IModel {
  constructor(props: any) {
    super(props);
    this.initFields(props);
  }
  static modelName: string = namespace;

  @pk()
  id!: number;
  @attr()
  name!: string;
  @attr()
  hostname!: string;
  @attr()
  port!: number;
  @attr()
  dbtype!: string;
  @attr()
  configCount!: number;

  getName() {}
}
