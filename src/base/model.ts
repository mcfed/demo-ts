import { ORMModel } from "@mcf/core";
import { AnyAction } from "redux";
const { BaseModel, SessionBoundModel } = ORMModel;

export default class NBaseModel extends BaseModel {
  constructor(props: any) {
    super(props);
    this.initFields(props);
  }
}

NBaseModel.reducers = {
  newItem: (action: AnyAction, modelClass: any) => {
    modelClass.create(action.payload);
  },
  savePage: (action: AnyAction, modelClass: any) => {
    modelClass
      .all()
      .toModelArray()
      .forEach((model: typeof SessionBoundModel) => model.delete());
    action.payload.items.map((m: typeof SessionBoundModel) => modelClass.create(m));
  },
  saveList: (action: AnyAction, modelClass: any) => {
    action.payload.items.map((m: typeof SessionBoundModel) => modelClass.create(m));
  },
  updateItem: (action: AnyAction, modelClass: any) => {
    modelClass.withId(action.payload.id).update(action.payload);
  },
  saveItem: (action: AnyAction, modelClass: any) => {
    modelClass.upsert(action.payload);
  },
  deleteItem: (action: AnyAction, modelClass: any) => {
    const model = modelClass.withId(action.payload);
    model.delete();
  },
};
