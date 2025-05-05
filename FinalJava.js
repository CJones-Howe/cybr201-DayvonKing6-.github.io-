function revealFact() {
  const facts = [
    "My First pet was a turtle.",
    "I used to want to be an engineer but I like coding better.",
    "I speak fluent french.",
    "My favorite food is crab legs.",
    "Hi 8)"
  ];
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("funFact").textContent = fact;
}