window.onload = ev => {
	const loader = document.querySelector('.loader-wrapper');
	setTimeout(() => {
		document.body.classList.remove('loading');
		loader.classList.add('fade');

		setTimeout(() => {
			loader.remove();
		}, 500);
	}, 500);
};
