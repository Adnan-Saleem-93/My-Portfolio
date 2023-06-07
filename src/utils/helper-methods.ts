export const range = (len:number):Array<number> => {
    const arr:number[] = [];
    for (let i : number = 0; i < len; i++) {
      arr.push(i);
    }
    return arr;
};