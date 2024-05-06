// Kodony (triplet kodujący) do aminokwasów z trzyliterowymi nazwami
const codonToAminoAcid = {
    "UUU": "Phe", "UUC": "Phe", "UUA": "Leu", "UUG": "Leu",
    "UCU": "Ser", "UCC": "Ser", "UCA": "Ser", "UCG": "Ser",
    "UAU": "Tyr", "UAC": "Tyr", "UAA": "Stop", "UAG": "Stop",
    "UGU": "Cys", "UGC": "Cys", "UGA": "Stop", "UGG": "Trp",
    "CUU": "Leu", "CUC": "Leu", "CUA": "Leu", "CUG": "Leu",
    "CCU": "Pro", "CCC": "Pro", "CCA": "Pro", "CCG": "Pro",
    "CAU": "His", "CAC": "His", "CAA": "Gln", "CAG": "Gln",
    "CGU": "Arg", "CGC": "Arg", "CGA": "Arg", "CGG": "Arg",
    "AUU": "Ile", "AUC": "Ile", "AUA": "Ile", "AUG": "Met",
    "ACU": "Thr", "ACC": "Thr", "ACA": "Thr", "ACG": "Thr",
    "AAU": "Asn", "AAC": "Asn", "AAA": "Lys", "AAG": "Lys",
    "AGU": "Ser", "AGC": "Ser", "AGA": "Arg", "AGG": "Arg",
    "GUU": "Val", "GUC": "Val", "GUA": "Val", "GUG": "Val",
    "GCU": "Ala", "GCC": "Ala", "GCA": "Ala", "GCG": "Ala",
    "GAU": "Asp", "GAC": "Asp", "GAA": "Glu", "GAG": "Glu",
    "GGU": "Gly", "GGC": "Gly", "GGA": "Gly", "GGG": "Gly"
};

// Funkcja do konwersji kodu DNA na kod RNA
function dnaToRna(dna) {
    return dna.replace(/A/g, 'U')
              .replace(/T/g, 'A')
              .replace(/C/g, 'X')  // Tymczasowa zamiana C na X
              .replace(/G/g, 'C')
              .replace(/X/g, 'G'); // Końcowa zamiana X na G
}

// Funkcja do konwersji kodu RNA na białko
function rnaToProtein(rna) {
    let protein = [];
    for (let i = 0; i < rna.length; i += 3) {
        const codon = rna.substring(i, i + 3);
        if (codonToAminoAcid[codon]) {
            if (codonToAminoAcid[codon] !== "Stop") {
                protein.push(codonToAminoAcid[codon]);
            } else {
                break;  // Zakończ pętlę jeśli napotkano kodon stop
            }
        }
    }
    return protein.join('-');  // Łączenie aminokwasów myślnikiem
}

// Główna funkcja do konwersji
function convertDNA() {
    const dnaInput = document.getElementById('dna-sequence').value.toUpperCase();
    const rnaSequence = dnaToRna(dnaInput);
    const proteinSequence = rnaToProtein(rnaSequence);

    document.getElementById('rna-sequence').textContent = rnaSequence;
    document.getElementById('protein-sequence').textContent = proteinSequence;
}
