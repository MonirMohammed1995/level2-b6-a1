function formatValue(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  return !value;
}


function getLength(value: string | any[]) {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
}


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}


type Item = {
  title: string;
  rating: number;
};
function filterByRating(items: Item[]): Item[] {
  const result: Item[] = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].rating >= 4) {
      result.push(items[i]);
    }
  }
  return result;
}


type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  const activeUsers: User[] = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].isActive) {
      activeUsers.push(users[i]);
    }
  }

  return activeUsers;
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book) {
  let availableText = book.isAvailable ? "Yes" : "No";
  console.log(
    "Title: " + book.title +
    ", Author: " + book.author +
    ", Published: " + book.publishedYear +
    ", Available: " + availableText
  );
}


function getUniqueValues(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
  const combined: (number | string)[] = [];
  
  for (let i = 0; i < arr1.length; i++) {
    if (!combined.includes(arr1[i])) {
      combined.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!combined.includes(arr2[i])) {
      combined.push(arr2[i]);
    }
  }

  return combined;
}


type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    let productPrice = product.price * product.quantity;

    if (product.discount) {
      productPrice = productPrice - (productPrice * product.discount) / 100;
    }

    return total + productPrice;
  }, 0);
}