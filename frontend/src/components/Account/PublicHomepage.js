import React , {Component} from "react"
import '../../styles/styles.scss'
import Latestmarket from '../News/Latestmarket'
import Latestnews from '../News/Latestnews'
import PubAbout from './PubAbout'
import Pbackground from '../../img/t2.png';
import Header1 from './Header1'
import { Affix, Divider ,Layout} from 'antd';
const {  Footer } = Layout;

class PublicHomepage extends Component{
    state={
        searchField:'',
    }
    

    render(){
        // const headerButtons = this.props.headerButtons;
        return(
             <div>
             

            <div className = "publichomepage-container">


          <Affix offsetTop={0} onChange={affixed => console.log(affixed)  }  >

            <div className="homepage-header">
                    <Header1 handleLogout = {this.logout} headerButtons={false} displaySideBar = {this.displaySideBar}/>
                </div>
            </Affix>


    <div className="container">
            <img src={Pbackground} alt={"Nature"} style={{width:"100%" ,marginTop:-15}}/>
                    <div className="text-block1">
                   
                      
                        <h3 style={{fontSize:40 , fontStyle:'bold' ,fontFamily: 'Helvetica' ,fontWeight: 700,color:"gray" }}>ETHIOSTOCK</h3><br/>
                        <h3 style={{fontSize:25 , fontStyle:'bold' ,fontFamily: 'Helvetica' ,fontWeight: 700,color:"gray"}}>STOCK EXCHANGE ANALYSIS AND PREDICTION</h3><br/>
                        <h3 style={{fontSize:25 ,color:"gray" }}>In 2020 Ethiopia is planning to set up a stock market.</h3><br/>
                        <h3 style={{fontSize:20 ,color:"gray"}}>The stock market is a way for companies to get money by selling parts of their company;</h3>
                        
                   
                        
                        
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

                  
                
                
                <Footer style={{ textAlign: 'center'  , marginTop:'auto' ,background:'#CEECE8'}}>Ethiostock ©2020 </Footer>
                
            </div>
            
        )
    }
}

export default PublicHomepage;