
"use client"

let counter = 0;

function generateUniqueId() {
  counter += 1;
  return 'card-' + counter; // Prefix with 'card-' for clarity
}

const CreateNewCard = () => {
    // Generate a unique ID for the new card
    const newCardId = generateUniqueId(); // Replace with your ID generation logic
  
    // Create a new card object with initial empty values
    const newCard = {
      id: newCardId,
      title: '',
      description: '',
      ideaText: '',
    };
  
    // Update the state with the new card appended
    // setCards([...cards, newCard]);
  
    // Optionally, focus the title input for immediate editing
    document.getElementById('newCardTitle')?.focus(); // Adjust selector based on your input ID
  };

  export default CreateNewCard;
  