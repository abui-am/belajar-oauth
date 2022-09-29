import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';

function App() {
  console.log(window.location.href);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          onFailure={() => {}}
        />
        {/* <a
          className='App-link'
          href={`http://accounts.google.com/o/oauth2/v2/auth?scope=openid+profile+email&response_type=token&state=&redirect_uri=${window.location.href}login-google&client_id=${clientId}`}
        >
          Login with Google
        </a> */}
      </header>
    </div>
  );
}

export default App;
