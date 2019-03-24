// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	let object = {};
	const halfDollarsWorth = 50,
		quartersWorth = 25,
		dimesWorth = 10,
		nickelsWorth = 5;

	if (currency > 0) {

		if (currency > 10000) {
			object.error = "You are rich, my friend! We don't have so much coins for exchange";
		} else {
			object.H = Math.floor(currency / halfDollarsWorth);
			object.Q = Math.floor((currency % halfDollarsWorth) / quartersWorth);
			object.D = Math.floor(((currency % halfDollarsWorth) % quartersWorth) / dimesWorth);
			object.N = Math.floor((((currency % halfDollarsWorth) % quartersWorth) % dimesWorth) / nickelsWorth);
			object.P = (((currency % halfDollarsWorth) % quartersWorth) % dimesWorth) % nickelsWorth;

			for (key in object) {
				if (object[key] == 0) {
					delete object[key];
				}
			}

		}
	}

	return object;
}