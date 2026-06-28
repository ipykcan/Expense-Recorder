const form = document.getElementById("expenseForm");
const item = document.getElementById("item");
const price = document.getElementById("price");
const tbody = document.querySelector("tbody");
const total = document.getElementById("total");

let sum = 0;

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const itemName = item.value.trim();
    const itemPrice = Number(price.value);

    if (itemName === "" || itemPrice <= 0) {
        alert("Please enter valid details.");
        return;
    }

    tbody.innerHTML += `
        <tr>
            <td>${itemName}</td>
            <td>₹${itemPrice}</td>
        </tr>
    `;

    sum += itemPrice;
    total.textContent = sum;
    form.reset();
});