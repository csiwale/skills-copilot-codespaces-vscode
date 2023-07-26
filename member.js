function skillsMember() {
    var skill = document.getElementById("skill").value;
    var skillList = document.getElementById("skillList");
    var skillListArray = skillList.innerHTML.split(",");
    var skillListArrayLength = skillListArray.length;
    var skillListArrayIndex = skillListArray.indexOf(skill);
    if (skillListArrayIndex == -1) {
        skillListArray.push(skill);
        skillList.innerHTML = skillListArray.join(",");
    }
    document.getElementById("skill").value = "";
}