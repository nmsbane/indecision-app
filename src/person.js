const isAdult = age => age >= 18; // named export

const canCode = age => age >= 22; // named export

const isSenior = age => age >= 65;

// alternate syntax for named exports

export { isAdult, canCode, isSenior as default };
