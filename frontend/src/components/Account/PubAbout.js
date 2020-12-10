import React , {Component} from "react";
import Header from '../Investor/Header'
import auth from '../../Auth'
import RecentTradesList from "../RecentTrade/RecentTrade";
import MyStockList from "../Stock/MyStockList";
import SideBar from '../Account/Sidebar';
import userIcon from '../../img/usericon.png';
import con from '../../img/i1.jpeg';
import { Divider, Layout,Statistic } from 'antd';
import { Skeleton, Switch, Icon, Avatar,Card, Col, Row,Button,Carousel } from 'antd';



//import { assertNamedType } from "graphql";
// import { Query } from "react-apollo";
const {  Footer } = Layout;
class MarketLatest extends Component{
   
    render(){
        return(
        //   <div className="latest_market">
        //     <Card>
        //   <Carousel autoplay>
        //   <div>
        //     <h3>1</h3>
        //   </div>
        //   <div>
        //     <h3>2</h3>
        //   </div>
        //   <div>
        //     <h3>3</h3>
        //   </div>
        //   <div>
        //     <h3>4</h3>
        //   </div>
        // </Carousel>
        // </Card>
        
        // </div>
        
    //     <container>
    //    <div className="img-text-wrapper">
    //       <img src={con}  style={{width:'100%' , marginTop:-15 , height:"10%"   }}  description={<h1>hfjshjdkhskjhfjdkhfkjhdjkfhdjf</h1>}/>    
    //     </div>
        
    //     </container>



            <div class="container">
            <img src={con} alt={"Nature"} style={{width:"100%"}}/>
                    <div class="text-block">
                        <Divider style={{ backgroundColor: 'white' , height: 3}}/>
                        <h style={{fontSize:35 , fontStyle:'bold' ,fontFamily: 'Helvetica' ,fontWeight: 700}}>ETHIOSTOCK</h><br/>
                        <h style={{fontSize:20 , fontStyle:'bold' ,fontFamily: 'Helvetica' ,fontWeight: 700}}>STOCK EXCHANGE ANALYSIS AND PREDICTION</h><br/>
                        <h style={{fontSize:25}}>In 2020 Ethiopia is planning to set up a stock market.</h><br/>
                        <h style={{fontSize:20}}>The stock market is a way for companies to get money by selling parts of their company</h><br/><br/>
                        <button Link to ='/login' style={{color: 'white', backgroundColor: 'transparent' ,borderColor: 'white', fontWeight: 700}} > LOGIN</button>
                        
                    </div>

            </div>
          
        )
    }
}

export default MarketLatest;


