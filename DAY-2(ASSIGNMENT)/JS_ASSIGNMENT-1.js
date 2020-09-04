//NAME:SREYA SREE DOKALA
//EMAIL:sreyasreedokala@gmail.com

//Ques-1:Program to search for a particular character in a string

let name = "Javascript";
let index = name.indexOf("r");
console.log("The index of character r in "+name+" = "+index);

//Ques-2:Program to convert minutes to seconds

let minutes=2.5;
let minutesToseconds=minutes*60;
console.log("Number of seconds in "+minutes+" minutes  = " +minutesToseconds);

//Ques-3:Program to search for a element in a array of strings

let places=["Vizag","Bangalore","Delhi","Hyderabad","Mumbai","Kolkata"]; 
let r=places.includes('"Kolkata');

if (r==true) {
  console.log("Yes!! Your search is sucessful");
}
else {
  console.log("Sorry!! Your search is not available");
}

//Ques-4:Program to display only elements containing 'a' in them from a array

let med = ["google","apple","microsoft","instagram","twitter","facebook"];
console.log("The elements containing character 'a':");
for(let i=0;i<med.length;i++) {
    if(med[i].includes('a')==true) {
      console.log(med[i]); }
    }

//Ques-5:Program to print an array in reverse order

let lang = ['Python', 'Javascript','C', 'Java','C++','R'];
console.log("The order of array in initial: "+lang)
lang.reverse();
console.log("The array in reverse order: "+lang);
