class Email {

    static isValidEmail(email: string): boolean {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
}

console.log(Email.isValidEmail("example@domain.com")); 
console.log(Email.isValidEmail("invalid-email@domain")); 
console.log(Email.isValidEmail("another_example123@sub.domain.com")); 
console.log(Email.isValidEmail("invalid@.com")); 