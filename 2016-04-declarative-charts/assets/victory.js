const React = require('react');
const {VictoryPie} = require('victory');

const pieData = [
    {label: 'Margarita', value: 20.0},
    {label: 'John', value: 55.0},
    {label: 'Tim', value: 25.0}
];

function Component() {
    return <VictoryPie
        padAngle={3}
        style={{
            labels: {
                fill: 'white',
                fontSize: 12,
                fontWeight: 'bold'
            }
        }}
        data={[
            {x: '<5', y: 6279},
            {x: '5-13', y: 9182},
            {x: '14-17', y: 5511},
            {x: '18-24', y: 7164},
            {x: '25-44', y: 6716},
            {x: '45-64', y: 4263},
            {x: '≥65', y: 7502}
        ]}
        innerRadius={110}
    />;
}

Component.displayName = 'Victory';

module.exports = Component;
