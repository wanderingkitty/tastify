import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'

const LandingPage = () => {
	// Используем хуки для хранения значений и ошибок
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
	const navigate = useNavigate();


	// Функция для обработки отправки формы
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const newErrors: { username?: string; password?: string } = {};

		// Проверяем, что поля не пустые
		if (!username) {
			newErrors.username = 'Username field cannot be empty';
		}
		if (!password) {
			newErrors.password = 'Password field cannot be empty';
		}

		// Если есть ошибки, обновляем состояние с ошибками
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
		} else {
			// Если нет ошибок, можно продолжить отправку формы
			// Здесь можно добавить логику для реальной авторизации, например
			console.log('Form submitted');
			handleLogin();
		}
	};

	const handleLogin = () => {
		navigate('/homepage')
	}

	return (
		<main className="landing-page">
			<div className="logo-start">
				<h1>Tastify</h1>
				<p>Smart food. Smarter choices</p>
			</div>
			<div className="login-container">
				<div className="input-container">
					<div>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Username"
							className={errors.username ? 'input-error' : ''}
						/>
						{errors.username && <p className="error-message">{errors.username}</p>} {/* Сообщение об ошибке */}
					</div>
					<div>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
							className={errors.password ? 'input-error' : ''}
						/>
						{errors.password && <p className="error-message">{errors.password}</p>} {/* Сообщение об ошибке */}
					</div>
					<div>
						<button className="login-btn" onClick={handleSubmit}>LOGIN</button>
					</div>
					<div className="signup-container">
						<p>Don't have an account? Sign up here</p>
						<button className="sign-up-btn">SIGN UP</button>
					</div>
				</div>
			</div>
		</main>
	);
}

export default LandingPage;
