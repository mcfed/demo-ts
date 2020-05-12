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
import { ICarAction, IReducerState, IModel } from "../interface";
import Model from "../model";


//扩展Button
import {ButtonProps} from 'antd/lib/button'; 

interface MyButtonProps { 
    [propName: string]: any;
    actionkey?:string;
    permission?:boolean;
    confirm?:string;
    confirmTitle?:string;
    tip?:string;
    disabled?:boolean;
    icon?:string;
    children: any[]; 
    type?: string; 
} 

const MyButton: React.FC<MyButtonProps & ButtonProps> = (props : MyButtonProps & ButtonProps) => {
    return <Button {...props} />  
}




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
  handleFilter(value: Object):void {
    const {
      actions,
      match: { params },
    } = this.props;
    actions.fetchPage(Object.assign({}, value, params));
  }
  
  searchParams(): object {
    const { actions, querys } = this.props;
    const defaultParams: Object = {};

    return Object.assign(defaultParams, querys(actions.fetchPage));
    // return { a: 1 };
  }
  // handlerMenu = (rowkeys: PK[], actionType: string): void => {
  handlerMenu(rowkeys: any, actionType: string): void {
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
        <Input name="serverName" defaultValue={query.name} />
      </AdvancedSearch>
    );
  }

  renderToolbar(): ReactNode {
    const { selectedRowKeys } = this.state;
    this.state.selectedRows.map((it: M) => it.name);
    const { actions, locale } = this.props;
    return (
      <ButtonGroups handleClick={this.handlerMenu.bind(this, selectedRowKeys)}>
        <MyButton
          type="primary"
          actionkey="add"
        >
          {locale("GLOBAL.NEW")}
        </MyButton>
        <MyButton
          actionkey="delete"
          /* loading={spins(actions.fetchDelete)} */
        >
          {locale("GLOBAL.REMOVE")}
        </MyButton>
      </ButtonGroups>
    );
  }
  renderTableButtonGroups(text: string, row: M): ReactNode {
    const { locale } = this.props;
    return (
      <ButtonGroups
        handleClick={this.handlerMenu.bind(this, row.id)}
        size="small"
      >
        <MyButton actionkey="edit">{locale("GLOBAL.MODIFY")}</MyButton>
        <MyButton actionkey="detail">{locale("GLOBAL.DETAIL")}</MyButton>
        <MyButton actionkey="delete">{locale("GLOBAL.REMOVE")}</MyButton>
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
    console.log(this.props)
    items.map((it: M) => it.title);
    let tableConf: TableProps<M> = {
      rowKey: "id",
      dataSource: items,
      columns: [
        {
          title: locale("label"),
          key: "label",
          dataIndex: "label",
        },
        {
          title: locale("name"),
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

    return <DataTable {...tableConf} />;
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
}
