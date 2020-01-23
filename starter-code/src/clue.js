// ITERATION 1

// Suspects

const mrGreen = {
firstname: `Jacob`,
lastname: `Green`,
occupation: `Entrepreneur`,
age: 45,
description: `He has a lot of connections`,
image: `https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg`,
color: `green`, }

const drOrchid = {
firstname:  `Doctor`,
lastname:  `Orchid`,
occupation: `Scientist`,
age: 26,
description: `PhD in plant toxicology. Adopted daughter of Mr. Boddy`,
image: `http://www.radiotimes.com/uploads/images/Original/111967.jpg`,
color: `white`, }

const profPlum = {
firstname:  `Victor`,
lastname:  `Plum`,
occupation: `Designer`,
age: 22,
description: `Billionaire video game designer`,
image: `https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg`,
color: `purple`, }

const missScarlet = {
firstname:  `Kasandra`,
lastname:  `Scarlet`,
occupation: `Actor`,
age: 31,
description: `She is an A-list movie star with a dark past`,
image: `https://www.radiotimes.com/uploads/images/Original/111967.jpg`,
color: `red`, }

const mrsPeacock = {
firstname:  `Eleanor`,
lastname:  `Peacock`,
occupation: `Socialité`,
age: 36,
description: `She is from a wealthy family and uses her status and money to earn popularity`,
image: `https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg`,
color: `blue`, }

const mrMustard = {
firstname:  `Jack`,
lastname: `Mustard`,
occupation: `Retired Football player`,
age: 62,
description: `He is a former football player who tries to get by on his former glory`,
image: `https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg`,
color: `yellow`, }

//Weapons

const rope = {
weapon: `rope`,
weight: 10, }


const knife = 
{weapon: `knife`,
weight: 8,}

const candlestick = {
    weapon:`candlestick`, 
    weight: 2,
}


const dumbbell = {
    weapon: `dumbbell`, 
    weight: 30, } 

const poison = {
    weapon:`poison`, 
    weight: 2,
}

const axe = {
    weapon:`axe`,
    weight: 15,
}

const bat = {
    weapon: `bat`,
    weight: 13,
}

const trophy = {
weapon: `trophy`, 
weight: 25, 
}

const pistol = { 
    weapon:`pistol`,
    weight: 20,
}

//Rooms 


const dining = {name:`Dining Room`}
const con =  {name:`Conservatory`}
const kitchen =  {name:`Kitchen`}
const study=  {name:`Study`}
const library =  {name:`Library`}
const poolRoom=  {name:`Billiard Room`}
const lounge =  {name:`Lounge`}
const ballroom=  {name:`Ballroom`}
const hall =  {name:`Hall`}
const spa =  {name:`Spa`}
const living=  {name:`Living Room`}
const observe=  {name:`Observatory`}
const theater=  {name:`Theater`}
const guest =  {name:`Guest House`}
const patio =  {name:`Patio`}


// Suspects Collection
const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

//if you want to access you would do suspectsArray[0].age 

// Rooms Collection`
const roomsArray = [dining, con, kitchen, study, library, poolRoom, lounge, ballroom, hall, spa, living, observe, theater, guest,patio];

// Weapons Collection
const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

// ITERATION 2 

function selectRandom(arr) {
    var randomCard = arr[Math.floor(Math.random() * arr.length)];
    return randomCard;
}




function pickMystery() {
   let  theObject =  { 
        suspect:selectRandom(suspectsArray),
        room: selectRandom(roomsArray), 
        weapon: selectRandom(weaponsArray),
        
    }; 

    return theObject;
    
}

//should return a suspect in the suspect property of the object



// ITERATION 3

// At last, we're ready to unveil the mystery.

// Declare a function named revealMystery that receives an envelope object (such as the one returned by pickMystery) as the single argument, and returns a reveal message in the following format:

// <FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!


function revealMystery(object) {
    console.log(object)
    console.log(object.suspect)
    // console.log(object.suspect.firstname + `screaminginternally`)
    console.log(object.suspect.firstname + ' ' + object.suspect.lastname + ` killed Mr. Boddy using the ${object.weapon.name} in the ${object.room.name}!`);
    return object.suspect.firstName + ' ' + object.suspect.lastName + ` killed Mr. Boddy using the ${object.weapon.name} in the ${object.room.name}!`;
}