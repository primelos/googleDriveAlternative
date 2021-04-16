import React from 'react'
import SignUp from './component/SignUp'
import { Container } from 'react-bootstrap'
import {AuthProvider}  from '../src/context/AuthContext'


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
          <div className='w-100' style={{ maxWidth: '400px' }}>
            <SignUp />
          </div>
        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
