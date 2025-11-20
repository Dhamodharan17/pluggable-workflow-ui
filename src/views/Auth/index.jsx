import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/AuthForm/authSlice';
import { FaUser } from 'react-icons/fa';
import {FlipContainer, FlipCard, ProfileIconPlaceholder, CardFace, CardFaceBack} from './style.jsx';
import AuthForm from '../../features/AuthForm/index.jsx';
import ThemeToggler from '../../features/ThemeToggler';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const dispatch = useDispatch(); // for login 
    const navigate = useNavigate(); // for navigating on successful login
    const { loading, error, user } = useSelector((state) => state.auth);

    const handleSwitch = () => setIsFlipped((prev) => !prev);

    const handleLogin = ({ email, password }) => {
        // dispatch(loginUser({ email, password }));   Login logic
        dispatch(login({email, password}))

    };
    const handleSignIn = ({email, password, username}) => {
        // Signin logic
    }

    useEffect(() => {
        if (user) {
            console.log('User logged in');
            navigate("/");  // navigate to home ("/")
        }
    }, [user]);

    return (
        <FlipContainer>
            <FlipCard $isFlipped={isFlipped}>
                <ProfileIconPlaceholder><FaUser /></ProfileIconPlaceholder>
                {!isFlipped ? 
                <CardFace $isFlipped={isFlipped}>
                    <AuthForm
                        title="LOGIN"
                        isSignUp={false}
                        onSubmit={handleLogin}
                        error={error}
                        isLoading={loading}
                        onSwitch={handleSwitch}
                    />
                </CardFace>
                : 
                <CardFaceBack $isFlipped={isFlipped}>
                    <AuthForm
                        title="SIGN UP"
                        isSignUp={true}
                        onSubmit={handleSignIn}
                        error={null}
                        isLoading={false}
                        onSwitch={handleSwitch}
                    />
                </CardFaceBack>
                }
            </FlipCard>
        </FlipContainer>
    );
};

export default AuthPage;
