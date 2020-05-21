import React, { ReactNode } from "react";
import { Input, Select } from "antd";
import {
  ButtonGroups as ButtonGroupsModule,
  AdvancedSearch,
  DataTable,
  Panel,
} from "@mcf/components";

import { IRListProps, IRListState, IParams, PK, RListPage } from "@mcf/crud";
import { TableProps } from "antd/lib/table/interface";
import { ICarAction, IReducerState } from "../interface";
import Model from "../model";

const ButtonGroups = ButtonGroupsModule.default;
const Button = ButtonGroupsModule.CustomButton;

interface ListProps<M> extends IRListProps {
  actions: ICarAction;
  reducer: IReducerState;
  items: M[];
}

interface ListState<M> extends IRListState {}

export default class ListView<M extends Model> extends RListPage<
  ListProps<M>,
  ListState<M>
> {
  mergeTableConfig(config: TableProps<M>): Object {
    return {};
  }

  componentDidMount(): void {
    // this.props.
    this.handleFilter(this.searchParams());
  }
  handleFilter(value: Object) {
    const {
      actions,
      match: { params },
    } = this.props;
    actions.fetchPage(Object.assign({}, value, params));
  }
  searchParams(): object {
    // const { actions, querys } = this.props;
    // const defaultParams: Object = {};

    // return Object.assign(defaultParams, querys("actions.fetchPage"));
    return { a: 1 };
  }
  handlerMenu(rowkeys: PK[], actionType: string): void {
    console.log(rowkeys, actionType);
    const { actions } = this.props;
    if (actionType === "add") {
      this.goAdd();
    } else if (actionType === "edit") {
      this.goEdit(rowkeys[0]);
    } else if (actionType === "detail") {
      this.goDetail(rowkeys[0]);
    } else if (actionType === "delete") {
      actions.fetchDelete(rowkeys);
    }
    this.clearSelectRows();
  }
  renderOptionItem(item: { label: string; value: string }, idx: PK): ReactNode {
    return (
      <Select.Option key={idx} value={item.value}>
        {item.label}
      </Select.Option>
    );
  }
  renderSearchForm(): ReactNode {
    // const { actions, spins, locale } = this.props;
    const query: IParams<M> = this.searchParams();
    return (
      <AdvancedSearch
        /*loading={spins("actions.fetchList")}  */
        filterSubmitHandler={this.handleFilter.bind(this)}
      >
        <Input name="serverName" defaultValue={query.name} />
      </AdvancedSearch>
    );
  }
  render(): ReactNode {
    return (
      <Panel footer={false}>
        {this.renderSearchForm()}
        {this.renderToolbar()}
        {this.renderDataTable()}
      </Panel>
    );
  }

  renderToolbar(): ReactNode {
    const { selectedRowKeys } = this.state;
    const { actions, locale, spins } = this.props;

    return (
      <ButtonGroups
        handleClick={(actionType: string) =>
          this.handlerMenu(selectedRowKeys, actionType)
        }
      >
        <Button
          type="primary"
          actionkey="add"
          confirm="test123"
          confirmTitle="324"
        >
          {locale("GLOBAL.NEW")}
        </Button>
        <Button loading={spins(actions.fetchDelete)} actionkey="delete">
          {locale("GLOBAL.REMOVE")}
        </Button>
      </ButtonGroups>
    );
  }
  renderTableButtonGroups(text: string, row: M): ReactNode {
    const { locale } = this.props;
    return (
      <ButtonGroups
        handleClick={(actionType: string) =>
          this.handlerMenu([row.id.toString()], actionType)
        }
      >
        <Button actionkey="edit">{locale("GLOBAL.MODIFY")}</Button>
        <Button actionkey="detail">{locale("GLOBAL.DETAIL")}</Button>
        <Button actionkey="delete">{locale("GLOBAL.REMOVE")}</Button>
      </ButtonGroups>
    );
  }
  renderDataTable(): ReactNode {
    const { reducer, items, locale } = this.props;
    let tableConf: TableProps<M> = {
      rowKey: "id",
      dataSource: items,
      columns: [
        {
          title: locale("label"),
          key: "name",
          dataIndex: "name",
        },
        {
          title: locale("GLOBAL.COLUMNS.OPTIONS"),
          key: "options",
          dataIndex: "options",
          width: 190,
          render: this.renderTableButtonGroups.bind(this),
        },
      ],
    };

    return <DataTable {...tableConf} page={reducer.page} />;
  }
}
