
const PHONE_NUMBERS = [
    "5563992125455", // Lucas Castro
    "5563992154511"  // Marcelo Alves
];

// Start with a random index to balance load across different users/sessions,
// then alternate strictly for subsequent clicks in the same session.
let currentIndex = Math.floor(Math.random() * PHONE_NUMBERS.length);

export function getWhatsAppUrl(message: string = "Olá! Gostaria de solicitar um orçamento para meu projeto."): string {
    const phoneNumber = PHONE_NUMBERS[currentIndex];

    // Alternate for the next call
    currentIndex = (currentIndex + 1) % PHONE_NUMBERS.length;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function openWhatsApp(message?: string) {
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
}
