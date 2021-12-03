export const greaterThanLastCounter = (data: number[]): number => {
    let count = 0;

    data.forEach((item, index) => {
        if(item > data[index - 1]) {
            count++
        }
    })

    return count;
}

export const slidingWindowValues = (data: number[]): number => {
    const slidingWindowValues = data
        .slice(0, data.length - 2)
        .map((value, index): number => {
            return value + data[index + 1] + data[index + 2];
        });

    return greaterThanLastCounter(slidingWindowValues);
}
