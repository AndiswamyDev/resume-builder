export const removeItem = (originalArray: any, index: number) => {
    const arrayToBeReturned = originalArray // make a separate copy of the array
    console.log('arrayToBeReturned--111', arrayToBeReturned);
    arrayToBeReturned.splice(index, 1);
    console.log('arrayToBeReturned--222', arrayToBeReturned);
    return arrayToBeReturned;
}

export const addItem = (originalArray: any, itemToAdd: any) => {
    const arrayToBeReturned = originalArray // make a separate copy of the array
    console.log('addItem--111', arrayToBeReturned);
    arrayToBeReturned.push(itemToAdd)
    console.log('addItem--222', arrayToBeReturned);
    return arrayToBeReturned;
}