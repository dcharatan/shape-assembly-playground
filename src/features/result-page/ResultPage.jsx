import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Ratio from 'react-ratio';
import FileDropper from './FileDropper';
import FunctionUsageChart from './FunctionUsageChart';
import SyntaxHighlighter from 'react-syntax-highlighter';

const ResultPage = () => {
  const [results, setResults] = useState([]);
  const addResult = (result) => setResults([...results, result]);
  if (!results.length) {
    return <FileDropper jsonCallback={addResult} />;
  }
  return (
    <div className="h-100 overflow-y-scroll">
      <Container>
        <Row>
          <Col className="py-5">
            <h1>Function Usage</h1>
            <Ratio ratio={16 / 9} className="w-100">
              <FunctionUsageChart data={results[0].wakeSleepRounds} />
            </Ratio>

            <h1>Discovered Library Functions</h1>
            {results[0].libraryFunctions.map((fn) => (
              <SyntaxHighlighter language="python">{fn.trim()}</SyntaxHighlighter>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResultPage;
