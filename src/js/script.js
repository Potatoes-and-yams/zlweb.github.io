async function searchStudent() {
    const name = document.getElementById("name").value;
    const response = await fetch("students.json");
    const data = await response.json();
    const matchingStudents = data.filter(student => student.name === name);
    const resultDiv = document.getElementById("result");
    if (matchingStudents.length > 0) {
        resultDiv.innerText = JSON.stringify(matchingStudents, null, 2);
    } else {
        resultDiv.innerText = "未找到匹配的学生信息";
    }
}

async function addStudent() {
    const newName = document.getElementById("newName").value;
    const newAge = document.getElementById("newAge").value;
    const newGender = document.getElementById("newGender").value;
    const newGrade = document.getElementById("newGrade").value;
    const response = await fetch("students.json");
    const data = await response.json();
    const newStudent = {name: newName, age: newAge, gender: newGender, grade: newGrade};
    data.push(newStudent);
    const updatedContent = JSON.stringify(data, null, 2);
    const updateResponse = await fetch("students.json", {
        method: "PUT",
        body: updatedContent
    });
    if (updateResponse.ok) {
        alert("学生信息添加成功");
    } else {
        alert("学生信息添加失败");
    }
}
