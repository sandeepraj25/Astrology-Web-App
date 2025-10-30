const zodiacsigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];
//total 31 compliment by date of choose
const compliment = ["Kaise ho superstar?", "Aaj bhi full shine kar rahe ho!", "Wah bhai, swag level high hai!", "Chill maro, duniya ko light lag rahi hai", "Full energy hai aap mein", "Boss, smile to killer hai!", "Aaj toh planet bhi jealous hai", "Zodiac bhi aapka fan hai", "Wah bhai, vibe next level hai", "Kya charm hai yaar!", "Aapke jokes to cosmic hai", "Level up ho gaya hai aapka style", "Full on positive energy hai", "Duniya ko chill karna seekho aapse", "Aapka smile moon ko bhi shine karwa de", "Bhai, confidence ka jawab nahi", "Yaar, swag mein aap number one ho", "Aaj mood full bright hai", "OMG, vibe hi alag hai", "Aapko dekh ke stars bhi shine karte hai", "Hahaha, aap funny level pro ho", "Charm ka rocket launch ho gaya", "Boss, aapko dekh ke planets bhi smile karte", "Full on dashing ho aap", "Style mein aap zero se hero ho", "Energy ka booster ho yaar", "Smile se duniya light ho rahi hai", "Yaar, aapka attitude epic hai", "Full on cool ho bhai", "Aapke jokes se stars bhi LOL kar rahe", "OMG, vibe hi zabardast hai"
];
// total 30 victim card compliemet which show randomly 
const victimcardcompliment = ["Wah re victim ji, aap hi bechare aur aap hi hero", "Tumse zyada suffer kisi ne nahi kiya bhai", "Drama toh full Bollywood level ka hai", "Aapke aansu bhi premium edition lagte hai", "Zindagi ne aapko script likh ke di hai kya?", "Bhai, sympathy point full mil gaya", "Aapko dekhe bina dukh bhi ro deta hai", "Aap toh walking emotional damage ho", "Bhai, aap pe to sad emoji bhi pighal gaya", "Aapka victim mode permanent on hai kya?", "Aap dard ke ambassador lagte ho", "Itna rona, clouds bhi jealous ho gaye", "Zindagi ne aapko dukh ka lifetime pack diya hai", "Bhai, drama award to aapka hi hai", "Aapke dukh ki timing perfect hoti hai", "Bina effort ke sympathy mil jati hai aapko", "Aapka sad look bhi stylish hai", "Zodiac bhi bol raha ‘bechara’", "Kya entry lete ho dukh ke scenes mein!", "Bhai, NASA ne bhi aapka dukh track kiya", "Universe bhi bola – ‘arey re victim aa gaya’", "Aap pe dukh bhi royal lagta hai", "Drama queen/king certified aap hi ho", "Aapke tears bhi slow motion mein girte honge", "Sadness bhi aapse permission leti hogi", "Aapka pain to trend kar sakta hai", "Sympathy ka magnet ho yaar", "Bhai, aap dukh ke influencer ho", "Mood off ka brand ambassador aap ho", "Even Mercury retrograde bhi bole – respect!"
];
// size is 30
const recommandation = ["Thoda kam overthink karo, Google bhi confuse ho gaya",
    "Aaj kuch productive karo… ya phir nap le lo, dono same hai",
    "Stars bol rahe, fridge check kar lo, snack bula raha hai",
    "Zodiac kehta hai – aaj laundry bhi ignore kare",
    "Coffee pe trust karo, humans pe baad mein",
    "Aaj selfie lo, planets demand kar rahe",
    "Kaam ka mood aayega… next janam mein",
    "Apni vibe check karo, lagta hai Wi-Fi weak hai",
    "Aaj drama free rehne ki try karo, warna planets resign kar denge",
    "Thoda chill ho jao, horoscope bhi tired hai",
    "Aaj ex ko stalk na karna, universe watching you 👀",
    "Hydrate ho jao, warna moon bhi roast karega",
    "Aaj lucky color hai pajama, so stay comfy",
    "Stars bolte, khud se pyaar karo… ya at least pizza se",
    "Zodiac kehta hai – messages ka reply do bhai!",
    "Thoda chill maro, tum planet nahi ho jo ghoomte raho",
    "Universe bol raha – nap lo, overachieve kal karna",
    "Coffee bina tum incomplete lag rahe ho",
    "Aaj shopping avoid karo, wallet bhi dar raha hai",
    "Stars suggest – memes se stress kam hota hai",
    "Kal se gym start karna, aaj sirf planning hi theek hai",
    "Apna charger sambhal ke rakho, destiny nahi milti easily",
    "Aaj khud ko appreciate karo, warna main kar dunga",
    "Universe bol raha – reply do, ghosting mat karo",
    "Thoda kam attitude rakho, Mars bhi shock ho gaya",
    "Aaj lucky ho, bas alarm mat snooze karna",
    "Horoscope kehta hai – thoda chill kar warna cosmic timeout mil jayega",
    "Aaj kisi ko smile gift karo, free hai aur tax bhi nahi",
    "Stars recommend – late night thoughts ko mute karo",
    "Universe says – tu mast hai, bas thoda paani pi le"
];
//prediction for future
const prediction = ["Aaj tumhare fridge mein snack khatam hone wala hai",
    "Kal traffic aise milega jaise Mars ka parade ho raha ho",
    "Next week tumhare memes viral hone wale hai",
    "Aaj kisi stranger se compliment milne wala hai, ya dog se",
    "Kal coffee strong milegi, day full on energizing",
    "Aaj Wi-Fi connect ho jaayega bina tension ke",
    "Next month shopping ka plan banega… wallet nervous hai",
    "Kal koi funny message receive hoga, reply optional",
    "Aaj planets bol rahe, smile ka rate high hai",
    "Next week selfie ka perfect angle mil jayega",
    "Aaj unexpected pizza delivery ho sakta hai",
    "Kal alarm 5 minute pe kaam karega, perfect timing",
    "Next month luck ka meter thoda high hai",
    "Aaj koi kaam easily ho jaayega, thanks stars!",
    "Next week nap ka schedule perfect fit hoga",
    "Aaj koi random song stuck rehne wala hai",
    "Kal phone battery full charge ke saath survive karega",
    "Next month chocolate ka intake increase hone wala hai",
    "Aaj koi aisa meme milega jo din banade",
    "Kal kisi se thoda extra hasi milegi"
];

const form = document.getElementById("astroForm")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const time = document.getElementById("time").value;
    const place = document.getElementById("place").value || "Unknown";
    const gender = document.getElementById("gender").value;

    const birthDate = new Date(dob);
    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1; // months start from 0
    const year = birthDate.getFullYear();

    const text = `Hii ${name}, ${dob}, ${place}, Your zodiacsign is: ${zodiacsigns[month - 1]}, ${compliment[day - 1]}, ${victimcardcompliment[year % 30]}, ${recommandation[(day * month) % 30]}. ${prediction[name.length % 20]}`;
document.getElementById("result").textContent = text; // this is for results show below

})
