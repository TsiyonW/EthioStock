const GET_DATA_LIST_QUERY = gql`
 {
    dailyData {
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

const GET_DATA_WEEKLY_LIST_QUERY = gql`
 {
  weeklyData{
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

const GET_PREDICTION_LIST_QUERY = gql`
 {
    prediction{
        stockType
        tradeDate
        stockPrice
      }
  }
 
`