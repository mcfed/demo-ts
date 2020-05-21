import React, { ReactNode } from "react";
import { Input, Select } from "antd";
import { BaseForm, FormItem, Panel } from "@mcf/components";
import { IRFormProps, IRFormState, IParams } from "@mcf/crud";
import { RFormPage } from "@mcf/crud";
import Model from "../model";
import { ICarAction } from "../interface";

interface FormProps<M extends Model> extends IRFormProps {
  actions: ICarAction;
  reducer: Object;
  item: any;
}

interface FormState<M extends Model> extends IRFormState {
  value: number;
}

export default class FormView<M extends Model> extends RFormPage<
  FormProps<M>,
  FormState<M>
> {
  componentDidMount(): void {
    const { actions } = this.props;
    const params: IParams<M> = this.props.match.params;
    if (params.id) {
      actions.fetchItem({ id: params.id });
    }
  }

  handleSubmit(values: { id?: string }): void {
    const { actions } = this.props;
    // this.state.value

    if (values.id) {
      actions.fetchUpdate(values);
    } else {
      actions.fetchSave(values);
    }
  }
  handleCancel(values: Object): void {
    this.goBack();
  }

  render(): ReactNode {
    const { item, actions, locale, spins } = this.props;
    // const saveSpin = spins(actions.fetchSave);
    // const itemSpin = spins(actions.fetchItem);
    console.log(item);
    return (
      <Panel
        // confirmLoading={saveSpin}
        // loading={itemSpin}
        onOk={this.onSubmit.bind(this, "handleSubmit")}
        onCancel={this.handleCancel.bind(this, "handleCancel")}
      >
        <BaseForm ref={this.saveFormRef.bind(this)}>
          <FormItem label="sdfs" name="id">
            <Select defaultValue={22} />
          </FormItem>
          <FormItem label="stye" name="djkf">
            <Input defaultValue={123} />
          </FormItem>
        </BaseForm>
      </Panel>
    );
  }
}
