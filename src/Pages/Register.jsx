import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
 return (
    <div>
        <div class="min-h-screen flex items-center justify-center">
    
            <div class=" mx-auto max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            
            
                <div class=" mb-5">
                    <Link to="">
                        <img class="h-10 w-auto block dark:hidden" src="" alt="logo"/>
                    </Link>
                </div>
            
                <form class="space-y-4" action="" method="post" id="login-form">
                    <h4 class="text-2xl font-bold text-gray-800 dark:text-gray-100">Create account</h4>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Enter your email / phone & password</p>

                
                    <div>
                    <label for="fullname" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                    <input 
                        id="fullname" 
                        name="fullname" 
                        type="text" 
                        required 
                        placeholder="e.g Cynthia Ofori"
                        class="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-100"
                    />
                    </div>

                    <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="e.g Cynthia@gmail.com"
                        class="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-100"
                    />
                    </div>

                    <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
                    <input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        required 
                        placeholder="e.g 07012345678"
                        class="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-100"
                    />
                    </div>

                
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                        <div class="relative">
                            <input 
                            id="password" 
                            name="password" 
                            type="password" 
                            required 
                            placeholder="*********"
                            class="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-100"
                            />
                            
                            <button type="button" class="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                            👁
                            </button>
                        </div>
                    </div>

                    <div>
                        <label for="confirmPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300"> Confirm Password</label>
                        <div class="relative">
                            <input 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            type="password" 
                            required 
                            placeholder="*********"
                            class="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-100"
                            />
                            
                            <button type="button" class="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                            👁
                            </button>
                        </div>
                    </div>

                
                    <div class="flex items-center justify-between">
                        <label class="flex items-center space-x-2">
                            <input id="checkbox1" type="checkbox" class="rounded text-blue-600 focus:ring-blue-500"/>
                            <span class="text-sm text-gray-600 dark:text-gray-400">Agree to our <Link to="" class="text-blue-600 hover:underline">privacy policy</Link></span>
                        </label>
                    </div>

                    <button 
                    type="submit" 
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition"
                    >
                   Register
                    </button>

                </form>

                <p class="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
                    Already have an account?
                    <Link to="" class="text-blue-600 hover:underline">Log in</Link>
                </p>

            </div>
        </div>
    </div>
 )
}

export default Register
