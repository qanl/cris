import { Config } from './config.interface';
import { env } from './environments';
import { user } from './personas';


export const defaultConfig: Config = {
    env:        env('QA'),
    showConfig: false,
    testSpeed:  1.0,
    timeout:    {
        longTimeout:  30000,
        shortTimeout: 5000,
        // insert your custom timeouts here
        ...{ 'on-waiting-remote-server-response': 180000 },
        ...{ 'on-waiting-custom-event': 5000 },
    },
    user: user('nlapuste@36eighttechnologies.com'),
};
