export const convertDateFormat = (date: string) => {
  const dateToConvert = new Date(date);
  const localDateString = dateToConvert.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const localTimeString = dateToConvert.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });
  return { date: localDateString, time: localTimeString };
};
