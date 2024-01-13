// Função para colocar o vetor de cartões em ordem
export default function helperShuffleArray(arr) {
    let shuffleArr = [...arr]
    for (let i = shuffleArr.length - 1; i > 0; i--) {   
        let j = Math.floor(Math.random() * (i + 1))
        let aux = shuffleArr[i]
        shuffleArr[i] = shuffleArr[j]
        shuffleArr[j] = aux
    }
    return shuffleArr
}