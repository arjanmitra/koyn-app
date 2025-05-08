export const formatCurrency = (numStr: string): string => {
    const num = parseFloat(numStr)
    if (num >= 1_000_000_000) {
        return `$${(num / 1_000_000_000).toFixed(2)}B`;
    } else if (num >= 1_000_000) {
        return `$${(num / 1_000_000).toFixed(2)}M`;
    } else {
        return `$${num.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
    }
}