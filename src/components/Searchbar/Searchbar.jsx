import styles from './Searchbar.module.scss';
import { useState, useRef } from 'react';

const Searchbar = ({fetchWeather}) => {

  const [value, setValue] = useState('');
  const ref = useRef(null);

  return (
      <form className={styles.searchbarContainer} ref={ref} onSubmit={(e) => {
        e.preventDefault();
        fetchWeather(value);
        ref.current.reset();
      }}>
        <label htmlFor="searchbar">
          <input onChange={(e) => setValue(e.target.value)} type="text" name='searchbar' id='searchbar' className={styles.searchbar}/>
        </label>
      </form>
  )
}

export default Searchbar;