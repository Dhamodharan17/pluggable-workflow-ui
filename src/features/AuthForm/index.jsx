import { useState } from 'react';
import {AuthFormWrapper,Header,IconWrapper,SwitchButton,FooterLink} from './style.jsx'
import { Input, InputGroup, InputStatusText, SubmitButton, Checkbox, Label } from '../../components/form';
import { FaUser, FaLock, FaEnvelope, FaAngleRight } from 'react-icons/fa';
import { validatePassword, getPasswordStrength } from './passwordUtils.js';

const AuthForm = ({ title, isSignUp, onSubmit, error, isLoading, onSwitch }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [localError, setLocalError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocalError(null);

        if (isSignUp) {
            const { valid, error } = validatePassword(password);
            if(!valid) {
                setLocalError(error);
                return;
            }

            if (password !== confirmPassword) {
                setLocalError('Passwords do not match.');
                return;
            }

            onSubmit({email, password, username});

        } else {  // Login
            if (!email || !password) {
                setLocalError('Please enter email and password.');
                return;
            }
            onSubmit({ email, password });
        }
    };

    return (
        <AuthFormWrapper onSubmit={handleSubmit}>
            
            <Header>{title}</Header>

            {isSignUp && (
                <InputGroup>
                    <IconWrapper><FaUser /></IconWrapper>
                    <Input
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </InputGroup>
            )}

            <InputGroup>
                <IconWrapper><FaEnvelope /></IconWrapper>
                <Input
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required={isSignUp}
                />
            </InputGroup>

            <InputGroup>
                <IconWrapper><FaLock /></IconWrapper>
                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </InputGroup>

            {isSignUp && (
                <InputGroup>
                    <IconWrapper><FaLock /></IconWrapper>
                    <Input
                        placeholder="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </InputGroup>
            )}

            {!isSignUp && (
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '12px',
                    }}
                >
                    <div 
                        style={{
                            margin: '0',
                            padding: '0',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Checkbox id='remember-me' /><Label htmlFor='remember-me' display={"inline"}> Remember me </Label>
                    </div>
                    <FooterLink href="#">Forgot Password?</FooterLink>
                </div>
            )}

            <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? 'Loading...' : isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}
            </SubmitButton>

            <InputStatusText>{localError || error}</InputStatusText>

            <SwitchButton type="button" onClick={onSwitch}>
                {isSignUp ? 'Already a user? Log in' : 'New User? Sign Up'}
                <FaAngleRight style={{ marginLeft: '5px' }} />
            </SwitchButton>
        </AuthFormWrapper>
    );
};

export default AuthForm;