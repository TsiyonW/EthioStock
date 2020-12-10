import React , {Component} from "react"
import {Link} from 'react-router-dom'
import '../../styles/styles.scss'
import { NavLink } from 'react-router-dom';
import Search from './SearchBox';
import Latestmarket from '../../components/News/Latestmarket'
import Latestnews from '../../components/News/Latestnews'
import PubAbout from './PubAbout'
import Pbackground from '../../img/i2.jpg';
import { Affix, Button ,Divider ,Layout} from 'antd';
const {  Footer } = Layout;

class PublicHomepage extends Component{
    state={
        searchField:'',
    }
    

    render(){
        const headerButtons = this.props.headerButtons;
        return(
             <div>
             

            <div className = "publichomepage-container">


          <Affix offsetTop={0} onChange={affixed => console.log(affixed)  }  >
     
            <ul>
                <li> <button className="menu-unfold-btn" onClick={this.props.displaySideBar}></button></li>
                <li><span className = "header-title">EthioStock</span> </li>
                <li> <div className = "header-flex-box-search">    <Search placeholder="Search ..." onSearch={value => console.log(value)} enterButton  /></div></li>
                <li> 
                    <ul className="ul-side">    
                            <li><NavLink to='/homepage' activeClassName="active-link" >Homepage</NavLink></li>
                            <li><NavLink to="/adminhomepage" activeClassName="active-link">adminhomepage</NavLink></li>
                            <li><NavLink to='/profile'  activeClassName="active-link">My Profile</NavLink></li>

                            <li><NavLink to='/login'  >LogIn</NavLink></li>
                            
                    </ul> 
                    
                </li>
         

                
            </ul>
            </Affix>


    <div class="container">
            <img src={Pbackground} alt={"Nature"} style={{width:"100%" ,marginTop:-15}}/>
                    <div class="text-block">
                   
                      
                        <h style={{fontSize:40 , fontStyle:'bold' ,fontFamily: 'Helvetica' ,fontWeight: 700}}>ETHIOSTOCK</h><br/>
                        <h style={{fontSize:25 , fontStyle:'bold' ,fontFamily: 'Helvetica' ,fontWeight: 700}}>STOCK EXCHANGE ANALYSIS AND PREDICTION</h><br/>
                        <h style={{fontSize:25}}>In 2020 Ethiopia is planning to set up a stock market.</h><br/>
                        <h style={{fontSize:20}}>The stock market is a way for companies to get money by selling parts of their company;</h>
                        
                   
                        
                        
                    </div>

            </div>
        
       
           
                
                            
                     
                    
       
       
                        
         

<br/>    </div>

                
                    
                 <div style={{marginTop:"55%" , backgound:'red'}}>
               
                    
                    
                   
                    <div className = "latestnews">
                        {/* <Divider orientation="left">Latest News</Divider> */}
                        <Divider style={{ backgroundColor: 'whitesmoke' , height: 3  }}/>
                        <Latestnews/>
                    </div>
                </div>
                
                <div className = "Aboutus">
                        <PubAbout/>
                    </div>

                 <div className = "latestmarket">
                        <Divider  style={{ backgroundColor: 'whitesmoke' , height: 3  }}/>
                        <Latestmarket/>
                    </div>

                    <div className = "Aboutus">
                        <PubAbout/>
                    </div>

                    <div className = "latestmarket">
                        <Divider  style={{ backgroundColor: 'whitesmoke' , height: 3  }}/>
                        <Latestmarket/>
                    </div>
                
                
                <Footer style={{ textAlign: 'center'  , marginTop:'auto' ,background:'#CEECE8'}}>Ethiostock ©2020 </Footer>
                
            </div>
            
        )
    }
}

export default PublicHomepage;