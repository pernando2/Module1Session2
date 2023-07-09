try {
    let num = 2
    num.toUpperCase()
} catch (error) {
    console.log("an Error occured" + error.message)
    throw new Error('FINAAAAAA')
}