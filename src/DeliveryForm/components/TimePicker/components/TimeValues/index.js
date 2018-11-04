/**
 * TimePicker
 */

import React from 'react';
import Moment from 'moment';
import { Flex, Box } from '@rebass/grid';
import get from 'lodash.get';

class TimePicker extends React.PureComponent {
  formatTime = (minutes) => {
    const { day } = this.props;
    if (minutes) {
      day.set({ hour: 0, minute: 0, second: 0, millisecond: 0 }); // Reset time
      day.add(minutes, 'minutes');
    }
    return day.format("H:mm");
  }

  onTimeChange = (value) => {
    this.props.input.onChange(value);
  }

  render() {
    const { values, namespace } = this.props;
    const start = this.formatTime(get(values, [0]));
    const end = this.formatTime(get(values, [1]));
    return (
      <Flex>
        <Box mr="20px">
          <span className="label">
            {namespace}
          </span>
        </Box>
        <Box>
          <span>{`${start} - ${end}`}</span>
        </Box>
      </Flex>
    );
  }
}

TimePicker.defaultProps = {
  day: Moment('2018-01-01') // arbitrary date
};

export default TimePicker;