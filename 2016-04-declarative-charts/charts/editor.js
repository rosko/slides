const React = require('react');
const _ = require('lodash');
const LiveEditor = require('../components/LiveEditor');

const RumbleCharts = require('rumble-charts');
_.forEach(RumbleCharts, (component, key) => {
    global[key] = component;
});


const EXAMPLES = {
    'barchart': require('raw!./barchart.example'),
    'barchart-three-series': require('raw!./barchart-three-series.example'),
    'barchart-colors': require('raw!./barchart-colors.example'),
    'barchart-stacked': require('raw!./barchart-stacked.example'),
    'linechart': require('raw!./linechart.example'),
    'linechart-areas': require('raw!./linechart-areas.example'),
    'radiallinechart': require('raw!./radiallinechart.example'),
    'radiallinechart-areas': require('raw!./radiallinechart-areas.example'),
    'piechart': require('raw!./piechart.example'),
    'piechart-gradient': require('raw!./piechart-gradient.example'),
    'piechart-three-series': require('raw!./piechart-three-series.example'),
    'piechart-fancy': require('raw!./piechart-fancy.example'),
    'two-in-one': require('raw!./two-in-one.example'),
    'complex-three-series': require('raw!./complex-three-series.example'),
    'complex-seriesIndex': require('raw!./complex-seriesIndex.example'),
    'complex-axis': require('raw!./complex-axis.example'),
    'complex-animate': require('raw!./complex-animate.example'),
    'complex-mouse': require('raw!./complex-mouse.example'),
    'cloud': require('raw!./cloud.example')
};

class Editor extends React.Component {
    constructor() {
        super();
        this.state = {example: 'barchart'};
    }

    render() {
        let {codeText} = this.props;
        const {example} = this.state;
        codeText = codeText || EXAMPLES[example];
        return <div>
            <select value={example} onChange={e => this.setState({example: e.target.value})}>
                <optgroup label='BarChart'>
                    <option value='barchart'>Simple</option>
                    <option value='barchart-three-series'>Three series</option>
                    <option value='barchart-colors'>Colors</option>
                    <option value='barchart-stacked'>Stacked</option>
                </optgroup>
                <optgroup label='PieChart'>
                    <option value='piechart'>Simple</option>
                    <option value='piechart-three-series'>Three series</option>
                    <option value='piechart-gradient'>Gradient</option>
                    <option value='piechart-fancy'>Fancy</option>
                </optgroup>
                <optgroup label='LineChart'>
                    <option value='linechart'>Simple</option>
                    <option value='linechart-areas'>Areas</option>
                </optgroup>
                <optgroup label='RadialLineChart'>
                    <option value='radiallinechart'>Simple</option>
                    <option value='radiallinechart-areas'>Areas</option>
                </optgroup>
                <optgroup label='Complex'>
                    <option value='two-in-one'>Two graphs and layers</option>
                    <option value='complex-three-series'>Several graphs</option>
                    <option value='complex-seriesIndex'>Several graphs 2</option>
                    <option value='complex-axis'>Axis</option>
                    <option value='complex-animate'>Animate</option>
                    <option value='complex-mouse'>Mouse events</option>
                    <option value='cloud'>Cloud</option>
                </optgroup>
            </select>
            <LiveEditor codeText={codeText}/>
        </div>;
    }
}

Editor.displayName = 'Editor';

Editor.propTypes = {
    codeText: React.PropTypes.string
};

module.exports = Editor;
