import React from 'react';
import { ResponsiveStream } from '@nivo/stream';
import resultPropType from './resultPropType';

const FunctionUsageChart = ({ data }) => {
  // Find all of the function names.
  const functionNames = new Set();
  data.forEach((wakeSleepRound) => {
    Object.keys(wakeSleepRound.usageAfterAddingFunctions).forEach(functionNames.add, functionNames);
    Object.keys(wakeSleepRound.usageAfterRemovingFunctions).forEach(functionNames.add, functionNames);
  });

  // Generate the data.
  const chartData = [];
  const addRound = (usages) => {
    const round = {};
    functionNames.forEach((functionName) => {
      round[functionName] = usages[functionName] || 0;
    });
    chartData.push(round);
  };
  data.forEach((wakeSleepRound) => {
    addRound(wakeSleepRound.usageAfterAddingFunctions);
    addRound(wakeSleepRound.usageAfterRemovingFunctions);
  });

  return (
    <ResponsiveStream
      data={chartData}
      keys={[...functionNames].sort()}
      margin={{ top: 10, right: 110, bottom: 50, left: 60 }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Optimization Stage',
        legendOffset: 36,
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Proportional Function Usage',
        legendOffset: -40,
      }}
      curve="linear"
      offsetType="expand"
      colors={{ scheme: 'nivo' }}
      borderColor={{ theme: 'background' }}
      dotSize={8}
      dotColor={{ from: 'color' }}
      dotBorderWidth={2}
      dotBorderColor={{ from: 'color', modifiers: [['darker', 0.7]] }}
      animate={false}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          translateX: 100,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#999999',
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000000',
              },
            },
          ],
        },
      ]}
    />
  );
};

FunctionUsageChart.propTypes = {
  data: resultPropType.isRequired,
};

export default FunctionUsageChart;
