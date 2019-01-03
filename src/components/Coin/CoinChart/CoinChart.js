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
                                    'millisecond': 'dd h:mm a',
                                    'second': 'dd h:mm a',
                                    'minute': 'dd h:mm a',
                                    'hour': 'dd h:mm a',
                                    'day': 'dd h:mm a',
                                    'week': 'dd h:mm a',
                                    'month': 'dd h:mm a',
                                    'quarter': 'dd h:mm a',
                                    'year': 'dd h:mm a',

                                },
                                unit: 'minute',
                                round: 'minute',
                                // parser: 'd h:mm a',
                                parser: 'X',
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