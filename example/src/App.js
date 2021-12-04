import React from 'react'

import { ExampleComponent } from 'react-pirates'
import 'react-pirates/dist/index.css'
import { useAsync } from 'react-pirates'

const App = () => {
  const imgFetch = useAsync(url =>
    fetch(url).then(response => response.json())
  );

  return (
    <div>
      <button
        onClick={() => imgFetch.run('https://dog.ceo/api/breeds/image/random')}
        disabled={imgFetch.isLoading}
      >
        Load image
      </button>
      <br />
      {imgFetch.loading && <div>Loading...</div>}
      {imgFetch.error && <div>Error {imgFetch.error}</div>}
      {imgFetch.value && (
        <img
          src={imgFetch.value.message}
          alt="avatar"
          width={400}
          height="auto"
        />
      )}
    </div>
  );
}

export default App
