import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './styles.css';

const Login: React.FC = () => {
	
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Login</IonTitle>
				</IonToolbar>
			</IonHeader>
			
			<IonContent fullscreen>
				
			</IonContent>

	 	</IonPage>
  	);
};

export default Login;
