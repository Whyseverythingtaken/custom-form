/**
 * PriceRange
 */

import React from 'react';
import { Range } from 'rc-slider';
import { Flex, Box } from '@rebass/grid';

class PriceRange extends React.PureComponent {
  onPriceChange = (value) => {
    this.props.input.onChange(value);
  }

  render() {
    const { input: { value } } = this.props;
    return (
      <Flex flexDirection="column">
        <Flex mb="20px">
          <Box mr="10px">
            <span className="label">{`Price: `}</span>
          </Box>
          <Box>
            <span>{`${value[0]} - ${value[1]}€`}</span>
          </Box>
        </Flex>
        <Box>
          <Range
            count={2}
            value={value}
            pushable
            min={0}
            max={100}
            step={5}
            onChange={this.onPriceChange}
          />
        </Box>
      </Flex>
    );
  }
}

export default PriceRange;