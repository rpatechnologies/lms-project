export interface LoginResponse {
    user: User
    tokens: Tokens
  }
  
  export interface User {
    firstName: string
    lastName: string
    fullName: string
    avatar: any
    dob: any
    about: any
    specialization: any
    role: string
    isEmailVerified: boolean
    isDeleted: boolean
    email: string
    id: string
  }
  
  export interface Tokens {
    access: Access
    refresh: Refresh
  }
  
  export interface Access {
    token: string
    expires: string
  }
  
  export interface Refresh {
    token: string
    expires: string
  }
  