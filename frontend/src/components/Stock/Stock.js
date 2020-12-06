import React , {useState}from "react";
import {ADD_TO_WATCHLIST} from  '../../gql/mutation/watchlist'
import { useMutation, } from '@apollo/client'

import {Form, Button } from 'antd'
const Stock =(props)=> {
    let [errMessage, setErrorMessage] = useState('');
    // let [stocks, setStock] = useQuery()
    const [addToWatchlist] = useMutation(ADD_TO_WATCHLIST,
        {
            onCompleted(addWatchlist){
                console.log("here")
                const {  watchlistAdded, success, message } = addWatchlist.addWatchlist;
                if(!success){
                    setErrorMessage(errMessage=message)
                }
                if(success){
                    console.log(watchlistAdded)
                }
            }
        }
        )

        const stock = props.stockDetail;
        // const addToWatchlist = this.props.addToWatchlist
        const onFinish=()=>{
            addToWatchlist({variables:{stockId:stock.id}})
        };
        return(
            <div>
                <Form name="stock_form_w" onFinish={onFinish}>
                    <p  className="authentication-error">{errMessage}</p>
                    <p>StockDescription: {stock.description}</p>
                    <p>No of stocks: {stock.noOfStock}</p>
                    <p>closingDate: {stock.closingDate}</p>
                    <p>price: {stock.price}</p>
                    <p>Min amount of stock to buy:{stock.minAmountOfStockToBuy}</p>
                    <p>opening Date{stock.openingDate}</p>
                    <p>Buys</p>
                    <p>Sells</p>
                    <Form.Item>
                        <Button htmlType="submit" >Add to watchlist</Button> 
                    </Form.Item>
                     </Form>

            </div>
        )
    
}

export default Stock