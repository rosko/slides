var React = require('react');
var ReactDOM = require('react-dom');
const CodeMirror = require('codemirror');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/solarized.css');
require('codemirror/mode/jsx/jsx');

var IS_MOBILE = (
    navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
);

var OPEN_MARK = /{{{/;
var CLOSE_MARK = /}}}/;

CodeMirror.registerGlobalHelper('fold', 'marked',
    function (mode) {
        return mode.name === 'javascript';
    },
    function (mirror, start) {
        var lineNo = start.line;
        var lineText = mirror.getLine(lineNo);
        var lineCount = mirror.lineCount();

        var openMatch = OPEN_MARK.exec(lineText);
        var closeMatch = CLOSE_MARK.exec(lineText);

        var i;
        if (openMatch) {
            // search forwards
            for (i = lineNo; i < lineCount; i++) {
                closeMatch = CLOSE_MARK.exec(mirror.getLine(i));
                if (closeMatch) {
                    return {
                        from: CodeMirror.Pos(lineNo, openMatch.index),
                        to: CodeMirror.Pos(i, closeMatch.index + 3)
                    };
                }
            }

        } else if (closeMatch) {
            // search backwards
            for (i = lineNo; i >= 0; i--) {
                openMatch = OPEN_MARK.exec(mirror.getLine(i));
                if (openMatch) {
                    return {
                        from: CodeMirror.Pos(i, openMatch.index),
                        to: CodeMirror.Pos(lineNo, closeMatch.index + 3)
                    };
                }
            }
        }
    }
);

var CodeMirrorEditor = React.createClass({
    propTypes: {
        readOnly: React.PropTypes.bool,
        onChange: React.PropTypes.func,
        codeText: React.PropTypes.string,
        className: React.PropTypes.string,
        style: React.PropTypes.object,
        editorStyle: React.PropTypes.object
    },

    componentDidMount: function () {
        if (IS_MOBILE) return;

        this.editor = CodeMirror.fromTextArea(ReactDOM.findDOMNode(this.refs.editor), {
            mode: 'jsx',
            lineNumbers: true,
            lineWrapping: false,
            smartIndent: true,  // javascript mode does bad things with jsx indents
            matchBrackets: true,
            theme: 'solarized',
            readOnly: this.props.readOnly
        });
        // this.editor.foldCode(0, {widget: '...'});
        this.editor.on('change', this.handleChange);

        this.editor.on('beforeSelectionChange', (instance, obj) => {
            // why is ranges plural?
            var selection = obj.ranges ?
                obj.ranges[0] :
                obj;

            var noRange = selection.anchor.ch === selection.head.ch &&
                selection.anchor.line === selection.head.line;
            if (!noRange) {
                return;
            }

            var cursor = selection.anchor;
            var line = instance.getLine(cursor.line);
            var match = OPEN_MARK.exec(line) || CLOSE_MARK.exec(line);

            // the opening or closing mark appears on this line
            if (match &&
                // and the cursor is on it
                // (this is buggy if both occur on the same line)
                cursor.ch >= match.index &&
                cursor.ch < match.index + 3) {

                // TODO(joel) - figure out why this doesn't fold although it
                // seems like it should work.
                instance.foldCode(cursor, {widget: '...'});
            }
        });
    },

    componentDidUpdate: function () {
        if (this.props.readOnly) {
            this.editor.setValue(this.props.codeText);
        }
    },

    componentWillReceiveProps(nextProps) {
        if (nextProps.codeText !== this.props.codeText) {
            this.editor.setValue(nextProps.codeText);
        }
    },

    handleChange: function () {
        if (!this.props.readOnly && this.props.onChange) {
            this.props.onChange(this.editor.getValue());
        }
    },

    render: function () {
        // wrap in a div to fully contain CodeMirror
        var editor;

        if (IS_MOBILE) {
            editor = <pre style={{overflow: 'scroll'}} style={this.props.editorStyle}>{this.props.codeText}</pre>;
        } else {
            editor = <textarea ref='editor' defaultValue={this.props.codeText} style={this.props.editorStyle}/>;
        }

        return (
            <div style={this.props.style} className={this.props.className}>
                {editor}
            </div>
        );
    }
});

module.exports = CodeMirrorEditor;
