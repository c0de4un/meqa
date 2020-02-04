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

var exam = {
	
	currentAnserIdx: 0,
	questionsLeft: 0,
	questionsDone: 0,
	rightAnswers: 0,
	rightAnswerIdx: 0,
	elapsedTime: 0.0,
	timeLimit: 0.0,
	questionsList: []
	
};

// Вопросы
var questionsNum = 30;
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
				title: "Несоответствие результатов выполнения\n заявленным требованиям.",
				isRight: true
			}
		]
	},
	{
		title: "Что такое Тестирование ?",
		answersList: [
			{
				title: "Это, когда, маникен садят в автомобиль ?",
				isRight: false
			},
			{
				title: "Проверка компьютера на живучесть !",
				isRight: false
			},
			{
				title: "Проверка реального поведения программы ожидаемому.",
				isRight: true
			}
		]
	},
	{
		title: "Что такое верификация (verification)",
		answersList: [
			{
				title: "Сертификация ?",
				isRight: false
			},
			{
				title: "Звонок другу.",
				isRight: false
			},
			{
				title: "Проверка на соответствие плану.",
				isRight: true
			}
		]
	},
	{
		title: "Что такое валидация (validation)",
		answersList: [
			{
				title: "Проверка на валидность значений !",
				isRight: false
			},
			{
				title: "Звонок другу !",
				isRight: false
			},
			{
				title: "Проверка на соответствие ожиданиям и требованиям.",
				isRight: true
			}
		]
	},
	{
		title: "Что из указанного является целью тестирования ПО ?",
		answersList: [
			{
				title: "Мама, я Хакер !",
				isRight: false
			},
			{
				title: "Поиграть на халяву !",
				isRight: false
			},
			{
				title: "Повысить вероятность корректной работы ПО.",
				isRight: true
			}
		]
	},
	{
		title: "Что из указанного является целью тестирования ПО ?",
		answersList: [
			{
				title: "Позалипать в монитор",
				isRight: false
			},
			{
				title: "Я Хацкер !",
				isRight: false
			},
			{
				title: "Повысить вероятность соответствия\n работы ПО требованиям.",
				isRight: true
			}
		]
	},
	{
		title: "Что из указанного является целью тестирования ПО ?",
		answersList: [
			{
				title: "Давать указания разработчикам.",
				isRight: false
			},
			{
				title: "Ломать программы и получать за это деньги !",
				isRight: false
			},
			{
				title: "Предоставление акуальной информации\n о готовности ПО.",
				isRight: true
			}
		]
	},
	{
		title: "Что НЕ является частью тестирования ПО ?",
		answersList: [
			{
				title: "Анализ продукта.",
				isRight: false
			},
			{
				title: "Основное тестирование.",
				isRight: false
			},
			{
				title: "Обсуждение плана разработки",
				isRight: true
			}
		]
	},
	{
		title: "Что НЕ является частью тестирования ПО ?",
		answersList: [
			{
				title: "Стабилизация.",
				isRight: false
			},
			{
				title: "Разработка тестовой документации.",
				isRight: false
			},
			{
				title: "Публикация (развертывание).",
				isRight: true
			}
		]
	},
	{
		title: "Что НЕ является частью тестирования ПО ?",
		answersList: [
			{
				title: "Работа с требованиями.",
				isRight: false
			},
			{
				title: "Разработка плана тестирования и процедур\n контроля качества.",
				isRight: false
			},
			{
				title: "Исправление багов.",
				isRight: true
			}
		]
	},
	{
		title: "Не является задачей Тест-Плана (Test-Plan) :",
		answersList: [
			{
				title: "Описание стратегии.",
				isRight: false
			},
			{
				title: "Описание критериев начала и окончания тестирования.",
				isRight: false
			},
			{
				title: "Задачи разработки.",
				isRight: true
			}
		]
	},
	{
		title: "Не является задачей Тест-Плана (Test-Plan) :",
		answersList: [
			{
				title: "Описание требований к оборудованию.",
				isRight: false
			},
			{
				title: "Описание объекта теста.",
				isRight: false
			},
			{
				title: "Исходный код проекта.",
				isRight: true
			}
		]
	},
	{
		title: "В чем основная задача Тест-Аналитики ?",
		answersList: [
			{
				title: "Рисовать схемы ?",
				isRight: false
			},
			{
				title: "Составить подробный план тестирования с\n применяемыми инструментами.",
				isRight: false
			},
			{
				title: "Определение объектов тестирования.",
				isRight: true
			}
		]
	},
	{
		title: "В чем основная задача Тест-Дизайна ?",
		answersList: [
			{
				title: "Проверка внешнего вида ПО.",
				isRight: false
			},
			{
				title: "Составление документации ПО",
				isRight: false
			},
			{
				title: "Определение инструментов и методов тестирования каждого объекта.",
				isRight: true
			}
		]
	},
	{
		title: "Что такое Тест-Дизайн (Test-Design) ?",
		answersList: [
			{
				title: "Правка отображения ПО.",
				isRight: false
			},
			{
				title: "Сочетание атрибутов внешности сотрудников организации по тестированию (QA) ПО,\n определяющие их среди других групп.",
				isRight: false
			},
			{
				title: "Этап тестирования ПО, на котором проектируются и создаются тест-кейсы (test-case), \nс определенным критериями качества и целями тестирования.",
				isRight: true
			}
		]
	},
	{
		title: "Что относится к Эквивалентному разделению (Equivalence Partitioning — EP) ?",
		answersList: [
			{
				title: "Среднее значение.",
				isRight: false
			},
			{
				title: "Персентиль от множества.",
				isRight: false
			},
			{
				title: "Верное значение внутри интервала и неверное вне.",
				isRight: true
			}
		]
	},
	{
		title: "Что относится к Анализу Граничных Значений (Boundary Value Analysis — BVA) ?",
		answersList: [
			{
				title: "Число Фибоначчи.",
				isRight: false
			},
			{
				title: "Пи (Pi) на среднее значение множества.",
				isRight: false
			},
			{
				title: "Верхняя и нижняя граница допустимых значений.",
				isRight: true
			}
		]
	},
	{
		title: "Что такое Причина / Следствие (Cause/Effect — CE) в тестировании ?",
		answersList: [
			{
				title: "Зовите Холмся и Ватсона.",
				isRight: false
			},
			{
				title: "Эффект Бабочки и пространственно-временная теория физики ?",
				isRight: false
			},
			{
				title: "Ввод условий (причина) для получения ответа (следствие).",
				isRight: true
			}
		]
	},
	{
		title: "Что относится к Предугадыванию ошибки (Error Guessing — EG) в рамках тестирования ПО ?",
		answersList: [
			{
				title: "Расставить ловушки там, где пойдет противник !",
				isRight: false
			},
			{
				title: "Как сказал мой личный гуру, - достаточно поплясать вокруг и побить в бубен =|_|=",
				isRight: false
			},
			{
				title: "Метод тестирование, когда на ввод подается неверный тип значений (например строка вместо числа).",
				isRight: true
			}
		]
	},
	{
		title: "Что такое Попарное тестирование (Pairwise Testing) ?",
		answersList: [
			{
				title: "Когда учащихся рассаживают парами ?",
				isRight: false
			},
			{
				title: "Мудрая-пара ?",
				isRight: false
			},
			{
				title: "Методы оптимизации тестирование путем сокращения вариантов\n входных значений для уменьшения временных затрат.\nНапример вместо проверки всех возможных сочетаний параметров,\nможно указать только уникальные пары значений \n(ведет к 2-х кратному сокращению нагрузки разработки тест-шагов).",
				isRight: true
			}
		]
	},
	{
		title: "Что такое Traceability matrix — Матрица соответствия требований ?",
		answersList: [
			{
				title: "Tracing + Matrix - матрица на рейтресинге ?",
				isRight: false
			},
			{
				title: "Список задач по тестированию.",
				isRight: false
			},
			{
				title: "МСТ - неотъемлемая часть тест-плана. Часто состоит из \nфункциональных требований (functional requirements) \nи тест-сценариев/кейсов (test-case, scenario) и оформляется в формате таблицы.",
				isRight: true
			}
		]
	},
	{
		title: "Из чего не состоит Тестовый сценарий (Test Case) ?",
		answersList: [
			{
				title: "Шаги",
				isRight: false
			},
			{
				title: "Условия и параметры шага.",
				isRight: false
			},
			{
				title: "Рекомендаций по улучшению качества ПО.",
				isRight: true
			}
		]
	},
	{
		title: "Что такое Чек-лист (check list)",
		answersList: [
			{
				title: "Список покупок.",
				isRight: false
			},
			{
				title: "Перечень тест-кейлов (сценариев) для тестирования ПО, заверенный тест-дизайнером.",
				isRight: false
			},
			{
				title: "Перечень шагов тест-кейса (сценария). Зависит от правил оформления, приянтых в организации.",
				isRight: true
			}
		]
	},
	{
		title: "Что НЕ относится к модульному (компонентное) тестированию ?",
		answersList: [
			{
				title: "Проверка результатов вызова функций в коде ПО ожиданиям.",
				isRight: false
			},
			{
				title: "Тестирование модулей ПО.",
				isRight: false
			},
			{
				title: "Поиск уязвимостей безопасности ПО.",
				isRight: true
			}
		]
	},
	{
		title: "Что выполняется на уровне Интеграционного тестирования (Integration Testing) ?",
		answersList: [
			{
				title: "Проверка работы конкретного компонента ПО.",
				isRight: false
			},
			{
				title: "Тестирование установки и запуска ПО.",
				isRight: false
			},
			{
				title: "Взаимодействие между компонентами ПО.",
				isRight: true
			}
		]
	},
	{
		title: "Какое тестирование НЕ относиться к функциональному ?",
		answersList: [
			{
				title: "Тестирование пользовательского интерфейса (GUI Testing).",
				isRight: false
			},
			{
				title: "Тестирование взаимодействия (Interoperability Testing)",
				isRight: false
			},
			{
				title: "Стресс-Тест (Stress-Test).",
				isRight: true
			}
		]
	},
	{
		title: "К какому виду тестирования отнести Регрессионное тестирование (Regression Testing) ?",
		answersList: [
			{
				title: "Функциональное.",
				isRight: false
			},
			{
				title: "Компонентное.",
				isRight: false
			},
			{
				title: "Повторное (изменение).",
				isRight: true
			}
		]
	},
	{
		title: "Что НЕ относится к Тестированию взаимодействия (Interoperability Testing)?",
		answersList: [
			{
				title: "Тестирование совместимости (compatibility testing).",
				isRight: false
			},
			{
				title: "Интеграционное тестирование (Integration Testing).",
				isRight: false
			},
			{
				title: "Тестирование пользовательского интерфейса (GUI Testing).",
				isRight: true
			}
		]
	},
	{
		title: "Что входит в Функциональное тестирование ?",
		answersList: [
			{
				title: "Санитарное тестирование или проверка согласованности/исправности (Sanity Testing).",
				isRight: false
			},
			{
				title: "Nестирование стабильности или надежности (Stability / Reliability Testing).",
				isRight: false
			},
			{
				title: "Тестирование безопасности (Security and Access Control Testing).",
				isRight: true
			}
		]
	},
	{
		title: "С чем связан QC (Quality Control) ?",
		answersList: [
			{
				title: "Исправлением багов.",
				isRight: false
			},
			{
				title: "Тестирование пред или пост релизной версии ПО.",
				isRight: false
			},
			{
				title: "QA (Quality Assurance).",
				isRight: true
			}
		]
	},
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
	
	alert(gQuestions[getRandomInt(0, questionsNum - 1)]["title"]);
	
}

