import { Currency } from 'components/currency/Currency';
import Media from 'react-media';

export const CurrencyTab = () => {
    return (
        <Media query="(max-width: 767px)" render={() => <Currency />} />
    )
}