import styles from './Main.module.scss';
import { convertTemp } from '../../App';
import sunny from '../../assets/sunny.png'
import clouds from '../../assets/clouds.png'
import rainy from '../../assets/rainy.png'
import sunnyClouds from '../../assets/sunny_clouds.png'


const Main = ({data}) => {


  const getWeather = () => {
    const weather = data.weather[0].main;
    if (weather === 'Clear') {
      return sunny;
    }
    else if (weather === 'Clouds' && data.weather[0].description === 'few clouds') {
      return sunnyClouds;
    }
    else if (weather === 'Clouds') {
      return clouds;
    }
    else if (weather === 'Rain') {
      return rainy;
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.temperature}>{convertTemp(data.main.temp)}</div>
      <div className={styles.name}>{data.name}</div>
      <div className={styles.feels}>Feels like {convertTemp(data.main.feels_like)}</div>
      <img className={styles.image} src={getWeather()} alt={getWeather()} />
    </main>
  )
}

export default Main;