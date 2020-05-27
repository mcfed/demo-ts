import React, { ReactNode } from "react";
import { Input } from "antd";
import { BaseForm, FormItem, Panel } from "@mcf/components";
import { IRFormProps, IRFormState, IParams } from "@mcf/crud";
import { RFormPage } from "@mcf/crud";
import Model from '../model'
import { ICarAction, IReducerState } from "../interface";

interface FormProps<M> extends IRFormProps{
  actions:ICarAction
  reducer: IReducerState
  item:M
}

interface FormState<M> extends IRFormState{
  value: number;
}

export default class FormView< M extends Model> extends RFormPage<FormProps<M>, FormState<M>> {
  componentDidMount(): void {
    const { actions } = this.props;
    const params: IParams<M> = this.props.match.params;
    if (params.groupId) {
      actions.fetchItem(params.groupId);
    }
  }

  handleSubmit(values:Object): void {
    const { actions } = this.props;
    actions.fetchSave(values);
  }
  handleCancel(values:Object): void {
    this.goBack();
  }

  render(): ReactNode {
    const { actions, locale, spins } = this.props;
    // const saveSpin = spins(actions.fetchSave);
    // const itemSpin = spins(actions.fetchItem);
    const item = this.props.item;
    console.log(item)
    return (
      <Panel
        // confirmLoading={saveSpin}
        // loading={itemSpin}
        onOk={this.onSubmit.bind(this, "handleSubmit")}
        onCancel={this.handleCancel.bind(this, "handleCancel")}
      >
        <BaseForm 
          ref={this.saveFormRef.bind(this)}
        >
          <FormItem >
            <Input type="hidden" name="id" defaultValue={item.groupId} />
          </FormItem>
          <FormItem label={locale("groupName.label")} >
            <Input name="groupName" defaultValue={item.groupName} />
          </FormItem>
          <FormItem label={locale("dbType.label")} >
            <Input name="dbType" defaultValue={item.dbType} />
          </FormItem>
        </BaseForm>
      </Panel>
    );
  }
}
