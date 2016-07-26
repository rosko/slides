'use strict';

const _ = require('lodash'),
    React = require('react');

const {
    Appear, BlockQuote, Cite, Code, CodePane, Deck, Fill, Heading, Image, Link, List, ListItem,
    Layout, Quote, Slide, Spectacle, Text
} = require('spectacle');

import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = _.assign(_.mapValues({}, url => url.replace('/', '')), {
    chrome: require('../assets/Google_Chrome_icon_(2011).svg'),
    firefox: require('../assets/Mozilla_Firefox_logo_2013.svg')
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

class Presentation extends React.Component {
    render() {
        return <Spectacle theme={theme}>
            <Deck transition={['zoom', 'slide']} transitionDuration={500}>
                <Slide transition={['fade']} bgColor='quartenary'>
                    <Heading fit caps>Hidden</Heading>
                    <Heading fit caps>capabilities</Heading>
                    <Heading fit caps>of well-known things</Heading>
                </Slide>
                <Slide transition={['fade']} bgColor='quartenary'>
                    <Heading fit>Alexey Volkov</Heading>
                    <Heading fit>Tech Lead, Rumble, Israel</Heading>
                    <Heading size={4}>Twitter: @roskoalexey</Heading>
                    <Heading size={4}>Github: rosko</Heading>
                </Slide>
                <Slide>
                    <Appear>
                        <div>
                            <Heading fit>JSON.stringify</Heading>
                            <Heading fit>(value[, function(key, value)[, spaces]])</Heading>
                        </div>
                    </Appear>
                    <Appear>
                        <div>
                            <Heading fit>JSON.parse&nbsp;&nbsp;&nbsp;&nbsp;</Heading>
                            <Heading fit>(string[, function(key, value)])</Heading>
                        </div>
                    </Appear>
                </Slide>
                <Slide>
                    <Appear><Heading fit>let timer = setTimeout(code, delay)</Heading></Appear>
                    <Appear><Heading fit>let timer = setInterval(code, delay)</Heading></Appear>
                    <Appear><Heading fit>let timer = setTimeout(code, delay[, param1, param2, ...])</Heading></Appear>
                    <Appear><Heading fit>clearTimeout|clearInterval(timer)</Heading></Appear>
                </Slide>
                <Slide>
                    <Heading fit>Do you really now</Heading>
                    <Heading fit caps>event loop?</Heading>
                    <Link
                        href='http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D'>
                        <Heading fit textColor='quartenary'>latentflip.com/loupe</Heading>
                    </Link>
                </Slide>
                <Slide>
                    <Heading fit>console.<span style={{color: '#f9c300'}}>&hellip;</span></Heading>
                </Slide>
                <Slide>
                    <Heading textColor='quartenary'>console</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>log(any[, any])</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>info(any[, any])</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>warn(any[, any])</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>error(any[, any])</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>trace()</Heading>
                </Slide>
                <Slide>
                    <Heading textColor='quartenary'>console</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>dir(object)</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>table(data[, columns])</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>count([text])</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>clear()</Heading>
                </Slide>
                <Slide>
                    <Heading textColor='quartenary'>console</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>group() </Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>groupEnd()</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>time(label) </Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>timeEnd(label)</Heading>
                </Slide>
                <Slide>
                    <Heading textColor='quartenary'>console</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>memory() <img src={images.chrome} alt='Chrome' style={{height:'0.6em'}} /></Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>profile(name) <img src={images.firefox} alt='Firefox' style={{height:'0.6em'}} /></Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>profileEnd(name) <img src={images.firefox} alt='Firefox' style={{height:'0.6em'}} /></Heading>
                </Slide>
                <Slide>
                    <Heading fit textColor='quartenary'>window.performance.</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>timing</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>getEntries()</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>mark()</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>measure()</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>now()</Heading>
                </Slide>
                <Slide>
                    <Heading fit>window.chrome.loadTimes()</Heading>
                </Slide>
                <Slide>
                    <Heading>new Number()</Heading>
                    <Appear><Heading>Number()</Heading></Appear>
                    <Appear><Heading>parseInt()</Heading></Appear>
                    <Appear><Heading>parseFloat()</Heading></Appear>
                    <Appear><Heading>+''</Heading></Appear>
                </Slide>
                <Slide>
                    <Heading textColor='quartenary'>Number.</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>isInteger()</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>toPrecision()</Heading>
                </Slide>
                <Slide>
                    <Heading>new String()</Heading>
                    <Appear><Heading>String()</Heading></Appear>
                    <Appear><Heading>.toString()</Heading></Appear>
                    <Appear><Heading>JSON.stringify()</Heading></Appear>
                    <Appear><Heading>''+</Heading></Appear>
                </Slide>
                <Slide>
                    <Heading textColor='quartenary'>String.</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>anchor(name)</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>link(href)</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>bold()</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>sup()</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>sub()</Heading>
                    <Heading size={2}><span style={{color: '#f9c300'}}>.</span>startsWith(string)</Heading>
                </Slide>
                <Slide>
                    <Heading fit>Math.min.apply(null, [1, 2, 3])</Heading>
                    <Appear><Heading fit>Math.max.apply(null, [1, 2, 3])</Heading></Appear>
                    <Appear><Heading fit>[1,2,3].reduce((sum, value) => sum + value, 0)</Heading></Appear>
                    <Appear><Heading fit>eval([1,2,3].toString().split(',').join('+'))</Heading></Appear>
                </Slide>
                <Slide>
                    <Heading fit>+new Date()</Heading>
                    <Heading fit>Date.now()</Heading>
                </Slide>
                <Slide>
                    <Heading size={2}>{'var f1 = function() { }'}</Heading>
                    <Appear><Heading size={2}>{'function f2() { }'}</Heading></Appear>
                    <Appear><Heading size={2}>{'var f3 = function f4() { }'}</Heading></Appear>
                    <Appear><Heading size={2}>var f4 = new Function()</Heading></Appear>
                </Slide>
                <Slide>
                    <Heading textColor='quartenary'>{'(function() { ... }).'}</Heading>
                    <Appear><Heading size={2}><span style={{color: '#f9c300'}}>.</span>bind()</Heading></Appear>
                    <Appear><Heading size={2}><span style={{color: '#f9c300'}}>.</span>apply()</Heading></Appear>
                    <Appear><Heading size={2}><span style={{color: '#f9c300'}}>.</span>call()</Heading></Appear>
                </Slide>
                <Slide>
                    <Heading textColor='quartenary'>{'(function() { ... }).'}</Heading>
                    <Appear><Heading size={2}><span style={{color: '#f9c300'}}>.</span>name</Heading></Appear>
                    <Appear><Heading size={2}><span style={{color: '#f9c300'}}>.</span>length</Heading></Appear>
                </Slide>
                <Slide>
                    <Heading textColor='quartenary'>Object.</Heading>
                    <Appear><Heading size={2}><span style={{color: '#f9c300'}}>.</span>preventExtensions()</Heading></Appear>
                    <Appear><Heading size={2}><span style={{color: '#f9c300'}}>.</span>seal()</Heading></Appear>
                    <Appear><Heading size={2}><span style={{color: '#f9c300'}}>.</span>freeze()</Heading></Appear>
                </Slide>
                <Slide>
                    <Heading textColor='quartenary'>Object.</Heading>
                    <Appear><Heading size={2}><span style={{color: '#f9c300'}}>.</span>isExtensible()</Heading></Appear>
                    <Appear><Heading size={2}><span style={{color: '#f9c300'}}>.</span>isSealed()</Heading></Appear>
                    <Appear><Heading size={2}><span style={{color: '#f9c300'}}>.</span>isFrozen()</Heading></Appear>
                </Slide>
                <Slide transition={['fade']} bgColor='quartenary'>
                    <Heading fit caps>Thank you,</Heading>
                    <Heading fit caps>Captain Obvious</Heading>
                    <Heading fit>Questions?</Heading>
                </Slide>
            </Deck>
        </Spectacle>;
    }
}

module.exports = Presentation;
