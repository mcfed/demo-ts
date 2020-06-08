import React from "react";
import { Input } from "antd";
import { InputProps } from "antd/lib/input/Input";
import { SearchProps } from "antd/lib/input/Search";
const { Search } = Input;

interface InputSearchProps extends InputProps,SearchProps{
  onSearch?: (arg: any) => void;
  onChange?: (arg: any) => void;
  onBlur?: (arg: any) => void;
  defaultValue?: any;
}

interface InputSearchState {
  value: any;
}

export default class InputSearch extends React.Component<InputSearchProps,InputSearchState>{
  constructor(props:any){
    super(props)
    this.state = {
      value: props.defaultValue
    }
  }
  onSearchHandler = (value: string) => {
    const { onSearch, onChange } = this.props
    if(onSearch) onSearch(value)
    if(onChange) onChange(value)
  }
  onBlur = () => {
    const { onChange } = this.props
    const { value } = this.state
    if(onChange) onChange(value)
  }
  onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    const { value } = this.state
    return <Search {...this.props} onChange={this.onChange} value={value} onSearch={this.onSearchHandler} onBlur={this.onBlur}/>;
  }
}
