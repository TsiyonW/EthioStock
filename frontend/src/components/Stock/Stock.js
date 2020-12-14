import React , {useState}from "react";
import {ADD_TO_WATCHLIST} from  '../../gql/mutation/watchlist'
import { useMutation, } from '@apollo/client'

import {Form, Button, Alert } from 'antd'
const Stock =(props)=> {
    let [errMessage, setErrorMessage] = useState('');
    let [errExists, setErrExists] = useState(false)
    let [successMessage, setSuccessMessage] = useState(false)
    // let [stocks, setStock] = useQuery()
    const [addToWatchlist] = useMutation(ADD_TO_WATCHLIST,
        {
            onCompleted(addWatchlist){
                console.log("here")
                const {  watchlistAdded, success, message } = addWatchlist.addWatchlist;
                if(!success){
                    setErrorMessage(errMessage=message)
                    setErrExists(errExists = true)
                }
                if(success){
                    setSuccessMessage(successMessage = true)
                    setErrorMessage(errMessage = message)
                    console.log(watchlistAdded)
                }
            }
        }
        )

        const onCloseError=()=>{
            setErrExists(errExists=false)
        }
        const onCloseSuccess=()=>{
            setSuccessMessage(successMessage=false)
        }

        const stock = props.stockDetail;
        // const addToWatchlist = this.props.addToWatchlist
        const onFinish=()=>{
            addToWatchlist({variables:{stockId:stock.id}})
        };
        return(
            <div>
                {errExists?<Alert message={errMessage} type="error" closable onClose={onCloseError}/>:<p></p>}
                {successMessage?<Alert message={errMessage} type="success" closable onClose={onCloseSuccess}/>:<p></p>}
                
                <Form name="stock_form_w" onFinish={onFinish}>
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