export const personas: UserInfo[] = [
<<<<<<< HEAD
    { name: 'user 1', login: 'nlapuste@36eighttechnologies.com', password: 'Biserica89!' },
    { name: 'user 2', login: 'nic36eight@gmail.com', password: 'Churchill89!' },
    { name: 'user 3', login: 'user3@example.com', password: 'Password1' },
=======
    { name: 'user 1', login: 'n ', password: ' qw!' },
    { name: 'user 2', login: 'ni om', password: 'C!' },
    { name: 'user 3', login: 'u  m ', password: 'P ' },
>>>>>>> f4587317c84a9df2d36c91acbd10b523e1375812
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

<<<<<<< HEAD
export type Email = 'nlapuste@36eighttechnologies.com' | 'nic36eight@gmail.com' | 'user3@example.com';
=======
export type Email = 'n ' | ' dm' | 'd';
>>>>>>> f4587317c84a9df2d36c91acbd10b523e1375812
