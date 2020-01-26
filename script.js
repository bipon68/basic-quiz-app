	function check(){

		let question1 = document.quiz.question1.value;
		let question2 = document.quiz.question2.value;
		let question3 = document.quiz.question3.value;
		let afterSubmit = document.getElementById('after-submit');
		let correctAnwer = document.getElementById('correct-answer');
		let showMessage = document.getElementById('message');
		let photo = document.getElementById('picture');
		let correct = 0;

		if(question1 == "Dhaka"){
			correct++
		}
		if(question2 == "Delli"){
			correct++
		}
		if(question3 == "Paris"){
			correct++
		}

		let message = ['Great job man!','Just Okey!','You should need to improve.'];
		let pictures = ['img/win.gif', 'img/meh.gif', 'img/lose.gif']
		let range;

		if(correct < 1){
			range = 2;
		}
		if(correct > 0 && correct < 3){
			range = 1;
		}
		if(correct > 2){
			range = 0;
		}

		afterSubmit.style.visibility = 'visible';
		correctAnwer.innerHTML = 'You got ' + correct + ' correct answer'; 
		showMessage.innerHTML = message[range];
		photo.src = pictures[range];


	}