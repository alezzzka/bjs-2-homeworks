function getArrayParams(...arr) {

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;


	for (i = 0; i < arr.length; i++) {

		if (arr[i] !== undefined) {

			if (max < arr[i]) {
				max = arr[i];
			};

			if (min > arr[i]) {
				min = arr[i];
			};

			if (typeof arr[i] === "number" && arr[i] !== NaN) {
				sum += arr[i];
			};

			avg = sum / arr.length;

		} else {
			return 0;
		};
	};

	return {
		min: min,
		max: max,
		avg: Number(avg.toFixed(2))
	};

};

getArrayParams(10, 10, 11, 20, 10);





function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
