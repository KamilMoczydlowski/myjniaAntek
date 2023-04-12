//navigation
const burgerBtn = document.getElementById('burger-btn');
const burgerMidBar = document.getElementById('burger-mid-bar');
const nav = document.getElementById('nav');
const allNavLinks = document.querySelectorAll('.nav-list__item-link')
const linkToUpholstery = document.getElementById('nav-link-washing-upholstery')
const linkToPolishUp = document.getElementById('nav-link-polish-up')

//carousel
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

// washing programs
const hatchBtn = document.getElementById('hatch-sedan-kombi-btn');
const vanBtn = document.getElementById('van-bus-suv-btn');
const price1Span = document.getElementById('program-1-price');
const price2Span = document.getElementById('program-2-price');
const price3Span = document.getElementById('program-3-price');
const price4Span = document.getElementById('program-4-price');
const price5Span = document.getElementById('program-5-price');

// washing / polish section

const upholsteryPolishUpCarousel = document.getElementById('washing-upholstery-polish-up-carousel')
const washingUpholsteryBtn = document.getElementById(
	'washing-upholstery-header-btn'
);
const polishUpBtn = document.getElementById('polish-up-header-btn');

// zip
const upholsteryTextBefore = document.getElementById('upholstery-text-before');
const upholsteryTextAfter = document.getElementById('upholstery-text-after');
const upholsteryBtn = document.getElementById('upholstery-arr-btn');
const upholsteryWindow2 = document.getElementById('upholstery-window-after');

const polishTextBefore = document.getElementById('polish-up-text-before');
const polishTextAfter = document.getElementById('polish-up-text-after');
const polishBtn = document.getElementById('polish-up-arr-btn');
const polishWindow2 = document.getElementById('polish-up-window-after');

let carouselNum = 1;

// burger btn handler

const handleBurgerBtn = () => {
	burgerMidBar.classList.toggle('top-bar__burger-box-btn-mid-bar--none');
	burgerBtn.classList.toggle('rotateBefore');
	burgerBtn.classList.toggle('rotateAfter');
	nav.classList.toggle('nav--show');
};

// header carousel

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
	carouselBtnsArr.forEach(item => item.classList.remove('carousel-btn--active'));

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

// washing programs btn handlers

const changePriceHandler = (price1, price2, price3, price4, price5) => {
	price1Span.innerHTML = `${price1} zł`;
	price2Span.innerHTML = `${price2} zł`;
	price3Span.innerHTML = `${price3} zł`;
	price4Span.innerHTML = `${price4} zł`;
	price5Span.innerHTML = `${price5} zł`;
};

const hatchBtnHandler = () => {
	hatchBtn.classList.add('washing-programs__btns-single-btn--active');
	vanBtn.classList.remove('washing-programs__btns-single-btn--active');
	changePriceHandler(24, 26, 28, 30, 32);
};

const vanBtnHandler = () => {
	vanBtn.classList.add('washing-programs__btns-single-btn--active');
	hatchBtn.classList.remove('washing-programs__btns-single-btn--active');
	changePriceHandler(27, 29, 31, 33, 35);
};

// washing / polish section btn handler

const washingUpholsteryBtnHandler = () => {
	upholsteryPolishUpCarousel.style = 'left: -100%'
};
const polishUpBtnHandler = () => {
	upholsteryPolishUpCarousel.style = 'left: 0%'
};

// zip handle

const widthOfBox = () => {
	let width;
	if (window.innerWidth < 500) {
		width = window.innerWidth;
	} else {
		width = 500;
	}
	return width;
};

const gap = () => (window.innerWidth - widthOfBox()) / 2;

// zip handle % version

const mousemoveUpholsteryHandler = () => {
	const width = widthOfBox();
	const xValue = event.pageX;

	const calcPerc = () => {
		const result = ((xValue - gap()) / width) * 100;
		return result;
	};

	const calcOpacityBefore = () => {
		const result = (xValue - gap()) / width;
		return result;
	};

	const calcOpacityAfter = () => {
		const result = (width + gap() - xValue) / width;
		return result;
	};

	if (calcPerc() > 0 && calcPerc() < 100) {
		upholsteryWindow2.style.left = `${calcPerc()}%`;
		upholsteryBtn.style.left = `${calcPerc()}%`;

		upholsteryTextBefore.style.opacity = calcOpacityBefore();
		upholsteryTextAfter.style.opacity = calcOpacityAfter();
	}
};

const mousemovePolishUpHandler = () => {
	const width = widthOfBox();
	const xValue = event.pageX;

	const calcPerc = () => {
		const result = ((xValue - gap()) / width) * 100;
		return result;
	};

	const calcOpacityBefore = () => {
		const result = (xValue - gap()) / width;
		return result;
	};

	const calcOpacityAfter = () => {
		const result = (width + gap() - xValue) / width;
		return result;
	};

	if (calcPerc() > 0 && calcPerc() < 100) {
		polishWindow2.style.left = `${calcPerc()}%`;
		polishBtn.style.left = `${calcPerc()}%`;

		polishTextBefore.style.opacity = calcOpacityBefore();
		polishTextAfter.style.opacity = calcOpacityAfter();
	}
};

// listeners

burgerBtn.addEventListener('click', handleBurgerBtn);
allNavLinks.forEach(item => item.addEventListener('click', handleBurgerBtn))
linkToUpholstery.addEventListener('click', polishUpBtnHandler)
linkToPolishUp.addEventListener('click', washingUpholsteryBtnHandler)

rightArrBtn.addEventListener('click', carouselRightArrHandle);
leftArrBtn.addEventListener('click', carouselLeftArrHandle);

carouselBtn1.addEventListener('click', takeMeTo1stPicture);
carouselBtn2.addEventListener('click', takeMeTo2ndPicture);
carouselBtn3.addEventListener('click', takeMeTo3rdPicture);
carouselBtn4.addEventListener('click', takeMeTo4thPicture);
carouselBtn5.addEventListener('click', takeMeTo5thPicture);
carouselBtn6.addEventListener('click', takeMeTo6thPicture);
carouselBtn7.addEventListener('click', takeMeTo7thPicture);

hatchBtn.addEventListener('click', hatchBtnHandler);
vanBtn.addEventListener('click', vanBtnHandler);

washingUpholsteryBtn.addEventListener('click', washingUpholsteryBtnHandler);
polishUpBtn.addEventListener('click', polishUpBtnHandler);

upholsteryBtn.addEventListener('mousedown', () => {
	document.addEventListener('mousemove', mousemoveUpholsteryHandler);
});
upholsteryBtn.addEventListener('touchstart', () => {
	document.addEventListener('touchmove', mousemoveUpholsteryHandler);
});

polishBtn.addEventListener('mousedown', () => {
	document.addEventListener('mousemove', mousemovePolishUpHandler);
});
polishBtn.addEventListener('touchstart', () => {
	document.addEventListener('touchmove', mousemovePolishUpHandler);
});

document.addEventListener('mouseup', () => {
	document.removeEventListener('mousemove', mousemoveUpholsteryHandler);
});
document.addEventListener('touchend', () => {
	document.removeEventListener('touchmove', mousemoveUpholsteryHandler);
});

document.addEventListener('mouseup', () => {
	document.removeEventListener('mousemove', mousemovePolishUpHandler);
});
document.addEventListener('touchend', () => {
	document.removeEventListener('touchmove', mousemovePolishUpHandler);
});
