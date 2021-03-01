import { IonButtons, IonContent, IonHeader, IonInput, IonButton, IonList, IonMenuButton, IonPage, IonItem, IonTitle, IonToolbar, IonLoading } from '@ionic/react'
import './styles.css'
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from "react"
import { toast } from '../../toast'
import { registerUser } from '../../firebaseConfig'

const Register: React.FC = () => {

	const [busy, setBusy] = useState<boolean>(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [cpassword, setCPassword] = useState('')
	const history = useHistory()

	async function register() {
		
		// setBusy(true)
		// Validation
		if(password !== cpassword) {
			return toast('Passwords do not match')
		}
		if(email === '' || password === '') {
			return toast('Username and password are required')
		}

		const res = await registerUser(email!, password!)
		if(res) {
			toast('Registration successful')
			history.push('/page/Login')
		}
		// setBusy(false)
	}
	
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Register</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonLoading message="Registering your details" duration={0} isOpen={busy} />

			<IonContent fullscreen>

				<IonList>
					
					<IonItem>
						<IonInput placeholder="Email" type="email" required onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
					</IonItem>

					<IonItem>
						<IonInput placeholder="Password" type="password" required onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
					</IonItem>
					
					<IonItem>
						<IonInput placeholder="Confirm Password" type="password" required onIonChange={(e: any) => setCPassword(e.target.value)}></IonInput>
					</IonItem>
				
				</IonList>

				<IonButton class="register-button" color="primary" expand="full" shape="round" onClick={register}>Register</IonButton>
				<p>Already have an account? <Link to="/page/Login">Login</Link></p>

			</IonContent>

		</IonPage>
	);
};

export default Register;
