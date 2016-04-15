'use strict';

const _ = require('lodash'),
    React = require('react');

const {
    Appear, Code, CodePane, Deck, Fill, Heading, Image, Link, List, ListItem,
    Layout, Slide, Spectacle, Text
} = require('spectacle');

import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const {Chart, Transform, Cloud} = require('rumble-charts');

const IframeExample = require('../components/IframeExample'),
    GithubStars = require('../components/GithubStars'),
    GoogleCharts = require('../assets/google-charts'),
    HighCharts = require('../assets/highcharts'),
    D3 = require('../assets/d3');

const D3ReactSquared = require('../assets/d3-react-squared'),
    ReactD3Components = require('../assets/react-d3-components'),
    ReactD3 = require('../assets/react-d3'),
    Victory = require('../assets/victory');

const RumbleCharts1 = require('../charts/01'),
    RumbleCharts2 = require('../charts/02'),
    Editor = require('../charts/editor');

const images = _.assign(_.mapValues({
    title: require('../assets/title-slide.png'),
    excel1: require('../assets/Charts-PC.png'),
    excel2: require('../assets/transport.jpg'),
    excel3: require('../assets/PieChart_Vector_Clipart.png'),
    googleLine: require('../assets/0Demo1.gif'),
    animated1: require('../assets/animated1.gif'),
    animated2: require('../assets/animated2.gif'),
    animated3: require('../assets/animated3.jpg'),
    animated4: require('../assets/animated4.jpg'),
    screenshot1: require('../assets/Screenshot 2016-04-13 03.56.22.png'),
    screenshot2: require('../assets/Screenshot 2016-04-13 03.56.39.png'),
    screenshot3: require('../assets/Screenshot 2016-04-13 03.59.52.png'),
    screenshot4: require('../assets/Screenshot 2016-04-13 04.00.36.png'),
    screenshot5: require('../assets/Screenshot 2016-04-13 04.02.17.png'),
    screenshot6: require('../assets/Screenshot 2016-04-13 04.03.23.png'),
    restaurant: require('../assets/restaurant.jpg'),
    homeKitchen: require('../assets/home-kitchen.jpg'),
    angular: require('../assets/angular.png'),
    react: require('../assets/react.png'),
    marriage: require('../assets/marriage.jpg'),
    surprised: require('../assets/surprised-cat.jpg'),
    superman: require('../assets/superman.jpg'),
    gift: require('../assets/gift.gif'),

    city: require('../assets/city.jpg'),
    kat: require('../assets/kat.png'),
    markdown: require('../assets/markdown.png')
}, url => url.replace('/', '')), {
    d3: require('../assets/d3.svg'),
    logo: require('../assets/rumble-logo.svg')
});

preloader(_.map(images, image => image));

let theme = createTheme({
    primary: '#ffffff',
    secondary: 'black',
    tertiary: 'white',
    quartenary: '#f9c300'
    // primary: '#ff4081'
});
theme['screen']['components'].heading['h1'].color = theme['screen']['colors'].secondary;
theme['screen']['components'].codePane['pre'].maxWidth = '100%';
// theme['screen']['components'].listItem.fontSize = '4rem';

const defaultSlideProps = {
    maxWidth: '95%',
    maxHeight: '100%'
};

const seriesChartLibraries = [{
    data: [
        {label: 'Highcharts', y: 30},
        {label: 'amCharts', y: 13},
        {label: 'Google Charts', y: 31},
        {label: 'ChartJS', y: 15},
        {label: 'TauCharts', y: 8},
        {label: 'FusionCharts', y: 2},
        {label: 'ZingChart', y: 2},
        {label: 'uvCharts', y: 1},
        {label: 'jQuery Sparklines', y: 1},
        {label: 'Ember Charts', y: 2},
        {label: 'Canvas.js', y: 16},
        {label: 'Flot', y: 1},
        {label: 'D3.js', y: 27},
        {label: 'n3-charts', y: 3},
        {label: 'NVD3', y: 3},
        {label: 'Chartist.js', y: 3},
        {label: 'C3.js', y: 14},
        {label: 'Cubism.js', y: 1},
        {label: 'Rickshaw', y: 2}
    ]
}];

