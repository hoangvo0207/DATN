import React, { useRef, useState } from 'react';
import './register.scss';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleRegister = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/150545001_2211912815607337_523701711744111415_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=st8Wj-gtYJIAX_Hal61&_nc_ht=scontent.fdad3-4.fna&oh=8e879c8350d19b6b355c2dc90d6fd76f&oe=61A5EB7E"
                        alt="logo"
                    />
                    <button className="loginButton">
                        Sign In
                    </button>
                </div>
            </div>

            <div className="container">
                <h1>Unlimited movie, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                {
                    !email ? (
                        <div className="input">
                            <input type="email" placeholder="Email Address" ref={emailRef} />
                            <button
                                className="registerButton"
                                onClick={handleRegister}
                            >
                                Register
                            </button>
                        </div>
                    ) : (
                        <form className="input">
                            <input type="password" placeholder="Password" ref={passwordRef} />
                            <button
                                className="registerButton"
                                onClick={handleFinish}
                            >
                                Start
                            </button>
                        </form>
                    )
                }
            </div>
        </div>
    );
};

export default Register;