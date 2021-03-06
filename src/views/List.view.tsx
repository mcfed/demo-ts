import React, { ReactNode } from "react";
import { Button, Input, Select } from "antd";
import {
  ButtonGroups,
  AdvancedSearch,
  DataTable,
  Panel,
} from "@mcf/components";
import { IRListProps, IRListState, IParams, PK, RListPage } from "@mcf/crud";
import { TableProps } from "antd/lib/table/interface";
import { ICarAction, IReducerState } from "../interface";
import Model from "../model";

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
  handlerMenu(rowkeys: PK | PK[], actionType: string): void {
    console.log(actionType);
    const { actions } = this.props;
    if (actionType === "add") {
      this.goAdd();
    } else if (actionType === "edit") {
      this.goEdit(rowkeys as PK);
    } else if (actionType === "detail") {
      this.goDetail(rowkeys as PK);
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
          //@ts-ignore
          actionkey="add"
          type="primary"
        >
          {locale("GLOBAL.NEW")}
        </Button>
        <Button
          //@ts-ignore
          actionkey="delete"
          loading={spins(actions.fetchDelete)}
        >
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
          this.handlerMenu(row.id.toString(), actionType)
        }
        size="small"
      >
        <Button
          //@ts-ignore
          actionkey="edit"
        >
          {locale("GLOBAL.MODIFY")}
        </Button>
        <Button
          //@ts-ignore
          actionkey="detail"
        >
          {locale("GLOBAL.DETAIL")}
        </Button>
        <Button
          //@ts-ignore
          actionkey="delete"
        >
          {locale("GLOBAL.REMOVE")}
        </Button>
      </ButtonGroups>
    );
  }
  renderDataTable(): ReactNode {
    const {
      // reducer,
      items,
      locale,
    } = this.props;
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
          title: locale("title"),
          key: "title",
          dataIndex: "title",
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
