import React from 'react';
import Markdown from './tutorial/Markdown';

const message = `Thank you for completing the editing task! Please fill out the [exit survey](https://forms.gle/xBvkGdZ9xHTmQ8wM7) here.`;

const EditingTaskThankYou = () => (
  <div className="w-100 h-100 d-flex flex-row justify-content-center align-items-center">
    <div className="p-5">
      <h1 className="m-5">
        <Markdown>{message}</Markdown>
      </h1>
    </div>
  </div>
);

export default EditingTaskThankYou;
