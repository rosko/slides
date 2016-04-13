import React from 'react';
import IframeExample from '../components/IframeExample';

function D3() {
    return <IframeExample html={`<html><head>
<script src="https://d3js.org/d3.v3.min.js"></script>
</head><body>
<script>
    ${require('raw!./d3.example')}
</script>
</body></html>`}/>;
}

D3.displayName = 'D3';

module.exports = D3;
