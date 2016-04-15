var React = require('react');
const _ = require('lodash');

var CodeMirrorEditor = require('./CodeMirrorEditor');
var ComponentPreview = require('./LiveCompile');

const {
    Appear, CodePane, Deck, Fill, Fit, Heading, Image, List, ListItem,
    Layout, Slide, Spectacle, Text
} = require('spectacle');


var LiveEditor = React.createClass({
    propTypes: {
        codeText: React.PropTypes.string.isRequired
    },

    getInitialState: function () {
        return {
            code: this.props.codeText
        };
    },

    handleCodeChange: function (code) {
        this.setState({code});
    },

    componentWillReceiveProps(nextProps) {
        if (nextProps.codeText !== this.props.codeText) {
            this.setState({code: nextProps.codeText});
        }
    },

    render: function () {
        return <Layout>
            <Fill>
                <CodeMirrorEditor
                    key='jsx'
                    onChange={_.debounce(this.handleCodeChange, 250)}
                    codeText={this.props.codeText}
                    style={{width: '45vw', height: '70vh', textAlign:'left', fontSize: '0.8rem'}}
                />
            </Fill>
            <Fill>
                <ComponentPreview code={this.state.code}/>
            </Fill>
        </Layout>;
    }
});

module.exports = LiveEditor;
