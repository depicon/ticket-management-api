export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidTicketStatus = (status: string): boolean => {
  return ['open', 'in_progress', 'closed'].includes(status);
};

export const isValidTicketPriority = (priority: string): boolean => {
  return ['low', 'medium', 'high'].includes(priority);
};