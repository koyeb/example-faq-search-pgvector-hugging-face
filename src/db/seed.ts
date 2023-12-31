import { generateEmbedding, saveEmbedding } from "../helpers";

const travelFAQ = [
  "How do I book a flight?",
  "What types of accommodations do you offer?",
  "Can I customize my travel package?",
  "What is the cancellation policy?",
  "Do you offer travel insurance?",
  "Are there any travel restrictions due to COVID-19?",
  "What travel documents do I need?",
  "How do I make a payment?",
  "Can I change my travel dates?",
  "What are the popular destinations you offer?",
  "Do you provide airport transfers?",
  "How can I contact customer support?",
  "What is the baggage allowance for my flight?",
  "Can I request special dietary options for meals?",
  "What is the check-in process at hotels?",
  "Do you offer group travel discounts?",
  "What activities and tours are available at my destination?",
  "Is there a loyalty program for frequent travelers?",
  "What is the best time to visit specific destinations?",
  "Can I add additional travelers to my booking?",
  "What is your privacy policy?",
  "Do you have a mobile app for booking?",
  "What is the process for booking a cruise?",
  "Are there any hidden fees in the travel packages?",
  "Can I book a one-way flight?",
  "How do I check the status of my booking?",
  "Do you provide travel itineraries?",
  "What is the child policy for accommodations?",
  "Can I make changes to my booking after it's confirmed?",
  "What are the payment options you accept?",
  "Are flights refundable?",
  "What is the difference between economy and business class?",
  "Can I book a trip for a large group?",
  "How do I get a visa for international travel?",
  "What is your travel agency's history?",
  "Do you offer last-minute travel deals?",
  "Can I book a round-trip flight with different airlines?",
  "What is the process for rescheduling a flight?",
  "Do you offer travel packages for honeymoons?",
  "How can I get travel tips for my destination?",
  "What is the process for booking a vacation package?",
  "Can I book a trip for someone else?",
  "What is the procedure for lost luggage?",
  "Do you provide transportation from the airport to accommodations?",
  "What is the policy for children traveling alone?",
  "Can I book a multi-city itinerary?",
  "How do I check in for my flight online?",
  "What is the travel agency's customer satisfaction rate?",
  "Can I book a trip for a special occasion?",
  "What is the refund policy for canceled flights?",
  "Do you offer guided tours?",
  "How can I get travel insurance information?",
  "What is the difference between a direct and non-stop flight?",
  "What are the best times to visit popular destinations?",
  "Can I choose my seat on the flight?",
  "How do I request special assistance for my travel?",
  "What is the process for booking a group vacation?",
  "Do you offer gift certificates for travel?",
  "How do I use travel rewards or miles for bookings?",
  "What is the travel agency's pricing policy?",
  "Can I request specific room preferences in accommodations?",
  "What is the minimum age for travelers?",
  "How do I apply for a passport?",
  "Do you offer travel packages for sporting events?",
  "Can I book a trip for a family reunion?",
  "What is your policy for lost or stolen documents?",
  "How do I check the weather at my destination?",
  "What is the procedure for missed connections?",
  "Do you provide travel safety tips?",
  "Can I book a trip for a school group?",
  "What is your loyalty program for frequent travelers?",
  "How do I check flight availability for a specific date?",
  "What is your policy for travelers with disabilities?",
  "Do you have a best price guarantee for bookings?",
  "Can I book a one-way flight with a return date open?",
  "What is the process for booking an all-inclusive vacation?",
  "Are there any discounts for senior citizens?",
  "How can I request a travel brochure?",
  "What is the procedure for damaged baggage?",
  "Do you offer travel package deals for special occasions?",
  "How do I find out about travel advisories?",
  "What is the process for booking a honeymoon package?",
  "Can I book a trip for a solo traveler?",
  "What is your policy for delayed or canceled flights?",
  "How do I track my checked baggage?",
  "What is the travel agency's social media presence?",
  "Do you provide travel advice for first-time travelers?",
  "Can I book a trip for a corporate event?",
  "What is your policy for missed flights?",
  "How can I subscribe to your travel newsletter?",
  "What is the process for booking a romantic getaway?",
  "Are there any deals for military personnel?",
  "Can I book a trip for a religious pilgrimage?",
  "What is your policy for travel during peak seasons?",
  "How do I make special requests for my accommodations?",
  "What is the travel agency's rating and reviews?",
  "Do you offer recommendations for dining at destinations?",
  "How can I inquire about local culture at my destination?",
  "What is the process for booking a wellness retreat?",
  "Can I book a trip for adventure travel?",
  "What is your policy for trip insurance claims?",
  "How do I get information on local transportation at my destination?",
  "What is your policy for weather-related flight delays?",
  "Do you provide recommendations for travel photography?",
  "How can I access travel resources for my destination?",
  "What is the process for booking a safari tour?",
  "Can I book a trip for wildlife and nature exploration?",
  "What is your policy for natural disasters at destinations?",
  "How do I check for any travel alerts or warnings?",
  "Do you offer recommendations for cultural events at destinations?",
  "What is your policy for travel disruptions due to strikes or protests?",
  "What is the process for booking a beach vacation?",
  "Can I book a trip for water sports and activities?",
  "How do I report an issue with accommodations?",
  "What is your policy for medical emergencies during travel?",
  "Do you provide recommendations for local entertainment at destinations?",
  "How can I inquire about local shopping opportunities at my destination?",
  "What is the process for booking a winter sports trip?",
  "Can I book a trip for educational travel and study programs?",
  "What is your policy for safety concerns at destinations?",
  "How do I get information on local customs and etiquette at my destination?",
];

travelFAQ.forEach(async (question) => {
  try {
    const embedding = await generateEmbedding(question);
    saveEmbedding(question, embedding);
  } catch (error) {
    console.error(error);
  }
});
