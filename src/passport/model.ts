// // @ts-nocheck
// import {attr, BaseModel} from '../../model';

// export const namespace = 'user';

// export default class user extends BaseModel {
//   static modelName = namespace;
//   static fields = {};
//   static options = {
//     // idAttribute: 'serverId',
//   };
//   static reducer() {}
// }

// Object.assign(user.fields, BaseModel.fields, {
//   id: attr(),
//   name: attr(),
//   realName: attr(),
//   mobilePhone: attr(),
//   email: attr(),
//   roles: attr(),
//   role: attr(),
//   createTime: attr(),
//   status: attr(),
//   roleId: attr()
// });

import { ORMModel } from '@mcf/core';
//import { IModel } from "./interface";

const { attr, BaseModel, pk } = ORMModel;

export const namespace = "aaaaaa";

export default class Abcde extends BaseModel {
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
  title!: string;

  getName() {}
}
