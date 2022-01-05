const countForest = (arr) => {
    let arr2 = arr.filter((val, i) => {
        let x = 0;
        let w = 0;
        val.map((v, y) => {
            if (v) w++
            if (v === 1 && val[y + 1] === 1) x++
        })
        if (x === (w - 1)) return val
    })
    return arr2.length
}