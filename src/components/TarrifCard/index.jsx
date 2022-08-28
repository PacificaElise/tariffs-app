import React, {useState} from 'react';

import styles from './styles.module.scss'

export default function TariffCard (props) {
    const {id, color, title, price, traffic, onChangeID} = props;

    const [isSelected, setSelected] = useState(false);

    const select = {
        transform: isSelected && 'scale(1.05)',
        boxShadow: isSelected && 'inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em rgba(0,0,0,0.3)'
    }

    function getClassNameTitle(color) {
        switch(color) {
            case 'blue':
            return styles.tariff__titleBlue;
            case 'green':
            return styles.tariff__titleGreen;
            case 'red':
            return styles.tariff__titleRed;
            case 'black':
            return styles.tariff__titleBlack;
            default:
            return styles.tariff__title
        }
    }

    function getClassNamePriceWrapper(color) {
        switch(color) {
            case 'blue':
            return styles.tariff__price_wrapperBlue;
            case 'green':
            return styles.tariff__price_wrapperGreen;
            case 'red':
            return styles.tariff__price_wrapperRed;
            case 'black':
            return styles.tariff__price_wrapperBlack;
            default:
            return styles.tariff__price_wrapper
        }
    }

    return (
    <div style = {select} className={styles.tariff__card} onClick = {() => setSelected(selected=>!selected)}>
        <div className={`${styles.tariff__title} ${getClassNameTitle(color)}`}>
            <h1>{title}</h1>
        </div>
            <div className={styles.tariff__container}>
                <div className={`${styles.tariff__price_wrapper} ${getClassNamePriceWrapper(color)}`}>
                    <div className={styles.tariff__price}>
                    {price}
                    </div>
                </div>
                <div className={styles.tariff__traffic}>
                {traffic}
                </div>
                <div className={styles.tariff__description}>
                Объём включённого трафика не ограничен
                </div>
            </div>
        </div>
    );
}

