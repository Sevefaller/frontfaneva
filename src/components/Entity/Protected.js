import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthService } from 'services/auth.service';
function Login(props) {
	let Cmp = props.Cmp;
	console.log(AuthService().user());
	useEffect(() => {
		if (!AuthService().user()) {
			history.push('./login');
		}
	}, []);
	const history = useHistory();

	return (
		<div>
			<Cmp />
		</div>
	);
}

export default Login;
