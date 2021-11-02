
export const updateObjectInArray = (array, itemId, objPropName, newObjProp) => {
  return array.map(u => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newObjProp }
    }
    return u;
  })
}