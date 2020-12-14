import React , {Component} from "react"
// import {Link} from 'react-router-dom'
import '../../styles/styles.scss'
import { NavLink } from 'react-router-dom';
import Search from '../Search/SearchBox';
import Latestmarket from '../../components/News/Latestmarket'
import Latestnews from '../../components/News/Latestnews'
import PubAbout from './PubAbout'
import Pbackground from '../../img/i2.jpg';
import { Affix, Divider ,Layout} from 'antd';
import {Query } from '@apollo/client/react/components'
import {SEARCH_BUSINESS} from '../../gql/query/account'
import BusinessSearched from "./ViewBusinessSearched"
const {  Footer } = Layout;

class PublicHomepage extends Component{
    state={
        searchField:'',
    }
    returnSearchResult=(value)=>{
        // console.log("search value", value)
        return(
<div>
<Query query = {SEARCH_BUSINESS} variables={{search:value}}>
                {({loading,error,data})=>{
                    if(loading) return <div>Fetching</div>
                    if(error) return <div>Error: {console.log(error)}</div>
                    if(data.searchBusiness.length ===0){return <div>No stock to fetch</div>}
                    const businessesSearched = data.searchBusiness
                    console.log(businessesSearched)
                    return(
                        <div>
                            {businessesSearched.map(business=><BusinessSearched key = {business.id} businessResult = {business}></BusinessSearched>)}
                        
                        
                        </div>
                    )
                }
                }
            </Query> 
</div>
        )
    }

    render(){
        return(
             <div>
            <div className = "publichomepage-container">

          <Affix offsetTop={0} onChange={affixed => console.log(affixed)  }  >
     
            <ul>
                <li><span className = "header-title">EthioStock</span> </li>
                <li> 
                    <div className = "header-flex-box-search">   
                     <Search placeholder="Search ..." onClick={value => this.returnSearchResult(value)} enterButton  />
                     </div>
                    </li>
                <li> 
                    <ul className="ul-side">    
                            <li><NavLink to='/signup'  activeClassName="active-link">SignUp</NavLink></li>
                            <li><NavLink to='/login'  >LogIn</NavLink></li>
                            
                    </ul> 
                    
                </li>
                
            </ul>
        </Affix>


    <div className="container">
            <img src={Pbackground} alt={"Nature"} style={{width:"100%" ,marginTop:-15}}/>
                    <div className="text-block">
                   
                      
                        <p style={{fontSize:40 , fontStyle:'bold' ,fontFamily: 'Helvetica' ,fontWeight: 700}}>ETHIOSTOCK</p><br/>
                        <p style={{fontSize:25 , fontStyle:'bold' ,fontFamily: 'Helvetica' ,fontWeight: 700}}>STOCK EXCHANGE ANALYSIS AND PREDICTION</p><br/>
                        <p style={{fontSize:25}}>In 2020 Ethiopia is planning to set up a stock market.</p><br/>
                        <p style={{fontSize:20}}>The stock market is a way for companies to get money by selling parts of their company;</p>
                        
                   
                        
                        
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