export type SignInInput = {
    email: string
}
export type AnswerCustomChallengeInput = {
    answer: string
}
export type SignUpInput = {
    name: string
    email: string
}
export type ConfirmSignUpInput = {
    email: string
    code: string
}
export type ResendSignUpInput = {
    email: string
}
export type ForgotPasswordInput = {
    email: string
}
export type ResetPasswordInput = {
    email: string
    code: string
    password: string
}
