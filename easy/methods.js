const arr = [1, 2, 3]
const arr22 = [6, 7, 8]
const comb = [0, ...arr, 99, ...arr22][0, 1, 2, 3, 99, 6, 7, 8]
function some(x, ...rest)

const checkArr = arr != null ? arr : arr22;
const checkArr1 = arr ?? arr22;

const obj = { name: 'Tom', age: 25 }
obj?.name ? ?? 'Not value'
obj && someFunc()


const arr = [1, 2, 3, 4, 5]
const arr1 = [a, b, c, d, e, f]
const arr2 = new Array(5).fill(0) // [0.0.0.0.0.]

arr.includes(3) // true
arr.indexOf(3)// 2
arr.splice(1, 2) // [1,4,5] start, num of el to delete 
arr.splice(0, 1, 'replacetext')
arr.slice(1, 3)// [2,3] begin end 
arr.concat(['a', 'b'])// [1, 2, 3, 4, 5, 'a','b']
arr.reverse()
arr.join('.')// 1.2.3.4.5 to string
for (const el of arr)
    arr.forEach((valeu, index, array) => { })
arr.map((value, index, array) => { return () })
arr.filter((value, index, array) => { return () })// new
arr.find((value, index, array) => { return () }) // new
arr.findIndex((value, index, array) => { return () })
arr.every((value, index, array) => { return () }) // true
arr.some((value, index, array) => { return () }) // true
arr.reduce((accum, currVal, ind, ar) => { return (accum + currVal) }, 0) // true
arr.reduceRight((accum, currVal, ind, ar) => { return (accum - currVal) }) // true
arr.sort((a, b) => { return (a - b) });

console.log(arr)
const myKey = arraKey
const obj = { name: 'Tom', age: 25, mail: 'tom@mail.com', [myKey]: [1, 2, 3] }
const newObj = { foo: 'bar', __proto__: obj } //inherited obj
console.log('name' in obj) // true 
obj.hasOwnProperty('name') // true
obj.method12() // obj function()
obj.toString()// [object object]
Object.keys(obj) // ['name', 'age', 'mail']
Object.values(obj) // ['Tom', 25, 'tom@mail.com']
Object.entries(obj) // [['name', 'Tom'], ['age', '25']]
Object.entries(obj).forEach(val => { console.log(val) })// ['name', 'Tom'], ['age', '25']
Object.entries(obj).forEach(([key, val]) => { console.log(key, val) })// name Tom, age 25
for (key in obj) { key } // name, age,mail
Object.assign(newObj, obj) //copy to newObj from obj
Object.freeze(obj) // not change
Object.seal(obj)// can change, not add new

// <script src = 'script.js' defer ></script>
// <script src='script.js' async></script>
document.getElementById('name')
document.getElementsByClassName('name')//HTMLCollection 
Array.from(list).forEach(li => { do some})
document.querySelector('li') // first li
const list = document.querySelectorAll('li') // all li NodeList[li, li ,li]
Array.from(list).map(li => { do some})
list[0].style.backgroundColor = 'red';
list[0].textContent = 'dd';
list[0].value = 5;
list[0].setAttribute('value', '7');
list[0].setAttribute('class', 'blue some');
list[0].classList.remove('name')
list[0].classList.add('name', 'some')
list[0].classList.toggle('name')
list[0].classList = 'name some';

const p = document.createElement('p');
p.textContent = 'some';
document.body.append(p, 'text')
document.body.appendChild(p)
p.innerHTML = 's'
p.innerText = 's'
p.parentNode.removeChild(list[0])
list[0].remove();

window.innerWidth();
window.innerWidth();
window.getComputedStyle(list[0].fontSize)



