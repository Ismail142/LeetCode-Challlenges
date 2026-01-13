function deepClone(data) {
	const clone = {};

	if (Array.isArray(data)) {
		return data.map((i) => deepClone(i));
	} 
  
  if (data === null || typeof data !== "object") {
		return data;
	}

	for (const key in data) {
		clone[key] = deepClone(data[key]);
	}

	return clone;
}

const original = {
	name: "Alex",
	skills: ["JS", "React"],
	address: {
		city: "Accra",
	},
};

const copy = deepClone(original);

copy.address.city = "Kumasi";
original.skills[1] = "next.js";

console.log(original.address.city); // "Accra"
console.log(copy.address.city); // "Kumasi"
