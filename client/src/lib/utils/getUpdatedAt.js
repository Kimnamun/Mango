const getUpdatedAt = () => {
  const full = new Date();
  const hours = full.getHours();
  const minutes = full.getMinutes();
  return `μ€λ ${hours}μ ${minutes}λΆ`;
};

export default getUpdatedAt;
