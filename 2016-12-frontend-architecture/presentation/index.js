// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Fit,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {
    title: require('../assets/title-slide.png'),
    logo: require('../assets/rumble-logo.svg'),
    thanks: require('../assets/thank-you.jpg'),
    domino: require('../assets/domino.gif'),
    brain: require('../assets/small-brain.jpg'),
    busy: require('../assets/busy.jpg'),
    elephant: require('../assets/elephant.jpg'),
    vitamin: require('../assets/vitamin.jpg'),
    iss: require('../assets/iss.jpg'),
};

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


class Block extends React.Component {
    render() {
        const {children, borderColor = 'lightblue', style = {}, label, ...props} = this.props;
        return <div
            {...props}
            style={{border: '0.1em solid ' + borderColor, margin: '0.5em', ...style}}
            data-label={label}>
            {children}
        </div>;
    }
}

Block.propTypes = {
    children: React.PropTypes.any,
    borderColor: React.PropTypes.string,
    label: React.PropTypes.string,
    style: React.PropTypes.object
};
Block.defaultProps = {
    borderColor: 'lightblue',
    style: {}
};


const PageBlock = ({title}) => {
    return <Block borderColor='violet'>
        Page:
        <Heading size={5}>{title}</Heading>
    </Block>;
};
PageBlock.propTypes = {
    title: React.PropTypes.string.isRequired
};

