require('dotenv').config();
import minimist from 'minimist';

const args = minimist(process.argv.slice(1));

const environment = args.env;


// const featureFlagsArgs = args.features ? args.features.split(' ') : undefined;

export const baseUrl = () => {
    if (environment === '' || environment === undefined || environment === 'QA') {

        return 'https://cris-web-int.36eighttechnologies.com/#/home';
    }
    if (environment === 'UAT')
        return 'https://cris-web-uat.36eighttechnologies.com/#/home';

    if (environment === 'DEV')
        return 'ttps://cris-web-dev.36eighttechnologies.com/#/home';


    return environment; // for passing custom url
};

export const user = 'nlapuste@36eighttechnologies.com';
export const pwd = 'Biserica89!';

