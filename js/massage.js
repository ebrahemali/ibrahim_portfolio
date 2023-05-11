function sendMail() {
    var params =
    {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        massage: document.getElementById("massage").value
        
    }
    const serviceID = "service_rjom2dl";
    const templeteID = "template_5z3mvn9"
    
    emailjs.send(serviceID, templeteID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("massage").value = "";
                console.log(res);
                alert("sent successfuly");
            }
        )
        .catch(err => console.log(err));
}