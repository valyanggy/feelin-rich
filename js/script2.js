const money = {
	value: 0,
	add(n = 1) {
		if (isNaN(n)) return;
		this.set(this.value + n);
	},
	set(n = this.value) {
		if (isNaN(n)) return;
		if (n === 0) {
			this.reset();
			return;
		}
		this.value = n;
		document.getElementById('displayCount').textContent = `${this.value}00`;
		// check if divisible by 5
		if (this.value % 5 === 0) {
			document.getElementById('tongue').dataset.visibilityState = 'visible';
		}
	},
	reset() {
		this.value = 0;
		document.getElementById('displayCount').textContent = '0';
		document.getElementById('tongue').removeAttribute('data-visibility-state');
	}
};

setupCursor(document.querySelector('.cursor'));

document.getElementById('countButton').addEventListener('click', () => {
	money.add(1);
});

document.getElementById('tongue').addEventListener('mouseover', (event) => {
	document.getElementById('heartbeat').play();
	event.currentTarget.removeAttribute('data-visibility-state');
});

window.addEventListener('keydown', (event) => {
	if (event.key === 'r') {
		money.reset();
	}
});

function setupCursor(cursor) {
	const currentPos = {
		x: 0,
		y: 0
	};

	const move = (x, y) => {
		cursor.style.transform = `translate(${x}px, ${y}px)`;
	};

	document.addEventListener('mousemove', (event) => {
		cursor.style.transition = '';
		currentPos.x = event.clientX;
		currentPos.y = event.clientY;
		move(currentPos.x, currentPos.y);
	});

	document.addEventListener('click', (event) => {
		cursor.style.transition = 'transform 0.5s cubic-bezier(0.19,1,0.22,1)';
		move(currentPos.x, currentPos.y - 200);
		cursor.addEventListener('transitionend', function moveBack() {
			cursor.removeEventListener('transitionend', moveBack);
			move(currentPos.x, currentPos.y);
		});
	});
}
