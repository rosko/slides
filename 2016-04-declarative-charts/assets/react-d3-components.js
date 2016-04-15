const React = require('react');
const {PieChart} = require('react-d3-components');

const data = {
    label: 'somethingA',
    values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
};

function Component() {
    return <PieChart
        data={data}
        width={800}
        height={400}
        tooltipHtml={(x, y) => x + ': ' + y}
        margin={{top: 10, bottom: 10, left: 150, right: 150}}
    />;
}

Component.displayName = 'ReactD3Components';

module.exports = Component;
