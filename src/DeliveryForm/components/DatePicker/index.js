/**
 * DatePicker
 */

import React from 'react';
import { DayPickerRangeController } from 'react-dates';

class DatePicker extends React.PureComponent {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: 'startDate'
  };
  
  onDatesChange = (value) => {
    this.props.input.onChange(value);
  }

  onFocusChange = (focusedInput) => {
    this.setState({ focusedInput: focusedInput || 'startDate' })
  }


  render() {
    const { input: { value } } = this.props;
    return (
      <DayPickerRangeController
        noBorder
        numberOfMonths={2}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        focusedInput={this.state.focusedInput}
        startDate={value.startDate}
        endDate={value.endDate}
      />
    );
  }
}

export default DatePicker;