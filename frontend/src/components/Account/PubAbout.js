import React , {Component} from "react";
import con from '../../img/i1.jpeg';
import {Link} from 'react-router-dom'
import { Divider } from 'antd';

class MarketLatest extends Component{
   
    render(){
        return(
            <div className="container">
            <img src={con} alt={"Nature"} style={{width:"100%"}}/>
                    <div className="text-block">
                        <Divider style={{ backgroundColor: 'white' , height: 3}}/>
                        <p style={{fontSize:35 , fontStyle:'bold' ,fontFamily: 'Helvetica' ,fontWeight: 700}}>ETHIOSTOCK</p><br/>
                        <p style={{fontSize:20 , fontStyle:'bold' ,fontFamily: 'Helvetica' ,fontWeight: 700}}>STOCK EXCHANGE ANALYSIS AND PREDICTION</p><br/>
                        <p style={{fontSize:25}}>In 2020 Ethiopia is planning to set up a stock market.</p><br/>
                        <p style={{fontSize:20}}>The stock market is a way for companies to get money by selling parts of their company</p><br/><br/>
                        <Link to ='/login' style={{color: 'white', backgroundColor: 'transparent' ,borderColor: 'white', fontWeight: 700}} > LOGIN</Link>
                        
                    </div>

            </div>
          
        )
    }
}

export default MarketLatest;


