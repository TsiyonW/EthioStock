import React , { Component } from 'react';
import MyStock from './MyStock';

class MyStockList extends Component{

    render(){
        const mystockslist = this.props.myStocks;
        return(
            <div className="my-stock-list-container">
                <p>My stock</p>
                <table>
                    <tr>
                        <th>Market</th>
                        <th>Change</th>
                        <th></th>
                        <th>Sell</th>
                        <th>Buy</th>
                    </tr>
                    {
            console.log(mystockslist)}
                    {
                    
                    mystockslist.map((mystock)=>(
                        <MyStock key={mystock.id} myStockdescription = {mystock} />
                    ))
                    }


                </table>

            </div>
        )
    }
}

export default MyStockList;