class Presentation extends React.Component {
    render() {
        return <Spectacle theme={theme}>
            <Deck transition={['zoom', 'slide']} transitionDuration={500} progress='none'>
                <Slide bgImage={images.title} padding='2em'>
                    <Heading size={2} fit caps>
                        Interactive declarative
                    </Heading>
                    <Heading size={2} fit caps>
                        charts using React + D3
                    </Heading>
                    <Text margin='1em 0 0 0'>Alexey Volkov</Text>
                    <Text margin='1em 0 0 0'>
                        <Link href='https://rosko.github.io/slides/'>
                            https://rosko.github.io/slides/
                        </Link>
                    </Text>
                    <Image width='45%' src={images.logo}/>
                </Slide>
                <Slide bgColor='quartenary'>
                    <Heading size={2} fit caps>
                        <span>Interactive </span>
                        <Appear><span>declarative</span></Appear>
                    </Heading>
                    <Appear><Heading size={2} fit caps>
                        charts
                    </Heading></Appear>
                    <Heading size={2} fit caps>
                        <Appear><span>using </span></Appear>
                        <Appear><span>React </span></Appear>
                        <Appear><span>+ </span></Appear>
                        <Appear><span>D3</span></Appear>
                    </Heading>
                </Slide>
                <Slide {...defaultSlideProps} transition={['fade']}>
                    <Heading caps>Everybody</Heading>
                    <Heading caps>knows about</Heading>
                    <Heading caps>charts</Heading>
                </Slide>
                <Slide {...defaultSlideProps} transition={['fade']}>
                    <Heading caps>Everybody</Heading>
                    <Heading caps>has seen</Heading>
                    <Heading caps>charts</Heading>
                </Slide>
                <Slide {...defaultSlideProps} transition={['fade']}>
                    <Heading caps>Everybody</Heading>
                    <Heading caps>loves</Heading>
                    <Heading caps>charts</Heading>
                </Slide>
                <Slide {...defaultSlideProps} transition={['fade']}>
                    <Heading caps>Everybody</Heading>
                    <Heading caps>wants to draw</Heading>
                    <Heading caps>charts</Heading>
                </Slide>
                <Slide>
                    <Image width='100%' src={images.excel1}/>
                </Slide>
                <Slide>
                    <Image width='70%' src={images.excel2}/>
                </Slide>
                <Slide>
                    <Image width='70%' src={images.excel3}/>
                </Slide>
                <Slide bgColor='quartenary' transition={['slide']}>
                    <Heading size={2} fit caps>Really?!</Heading>
                </Slide>
                <Slide>
                    <Image width='100%' src={images.animated1}/>
                </Slide>
                <Slide>
                    <Image width='100%' src={images.animated2}/>
                </Slide>
                <Slide>
                    <Image width='100%' src={images.animated3}/>
                </Slide>
                <Slide>
                    <Image width='100%' src={images.animated4}/>
                </Slide>
                <Slide bgColor='quartenary' transition={['slide']}>
                    <Heading size={2} fit caps>So, what</Heading>
                    <Heading size={2} fit caps>do we have?</Heading>
                </Slide>
                <Slide id='cloud'>
                    <Chart width={1000} height={700} series={seriesChartLibraries}>
                        <Transform method='transpose'>
                            <Cloud
                                font='Open Sans Condensed'
                                minFontSize={60}
                                maxFontSize={120}
                                padding={2}
                                spiral='rectangular'
                            />
                        </Transform>
                    </Chart>
                </Slide>
                <Slide {...defaultSlideProps} transition={['slide']}>
                    <Image width='100%' src={images.screenshot1}/>
                </Slide>
                <Slide {...defaultSlideProps} transition={['slide']}>
                    <Image width='100%' src={images.screenshot2}/>
                </Slide>
                <Slide {...defaultSlideProps} transition={['slide']}>
                    <Image width='100%' src={images.screenshot3}/>
                </Slide>
                <Slide {...defaultSlideProps} transition={['slide']}>
                    <Image width='100%' src={images.screenshot4}/>
                </Slide>
                <Slide {...defaultSlideProps} transition={['slide']}>
                    <Image width='100%' src={images.screenshot5}/>
                </Slide>
                <Slide {...defaultSlideProps} transition={['slide']}>
                    <Image width='100%' src={images.screenshot6}/>
                </Slide>

                <Slide>
                    <Heading caps>Google Charts</Heading>
                    <GoogleCharts />
                </Slide>
                <Slide {...defaultSlideProps}>
                    <CodePane
                        style={{fontSize:'3vh', lineHeight: 1, width: '90vw', maxHeight: '70vh'}}
                        lang='javascript'
                        source={require('raw!../assets/google-charts.example')}
                    />
                </Slide>
                <Slide>
                    <Heading caps>Highcharts</Heading>
                    <HighCharts />
                </Slide>
                <Slide {...defaultSlideProps}>
                    <CodePane
                        style={{fontSize:'3vh', lineHeight: 1, width: '90vw', maxHeight: '70vh'}}
                        lang='javascript'
                        source={require('raw!../assets/highcharts.example')}
                    />
                </Slide>
                <Slide>
                    <Heading caps>D3.js</Heading>
                    <D3 />
                </Slide>
                <Slide {...defaultSlideProps}>
                    <CodePane
                        style={{fontSize:'3vh', lineHeight: 1, width: '90vw', maxHeight: '70vh'}}
                        lang='javascript'
                        source={require('raw!../assets/d3.example')}
                    />
                </Slide>
                <Slide>
                    <IframeExample html={require('raw!../assets/d3.polarclock.example')}/>
                </Slide>
                <Slide>
                    <IframeExample html={require('raw!../assets/d3.bilevel.example')}/>
                </Slide>

                <Slide bgColor='quartenary' transition={['zoom', 'fade']}>
                    <Layout>
                        <Fill>
                            <Appear>
                                <Heading size={4} caps textColor='secondary' bgColor='primary' margin={10}>
                                    Ready-to-use solution
                                </Heading>
                            </Appear>
                        </Fill>
                        <Fill>
                            <Appear>
                                <Heading size={4} caps textColor='secondary' bgColor='primary' margin={10}>
                                    Flexible<br /> kit
                                </Heading>
                            </Appear>
                        </Fill>
                    </Layout>
                    <Layout>
                        <Fill>
                            <Appear>
                                <div>
                                    <Text>Restaurant</Text>
                                    <Image width='90%' src={images.restaurant}/>
                                </div>
                            </Appear>
                            <Appear>
                                <List>
                                    <ListItem bold>easy to start</ListItem>
                                    <ListItem>hard to customize</ListItem>
                                </List>
                            </Appear>
                        </Fill>
                        <Fill>
                            <Appear>
                                <div>
                                    <Text>Home kitchen</Text>
                                    <Image width='90%' src={images.homeKitchen}/>
                                </div>
                            </Appear>
                            <Appear>
                                <List>
                                    <ListItem bold>very flexible </ListItem>
                                    <ListItem>steep learning curve</ListItem>
                                </List>
                            </Appear>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide transition={['zoom', 'fade']}>
                    <Layout>
                        <Fill>
                            <Appear>
                                <Image width='90%' src={images.angular}/>
                            </Appear>
                        </Fill>
                        <Fill>
                            <Heading size={1} caps>vs</Heading>
                        </Fill>
                        <Fill>
                            <Appear>
                                <Image width='100%' src={images.react}/>
                            </Appear>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide {...defaultSlideProps} bgColor='quartenary' transition={['zoom', 'fade']}>
                    <Heading fit caps>Let's find a balance</Heading>
                    <List>
                        <Appear><ListItem><Heading size={4}>
                            Save flexibility
                        </Heading></ListItem></Appear>
                        <Appear><ListItem><Heading size={4}>
                            Reduce the entry threshold
                        </Heading></ListItem></Appear>
                        <Appear><ListItem><Heading size={4}>
                            Don't invent a wheel
                        </Heading></ListItem></Appear>
                        <Appear><ListItem><Heading size={4}>
                            Use component-based approach
                        </Heading></ListItem></Appear>
                    </List>
                </Slide>
                <Slide {...defaultSlideProps}>
                    <Heading caps>Remark #1</Heading>
                    <Text>Usually React + D3 means:</Text>
                    <CodePane
                        style={{fontSize:'3vh', lineHeight: 1, width: '90vw', maxHeight: '70vh'}}
                        lang='jsx'
                        source={require('raw!../assets/react-and-d3-1.example')}
                    />
                </Slide>
                <Slide {...defaultSlideProps}>
                    <Heading caps>Remark #2</Heading>
                    <Text>Simply speaking D3 consists of:</Text>
                    <Layout>
                        <Appear>
                            <Fill>
                                <Heading size={4} caps bgColor='secondary' textColor='primary' margin={10}>
                                    DOM<br /> functions
                                </Heading>
                                <List>
                                    <ListItem>Selectors</ListItem>
                                    <ListItem>Operators</ListItem>
                                </List>
                            </Fill>
                        </Appear>
                        <Appear>
                            <Fill>
                                <Heading size={4} caps bgColor='secondary' textColor='primary' margin={10}>
                                    Math<br /> functions
                                </Heading>
                                <List>
                                    <ListItem>Scales</ListItem>
                                    <ListItem>Axis</ListItem>
                                    <ListItem>Layouts</ListItem>
                                    <ListItem>Interpolations</ListItem>
                                </List>
                            </Fill>
                        </Appear>
                    </Layout>
                </Slide>
                <Slide {...defaultSlideProps}>
                    <Heading caps>Remark #3</Heading>
                    <Text>Let's take a look under the hood</Text>
                    <CodePane
                        style={{fontSize:'3vh', lineHeight: 1, width: '90vw', maxHeight: '70vh'}}
                        lang='html'
                        source={require('raw!../assets/d3-output.example')}
                    />
                </Slide>
                <Slide>
                    <Heading caps fit>Resolved</Heading>
                    <Text>Let's use</Text>
                    <Layout>
                        <Appear>
                            <Fill>
                                <Image width='50%' src={images.react}/>
                                <Heading size={4} caps bgColor='secondary' textColor='primary' margin={10}>
                                    for components and DOM
                                </Heading>
                            </Fill>
                        </Appear>
                        <Appear>
                            <Fill>
                                <Image width='46.7%' src={images.d3}/>
                                <Heading size={4} caps bgColor='secondary' textColor='primary' margin={10}>
                                    for calculations
                                </Heading>
                            </Fill>
                        </Appear>
                    </Layout>
                </Slide>
                <Slide bgColor='quartenary' transition={['zoom', 'fade']}>
                    <Heading fit caps>Match made in heaven</Heading>
                    <Image width='90%' src={images.marriage}/>
                </Slide>
                <Slide bgColor='quartenary' transition={['zoom', 'fade']}>
                    <Heading fit caps>Wait...</Heading>
                    <Appear>
                        <Heading fit>Let me google it for you</Heading>
                    </Appear>
                </Slide>

                <Slide bgColor='quartenary' transition={['zoom', 'fade']}>
                    <Heading fit caps>1. React wraps D3</Heading>
                    <CodePane
                        style={{fontSize:'3vh', width: '90vw', maxHeight: '60vh'}}
                        lang='jsx'
                        source={require('raw!../assets/react-wraps-d3.example')}
                    />
                </Slide>
                <Slide {...defaultSlideProps}>
                    <Heading>d3-react-squared</Heading>
                    <GithubStars repo='bgrsquared/d3-react-squared'/>
                    <CodePane
                        style={{fontSize:'3vh', lineHeight: 1, width: '90vw', maxHeight: '60vh'}}
                        lang='jsx'
                        source={require('raw!../assets/d3-react-squared.example')}
                    />
                </Slide>
                <Slide {...defaultSlideProps}>
                    <Heading>d3-react-squared</Heading>
                    <div style={{width: '40vw', height: '60vh'}}>
                        <D3ReactSquared />
                    </div>
                </Slide>
                <Slide {...defaultSlideProps}>
                    <Heading>d3act</Heading>
                    <GithubStars repo='AnSavvides/d3act'/>
                    <CodePane
                        style={{fontSize:'3vh', lineHeight: 1, width: '90vw', maxHeight: '60vh'}}
                        lang='jsx'
                        source={require('raw!../assets/d3act-1.example')}
                    />
                </Slide>
                <Slide {...defaultSlideProps}>
                    <Heading>d3act</Heading>
                    <CodePane
                        style={{fontSize:'3vh', lineHeight: 1, width: '90vw', maxHeight: '60vh'}}
                        lang='jsx'
                        source={require('raw!../assets/d3act-2.example')}
                    />
                </Slide>
                <Slide>
                    <List>
                        <Appear><ListItem><Heading size={4}>
                            react wraps d3
                        </Heading></ListItem></Appear>
                        <Appear><ListItem><Heading size={4}>
                            d3 builds DOM
                        </Heading></ListItem></Appear>
                        <Appear><ListItem><Heading size={4}>
                            handy for legacy code using d3
                        </Heading></ListItem></Appear>
                        <Appear><ListItem><Heading size={4} textColor='red'>
                            not composable
                        </Heading></ListItem></Appear>
                    </List>
                </Slide>

                <Slide bgColor='quartenary' transition={['zoom', 'fade']}>
                    <Heading fit caps>2. D3 makes virtual DOM</Heading>
                    <Appear><Image width='70%' src={images.surprised}/></Appear>
                </Slide>
                <Slide {...defaultSlideProps}>
                    <Heading>react-faux-dom</Heading>
                    <GithubStars repo='Olical/react-faux-dom'/>
                    <CodePane
                        style={{fontSize:'3vh', lineHeight: 1, width: '90vw', maxHeight: '60vh'}}
                        lang='jsx'
                        source={require('raw!../assets/d3-react-sparkline.example')}
                    />
                </Slide>
                <Slide>
                    <List>
                        <Appear><ListItem><Heading size={4}>
                            d3 makes virtual DOM
                        </Heading></ListItem></Appear>
                        <Appear><ListItem><Heading size={4}>
                            react builds real DOM
                        </Heading></ListItem></Appear>
                        <Appear><ListItem><Heading size={4}>
                            very promising for legacy code using d3
                        </Heading></ListItem></Appear>
                        <Appear><ListItem><Heading size={4} textColor='red'>
                            not composable
                        </Heading></ListItem></Appear>
                    </List>
                </Slide>

                <Slide bgColor='quartenary' transition={['zoom', 'fade']}>
                    <Heading fit caps>3. The true way</Heading>
                    <Image width='50%' src={images.superman}/>
                </Slide>
                <Slide {...defaultSlideProps}>
                    <Heading fit>react-d3-components</Heading>
                    <GithubStars repo='codesuki/react-d3-components'/>
                    <CodePane
                        style={{fontSize:'3vh', lineHeight: 1, width: '90vw', maxHeight: '60vh'}}
                        lang='jsx'
                        source={require('raw!../assets/react-d3-components.example')}
                    />
                </Slide>
                <Slide {...defaultSlideProps}>
                    <Heading fit>react-d3-components</Heading>
                    <ReactD3Components />
                </Slide>
                <Slide {...defaultSlideProps}>
                    <Heading fit>react-d3-components &rarr; PieChart</Heading>
                    <CodePane
                        style={{fontSize:'3vh', lineHeight: 1, width: '90vw', maxHeight: '60vh'}}
                        lang='jsx'
                        source={require('raw!../assets/react-d3-components-2.example')}
                    />
                </Slide>

                <Slide {...defaultSlideProps}>
                    <Heading>react-d3 / rd3</Heading>
                    <Layout>
                        <Fill>
                            <GithubStars repo='esbullington/react-d3'/>
                        </Fill>
                        <Fill>
                            <GithubStars repo='yang-wei/rd3'/>
                        </Fill>
                    </Layout>
                    <CodePane
                        style={{fontSize:'3vh', lineHeight: 1, width: '90vw', maxHeight: '60vh'}}
                        lang='jsx'
                        source={require('raw!../assets/react-d3.example')}
                    />
                </Slide>
                <Slide {...defaultSlideProps}>
                    <Heading>react-d3 / rd3</Heading>
                    <ReactD3 />
                </Slide>
                <Slide {...defaultSlideProps}>
                    <Heading>victory</Heading>
                    <GithubStars repo='FormidableLabs/victory'/>
                    <CodePane
                        style={{fontSize:'3vh', lineHeight: 1, width: '90vw', maxHeight: '60vh'}}
                        lang='jsx'
                        source={require('raw!../assets/victory.example')}
                    />
                </Slide>
                <Slide {...defaultSlideProps}>
                    <Heading>victory</Heading>
                    <Victory />
                </Slide>

                <Slide bgColor='quartenary' transition={['zoom', 'fade']}>
                    <Heading fit>Each one could be better at</Heading>
                    <List>
                        <Appear><ListItem><Heading size={4}>
                            composition
                        </Heading></ListItem></Appear>
                        <Appear><ListItem><Heading size={4}>
                            configuration
                        </Heading></ListItem></Appear>
                    </List>
                </Slide>

                <Slide transition={['fade']}>
                    <Image src={images.gift} width='70%'/>
                </Slide>

                <Slide {...defaultSlideProps} transition={['fade']}>
                    <Heading>rumble-charts</Heading>
                    <Layout>
                        <Fill>
                            <CodePane
                                style={{fontSize:'3vh', lineHeight: 1, maxHeight: '60vh'}}
                                lang='jsx'
                                source={require('raw!../charts/01.example')}
                            />
                        </Fill>
                        <Fill>
                            <RumbleCharts1 />
                        </Fill>
                    </Layout>
                </Slide>
                <Slide {...defaultSlideProps} transition={['fade']}>
                    <Heading>rumble-charts</Heading>
                    <Layout>
                        <Fill>
                            <CodePane
                                style={{fontSize:'3vh', lineHeight: 1, maxHeight: '60vh'}}
                                lang='jsx'
                                source={require('raw!../charts/02.example')}
                            />
                        </Fill>
                        <Fill>
                            <RumbleCharts2 />
                        </Fill>
                    </Layout>
                </Slide >
                <Slide {...defaultSlideProps} id='liveedit'>
                    <Editor />
                </Slide>

                <Slide bgColor='quartenary' transition={['fade']}>
                    <Heading><Code>npm install rumble-charts</Code></Heading>
                    <Heading size={2} fit>https://rosko.github.io/slides/</Heading>
                    <Heading fit textColor='primary'>Questions!</Heading>
                </Slide>
                <Slide id='last' bgColor='quartenary' transition={['fade']}>
                    <Heading><Code>npm install --save rumble-charts</Code></Heading>
                    <Heading size={2} fit>https://rosko.github.io/slides/</Heading>
                    <Heading fit textColor='primary'>Questions!</Heading>
                </Slide>

            </Deck>
        </Spectacle>;
    }
}

module.exports = Presentation;
