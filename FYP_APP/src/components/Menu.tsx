import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote
} from '@ionic/react';
import { heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp } from 'ionicons/icons';
import { useLocation } from 'react-router-dom';
import { user } from '../pages/Login';
import './Menu.css';

function checkLogin() {
  if (user === null || user === "") {
    return (
      <IonContent></IonContent>
    )
  }
}


interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Home',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Site List',
    url: '/page/Site_List',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Login',
    url: '/page/Login',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Register',
    url: '/page/Register',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Add Site',
    url: '/page/Add_Site',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>{user}</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
