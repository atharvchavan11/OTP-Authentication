function sendOTP() {
	const email = document.getElementById('email').value;
	const otpverify = document.getElementsByClassName('otpverify')[0];

	console.log(email);
	let otp_val = Math.floor(Math.random() * 10000);

	let emailbody = `<h2>Your OTP is </h2>${otp_val}`;
	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "ameychavan1979@gmail.com",
		Password: "192A692B67AF40981AC8FD29B46B373B2A3F",
    To : email,
    From : "ameychavan1979@gmail.com",
    Subject : "Email OTP using JavaScript",
    Body : emailbody,
	}).then(

	message => {
		console.log(message);
		if (message === "OK") {
			alert("OTP sent to your email " + email);

			otpverify.style.display = "flex";
			const otp_inp = document.getElementById('otp_inp');
			const otp_btn = document.getElementById('otp-btn');

			otp_btn.addEventListener('click', () => {
				if (otp_inp.value == otp_val) {
					alert("Email address verified...");
				}
				else {
					alert("Invalid OTP");
				}
			})
		}
		else
		{
			alert("ENTER CORRECT E-MAIL")
		}
	}
);
}