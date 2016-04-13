import React from 'react';
import IframeExample from '../components/IframeExample';

function Highcharts() {
    return <IframeExample html={`<html><head>
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.9.1.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
</head><body>
<div id="container" style="width: 100vw; height: 100vh; margin: 0 auto"></div>
<script>
    ${require('raw!./highcharts.example')}
</script>
</body></html>`}/>;
}

Highcharts.displayName = 'Highcharts';

module.exports = Highcharts;
