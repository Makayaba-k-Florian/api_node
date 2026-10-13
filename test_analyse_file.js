import test from "node:test"
import assert from "node:assert"
import {analyseFile,FILE_ARGUMENT_VALUE_ERROR} from './analyse_file.js'

test("fichier non txt passer en parametre",()=>{
    let file_name = 'fichier.png';
    let resultatatendue = FILE_ARGUMENT_VALUE_ERROR;

    let resultatObtenue = analyseFile(file_name)

    assert.strictEqual(resultatObtenue,resultatatendue)

})




