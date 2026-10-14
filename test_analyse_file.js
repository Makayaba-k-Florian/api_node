import test from "node:test"
import assert from "node:assert"
import {
    analyseFile, FILE_ARGUMENT_VALUE_ERROR, FILE_NOT_FOUND_ERROR, ARGUMENT_VALUE_TEXT_ERROR,
    isFileExist, getChunkCount, getStats, getWorldCount, getPhraseCount, getLetterCount
} from './analyse_file.js'

test("fichier non txt passer en parametre", async () => {
    let file_name = 'fichier.png';
    let resultatatendue = FILE_ARGUMENT_VALUE_ERROR;

    let resultatObtenue = await analyseFile(file_name)

    assert.strictEqual(resultatObtenue, resultatatendue)

})


test("le fichier n'existe pas", async () => {
    let file_name = 'fichier.txt';
    let resultatatendue = FILE_NOT_FOUND_ERROR;

    let resultatObtenue = await analyseFile(file_name)

    assert.strictEqual(resultatObtenue, resultatatendue)

})

test("bon fichier en parametre ./files/fichier.text", async () => {
    let file_name = './files/fichier1.txt';
    let resultatatendue = {
        sizeKo: 1844.6279296875,
        uid: 1000,
        gid: 1000,
        nombre_de_phrase: 6,
        nombre_de_mots: 300004,
        nombre_de_lettres: 1488900,
        nombre_de_chunk: 29
    };

    let resultatObtenue = await analyseFile(file_name)

    assert.deepStrictEqual(resultatObtenue, resultatatendue)



})



test("test de la fonction le fichier n'existe pas", () => {
    let file_name = 'fichier.txt';
    let resultatatendue = false;

    let resultatObtenue = isFileExist(file_name)

    assert.strictEqual(resultatObtenue, resultatatendue)

})

test("getchunk parameter non fichier", async () => {
    let file_name = 'fichier.txt';
    let resultatatendue = FILE_NOT_FOUND_ERROR;

    let resultatObtenue = await getChunkCount(file_name)

    assert.strictEqual(resultatObtenue, resultatatendue)

})

test("getchunk ./files/fichier1.txt", async () => {
    let file_name = './files/fichier1.txt';
    let resultatatendue = 29;

    let resultatObtenue = await getChunkCount(file_name)

    assert.strictEqual(resultatObtenue, resultatatendue)

})

test("getStats parameter non fichier", async () => {

    let file_name = 'fichier.txt';
    let resultatatendue = FILE_NOT_FOUND_ERROR;

    let resultatObtenue = await getStats(file_name)

    assert.strictEqual(resultatObtenue, resultatatendue)

})



test("getStats ./files/fichier1.txt", async () => {
    let file_name = './files/fichier1.txt';


    let resultatatendue = { sizeKo: 1844.6279296875, uid: 1000, gid: 1000 };

    let resultatObtenue = await getStats(file_name)

    assert.strictEqual(resultatObtenue.sizeKo, resultatatendue.sizeKo)
    assert.strictEqual(resultatObtenue.uid, resultatatendue.uid)
    assert.strictEqual(resultatObtenue.gid, resultatatendue.gid)


})



test(" getWorldCount pas test passer en parametre", async () => {
    let text = 2;
    let resultatatendue = ARGUMENT_VALUE_TEXT_ERROR;

    let resultatObtenue = await getWorldCount(text)

    assert.strictEqual(resultatObtenue, resultatatendue)

})
test(" getWorldCount text ne contemant pas de mots", async () => {
    let text = '                      ';
    let resultatatendue = 0;

    let resultatObtenue = await getWorldCount(text)

    assert.strictEqual(resultatObtenue, resultatatendue)

})

test(" getWorldCount bon nombre de  mots", async () => {
    let text = '             ds ava et a        ';
    let resultatatendue = 4;

    let resultatObtenue = await getWorldCount(text)

    assert.strictEqual(resultatObtenue, resultatatendue)

})



test(" getPhraseCount pas text passer en parametre", () => {
    let text = 2;
    let resultatatendue = ARGUMENT_VALUE_TEXT_ERROR;

    let resultatObtenue = getPhraseCount(text)

    assert.strictEqual(resultatObtenue, resultatatendue)

})
test(" getPhraseCount text ne contemant rein", () => {
    let text = '                      ';
    let resultatatendue = 0;

    let resultatObtenue = getPhraseCount(text)

    assert.strictEqual(resultatObtenue, resultatatendue)

})

test(" getPhraseCount bon nombre de  phrase", () => {
    let text = '             ds ava et a        ';
    let resultatatendue = 1;

    let resultatObtenue = getPhraseCount(text)

    assert.strictEqual(resultatObtenue, resultatatendue)

})


test(" getLetterCount pas text passer en parametre", () => {
    let text = 2;
    let resultatatendue = ARGUMENT_VALUE_TEXT_ERROR;

    let resultatObtenue = getLetterCount(text)

    assert.strictEqual(resultatObtenue, resultatatendue)

})
test(" getLetterCount text ne contemant rein", () => {
    let text = '                      ';
    let resultatatendue = 0;

    let resultatObtenue = getLetterCount(text)

    assert.strictEqual(resultatObtenue, resultatatendue)

})

test(" getLetterCount 4 lettre   ", () => {
    let text = '   12 34   ';
    let resultatatendue = 4;

    let resultatObtenue = getLetterCount(text)

    assert.strictEqual(resultatObtenue, resultatatendue)

})
