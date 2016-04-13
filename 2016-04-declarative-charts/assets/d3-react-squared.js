const React = require('react');
const Chart = require('d3-react-squared');
const d3 = require('d3');

function d3ReactSquared() {
    return <Chart
        chartType='pie'
        data={[
            {'id':0,'value':17},{'id':1,'value':66},{'id':2,'value':95},
            {'id':3,'value':9},{'id':4,'value':17},{'id':5,'value':53},
            {'id':6,'value':28},{'id':7,'value':42},{'id':8,'value':30}
        ]}
        paddingBottom='100%'
        params={{
            colorArray: d3.scale.category20().range(),
            colorType: 'category',
            cornerRadius: 20,
            innerRadius: 100
        }}
    />;
}

d3ReactSquared.displayName = 'd3ReactSquared';

module.exports = d3ReactSquared;
