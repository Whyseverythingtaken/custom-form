/**
 * TimePicker
 */

import React from 'react';
import { Range } from 'rc-slider';
import { Box } from '@rebass/grid';

class TimePicker extends React.PureComponent {
  onTimeChange = (value) => {
    this.props.input.onChange(value);
  }

  render() {
    const { morning, morningTime, eveningTime } = this.props;

    return (
      // <Box width={1}>
        <Range
          count={2}
          defaultValue={morning ? morningTime : eveningTime}
          pushable
          min={0}
          max={1440}
          step={15}
          onChange={this.onTimeChange}
        />

      // </Box>
    );
  }
}

TimePicker.defaultProps = {
  // time of day in minutes
  morningTime: [480, 540], // 8am - 9am
  eveningTime: [990, 1050] // 4.30pm - 5.30pm
};

export default TimePicker;