import React from 'react'
import { Button, Input, Select } from 'antd'
import { ListPage } from 'mcf-crud'
import { ButtonGroups, AdvancedSearch, DataTable,Panel } from 'mcf-components'
interface SelectItem {
  value: any;
  label: string;
}
interface TableConf {
  rowKey: string;
  dataSource: Array<Object>;
  onChange: Function;
  loading: any;
  defaultSort: any;
  columns: Array<ColumnItem>;

}
interface ColumnItem {
  title: string,
  key: string,
  dataIndex: string,
  width: number|string,
  render: Function
}
export default class ListView extends ListPage {
  componentDidMount() {
    this.handleFilter(this.searchParams())
  }
  handleFilter(value:Object) {
    const {actions,match:{params}} = this.props
    // this.clearSelectRows()
    actions.fetchPage(Object.assign({},value,params))
  }
  searchParams() {
    const { actions, querys } = this.props
    const defaultParams:Object={}

    return Object.assign(defaultParams,querys(actions.fetchPage))
  }
  handlerMenu(rowkeys:Array<string|number>|string|number, actionType:string) {
    const { actions } = this.props

    if (actionType === 'add') {
      this.goAdd()
    } else if (actionType === 'edit') {
      this.goEdit(rowkeys)
    } else if (actionType === 'detail') {
      this.goDetail(rowkeys)
    } else if (actionType === 'delete') {
      actions.fetchDelete(rowkeys)
    }
    this.clearSelectRows()
  }
  renderOptionItem(item:SelectItem, idx:string|number) {
    return <Select.Option key={idx} value={item.value}>{item.label}</Select.Option>
  }
  renderSearchForm() {
    const { actions,spins,locale } = this.props
    const query:Object = this.searchParams()

    return (
      <AdvancedSearch loading={spins(actions.fetchList)} filterSubmitHandler={this.handleFilter.bind(this)} >
				<Input label={locale('serverName.label')} name="serverName" defaultValue={query.serverName} />
			</AdvancedSearch>
    )
  }
  renderToolbar() {
    const { selectedRowKeys } = this.state
    const { spins,actions,locale } = this.props

    return (
      <ButtonGroups handleClick={this.handlerMenu.bind(this,selectedRowKeys)}>
				<Button actionkey="add" type="primary" >{locale("GLOBAL.NEW")} </Button>
				<Button actionkey="delete" loading={spins(actions.fetchDelete)} confirm={locale('delete.confirm')} disabled={this.selectMultiple()}>
          {locale("GLOBAL.REMOVE")}
				</Button>
		  </ButtonGroups>)
  }
  renderTableButtonGroups(text,row){
    const { locale } = this.props
    return (
      <ButtonGroups handleClick={this.handlerMenu.bind(this,row.id)} size="small">
        <Button actionkey="edit">{locale("GLOBAL.MODIFY")}</Button>
        <Button actionkey="detail">{locale("GLOBAL.DETAIL")}</Button>
        <Button actionkey="delete" confirm={locale('delete.confirm')}>
          {locale("GLOBAL.REMOVE")}</Button>
      </ButtonGroups>
    )
  }
  renderDataTable() {
    const { reducer: { page }, items, actions, spins, locale } = this.props
    const query:Object = this.searchParams()

    let tableConf:TableConf = {
      rowKey: "id",
      dataSource: items,
      // title: () => this.renderToolbar(),
      onChange: this.onChange.bind(this),
      loading: spins(actions.fetchPage),
      defaultSort:query,
      columns: [{
        title: locale('name.label'),
        key: "name",
        dataIndex: "name",
      }, {
        title: locale('title.label'),
        key: "title",
        dataIndex: "title",
      }, {
        title: locale('GLOBAL.COLUMNS.OPTIONS'),
        key: "options",
        dataIndex: "options",
        width: 190,
        render: this.renderTableButtonGroups 
      }]
    }
    
    return (<DataTable  {...this.mergeTableConfig(tableConf)} page={page} />)
  }
  render() {
    return (
      <Panel footer={false}>
        {this.renderSearchForm()}
        {this.renderToolbar()}
        {this.renderDataTable()}
      </Panel>
    )
  }
}
