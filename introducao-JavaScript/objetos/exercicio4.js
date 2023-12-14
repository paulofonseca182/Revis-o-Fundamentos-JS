const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
};

const addProperty = (object, key, value) => {
    if (typeof object[key] === "undefined") {
        object[key] = value;
    }
};


addProperty(customer, 'email', 'roberto@gmail.com')

addProperty(customer, 'fone', 'roberto@gmail.com')

addProperty(customer, 'userGithub', 'roberto-Github')

addProperty(customer, 'linkedIn', 'roberto-linkedin')

console.log(customer);