import React, { useState } from "react";
import { ADD_TO_WATCHLIST } from "../../gql/mutation/watchlist";
import { useMutation } from "@apollo/client";
import graph from "../../img/i2.jpg";

import { Form, Button, Card, Col } from "antd";
const Stock = (props) => {
  let [errMessage, setErrorMessage] = useState("");
  // let [stocks, setStock] = useQuery()
  const [addToWatchlist] = useMutation(ADD_TO_WATCHLIST, {
    onCompleted(addWatchlist) {
      console.log("here");
      const { watchlistAdded, success, message } = addWatchlist.addWatchlist;
      if (!success) {
        setErrorMessage((errMessage = message));
      }
      if (success) {
        console.log(watchlistAdded);
      }
    },
  });

  const stock = props.stockDetail;
  // const addToWatchlist = this.props.addToWatchlist
  const onFinish = () => {
    addToWatchlist({ variables: { stockId: stock.id } });
  };
  return (
    
      
        <Col >
          <Card
            title="Habesha Beer"
            extra={
              <Button type="primary">
                <b>+</b>
              </Button>
            }
            style={{ width: 300, marginLeft: 20, marginTop: 20 }}
            cover={<img alt="example" src={graph} />}
          >
            <Form name="stock_form_w" onFinish={onFinish}>
              <p className="authentication-error">{errMessage}</p>
              <p>StockDescription: {stock.description}</p>
              <p>No of stocks: {stock.noOfStock}</p>
              <p>closingDate: {stock.closingDate}</p>
              <p>price: {stock.price}</p>
              <p>Min amount of stock to buy:{stock.minAmountOfStockToBuy}</p>
              <p>opening Date{stock.openingDate}</p>
              <p>Buys</p>
              <p>Sells</p>
              <Form.Item>
                <Button htmlType="submit">Add to watchlist</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
    
  );
};

export default Stock;
