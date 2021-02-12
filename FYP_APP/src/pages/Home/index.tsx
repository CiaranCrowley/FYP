import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useParams } from 'react-router';
// import ExploreContainer from '../../components/ExploreContainer';
import './styles.css';

const Home: React.FC = () => {
	
	const { name } = useParams<{ name: string; }>();
	
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />{/* Remove this towards end of development.  Dont want users to have access to menu options unless they are logged in */}
					</IonButtons>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			
			<IonContent fullscreen>

			<IonButton class="login-button-col" color="primary" expand="full" shape="round" routerLink="/page/Login">Login</IonButton>
			<IonButton class="register-button-col" color="secondary" expand="full" shape="round" routerLink="/page/Register">Register</IonButton>

			</IonContent>

		</IonPage>
  	);
};

export default Home;