function showAbout() {
	alert("Набор тестов по теории QA");
}

function onAnswerSelected(answerIdx_) {
	
	//
	switch( answerIdx_ )
	{
		case 0:
			document.getElementById('answer_btn_1').checked = true;
			document.getElementById('answer_btn_2').checked = false;
			document.getElementById('answer_btn_3').checked = false;
		break;
		case 1:
			document.getElementById('answer_btn_1').checked = false;
			document.getElementById('answer_btn_2').checked = true;
			document.getElementById('answer_btn_3').checked = false;
		break;
		case 2:
			document.getElementById('answer_btn_1').checked = false;
			document.getElementById('answer_btn_2').checked = false;
			document.getElementById('answer_btn_3').checked = true;
		break;
		default:
			alert("Ошибка выбора ответа, не найден нужный индекс кнопки.");
		break;
	}
	
	exam["currentAnserIdx"] = answerIdx_;
	
}

function updateTimer() {
	
	exam["elapsedTime"] = exam["elapsedTime"] + 1;
	
	if ( exam["timeLimit"] <= exam["elapsedTime"] ) {
		
		clearTimeout();
		examComplete();
	}
	else
	{
		setTimeout(updateTimer, 1000);
	}
	
	document.getElementById('timeElapsed_label').innerHTML = "Время: " + exam["elapsedTime"] + "с. из " + exam["timeLimit"] + "с.";
	
}

