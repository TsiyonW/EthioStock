import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Charts from './Charts'
// import BarChart from './BarChart';
// import TableData from './Table'
// import { Button } from 'antd';
// import{Query} from '@apollo/client'

// import {GET_DATA_LIST_QUERY} from '../gql/query'



// const GET_DATA_LIST_QUERY = gql`
//  {
//     dailyData {
//      stockType
//      tradeDate
//      symbol
//      warehouse
//      productionYear
//      openingPrice
//      closingPrice
//      high
//      low
//      change
//      percentageChange
//      volume
//     }
//   }
 
// `

// const GET_DATA_WEEKLY_LIST_QUERY = gql`
//  {
//   weeklyData{
//      stockType
//      tradeDate
//      symbol
//      warehouse
//      productionYear
//      openingPrice
//      closingPrice
//      high
//      low
//      change
//      percentageChange
//      volume
//     }
//   }
 
// `
const GET_DATA_MONTHLY_LIST_QUERY = gql`
 {
  monthlyData{
     stockType
     tradeDate
     symbol
     warehouse
     productionYear
     openingPrice
     closingPrice
     high
     low
     change
     percentageChange
     volume
    }
  }
 
`

// export  class Data extends Component {
//     render() {
//         return (
//             <div>
//                 <Query query = {GET_DATA_LIST_QUERY}>
//                 {
//                     ({loading, error, data}) =>{
//                         if(loading) return <div>Loading...</div>
//                         if(error) return <div>Error: {error}</div>
//                         console.log(data)
//                         return <h1>Test</h1>
//                     }
//                 }
//             </Query>
   
//             </div>
//         )
//     }
// }

// export default Data


function Data() {
    const { loading, error, data } = useQuery(GET_DATA_MONTHLY_LIST_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    // console.log(data.dailyData[0])


    const tradedate =[]
    const close = []
    const open = []
    const totalTraded = []
    const change = []
    // const returnData = []

    console.log(tradedate)
    data.monthlyData.forEach(element => {
      change.push(element.change)
      tradedate.push(element.tradeDate)
      let closePrice = parseInt(element.closingPrice.replace(",",""))
      close.push(closePrice)
      let openPrice = parseInt(element.openingPrice.replace(",",""))
      open.push(openPrice)
      let total_traded = closePrice *element.volume
      totalTraded.push(total_traded)
    });

    const tradeDateList = []

    for(let i=0; i < tradedate.length; i++){
      if(tradeDateList.indexOf(tradedate[i]) === -1) {
          tradeDateList.push(tradedate[i]);
      }
  }


    console.log(tradeDateList)
    // console.log(data)
      // data.data.map(({tradeDate, id, volume, high }) => (
      //       <div key={id}>
      //         <p>
      //           {volume}: {high}
      //         </p>

        return (
          <div>
               {/* <Button type="primary"  onClick={activateLasers}>Daily Data</Button>
               <Button type="primary"  onClick={activateLasers}>Weekly Data</Button>
               <Button type="primary"  onClick={activateLasers}>Monthly Data</Button> */}

              <Charts open = {open} close = {close} tradedate = {tradedate} totalTraded = {totalTraded} change = {change}/>
              {/* <BarChart tradedate = {tradeDateList}  totalTraded = {totalTraded}  change = {change} close = {close}/> */}
              {/* <TableData/> */}
          </div>
              
        
        );
}


export default Data