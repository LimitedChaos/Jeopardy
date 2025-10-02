(() => {
    const BOARD = document.getElementById('board');
    const TITLE = document.getElementById('game-title');
    const STATUS = document.getElementById('status');
    const RELOAD = document.getElementById('reload');

    const MODAL = document.getElementById('modal');
    const MODAL_CATEGORY = document.getElementById('modal-category');
    const MODAL_VALUE = document.getElementById('modal-value');
    const MODAL_TEXT = document.getElementById('modal-text');
    const SHOW_ANSWER = document.getElementById('show-answer');
    const CLOSE_MODAL = document.getElementById('close-modal');

    let data = null;
    let currentClue = null;

    RELOAD.addEventListener('click', () => loadData(true));
    CLOSE_MODAL.addEventListener('click', closeModal);
    SHOW_ANSWER.addEventListener('click', showAnswer);
    document.addEventListener('keydown', (e) => {
        if (MODAL.getAttribute('aria-hidden') === 'false') {
            if (e.key === 'Escape') closeModal();
            if (e.key.toLowerCase() === 'a') showAnswer();
        }
    });

    async function loadData(force = false) {
        try {
            STATUS.textContent = 'Loading…';
            const res = await fetch('https://limitedchaos.github.io/Questions/Gilmore-Questions' + (force ? `?t=${Date.now()}` : ''));
            if (!res.ok) throw new Error(`Failed to load questions.json (${res.status})`);
            data = await res.json();
            TITLE.textContent = data.title || 'Jeopardy!';
            buildBoard(data.categories || []);
            STATUS.textContent = 'Ready';
        } catch (err) {
            console.error(err);
            STATUS.textContent = 'Error loading data';
        }
    }

    function buildBoard(categories) {
        BOARD.innerHTML = '';
        if (!Array.isArray(categories) || categories.length === 0) {
            BOARD.textContent = 'No categories found.';
            return;
        }

        BOARD.style.gridTemplateColumns = `repeat(${categories.length}, 1fr)`;

        // Category headers
        categories.forEach(cat => {
            const header = document.createElement('div');
            header.className = 'category';
            header.textContent = cat.name ?? 'Untitled';
            BOARD.appendChild(header);
        });

        const maxClues = Math.max(...categories.map(c => (c.clues?.length ?? 0)));

        for (let row = 0; row < maxClues; row++) {
            categories.forEach((cat, colIdx) => {
                const tile = document.createElement('button');
                tile.className = 'tile';
                tile.type = 'button';

                const clue = cat.clues?.[row];
                if (!clue) {
                    tile.setAttribute('aria-disabled', 'true');
                    tile.textContent = '-';
                } else {
                    tile.textContent = clue.value ?? '';
                    tile.dataset.category = cat.name ?? `Category ${colIdx + 1}`;
                    tile.dataset.value = clue.value ?? '';
                    tile.dataset.question = clue.question ?? '';
                    tile.dataset.answer = clue.answer ?? '';
                    tile.addEventListener('click', () => openClue(tile));
                }

                BOARD.appendChild(tile);
            });
        }
    }

    function openClue(tile) {
        if (tile.getAttribute('aria-disabled') === 'true') return;

        currentClue = {
            category: tile.dataset.category,
            value: tile.dataset.value,
            question: tile.dataset.question,
            answer: tile.dataset.answer,
            tile
        };

        MODAL_CATEGORY.textContent = currentClue.category;
        MODAL_VALUE.textContent = `$${currentClue.value}`;
        MODAL_TEXT.textContent = currentClue.question;
        SHOW_ANSWER.textContent = 'Show answer';
        MODAL.setAttribute('aria-hidden', 'false');

        // Disable the tile after opening (classic Jeopardy behavior)
        tile.setAttribute('aria-disabled', 'true');
    }

    function showAnswer() {
        if (!currentClue) return;
        MODAL_TEXT.textContent = currentClue.answer;
        SHOW_ANSWER.textContent = 'Show question';
        // Toggle back to question on next click
        SHOW_ANSWER.onclick = () => {
            MODAL_TEXT.textContent = currentClue.question;
            SHOW_ANSWER.textContent = 'Show answer';
            SHOW_ANSWER.onclick = showAnswer;
        };
    }

    function closeModal() {
        MODAL.setAttribute('aria-hidden', 'true');
        currentClue = null;
        // Restore default handler
        SHOW_ANSWER.onclick = showAnswer;
    }

    loadData();
})();

