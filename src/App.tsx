import { RouterProvider } from 'react-router-dom'
import Router from './Router'

function App() {

  return (
    <div className='p-4'>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App