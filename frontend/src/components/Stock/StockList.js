import React from 'react'
import Stock from './Stock';
const StockList = (props) =>(
    <div className="stock-container">
        {   
            props.stocks.map((stock)=>(
                <Stock key={stock.id} stockDetail = {stock} addToWatchlist ={props.addToWatchlist}/>
                )
                )
        }
            
    </div>
)


export default StockList;