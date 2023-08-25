const section1 = ['Hot', 'Wet', 'Cold', 'Dry', 'Chilly', 'Spicy', 'Melting', 'Burning', 'Joyful', 'Wild', 'Goofy', 'Lonely', 'Abandoned', 'Stinky', 'Windy', 'Red', 'Blue', 'Green', 'Lovely', 'Radical', 'Yellow'];
const section2 = ['Mountain', 'Ocean', 'Valley', 'Canyon', 'Space', 'City', 'Forest', 'Highway', 'Coast', 'Beach', 'Undersea', 'Volcano', 'Geyser', 'Village'];
const section3 = ['Racetrack', 'Zone', 'Farm', 'Circus', 'House', 'Mansion', 'Complex', 'Jailhouse', 'Campus', 'Playground', 'Cove', 'Cavern', 'Cottage', 'Fields', 'Pass', 'Run', 'Plains', 'Lab', 'Site', 'Chasm', 'Warehouse'];
//Section 1: 21 || Section 2: 14 || Section 3: 21

const randSection = (section) =>
{
    let num = Math.floor(Math.random() * section.length);
    return section[num];
};

console.log(`Your generated level name is: ${randSection(section1)} ${randSection(section2)} ${randSection(section3)}`);
// console.log(randSection(section1));
// console.log(randSection(section2));
// console.log(randSection(section3));
