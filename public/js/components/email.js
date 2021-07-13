function sendEmail() {
  const emailId = document.getElementById("email").value;
  const meetLink = document.getElementsByClassName("share-link")[0].innerHTML;
  Email.send({
    SecureToken: "5791f38f-9857-4f5e-8e78-08f4a9ed434b",
    To: `${emailId}`,
    From: "noreply.readymeet@gmail.com",
    Subject: "Invitation for Meeting",
    Body: `
                <div style="background-color: #FCA253; padding: 8% 20%;">
                  <div style="background-color: white; padding: 5% 7%; border-radius: 15px;">
                    <h1>Ready Meet</h1>
                    <h2 style="text-align: center;">Your Friend  ${user.name}  is Inviting You for the Meeting</h2>
                    <h2 style="text-align: center;">Click on this Button <a href=${meetLink}><button style="background-color: #008CBA; border-radius: 12px; padding: 12px 20px; cursor: pointer; color: #fff;">Join the Meeting</button></a></h2>
                    <p style="text-align: center;">In case Button Doesn't work Click on this <a href=${meetLink}>Link</a> to Join</p>
                  </div>
                  <p style="color: white; margin-top: 4%; text-align: center; font-size: 15px;">Copyright © <a style="text-decoration: none;" href="http://localhost:3000/">Ready Meet 2021</a></p>
                </div>
                `,
  }).then(function (message) {
    swal("Invitation Sent!", "", "success");
  });
  document.getElementById("email").value = "";
}
