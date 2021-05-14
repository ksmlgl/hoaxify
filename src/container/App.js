
import React from 'react'
import ApiProgress from '../shared/ApiProgress'
import UserSignUpPage from '../pages/UserSignUpPage'
import LoginPage from '../pages/LoginPage'
import LanguageSelector from '../components/LanguageSelector'
import HomePage from '../pages/HomePage'
import UserPage from '../pages/UserPage'


function App() {
  return (
  
      <div className="row">
        <UserPage/>
      <LanguageSelector/>
      </div>

  );
}

export default App;
