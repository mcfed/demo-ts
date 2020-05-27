import React, { ReactNode } from "react";
import { Button, Input, Select } from "antd";
import { ButtonGroups, AdvancedSearch, DataTable, Panel } from "@mcf/components";
import { IRListProps, IRListState, IParams, PK, RListPage } from "@mcf/crud";
import { TableProps } from "antd/lib/table/interface";
import { ICarAction, IReducerState } from "../interface";
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
    const { actions,querys } = this.props;
    const defaultParams: Object = {};
    return Object.assign(defaultParams, querys(actions.fetchPage));
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
    // const { actions, spins, locale } = this.props;
    const query: IParams<M> = this.searchParams();
    return (
      <AdvancedSearch
        /*loading={spins("actions.fetchList")}  */
        filterSubmitHandler={this.handleFilter.bind(this)}
      >
        <Input
          name="groupName"
          defaultValue={query.groupName}
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
    const { actions, locale,spins } = this.props;

    return (
      <ButtonGroups
        handleClick={(actionType: string) =>
          this.handlerMenu.bind(selectedRowKeys, actionType)
        }
      >
        <Button type="primary">{locale("GLOBAL.NEW")} </Button>
        <Button>{locale("GLOBAL.MODIFY")}</Button>
        <Button loading={spins(actions.fetchDelete)}>
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
          this.handlerMenu(row.groupId.toString(), actionType)
        }
        size="small"
      >
        <Button>{locale("GLOBAL.MODIFY")}</Button>
        <Button>{locale("GLOBAL.DETAIL")}</Button>
        <Button>{locale("GLOBAL.REMOVE")}</Button>
      </ButtonGroups>
    );
  }
  renderDataTable(): ReactNode {
    const {
      reducer,
      items,
      locale,
    } = this.props;
    let tableConf: TableProps<M> = {
      rowKey: "groupId",
      dataSource: items,
      columns: [
        {
          title: locale("groupName.label"),
          key: "groupName",
          dataIndex: "groupName",
        },
        {
          title: locale("dbType.label"),
          key: "dbType",
          dataIndex: "dbType",
        },
        {
          title: locale("createTime.label"),
          key: "createTime",
          dataIndex: "createTime",
        },
        {
          title: locale("GLOBAL.COLUMNS.OPTIONS"),
          key: "options",
          dataIndex: "options",
          width: 590,
          render: this.renderTableButtonGroups.bind(this),
        },
      ],
    };

    return <DataTable {...tableConf} />;
  }
}
