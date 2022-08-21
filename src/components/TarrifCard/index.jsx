import styles from './styles.module.scss'

const TariffCard = (props) => {
    const {color, title, price, traffic, isSelected} = props;
    
    return (
    <div className={`${styles.tariff__card} ${(isSelected && styles.tariff__cardSelected)}`}>
        <div className={`${styles.tariff__title} 
                        ${(color==="blue" && styles.tariff__titleBlue) ||
                        (color==="green" && styles.tariff__titleGreen) ||
                        (color==="red" && styles.tariff__titleRed) ||
                        (color==="black" && styles.tariff__titleBlack) }`}>
            <h1>{title}</h1>
        </div>
            <div className={styles.tariff__container}>
                <div className={`${styles.tariff__price_wrapper} 
                                ${(color==="blue" && styles.tariff__price_wrapperBlue) || 
                                (color==="green" && styles.tariff__price_wrapperGreen) || 
                                (color==="red" && styles.tariff__price_wrapperRed) || 
                                (color==="black" && styles.tariff__price_wrapperBlack)}`}>
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

export default TariffCard;