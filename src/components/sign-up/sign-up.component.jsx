import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';
import SignIn from '../sign-in/sign-in.component';

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='title'>
				<h2>I dont have an account</h2>
				<span>Sign Up with your email and password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={email}
						onChanage={this.handleChange}
						label='Display Name'
						required
                    />
                    <FormInput
						type='email'
						name='email'
						value={displayName}
						onChanage={this.handleChange}
						label='Email'
						required
                    />
                    <FormInput
						type='password'
						name='password'
						value={password}
						onChanage={this.handleChange}
						label='password Name'
						required
                    />
                    <FormInput
						type='password'
						name='Confirm password'
						value={confirmPassword}
						onChanage={this.handleChange}
						label='Confirm Password'
						required
                    />
                    <CustomButton type='submit'> SIGN UP </CustomButton>
				</form>
			</div>
		)
	}
}

export default SignIn;