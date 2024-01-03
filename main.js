const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".main");
const slidesCount = mainSlide.querySelectorAll("div").length;
const colorChangeClasses = document.querySelectorAll(".color-change");
const textChangeClasses = document.querySelectorAll(".text-change");
const hoverColorClasses = document.querySelectorAll(".hover-change");
const backgroundChange = document.querySelector(".bk-change");
const map = document.getElementById("location");
const iconChangeClasses = document.querySelectorAll(".icon-change");

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount -1) * 100}vh`;

downBtn.addEventListener("click", () => {
    changeSlide("up");
    colorChange();
    hoverClasses();
});

upBtn.addEventListener("click", () => {
    changeSlide("down");
    colorChange();
    hoverClasses()
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0)
        {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

function colorChange() {
    if(activeSlideIndex === 0) {
        colorChangeClasses.forEach(element => {
            element.style.backgroundColor = "#008F95";
        });
        textChangeClasses.forEach(element => {
            element.style.color = "#008F95";
        });
        map.style.borderColor = "#008F95";
        map.style.borderColor = "#008F95";
    } else if(activeSlideIndex === 1) {
        colorChangeClasses.forEach(element => {
            element.style.backgroundColor = "#E86E80";
        });
        textChangeClasses.forEach(element => {
            element.style.color = "#E86E80";
        });
        map.style.borderColor = "#E86E80";
        map.style.borderColor = "#E86E80";
    } else if(activeSlideIndex === 2) {
        colorChangeClasses.forEach(element => {
            element.style.backgroundColor = "#E9B000";
        });
        textChangeClasses.forEach(element => {
            element.style.color = "#E9B000";
        });
        map.style.borderColor = "#E9B000";
        map.style.borderColor = "#E9B000";
    } else if(activeSlideIndex === 3){
        colorChangeClasses.forEach(element => {
            element.style.backgroundColor = "#E24E42";
        });
        textChangeClasses.forEach(element => {
            element.style.color = "#E24E42";
        });
        map.style.borderColor = "#E24E42";
        map.style.borderColor = "#E24E42";
    }
}

function hoverClasses(){
    if(activeSlideIndex === 0) {
    hoverColorClasses.forEach(item => {item.addEventListener('mouseenter', () =>
        item.style.backgroundColor = "#008F95")});
    hoverColorClasses.forEach(item => {item.addEventListener('mouseleave', () => 
        item.style.backgroundColor = "transparent")});
    } else if (activeSlideIndex === 1) {
    hoverColorClasses.forEach(item => {item.addEventListener('mouseenter', () =>
        item.style.backgroundColor = "#E86E80")});
    hoverColorClasses.forEach(item => {item.addEventListener('mouseleave', () => 
        item.style.backgroundColor = "transparent")});
    } else if (activeSlideIndex === 2) {
    hoverColorClasses.forEach(item => {item.addEventListener('mouseenter', () =>
        item.style.backgroundColor = "#E9B000")});
    hoverColorClasses.forEach(item => {item.addEventListener('mouseleave', () => 
        item.style.backgroundColor = "transparent")});
    } else if (activeSlideIndex === 3) {
    hoverColorClasses.forEach(item => {item.addEventListener('mouseenter', () =>
        item.style.backgroundColor = "#E24E42")});
    hoverColorClasses.forEach(item => {item.addEventListener('mouseleave', () => 
        item.style.backgroundColor = "transparent")});
        }
}

function filterChange() {
    if(activeSlideIndex === 0) {
    iconChangeClasses.forEach(element => {
        element.style.filter = "invert(32%) sepia(79%) saturate(1671%) hue-rotate(157deg) brightness(92%) contrast(101%)";
    });
} else if(activeSlideIndex === 1) {
    iconChangeClasses.forEach(element => {
        element.style.filter = "brightness(0) saturate(100%) invert(66%) sepia(58%) saturate(2576%) hue-rotate(307deg) brightness(94%) contrast(93%)";
    });
} else if(activeSlideIndex === 2) {
    iconChangeClasses.forEach(element => {
        element.style.filter = "brightness(0) saturate(100%) invert(69%) sepia(11%) saturate(4708%) hue-rotate(7deg) brightness(99%) contrast(102%)";
    });
} else if(activeSlideIndex === 3){
    iconChangeClasses.forEach(element => {
        element.style.filter = "brightness(0) saturate(100%) invert(33%) sepia(95%) saturate(941%) hue-rotate(333deg) brightness(100%) contrast(82%)";
    });
}
}