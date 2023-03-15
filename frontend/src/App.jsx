import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Table from './components/Table/Table';
import Stats from './components/Stats/Stats';
import ActionButton from './components/ActionButton/ActionButton';

function App() {
  const [isTable, setIsTable] = useState(true);

  const TableView = (
    <>
      <Table />
      <ActionButton isAdding={true} />
    </>
  );

  const StatsView = <Stats />;

  return (
    <>
      <NavBar isTable={isTable} handleIsTable={setIsTable} />
      {isTable ? TableView : StatsView}
    </>
  );
}

export default App;
