export const personas: UserInfo[] = [
<<<<<<< HEAD
    { name: 'user 1', login: 'n7a7', password: 'B76' },
    { name: 'user 2', login: 'n7m', password: 'Churchill89!' },
    { name: 'user 3', login: 'user3@example.com', password: 'Pass7' },
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
export type Email = 'n7' | 'ni7m' | 'use7om';
=======
export type Email = 'n ' | ' dm' | 'd';
>>>>>>> f4587317c84a9df2d36c91acbd10b523e1375812
