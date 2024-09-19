
var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    // Get input values from form elements
    var Shareable = document.getElementById('Unique').value;
    var profilePicInput = document.getElementById('profile-pic');
    var name2 = document.getElementById('name').value;
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var field = document.getElementById('field').value;
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    var certificate = document.getElementById('certificate').value;
    var exp = document.getElementById('exp').value;
    var skill = document.getElementById('skill').value;
    // Handle Profile Picture Input
    var profilePicFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePicUrl = profilePicFile ? URL.createObjectURL(profilePicFile) : '';
    // Generate a unique ID for the shareable link (based on timestamp)
    //const uniqueId = `${Shareable}-${Date.now()}`; // Can also use random generators if desired
    //const shareableLink = `resumes/${uniqueId.replace(/\s+/g, '_')} -Ashu.Generator`;
    // 
    var resumeContent = "\n    <div class=\"changingthings\">\n\n        ".concat(profilePicUrl ? "<img src=\"".concat(profilePicUrl, "\" alt=\"Profile Picture\" class=\"pfp\" />") : '', "\n        <p><strong>Name : </strong><span id=\"Edit-name\" class=\"Editable\">").concat(name2, "</span></p>\n        <p><strong>Fullname : </strong><span id=\"Edit-fullname\" class=\"Editable\">").concat(fullname, "</span></p>\n        <p><strong>Phone : </strong><span id=\"Edit-phone\" class=\"Editable\">").concat(phone, "</span></p>\n        <p><strong>Email : </strong><span id=\"Edit-email\" class=\"Editable\">").concat(email, "</span></p>\n        <p><strong>Education : </strong><span id=\"Edit-education\" class=\"Editable\">").concat(education, "</span></p>\n        <p><strong>Field : </strong><span id=\"Edit-field\" class=\"Editable\">").concat(field, "</span></p>\n        <p><strong>Degree : </strong><span id=\"Edit-degree\" class=\"Editable\">").concat(degree, "</span></p>\n        <p><strong>University : </strong><span id=\"Edit-university\" class=\"Editable\">").concat(university, "</span></p>\n        <p><strong>Certificate : </strong><span id=\"Edit-certificate\" class=\"Editable\">").concat(certificate, "</span></p>\n        <p><strong>Experience : </strong><span id=\"Edit-exp\" class=\"Editable\">").concat(exp, "</span></p>\n        <p><strong>Skills: </strong><span id=\"Edit-skill\" class=\"Editable\">").concat(skill, "</span></p>\n        \n       \n    </div>\n    ");
    // Chrome Loader 
    //   const LoadLink = document.createElement('a')
    //   LoadLink.href = 'data:text/html;charset-utf-8,' + encodeURIComponent(resumeContent)
    //   LoadLink.download=uniqueId
    //   LoadLink.textContent ='Click here to Download Your Resume'
    // Ensure the resume element exists before updating it
    var resumeElement = document.getElementById('resume');
    if (resumeElement) {
        resumeElement.innerHTML = resumeContent;
        resumeElement.classList.remove("hidden");
        // Create container for bottons 
        var btnContainer = document.createElement("div");
        btnContainer.id = ("btnContainer");
        resumeElement.appendChild(btnContainer);
        //Add Download Pdf Botton 
        var loadBotton = document.createElement("button");
        loadBotton.textContent = "Download AS Pdf ";
        loadBotton.addEventListener("click", function () {
            window.print();
        });
        btnContainer.appendChild(loadBotton);
        var Uniquelnk = document.createElement('button');
        Uniquelnk.textContent = "Copy Unique Link";
        document.getElementById("Uniquelnk").addEventListener("click", function () {
            try {
                var shareableLink = 'https://YourDomain.com/resumesByAshu/' + Shareable.replace(/\s+/g, '_') + '-Ashu.Generator';
                
                // Use the older `document.execCommand` to copy text (fallback for older browsers)
                var tempInput = document.createElement("input");
                tempInput.style.position = "absolute";
                tempInput.style.left = "-9999px";
                tempInput.value = shareableLink;
                document.body.appendChild(tempInput);
                tempInput.select();
                if (document.execCommand("copy")) {
                    alert("Shareable Link Copied to Clipboard Successfully");
                } else {
                    throw new Error("Copy command failed");
                }
                document.body.removeChild(tempInput);
            } catch (err) {
                console.error("Something went wrong", err);
                alert("Please try again");
            }
        });
        
        btnContainer.appendChild(Uniquelnk);
    }
    else {
        console.error("Resume container not found.");
    }
});
