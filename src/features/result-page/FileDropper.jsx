/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

const FileDropper = ({ jsonCallback }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onabort = () => console.error('file reading was aborted');
        reader.onerror = () => console.error('file reading has failed');
        reader.onload = () => {
          // Read the JSON as JSON.
          const str = new TextDecoder().decode(reader.result);
          try {
            const json = JSON.parse(str);
            jsonCallback(json);
          } catch (e) {
            console.error('Could not parse file as JSON.', e);
          }
        };
        reader.readAsArrayBuffer(file);
      });
    },
    [jsonCallback]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // Create the center text.
  const text = isDragActive ? <p>Drop result JSON.</p> : <p>Drop or select result JSON.</p>;
  return (
    <div className="w-100 h-100 p-3">
      <div {...getRootProps()} className="h-100 w-100 border rounded">
        <input {...getInputProps()} />
        <div className="w-100 h-100 d-flex flex-row justify-content-center align-items-center">{text}</div>
      </div>
    </div>
  );
};

FileDropper.propTypes = {
  jsonCallback: PropTypes.func,
};

FileDropper.defaultProps = {
  jsonCallback: () => {},
};

export default FileDropper;
