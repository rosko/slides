const React = require('react');
const {Chart, Transform, Bars} = require('rumble-charts');

const series = [{
    data: [1, 2, 4]
}];

function Component() {
    return <Chart width={400} height={400} series={series}>
        <Transform method={['transpose', 'stack']}>
            <Bars combined={true} barWidth='50%'/>
        </Transform>
    </Chart>;
}

Component.displayName = 'RumbleCharts2';

module.exports = Component;
