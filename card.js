const params = new URLSearchParams(window.location.search);
const playerId = params.get("player");

const card = cards.find(c => c.id === playerId);

if (!card) {

    document.title = "Card Not Found — BBotDB";

    const nameElement = document.getElementById("player-name");

    if (nameElement) {
        nameElement.textContent = "Card Not Found";
    }

} else {

    /* ================================
       PAGE TITLE
    ================================= */

    document.title = `${card.name} — BBotDB`;


    /* ================================
       BASIC INFORMATION
    ================================= */

    document.getElementById("player-name").textContent = card.name;

    document.getElementById("player-rarity").textContent =
        card.rarity;

    document.getElementById("player-position").textContent =
        card.position.join(" / ");

    document.getElementById("player-height").textContent =
        card.height;

    document.getElementById("player-market").textContent =
        card.market || "Unknown";


    /* ================================
       SYNCED STATS
    ================================= */

    function getSyncedBoost(statName) {

        if (!card.synced || !card.synced.boosts) {
            return 0;
        }

        return Number(card.synced.boosts[statName]) || 0;
    }


    function getBoostedStat(statName) {

        const baseValue = Number(card[statName]) || 0;
        const boost = getSyncedBoost(statName);

        return baseValue + boost;
    }


    function displayStat(elementId, statName) {

        const element =
            document.getElementById(elementId);

        if (!element) {
            return;
        }

        const baseValue =
            Number(card[statName]) || 0;

        const boost =
            getSyncedBoost(statName);

        element.innerHTML = "";

        /* Base rating */
        const base =
            document.createElement("span");

        base.className =
            boost > 0
                ? "synced-base-stat"
                : "";

        base.textContent =
            baseValue;

        element.appendChild(base);


        /* Synced boost */
        if (boost > 0) {

            const syncedWrapper =
                document.createElement("span");

            syncedWrapper.className =
                "synced-stat-boost";


            /* Synced icon */

            const syncedIcon =
                document.createElement("img");

            syncedIcon.src =
                "images/Synced.png";

            syncedIcon.alt =
                "Synced boost";

            syncedIcon.className =
                "synced-stat-icon";


            /* Arrow */

            const arrow =
                document.createElement("span");

            arrow.className =
                "synced-stat-arrow";

            arrow.textContent =
                "↑";


            /* Boost number */

            const boostValue =
                document.createElement("span");

            boostValue.className =
                "synced-stat-number";

            boostValue.textContent =
                `+${boost}`;


            syncedWrapper.appendChild(syncedIcon);
            syncedWrapper.appendChild(arrow);
            syncedWrapper.appendChild(boostValue);

            element.appendChild(syncedWrapper);
        }
    }


    displayStat(
        "stat-shooting",
        "shooting"
    );

    displayStat(
        "stat-finishing",
        "finishing"
    );

    displayStat(
        "stat-defending",
        "defending"
    );

    displayStat(
        "stat-playmaking",
        "playmaking"
    );


    /* ================================
       TOTAL STATS
    ================================= */

    const totalElement =
        document.getElementById("stat-total");

    if (totalElement) {

        const baseTotal =
            card.shooting +
            card.finishing +
            card.defending +
            card.playmaking;

        let totalBoost = 0;

        if (card.synced && card.synced.boosts) {

            totalBoost =
                getSyncedBoost("shooting") +
                getSyncedBoost("finishing") +
                getSyncedBoost("defending") +
                getSyncedBoost("playmaking");
        }

        totalElement.innerHTML = "";

        const baseTotalElement =
            document.createElement("span");

        baseTotalElement.textContent =
            baseTotal;

        totalElement.appendChild(
            baseTotalElement
        );


        if (totalBoost > 0) {

            const totalBoostElement =
                document.createElement("span");

            totalBoostElement.className =
                "synced-total-boost";

            totalBoostElement.textContent =
                ` ↑ +${totalBoost}`;

            totalElement.appendChild(
                totalBoostElement
            );
        }
    }


    /* ================================
       CARD IMAGE
    ================================= */

    const cardImage =
        document.getElementById(
            "player-card-image"
        );

    cardImage.src =
        card.image;

    cardImage.alt =
        `${card.name} BasketBot card`;

    /* ================================
       TRAITS
    ================================= */

    const traitsContainer =
        document.getElementById(
            "player-traits"
        );

    traitsContainer.innerHTML = "";

    if (card.traits && card.traits.length > 0) {

        card.traits.forEach(trait => {

            const traitElement =
                document.createElement("div");

            traitElement.className =
                "profile-trait";


            const traitName =
                document.createElement("span");

            traitName.className =
                "profile-trait-name";

            traitName.textContent =
                trait.name;


            const traitLevel =
                document.createElement("span");

            traitLevel.className =
                "profile-trait-level";


            const romanLevels = {
                1: "I",
                2: "II",
                3: "III"
            };


            traitLevel.textContent =
                romanLevels[trait.level] ||
                trait.level;


            traitElement.appendChild(
                traitName
            );

            traitElement.appendChild(
                traitLevel
            );

            traitsContainer.appendChild(
                traitElement
            );
        });

    } else {

        traitsContainer.textContent =
            "No traits listed.";
    }


    /* ================================
       SIMILAR CARDS
    ================================= */

    const similarContainer =
        document.getElementById(
            "similar-cards"
        );

    const similarToggle =
        document.getElementById(
            "similar-cards-toggle"
        );


    function similarityScore(otherCard) {

        if (otherCard.id === card.id) {
            return -1;
        }

        let score = 0;


        // Shared positions

        const sharedPositions =
            card.position.filter(position =>
                otherCard.position.includes(position)
            ).length;

        score +=
            sharedPositions * 3;


        // Shared traits

        const cardTraitNames =
            card.traits.map(
                trait => trait.name
            );

        const otherTraitNames =
            otherCard.traits.map(
                trait => trait.name
            );

        const sharedTraits =
            cardTraitNames.filter(trait =>
                otherTraitNames.includes(trait)
            ).length;

        score +=
            sharedTraits * 2;


        // Similar overall stats

        const statDifference =
            Math.abs(
                card.shooting -
                otherCard.shooting
            ) +

            Math.abs(
                card.finishing -
                otherCard.finishing
            ) +

            Math.abs(
                card.defending -
                otherCard.defending
            ) +

            Math.abs(
                card.playmaking -
                otherCard.playmaking
            );


        if (statDifference <= 20) {

            score += 4;

        } else if (statDifference <= 40) {

            score += 2;
        }


        return score;
    }


    const similarCards =
        cards
            .map(otherCard => ({
                card: otherCard,
                score: similarityScore(
                    otherCard
                )
            }))
            .filter(result =>
                result.score >= 0
            )
            .sort((a, b) =>
                b.score - a.score
            )
            .slice(0, 10);


    similarContainer.innerHTML = "";


    similarCards.forEach(result => {

        const similarCard =
            result.card;


        const article =
            document.createElement("article");

        article.className =
            "similar-card";


        article.addEventListener(
            "click",
            () => {

                window.location.href =
                    `card.html?player=${encodeURIComponent(
                        similarCard.id
                    )}`;

            }
        );


        /* ================================
           CARD IMAGE
        ================================= */

        const imageWrapper =
            document.createElement("div");

        imageWrapper.className =
            "similar-card-image-wrapper";


        const image =
            document.createElement("img");

        image.src =
            similarCard.image;

        image.alt =
            `${similarCard.name} BasketBot card`;


        imageWrapper.appendChild(
            image
        );


        /* ================================
           CARD INFORMATION
        ================================= */

        const info =
            document.createElement("div");

        info.className =
            "similar-card-info";


        const name =
            document.createElement("p");

        name.className =
            "similar-card-name";

        name.textContent =
            similarCard.name;


        const rarity =
            document.createElement("p");

        rarity.className =
            "similar-card-rarity";

        rarity.textContent =
            similarCard.rarity;


        const position =
            document.createElement("p");

        position.className =
            "similar-card-position";

        position.textContent =
            similarCard.position.join(" / ");


        info.appendChild(name);
        info.appendChild(rarity);
        info.appendChild(position);


        article.appendChild(
            imageWrapper
        );

        article.appendChild(
            info
        );

        similarContainer.appendChild(
            article
        );
    });


    /* ================================
       SIMILAR CARDS TOGGLE
    ================================= */

    similarToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                similarContainer.style.display ===
                "flex";


            if (isOpen) {

                similarContainer.style.display =
                    "none";

                similarToggle.textContent =
                    "Show Similar Cards";

            } else {

                similarContainer.style.display =
                    "flex";

                similarToggle.textContent =
                    "Hide Similar Cards";
            }
        }
    );


    /* ================================
       HOME
    ================================= */

    document
        .getElementById("home-button")
        .addEventListener(
            "click",
            () => {

                window.location.href =
                    "index.html";

            }
        );


    /* ================================
       PREVIOUS / NEXT
    ================================= */

    const currentIndex =
        cards.findIndex(
            c => c.id === card.id
        );


    document
        .getElementById("previous-card")
        .addEventListener(
            "click",
            () => {

                const previousIndex =
                    (
                        currentIndex -
                        1 +
                        cards.length
                    ) %
                    cards.length;


                window.location.href =
                    `card.html?player=${encodeURIComponent(
                        cards[previousIndex].id
                    )}`;

            }
        );


    document
        .getElementById("next-card")
        .addEventListener(
            "click",
            () => {

                const nextIndex =
                    (
                        currentIndex + 1
                    ) %
                    cards.length;


                window.location.href =
                    `card.html?player=${encodeURIComponent(
                        cards[nextIndex].id
                    )}`;

            }
        );


    /* ================================
       SEARCH
    ================================= */

    const searchInput =
        document.getElementById(
            "card-page-search"
        );

    const searchResults =
        document.getElementById(
            "card-search-results"
        );


    searchInput.addEventListener(
        "input",
        () => {

            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();


            searchResults.innerHTML = "";


            if (!query) {
                return;
            }


            const matches =
                cards
                    .filter(c =>
                        c.name
                            .toLowerCase()
                            .includes(query)
                    )
                    .slice(0, 8);


            matches.forEach(match => {

                const result =
                    document.createElement(
                        "div"
                    );

                result.textContent =
                    match.name;


                result.addEventListener(
                    "click",
                    () => {

                        window.location.href =
                            `card.html?player=${encodeURIComponent(
                                match.id
                            )}`;

                    }
                );


                searchResults.appendChild(
                    result
                );
            });
        }
    );

}