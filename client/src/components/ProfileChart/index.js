// import React from 'react';
// import {Doughnut} from 'react-chartjs-2';
// import Chart from 'chart.js/dist/Chart';
// import ctx from 'chart.js/dist/Chart';
// import data from 'chart.js/dist/Chart';
// import options from 'chart.js/dist/Chart';

// export default function myDoughnutChart() {
//     var myDoughnutChart = new Chart(ctx, {
//         type: 'doughnut',
//         data: [1, 2, 3, 4],
//         // options: options,
//     })
//     return (
//         <div><canvas id="myDoughnutChart"></canvas></div>
//     )
// // }

// function ProfileChart() {
//     let data = {
//         datasets: [{
//             data: [1, 2, 3, 4]
//       }]
//     }
//     return (
        
//         <Doughnut 
//             data={data}
//         />
//     )
// }}

import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class ProfileChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Sick Time', 'Personal Time', 'Hours Worked'],
                datasets: [
                    {
                        label: 'Hours',
                        data: [
                            30,
                            50,
                            35
                        ],
                        backgroundColor:[
                            '#718096',
                            '#13466a',
                            '#525254'
                        ]

                    }
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }

    render(){
        return (
            <div className="chart">
                {/* <Bar
                    data={this.state.chartData}
                    height={300}
                    width={1000}
                    options = {{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Employee Hours',
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition

                        }
                    }}
                /> */}

                <Pie
                    data={this.state.chartData}
                    height={300}
                    width={1000}
                    options = {{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Employee Hours',
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition

                        }
                    }}
                />

            </div>
        )
    }
}

export default ProfileChart;