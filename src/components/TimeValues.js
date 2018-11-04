/**
 * TimePicker
 */

import React from 'react';
import { FormSpy } from 'react-final-form';
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
    const { namespace } = this.props;
    return (
      <FormSpy subscription={{ values: true }}>
        {({ values }) => {
          const start = this.formatTime(get(values, [namespace, 0]));
          const end = this.formatTime(get(values, [namespace, 1]));
          return (
            <Flex>
              <Box>
                <span>
                  {namespace}
                </span>
              </Box>
              <Box>
                <span>{`${start} - ${end}`}</span>
              </Box>
            </Flex>
          );
        }}
      </FormSpy>
    );
  }
}

TimePicker.defaultProps = {
  day: Moment('2018-01-01') // arbitrary date
};

export default TimePicker;