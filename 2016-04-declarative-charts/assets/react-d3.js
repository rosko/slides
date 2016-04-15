const React = require('react');
const {PieChart} = require('react-d3');

const pieData = [
    {label: 'Margarita', value: 20.0},
    {label: 'John', value: 55.0},
    {label: 'Tim', value: 25.0 }
];

function Component() {
    return <PieChart
        data={pieData}
        width={600}
        height={500}
        radius={175}
        innerRadius={20}
        sectorBorderColor='white'
    />;
}

Component.displayName = 'ReactD3';

module.exports = Component;
