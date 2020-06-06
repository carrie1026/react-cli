import {getEnv, getClientVersion} from '@utils/util';

window.ZM_JSSDK && window.ZM_JSSDK.setConfig({
    environment: getEnv(),
    logLevel: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
    history: true
});

window.ZM_JSSDK && window.ZM_JSSDK.setDefaults({
    appId: '11699',
    appVersion: getClientVersion()
});

window.sendEvent = (eventId,eventType,eventParam) => {
    window.ZM_JSSDK && window.ZM_JSSDK.sendEvent({
      eventType: eventType,
      eventId: eventId,
      eventParam:JSON.stringify(eventParam)
    });
}
