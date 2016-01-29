import React, { Component, PropTypes } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/html';
import 'brace/theme/chrome';

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
                   editorProps={{
                    $blockScrolling: Infinity,
                    wrap: true
                   }}
        />
        <div className="buttons">
          <button onClick={ () => onUpdateClick(html) }>Update HTML</button>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  initialHtml: React.PropTypes.string.isRequired,
  onUpdateClick: React.PropTypes.func.isRequired
};

export default Editor;
