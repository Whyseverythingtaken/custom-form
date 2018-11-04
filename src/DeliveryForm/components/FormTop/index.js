/**
 * FormTop
 */

import React from 'react';
import { FormSpy } from 'react-final-form';
import { Flex, Box } from '@rebass/grid';

class FormTop extends React.PureComponent {
  render() {
    return (
      <Flex>
        <Box mr="137px">
          <FormSpy subscription={{ values: true }}>
            {({ values }) => {
              const { datePicker: { startDate } } = values;
              const formattedStartDate = startDate && startDate.format('ddd, Do MMM');
              return (
                <div>
                  <span className="label">
                    Pickup
                  </span>
                  <span className="date">
                    {formattedStartDate || ''}
                  </span>
                </div>
              );
            }}
          </FormSpy>
        </Box>
        <Box>
          <FormSpy subscription={{ values: true }}>
            {({ values }) => {
              const { datePicker: { endDate } } = values;
              const formattedEndDate = endDate && endDate.format('ddd, Do MMM');
              return (
                <div>
                  <span className="label">
                    Drop
                  </span>
                  <span className="date">
                    {formattedEndDate || ''}
                  </span>
                </div>
              );
            }}
          </FormSpy>
        </Box>
      </Flex>
    );
  }
}

export default FormTop;