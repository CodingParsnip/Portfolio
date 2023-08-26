// BUILDING THE GENERATOR

const section1 = ['Hot', 'Wet', 'Cold', 'Dry', 'Chilly', 'Spicy', 'Melting', 'Burning', 'Joyful', 'Wild', 'Goofy', 'Lonely', 'Abandoned', 'Stinky', 'Windy', 'Red', 'Blue', 'Green', 'Lovely', 'Radical', 'Yellow', 'Gassy', 'Gnarly', 'Haunted', 'Flooded'];
const section2 = ['Mountain', 'Ocean', 'Valley', 'Canyon', 'Space', 'City', 'Forest', 'Highway', 'Coast', 'Beach', 'Undersea', 'Volcano', 'Geyser', 'Village'];
const section3 = ['Racetrack', 'Zone', 'Farm', 'Circus', 'House', 'Mansion', 'Complex', 'Jailhouse', 'Campus', 'Playground', 'Cove', 'Cavern', 'Cottage', 'Fields', 'Pass', 'Run', 'Plains', 'Lab', 'Site', 'Chasm', 'Warehouse'];
//Section 1: 25 || Section 2: 14 || Section 3: 21

const randSection = (section) =>
{
    let num = Math.floor(Math.random() * section.length);
    return section[num];
};

// ASSIGNING THE GENERATOR TO THE BUTTON

let clickButton = document.getElementById('generate-level-name');

const onButtonClick = () =>
{
    document.getElementById("levelname").innerHTML = `Your generated level name is: ${randSection(section1)} ${randSection(section2)} ${randSection(section3)}`;
};

clickButton.addEventListener('click', onButtonClick);