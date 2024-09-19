
document.getElementById('resume-form')?.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    // Get input values from form elements
    const Shareable =( document.getElementById('Unique') as HTMLInputElement).value;
    const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
    const name2 = (document.getElementById('name') as HTMLInputElement).value;
    const fullname = (document.getElementById('fullname') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const field = (document.getElementById('field') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const university = (document.getElementById('university') as HTMLInputElement).value;
    const certificate = (document.getElementById('certificate') as HTMLInputElement).value;
    const exp = (document.getElementById('exp') as HTMLInputElement).value;
    const skill = (document.getElementById('skill') as HTMLInputElement).value;

    // Handle Profile Picture Input
    const profilePicFile = profilePicInput.files?.[0];
    const profilePicUrl = profilePicFile ? URL.createObjectURL(profilePicFile) : '';


    // Generate a unique ID for the shareable link (based on timestamp)
    //const uniqueId = `${Shareable}-${Date.now()}`; // Can also use random generators if desired
    //const shareableLink = `resumes/${uniqueId.replace(/\s+/g, '_')} -Ashu.Generator`;

   








    // 
    const resumeContent = `
    <div class="changingthings">

        ${profilePicUrl ? `<img src="${profilePicUrl}" alt="Profile Picture" class="pfp" />` : ''}
        <p><strong>Name : </strong><span id="Edit-name" class="Editable">${name2}</span></p>
        <p><strong>Fullname : </strong><span id="Edit-fullname" class="Editable">${fullname}</span></p>
        <p><strong>Phone : </strong><span id="Edit-phone" class="Editable">${phone}</span></p>
        <p><strong>Email : </strong><span id="Edit-email" class="Editable">${email}</span></p>
        <p><strong>Education : </strong><span id="Edit-education" class="Editable">${education}</span></p>
        <p><strong>Field : </strong><span id="Edit-field" class="Editable">${field}</span></p>
        <p><strong>Degree : </strong><span id="Edit-degree" class="Editable">${degree}</span></p>
        <p><strong>University : </strong><span id="Edit-university" class="Editable">${university}</span></p>
        <p><strong>Certificate : </strong><span id="Edit-certificate" class="Editable">${certificate}</span></p>
        <p><strong>Experience : </strong><span id="Edit-exp" class="Editable">${exp}</span></p>
        <p><strong>Skills: </strong><span id="Edit-skill" class="Editable">${skill}</span></p>
        
       
    </div>
    `;
  // Chrome Loader 
//   const LoadLink = document.createElement('a')
//   LoadLink.href = 'data:text/html;charset-utf-8,' + encodeURIComponent(resumeContent)
//   LoadLink.download=uniqueId
//   LoadLink.textContent ='Click here to Download Your Resume'



    // Ensure the resume element exists before updating it
    const resumeElement = document.getElementById('resume');
    if (resumeElement) {
        resumeElement.innerHTML = resumeContent;
        resumeElement.classList.remove("hidden")
        // Create container for bottons 
        const btnContainer = document.createElement("div");
        btnContainer.id= ("btnContainer");
        resumeElement.appendChild(btnContainer)
        //Add Download Pdf Botton 

    const loadBotton= document.createElement("button")
    loadBotton.textContent = "Download AS Pdf ";
    loadBotton.addEventListener("click", () => {
        window.print();
    })
 
 btnContainer.appendChild(loadBotton)
 const Uniquelnk = document.createElement('button')
 Uniquelnk.textContent = "Copy Unique Link"
 Uniquelnk.addEventListener("click" , async () => {
    try{
        const shareableLink = `https://YourDomain.com/resumesByAshu/${name2.replace(/\s+/g, '_')} -Ashu.Generator`;
        //Navigator Copied By Async Await
        await navigator.clipboard.writeText(shareableLink)
        alert("Shareable Link Copied in Clipboard Succesfully")
    }catch (err){
        console.error("Somthing Went Wrong " , err)
        alert("Please Try Again")
    }
    
 })
        btnContainer.appendChild(Uniquelnk)
         

    }

   else{
     console.error("Resume container not found.");
 }
})





