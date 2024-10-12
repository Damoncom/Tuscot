import React from 'react';
import { useState } from 'react';
import './index.scss';

export default function Login() {
  const [user, setUser] = useState({
    name: 'guest',
    password: 'guest',
  });

  const [input, setInput] = useState({
    nameInput: '',
    pwdInput: '',
  });

  function handleNameChange(e) {
    setInput({
      ...input,
      nameInput: e.target.value,
      pwdInput: e.target.value,
    });
  }

  function handlePwdChange(e) {
    setInput({
      ...input,
      pwdInput: e.target.value,
    });
  }

  function submit() {}

  return (
    <>
      <div className="bg">
        <div className="box">
          <div className="login">
            <div className="inputBox">
              <div className="nameBox">
                <p>name:</p>
                <input
                  value={input.nameInput}
                  className="nameInput"
                  onChange={handleNameChange}
                />
              </div>
              <div className="pwdBox">
                <p>password:</p>
                <input
                  value={input.pwdInput}
                  className="pwdInput"
                  onChange={handlePwdChange}
                />
              </div>
            </div>
          </div>
          <div className="submit" onClick={submit}>
            Login
          </div>
        </div>
      </div>
      <div className="blur" />
    </>
  );
}
