// src/pages/Login.jsx
import React, { useState } from 'react';
import { useFormik } from 'formik';
import google from '/googleicon.svg'; // Use absolute path from public
import facebook from '/facebookicon.svg'; // Use absolute path from public
import user from '/userIcon.svg'; // Use absolute path from public
import passwordHide from '/passwordIcon1.svg'; // Use absolute path from public
import passwordShow from '/passwordIcon2.svg'; // Use absolute path from public
import frame213 from '/frame213.svg'; // Use absolute path from public
import './Login.css'; // Ensure your CSS file path is correct



function Login() {
    const [showPass, setShowPass] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            try {
                console.log('Gönderilen değerler:', values);
            } catch (error) {
                console.error('Giriş hatası:', error);
                alert('Giriş başarısız. Lütfen tekrar deneyin.');
            }
        },
    });

    return (
        <div className="login">
            <div className="formWrapper">
                <form onSubmit={formik.handleSubmit}>
                    <div style={{ margin: '30% 10%' }}>
                        <p
                            style={{
                                fontFamily: 'Lobster',
                                fontWeight: 400,
                                fontSize: '48px',
                                lineHeight: '60px',
                                letterSpacing: '-4%',
                            }}
                        >
                            Welcome back,
                        </p>
                        <p
                            style={{
                                fontFamily: 'Rubik',
                                fontWeight: 800,
                                fontSize: '96px',
                                lineHeight: '60px',
                                letterSpacing: '-4%',
                                marginTop: '3rem',
                            }}
                        >
                            Asia
                        </p>
                        <div>
                            <label
                                htmlFor="email"
                                style={{
                                    fontFamily: 'Rubik',
                                    fontWeight: 600,
                                    fontSize: '24px',
                                    lineHeight: '28.44px',
                                    marginTop: '2rem',
                                    color: 'black',
                                }}
                            >
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Please enter a valid username."
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                style={{
                                    fontFamily: 'Rubik',
                                    fontWeight: 600,
                                    fontSize: '24px',
                                    lineHeight: '28.44px',
                                    marginTop: '1.2rem',
                                    color: 'black',
                                }}
                            >
                                Password:
                            </label>
                            <input
                                type={showPass ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="Please enter password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <label
                                    htmlFor="showPass"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setShowPass(!showPass)}
                                >
                                    Show Password
                                </label>
                            </div>
                            {showPass ? (
                                <img
                                    src={passwordShow}
                                    alt="password1"
                                    className="Icons"
                                />
                            ) : (
                                <img
                                    src={passwordHide}
                                    alt="password1"
                                    className="Icons"
                                />
                            )}

                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    margin: '10px 0%',
                                    height: '64px',
                                    textAlign: 'center',
                                    borderRadius: '30px',
                                    paddingLeft: '43%',
                                    paddingTop: '3px',
                                    gap: '8px',
                                    backgroundColor: '#004866',
                                    cursor: 'pointer',
                                    transition: 'background-color 300ms ease-in',
                                    color: '#FFFFFF',
                                    fontWeight: '600',
                                    fontSize: '32px',
                                }}
                            >
                                Login
                            </button>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '28px',
                                    color: '#004866',
                                    fontWeight: '700',
                                    fontSize: '30px',
                                    margin: '15px 0',
                                }}
                            >
                                <hr
                                    style={{ flex: 1, margin: '0 10px', borderColor: '#000' }}
                                />
                                <div>or</div>
                                <hr
                                    style={{ flex: 1, margin: '0 10px', borderColor: '#000' }}
                                />
                            </div>

                            <div className="socialMedia">
                                <span>
                                    <p>
                                        Navlink <img src={google} alt="googleIcon" />
                                    </p>
                                </span>
                                <span>
                                    <p>
                                        Navlink <img src={facebook} alt="facebookIcon" />
                                    </p>
                                </span>
                            </div>

                            <p className="goRegister">
                                Don’t have an account? <p>Navlink Register</p>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <img
                    className="image"
                    src={frame213}
                    alt="frame213-signUpPicture"
                />
            </div>
        </div>
    );
}

export default Login;
