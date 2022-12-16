/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

const name = 'Javier Razo';
const email = 'javier.razo1221@gmail.com';
const languages = ["html", "css", "javascript", "java", "sql"];



// TODOne: rewrite the object literal using object property shorthand
users.push({
  name,
  email,
  languages
});

// TODOne: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODOne: rewrite the following using arrow functions
users.forEach(({email}) => emails.push(email));
users.forEach(user => names.push(user.name));

// console.log(emails);

// TODOne: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(({ name, email, languages }) => {
  // TODOne: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // TODOne: rewrite the assignment below to use template strings
  developers.push(`${name}'s email is ${email} ${name} knows ${languages.join(', ')}.`);
});


// TODOne: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
for(let developer of developers) {
  // TODO: rewrite the assignment below to use template strings
  list += `<li>${developer}</li>`;
}
list += '</ul>';

document.getElementById("go-here").innerHTML = list;