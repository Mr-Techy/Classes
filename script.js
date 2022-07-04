function calculator() {
	let email_inp = document.getElementById("email_inp").value;
	let name_inp = document.getElementById("name_inp").value;
	let age_inp = document.getElementById("age_inp").value;
	let num1_inp = document.getElementById("num1_inp").value;
	let num2_inp = document.getElementById("num2_inp").value;

	if (email_inp == "" || !email_inp.includes("@") || email_inp.endsWith("@")) return alert("Please enter a valid email address");
	if (name_inp == "") return alert("Please enter a valid name");
	// if (age_inp == "" || typeof age_inp != "number") return alert("Please enter a valid age");
	if (num1_inp == "") return alert("Please enter a valid number in the number 1 field");
	if (num2_inp == "") return alert("Please enter a valid number in the number 2 field");

	input_div = document.getElementById("input_div");
	input_div.style.display = "none";


	output = document.getElementById("output_div");
	output.style.margin = "3px;"

	output.innerHTML += `<b> Your email: </b> ${email_inp.toLowerCase()} <br/>`;
	output.innerHTML += `<b> Your name: </b> ${name_inp.toUpperCase()} <br/>`;
	output.innerHTML += `<b> Your age: </b> <t style="color: blue;"> ${age_inp} </t> <br/><br/>`;

	output.innerHTML += `Max between <t style="color: blue;">${num1_inp}</t> and <t style="color: blue;">${num2_inp}</t> is <t style="color: green;">${Math.max(num1_inp, num2_inp)}</t> <br/>`;
	output.innerHTML += `Min between <t style="color: blue;">${num1_inp}</t> and <t style="color: blue;">${num2_inp}</t> is <t style="color: green;">${Math.min(num1_inp, num2_inp)}</t> <br/>`;
	output.innerHTML += `<t style="color: blue;">${num1_inp}</t> plus <t style="color: blue;">${num2_inp}</t> is <t style="color: green;">${parseInt(num1_inp) + parseInt(num2_inp)}</t> <br/>`;
	output.innerHTML += `<t style="color: blue;">${num1_inp}</t> to the power of <t style="color: blue;">${num2_inp}</t> is <t style="color: green;">${((Math.pow(num1_inp, num2_inp)).toFixed(3))}</t> <br/>`;
	output.innerHTML += `Square root of <t style="color: blue;">${num1_inp}</t> is <t style="color: green;">${(Math.sqrt(parseInt(num1_inp))).toFixed(3)}</t> <br/>`;
	output.innerHTML += `Square root of <t style="color: blue;">${num2_inp}</t> is <t style="color: green;">${(Math.sqrt(parseInt(num2_inp))).toFixed(3)}</t> <br/><br/>`;

	output.innerHTML += `<button class="back_btn" onclick="back()"> Back </button>`

	console.log("done");
};

function back() {
	input_div = document.getElementById("input_div");
	input_div.style.display = "block";

	output_div = document.getElementById("output_div");
	output_div.innerHTML = "";
}