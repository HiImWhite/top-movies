import { useState } from 'react';
import Table from './components/Table/Table';
import StickyButton from './components/StickyButton/StickyButton';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
      <div className='App'>
        <Table />
        <StickyButton
          handleOpen={() => {
            setOpenModal(true);
          }}
        />
      </div>

  );
}

export default App;
