/**
 * DeliveryForm
 */

import React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { Flex, Box } from '@rebass/grid';

import DatePicker from '../DatePicker';
import TimePicker from '../TimePicker';
import TimeValues from '../TimeValues';

class DeliveryForm extends React.PureComponent {
  render() {
    return (
      <Form
        initialValues={{ datePicker: 55 }}
        onSubmit={values => console.log(values)}
      >
        {({ form, values }) => (
          <div>
            <Flex flexDirection="column">
              <Flex>
                <Box mr="15px">
                  <FormSpy subscription={{ values: true }}>
                    {({ values }) => {
                      const { datePicker: { startDate } } = values;
                      const formattedStartDate = startDate && startDate.format('ddd, Do MMM');
                      return (
                        <label>
                          Pickup
                          <input
                            type="input"
                            value={formattedStartDate || ''}
                            readOnly
                            />
                        </label>
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
                        <label>
                          Drop
                          <input
                            type="input"
                            value={formattedEndDate || ''}
                            readOnly
                            />
                        </label>
                      );
                    }}
                  </FormSpy>
                </Box>
              </Flex>
              <Box>
                <Field
                  name="datePicker"
                  component={DatePicker}
                />
              </Box>
              <Flex>
                <Box>
                  <TimeValues namespace="pickupTime" />
                </Box>
                <Box width={1}>
                  <Field
                    name="pickupTime"
                    component={TimePicker}
                  />
                </Box>
              </Flex>
            </Flex>

            <FormSpy subscription={{ values: true }}>
              {({ values }) => (
                <pre>
                  {JSON.stringify(values)}
                </pre>
              )}
            </FormSpy>
          </div>
        )}
      </Form>
    );
  }
}

export default DeliveryForm;