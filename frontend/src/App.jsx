import { useState } from 'react';
import Table from './components/Table/Table';
import StickyButton from './components/StickyButton/StickyButton';
import Modal from './components/Modal/Modal';

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
      <Modal open={openModal} handleClose={() => setOpenModal(false)} />
    </div>
  );
}

export default App;
