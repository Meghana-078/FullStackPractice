/**let linkedin={
    name:"Meghana",
    connection:10,
    phonenumber:7815971050,
    email:"meghanakulala@gmail.com"
}
console.log(linkedin["name"])
linkedin["connection"]=linkedin["connection"]+100000;
console.log(linkedin["connection"])

let n=10
let m=20

console.log("n + m =",n+m)

let a=10
let b="10"
console.log(typeof(b))
console.log(a==b)
let name1=prompt("enter your name:")
let age=prompt("enter your age:")
if(age>18){
    console.log(name1,"your age is",age,"you are eligible to Vote")
}
else{
    console.log(name1,"your age is",age,"you are not eligible to Vote")

}

let age=prompt("enter your age:")
price=200
if(age>=3 && age<=5){
    console.log(`Your age is ${age} and ticket price is${price/2}`)
}
else{
    console.log("Full Ticket",price)
}

let n=prompt("Enter Number:")
if(n%5==0){
    console.log(`The number is ${n} and it is multiple 0f 5`)
}
else{
    console.log(`The number is ${n} and it is not multiple of 5`)
}


let marks=prompt("Enter your marks:")
if(marks>=90 && marks<=100){
    console.log(`You have Secured ${marks} marks and your grade is A`)
}
else if(marks>=80 && marks<=89){
    console.log(`You have Secured ${marks} marks and your grade is B`)
}
else if(marks>=70 && marks<=79){
    console.log(`You have Secured ${marks} marks and your grade is C`)
}
else if(marks>=60 && marks<=69){
    console.log(`You have Secured ${marks} marks and your grade is D`)
}
else if(marks>=50 && marks<=59){
    console.log(`You have Secured ${marks} marks and your grade is E`)
}
else{
    console.log(`You have Secured ${marks} marks and your grade is F`)
}

let color=prompt("Enter color")
if(color=="light"){
    console.log("White")
}
else if(color=="dark"){
    console.log("Black")
}
else{
    console.log("Invalid Choice")
}
let a=0
for(let i=0;i<=100;i++){
    a+=i
}
console.log(a)

let n=prompt("Enter Number:")
let sum=0
for(let i=0;i<=n;i++){
    sum+=i
}
console.log(sum)

let n="Meghana"
for(let i=0;i<=10;i++){
    console.log(i)
    console.log(n)
}

let n=prompt("Enter number:")
let i=0
while(i<=10){
    if(i%2==0){
        console.log(`Meghana ${i}`)
    }
    i++
}

let n=prompt("enter number:")
let i=1
do{
    console.log(`Meghana ${i}`)
    i++
}while(i<=4)
let n=prompt("enter number:")
let i=0
do{
    if(i%2==0){
        console.log(`Meghana ${i}`)
    }
    i++
}while(i<=n)

let n=prompt("Enter Number")
for(let i=1;i<=10;i++){
    console.log(`${n} X ${i} = ${n*i}`)
}


let n=prompt("Enter Number")
let i=1
do{
    console.log(`${n} X ${i} = ${n*i}`)
    i++
}while(i<=10)

let n=prompt("Enter Number")
let i=1
while(i<=10){
    console.log(`${n} X ${i} = ${n*i}`)
    i++
}

let name=prompt("Enter name:")
let c=0
for(let i in name){
    c++ 
}
console.log(c)

let name=prompt("Enter name:")
for(let i of name){
    console.log(i)
}

let name={
    name:"Meghana",
    age:19,
    Place:"Tirupati",
}
for(let i in name){
    console.log(i,name[i])
}

let s=7
while(1,){
    let n=prompt("Enter number")
    if(n==s){
        console.log("Congratulations")
        break
    }
}

let str="Meghana"
console.log(str.replace("ghana","jdgh"))*

let name=prompt("Enter name")
c=0
for(i in name){
    c++
}
console.log(`${'@'}${name}${c}`)

let cst_stu=["Meghana","Vyshnavi","Navya","Noushin"]
cst_stu.splice(0,0,"Sandy")
console.log(cst_stu)
cst_stu.push("Bhavya")
console.log(cst_stu)
console.log(cst_stu.indexOf("Meghana"))
console.log(cst_stu.includes("Sandy"))
console.log(cst_stu.sort())
console.log(cst_stu.reverse())

let array=[10,20,30,40,50,60,70]
console.log(array.slice(3,5))

let array=[10,20,30,40,50,60,70]
for(i in array){
    array[i]=array[i]*2
}
console.log(array)

let array=[10,20,30,40,50,60,70]
array.reverse()
console.log(array[1])

let array=[1,2,3,5,3,3,2,2,5,6,6,7,7,88,88,96]
let newarr=[]
for(let i in array){
    if(newarr.indexOf(array[i])==-1){
        newarr.push(array[i])
    }
}
console.log(newarr)

function greet(){
    console.log("Welcome")
}

greet()

function square(n){
    return n**2
}

console.log(square(20))

function greet(g){
    console.log(n)
}
let n="Hi , How Are You"
greet()

arr=['RCB','SRH','MI','DC','GT','KKR','RR','LSG','PBKS','CSK']
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        console.log(`${arr[i]} VS ${arr[j]}`)
    }
}

function isprime(inp){
    if(inp<=1){
        return false
    }
    for(let i=2;i<inp;i++){
        if(inp%i==0){
            return false
        }
    }
    return true
}
function nearestprime(inp){
    let lower=inp-1
    let upper=inp+1
    while(true){
        if(isprime(upper)){
            return upper
        }
        if(isprime(lower)){
            return lower
        }
        lower--
        upper++
    }
}
let inp=parseInt(prompt("Enter Number:"))
if(console.log(isprime(inp))=="true"){
    console.log(`${inp} is a prime number`)
}
else{
    console.log(`${nearestprime(inp)} is a nearest prime number of ${inp}`)
}


function fibonaci(num){
    let a=0
    let b=1
    let next=0
    console.log(`${next}`)
    for(let i=0;i<=num;i++){
        next=a+b
        console.log(`${next}`)
        a=b
        b=next
    }
}

fibonaci(num)



function leap(num){
    if((num%4==0 && num%100!=0 )|| num%400==0){
        console.log(`${num} is a leap year`)
    }
    else{
        console.log(`${num} is not leap year`)
    }
}
num=parseInt(prompt("Enter year"))
leap(num)
function fact(n){
    let f=1
    for(let i=1;i<=num;i++){
        f*=i
    }
    return f
}
num=parseInt(prompt("Enter a number"))
let  t=num
let sum=0
while(num!=0){
    let d=num%10
    sum=sum+fact(d)
    num=Math.floor(num/10)
}
if(sum==t){
    console.log(`${t} is a strong number`)
}
else{
    console.log(`${t} is not a strong number`)
}


num=parseInt(prompt("Enter number:"))
let t=num
function arm(num){
    let sum=0
    while(num!=0){
        let d=num%10
        sum=sum+Math.pow(d,String(t).length)
        num=Math.floor(num/10)
    }
    return sum
}
if(arm(num)==t){
    console.log(`${t} is a armstrong number`)
}
else{
    console.log(`${t} is not a armstrong number`)
}


sal=parseInt(prompt("Enter Salary"))
yearofExp=parseInt(prompt("Enter Year:"))
if(yearofExp>10){
    console.log(` you have ${yearofExp} experience ${sal+(sal/100*10)} is your current salary after bonus`)
}
else if(yearofExp>=6 && yearofExp<=10){
    console.log(` you have ${yearofExp} experience ${sal+(sal/100*8)} is your current salary after bonus`)

}
else{
    console.log(` you have ${yearofExp} experience ${sal+(sal/100*5)} is your current salary after bonus`)
}

n=parseInt(prompt("Enter number:"))
let t=n
let rev=0
while(n!=0){
    let d=n%10
    rev=rev*10+d
    n=Math.floor(n/10)
}
if(rev==t){
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome")
}**/

let para=document.getElementsByClassName('Para')[0]
console.log(para)
