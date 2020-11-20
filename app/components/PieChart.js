import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

class PieChartWithCenteredLabels extends React.PureComponent {

    render() {

        const data = [
            {
                key: 1,
                amount: 50,
                svg: { fill: '#F70B5E' }
            },
            {
                key: 2,
                amount: 50,
                svg: { fill: '#F70B5E' }
            },
            {
                key: 3,
                amount: 40,
                svg: { fill: '#F70B5E' }
            }
        ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={24}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {data.amount}
                    </Text>
                )
            })
        }

        return (
            <PieChart
                style={{ height: 360, width: 360 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'70%'}
            >
                <Labels/>
            </PieChart>
        )
    }

}

export default PieChartWithCenteredLabels;