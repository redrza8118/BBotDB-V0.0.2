const searchInput = document.getElementById("card-search");

const rarityFilter = document.getElementById("rarity-filter");
const positionFilter = document.getElementById("position-filter");
const traitFilter = document.getElementById("trait-filter");

const shootingMin = document.getElementById("shooting-min");
const shootingMax = document.getElementById("shooting-max");

const finishingMin = document.getElementById("finishing-min");
const finishingMax = document.getElementById("finishing-max");

const defendingMin = document.getElementById("defending-min");
const defendingMax = document.getElementById("defending-max");

const playmakingMin = document.getElementById("playmaking-min");
const playmakingMax = document.getElementById("playmaking-max");

const sortFilter = document.getElementById("sort-filter");
const clearFiltersButton = document.getElementById("clear-filters");

const cardList = document.getElementById("card-list");
const cardCount = document.getElementById("card-count");


// -----------------------------
// Populate filter options
// -----------------------------

function populateFilters() {

    const rarities = new Set();
    const positions = new Set();
    const traits = new Set();

    cards.forEach(card => {

        if (card.rarity) {
            rarities.add(card.rarity);
        }

        if (Array.isArray(card.position)) {
            card.position.forEach(position => {
                positions.add(position);
            });
        }

        if (Array.isArray(card.traits)) {
            card.traits.forEach(trait => {
                if (trait.name) {
                    traits.add(trait.name);
                }
            });
        }

    });


    // Rarities
    [...rarities]
        .sort((a, b) => {
            const rarityA = rarityOrder[a.toUpperCase()] || 0;
            const rarityB = rarityOrder[b.toUpperCase()] || 0;

            return rarityB - rarityA;
        })
        .forEach(rarity => {

            const option = document.createElement("option");

            option.value = rarity;
            option.textContent = rarity;

            rarityFilter.appendChild(option);

        });


    // Positions
    [...positions]
        .sort()
        .forEach(position => {

            const option = document.createElement("option");

            option.value = position;
            option.textContent = position;

            positionFilter.appendChild(option);

        });


    // Traits
    [...traits]
        .sort()
        .forEach(trait => {

            const option = document.createElement("option");

            option.value = trait;
            option.textContent = trait;

            traitFilter.appendChild(option);

        });

}


// -----------------------------
// Utility functions
// -----------------------------

function getNumber(value) {

    if (value === "" || value === null || value === undefined) {
        return null;
    }

    const number = Number(value);

    return Number.isNaN(number) ? null : number;

}


function cardMatchesFilters(card) {

    // Search
    const searchTerm = searchInput.value
        .trim()
        .toLowerCase();

    if (searchTerm) {

        const searchableText = [

            card.name || "",
            card.rarity || "",
            ...(card.position || []),
            ...(card.traits || []).map(trait => trait.name || "")

        ]
            .join(" ")
            .toLowerCase();

        if (!searchableText.includes(searchTerm)) {
            return false;
        }

    }


    // Rarity
    if (
        rarityFilter.value !== "all" &&
        card.rarity !== rarityFilter.value
    ) {
        return false;
    }


    // Position
    if (
        positionFilter.value !== "all" &&
        !card.position.includes(positionFilter.value)
    ) {
        return false;
    }


    // Trait
    if (traitFilter.value !== "all") {

        const hasTrait = card.traits.some(trait =>
            trait.name === traitFilter.value
        );

        if (!hasTrait) {
            return false;
        }

    }


    // Shooting
    const shootMin = getNumber(shootingMin.value);
    const shootMax = getNumber(shootingMax.value);

    if (shootMin !== null && card.shooting < shootMin) {
        return false;
    }

    if (shootMax !== null && card.shooting > shootMax) {
        return false;
    }


    // Finishing
    const finishMin = getNumber(finishingMin.value);
    const finishMax = getNumber(finishingMax.value);

    if (finishMin !== null && card.finishing < finishMin) {
        return false;
    }

    if (finishMax !== null && card.finishing > finishMax) {
        return false;
    }


    // Defending
    const defendMin = getNumber(defendingMin.value);
    const defendMax = getNumber(defendingMax.value);

    if (defendMin !== null && card.defending < defendMin) {
        return false;
    }

    if (defendMax !== null && card.defending > defendMax) {
        return false;
    }


    // Playmaking
    const playMin = getNumber(playmakingMin.value);
    const playMax = getNumber(playmakingMax.value);

    if (playMin !== null && card.playmaking < playMin) {
        return false;
    }

    if (playMax !== null && card.playmaking > playMax) {
        return false;
    }


    return true;

}


// -----------------------------
// Sorting
// -----------------------------

function sortCards(cardArray) {

    const sortedCards = [...cardArray];

    switch (sortFilter.value) {

        case "name-asc":

            sortedCards.sort((a, b) =>
                a.name.localeCompare(b.name)
            );

            break;


        case "name-desc":

            sortedCards.sort((a, b) =>
                b.name.localeCompare(a.name)
            );

            break;


        case "shooting-desc":

            sortedCards.sort((a, b) =>
                b.shooting - a.shooting
            );

            break;


        case "finishing-desc":

            sortedCards.sort((a, b) =>
                b.finishing - a.finishing
            );

            break;


        case "defending-desc":

            sortedCards.sort((a, b) =>
                b.defending - a.defending
            );

            break;


        case "playmaking-desc":

            sortedCards.sort((a, b) =>
                b.playmaking - a.playmaking
            );

            break;


        case "total-desc":

            sortedCards.sort((a, b) =>
                b.total - a.total
            );

            break;


        case "rarity-desc":

        default:

            sortedCards.sort((a, b) => {

                const rarityA =
                    rarityOrder[a.rarity.toUpperCase()] || 0;

                const rarityB =
                    rarityOrder[b.rarity.toUpperCase()] || 0;

                return rarityB - rarityA;

            });

            break;

    }

    return sortedCards;

}