function randomizeAnswersIdxs() {
	
	var idxs_ = [];
	
	for(var i = 0; i < 3; i++) {
		
		var idx_ = getRandomInt(0, 2);
		
		while( idxs_.indexOf(idx_) != -1 ) {
			
			idx_ = getRandomInt(0, 2);
			
		}
		idxs_[i] = idx_;
	}
	
	return idxs_;
}

function fillQuestions() {
	
	var qList_ = exam["questionsList"];
	var questionIdx_ = exam["questionsDone"];
	var question_ = qList_[questionIdx_];
	var questionIdxs_ = randomizeAnswersIdxs();//[1, 2, 0];
	
	for( var i = 0; i < 3; i++ ) {
		
		var btnId_ = "answer_" + (i + 1) + "_Label";
		var radioBtn_ = document.getElementById( btnId_ );
		var answersList_ = question_["answersList"];
		var answer_ = answersList_[questionIdxs_[i]];
		radioBtn_.innerHTML = answer_["title"];
		
		if ( question_["isRight"] ) {
			
			exam["rightAnswerIdx"] = i;
			
		}
		
	}
	
}

function updateQuestionLabel() {
	
	var qList_ = exam["questionsList"];
	var questionIdx_ = exam["questionsDone"];
	var question_ = qList_[questionIdx_];
	document.getElementById('questionLabel').innerHTML = question_["title"];
}

