// Define user data
const users = [
    { name: "User 1", description: "Description of User 1", image: "job1.jpeg" },
    { name: "User 2", description: "Description of User 2", image: "job1.jpeg" },
    // Add more users as needed
];

// Function to create user profile cards
function createUserCard(user) {
    const cardContainer = document.getElementById('card-container');

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = user.image;
    img.alt = user.name;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const title = document.createElement('h2');
    title.textContent = user.name;

    const description = document.createElement('p');
    description.textContent = user.description;

    const btn = document.createElement('a');
    btn.href = "#";
    btn.classList.add('btn');
    btn.textContent = "Read More";

    cardContent.appendChild(title);
    cardContent.appendChild(description);
    cardContent.appendChild(btn);

    card.appendChild(img);
    card.appendChild(cardContent);

    cardContainer.appendChild(card);
}

// Generate user profile cards
users.forEach(user => {
    createUserCard(user);
});
