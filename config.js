import minimist from 'minimist';

require('dotenv').config();

const args = minimist(process.argv.slice(1));

const environment = args.env;

// const featureFlagsArgs = args.features ? args.features.split(' ') : undefined;

export const baseUrl = () => {
    if (environment === '' || environment === undefined || environment === 'QA')
        return 'https://cris-web-int.36eighttechnologies.com/#';

    if (environment === 'UAT')
        return 'https://cris-web-uat.36eighttechnologies.com/#';

    if (environment === 'DEV')
        return 'https://cris-web-dev.36eighttechnologies.com';

    if (environment === 'CANN') return 'https://crisrec-web.azurewebsites.net';

    if (environment === 'ADM')
        return 'https://cris-admin-qa.36eighttechnologies.com';

    return environment; // for passing custom url
};

export const username = 'nlapuste@36eighttechnologies.com';
export const password = 'Biserica89!';
