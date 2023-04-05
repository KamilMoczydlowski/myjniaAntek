//navigation
const burgerBtn = document.getElementById('burger-btn');
const burgerMidBar = document.getElementById('burger-mid-bar');
const nav = document.getElementById('nav');

//carousel carousel-btn--active
const carouselFilm = document.getElementById('carousel-film');
const leftArrBtn = document.getElementById('left-arrow-button');
const rightArrBtn = document.getElementById('right-arrow-button');

const carouselBtn1 = document.getElementById('carousel-btn-1');
const carouselBtn2 = document.getElementById('carousel-btn-2');
const carouselBtn3 = document.getElementById('carousel-btn-3');
const carouselBtn4 = document.getElementById('carousel-btn-4');
const carouselBtn5 = document.getElementById('carousel-btn-5');
const carouselBtn6 = document.getElementById('carousel-btn-6');
const carouselBtn7 = document.getElementById('carousel-btn-7');

const carouselBtnsArr = [
	carouselBtn1,
	carouselBtn2,
	carouselBtn3,
	carouselBtn4,
	carouselBtn5,
	carouselBtn6,
	carouselBtn7,
];

let carouselNum = 1;

const handleBurgerBtn = () => {
	burgerMidBar.classList.toggle('top-bar__burger-btn-mid-bar--none');
	burgerBtn.classList.toggle('rotateBefore');
	burgerBtn.classList.toggle('rotateAfter');
	nav.classList.toggle('nav--show');
};

const carouselToTheRight = () => {
	if (carouselNum < 7) {
		carouselFilm.style = `left: -${carouselNum}00%`;

		const inactiveBtn = document.getElementById(`carousel-btn-${carouselNum}`);
		inactiveBtn.classList.remove('carousel-btn--active');

		++carouselNum;

		const newActiveBtn = document.getElementById(`carousel-btn-${carouselNum}`);
		newActiveBtn.classList.add('carousel-btn--active');
	} else {
		const inactiveBtn = document.getElementById(`carousel-btn-${carouselNum}`);
		inactiveBtn.classList.remove('carousel-btn--active');

		carouselNum = 1;

		carouselFilm.style = `left: -${carouselNum - 1}00%`;

		const newActiveBtn = document.getElementById(`carousel-btn-${carouselNum}`);
		newActiveBtn.classList.add('carousel-btn--active');
	}
};

let interval = setInterval(carouselToTheRight, 5000);

const resetInterval = () => {
	clearInterval(interval);
	interval = setInterval(carouselToTheRight, 5000);
};

const carouselRightArrHandle = () => {
	carouselToTheRight();
	resetInterval();
};

const carouselLeftArrHandle = () => {
	if (carouselNum > 1) {
		const inactiveBtn = document.getElementById(`carousel-btn-${carouselNum}`);
		inactiveBtn.classList.remove('carousel-btn--active');

		--carouselNum;

		carouselFilm.style = `left: -${carouselNum - 1}00%`;

		const newActiveBtn = document.getElementById(`carousel-btn-${carouselNum}`);
		newActiveBtn.classList.add('carousel-btn--active');
	} else {
		const inactiveBtn = document.getElementById(`carousel-btn-${carouselNum}`);
		inactiveBtn.classList.remove('carousel-btn--active');

		carouselNum = 7;

		carouselFilm.style = `left: -${carouselNum - 1}00%`;

		const newActiveBtn = document.getElementById(`carousel-btn-${carouselNum}`);
		newActiveBtn.classList.add('carousel-btn--active');
	}

	resetInterval();
};

const takeMeToPicture = carouselNum => {
	carouselBtnsArr.forEach(item => item.classList.remove('carousel-btn--active'))

	carouselFilm.style = `left: -${carouselNum - 1}00%`;

	const newActiveBtn = document.getElementById(`carousel-btn-${carouselNum}`);
	newActiveBtn.classList.add('carousel-btn--active');

	resetInterval();
};

const takeMeTo1stPicture = () => {
	carouselNum = 1;
	takeMeToPicture(carouselNum);
};
const takeMeTo2ndPicture = () => {
	carouselNum = 2;
	takeMeToPicture(carouselNum);
};
const takeMeTo3rdPicture = () => {
	carouselNum = 3;
	takeMeToPicture(carouselNum);
};
const takeMeTo4thPicture = () => {
	carouselNum = 4;
	takeMeToPicture(carouselNum);
};
const takeMeTo5thPicture = () => {
	carouselNum = 5;
	takeMeToPicture(carouselNum);
};
const takeMeTo6thPicture = () => {
	carouselNum = 6;
	takeMeToPicture(carouselNum);
};
const takeMeTo7thPicture = () => {
	carouselNum = 7;
	takeMeToPicture(carouselNum);
};

burgerBtn.addEventListener('click', handleBurgerBtn);
rightArrBtn.addEventListener('click', carouselRightArrHandle);
leftArrBtn.addEventListener('click', carouselLeftArrHandle);

carouselBtn1.addEventListener('click', takeMeTo1stPicture);
carouselBtn2.addEventListener('click', takeMeTo2ndPicture);
carouselBtn3.addEventListener('click', takeMeTo3rdPicture);
carouselBtn4.addEventListener('click', takeMeTo4thPicture);
carouselBtn5.addEventListener('click', takeMeTo5thPicture);
carouselBtn6.addEventListener('click', takeMeTo6thPicture);
carouselBtn7.addEventListener('click', takeMeTo7thPicture);
