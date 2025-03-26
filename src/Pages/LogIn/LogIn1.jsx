const LogIn = () => {
    const formHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <div className="flex flex-wrap  w-full content-center justify-center bg-gray-200 py-10">
                <div className="flex shadow-md md:flex-row flex-col">

                    {/* Left Side - Form Section */}
                    <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
                        style={{ width: "24rem", height: "32rem" }}>
                        <div className="w-72">
                            <h1 className="text-3xl font-semibold">Log In</h1>
                            <small className="text-gray-400">Welcome back! Please enter your details</small>

                            <form onClick={formHandler} className="mt-4">
                                <div className="mb-3">
                                    <label className="mb-2 block text-xs font-semibold">Email</label>
                                    <input type="email" placeholder="Enter your email"
                                        className="block w-full rounded-md border border-gray-300 focus:border-sky-700 focus:outline-none focus:ring-1 focus:ring-sky-700 p-2 text-gray-500" />
                                </div>

                                <div className="mb-3">
                                    <label className="mb-2 block text-xs font-semibold">Password</label>
                                    <input type="password" placeholder="Enter your password"
                                        className="block w-full rounded-md border border-gray-300 focus:border-sky-700 focus:outline-none focus:ring-1 focus:ring-sky-700 p-2 text-gray-500" />
                                </div>

                                <div className="mb-3 flex flex-wrap content-center">
                                    <input id="remember" type="checkbox" className="mr-1  cursor-pointer checked:bg-sky-900" />
                                    <label htmlFor="remember" className="mr-auto text-xs font-semibold cursor-pointer">
                                        Terms & Condition
                                    </label>
                                    <a href="#" className="text-xs font-semibold text-sky-700 hover:underline transition-all">Forgot password?</a>
                                </div>

                                <div className="mb-3">
                                    <button className="mb-1.5 block w-full text-center text-white bg-[#50A2FF] hover:bg-[#50A2FF] px-2 py-1.5 rounded-md cursor-pointer active:scale-95 transition-all">
                                        Log in
                                    </button>
                                    <button className="flex flex-wrap items-center justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md cursor-pointer active:scale-95 transition-all">
                                        <img className="w-5 h-5 mr-2"
                                            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                                            alt="Google Logo" />
                                        Log in with Google
                                    </button>
                                </div>
                            </form>

                            <div className="text-center">
                                <span className="text-xs text-gray-400 font-semibold">Don't have an account? </span>
                                <a href="#" className="text-xs hover:underline transition-all font-semibold text-[#50A2FF]">Sign up</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image Section */}
                    <div className="flex flex-wrap content-center justify-center rounded-r-md"
                        style={{ width: "24rem", height: "32rem" }}>
                        <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
                            src="https://i.imgur.com/9l1A4OS.jpeg" alt="Sign Up Banner" />
                    </div>
                </div>


            </div>
        </div>
    );
}

export default LogIn;
