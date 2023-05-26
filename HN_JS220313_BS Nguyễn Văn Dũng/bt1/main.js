let arr =[]
const btnElement = document.querySelector(".btn");
const nameElement = document.querySelector(".name");
const emailElement = document.querySelector(".email");
const telElement = document.querySelector(".tel");
const addesslElement = document.querySelector(".addess");
const sexlElement = document.querySelector(".sex");
const tbodyElement = document.querySelector('.myBody');
const sexMenElement = document.querySelector('.sexMen');
const sexWoment = document.querySelector('.sexWoment');
// const deleteElement

let index = 0;


btnElement.addEventListener("click", function () {

  const valueName = nameElement.value;
  const valueEmail = emailElement.value;
  const valueTel = telElement.value;
  const valueAddess = addesslElement.value;
  let valueSex = "";
  if(sexMenElement.checked){
    valueSex = "Nam"
  }else if (sexWoment.checked){
    valueSex = "Nữ"
  }

  const newHocVien = {
    id : index + 1,
    name:valueName,
    email:valueEmail,
    tel:valueTel,
    addess:valueAddess,
    sex:valueSex
  }
  arr.push(newHocVien);

  console.log(arr);

  tbodyElement.innerHTML="";
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].id);
  const newTrElement = `<tr></tr><td>${arr[i].id}</td>
   <td>${arr[i].name}</td>
   <td>${arr[i].email}</td>
   <td>${arr[i].tel}</td>
   <td>${arr[i].addess}</td>
   <td>${arr[i].sex}</td>
   <td>
        <button>Edit</button>
        <button onclick = "xoa(${i})">Delete</button>
   </td>
   <td></td>
   </tr>`
  tbodyElement.insertAdjacentHTML("beforeend", newTrElement);
  }
});
function xoa(id){
  console.log(arr);
  arr.splice(id,1)
}
