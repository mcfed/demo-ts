import React, { ReactNode } from "react";
import { Input } from "antd";
import { BaseForm, FormItem, Panel } from "@mcf/components";
import { IRFormProps, IRFormState, IParams } from "@mcf/crud";
import { RFormPage } from "@mcf/crud";
import Model from '../model'
import { IReducerState } from "../interface";
import InputSearch from '../components/InputSearch/index'

interface FormProps<M> extends IRFormProps{
  reducer: IReducerState;
  item:M
}

interface FormState<M> extends IRFormState{
}

export default class FormView< M extends Model> extends RFormPage<FormProps<M>, FormState<M>> {
  componentDidMount(): void {
    const { actions } = this.props;
    const params: IParams<M> = this.props.match.params;
    if (params.id) {
      actions.fetchItem({ id: params.id });
    }
  }

  handleSubmit(values:Object): void {
    const { actions } = this.props;
    const params: IParams<M> = this.props.match.params;
    // this.state.value
    // actions.fetchSave(values);
    console.log(this.form.getFieldValue('name1'))
    if (params.id) {
      actions.fetchUpdate({values,...{id: params.id}});
    }else{
      actions.fetchSave({values});
    }
  }
  handleCancel(values:Object): void {
    this.goBack();
  }

  render(): ReactNode {
    const { item, actions, locale, spins, reducer } = this.props;
    console.log(item.getName())
    console.log(this.props)
    // reducer.page.total
    return (
      <Panel
        // confirmLoading={saveSpin}
        // loading={itemSpin}
        onOk={this.onSubmit.bind(this, "handleSubmit")}
        onCancel={this.handleCancel.bind(this, "handleCancel")}
      >
        <BaseForm 
          //@ts-ignore
          onSubmit={this.onSubmit.bind(this)}
          ref={this.saveFormRef.bind(this)}
        >
          <FormItem label="sdfs" >
            <Input type="hidden" name="id" defaultValue={item.id} />
          </FormItem>
          <FormItem label="name">
            <Input name="name" defaultValue={item.getName()} />
          </FormItem>
          <FormItem label="name1">
            {/* <Input.Search name="name1" placeholder="input search text" onSearch={()=>console.log('1111')}  enterButton /> */}
            <InputSearch name="name1" placeholder="input search text"  enterButton />
          </FormItem>
        </BaseForm>
      </Panel>
    );
  }
}
