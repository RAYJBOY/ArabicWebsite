export interface User {
    username: string
    id: string
    email: string
    password: string
}

export interface LoginUserRequest {
    username: string
    password: string
}