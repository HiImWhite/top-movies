import { useState } from 'react';
import Table from './components/Table/Table';
import StickyButton from './components/StickyButton/StickyButton';
import Form from './components/Form/Form';

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
        <Form />
      </div>

  );
}

export default App;
