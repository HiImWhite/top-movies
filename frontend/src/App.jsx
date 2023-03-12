import Table from './components/Table/Table';
import StickyButton from './components/StickyButton/StickyButton';
import styles from './App.module.css';
import { useState } from 'react';
import Stats from './components/Stats/Stats';

function App() {
  const [isTable, setIsTable] = useState(false);

  const SelectedTable = {
    backgroundColor: isTable ? "#BBBBBB" : "#777777"
  };

  const SelectedStats = {
    backgroundColor: isTable ? "#777777" : "#BBBBBB"
  };

  return (
    <div>
      <div className={styles.Navbar}>
        <ul className={styles.List}>
          <li style={SelectedTable} onClick={() => {setIsTable(true)}}>Table</li>
          <li style={SelectedStats} onClick={() => {setIsTable(false)}}>Stats</li>
        </ul>
      </div>
      {
        isTable ?
        <>
          <Table />
          <StickyButton />
        </>
        :
        <>
          <Stats />
        </>
      }
    </div>
  );
}

export default App;
