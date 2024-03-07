import React, { useState } from "react";

const Lotto6 = () => {
	const [numbers, setNumbers] = useState([]);

	const generateNumbers = () => {
		const generatedNumbers = [];
		while (generatedNumbers.length < 6) {
			const randomNumber = Math.floor(Math.random() * 45 + 1);
			if (!generatedNumbers.includes(randomNumber)) {
				generatedNumbers.push(randomNumber);
			}
		}
		generatedNumbers.sort((a, b) => a - b);
		setNumbers(generatedNumbers);
	}
	
	return (
		<div className="container">
				<div className="flex flex-wrap gap-4 justify-center">
					<div className="lot6Ball">
						<p>{numbers[0]}</p>
					</div>
					<div className="lot6Ball">
						<p>{numbers[1]}</p>
					</div>
					<div className="lot6Ball">
						<p>{numbers[2]}</p>
					</div>
					<div className="lot6Ball">
						<p>{numbers[3]}</p>
					</div>
					<div className="lot6Ball">
						<p>{numbers[4]}</p>
					</div>
					<div className="lot6Ball">
						<p>{numbers[5]}</p>
					</div>
				</div>

			<div className="buttonWrapper">
				<button onClick={generateNumbers}>
					Számok generálása
				</button>
			</div>
		</div>
	)
}

export default Lotto6