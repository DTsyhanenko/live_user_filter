"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];
getData();
filter.addEventListener('input', (e) => filterData(e.target.value));
function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide');
        }
        else {
            item.classList.add('hide');
        }
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://randomuser.me/api?results=50');
        // We are destructuring the data to get results (instead of data.results...)
        const { results } = yield res.json();
        // Clear result
        result.innerHTML = '';
        results.forEach(user => {
            const li = document.createElement('li');
            listItems.push(li);
            li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class=""user-info>
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;
            result.appendChild(li);
        });
    });
}
//# sourceMappingURL=index.js.map