const users = [
    {
        name: "Salvio",
        income: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: "Marcio",
        income: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucia",
        income: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
];

function sumNumbers(numbers) {
    let sum = 0;

    for (number of numbers) {
        sum = sum + number //or sum += number
    }
    return sum
};

function calculateBalance(income, expenses) {
    const sumIncome = sumNumbers(income)
    const sumExpenses = sumNumbers(expenses)

    return sumIncome - sumExpenses
};

for (user of users) {
    const balance = calculateBalance(user.income, user.expenses)

    if (balance > 0) {
        console.log(` ${user.name} has POSITIVE balance of ${balance.toFixed(2)}`)
    } else {
        console.log(` ${user.name} has NEGATIVE balance of ${balance.toFixed(2)}`)
    }
};