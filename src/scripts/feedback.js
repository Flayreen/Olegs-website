const feedbacks = [
    {
        name: "Jane Tomson",
        image: "assets/images/feedback/feedback1.jpg",
        text: "“You worked so hard to complete the project on time and to such high quality! Your attention to detail and commitment to meeting deadlines is truly impressive. You have contributed greatly to the success of the project, and I am grateful to have you on our team.”",
    },
    {
        name: "Tom Miller",
        image: "assets/images/feedback/feedback2.jpg",
        text: "“I'm really impressed with how you “fight” to achieve all your goals. Honestly, I'm not sure that you would have been able to complete all these tasks on time without you. Thank you for always believing in me and being part of the team.”",
    },
    {
        name: "Tom Jacob Jones",
        image: "assets/images/feedback/feedback3.jpg",
        text: "“I would like to thank you for the amazing job you have done in getting this project up and running in such a short time. It's nice to see us all working as one team.”",
    },
];

function createFeedbackCard(feedback) {
    const card = document.createElement('div');
    card.className = 'feedback_card';

    // Додаємо контейнер для feedback_card_image, h3 і p
    const contentContainer = document.createElement('div');
    contentContainer.className = 'feedback_card_content_container';

    // Додаємо контейнер для картинки
    const imageContainer = document.createElement('div');
    imageContainer.className = 'feedback_card_image_container';

    const image = document.createElement('img');
    image.src = feedback.image;

    imageContainer.appendChild(image);

    // Додаємо контейнер для h3
    const name = document.createElement('h3');
    name.textContent = feedback.name;

    // Додаємо контейнер для p
    const feedbackText = document.createElement('p');
    feedbackText.textContent = feedback.text;

    // Додаємо всі контейнери до contentContainer
    contentContainer.appendChild(imageContainer);
    contentContainer.appendChild(name);
    contentContainer.appendChild(feedbackText);

    // Додаємо contentContainer до основного контейнера
    card.appendChild(contentContainer);

    // Додаємо пустий контейнер
    const emptyContainer = document.createElement('div');
    emptyContainer.className = 'feedback_card_empty_container';
    card.appendChild(emptyContainer);

    document.querySelector('.feedback_container_card').appendChild(card);
}

feedbacks.forEach(function (feedback) {
    createFeedbackCard(feedback);
});