const verticalBlockProps = {
    style: {
        whiteSpace: 'nowrap',
        writingMode: 'vertical-lr',
        transform: 'rotate(180deg)',
        padding: '0.5em 0',
        margin: 0
    }
};

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={['zoom', 'slide']} transitionDuration={500} progress='none'>
                    <Slide bgImage={images.title} padding='2em'>
                        <Heading size={2} caps>
                            A few words about
                        </Heading>
                        <Heading size={2} fit caps>
                            the architecture
                        </Heading>
                        <Heading size={4} margin='1em 0 0 0'>
                            <Link href='http://bit.ly/fwd16-arch'>
                                bit.ly/fwd16-arch
                            </Link>
                        </Heading>
                    </Slide>
                    <Slide>
                        <Heading textColor='quartenary'>Yo, who are you?</Heading>
                        <Heading size={2} margin='0.5em 0 0 0'>Alexey Volkov</Heading>
                        <Image width='45%' src={images.logo}/>
                        <Heading size={4} margin='0.5em 0 0 0'>
                            <Link href='http://github.com/rosko'>
                                github.com/rosko
                            </Link>
                        </Heading>
                        <Heading size={4} margin='0.25em 0 0 0'>
                            <Link href='http://twitter.com/roskoalexey'>
                                twitter.com/roskoalexey
                            </Link>
                        </Heading>
                    </Slide>
                    <Slide bgColor='quartenary'>
                        <Heading size={2} fit caps>
                            <Appear><span>Make </span></Appear>
                            <Appear><span>a convenient</span></Appear>
                        </Heading>
                        <Appear><Heading size={2} fit caps>
                            product
                        </Heading></Appear>
                        <Appear><Heading size={2} fit caps>
                            without bugs
                        </Heading></Appear>
                        <Heading size={2} fit caps>
                            <Appear><span>which may develop</span></Appear>
                            <Appear><span> by your team </span></Appear>
                        </Heading>
                    </Slide>
                    <Slide transition={['fade']}>
                        <Heading caps>In a nutshell</Heading>
                        <List>
                            <ListItem>quality code</ListItem>
                            <ListItem>thought-out architecture</ListItem>
                            <Text>&nbsp;</Text>
                        </List>
                    </Slide>
                    <Slide transition={['']}>
                        <Heading caps>In a nutshell</Heading>
                        <List>
                            <ListItem>quality code</ListItem>
                            <ListItem style={{textDecoration: 'line-through'}}>thought-out architecture</ListItem>
                            <ListItem>well thought-out architecture</ListItem>
                        </List>
                    </Slide>
                    <Slide transition={['']} style={{
                        background: `url(${images.thanks}) no-repeat 100% 50%/40%`,
                    }}>
                        <Heading caps>In a nutshell</Heading>
                        <List>
                            <ListItem>quality code</ListItem>
                            <ListItem style={{textDecoration: 'line-through'}}>thought-out architecture</ListItem>
                            <ListItem>well thought-out architecture</ListItem>
                        </List>
                    </Slide>
                    <Slide>
                        <Heading fit>Issues: weak architecture</Heading>
                        <List>
                            <Appear><ListItem><Heading size={4}>
                                Poor modularity and extensibility
                            </Heading></ListItem></Appear>
                            <Appear><ListItem><Heading size={4}>
                                Bad testing
                            </Heading></ListItem></Appear>
                            <Appear><ListItem><Heading size={4}>
                                Spaghetti-code
                            </Heading></ListItem></Appear>
                            <Appear><ListItem><Heading size={4}>
                                Rubik's Cube effect
                            </Heading></ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide>
                        <Heading fit>Issue: over-engineering</Heading>
                        <List>
                            <Appear><ListItem><Heading size={4}>
                                Infinity layers of abstraction
                            </Heading></ListItem></Appear>
                            <Appear><ListItem><Heading size={4}>
                                Dogmatic usage of patterns
                            </Heading></ListItem></Appear>
                            <Appear><ListItem><Heading size={4}>
                                <span>Holy Grail</span>
                                <Appear><span> (aka Silver Bullet)</span></Appear>
                            </Heading></ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide>
                        <Image width='100%' src={images.domino}/>
                    </Slide>
                    <Slide>
                        <Image width='100%' src={images.brain}/>
                    </Slide>
                    <Slide bgColor='quartenary'>
                        <Heading fit caps>Good developer</Heading>
                        <Heading fit caps>lazy developer</Heading>
                        <List>
                            <Appear><ListItem>
                                Good programmers spend much of the other 90% thinking, researching
                            </ListItem></Appear>
                            <Appear><ListItem>
                                Bad programmers spend much of that 90% debugging code by randomly making changes and
                                seeing if they work
                            </ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide bgColor='quartenary'>
                        <Heading fit caps>Think about the future</Heading>
                        <Appear><Image width='100%' src={images.busy}/></Appear>
                    </Slide>
                    <Slide bgColor='quartenary'>
                        <Heading fit caps>Divide and conquer</Heading>
                        <Appear><Image width='90%' src={images.elephant}/></Appear>
                    </Slide>
                    <Slide bgColor='quartenary'>
                        <Heading fit caps>Keep wise balance</Heading>
                    </Slide>
                    <Slide>
                        <Heading fit caps>Design patterns</Heading>
                        <Image width='90%' src={images.vitamin}/>
                    </Slide>

                    <Slide>
                        <Heading fit>Online-shop: specification</Heading>
                        <List>
                            <ListItem><Heading size={4}>
                                Products list
                            </Heading></ListItem>
                            <ListItem><Heading size={4}>
                                One product
                            </Heading></ListItem>
                            <ListItem><Heading size={4}>
                                Cart
                            </Heading></ListItem>
                            <ListItem><Heading size={4}>
                                Payment
                            </Heading></ListItem>
                        </List>
                    </Slide>
                    <Slide {...defaultSlideProps}>
                        <Appear><Fit><Block borderColor='violet'>
                            View layer
                            <Layout>
                                <Appear><Fill>
                                    <PageBlock title='Products list'/>
                                </Fill></Appear>
                                <Appear><Fill>
                                    <PageBlock title='One product'/>
                                </Fill></Appear>
                                <Appear><Fill>
                                    <PageBlock title='Cart & order'/>
                                </Fill></Appear>
                                <Appear><Fill>
                                    <PageBlock title='Make payment'/>
                                </Fill></Appear>
                            </Layout>
                        </Block></Fit></Appear>
                        <Appear><Fit><Block>
                            Data layer
                            <Layout>
                                <Appear><Fill>
                                    <Block>Get products list</Block>
                                </Fill></Appear>
                                <Appear><Fill>
                                    <Block>Get one product</Block>
                                </Fill></Appear>
                                <Appear><Fill>
                                    <Block>Create an order</Block>
                                </Fill></Appear>
                                <Appear><Fill>
                                    <Block>Order payment</Block>
                                </Fill></Appear>
                            </Layout>
                        </Block></Fit></Appear>
                        <Appear><Fit>
                            <Block borderColor='pink'>
                                Core
                                <Layout>
                                    <Appear><Fill>
                                        <Block borderColor='pink'>HttpRequest</Block>
                                    </Fill></Appear>
                                    <Appear><Fill>
                                        <Block borderColor='pink'>Router</Block>
                                    </Fill></Appear>
                                    <Appear><Fill>
                                        <Block borderColor='pink'>...</Block>
                                    </Fill></Appear>
                                    <Appear><Fill>
                                        <Block borderColor='pink'>...</Block>
                                    </Fill></Appear>
                                    <Appear><Fill>
                                        <Block borderColor='pink'>...</Block>
                                    </Fill></Appear>
                                </Layout>
                            </Block>
                        </Fit></Appear>
                    </Slide>
                    <Slide>
                        <Layout style={{alignItems: 'center'}}>
                            <Fit>
                                input
                                <Heading size={2}>➡</Heading>
                            </Fit>
                            <Appear><Fill>
                                <Block
                                    style={{
                                        margin: 0,
                                        backgroundColor: 'black',
                                        color: 'white',
                                        height: '80vh',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                    borderColor='black'>
                                    <Heading textColor='primary' size={3} style={{alignSelf: 'center'}}>
                                        Magic
                                    </Heading>
                                </Block>
                            </Fill></Appear>
                            <Appear><Fit>
                                output
                                <Heading size={2}>➡</Heading>
                            </Fit></Appear>
                        </Layout>
                    </Slide>
                    <Slide transition={['fade']}>
                        <Heading fit size={2}>Internal API: page module</Heading>
                        <CodePane
                            lang='javascript'
                            textSize='1.2em'
                            source={`function(params) {
  ...
  // show something on the screen
}
`}
                            margin='20px auto'
                        />
                    </Slide>
                    <Slide transition={['']}>
                        <Heading fit size={2}>Internal API: page module</Heading>
                        <CodePane
                            lang='javascript'
                            textSize='1.2em'
                            source={`function(product_id) {
  ...
  // show something on the screen
}
`}
                            margin='20px auto'
                        />
                    </Slide>
                    <Slide transition={['']}>
                        <Heading fit size={2}>Internal API: page module</Heading>
                        <CodePane
                            lang='javascript'
                            textSize='1.2em'
                            source={`function(product_id) {
  ...
  return html; // or template + data
}
`}
                            margin='20px auto'
                        />
                    </Slide>
                    <Slide transition={['fade']} {...defaultSlideProps}>
                        <Layout style={{alignItems: 'center'}}>
                            <Fit>
                                load
                                <Heading size={2}>➡</Heading>
                            </Fit>
                            <Fill>
                                <Block
                                    style={{
                                        margin: 0,
                                        backgroundColor: 'gray',
                                        color: 'white',
                                        height: '80vh',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                    borderColor='gray'>
                                    <Heading textColor='primary' size={3} style={{alignSelf: 'center'}}>
                                        Magic
                                    </Heading>
                                </Block>
                            </Fill>
                            <Fit>
                                &nbsp;
                                <Heading size={6}>➡</Heading>
                            </Fit>
                            <Fit>
                                <Block {...verticalBlockProps}>
                                    <Heading size={5}>template engine</Heading>
                                </Block>
                            </Fit>
                            <Fit>
                                browser
                                <Heading size={2}>➡</Heading>
                            </Fit>
                        </Layout>
                    </Slide>
                    <Slide transition={['fade']} {...defaultSlideProps}>
                        <Layout style={{alignItems: 'center'}}>
                            <Fit>
                                load
                                <Heading size={2}>➡</Heading>
                            </Fit>
                            <Fit>
                                <Block {...verticalBlockProps}>
                                    <Heading size={5}>router</Heading>
                                </Block>
                            </Fit>
                            <Fit>
                                &nbsp;
                                <Heading size={6}>➡</Heading>
                            </Fit>
                            <Fill>
                                <Block
                                    style={{
                                        margin: 0,
                                        backgroundColor: 'lightgray',
                                        color: 'white',
                                        height: '80vh',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                    borderColor='lightgray'>
                                    <Heading textColor='primary' size={3} style={{alignSelf: 'center'}}>
                                        Magic
                                    </Heading>
                                </Block>
                            </Fill>
                            <Fit>
                                &nbsp;
                                <Heading size={6}>➡</Heading>
                            </Fit>
                            <Fit>
                                <Block {...verticalBlockProps}>
                                    <Heading size={5}>template engine</Heading>
                                </Block>
                            </Fit>
                            <Fit>
                                browser
                                <Heading size={2}>➡</Heading>
                            </Fit>
                        </Layout>
                    </Slide>

                    <Slide transition={['fade']} {...defaultSlideProps}>
                        <Layout style={{alignItems: 'center'}}>
                            <Fit>
                                load
                                <Heading size={2}>➡</Heading>
                            </Fit>
                            <Fit>
                                <Block {...verticalBlockProps}>
                                    <Heading size={5}>router</Heading>
                                </Block>
                            </Fit>
                            <Fit>
                                &nbsp;
                                <Heading size={6}>➡</Heading>
                            </Fit>
                            <Fill>
                                <Appear>
                                    <div><Block style={{
                                        margin: 0, height: '80vh', textAlign: 'left',
                                        display: 'flex', flexDirection: 'column', color: 'violet'
                                    }} label='Data: category name' borderColor='violet'>
                                        <Appear>
                                            <div><Block
                                                style={{textAlign: 'center', color: 'lightblue'}}>
                                                Header
                                            </Block></div>
                                        </Appear>
                                        <Appear style={{order: 2}}>
                                            <div style={{order: 2}}><Block
                                                style={{textAlign: 'center', color: 'lightblue'}}>
                                                Footer
                                            </Block></div>
                                        </Appear>
                                        <div style={{
                                            flex: '1 1 0%', order: 1,
                                            display: 'flex'
                                        }}>
                                            <Appear style={{padding: '0 0.25em', color: 'lightblue'}}>
                                                <Block>
                                                    Menu
                                                </Block>
                                            </Appear>
                                            <Appear style={{flex: '1 1 0%', color: 'lightgreen'}}>
                                                <Block
                                                    label='Data: products list'
                                                    borderColor='lightgreen'>
                                                    <Heading size={4} style={{textAlign: 'center'}}
                                                             textColor='lightgreen'>
                                                        Content
                                                    </Heading>
                                                    <Appear style={{color: 'black', fontSize: '1.3em', float: 'right'}}>
                                                        <button tabIndex={-1}>Add To Cart</button>
                                                    </Appear>
                                                </Block>
                                            </Appear>
                                        </div>
                                    </Block></div>
                                </Appear>
                            </Fill>
                            <Fit>
                                &nbsp;
                                <Heading size={6}>➡</Heading>
                            </Fit>
                            <Fit>
                                <Block {...verticalBlockProps}>
                                    <Heading size={5}>template engine</Heading>
                                </Block>
                            </Fit>
                            <Fit>
                                browser
                                <Heading size={2}>➡</Heading>
                            </Fit>
                        </Layout>
                    </Slide>
                    <Slide {...defaultSlideProps}>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                            alignItems: 'center'
                        }}>
                            <div style={{width: '40%', order: 0}}>
                                <Block borderColor='violet'>
                                    <button tabIndex={-1}>Add To Cart</button>
                                </Block>
                            </div>
                            <div style={{width: '40%', order: 2}}>
                                <Appear>
                                    <div>
                                        <Heading size={6}>⬇</Heading>
                                        <Block>
                                            data service: <br />
                                            <strong>addToCart(product_id)</strong>
                                        </Block>
                                    </div>
                                </Appear>
                            </div>
                            <div style={{width: '40%', order: 4}}>
                                <Appear>
                                    <Heading size={6}>⬇</Heading>
                                </Appear>
                            </div>
                            <div style={{width: '100%', order: 6}}>
                                <Appear>
                                    <Block borderColor='pink'>
                                        storage
                                    </Block>
                                </Appear>
                            </div>
                            <div style={{width: '40%', order: 1}}>
                                <Appear>
                                    <Block borderColor='violet'>Cart Total block</Block>
                                </Appear>
                            </div>
                            <div style={{width: '40%', order: 3}}>
                                <Appear>
                                    <div>
                                        <Heading size={6}>⬇⬆</Heading>
                                        <Block>
                                            data service: <br />
                                            <strong>getCart()</strong>
                                        </Block>
                                    </div>
                                </Appear>
                            </div>
                            <div style={{width: '40%', order: 5}}>
                                <Appear>
                                    <Heading size={6}>⬇⬆</Heading>
                                </Appear>
                            </div>
                        </div>
                    </Slide>
                    <Slide {...defaultSlideProps}>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <div>
                                <Block borderColor='violet'>
                                    <button tabIndex={-1}>Add To Cart</button>
                                </Block>
                                <Appear style={{color: 'darkorange'}}>
                                    <div>
                                        <div style={{fontSize: '3em'}}>⇣</div>
                                        ADD_TO_CART
                                    </div>
                                </Appear>
                            </div>
                            <Appear>
                                <div>
                                    <Block>
                                        cart data layer
                                    </Block>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <Appear style={{width: '45%', color: 'darkorange'}}>
                                            <div>
                                                <div style={{fontSize: '3em'}}>⇡</div>
                                                ADD_TO_CART
                                            </div>
                                        </Appear>
                                        <Appear style={{width: '45%', color: 'darkgreen'}}>
                                            <div>
                                                <div style={{fontSize: '3em'}}>⇣</div>
                                                <br /><br />CART_CHANGED
                                            </div>
                                        </Appear>
                                    </div>
                                </div>
                            </Appear>
                            <Appear>
                                <div>
                                    <Block borderColor='violet'>Cart Total block</Block>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <Appear style={{width: '45%', color: 'darkgreen'}}>
                                            <div>
                                                <div style={{fontSize: '3em'}}>⇡</div>
                                                <br /><br />CART_CHANGED
                                            </div>
                                        </Appear>
                                        <Appear style={{width: '45%', color: 'darkorange'}}>
                                            <div>
                                                <div style={{fontSize: '3em'}}>⇡</div>
                                                ADD_TO_CART
                                            </div>
                                        </Appear>
                                    </div>
                                </div>
                            </Appear>
                        </div>
                    </Slide>
                    <Slide {...defaultSlideProps}>
                        <Layout style={{alignItems: 'center'}}>
                            <Fit>
                                load
                                <Heading size={2}>➡</Heading>
                            </Fit>
                            <Fit>
                                <Block {...verticalBlockProps}>
                                    <Heading size={5}>router</Heading>
                                </Block>
                            </Fit>
                            <Fit>
                                &nbsp;
                                <Heading size={6}>➡</Heading>
                            </Fit>
                            <Fill>
                                <Block style={{
                                    margin: 0, height: '60vh', textAlign: 'left',
                                    display: 'flex', flexDirection: 'column', color: 'violet'
                                }} label='Data: category name' borderColor='violet'>
                                    <div><Block
                                        style={{textAlign: 'center', color: 'lightblue'}}>
                                        Header
                                    </Block></div>
                                    <div style={{order: 2}}>
                                        <div style={{order: 2}}><Block
                                            style={{textAlign: 'center', color: 'lightblue'}}>
                                            Footer
                                        </Block></div>
                                    </div>
                                    <div style={{
                                        flex: '1 1 0%', order: 1,
                                        display: 'flex'
                                    }}>
                                        <Block style={{padding: '0 0.25em', color: 'lightblue'}}>
                                            Menu
                                        </Block>
                                        <Block
                                            style={{flex: '1 1 0%', color: 'lightgreen'}}
                                            label='Data: products list'
                                            borderColor='lightgreen'>
                                            <Heading size={4} style={{textAlign: 'center'}}
                                                     textColor='lightgreen'>
                                                Content
                                            </Heading>
                                            <div style={{color: 'black', fontSize: '1.3em', float: 'right'}}>
                                                <button tabIndex={-1}>Add To Cart</button>
                                            </div>
                                        </Block>
                                    </div>
                                </Block>
                            </Fill>
                            <Fit>
                                &nbsp;
                                <Heading size={6}>➡</Heading>
                            </Fit>
                            <Fit>
                                <Block {...verticalBlockProps}>
                                    <Heading size={5}>template engine</Heading>
                                </Block>
                            </Fit>
                            <Fit>
                                browser
                                <Heading size={2}>➡</Heading>
                            </Fit>
                        </Layout>
                        <Appear><Fit>
                            <Block borderColor='pink'>
                                Core
                                <Layout>
                                    <Appear><Fill>
                                        <Block borderColor='pink'>HttpRequest</Block>
                                    </Fill></Appear>
                                    <Appear><Fill>
                                        <Block borderColor='pink'>Router</Block>
                                    </Fill></Appear>
                                    <Appear><Fill>
                                        <Block borderColor='pink'>Templates</Block>
                                    </Fill></Appear>
                                    <Appear><Fill>
                                        <Block borderColor='pink'>Storage</Block>
                                    </Fill></Appear>
                                    <Appear><Fill>
                                        <Block borderColor='pink'>PubSub</Block>
                                    </Fill></Appear>
                                    <Appear><Fill>
                                        <Block borderColor='pink'>Assets</Block>
                                    </Fill></Appear>
                                </Layout>
                            </Block>
                        </Fit></Appear>
                    </Slide>
                    <Slide>
                        <Heading>User registration</Heading>
                        <List>
                            <Appear>
                                <div>
                                    <ListItem>Login/registration widget</ListItem>
                                    <ListItem>Orders list page</ListItem>
                                </div>
                            </Appear>
                            <Appear>
                                <div>
                                    <ListItem>Data: update cart</ListItem>
                                    <ListItem>Data: load cart</ListItem>
                                    <ListItem>Data: login / registration</ListItem>
                                    <ListItem>Data: load user info</ListItem>
                                    <ListItem>Data: load orders list</ListItem>
                                </div>
                            </Appear>
                        </List>
                    </Slide>
                    <Slide transition={['fade']}>
                        <Heading size={2}>Module/package API</Heading>
                        <CodePane
                            lang='javascript'
                            textSize='1.2em'
                            source={`export default {
  components: { ... },
  dataServices: { ... },
  events: {
    emit: [ ... ],
    listen: [ ... ]
  }
}
`}
                            margin='20px auto'
                        />
                    </Slide>
                    <Slide transition={['fade']} {...defaultSlideProps}>
                        <Heading size={2}>Connector</Heading>
                        <CodePane
                            lang='javascript'
                            textSize='0.9em'
                            source={`import package from './user';
const { components, dataServices } = package;

app.router.register('/orders', components['OrdersPage']);
app.assets.register('header', components['LoginWidget']);

app.dataLayer.getCart = dataServices['getCartFromServer'];
`}
                            margin='20px auto'
                        />
                    </Slide>
                    <Slide>
                        <Heading>Comments</Heading>
                        <List>
                            <Appear>
                                <div>
                                    <ListItem>Comments list</ListItem>
                                    <ListItem>Comment input form</ListItem>
                                </div>
                            </Appear>
                            <Appear>
                                <div>
                                    <ListItem>Data: load comments</ListItem>
                                    <ListItem>Data: save comment</ListItem>
                                </div>
                            </Appear>
                        </List>
                    </Slide>
                    <Slide transition={['fade']} {...defaultSlideProps}>
                        <CodePane
                            lang='javascript'
                            textSize='0.7em'
                            source={`// comments connector
app.assets.register('afterProductDescription', components['CommentsWidget']);
`}
                            margin='20px auto'
                        />
                        <CodePane
                            lang='javascript'
                            textSize='0.7em'
                            source={`// user registration connector
app.httpRequest.registerDefaultParams(() => {
  return {
    session_id: userPackage.dataServices.getCurrentSessionId()
  }
});
`}
                            margin='20px auto'
                        />
                    </Slide>
                    <Slide>
                        <Heading>Currencies</Heading>
                        <List>
                            <Appear>
                                <div>
                                    <ListItem>Data: load currencies list</ListItem>
                                    <ListItem>Currency picker block</ListItem>
                                </div>
                            </Appear>
                            <Appear>
                                <div>
                                    <ListItem>Price block</ListItem>
                                </div>
                            </Appear>
                        </List>
                    </Slide>
                    <Slide>
                        <Heading>Offline mode</Heading>
                        <List>
                            <ListItem>Wrapper for HttpRequest (core module)</ListItem>
                            <ListItem>Offline storage</ListItem>
                            <ListItem>Connection status widget</ListItem>
                        </List>
                    </Slide>
                    <Slide bgColor='quartenary'>

                    </Slide>
                    <Slide {...defaultSlideProps}>
                        <Image width='100%' src={images.iss}/>
                    </Slide>
                    <Slide>
                        <Heading fit>Modules are like little kids. They need rules:</Heading>
                        <List>
                            <Appear>
                                <div>
                                    <ListItem>
                                        Hands to yourself
                                    </ListItem>
                                    <List style={{marginLeft: '3em'}}>
                                        <ListItem>Only call your own methods or those on the sandbox</ListItem>
                                        <ListItem>Don't access DOM elements outside of your box</ListItem>
                                        <ListItem>Don't access non-native global objects</ListItem>
                                    </List>
                                </div>
                            </Appear>
                            <Appear>
                                <div>
                                    <ListItem>Ask, don't take</ListItem>
                                    <List style={{marginLeft: '3em'}}>
                                        <ListItem>Anything else you need, ask the sandbox</ListItem>
                                    </List>
                                </div>
                            </Appear>
                            <Appear>
                                <div>
                                    <ListItem>Don't leave your toys around</ListItem>
                                    <List style={{marginLeft: '3em'}}>
                                        <ListItem>Don't create global objects</ListItem>
                                    </List>
                                </div>
                            </Appear>
                            <Appear>
                                <div>
                                    <ListItem>Don't talk to strangers</ListItem>
                                    <List style={{marginLeft: '3em'}}>
                                        <ListItem>Don't directly reference other modules</ListItem>
                                    </List>
                                </div>
                            </Appear>
                        </List>
                    </Slide>
                    <Slide id='last' bgColor='quartenary' transition={['fade']}>
                        <Heading size={2} fit>bit.ly/fwd16-arch</Heading>
                        <Heading fit textColor='primary'>Questions!</Heading>

                        <Heading size={5} margin='1em 0 0 0'>Alexey Volkov</Heading>
                        <Heading size={5} margin='0.25em 0 0 0'>
                            <Link href='http://github.com/rosko'>
                                github.com/rosko
                            </Link>
                        </Heading>
                        <Heading size={5} margin='0.25em 0 0 0'>
                            <Link href='http://twitter.com/roskoalexey'>
                                twitter.com/roskoalexey
                            </Link>
                        </Heading>

                    </Slide>

                </Deck>
            </Spectacle>
        );
    }
}
