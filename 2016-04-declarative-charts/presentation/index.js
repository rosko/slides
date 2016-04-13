'use strict';

const _ = require('lodash'),
    React = require('react');

const {
    Appear, CodePane, Deck, Fill, Heading, Image, List, ListItem,
    Layout, Slide, Spectacle, Text
} = require('spectacle');

import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const {Chart, Transform, Cloud} = require('rumble-charts');

const IframeExample = require('../components/IframeExample'),
    GoogleCharts = require('../assets/google-charts'),
    HighCharts = require('../assets/highcharts'),
    D3 = require('../assets/d3');

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

    city: require('../assets/city.jpg'),
    kat: require('../assets/kat.png'),
    markdown: require('../assets/markdown.png')
}, url => url.replace('/', '')), {
    d3: require('../assets/d3.svg'),
    logo: require('../assets/rumble-logo.svg')
});

preloader(images);

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
                    <Heading caps>saw</Heading>
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
                    <Heading size={2} fit caps>So, what we have?</Heading>
                </Slide>
                <Slide>
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
                        style={{fontSize:'3vh', height: '70vh'}}
                        lang='javascript'
                        source={require('raw!../assets/google-charts.example')}
                    />
                </Slide>
                <Slide {...defaultSlideProps}>
                    <Image width='100%' src={images.googleLine}/>
                </Slide>
                <Slide>
                    <Heading caps>Highcharts</Heading>
                    <HighCharts />
                </Slide>
                <Slide {...defaultSlideProps}>
                    <CodePane
                        style={{fontSize:'3vh', height: '70vh'}}
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
                        style={{fontSize:'3vh', height: '70vh'}}
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
                    <Text>Usually React + D3 is next:</Text>
                    <CodePane
                        style={{fontSize:'3vh', height: '70vh'}}
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
                        style={{fontSize:'3vh', width: '90vw', maxHeight: '70vh'}}
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
                    <Heading fit caps>Stop...</Heading>
                    <Appear>
                        <Heading fit>Let me google it for you</Heading>
                    </Appear>
                </Slide>
            </Deck>
        </Spectacle>;
    }
}

module.exports = Presentation;

/*
 <Slide transition={['zoom']} bgColor='primary'>
 <Heading size={1} fit caps lineHeight={1} textColor='black'>
 Spectacle
 </Heading>
 <Heading size={1} fit caps>
 A ReactJS Presentation Library
 </Heading>
 <Heading size={1} fit caps textColor='black'>
 Where You Can Write Your Decks In JSX
 </Heading>
 <Link href='https://github.com/FormidableLabs/spectacle'>
 <Text bold caps textColor='tertiary'>View on Github</Text>
 </Link>
 <Text textSize='1.5em' margin='20px 0px 0px' bold>Hit Your Right Arrow To Begin!</Text>
 </Slide>
 <Slide transition={['slide']} bgColor='black'
 notes='You can even put notes on your slide. How awesome is that?'>
 <Image src={images.kat.replace('/', '')} margin='0px auto 40px' height='293px'/>
 <Heading size={2} caps fit textColor='primary' textFont='primary'>
 Wait wut?
 </Heading>
 </Slide>
 <Slide transition={['zoom', 'fade']} bgColor='primary'
 notes='<ul><li>talk about that</li><li>and that</li></ul>'>
 <CodePane
 lang='jsx'
 source={require('raw!../assets/deck.example')}
 margin='20px auto'
 />
 </Slide>
 <Slide transition={['slide']} bgImage={images.city.replace('/', '')} bgDarken={0.75}>
 <Appear fid='1'>
 <Heading size={1} caps fit textColor='primary'>
 Full Width
 </Heading>
 </Appear>
 <Appear fid='2'>
 <Heading size={1} caps fit textColor='tertiary'>
 Adjustable Darkness
 </Heading>
 </Appear>
 <Appear fid='3'>
 <Heading size={1} caps fit textColor='primary'>
 Background Imagery
 </Heading>
 </Appear>
 </Slide>
 <Slide transition={['zoom', 'fade']} bgColor='primary'>
 <Heading caps fit>Flexible Layouts</Heading>
 <Layout>
 <Fill>
 <Heading size={4} caps textColor='secondary' bgColor='white' margin={10}>
 Left
 </Heading>
 </Fill>
 <Fill>
 <Heading size={4} caps textColor='secondary' bgColor='white' margin={10}>
 Right
 </Heading>
 </Fill>
 </Layout>
 </Slide>
 <Slide transition={['slide']} bgColor='black'>
 <BlockQuote>
 <Quote>Wonderfully formatted quotes</Quote>
 <Cite>Ken Wheeler</Cite>
 </BlockQuote>
 </Slide>
 <Slide transition={['spin', 'zoom']} bgColor='tertiary'>
 <Heading caps fit size={1} textColor='primary'>
 Inline Markdown
 </Heading>
 <Markdown>
 {`
 ![Markdown Logo](${images.markdown.replace('/', '')})

 You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
 * Lists too!!!
 * With ~~strikethrough~~ and _italic_
 * And lets not forget **bold**
 `}
 </Markdown>
 </Slide>
 <Slide transition={['slide', 'spin']} bgColor='primary'>
 <Heading caps fit size={1} textColor='tertiary'>
 Smooth
 </Heading>
 <Heading caps fit size={1} textColor='secondary'>
 Combinable Transitions
 </Heading>
 </Slide>
 <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
 <List>
 <Appear><ListItem>Inline style based theme system</ListItem></Appear>
 <Appear><ListItem>Autofit text</ListItem></Appear>
 <Appear><ListItem>Flexbox layout system</ListItem></Appear>
 <Appear><ListItem>React-Router navigation</ListItem></Appear>
 <Appear><ListItem>PDF export</ListItem></Appear>
 <Appear><ListItem>And...</ListItem></Appear>
 </List>
 </Slide>
 <Slide transition={['slide']} bgColor='primary'>
 <Heading size={1} caps fit textColor='tertiary'>
 Your presentations are interactive
 </Heading>
 <Interactive/>
 </Slide>
 <Slide transition={['spin', 'slide']} bgColor='tertiary'>
 <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
 Made with love in Seattle by
 </Heading>
 <Link href='http://www.formidablelabs.com'><Image width='100%' src={images.logo}/></Link>
 </Slide>

 */
