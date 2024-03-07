import React, { useState } from "react";

const LottoE = () => {
	const [numbersA, setNumbersA] = useState([]);
	const [numbersB, setNumbersB] = useState([]);

	const generateNumbers = () => {
		const generatedNumbersA = [];
		const generatedNumbersB = [];
		while (generatedNumbersA.length < 5) {
			const randomNumberA = Math.floor(Math.random() * 50 + 1);
			if (!generatedNumbersA.includes(randomNumberA)) {
				generatedNumbersA.push(randomNumberA);
			}
		}
		while (generatedNumbersB.length < 2) {
			const randomNumberB = Math.floor(Math.random() * 12 + 1);
			if (!generatedNumbersB.includes(randomNumberB)) {
				generatedNumbersB.push(randomNumberB);
			}
		}
		generatedNumbersA.sort((a, b) => a - b);
		setNumbersA(generatedNumbersA);
		generatedNumbersB.sort((a, b) => a - b);
		setNumbersB(generatedNumbersB);
	};

	return (
		<div className="container">
			<div className="flex flex-wrap gap-12 justify-center">
				<div className="flex flex-wrap gap-4 justify-center">
					<div className="lotEBall">
						<p>{numbersA[0]}</p>
					</div>
					<div className="lotEBall">
						<p>{numbersA[1]}</p>
					</div>
					<div className="lotEBall">
						<p>{numbersA[2]}</p>
					</div>
					<div className="lotEBall">
						<p>{numbersA[3]}</p>
					</div>
					<div className="lotEBall">
						<p>{numbersA[4]}</p>
					</div>
				</div>

				<div className="flex flex-wrap gap-4 justify-center">
					<div className="lotEBall">
						<p>{numbersB[0]}</p>
					</div>

					<div className="lotEBall">
						<p>{numbersB[1]}</p>
					</div>
				</div>
			</div>

			<div className="buttonWrapper">
				<button onClick={generateNumbers}>
					Számok generálása
				</button>
			</div>
		</div>
	);
};

export default LottoE;
