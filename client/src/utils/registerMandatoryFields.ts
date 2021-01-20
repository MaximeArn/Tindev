const mandatory = ["username", "email", "password", "confirmPassword"];

export default (name: string) => mandatory.includes(name);
