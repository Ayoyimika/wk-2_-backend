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

  
