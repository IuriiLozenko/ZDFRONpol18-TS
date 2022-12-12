// 1. PODSTAWOWE TYPY DANYCH
// a) number
// let age = 32;
// age = "lalalalalala";
let age;
age = 32;
// age = "lalalala";
// age = true;
// age = {
//   x: 1,
// };
age = 33;
age = 34;
//console.log(age);
// b) string
let surname;
surname = "Wall";
//surname = 15;
// c) boolean
let visible;
visible = true;
visible = false;
// visible = 15;
// 2. TYPOWANIE FUNKCJI
const add = (a, b) => a + b;
const outcome = add(4, 5);
console.log(outcome);
const displayMessage = (message, age) => {
    alert(`${message}, ${age}`);
};
//displayMessage("My name is John", 33);
// Zad 1.
// Napisz funkcję która będzie obliczała cenę w zależności od tego czy zniżka jest przyznana czy nie.
// Nazwa funkcji: calculatePrice
// Parametry: originalPrice (liczba), hasDiscount (true/false)
// Funkcjonalność: Jeżeli parametr hasDiscount jest równy true, zwróć liczbę originalPrice pomniejszoną o 23%, jeżeli hasDiscount jest równe false, zwróć z funkcji liczbę originalPrice nie przerabiając jej
// const x = calculatePrice(100, true)
const calculatePrice = (originalPrice, hasDiscount) => hasDiscount ? originalPrice / 1.23 : originalPrice;
const phonePrice = calculatePrice(2000, true);
console.log(phonePrice);
// 3. TYPY ELEMENTÓW DOM
const button = document.querySelector("button");
const categoriesList = document.querySelector(".categories");
button.addEventListener("click", () => {
    // Zad 2.
    // 1. W jakiś sposób wylosuj czy użytkownik ma zniżke czy jej nie ma i zapisz do zmiennej true albo false (Math.random())
    const hasDiscount = Math.random() > 0.5 ? true : false; // Math.random zwraca liczbe od 0 1
    // 2. Ściągnij wartość z inputu textowego id name (wybranie inputu + ściągnięcie value, samo value zapisz do zmiennej)
    const inputValue = +document.querySelector("input").value;
    // 3. Wykonaj console loga `You have to pay *tutaj cena obliczona przez funkcję calculatePrice, wywołaj ją tu wprowadzając jako argumenty wartości z pkt 2 i pkt 1.
    console.log(`You have to pay ${calculatePrice(inputValue, hasDiscount)}`);
});
