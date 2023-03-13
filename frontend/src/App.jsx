import Table from './components/Table/Table';
import StickyButton from './components/StickyButton/StickyButton';
import styles from './App.module.css';
import { useState } from 'react';
import Stats from './components/Stats/Stats';

function App() {
  const [isTable, setIsTable] = useState(true);

  const colors = {
    active: "#BBBBBB",
    inActive: "#777777",
  }

  const SelectedTable = {
    backgroundColor: isTable ? colors.active : colors.inActive
  };

  const SelectedStats = {
    backgroundColor: isTable ? colors.inActive : colors.active
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
