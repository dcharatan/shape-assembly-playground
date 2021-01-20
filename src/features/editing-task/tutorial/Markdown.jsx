import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Code from './Code';

const Markdown = ({ children }) => <ReactMarkdown renderers={{ inlineCode: Code }}>{children}</ReactMarkdown>;

Markdown.propTypes = {
  children: PropTypes.string,
};

Markdown.defaultProps = {
  children: undefined,
};

export default Markdown;
