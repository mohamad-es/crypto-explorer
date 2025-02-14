export function numberSeparator(num:number) {
    // Convert the number to a string
    const numStr = num.toString();

    // Use a regular expression to add commas every 3 digits
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
