import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';

import Header from '../header/header';

import {login} from '../../store/api-actions';

import {AppRoute} from '../../constants';
import {LOGIN_TYPES} from '../types';

const Login = ({onSubmit}) => {
  const history = useHistory();
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      passwordRef: passwordRef.current.value,
    });

    history.push(AppRoute.MAIN);
  };

  return (
    <>
      <div className="page page--gray page--login">
        <Header/>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    ref={loginRef}
                    className="login__input form__input"
                    type="email" name="email"
                    placeholder="Email" required=""/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    ref={passwordRef}
                    className="login__input form__input"
                    type="password" name="password"
                    placeholder="Password" required=""/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.MAIN}>
                  <span>Amsterdam</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

Login.propTypes = LOGIN_TYPES;

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export default connect(null, mapDispatchToProps)(Login);
