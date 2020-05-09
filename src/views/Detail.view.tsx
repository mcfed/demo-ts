import React, { ReactNode } from "react";
import { Button } from "antd";
import { DetailTable, Panel } from "@mcf/components";
import { IRFormProps, IRFormState} from "@mcf/crud";
import { RFormPage } from "@mcf/crud";
import Model from "../model";

interface FormProps<M extends Model> extends IRFormProps {
  locale: Function;
  querys: Function;
  spins: Function;
  reducer: Object;
  item:any
}

interface FormState<M extends Model> extends IRFormState{
  // value: number
}
export default class DetailView<M extends Model> extends RFormPage<FormProps<M>, FormState<M>> {
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
    this.goBack();
  }
  renderPanelFooter(): ReactNode {
    const { locale } = this.props;

    return (
      <Button type="primary" onClick={this.handleCancel.bind(this, ["handleCancel"])} >
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
      <Panel title={locale("GLOBAL.DETAIL")} footer={this.renderPanelFooter.bind(this)}>
        <DetailTable
          mode="array"
          title={locale("baseInfo.title")}
          dataSource={source}
          labelKey="label"
          columnNumber={2}
        />
      </Panel>
    );
  }
}
