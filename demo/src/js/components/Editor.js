import React, { Component, PropTypes } from 'react';
import brace from 'brace'; // eslint-disable-line no-unused-vars
import 'brace/mode/html';
import 'brace/theme/chrome';
import AceEditor from 'react-ace';

import 'sass/editor';

export default class Editor extends Component {
  constructor(props) {
    super();
    this.state = {
      html: props.initialHtml
    };
    this.onChange = this.onChange.bind(this);
    this.onEditorLoad = this.onEditorLoad.bind(this);
  }
  onChange(newValue) {
    this.setState({
      html: newValue
    });
  }
  onEditorLoad(editor) {
    editor.session.setUseWorker(false);
    editor.session.setUseWrapMode(true);
  }
  render() {
    const { onUpdateClick } = this.props;
    const { html } = this.state;
    const editorProps = {
      $blockScrolling: Infinity,
      wrap: true
    };
    return (
      <div id="editor">
        <AceEditor mode="html"
                   theme="chrome"
                   name="HTML_EDITOR"
                   value={ html }
                   width="100%"
                   height="auto"
                   onChange={this.onChange}
                   onLoad={this.onEditorLoad}
                   editorProps={ editorProps }
        />
        <div className="buttons">
          <button onClick={ () => onUpdateClick(html) }>Update HTML</button>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  initialHtml: PropTypes.string.isRequired,
  onUpdateClick: PropTypes.func.isRequired
};

export default Editor;
