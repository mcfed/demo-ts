import {ModuleModel} from 'mcf-module'

const {attr,BaseModel} = ModuleModel
export const namespace = "abc-ts"

export default class abc-ts extends BaseModel {
  static modelName = namespace
  static fields={}
  static options={
    // idAttribute: 'serverId',
  }
}


  // console.log(Schedule.fields)
Object.assign(abc-ts.fields,BaseModel.fields,{
    name:attr(),
    title:attr(),
})
