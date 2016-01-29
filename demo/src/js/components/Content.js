import React, { PropTypes } from 'react';
import 'sass/content';

import Editor from './Editor';
import Html from './Html';

export default function Content(props) {
  const { html, onUpdateClick } = props;
  return (
    <main id="content">
      <Editor initialHtml={ html } onUpdateClick={ onUpdateClick } />
      <Html html={ html } />
    </main>
  );
}

Content.propTypes = {
  html: PropTypes.string.isRequired,
  onUpdateClick: PropTypes.func.isRequired
};