function getQuestionIndex(usedQuestions) {
	
	var questionIdx = getRandomInt(0, questionsNum - 1);
	
	while( usedQuestions.indexOf( questionIdx ) != -1 ) {
		questionIdx = getRandomInt(0, questionsNum - 1);
	}
	
	return questionIdx;
	
}

function fillQuestionsList() {
	
	var questionsList = [];
	
	for( var i = 0; i < questionsNum; i++ ) {
		
		questionsList.push( gQuestions[getQuestionIndex(questionsList)] );
		
	}
	
	return questionsList;
}

function getRightAnswerIdx() {
	
	var question_ = exam["questionsList"][exam["questionsDone"]];
	var rightAnswer_ = getRightAnswer(question_);
	
	
}

function isAnswerCorrect(answerIdx) {
	
	return exam["rightAnswerIdx"] == answerIdx;
	
}

function examComplete() {
	
	var resultLabel_ = document.getElementById('resultLabel');
	
	resultLabel_.innerHTML = "Результат: " + (exam["rightAnswers"] / exam["questionsDone"]) * 100 + "% правильных ответов.";
	clearTimeout();
	
	var next_QuestionBtn_ = document.getElementById('nextQuestion_btn');
	next_QuestionBtn_.disabled = true;
}

function nextQuestion() {
	
	if ( exam["questionsLeft"] > 1 ) {
		
		exam["questionsLeft"] = exam["questionsLeft"] - 1;
		exam["questionsDone"] = exam["questionsDone"] + 1;

		if ( isAnswerCorrect(exam["currentAnserIdx"]) ) {
			
			exam["rightAnswers"] = exam["rightAnswers"] + 1;
			
		}
		
		fillQuestions();
		updateQuestionLabel();
		
	}
	else {
		
		examComplete();
		
	}
	
}

function startExam() {
	
	exam["questionsLeft"] = questionsNum;
	exam["questionsDone"] = 0;
	exam["elapsedTime"] = 0;
	exam["timeLimit"] = questionsNum * 30;
	exam["questionsList"] = fillQuestionsList();
	exam["rightAnswers"] = 0;
	setTimeout(updateTimer, 1000);
	updateQuestionLabel();
	fillQuestions();
	var next_QuestionBtn_ = document.getElementById('nextQuestion_btn');
	next_QuestionBtn_.disabled = false;
}

function initForm() {
	
	document.getElementById('timeElapsed_label').innerHTML = "Время: " + questionsNum * 30 + " с.";
	
}