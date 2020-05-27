import { ORMModel } from "@mcf/core";
import { IModel } from "./interface";

const { attr, BaseModel, pk } = ORMModel;

export const namespace = "DbGroup";

export default class DbGroup extends BaseModel implements IModel {
  constructor(props: any) {
    super(props);
    this.initFields(props);
  }
  static modelName: string = namespace;

  @pk()
  groupId!: number;
  @attr()
  dbType!: string;
  @attr()
  groupName!: string;
  @attr()
  createTime!: string;
  
  getDbType(){}
}
