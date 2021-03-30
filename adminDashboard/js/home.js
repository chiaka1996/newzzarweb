window.addEventListener("load", () => { 

const imageInput = document.querySelector("#image");
const inputButton = document.querySelector(".submitButton");
const errorMessage = document.querySelector(".errorMessage");
const successMessage = document.querySelector(".successMessage");
const closeMessage = document.querySelector(".closeMessage");
const message = document.querySelector(".message");

inputButton.addEventListener("click", (e) => {

    e.preventDefault();

    successMessage.classList.remove("successMessage2");

    successMessage.classList.add("successMessage");

    message.innerHTML = '';

    inputButton.innerHTML = "uploading...";

    if(imageInput.files.length == ''){
        inputButton.innerHTML = "upload";
        message.innerHTML = "please input an image";
        // successMessage.classList.remove("successMessage");
        successMessage.classList.remove("successMessage2");
        successMessage.classList.add("errorMessage");
    }

    let imageType = imageInput.files[0].type;

    if(imageType === 'image/jpeg' || imageType === 'image/jpg' || imageType === 'image/png'){
        
        let formData = new FormData();
        formData.append("image", imageInput.files[0]);

        axios.post("http://localhost:5000/apis/upload", formData)
        .then( (response) => {
            successMessage.classList.add("successMessage2");
            message.innerHTML = response.data;
            inputButton.innerHTML = "upload";
            imageInput.value = "";
        })
        .catch(error => alert(error));

        }
        else{
            errorMessage.innerHTML = "only images are allowed";
        }
        
});

closeMessage.addEventListener("click", () => {
    message.innerHTML = '';

    successMessage.classList.remove("successMessage2");
    successMessage.classList.remove("errorMessage");
});

});