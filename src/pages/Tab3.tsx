import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, IonButton } from '@ionic/react';

const Tab3Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab Three</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton routerLink="/details">Go to details</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3Page;
