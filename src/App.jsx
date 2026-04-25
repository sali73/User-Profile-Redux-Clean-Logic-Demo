import { useState, Suspense, lazy } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { UserForm } from './features/user/UserForm';
import './App.css'

const UserPreview = lazy(() => import('./features/user/UserPreview'));

function App() {

  return (
      <div className="App">
        <h1>Redux Logic + Lazy Load</h1>
        <UserForm />
        <Suspense fallback={<div>Loading Display...</div>}>
          <UserPreview />
        </Suspense>
      </div>
  )
}

export default App
