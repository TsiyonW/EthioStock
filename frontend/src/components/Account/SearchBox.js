import React, {Component} from 'react'
import { SearchOutlined, } from '@ant-design/icons';
import { Button, Input, Form} from 'antd';
import { Redirect } from 'react-router-dom';

class SearchBox extends Component{
    render(){
        const { Search } = Input;
const onSearch = value => console.log(value);
   
   return(
    <div >
    <Search placeholder="Search Buisnesses" onSearch={value => console.log(value)} style={{ width: 400 ,borderRadius:250 ,align : 'center'}}/>
</div>
   )
   
            
   }
}

export default SearchBox;