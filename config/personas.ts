export const personas: UserInfo[] = [
    { name: 'user 1', login: 'n ', password: ' qw!' },
    { name: 'user 2', login: 'nic36eight@gmnail.com', password: 'C!' },
    { name: 'user 3', login: 'u  m ', password: 'P ' },
];

const userLogins: string[] = personas.map((p: UserInfo): string => p.login);

export function user (login: Email | undefined): UserInfo | undefined {
    if (login === undefined) {
    // eslint-disable-next-line no-console
        console.warn(`User login is undefined. Available logins are: ${userLogins}.
    (You can optionnaly add to the testcafe command-line the option: --user=${userLogins[0]})`);
        return undefined;
    }
    const foundUser = personas.filter((p: UserInfo): boolean => p.login === login)[0];

    if (foundUser) 
        return foundUser;
  

    // eslint-disable-next-line no-console
    console.warn(`User login "${login}" is not found. Available logins are: ${userLogins}`);
    return undefined;
}
export interface UserInfo {
  name: string;
  login: Email;
  password?: string;
}

export type Email = 'n ' | ' dm' | 'd';
