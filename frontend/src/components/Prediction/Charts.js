import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'


const Charts = (props) => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
       
        setChartData({
            labels:props.tradedate,
            // labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            
            datasets: [
                {
                    fill: false,
                    label: 'opening price',
                    data: props.open,
                    borderColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 2
                    
                }, 
                {
                    fill: false,
                    label: 'closing price',
                    data: props.close,
                    borderColor: [
                        'rgb(176, 90, 163)'
                    ],
                    borderWidth: 2
                }, 
                {
                    fill: false,
                    label: 'change',
                    data: props.change,
                    borderColor: [
                        'rgb(62, 90, 163)'
                    ],
                    borderWidth: 2
                 
                },
                {
                    fill: false,
                    label: 'Total traded',
                    data: props.totalTraded,
                    borderColor: [
                        'rgb(62, 227, 163)'
                    ],
                    borderWidth: 2
                 
                }
            ]
        })
    
    }

 
    useEffect(() => {
        chart()
    }, [])
    return (
        <div>
            
            <div style = {{height: '600px', width: '800px'}}>
                <Line data = {chartData} options = {{
                    responsive: true, 
                    title: {text: 'THICKNESS SCALE', display: true},
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero: true
                                },
                              
                            }
                        ], 
                        xAxes: [
                             {
                                 
                             }
                        ]
                    }
            
                    }}/>

                    
                    
            </div>
            <div id="container">graph</div>
        </div>
    )
}

export default Charts;
