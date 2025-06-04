export interface User {
    id: string;
    name: string;
    isAdmin: boolean;
}

export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN',
}