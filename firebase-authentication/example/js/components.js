const components = {};

components.register = `
  <div class='register-container'>
    <div class='form-wrapper'>
      <div class='logo'>
        <span>Techkids Chat</span>
      </div>

      <div class='form-container'>
        <form id='register-form'>
          <div class='name-wrapper'>
            <div class='input-wrapper'>
              <input class='input' type="text" name="firstName" placeholder="First name" />
              <div id='firstName-error' class='error'></div>
            </div>
            <div class='input-wrapper'>
              <input class='input' type="text" name="lastName" placeholder="Last name" />
              <div id='lastName-error' class='error'></div>
            </div>
          </div>
          <div class='input-wrapper'>
            <input class='input' type="email" name="email" placeholder="Email" />
            <div id='email-error' class='error'></div>
          </div>
          <div class='input-wrapper'>
            <input class='input' type="password" name="password" placeholder="Password" />
            <div id='password-error' class='error'></div>
          </div>
          <div class='input-wrapper'>
            <input class='input' type="password" name="confirmPassword" placeholder="Confirm password" />
            <div id='confirmPassword-error' class='error'></div>
          </div>
          <div class='input-wrapper register-footer'>
            <a id='already-have-account'>Already have an account? Login</a>
            <button class='btn' type='submit'>
              <span>Register</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
`;

components.login = `
  <div class='login-container'>
    <div class='form-wrapper'>
      <div class='logo'>
        <span>Techkids Chat</span>
      </div>

      <div class='form-container'>
        <form id='login-form'>
          <div class='input-wrapper'>
            <input class='input' type="email" name="email" placeholder="Email" />
            <div id='email-error' class='error'></div>
          </div>
          <div class='input-wrapper'>
            <input class='input' type="password" name="password" placeholder="Password" />
            <div id='password-error' class='error'></div>
          </div>
          <div class='input-wrapper login-footer'>
            <a id='create-an-account' class='login-register'>Create an account</a>
            <button class='btn' type='submit'>
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
`;