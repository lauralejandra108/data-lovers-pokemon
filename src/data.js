// que acceda a la data y de la data al type de pokemones 
export const filterType = (dataArray, typeUser) => {
  return dataArray.filter(element => element.type.includes(typeUser))
};

export const filterEgg = (dataArray, typeUser) => {
  return dataArray.filter(element => element.egg.includes(typeUser))
};
