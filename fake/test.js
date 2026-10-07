// math.test.js
const somme = require('./math');

describe('Tests unitaires globaux de la fonction somme', () => {

  // --- 1. CAS NOMINAUX (Cas classiques de succès) ---
  describe('Cas nominaux', () => {
    test('devrait additionner trois nombres entiers positifs', () => {
      expect(somme(1, 2, 3)).toBe(6);
    });

    test('devrait additionner des nombres négatifs et positifs', () => {
      expect(somme(-5, 10, -2)).toBe(3);
    });

    test('devrait renvoyer 0 si tous les paramètres sont 0', () => {
      expect(somme(0, 0, 0)).toBe(0);
    });

    test('devrait gérer correctement les nombres à virgule (décimaux)', () => {
      // Utilisation de toBeCloseTo pour éviter les problèmes d'arrondi binaire (ex: 0.1 + 0.2)
      expect(somme(0.1, 0.2, 0.3)).toBeCloseTo(0.6, 5);
    });
  });

  // --- 2. CAS LIMITES (Valeurs extrêmes et manquantes) ---
  describe('Cas limites et valeurs manquantes', () => {
    test('devrait remplacer le 3ème paramètre manquant par 0', () => {
      expect(somme(5, 10)).toBe(15);
    });

    test('devrait remplacer le 2ème et 3ème paramètre manquant par 0', () => {
      expect(somme(5)).toBe(5);
    });

    test('devrait renvoyer 0 si aucun paramètre n\'est fourni', () => {
      expect(somme()).toBe(0);
    });

    test('devrait gérer les très grands nombres (Infinity)', () => {
      expect(somme(Number.MAX_VALUE, Number.MAX_VALUE, 1)).toBe(Infinity);
    });
  });

  // --- 3. CAS D'ERREURS (Entrées invalides) ---
  describe('Gestion des erreurs et types incorrects', () => {
    test('devrait lever une TypeError si une chaîne de caractères est fournie', () => {
      expect(() => somme(1, "2", 3)).toThrow(TypeError);
    });

    test('devrait lever une TypeError si null est fourni', () => {
      expect(() => somme(1, null, 3)).toThrow(TypeError);
    });

    test('devrait lever une error si NaN est fourni', () => {
      expect(() => somme(1, NaN, 3)).toThrow("Les valeurs NaN ne sont pas autorisées");
    });

    test('devrait lever une TypeError si un tableau ou un objet est fourni', () => {
      expect(() => somme([], {}, 3)).toThrow(TypeError);
    });
  });
});



// math.js
function somme(a, b, c) {
  // Remplacer les valeurs manquantes (undefined) par 0
  const numA = a === undefined ? 0 : a;
  const numB = b === undefined ? 0 : b;
  const numC = c === undefined ? 0 : c;

  // Lever une erreur si un paramètre n'est pas un nombre
  if (typeof numA !== 'number' || typeof numB !== 'number' || typeof numC !== 'number') {
    throw new TypeError("Tous les paramètres doivent être des nombres");
  }

  // Lever une erreur si une valeur est NaN
  if (Number.isNaN(numA) || Number.isNaN(numB) || Number.isNaN(numC)) {
    throw new Error("Les valeurs NaN ne sont pas autorisées");
  }

  return numA + numB + numC;
}

module.exports = somme;
