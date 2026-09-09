let name = "sami"
let pass = "1234"

let username = document.querySelector('#username');
let password = document.querySelector('#password');
let submit = document.querySelector('#get-started');

submit.addEventListener('click', function(){
    if(username.value === name && password.value === pass){
        document.querySelector('#login-page').hidden = true;
        document.querySelector('#dashboard').hidden = false;
    }
})

async function loadLessons() {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/levels/all"
    );

    const data = await response.json()
    const lessons = data.data
    const container = document.getElementById('lesson-container');
    container.innerHTML = '';

    lessons.forEach(lesson => {
        container.innerHTML += `<button id="${lesson.level_no}" data-level="${lesson.level_no}" class="lesson-card border flex justify-center items-center gap-[10px] rounded-[5px] text-blue-500 font-semibold hover:bg-blue-600 hover:text-white w-[100px] h-[40px] "><img class="size-[15px]" src="images/fa-book-open.png" alt="">Lesson ${lesson.level_no}</button>`;
    });
    
}

loadLessons();

async function loadWords(Id) {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/level/${Id}`,
    );
    const data = await response.json();
    const words = data.data;
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';
    words.forEach(word =>{
        wordContainer.innerHTML += `<div class="bg-white shadow-xl rounded-[10px] size-[250px] md:size-[300px] text-center flex flex-col gap-y-5 justify-center items-center">
                                        <h3 class="text-3xl font-semibold">${word.word}</h3>
                                        <p class="text-2xl font-semibold">Meaning / Pronunciation</p>
                                        <h1 class="text-xl font-semibold">${word.meaning} / ${word.pronunciation}</h1>
                                        <div class="flex justify-between w-[240px]">
                                            <button class="size-[40px] bg-blue-100 hover:shadow-xl rounded-md flex items-center justify-center"><img class="size-[30px]" src="images/info.svg" alt=""></button>
                                            <button class="size-[40px] bg-blue-100 hover:shadow-xl rounded-md flex items-center justify-center"><img class="size-[30px]" src="images/sound.svg" alt=""></button>
                                        </div>
                                    </div>`;
    });
}

const lessonContainer = document.getElementById('lesson-container');
lessonContainer.addEventListener('click',function(e){
    const clickedButton = e.target.closest('button');
    if(!clickedButton) return;
    const levelId = clickedButton.dataset.level;
    loadWords(levelId);
})


