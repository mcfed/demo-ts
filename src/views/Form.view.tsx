import React, { ReactNode } from "react";
import { Input } from "antd";
import { BaseForm, FormItem, Panel } from "mcf-components";
import { IRFormProps, IRFormState, IProps, IState, IParams } from "@mcf/crud";
import { RFormPage } from "@mcf/crud";
import Model from "../model";

//@ts-ignore
interface FormProps<M extends Model> extends IRFormProps<M> {
  reducer: Object;
}

//@ts-ignore
interface FormState<M extends Model> extends IRFormState<M> {
  value: number;
}

export default class FormView<
  P extends IProps<FormProps<M>>,
  S extends IState<FormState<M>>,
  M extends Model
//@ts-ignore
> extends RFormPage<P, S, M> {
  componentDidMount(): void {
    const { actions } = this.props;
    const params: IParams<M> = this.props.match.params;
    if (params.id) {
      actions.fetchItem({ id: params.id });
    }
  }

  handleSubmit(values): void {
    const { actions } = this.props;
    // this.state.value

    actions.fetchSave(values);
  }
  handleCancel(values): void {
    this.goBack();
  }

  render(): ReactNode {
    const { item, actions, locale, spins } = this.props;
    const saveSpin = spins(actions.fetchSave);
    const itemSpin = spins(actions.fetchItem);
    return (
      <Panel
        confirmLoading={saveSpin}
        loading={itemSpin}
        onOk={this.onSubmit.bind(this, "handleSubmit")}
        onCancel={this.handleCancel.bind(this, "handleCancel")}
      >
        <BaseForm
          onSubmit={this.onSubmit.bind(this)}
          ref={this.saveFormRef.bind(this)}
        >
          <FormItem>
            <Input type="hidden" name="id" defaultValue={item.id} />
          </FormItem>
          <FormItem>
            <Input
              label={locale("{@name@}.label")}
              name="{@name@}"
              defaultValue={item.name}
            />
          </FormItem>
        </BaseForm>
      </Panel>
    );
  }
}
