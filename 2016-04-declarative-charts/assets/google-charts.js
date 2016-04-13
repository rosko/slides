import React from 'react';
import IframeExample from '../components/IframeExample';

function GoogleCharts() {
    return <IframeExample html={`<html><head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
</head><body>
<div id="piechart" style="width: 100vw; height: 100vh;"></div>
<script>
    ${require('raw!./google-charts.example')}
</script>
</body></html>`}/>;
}

GoogleCharts.displayName = 'GoogleCharts';

module.exports = GoogleCharts;
