const cl = console.log;

const stdForm = document.getElementById('stdForm');
const fnameControl = document.getElementById('fname');
const lnameControl = document.getElementById('lname');
const emailControl = document.getElementById('email');
const contactControl = document.getElementById('contact');
const stdInfo = document.getElementById('stdInfo');

stdArr = [];

function createTable (tab) {
    let result = ``;
    tab.forEach((ele,i) => {
        result +=  `<tr>
                    <td>${i + 1}</td>
                    <td>${fnameControl.value}</td>
                    <td>${lnameControl.value}</td>
                    <td>${emailControl.value}</td>
                    <td>${contactControl.value}</td>
                    <td class="text-center">
                         <i class="fa-solid fa-pen-to-square text-primary fa-2x" role="button"></i>
                    </td>
                    <td class="text-center">
                         <i class="fa-solid fa-trash text-danger fa-2x" role="button"></i>
                    </td>
                    </tr>`
    });
    stdInfo.innerHTML = result;
}



function onsubhdl (para) {
    para.preventDefault();
   let stdObj = {
    fname : fnameControl.value,
    lname : lnameControl.value,
    email : emailControl.value,
    contact : contactControl.value

   }
      stdArr.push(stdObj);
   createTable(stdArr)
 }




stdForm.addEventListener('submit', onsubhdl)


