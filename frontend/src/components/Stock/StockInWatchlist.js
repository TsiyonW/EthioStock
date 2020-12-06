import React , {useState}from "react";
import {REMOVE_FROM_WATCHLIST} from  '../../gql/mutation/watchlist'
import { useMutation, } from '@apollo/client'

import {Form, Button } from 'antd'
const Stock =(props)=> {
    let [errMessage, setErrorMessage] = useState('');
    // let [stocks, setStock] = useQuery()
    const [removeFromWatchlist] = useMutation(REMOVE_FROM_WATCHLIST,
        {
            onCompleted(removeFromWatchlist){
                console.log("here")
                const {  success, message } = removeFromWatchlist.removeWatchlist;
                if(!success){
                    setErrorMessage(errMessage=message)
                }
                if(success){
                    // console.log(watchlistAdded)
                }
            }
        }
        )

        const stock = props.stockDetail;
        // const addToWatchlist = this.props.addToWatchlist
        const onFinish=()=>{
            removeFromWatchlist({variables:{stockId:stock.id}})
        };
        return(
            <div>
                <Form name="stock_form_w" onFinish={onFinish}>
                    <p  className="authentication-error">{errMessage}</p>
                  {  console.log(stock)}
                    <p>StockDescription: {stock.description}</p>
                    <p>No of stocks: {stock.noOfStock}</p>
                    <p>closingDate: {stock.closingDate}</p>
                    <p>price: {stock.price}</p>
                    <p>Min amount of stock to buy: {stock.minAmountOfStockToBuy}</p>
                    <p>opening Date{stock.openingDate}</p>
                    <p>Buys: {stock.buys}</p>
                    <p>Sells: {stock.sells}</p>
                    <p></p>
                    <Form.Item>
                        <Button htmlType="submit" >Remove from watchlist</Button> 
                    </Form.Item>
                     </Form>

            </div>
        )
    
}

export default Stock