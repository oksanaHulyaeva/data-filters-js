export const isValidLength = (value: number):boolean => {
  if (!value || typeof value !== 'number' || value <= 0) return false;
  return true;
};

export const isValidSubstring = (value: string):boolean => {
  if (!value || typeof value !== 'string' || value.length < 1) return false;
  return true;
};

// eslint-disable-next-line max-len
export const filterByLength = (arr:string[], value: number):string => arr.filter((item) => item.length === value).join(', ');

export const filterBySubstr = (arr:string[], substr: string, mode:boolean):string => {
  if (mode) return arr.filter((item) => item.includes(substr)).join(', ');
  return arr.filter((item) => item.toLowerCase().includes(substr.toLowerCase())).join(', ');
};
