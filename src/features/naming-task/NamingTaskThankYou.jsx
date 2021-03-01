import React from 'react';
import Markdown from '../editing-task/tutorial/Markdown';

const message = `Thank you for completing the naming task!`;

const NamingTaskThankYou = () => (
  <div className="w-100 h-100 d-flex flex-row justify-content-center align-items-center">
    <div className="p-5">
      <h1 className="m-5">
        <Markdown>{message}</Markdown>
      </h1>
    </div>
  </div>
);

export default NamingTaskThankYou;
