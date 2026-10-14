import { resolve } from 'node:dns';
import fs from 'node:fs/promises';
import { createReadStream, createWriteStream, existsSync } from 'node:fs'




export const FILE_ARGUMENT_VALUE_ERROR = "le fichier n'est pas un txt";
export const FILE_NOT_FOUND_ERROR = "le fichier n'existe pas";
export const ARGUMENT_VALUE_TEXT_ERROR = "ne doit etre que une string";

console.log(await analyseFile("./files/fichier1.txt"))
export async function analyseFile(file_name) {

    if (typeof file_name !== 'string' || typeof file_name === 'string' && !file_name.endsWith('.txt')) {
        return FILE_ARGUMENT_VALUE_ERROR;
    }

    if (!isFileExist(file_name)) {
        return FILE_NOT_FOUND_ERROR;
    }

    let text_complet = '';
    const flux_lecture = createReadStream(file_name, 'utf-8');
    console.log(flux_lecture)
    let compteur = 0;
    let fin = false;
    flux_lecture.on('data', (chunk) => {
        text_complet += chunk;
    })

    flux_lecture.on('end', () => {

        fin = true;

    })

    await new Promise((resolve) => {
        flux_lecture.on('end', resolve);
    });


    if (fin) {
        let nbr_chunk = await getChunkCount(file_name)
        let nbr_mots = await getWorldCount(text_complet)
        let nbr_phase = await getPhraseCount(text_complet)
        let nbr_lettre = await getLetterCount(text_complet)
        let stats = await getStats(file_name)






        return {
            sizeKo: stats.sizeKo,
            uid: stats.uid,
            gid: stats.gid,
            nombre_de_phrase:nbr_phase,
            nombre_de_mots:nbr_mots ,
            nombre_de_lettres: nbr_lettre,
            nombre_de_chunk: nbr_chunk
        }
    }






}

export function readStream(file_name) {
    if (!isFileExist(file_name)) {
        return FILE_NOT_FOUND_ERROR;
    }



}

export async function getChunkCount(file_name) {
    if (!isFileExist(file_name)) {
        return FILE_NOT_FOUND_ERROR;
    }

    const flux_lecture = createReadStream(file_name, 'utf-8');
    console.log(flux_lecture)
    let compteur = 0;
    let fin = false;
    flux_lecture.on('data', (chunk) => {
        compteur++;
    })

    flux_lecture.on('end', () => {

        fin = true;

    })

    await new Promise((resolve) => {
        flux_lecture.on('end', resolve);
    });


    if (fin) {
        return compteur;
    }


}


export function isFileExist(file_name) {
    return existsSync(file_name);
}

export async function getStats(file_name) {
    if (!isFileExist(file_name)) {
        return FILE_NOT_FOUND_ERROR;
    }

    const stats = await fs.stat('./files/fichier1.txt')
    return {
        sizeKo: stats.size / 1024,
        uid: stats.uid,
        gid: stats.gid
    };


}

getStats('./files/fichier1.txt')

export function getWorldCount(text) {
    if (typeof text !== 'string') {
        return ARGUMENT_VALUE_TEXT_ERROR;
    }
    if (!text.trim()) {
        return 0;
    }

    return text.trim().split(/\s+/).length;

}



export function getPhraseCount(text) {
    if (typeof text !== 'string') {
        return ARGUMENT_VALUE_TEXT_ERROR;
    }
    if (!text.trim()) {
        return 0;
    }

    const phrases = text.split(/[.!?]+/);

    return phrases.filter(phrase => phrase.trim().length > 0).length;

}


export function getLetterCount(text) {
    if (typeof text !== 'string') {
        return ARGUMENT_VALUE_TEXT_ERROR;
    }
    if (!text.trim()) {
        return 0;
    }

    return text.replace(/\s/g, "").length;

}


