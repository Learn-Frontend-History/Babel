(async () => {
    async function foo() {

        return 'hello'
    }

    const message = await foo()
    console.log(message)
})()

function* foo() {}
