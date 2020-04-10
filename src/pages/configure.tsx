import React from 'react';
import * as msTeams from '@microsoft/teams-js';

export default function Configure() {
  msTeams.settings.registerOnSaveHandler(saveEvent => {
    msTeams.settings.setSettings({
      contentUrl: window.location.origin,
      entityId: window.location.origin
    });

    saveEvent.notifySuccess();
  });
  msTeams.settings.setValidityState(true);

  return (
    <h1>Configure</h1>
  );
}