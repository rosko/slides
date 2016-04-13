import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Fit } from 'spectacle';

class IframeExample extends Component {
    constructor() {
        super();
        this.state = {
            width: '100%',
            height: '100%'
        };

        this.setSizes = (width, height) => this.setState({width, height});
    }

    componentDidMount() {
        const node = findDOMNode(this.frame).parentNode.parentNode;
        this.setSizes(node.style.maxWidth, node.style.maxHeight);
    }

    render() {
        const {width, height} = this.state;
        let {src} = this.props;
        if (!src) {
            let {html} = this.props;
            src = `data:text/html,${html}`;
        }
        return <Fit>
            <iframe ref={ref => this.frame = ref} width={width} height={height} frameBorder={0} src={src}/>
        </Fit>;
    }
}

IframeExample.propTypes = {
    width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    html: React.PropTypes.string,
    src: React.PropTypes.string
};

module.exports = IframeExample;
