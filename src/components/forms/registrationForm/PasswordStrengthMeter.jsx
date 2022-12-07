import zxcvbn from 'zxcvbn';
import {PasswordStrengthMeterProgress, PasswordStrengthMeterWrap } from './PasswordStrengthMeter.styled';

const createPasswordLabel = (result) => {
    switch (result.score) {
      case 0:
        return 'weak';
      case 1:
        return 'weak';
      case 2:
        return 'fair';
      case 3:
        return 'good';
      case 4:
        return 'strong';
      default:
        return 'weak';
    }
  }

const PasswordStrengthMeter = ({password}) => {
    const testedResult = zxcvbn(password);
    
    return (
        <PasswordStrengthMeterWrap>
            <PasswordStrengthMeterProgress
                className={createPasswordLabel(testedResult)}
                value={testedResult.score}
                max="4"
        />
      </PasswordStrengthMeterWrap >
      )
};

export default PasswordStrengthMeter;