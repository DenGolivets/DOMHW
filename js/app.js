// 1

const ul = document.querySelector('ul');
const removeItem1 = ul.querySelectorAll('li')[2];
const removeItem2 = ul.querySelectorAll('li')[4];
ul.removeChild(removeItem1);
ul.removeChild(removeItem2);

//  2

const liStyle = document.querySelectorAll('li');
const ulStyle = document.querySelector('ul');

for (let i = 0; i < liStyle.length; i++) {
    liStyle[i].classList.add('listItem')
}
for (let i = 0; i < ulStyle.length; i++) {
    ulStyle[i].classList.add('list')
}

//  3

const newLi = document.createElement('li');
newLi.textContent = 'Bugatti';
ul.prepend(newLi);
newLi.classList.add('listItem');

//  4

const newLi2 = document.createElement('li');
newLi2.textContent = 'Ford';
ul.append(newLi2);
newLi2.classList.add('listItem');

//  5

const form = document.querySelector('form');
const firstName = document.createElement('input');
const lastName = document.createElement('input');
const password = document.createElement ('input');
const confirmPass = document.createElement('input');

firstName.setAttribute('type', 'text');
lastName.setAttribute('type', 'text');
password.setAttribute('type', 'password');
confirmPass.setAttribute('type', 'password');

firstName.placeholder = 'First Name';
lastName.placeholder = 'Second Name';
password.placeholder = 'Password';
confirmPass.placeholder = 'Confirm Password';

const br = document.createElement('br');
const br2 = document.createElement('br');
const br3 = document.createElement('br');
const br4 = document.createElement('br');

form.append(br4);
form.append('Name:', firstName);
form.append(br);
form.append('Last Name:', lastName);
form.append(br2);
form.append('Password:', password);
form.append(br3);
form.append('Confirm password:', confirmPass);

//   6

const image = document.createElement('img');
image.src = 'https://www.wetzelcountyschools.com/cms/lib/WV01000015/Centricity/Domain/957/Form-Button.png';
document.querySelector('form').prepend(image);

//  7

const bold = document.querySelector('.bold');
bold.classList.remove('red', 'italic');

//   8

const div = document.createElement('div');
document.body.prepend(div);
div.innerHTML = '<h1>This is h1 tag!</h1>'

//   9

const h1 = document.querySelector('h1');
h1.style.color = 'blue';
h1.style.fontSize = '40px';
