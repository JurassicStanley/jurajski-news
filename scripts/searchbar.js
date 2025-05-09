// Funkcja wyszukiwania
function searchArticles() {
    const searchInput = document.getElementById("searchInput");
    const searchResultsDiv = document.getElementById("searchResults");
  
    if (!searchInput || !searchResultsDiv) {
      console.error("Brak elementu #searchInput lub #searchResults");
      return;
    }
  
    const searchTerm = searchInput.value.trim();
  
    // Jeśli pole jest puste, wyczyść wyniki i przerwij
    if (!searchTerm) {
      searchResultsDiv.innerHTML = "";
      return;
    }
  
    const regex = new RegExp(
      searchTerm.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
      "i"
    );
  
    const kafelki = document.querySelectorAll(".artykuly .kafelek");
    if (!kafelki.length) {
      console.error("Brak kafelków z klasą .artykuly .kafelek");
      return;
    }
  
    searchResultsDiv.innerHTML = "";
    let hasResults = false;
  
    kafelki.forEach((kafelek, index) => {
      const title = kafelek.querySelector(".Article_Title");
      const linkElement = kafelek.querySelector("a");
      const blurb = kafelek.querySelector(".MC_imageGridA_blurb");
      const image = kafelek.querySelector("img");
  
      if (!title || !linkElement || !blurb || !image) {
        console.warn(`Kafelek ${index}: brak jednego z elementów`);
        return;
      }
  
      if (regex.test(title.textContent)) {
        hasResults = true;
        const link = linkElement.getAttribute("href");
        const imageUrl = image.getAttribute("src");
  
        const result = document.createElement("div");
        result.className = "search-result-item";
        result.innerHTML = `
          <a href="${link}" class="search-result-link">
            <div class="search-result-content">
              <img class="search-result-image" src="${imageUrl}" alt="${title.textContent}">
              <div class="search-result-text">
                <h3 class="Article_Title">${title.textContent}</h3>
                <p>${blurb.textContent}</p>
              </div>
            </div>
          </a>
        `;
        searchResultsDiv.appendChild(result);
      }
    });
  
    if (!hasResults) {
      searchResultsDiv.innerHTML =
        '<p class="no-results">Brak wyników dla "' + searchTerm + '"</p>';
    }
  }
  
  // Dodaj dynamiczne wyszukiwanie po załadowaniu DOM
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", searchArticles);
      console.log("Listener input dodany do #searchInput");
    } else {
      console.error("Element #searchInput nie znaleziony podczas ładowania DOM");
    }
  });  