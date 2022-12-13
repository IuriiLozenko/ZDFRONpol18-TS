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
    //   const inputValue = +document.querySelector("input").value;
    const input = document.querySelector("input");
    const inputValueRaw = input.value;
    const inputValue = +inputValueRaw; // Number(inputValueRaw)
    // 3. Wykonaj console loga `You have to pay *tutaj cena obliczona przez funkcję calculatePrice, wywołaj ją tu wprowadzając jako argumenty wartości z pkt 2 i pkt 1.
    console.log(`You have to pay ${calculatePrice(inputValue, hasDiscount)}`);
});
let multipleTypes = 0;
let multipleTypes1 = "123";
let multipleTypes2 = true;
let multipleTypes3 = false;
// let imiona: names;
// imiona = "Joseph";
// imiona = "John";
// imiona = 15;
// imiona = "Adam";
// imiona = "Jamal";
// const fn = (a: names, b: number): void => {
//   for (let i = 0; i < b; i++) {
//     console.log(a);
//   }
// };
//fn("Adam", 5);
//Element.style.color = 'red'
// Zad 3.
// 1. Wybierz paragraf "Todo:", odpowiednio go otypuj jeżeli trzeba. Wybierz również label "Add todo:"
// 2. Stwórz funkcję changeColor, funkcja będzie przyjmowała 2 argumenty: element który ma pokolorować i color który ma zostać użyty.
// Element na pierwszym argumencie może być typu paragraf lub label, natomiast kolor który może zostać użyty to red lub green. Posiadając tą informacje otypuj odpowiednio parametry funkcji changeColor.
// 3. W środku funkcji ustawiaj kolor podanego w argumencie elementu na kolor który również został podany w parametrze.
// 4. Przetestuj funkcję na elementach wybranych w pkt 1.
const todoPararaph = document.querySelector("p");
const addTodoLabel = document.querySelector("label");
const changeColor = (element, color) => {
    element.style.color = color;
};
changeColor(todoPararaph, "red");
changeColor(addTodoLabel, "green");
const john = {
    name: "John Smith",
    age: 30,
    married: true,
    profession: "UX Designer",
};
const anne = {
    name: "Anne Brown",
    age: 30,
    profession: "Front-end developer",
};
// Zad 5.
// 1. Stwórz 2 obiekty osób które mają zawierać imię, nazwisko, wiek, zawód i zwierzę domowe. Otypuj te obiekty wg odpowiednio interfejsu.
// 2. Osobie nr urodziło się dziecko, zaktualizuj interface z pkt 1 dopisując do niego pole parent i zaktualizuj odpowiednio same obiekty.
// 3. Stwórz interface Child dla nowonarodzonego dziecka, stwórz dla niego też obiekt w którym to dziecko opiszesz. Sam interface Child ma rozszerzać interface z pkt 1 o pole child (true/false)
// 4. Stwórz funkcję canIBuyBeer, funkcja przyjmuje obiekt osoby lub obiekt dziecka. Na podstawie pola age wykonaj console.log('Hello *imie, nazwisko* you are *wiek* years old, you *can/can't w zależności od wieku* buy beer')
