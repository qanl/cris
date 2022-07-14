export const environments: EnvInfo[] = [
    { name: 'QA', url: 'https://cris-web-int.36eighttechnologies.com/#' },
    { name: 'DEV', url: 'https://cris-web-dev.36eighttechnologies.com/#' },
    { name: 'UAT', url: 'https://cris-web-uat.36eighttechnologies.com/#' },
    { name: 'PROD', url: 'https://cris-web.36eighttechnologies.com/#' },
    { name: 'ADM', url: 'https://cris-admin-qa.36eighttechnologies.com/#/' },
    { name: 'CAN', url: 'https://crisrec-web.azurewebsites.net' }
];

const envNames: string[] = environments.map((e: EnvInfo): string => e.name);

export function env (name: TargetEnvironnement | undefined): EnvInfo | undefined {
    if (name === undefined) {
    // eslint-disable-next-line no-console
        console.warn(`Environment name is undefined. Available environments are: ${envNames}.
      (You can optionnaly add to the testcafe command-line the option: --env=${envNames[0]})`);
        return undefined;
    }
    const foundEnvironment = environments.filter((e: EnvInfo): boolean => e.name === name)[0];

    if (foundEnvironment) 
        return foundEnvironment;
  

    // eslint-disable-next-line no-console
    console.warn(`Environment "${name}" is not found. Available environments are: ${envNames}`);
    return undefined;
}

export interface EnvInfo {
  name: TargetEnvironnement;
  url: string;
}
export type TargetEnvironnement = 'any' | 'QA' | 'DEV' | 'UAT' | 'PROD' | 'ADM'| 'CAN';
