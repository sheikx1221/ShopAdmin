interface LoginObject {
    Email: string,
    Password: string
}

interface SignUpObject {
    Email: string,
    Password: string,
    Username: string,
    Phone: string
}
interface Colors {
    primary: string,
    background: string,
    card: string,
    notification: string,
    text: string,
    border: string
}
export { LoginObject, SignUpObject, Colors};