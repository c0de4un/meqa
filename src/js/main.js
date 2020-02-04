var garr= [
	{
		name: "John",
		age: 30
	},
	{
		name: "Michael",
		age: 25
	}
];

// Вопросы
var questionsNum = 1;
var gQuestions = [
	{
		title: "Что такое баг ?",
		answersList: [
			{
				title: "Это жук !",
				isRight: false
			},
			{
				title: "Фича !",
				isRight: false
			},
			{
				title: "Несоответствие результатов выполнения заявленным требованиям.",
				isRight: true
			}
		]
	}
];

function getRandomInt(pMin, pMax) {
	return Math.floor ( Math.random() * (pMax - pMin + 1) ) + pMin;
}

function showRandomQuestion() {
	
	//var myObject = { name: "SomeName", cost: 30 };
	//alert( "cost = " + myObject["cost"] );
	
	//var myArr = [
	//	{
	//		name: "John",
	//		age: 30
	//	}
	//];
	//alert(garr[1]["name"]);
	
	//alert( gQuestions[0]["answersList"][0]["title"] );
	
	alert(gQuestions[getRandomInt, questionsNum - 1]["title"]);
	
}

function showAbout() {
	alert("Набор тестов по теории QA");
}