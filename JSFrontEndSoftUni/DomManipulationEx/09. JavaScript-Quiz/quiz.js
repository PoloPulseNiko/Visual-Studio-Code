document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const questions = document.querySelectorAll('.question');
    const resultsEl = document.getElementById('results');
    let currentQuestionIndex = 0;
    let correctAnswersCount = 0;

    const correctAnswers = [
        'onclick',
        'JSON.stringify()',
        'A programming API for HTML and XML documents'
    ];

    function handleAnswerClick(event) {
        const answer = event.target.textContent;
        if (answer === correctAnswers[currentQuestionIndex]) {
            correctAnswersCount++;
            questions[currentQuestionIndex].classList.add('hidden')
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            questions[currentQuestionIndex].classList.remove('hidden');
        } else {
            showResults();
        }
    }

    function showResults() {
        let resultMessage = '';
        if (correctAnswersCount === questions.length) {
            resultMessage = 'You are recognized as top JavaScript fan!';
        } else {
            resultMessage = `You have ${correctAnswersCount} right `;
            resultMessage += correctAnswersCount === 1 ? 'answer' : 'answers';
        }
        resultsEl.textContent = resultMessage;
    }
    document.querySelectorAll('.quiz-answer').forEach(answer => {
        answer.addEventListener('click', handleAnswerClick);
    });

    questions[currentQuestionIndex].classList.remove('hidden');
}
