import React from 'react'
import {CarAction} from '../action';
import {InjectFactory} from '@mcf/core'



  it('saga 单元测试', done => {
    const { Factory } = InjectFactory;
    console.log(Factory(CarAction).fetchPage())
  });
