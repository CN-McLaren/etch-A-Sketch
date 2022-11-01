function createBoard() {
    let board = document.querySelector(".board");
    board.style.gridTemplateRows = 'repeat(16, 1fr)';
    board.style.gridTemplateColumns = 'repeat(16, 1fr)';
    
    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div')
        square.style.backgroundColor = 'blue';
        board.insertAdjacentElement("beforeend", square);
    }
}

let start = document.getElementById("start");
start.addEventListener('click', event => {
    createBoard();
});