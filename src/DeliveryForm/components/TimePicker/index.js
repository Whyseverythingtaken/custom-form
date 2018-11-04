/**
 * TimePicker
 */

import React from 'react';
import { Range } from 'rc-slider';
import { Flex, Box } from '@rebass/grid';

import TimeValues from './components/TimeValues';

class TimePicker extends React.PureComponent {
  onTimeChange = (value) => {
    this.props.input.onChange(value);
  }

  render() {
    const {
      namespace,
      input: { value }
    } = this.props;

    return (
      <Flex flexDirection="column">
        <Box mt="55px" mb="15px">
          <TimeValues namespace={namespace} values={value} />
        </Box>
        <Box width={1} className="padding">
          <Range
            count={2}
            value={value}
            pushable
            min={0}
            max={1440}
            step={15}
            onChange={this.onTimeChange}
            trackStyle={[{ backgroundColor: '#00a599' }]}
            handleStyle={[{ backgroundColor: '#00a599', borderColor: '#00a599'}, { backgroundColor: '#00a599', borderColor: '#00a599'}]}
          />
        </Box>
      </Flex>
    );
  }
}

export default TimePicker;