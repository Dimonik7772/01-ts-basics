function printUserInfo(name: string, age: number, email?: String): void {
   console.log("Name:", name);
   console.log("Age:", age);
   if (email) {
      console.log("Email:", email);
   }
}

printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");
