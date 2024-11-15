
interface product {
    name: string;
    price: number;
}

// Function to calculate total price
function calculateTotalPrice(products: product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

// Sample products
const products: product[] = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Headphones", price: 150 }
];

console.log("Total Price:", calculateTotalPrice(products)); 
function isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

console.log(isValidEmail("example@domain.com")); 
console.log(isValidEmail("invalid-email@domain")); 
console.log(isValidEmail("another_example123@sub.domain.com")); 
console.log(isValidEmail("invalid@.com")); 
