export class UsernameExistsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UsernameExistsError";
    Object.setPrototypeOf(this, UsernameExistsError.prototype);
  }
}
