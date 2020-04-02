import {ORMModel} from '@mcf/core'

const { attr, BaseModel } = ORMModel;
export const namespace:string = "abcd"

export default class Abcd extends BaseModel {
  static modelName = namespace
  static fields={}
  static options={
    // idAttribute: 'serverId',
  }
}


  // console.log(Schedule.fields)
Object.assign(Abcd.fields, BaseModel.fields, {
  name: attr(),
  title: attr()
});
