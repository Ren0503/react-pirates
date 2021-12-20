import React from 'react'
import 'react-pirates/dist/index.css'
import ClickBox from './components/ClickBox';
import Modal from './components/Modal';
import RandomImage from './components/RandomImage'

const App = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div>
      <RandomImage />

      <div
        style={{
          height: '400vh', textAlign: 'center', paddingTop: 100,
          background: 'linear-gradient(to bottom, #1fa2ff, #12d8fa, #a6ffcb)'
        }}
      >
        <button onClick={() => setModalOpen(true)}>Open modal</button>
        {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
      </div>

      <ClickBox onClickInside={() => alert('click inside')} />
    </div>
  )
}

export default App
