export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN',
}

export interface User {
    firstName: string
    lastName: string
    username: string
    id: string
    email: string
    password: string
    role: UserRole
}

export interface LoginUserRequest {
    username: string
    password: string
}