// -----------------------------
// Render cards
// -----------------------------

function renderCards() {

    if (!cardList) {
        return;
    }

    cardList.innerHTML = "";


    const filteredCards = cards.filter(card =>
        cardMatchesFilters(card)
    );


    const sortedCards = sortCards(filteredCards);


    // Card count
    if (cardCount) {

        cardCount.textContent =
            `${sortedCards.length} card${sortedCards.length === 1 ? "" : "s"} found`;

    }


    // No results
    if (sortedCards.length === 0) {

        const noResults = document.createElement("p");

        noResults.textContent = "No cards found.";

        noResults.className = "no-results";

        cardList.appendChild(noResults);

        return;

    }


    // Create cards
    sortedCards.forEach(card => {

        const cardElement = document.createElement("article");

        cardElement.className = "card";

        cardElement.id = card.id;


        // Card image
        const image = document.createElement("img");

        image.className = "database-card-image";

        image.src = card.image;

        image.alt = `${card.name} BasketBot card`;

        image.onerror = function () {
            this.style.display = "none";
        };


        // Information
        const information = document.createElement("div");

        information.className = "card-info";


        // Name
        const name = document.createElement("h3");

        name.textContent = card.name;


        // Rarity
        const rarity = document.createElement("p");

        rarity.innerHTML =
            `<strong>Rarity:</strong> ${card.rarity}`;


        // Position
        const position = document.createElement("p");

        position.innerHTML =
            `<strong>Position:</strong> ${card.position.join(" / ")}`;


        // Height
        const height = document.createElement("p");

        height.innerHTML =
            `<strong>Height:</strong> ${card.height}`;


        // Stats
        const stats = document.createElement("div");

        stats.className = "card-stats";

        stats.innerHTML = `
            <p><strong>SHO</strong> ${card.shooting}</p>
            <p><strong>FIN</strong> ${card.finishing}</p>
            <p><strong>DEF</strong> ${card.defending}</p>
            <p><strong>PMK</strong> ${card.playmaking}</p>
            <p><strong>TOTAL</strong> ${card.total}</p>
        `;


        // Market
        const market = document.createElement("p");

        market.innerHTML =
            `<strong>Market:</strong> ${card.market}`;


        // Traits
        const traitsContainer = document.createElement("div");

        traitsContainer.className = "card-traits";


        if (Array.isArray(card.traits) && card.traits.length > 0) {

            const traitsTitle = document.createElement("strong");

            traitsTitle.textContent = "Traits:";

            traitsContainer.appendChild(traitsTitle);


            const traitsList = document.createElement("div");

            traitsList.className = "trait-tags";


            card.traits.forEach(trait => {

                const traitTag = document.createElement("span");

                const romanNumerals = ["", "I", "II", "III"];

                traitTag.textContent =
                    `${trait.name} ${romanNumerals[trait.level] || trait.level}`;

                traitTag.className = "trait-tag";

                traitsList.appendChild(traitTag);

            });


            traitsContainer.appendChild(traitsList);

        }


        // Assemble information
        information.appendChild(name);
        information.appendChild(rarity);
        information.appendChild(position);
        information.appendChild(height);
        information.appendChild(stats);
        information.appendChild(market);
        information.appendChild(traitsContainer);


        // Assemble card
        cardElement.appendChild(image);
        cardElement.appendChild(information);


        // Open individual card page
        cardElement.addEventListener("click", function () {

            window.location.href =
                `card.html?player=${encodeURIComponent(card.id)}`;

        });


        cardList.appendChild(cardElement);

    });

}


// -----------------------------
// Clear filters
// -----------------------------

function clearFilters() {

    searchInput.value = "";

    rarityFilter.value = "all";
    positionFilter.value = "all";
    traitFilter.value = "all";

    shootingMin.value = "";
    shootingMax.value = "";

    finishingMin.value = "";
    finishingMax.value = "";

    defendingMin.value = "";
    defendingMax.value = "";

    playmakingMin.value = "";
    playmakingMax.value = "";

    sortFilter.value = "rarity-desc";

    renderCards();

}


// -----------------------------
// Event listeners
// -----------------------------

searchInput.addEventListener("input", renderCards);

rarityFilter.addEventListener("change", renderCards);

positionFilter.addEventListener("change", renderCards);

traitFilter.addEventListener("change", renderCards);

shootingMin.addEventListener("input", renderCards);
shootingMax.addEventListener("input", renderCards);

finishingMin.addEventListener("input", renderCards);
finishingMax.addEventListener("input", renderCards);

defendingMin.addEventListener("input", renderCards);
defendingMax.addEventListener("input", renderCards);

playmakingMin.addEventListener("input", renderCards);
playmakingMax.addEventListener("input", renderCards);

sortFilter.addEventListener("change", renderCards);

clearFiltersButton.addEventListener("click", clearFilters);


// -----------------------------
// Start database
// -----------------------------

populateFilters();
renderCards();