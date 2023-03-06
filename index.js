const InstagramPost = new Object();
InstagramPost.handle = "Avastoresng";
InstagramPost.content = "Global";
InstagramPost.image = "https://www.instagram.com/p/CocDULFIU1y/";
InstagramPost.views = "10k+ views";
InstagramPost.likes = 2434;
console.log(InstagramPost);

//Q2
InstagramPost.handle = "storesng";
InstagramPost.content = "Lagos";
InstagramPost.image = "https://www.instagram.com/p/CocDUAQIU1y/";
InstagramPost.views = "2k+ views";
InstagramPost.likes = 34;

console.log(InstagramPost);

InstagramPost.handle = "Avastoresng";
InstagramPost.content = "Abuja";
InstagramPost.image = "https://www.instagram.com/p/CocDefrFIU1y/";
InstagramPost.views = "3k+ views";
InstagramPost.likes = 134;

console.log(InstagramPost);

// Q3
function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location,
    };
  } 
  const Person = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");
  console.log(JambScores);

  function createJambScores(eng, govt, lit, crk) {
    return {
      eng: 70,
      govt: 85,
      lit: 82,
      crk: 94,
    };
  } 
  
  const JambScores = createJambScores(70,85,82,94);
console.log(JambScores);

musa.scores = new createPerson (70,85,82,94);

//Question 4

/* 
- Object.assign(): 
This method creates a new object and copies the properties of the original object to the new object.
- Spread Operator: The spread operator can be used to clone an object.
- JSON.parse() and JSON.stringify(): This method creates a new object and 
returns a deep copy of the original object.
- Object.create(): This method creates a new object and sets the prototype of the new object 
to be the same as the original object.
- Custom function: You can also create a custom function to clone an object.
*/

// Question 5
const presidentialCandidates = {
  AAC: 'Omoyele Sowore',
  ACCORD: 'Christopher Imumolen',
  APC: 'Bola Ahmed Tinubu',
  LP: 'Peter Obi',
  NNPP: 'Rabiu Kwankwaso',
  PDP: 'Atiku Abubakar',
};

for (let party in presidentialCandidates) {
  let candidate = presidentialCandidates[party];
  console.log(`${candidate} is the presidential candidate of ${party}`);
}

  
