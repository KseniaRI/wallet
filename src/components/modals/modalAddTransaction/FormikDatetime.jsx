import Datetime from 'react-datetime';
import moment from 'moment';
import { renderMobileInput } from 'utils/renderInput/RenderInput';
import { nanoid } from 'nanoid';

const DATE_FORMAT = 'DD.MM.YYYY';
const idDate = nanoid();

const FormikDateTime = ({ field, form, timeFormat }) => {

  const onFieldChange = value => {
    let dateValue = value;

    // if the date field isn't in a valid date format,
    // react-datetime's onChange handler returns a string
    // otherwise it returns a moment object
    // this is why we can't override DateTime's onChange
    // prop with Formik's field.onChange
    
    if (value instanceof moment) {
      dateValue = moment(value).format(DATE_FORMAT);
    }

    form.setFieldValue(field.name, dateValue);
  }

  const onFieldBlur = () => {
    form.setFieldTouched(field.name, true);
  }

  return (
      <Datetime
        renderInput={renderMobileInput}
        initialValue={form.initialValues.date}
        dateFormat={DATE_FORMAT}
        timeFormat={timeFormat}
        id={idDate}
        name={field.name}
        onChange={onFieldChange}
        onBlur={onFieldBlur}
        closeOnSelect
    />
  );
}

export default FormikDateTime;