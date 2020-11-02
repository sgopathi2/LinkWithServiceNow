function Hello()
{
	//var requestBody = "{\"short_description\":\"Error in Project 123\",\"description\":\"Issue with bugs in the project\"}";

	//var client = new XMLHttpRequest();
	//client.open("post", "https://dev68456.service-now.com/api/now/table/incident");

	//client.setRequestHeader('Accept', 'application/json');
	//client.setRequestHeader('Content-Type', 'application/json');

	////Eg. UserName="admin", Password="admin" for this code sample.
	//client.setRequestHeader('Authorization', 'Basic ' + btoa('admin' + ':' + 'Project@1'));

	//client.onreadystatechange = function () {
	//	if (this.readyState == this.DONE) {
	//		//document.getElementById("response").innerHTML = this.status + this.response;
	//		var res = this.response;
	//		parsedData = JSON.parse(res);
	//		alert("You Have Successfully created an incident with number - " + parsedData.result.number);
	//	}
	//};
	//client.send(requestBody);
	var requestBody = "{\"short_description\":\"Error\"}";

	var client = new XMLHttpRequest();
	client.open("post", "https://dev68456.service-now.com/api/now/table/incident");

	client.setRequestHeader('Accept', 'application/json');
	client.setRequestHeader('Content-Type', 'application/json');

	//Eg. UserName="admin", Password="admin" for this code sample.
	client.setRequestHeader('Authorization', 'Basic ' + btoa('admin' + ':' + 'Project@1'));

	client.onreadystatechange = function () {
		if (this.readyState == this.DONE) {
			//document.getElementById("response").innerHTML = this.status + this.response;
			//var res = this.response;
			parsedData = JSON.parse(this.response);
			alert("You Have Successfully created an incident with number - " + parsedData.result.number);
	//		alert("you have successfully created an incident...!");
		}
	};
	client.send(requestBody);
}


function Hi()
{
	var requestBody = "{\"short_description\":\"Testing Of Coding\",\"description\":\"trial and testing\"}";

	var client = new XMLHttpRequest();
	client.open("post", "https://dev68456.service-now.com/api/now/table/incident");

	client.setRequestHeader('Accept', 'application/json');
	client.setRequestHeader('Content-Type', 'application/json');

	//Eg. UserName="admin", Password="admin" for this code sample.
	client.setRequestHeader('Authorization', 'Basic ' + btoa('admin' + ':' + 'Project@1'));

	client.onreadystatechange = function () {
		if (this.readyState == this.DONE) {
			//document.getElementById("response").innerHTML = this.status + this.response;
			parsedData = JSON.parse(this.response);
			alert("You Have Successfully created an incident with number - " + parsedData.result.number);
		}
	};
	client.send(requestBody);
}
function finalTestWithAlert() {

	var incSD = document.getElementById("title").value;
	var incD = document.getElementById("problem").value;
	var requestBody = "{\"short_description\":\"" + incSD + "\",\"description\":\"" + incD + "\"}";

	var client = new XMLHttpRequest();
	client.open("post", "https://dev68456.service-now.com/api/now/table/incident");

	client.setRequestHeader('Accept', 'application/json');
	client.setRequestHeader('Content-Type', 'application/json');

	//Eg. UserName="admin", Password="admin" for this code sample.
	client.setRequestHeader('Authorization', 'Basic ' + btoa('admin' + ':' + 'Project@1'));

	client.onreadystatechange = function () {
		if (this.readyState == this.DONE) {
			//document.getElementById("response").innerHTML = this.status + this.response;
			parsedData = JSON.parse(this.response);
			alert("You Have Successfully created an incident with number - " + parsedData.result.number);
		}
	};
	client.send(requestBody);
}
function finalTestWithLink() {

	var incSD = document.getElementById("title").value;
	var incD = document.getElementById("problem").value;
	var requestBody = "{\"short_description\":\"" + incSD + "\",\"description\":\"" + incD + "\"}";

	var client = new XMLHttpRequest();
	client.open("post", "https://dev68456.service-now.com/api/now/table/incident");

	client.setRequestHeader('Accept', 'application/json');
	client.setRequestHeader('Content-Type', 'application/json');

	//Eg. UserName="admin", Password="admin" for this code sample.
	client.setRequestHeader('Authorization', 'Basic ' + btoa('admin' + ':' + 'Project@1'));

	client.onreadystatechange = function () {
		if (this.readyState == this.DONE) {
			//document.getElementById("response").innerHTML = this.status + this.response;
			parsedData = JSON.parse(this.response);
			var incNum = parsedData.result.number;
			document.write("You Have Successfully Created an Incident with Number - " + incNum.link("https://dev68456.service-now.com/nav_to.do?uri=%2Fincident_list.do%3Fsysparm_userpref_module%3D4fed4395c0a8016400fcf06c27b1e6c6%26sysparm_query%3Dactive%3Dtrue%5EEQ%26active%3Dtrue%26sysparm_clear_stack%3Dtrue"));
		}
	};
	client.send(requestBody);
}
function LinkTest() {
	var num = "INC123023";
	document.write("Hi,Welcome to Hyperlink in JS - " + num.link("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_str_style"));
}