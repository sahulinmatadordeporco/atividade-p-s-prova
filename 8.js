const birthDay = new Date('2025-02-27T00:00:00.000Z');

const today = new Date('2024-08-21T00:00:00.000Z');

const diffInDays = Math.round((birthDay - today) / (1000 * 3600 * 24));
console.log(`Faltam ${diffInDays} dias para o meu próximo aniversário.`);

const formattedToday = today.toLocaleDateString('pt-BR', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});
console.log(`Data atual: ${formattedToday}`);

const futureDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
console.log(`Data atual + 30 dias: ${futureDate.toLocaleDateString('pt-BR')}`);