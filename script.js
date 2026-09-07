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
        container.innerHTML += `<button data-level="${lesson.level_no}" class="border flex justify-center items-center gap-[10px] rounded-[5px] text-blue-500 font-semibold hover:bg-blue-600 hover:text-white w-[100px] h-[40px] "><img class="size-[15px]" src="images/fa-book-open.png" alt="">Lesson ${lesson.level_no}</button>`;
    });
    
}

loadLessons();

