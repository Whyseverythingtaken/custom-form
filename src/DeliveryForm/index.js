/**
 * DeliveryForm
 */

import React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { Flex, Box } from '@rebass/grid';

import DatePicker from './components/DatePicker';
import TimePicker from './components/TimePicker';
import FormTop from './components/FormTop';
import PriceRange from './components/PriceRange';

class DeliveryForm extends React.PureComponent {
  render() {
    const initialValues = {
      datePicker: {},
      priceRange: [40, 50],
      pickupTime: [420, 600],
      dropTime: [930, 1110]
    }
    return (
      <Form
        initialValues={initialValues}
        onSubmit={values => {
          const message = `Submitted! 🙌 🎉 \n\n ${JSON.stringify(values)}`;
          alert(message);
        }}
      >
        {({ form, values }) => (
          <div>
            <Flex>
              <Box className="border" mr="10px">
                <Flex flexDirection="column">
                  <Box className="padding">
                    <FormTop />
                  </Box>
                  <Box>
                    <Field
                      name="datePicker"
                      component={DatePicker}
                    />
                  </Box>
                </Flex>
              </Box>
              <Box className="border rightSection padding">
                <Flex flexDirection="column">
                  <Box>
                    <Field
                      name="pickupTime"
                      namespace="Pickup Time"
                      morning
                      component={TimePicker}
                    />
                  </Box>
                  <Box>
                    <Field
                      name="dropTime"
                      namespace="Drop Time"
                      component={TimePicker}
                    />
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <Flex className="border padding formBottom" mt="10px">
              <Box width={3/4} className="padding">
                <Field
                  name="priceRange"
                  component={PriceRange}
                />
              </Box>
              <Box mr="5px" mt="60px">
                <button className="button" onClick={form.reset}>
                  Cancel
                </button>
              </Box>
              <Box mt="60px">
                <button className="button buttonPrimary" onClick={form.submit}>
                  Submit
                </button>
              </Box>
            </Flex>

            <FormSpy subscription={{ values: true }}>
              {({ values }) => (
                <pre>
                  {`Selected Dates ${JSON.stringify(values.datePicker, 0, 2)}\n`}
                  {`Pickup time ${JSON.stringify(values.pickupTime)}\n`}
                  {`Drop Time ${JSON.stringify(values.dropTime)}\n`}
                  {`Price Range ${JSON.stringify(values.priceRange)}`}
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