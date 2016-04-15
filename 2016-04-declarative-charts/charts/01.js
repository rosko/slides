const React = require('react');
const {Chart, Transform, Pies} = require('rumble-charts');

const series = [{
    data: [1, 2, 4]
}];

function Component() {
    return <Chart width={400} height={400} series={series}>
        <Transform method={['transpose', 'stack']}>
            <Pies combined={true} innerRadius={100}/>
        </Transform>
    </Chart >;
}

Component.displayName = 'RumbleCharts1';

module.exports = Component;
