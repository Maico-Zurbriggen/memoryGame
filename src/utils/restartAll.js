import restartPanel from './restartPanel';

const restartAll = (updatedActivePlayer, modifyCards, modifyActivePlayer, resetPlayers) => {
    const panel = document.getElementById("panel");
    const buttonPlay = document.getElementById("buttonPlay");

    restartPanel(updatedActivePlayer, modifyCards, modifyActivePlayer);
    resetPlayers();

    panel.classList.remove('panel');
    panel.classList.add('hidden');
    buttonPlay.classList.remove("hidden");
}

export default restartAll;