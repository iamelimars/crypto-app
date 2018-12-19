import React from 'react'
import { Line } from 'react-chartjs-2'


const coinChart = (props) => {
    return (
        <div>
            <Line

                data={props.data}
                width={100}
                height={40}
                options={{
                    maintainAspectRatio: true,
                    responsive: true,
                    legend: {
                        display: false
                    },
                    title: {
                        display: false,
                        text: "Time scale"
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'index',
                        intersect: false
                    },
                    scales: {
                        xAxes: [{

                            type: 'time',
                            bounds: 'ticks',
                            distribution: 'series',
                            gridLines: {
                                display: false
                            },
                            time: {
                                displayFormats: {
                                    'millisecond': 'h:mm a',
                                    'second': 'h:mm a',
                                    'minute': 'h:mm a',
                                    'hour': 'h:mm a',
                                    'day': 'h:mm a',
                                    'week': 'h:mm a',
                                    'month': 'h:mm a',
                                    'quarter': 'h:mm a',
                                    'year': 'h:mm a',

                                },
                                unit: 'minute',
                                round: 'minute',
                                parser: 'd h:mm a',
                                tooltipFormat: 'MMM Do h:mm A',

                            },
                            ticks: {
                                source: 'auto',
                                autoSkip: true,
                                maxTicksLimit: 8
                            }
                        }],
                        yAxes: [{
                            display: false,
                            gridLines: {
                                display: false
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Price'
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}

export default coinChart