// Initialize Firebase
var config = {
	apiKey: "AIzaSyAldcJy3yN7wAF95Pc-qo5ScYltQRzxqaE",
	authDomain: "checkstarter-70322.firebaseapp.com",
	databaseURL: "https://checkstarter-70322.firebaseio.com",
	storageBucket: "checkstarter-70322.appspot.com",
};
firebase.initializeApp(config);
var database = firebase.database();

//test link to the firebase database
database.ref('users/').set({username: "Karishma"});	
database.ref('tasks/').set({task: "Hello World"});
//test data for searching
database.ref('checklists/').push({procedure: "Insert IV Line"});
database.ref('checklists/').push({procedure: "Insert Line"});
database.ref('checklists/').push({procedure: "Administer Injection"});	 

//method that uploads data in text box when Enter is pressed
function writeUserData() {
	var listName = document.getElementById('taskInput').value;
	alert(listName);
	database.ref().child('tasks/').push({task: listName});
	document.getElementById('taskInput').value = "";
}

function writeChecklistData() {
	var listName = document.getElementById('insertCheckLists');
	alert(listName);
	database.ref().child('newTasks/').push({checklist: listName});
	document.getElementById('insertCheckLists').value = "";
}

function submitLocalTasks() {
	
}

