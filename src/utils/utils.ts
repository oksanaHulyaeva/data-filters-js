export const isValidLength = (value: number):boolean => {
  if (!value || typeof value !== 'number' || value <= 0) return false;
  return true;
};

export const isValidSubstring = (value: string):boolean => {
  if (!value || typeof value !== 'string') return false;
  return true;
};
