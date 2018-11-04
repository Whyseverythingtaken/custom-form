/**
 * Chart
 * @flow
 */

import React from 'react';
import { AreaChart, Area } from 'recharts';

class Chart extends React.PureComponent {
  render() {
    const data = [
      { price: '0', uv: 10 },
      { price: '15', uv: 100 },
      { price: '30', uv: 300 },
      { price: '45', uv: 350 },
      { price: '60', uv: 275 },
      { price: '75', uv: 150 },
      { price: '90', uv: 50 },
      { price: '100', uv: 10 }
    ];
    return (
      <AreaChart
        width={630}
        height={80}
        data={data}
      >
        <Area type='monotone' dataKey='uv' stroke='#f0f8ff' fill='#D6F1EF' />
      </AreaChart>
    );
  }
}

export default Chart;