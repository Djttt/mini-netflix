export const formatMoney = (num: number | string) => {
    if (typeof num === "string") {
        num = parseInt(num);
    } 

    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(num);
}