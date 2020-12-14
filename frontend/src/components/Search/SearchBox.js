import React from 'react'
import { SearchOutlined, } from '@ant-design/icons';
import { Button, Input, Form} from 'antd';
import { Redirect } from 'react-router-dom';

import {Query } from '@apollo/client/react/components'
import {SEARCH_BUSINESS} from '../../gql/query/account'
import BusinessSearched from "../Account/ViewBusinessSearched"
const SearchBox=({placeholder})=>{
    const onFinish = (values)=>{
        console.log("search dasdasdad   ", values)
        return(
        <Query query = {SEARCH_BUSINESS} variables={{search:values}}>
            {({loading,error,data})=>{
                if(loading) return <div>Fetching</div>
                if(error) return <div>Error: {console.log(error)}</div>
                if(data.searchBusiness.length ===0){return <div>No stock to fetch</div>}
                const businessesSearched = data.searchBusiness
                console.log(businessesSearched)
                return(
                    <div>
                        {businessesSearched.map(business=><BusinessSearched key = {business.id} businessResult = {business}></BusinessSearched>)}
                    
                    
                    </div>
                )
            }
            }
        </Query> 
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