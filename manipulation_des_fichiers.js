import { log } from 'node:console'
import fsys from 'node:fs/promises'
import {createReadStream,createWriteStream} from 'node:fs'


//log(fs)
//lire_fichier()
async function lire_fichier(){
    try {
        const dada = await fsys.readFile('/home/florian/Téléchargements/kolibry.iso','ascii')
        log(dada)
    } catch (error) {
        log(error)
    }
}
//ecrire_dans_fichier()
async function ecrire_dans_fichier(){
    try {
        let content = ''
        for (let i = 0; i < 100000; i++) {
            content += "New content "+(i+1)+" \n" 
        }
        const dada = await fsys.writeFile('./files/fichier1.txt',content,{
            flag:"w"
        })
        //log(dada)
    } catch (error) {
        log(error)
    }
}


//lire_et_ecrire_un_fichier()
async function lire_et_ecrire_un_fichier(){
    try {
        const fichier1 = await fsys.open('./files/fichier1.txt','r+')
        await fichier1.writeFile('friser')
        log(await fichier1.readFile("utf-8"))
        await fichier1.close()
    } catch (error) {
        log(error.message)
    }
}

//afficher_les_statistiques_un_fichier()

async function afficher_les_statistiques_un_fichier() {
    try {
        const stat = await fsys.stat('./files/fichier1.txt')
        log( stat.isFile())
    } catch (error) {
        
    }
    
}

lire_fichier_en_stream()
function lire_fichier_en_stream(){
    const flux_lecture = createReadStream('./files/fichier1.txt','utf-8');
    //log(flux_lecture)
    let message_complet ;
    let compteur = 0;
    flux_lecture.on('data',(chunk) => {
        log("============================================\n");
        message_complet += chunk
        log("============================================\n")
        compteur++;
    })

    flux_lecture.on('end',()=>{
        log("fin du flux ............................")
        //log(message_complet)
        log("Nombre de chunks lus: " + compteur)
    })

    



}











/*
Vardor
anton chigour
megaminde
la tache
le rodeur
garou
sonic le foudroiyant
dioooo
la main 
syndrome
le jocker
le lou
venderdeken
tomoura shigaraki
black miste
sparda
*/