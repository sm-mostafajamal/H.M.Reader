import { RouterProvider } from 'react-router-dom'
import Router from './Router'

function App() {

  return (
    <div className='bg-black p-4'>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App