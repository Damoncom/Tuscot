import React from 'react';
import { useState } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  // 默认通关的账户密码信息
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
    });
  }

  function handlePwdChange(e) {
    setInput({
      ...input,
      pwdInput: e.target.value,
    });
  }

  // submit按钮判断
  const navigate = useNavigate();

  function submit() {
    if (input.nameInput !== user.name) {
      return alert('Wrong name');
    }
    if (input.pwdInput !== user.password) {
      return alert('Wrong password');
    }
    return navigate('/Home/Dashboard');
  }

  return (
    <>
      <div className="bg">
        <div className="box">
          <div className="login">
            <div className="inputBox">
              <div className="nameBox">
                <p className="nameText">name:</p>
                <input
                  value={input.nameInput}
                  className="nameInput"
                  onChange={handleNameChange}
                />
              </div>
              <div className="pwdBox">
                <p className="pwdText">password:</p>
                <input
                  value={input.pwdInput}
                  type="password"
                  className="pwdInput"
                  onChange={handlePwdChange}
                />
              </div>
            </div>
          </div>
          <div className="submit" onClick={submit}>
            Login
          </div>
          <p className="tip">Tip: name:guest password:guest</p>
        </div>
      </div>
      <div className="blur" />
    </>
  );
}
