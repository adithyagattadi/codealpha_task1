function calculateAge() {
    let dobInput = document.getElementById("dob").value;
    let dob = new Date(dobInput);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - dob.getFullYear();
    if (
        currentDate.getMonth() < dob.getMonth() ||
        (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())
    ) {
        age--;
    }
    let resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "Your age is: " + age + " years";
}