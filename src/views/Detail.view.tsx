import React, { ReactNode } from "react";
import { Button } from "antd";
import { DetailTable, Panel } from "mcf-components";
import { IRFormProps, IRFormState, IProps, IState } from "@mcf/crud";
import { RFormPage } from "@mcf/crud";
import Model from "../model";

interface FormProps<M extends Model> extends IRFormProps<M> {
  locale: Function;
  querys: Function;
  spins: Function;
  reducer: Object;
}

interface FormState<M extends Model> extends IRFormState<M> {
  // value: number
}
export default class DetailView<
  P extends IProps<FormProps<M>>,
  S extends IState<FormState<M>>,
  M extends Model
> extends RFormPage<P, S, M> {
  handleSubmit(value: any): void {
    throw new Error("Method not implemented.");
  }
  componentDidMount(): void {
    const {
      actions,
      match: { params }
    } = this.props;
    actions.fetchItem({ id: params.id });
  }

  handleCancel(values: object): void {
    //@ts-ignore
    this.goBack();
  }
  renderPanelFooter(): ReactNode {
    const { locale } = this.props;

    return (
      <Button
        type="primary"
        onClick={this.handleCancel.bind(this, ["handleCancel"])}
      >
        {locale("GLOBAL.BACK")}
      </Button>
    );
  }
  render(): ReactNode {
    const { item, locale } = this.props;
    const source = [
      {
        label: locale("name.label"),
        value: item.name
      },
      {
        label: locale("title.label"),
        value: item.nickname
      }
    ];

    return (
      <Panel title={locale("GLOBAL.DETAIL")} footer={this.renderPanelFooter}>
        <DetailTable
          title={locale("baseInfo.title")}
          dataSource={source}
          labelKey="label"
          columnNumber={2}
        />
      </Panel>
    );
  }
}
