import React from 'react';
import TariffCard from './components/TarrifCard/index';
import styles from './App.module.scss'

const tariffs = [
  {id: 1, color: "blue", title:"Безлимитный 300", price:"300", traffic:"до 10 Мбит/сек"},
  {id: 2, color: "green", title:"Безлимитный 450", price:"450", traffic:"до 50 Мбит/сек"},
  {id: 3, color: "red", title:"Безлимитный 550", price:"550", traffic:"до 100 Мбит/сек", isSelected: true},
  {id: 4, color: "black", title:"Безлимитный 1000", price:"1000", traffic:"до 200 Мбит/сек"},
]

function App() {
  return (
    <div className={styles.app}>
      {
          tariffs.map((tariff)=>
          <TariffCard 
            key={tariff.id}
            color={tariff.color}
            title={tariff.title}
            price={tariff.price}
            traffic={tariff.traffic}
            isSelected={tariff.isSelected}
            />
          )
      }
    </div>
  );
}

export default App;