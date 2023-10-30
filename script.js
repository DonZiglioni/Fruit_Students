const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const suggestionBox = document.querySelector('.suggestions');
const body = document.querySelector('body')

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//  ****  Compares the search input with the array of fruits  ****
//  ****  and then returns the results in an array  ****
const search = (str) => {
	let results = [];

	fruit.map((f) => {
		let searchFruit = f.toLowerCase()
		if (searchFruit.indexOf(str) !== -1) {
			results.push(f)
		}
	})
	return results;
}

//  ****  Runs the search() function and uses the returned array  ****
//  ****  as a parameter for calling the showSuggestions() function  ****
const searchHandler = () => {
	let results = search(input.value.toLowerCase())
	showSuggestions(results, input.value.toLowerCase())
}

//  ****  Receives the updated array of search results, creates the  ****
//  ****  list items(<li>) for each fruit that matches the results  ****
function showSuggestions(results) {
	let content = results.map((item) => {
		return `<li> ${item} </li>`
	})
	suggestions.innerHTML = content.toString().replace(/,/g, '')
}

//  ****  Receives the updated searh results, gets the html elements,  ****
//  ****  and displays the selected option with it's forwarding links ****
function useSuggestion(e) {
	if (!e.target.innerText) {
		alert("Search for a fruit to get started!");
		return
	};
	input.value = e.target.innerText
	suggestions.innerHTML = ''

	let linkBox = document.querySelector('.result-box')
	let linkTitle = document.querySelector('.result-title')
	linkTitle.innerText = e.target.innerText
	linkBox.appendChild(linkTitle)

	let url = `https://en.wikipedia.org/wiki/${e.target.innerText}`
	let createLink = document.querySelector('.wiki')
	createLink.setAttribute('href', url)
	createLink.innerText = `Learn about ${e.target.innerText}'s on Wikipedia!`
	linkBox.append(createLink)

	let url2 = `https://www.britannica.com/search?query=${e.target.innerText}`
	let createLink2 = document.querySelector('.brit')
	createLink2.setAttribute('href', url2)
	createLink2.innerText = `Explore the ${e.target.innerText} on Britannica`
	linkBox.append(createLink2)
	body.appendChild(linkBox)
}

input.addEventListener('keyup', searchHandler);      // Handles Keyboard Input
suggestions.addEventListener('click', useSuggestion);// Handles Selected Fruit