import { ORMModel } from "@mcf/core";
import { IModel } from "./interface";

const { attr, BaseModel, pk } = ORMModel;

export const namespace = "Abcd";

export default class Abcd extends BaseModel implements IModel {
  static modelName: string = namespace;
  @pk()
  id!: number;
  @attr()
  name!: string;
  @attr()
  title!: string;
}
