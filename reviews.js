const reviews = [
    {
        id: 1,
        name: "Ульяна",
        job: "9 класс",
        text: "Заниматься здесь - одно удовольствие! Все объясняют простым понятным языком. Никогда не кричат, если непонятно задание - объяснят ещё раз. Уроки интересные и развлекательные. Домашнее задание разнообразное, в нем участвуют и грамматика и лексика, смотрим сериалы на английском. Очень интересно и весело, время там летит незаметно!:)"
    },
    {
        id: 2,
        name: "Наталья",
        job: "Мама Андрея, 7 класс",
        text: "Анна Витальевна занимается с нашим сыном с августа 2019 года, занимается сразу двумя языками, китайским и английским. Китайским начали заниматься с нуля, достигнутые результаты нас поражают. Анна Витальевна внимательный, требовательный педагог, при этом ребенок ждут занятий, всегда рад встрече. Надеемся, что Анна Витальевна найдет возможность преподавать нашей подрастающей дочери."
    },
    {
        id: 3,
        name: "Юлия",
        job: "Мама Феди",
        text: "Сын занимается в группе английского у Анны в FUN уже год. Занятия ему очень нравятся. Уроки проходят весело: то они смотрят мультики, то у них викторины, то ещё какой-нибудь конкурс с подарками. Так что он расстраивается, когда из-за обстоятельств приходится заниматься по зуму, а не в классе. Это большая удача, когда педагог может заинтересовать ребенка своим предметом. Сделать обучение интересным и веселым, а не зубрежкой правил."
    },
    {
        id: 4,
        name: "Ирина",
        job: "Мама Ксюши и Насти",
        text: "С первого сентября планируем снова начать занятия в школе FUN в Подольске! Это лучшая языковая школа! Обе мои девочки ходят с удовольствием, даже домашнее задание с радостью выполняют! У старшей за год очень большой прогресс в знании языка, даже планирует сдавать ОГЭ по английскому. Анна с легкостью находит подход к каждому ребенку, располагает к занятиям даже самых маленьких непосед) ждём с нетерпением начала учебного года!"
    }
]

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
})

//show person based on item
function showPerson(person){
    const item = reviews[person];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next item

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

//show prev item

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;

    }
    showPerson(currentItem);
})

