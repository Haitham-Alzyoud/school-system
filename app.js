var submit = document.getElementById("submit");
var input = document.getElementById("form" ).elements;
var allStudent =JSON.parse(localStorage.getItem("student")) || [];
var table = document.getElementById("table");
var form = document.getElementById("form" );

submit.addEventListener("click", (event) => {
    event.preventDefault();
    var student = {
        FullName:input[0].value,
        DateOfBirth:input[1].value,
        Gender:input[2].checked ? 'male' : 'female', 
        PhoneNumber:input[4].value,
        Grade:input[5].value,
        imgUrl:input[6].value,
    };
    allStudent.push(student);
    localStorage.setItem('student' ,JSON.stringify(allStudent))
    // form.reset();
    // location.reload();

    let div = document.createElement("div");
    let FullName1 = document.createElement("span");
    let DateOfBirth1 = document.createElement("span");
    let Gender1 = document.createElement("span");
    let PhoneNumber1 = document.createElement("span");
    let Grade1 = document.createElement("span");
    let picture = document.createElement("img");

    FullName1.innerHTML = document.querySelector("#name").value;
    DateOfBirth1.innerHTML  = document.querySelector("#dfb").value;
    Gender1.innerHTML  = document.querySelector("#g").checked ? 'male' : 'female';
    PhoneNumber1.innerHTML  = document.querySelector("#tele").value;
    Grade1.innerHTML  = document.querySelector("#grade").value;
    picture.src = "d37b020e87945ad7f245e48df752ed03.jpg"

    div.appendChild(picture);
    div.appendChild(FullName1);
    div.appendChild(DateOfBirth1);
    div.appendChild(Gender1);
    div.appendChild(PhoneNumber1);
    div.appendChild(Grade1);
    

    let cont = document.querySelector(".card-container");
    cont.appendChild(div);


}       
);

// for(let i =0 ; i < allStudent.length ; i++){
//     table.innerHTML+= ` 
// <tr>
// <th>${allStudent[i].FullName}</th>
// <th>${allStudent[i].DateOfBirth}</th>
// <th>${allStudent[i].Gender}</th>
// <th>${allStudent[i].PhoneNumber}</th>
// <th>${allStudent[i].Grade}</th>
// <th>${allStudent[i].imgUrl}</th>
// </tr>
// `;

// }



