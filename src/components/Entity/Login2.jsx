import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css';
import './inscription.css';
import logo from './efianara.png';
import Navbar2 from './Navbar2';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { AuthService } from 'services/auth.service';

export const Login2 = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	const [error, setError] = useState(null);

	const signIn = async () => {
		const response = await axios
			.post('http://127.0.0.1:8000/api/login', {
				email,
				password,
			})
			.then(({ data }) => {
				AuthService().storeUser(data.user);
				console.log(data);
				if (data.user.role === 777) {
					history.push('/OrganisationListe');
				} else if (data.user.role === 756) {
					history.push('/EditeurListe');
				} else if (data.user.role === 755) {
					history.push('/CandidatureListe');
				} else {
					history.push('/lienParDefaut');
				}
			})
			.catch((e) => {
				setError(e.error);
			});
	};

	return (
		<div className='login-container'>
			<div className='login-box'>
				<img src={logo} alt='Logo' className='logo animated-logo' />
				<form>
					<div className='form-group'>
						<label htmlFor='email'>Email</label>
						<input
							type='text'
							id='email'
							name='email'
							placeholder='Entrez votre email'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Mot de passe</label>
						<input
							type='password'
							id='password'
							name='password'
							placeholder='Entrez votre mot de passe'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Form.Group controlId='formImageNif' className='button-group'>
						<Button variant='primary' onClick={signIn}>
							Se connecter
						</Button>
						<Button href='registration'>S'inscrire</Button>
					</Form.Group>
				</form>
				<div>
					{/* Votre formulaire et éléments d'interface utilisateur ici */}
					{error && <div>{error}</div>}
				</div>
			</div>
		</div>
	);
};
