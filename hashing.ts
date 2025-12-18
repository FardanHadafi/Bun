const password = "Rahasia";
const passwordHash = await Bun.password.hash(password, {
    algorithm: "bcrypt",
    cost: 10,
});
const result = await Bun.password.verify("Rahasia", passwordHash, "bcrypt");
console.log(result);