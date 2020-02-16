import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import List from './components/List';
import Summary from './components/Summary';
import ToggleButtons from './components/ToggleButtons';
import { Container, Content } from './Main.styles';

function Main() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [view, setView] = useState('map');

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(json => {
        setItems(json);
        setIsLoaded(true);
      })
  }, [])

  if (!isLoaded) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <ToggleButtons view={view} setView={setView} />
      <Content>
        {view === 'map' && <Map />}
        {view === 'list' && <List />}
        {view === 'summary' && <Summary />}
      </Content>
      {/* <select>
        {items.map(item => (
          <option key={item.id}>
            {item.name}
          </option>
        ))}
      </select> */}
    </Container>
  );
}

export default Main;