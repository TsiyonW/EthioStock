import React from 'react'
import { SearchOutlined, } from '@ant-design/icons';
import { Button, Input, Form} from 'antd';
import { Redirect } from 'react-router-dom';
const SearchBox=({placeholder})=>{
    const onFinish = (values)=>{
        console.log("search parameter", values)
        return(
            <Redirect to="/watchlist"/>
        )
    }
   return(
    <div>
    <Form onFinish={onFinish} layout="inline" name="search-input">
        <Form.Item 
            name="search">
        <Input
            className ='search-input'
            type="search"
            placeholder ={placeholder}
        />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit"><SearchOutlined  style={{ fontSize: 15 }} /></Button>
        </Form.Item>


    </Form>
</div>
   )
   }
            


export default SearchBox;