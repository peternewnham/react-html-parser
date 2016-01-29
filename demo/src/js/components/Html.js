import React, { PropTypes } from 'react';
import ReactHtmlParser from 'react-html-parser';

import 'sass/html';

export default function Html(props) {
  const { html } = props;
  return (
    <div id="html">
      { ReactHtmlParser(html) }
    </div>
  );
}

Html.propTypes = {
  html: PropTypes.string.isRequired
};
