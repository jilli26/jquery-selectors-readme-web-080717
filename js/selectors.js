/*Write a function paragraphSelector that does not accept any parameters.
The function should use an element selector to select the p tags in index.html
and return those elements. (Note that we're using the plural because
the selector will always return an array when used with tags, even if there's only one!)*/
function paragraphSelector() {
  return $('p')
}

//return last image
function lastImageSelector() {
  return $('img:last')
}

//use id selector
function ninjaBabySelector() {
  return $('#baby-ninja')
}

//use class selector to return first two divs
function divSelector() {
  return $('.pics')
}

// use a first-child selector to return the first list item in the ul with the ID pic-list
function firstListItem() {
  return $('#pic-list li:first-child')
}
