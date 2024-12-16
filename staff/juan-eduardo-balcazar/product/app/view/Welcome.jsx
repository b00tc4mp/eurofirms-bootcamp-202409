function Welcome(props) {
    console.log('Welcome -> render')

    const handleRegisterClick = event => {
        event.preventDefault()

        props.onRegisterClick()
    }

    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    return <main>

        {
            (
                <div className="relative w-96 m-3 cursor-pointer border-2 shadow-lg rounded-xl items-center">

                    <div className="flex h-28 bg-blue-700 rounded-xl items-center justify-center">
                        <h1 className="absolute mx-auto text-center right text-2xl text-white">
                            Welcome to APP
                        </h1>
                    </div>


                    <div className="p-2 border-b-2 text-center text -2x1">
                        <h6>
                            BootCamp 202409
                        </h6>
                    </div>



                    <div className="flex flex-wrap items-center rounded-b-xl border-t-2 bg-white button center">
                        <button className="border rounded-2xl bg-blue-600 text-white alignt-text-center shadow-sm p-1 px-2 m-2">
                            <p>Please make your selection touch the word <a href="" onClick={handleRegisterClick}>Register</a> or <a href="" onClick={handleLoginClick}>Login</a>.</p>
                        </button>

                    </div>
                </div>
            )
        };
    </main>
}

export default Welcome
