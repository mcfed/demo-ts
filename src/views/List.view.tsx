import React, { ReactNode } from "react";
import { Button, Input, Select } from "antd";
import { ButtonGroups, AdvancedSearch, DataTable, Panel } from "@mcf/components";
import { IRListProps, IRListState, IParams, PK, RListPage } from "@mcf/crud";
import { TableProps } from "antd/lib/table/interface";
import { ICarAction, IReducerState, IModel } from "../interface";
import Model from '../model'

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
    const { actions, querys } = this.props;
    const defaultParams: Object = {};

    // return Object.assign(defaultParams, querys("actions.fetchPage"));
    return { a: 1 };
  }
  handlerMenu(rowkeys: string, actionType: string): void {
    const { actions } = this.props;
    if (actionType === "add") {
      this.goAdd();
    } else if (actionType === "edit") {
      this.goEdit(rowkeys);
    } else if (actionType === "detail") {
      this.goDetail(rowkeys);
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
    const { actions, spins, locale } = this.props;
    const query: IParams<M> = this.searchParams();
    return (
      <AdvancedSearch
        /*loading={spins("actions.fetchList")}  */
        filterSubmitHandler={this.handleFilter.bind(this)}
      >
        <Input
          name="serverName"
          defaultValue={query.name}
        />
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
    this.state.selectedRows.map((it: M) => it.name);
    const { actions, locale } = this.props;

    return (
      <ButtonGroups
        handleClick={(actionType: string) =>
          this.handlerMenu.bind(selectedRowKeys, actionType)
        }
      >

        <Button type="primary">{locale("GLOBAL.NEW")} </Button>
        <Button /* loading={spins(actions.fetchDelete)} */>
          {locale("GLOBAL.REMOVE")}
        </Button>
      </ButtonGroups>
    );
  }
  renderTableButtonGroups(text: string, row: M): ReactNode {
    const { actions,locale,spins } = this.props;
    return (
      <ButtonGroups
        handleClick={(actionType: string) =>
          this.handlerMenu(row.dbserverId.toString(), actionType)
        }
        size="small"
      >
        <Button>{locale("GLOBAL.MODIFY")}</Button>
        {/* <Button actionkey='edit'
          // loading={spins(actions)}
          // disabled={this.selectMultiple()}
          type='primary'>{locale("GLOBAL.DETAIL")}</Button> */}
        {/* <Button>{locale("GLOBAL.REMOVE")}</Button> */}
      </ButtonGroups>
    );
  }
  renderDataTable(): ReactNode {
    const {
      reducer: {},
      items,
      actions,
      spins,
      locale,
    } = this.props;
    items.map((it:M)=>it.title)
    let tableConf: TableProps<M> = {
      rowKey: "dbserverId",
      dataSource: items,
      columns: [
        {
          title: locale("dbserverDisplayName"),
          key: "dbserverDisplayName",
          dataIndex: "dbserverDisplayName",
        },
        {
          title: locale("dbserverIp"),
          key: "dbserverIp",
          dataIndex: "dbserverIp",
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

    return <DataTable {...tableConf} />;
  }
}
