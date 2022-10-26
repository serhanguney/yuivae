import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  const text = req.body;

  if (!Boolean(text) && typeof text !== "string") {
    return res
      .status(400)
      .end("Bad input. Make sure you are sending a valid string.");
  }

  const { yuiPass } = new Yuipass(text);
  return res.status(200).json({ yuiPass });
};

const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

class Yuipass {
  public phrase: string;
  private arrayOfPhrase: string[];
  private alphabetNumbers: number[];
  private invertedArrayOfPhrase: string[];
  private combinedArrayOfPhrase: string[];
  public yuiPass: string;
  constructor(phrase: string) {
    this.phrase = phrase;
    this.arrayOfPhrase = this.getArray(this.phrase);
    this.alphabetNumbers = this.getAlphabetNumber(this.arrayOfPhrase);
    this.invertedArrayOfPhrase = this.reverseArray(this.arrayOfPhrase);
    this.combinedArrayOfPhrase = this.combineNumbers(this.alphabetNumbers);
    this.yuiPass = this.sealYuiPass(this.combinedArrayOfPhrase);
  }
  //transorms phrase into an array with lowercases
  private getArray(phrase: string) {
    return phrase.replace(/\s/g, "").toLowerCase().split("");
  }
  //creates an array of alphabet numbers corresponding the letters
  private getAlphabetNumber(array: string[]) {
    let empty: number[] = [];
    array.forEach((letter) => empty.push(lowercase.indexOf(letter)));
    return empty;
  }
  //reverses the array of phrase and formats it into 1 upper 1 lower case
  private reverseArray(array: string[]) {
    return array
      .map((letter, index) => (index % 2 === 0 ? letter : letter.toUpperCase()))
      .reverse();
  }

  //the tricky part is that letters can be transformed into numbers with two digits which is usually longer than the length of the phrase
  //in order to make sure we include the whole phrase into the yuipass we repeat the loop double the length of the phrase
  //because we have two separate indexs to follow and they have a 1 to 2 ratio.
  //finally we include the whole phrase and we add the remainder of the numbers after _@
  private combineNumbers(array: number[]) {
    //transforms ["1","17","85"] into ["1","1","7","8","5"]
    let combinedArrayOfPhrase = array.slice().join("").split("");

    //repeat the loop double the length of the phrase
    const length: number = this.invertedArrayOfPhrase.length * 2;
    let index: number = 0;
    let letter: string;
    //include the whole phrase and we add the remainder of the numbers after _@
    for (let i: number = 0; i < length; i++) {
      letter = this.invertedArrayOfPhrase[index]
        ? this.invertedArrayOfPhrase[index]
        : "_@";
      if (i % 2 === 0 && letter !== "_@") {
        combinedArrayOfPhrase.splice(i, 0, letter);
        index++;
      }
    }
    return combinedArrayOfPhrase;
  }

  //find the last letter of the combinedArrayOfPhrase
  private sealYuiPass(array: string[]) {
    //clone the array to prevent mutation
    const alphaClone = array.slice();
    //reverse the clone and find the index of the first letter (in original the last)
    const alphaIndex = alphaClone
      .reverse()
      .join("")
      .search(/[a-z][0-9]{0}/g); // finds the first letter that is followed by a number

    //use the index to get the alpha letter
    const alphaLetter = alphaClone[alphaIndex];

    //use lastIndexOf to get the index of the last encounter of the alphaLetter
    //insert "_@" there
    //first make a clone not to mutate the combinedArrayOfPhrase
    const yuiPass = array.slice();
    yuiPass.splice(yuiPass.lastIndexOf(alphaLetter) + 1, 0, "_@");
    return yuiPass.join("");
  }
}

export default handler;
