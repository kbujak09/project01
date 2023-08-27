import './App.scss';
import Searchbar from './components/Searchbar/Searchbar';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import { useEffect, useState } from 'react';

const convertTemp = (temp) => {
    return `${temp.toFixed(0)}°`;
}

const App = () => {
  const cur = new Date();
  console.log(((cur.getTime() / 86400000) % 1).toFixed(2));
  const current = ((cur.getTime() / 86400000) % 1).toFixed(2);

  const [data, setData] = useState(null);

  const fetchWeather = async (place) => {
    const fetched = await (
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)).json();
      setData(fetched);
  }

  useEffect(() => {
    if (current >= 0.25 && current < 0.75) {
      document.body.style.backgroundColor = '#0078D9'
    }
    else {
      document.body.style.backgroundColor = '#002473'
    }
  }, [])

  useEffect(() => {
    const getData = async () => {
      const fetched = await (
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Nasutów&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)).json();
      setData(fetched);
    } 
    getData() 
  }, [])


  return (
    <div className="App">
      <Menu />
      <Searchbar fetchWeather={fetchWeather}/>
      {data ? <Main data={data}/> : null}
    </div>
  )
}

export { convertTemp };
export default App;
