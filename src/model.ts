import {ORMModel} from '@mcf/core'

const { attr, BaseModel, Model, fieldSetAttr } = ORMModel;
export const namespace:string = "abcd"

// export default class Abcd extends BaseModel {
//   static modelName = namespace
//   static fields={}
//   static options={
//     // idAttribute: 'serverId',
//   }
// }


//   // console.log(Schedule.fields)
// Object.assign(Abcd.fields, BaseModel.fields, {
//   name: attr(),
//   title: attr()
// });


interface Prop{
  id:number
  name:string
  title:string
}

@Model()
class Abcd extends BaseModel {
  static modelName: string = "abcd";
  @fieldSetAttr()
  id!: number;
  @fieldSetAttr()
  name!: string;
  @fieldSetAttr()
  title!: string;
}

export default Abcd