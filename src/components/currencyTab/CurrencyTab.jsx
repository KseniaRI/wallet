import Media from 'react-media';
import { Currency } from 'components/currency/Currency';

export const CurrencyTab = () => {
    return (
        <Media query="(max-width: 767px)" render={() => <Currency />} />
    )
}