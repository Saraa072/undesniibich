const quizData = [
    {
        question: "ᠥᠷᠥ",
        a: "Өр",
        b: "Үр",
        c: "Үүр",
        d: "Үрээ",
        correct: "a",
    },
    {
        question: "ᠴᠠᠭᠠᠨ",
        a: "Зан",
        b: "Заан",
        c: "Цагаан",
        d: "Цан",
        correct: "c",
    },
    {
        question: "ᠭᠣᠣᠯ",
        a: "Хол",
        b: "Хоол",
        c: "Гол",
        d: "Гоол",
        correct: "c",
    },
    {
        question: "ᠬᠤᠳᠠ",
        a: "Худ",
        b: "Хот",
        c: "Хут",
        d: "Гуд",
        correct: "a",
    },

    {
        question: "ᠠᠪᠤ",
        a: "Аав",
        b: "Ав",
        c: "Эв",
        d: "Яв",
        correct: "a",
    },
    {
        question: "ᠠᠯᠲᠠ",
        a: "Алд (Алдах)",
        b: "Элд",
        c: "Алд(Алд хэмжээ)",
        d: "Алт",
        correct: "d",
    },

    {
        question: "ᠰᠥᠷᠭᠦ",
        a: "Хөрөг",
        b: "Сөрөг",
        c: "Шураг",
        d: "Сурах",
        correct: "b",
    },
    {
        question: "ᠪᠡᠯᠭᠡ",
        a: "Билиг",
        b: "Бэлэг",
        c: "Бэлгэ",
        d: "Бэлх",
        correct: "c",
    },
    {
        question: "ᠠᠰᠠᠷᠠ",
        a: "Асар (Майхан)",
        b: "Асар (Асарч сувилах)",
        c: "Асар (Том)",
        d: "Асар (Тэнгэр)",
        correct: "b",
    },

    {
        question: "ᠳᠠᠭᠤᠤ",
        a: "Дуу",
        b: "Дагуу",
        c: "Дага",
        d: "Даа",
        correct: "a",
    },
    {
        question: "ᠬᠠᠶᠢᠷᠠ",
        a: "Хайр (Сэтгэл)",
        b: "Хайр (Чулуу)",
        c: "Хайр (Үйл үг)",
        d: "Хайл",
        correct: "a",
    },
    {
        question: "ᠭᠣᠶᠣ",
        a: "Гоо",
        b: "Гуя",
        c: "Гуа",
        d: "Гоё",
        correct: "d",
    },

    {
        question: "ᠳᠠᠪᠤᠰᠤ",
        a: "Давш",
        b: "Тэвш",
        c: "Дэвс",
        d: "Давс",
        correct: "d",
    },
    {
        question: "ᠤᠳᠤᠬᠤ",
        a: "Утаа",
        b: "Утах",
        c: "Удах",
        d: "Удаа",
        correct: "c",
    },
    {
        question: "ᠦᠨᠦᠷ",
        a: "Үнэр",
        b: "Үнэ",
        c: "Өнө",
        d: "Өнөр",
        correct: "a",
    },

    {
        question: "ᠡᠷᠳᠡᠮ ᠨᠣᠮ",
        a: "Эрдэм ном",
        b: "Эрдэнэ ном",
        c: "Эрдэм нам",
        d: "Эрдэнэ нам",
        correct: "a",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0
let wrong = 0

function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;
    function twoDigits( n )
    {return (n <= 9 ? "0" + n : n);}
    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
    function updateTimer()
    {
        msLeft = endTime - (+new Date);

        if ( msLeft < 1000 ) {
            quiz.innerHTML = `
            <p>Цаг дууслаа!</p>
           <p>Зөв хариулсан асуултын тоо: ${score}</p>
           <p>Буруу хариулсан асуултын тоо: ${wrong}</p>
           <button onclick="location.reload()">Дахин эхлэх</button>
           `
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }
}
countdown( "ten-countdown", 0, 40 );


loadQuiz()
function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       else {
        wrong++
        
    }
       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       }
    }
})