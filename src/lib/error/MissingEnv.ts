export default class MissingEnv extends Error {
    constructor(varName: string, options?: ErrorOptions) {
        super(`Missing environment variable: ${varName}`, options)
    }
}