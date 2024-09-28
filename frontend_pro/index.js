let company = {
    sales: [
        {
            name: 'John',
            salary: 1000
        },
        {
            name: 'Alice',
            salary: 600
        },
    ],
    development: {
        web: [
            {
                name: 'Peter',
                salary: 2000
            },
            {
                name: 'Alex',
                salary: 1800
            },
        ],
        internals: [
            {
                name: 'Jack',
                salary: 1300
            }
        ],
    },
    smm: [
        {
            name: 'Eugene',
            salary: 1000
        }
    ]
}

const countSalaries = (company) => {
    let sum = 0;

    for (let team in company) {
        if (Array.isArray(company[team])) {
            company[team].forEach((employee) => {
                sum += employee.salary;
            });
        } else {
            sum += countSalaries(company[team]);
        }
    }

    return sum;
}

const totalSalaries = countSalaries(company);
console.log(totalSalaries);
