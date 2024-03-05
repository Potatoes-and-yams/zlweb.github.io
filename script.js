function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = function(event) {
            const data = event.target.result;
            displayFileContents(data);
        };
    } else {
        alert('请先选择要上传的文件！');
    }
}

function displayFileContents(data) {
    // 在页面上显示文件内容，这里可以根据具体需求解析 Excel 文件
    const fileContentsDiv = document.getElementById('fileContents');
    fileContentsDiv.textContent = data;
}

function groupStudents() {
    // 分组逻辑，这里需要根据解析后的学生数据实现随机分组
    const groupedStudentsDiv = document.getElementById('groupedStudents');
    groupedStudentsDiv.textContent = '分组结果...';
}

function downloadGroup() {
    // 下载分组表，这里可以将分组结果导出成文件供用户下载
    const groupedStudentsDiv = document.getElementById('groupedStudents');
    const groupedStudents = groupedStudentsDiv.textContent;
    // 实现下载逻辑...
    alert('下载功能待实现！');
}
