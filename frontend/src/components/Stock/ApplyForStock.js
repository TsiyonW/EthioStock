import React, { useState } from "react";
import { APPLY_FOR_STOCK } from "../../gql/mutation/stock";
import {REMOVE_FROM_WATCHLIST} from '../../gql/mutation/watchlist'
import { useMutation } from "@apollo/client";
import graph from "../../img/i2.jpg";
import {Alert } from 'antd'
import "antd/dist/antd.css"
import { Form, Button, Card, Col } from "antd";
const Stock = (props) => {
  let [errMessage, setErrorMessage] = useState("");
  let [isSuccess, setIsSuccess] = useState(false)
  let [isError, setIsError] = useState(false)

  // let [stocks, setStock] = useQuery()
  const [applyForStock] = useMutation(APPLY_FOR_STOCK, {
    onCompleted(applyforstock) {
      console.log("here");
      const { application, success, message } = applyforstock.applyStock;
      if (!success) {
          setIsError((isError = true))
        setErrorMessage((errMessage = message));
      }
      if (success) {
          
        setIsSuccess((isSuccess = true))
        setErrorMessage((errMessage = message))
        console.log(application);
      }
    },
  });

  const [removeFromWatchlist] = useMutation(REMOVE_FROM_WATCHLIST, {
    onCompleted(removeWatchlist) {
      console.log("here");
      const { application, success, message } = removeWatchlist.removeWatchlist;
      if (!success) {
          setIsError((isError = true))
        setErrorMessage((errMessage = message));
      }
      if (success) {
          
        setIsSuccess((isSuccess = true))
        setErrorMessage((errMessage = message))
        console.log(application);
      }
    },
  });




  const onCloseSucc =()=>{
    setIsSuccess((isSuccess = false))
    setIsError((isError = false))
  }

  const stock = props.stockDetail;

  const removeStock=()=>{
    removeFromWatchlist({ variables: { stockId: stock.id } });
}

  // const addToWatchlist = this.props.addToWatchlist
  const onFinish = () => {
    applyForStock({ variables: { stockId: stock.id } });
  };
  return (
    
      
        <Col >
          <Card
            title="Habesha Beer"
            extra={
              <Button type="danger" onClick={removeStock}>
                <b>-</b>
              </Button>
            }
            style={{ width: 300, marginLeft: 20, marginTop: 20 }}
            cover={<img alt="example" src={graph} />}
          >
            <Form name="stock_form_w" onFinish={onFinish}>
                {isError?<Alert type = "error" message = {errMessage} closable onClose={onCloseSucc} />:<p></p>}
                {isSuccess?<Alert type = "success" message = {errMessage} closable onClose={onCloseSucc}/>:<p></p>}

              <p>StockDescription: {stock.description}</p>
              <p>No of stocks: {stock.noOfStock}</p>
              <p>closingDate: {stock.closingDate}</p>
              <p>price: {stock.price}</p>
              <p>Min amount of stock to buy:{stock.minAmountOfStockToBuy}</p>
              <p>opening Date{stock.openingDate}</p>
              <p>Buys</p>
              <p>Sells</p>
              <Form.Item>
                <Button htmlType="submit">Apply for Stock</Button>
              </Form.Item>
              
            </Form>
          </Card>
        </Col>
    
  );
};

export default Stock;
