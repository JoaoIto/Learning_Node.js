/* Desafio referente construção de flags de um console em process.argv */

function getFlags(flag){
    const index = process.argv.indexOf(flag) + 1;
    return process.argv[index];
}

module.exports = getFlags;