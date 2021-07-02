var nextPageButton = document.getElementById("nextPageButton");
var previousPageButton = document.getElementById("previousPageButton");
var totalPages = document.getElementById("totalPages");
var page = document.getElementsByClassName("jsPage");
var pageInput = document.getElementById("pageInput");

var pageInputValue;
var actualPage = 1;
var minimumPage = 1;
var maximumPage;


document.addEventListener("DOMContentLoaded", init());

function init() {
    setPageInputValue();
    getMaximumPage();
    setTotalPages();
	  setPageInputMinMax();
    nextPageOnClick();
    previousPageOnClick();
    // throughInputPageOnClick();
    throughInputPageOnkeypress();
    // disablePrevNext();

}



function getMaximumPage() {
    Object.entries(page).forEach(([i, value]) => {
        maximumPage = i;
    });
    maximumPage = parseInt(maximumPage) + 1;
}

function setTotalPages() {
    totalPages.innerText = maximumPage;
}

function nextPageOnClick() {
    nextPageButton.addEventListener("click", nextPage);
}

function nextPage() {
    if (actualPage < maximumPage) {
        actualPage = actualPage + 1;
        Object.entries(page).forEach(([i, value]) => {
            value.classList.remove("pageShow");
        });
        document.getElementById("page" + actualPage).classList.add("pageShow");
        setPageInputValue();
        disablePrevNext();
    }
}

function previousPageOnClick() {
    previousPageButton.addEventListener("click", previousPage);
}

function previousPage() {
    if (actualPage > minimumPage) {
        actualPage = actualPage - 1;
        Object.entries(page).forEach(([i, value]) => {
            value.classList.remove("pageShow");
        });
        document.getElementById("page" + actualPage).classList.add("pageShow");
        setPageInputValue();
        disablePrevNext();
    }
}

// function throughInputPageOnClick() {
//     pageInputButton.addEventListener("click", throughInputPage);
// }

function throughInputPageOnkeypress() {
    pageInput.addEventListener("keypress", throughInputPageKeypress);
}

function throughInputPageKeypress(e) {
    if (e.keyCode === 13) {
        throughInputPage();
    }
}

function getPageInput() {
    pageInputValue = parseInt(pageInput.value);
}

function throughInputPage() {
    getPageInput();
    if (pageInputValue >= minimumPage && pageInputValue <= maximumPage) {
        actualPage = pageInputValue;
        Object.entries(page).forEach(([i, value]) => {
            value.classList.remove("pageShow");
        });
        document.getElementById("page" + actualPage).classList.add("pageShow");
        disablePrevNext();
    }
}

function setPageInputValue() {
    pageInput.value = actualPage;
}

function setPageInputMinMax() {
    pageInput.min = minimumPage;
    pageInput.max = maximumPage;
}

