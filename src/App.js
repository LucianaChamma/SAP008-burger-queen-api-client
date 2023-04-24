import hbIMG from './assets/hamburguer.png'

import './styles.css'
function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem-vindo!</span>
            <span className="login-form-title">
              <img src={hbIMG} alt="logo hamburguer" ></img>
            </span>
            <div className='wrap-input'>
              <input className='input'type='email'></input>
              <span className='focus-input' data-placeholder='Email'></span>

              <div className='wrap-input'>
                <input className='input' type='password'></input>
                <span className='focus-input' data-placeholder='Password'></span>
              </div>
              <div className='container-login-form-btn'>
                <button className='login-form-btn'>Login</button>
                <div className='text-center'>
                  <span className='txt1'>Não possui uma conta? </span>
                  <a classeName="txt2" href='#'>Criar conta</a>
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
