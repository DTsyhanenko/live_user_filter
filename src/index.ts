const result = document.getElementById('result') as HTMLUListElement
const filter = document.getElementById('filter') as HTMLInputElement
const listItems = []


getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    // We are destructuring the data to get results (instead of data.results...)
    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li') as HTMLLIElement

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class=""user-info>
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })
}