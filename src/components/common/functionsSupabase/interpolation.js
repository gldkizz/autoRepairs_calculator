function interpolation(sizes, prices, searchValue) {
    if(searchValue > sizes.at(-1)){
        return prices.at(-2) + ((searchValue - sizes.at(-1)) * prices.at(-1))
    }
    let len = sizes.length
    for (let i = 1; i < len; i++){
        if((searchValue <= sizes[i]) && (searchValue >= sizes[i-1])) {
            let x0 = sizes[i-1]
            let x1 = sizes[i]
            let f0 = prices[i-1]
            let f1 = prices[i]

            let k = (f1 - f0) / (x1 - x0)
            let interpolated_value = k * (searchValue - x0) + f0
            return Math.round(interpolated_value)
        }
    }
}

export default interpolation