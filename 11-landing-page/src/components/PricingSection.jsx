import { useState } from "react"
import Section from "./Section"

function PricingSection() {
    const [productsCount, setProductsCount] = useState(1)

    const starterPrice = productsCount * 80;
    const businessPrice = productsCount * 150;


    return (
        <Section>
            <div className="flex flex-col gap-12 items-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700 font-bold">Pricing</h2>

                {/* Cards */}
                <div className="w-4/5 mx-auto flex flex-col gap-12 md:flex-row md:justify-between">
                    <div className="flex flex-col w-full shadow-sm px-8 py-8 rounded">
                        <p className="text-md font-bold text-gray-500 mb-3">Starter</p>
                        <p className="text-4xl font-bold text-gray-700">
                            $<span 
                            className="bg-gradient-to-br from-blue-500 to-red-500 bg-clip-text text-transparent">
                                {starterPrice}
                            </span>/mo
                        </p>
                    </div>

                     <div className="flex flex-col w-full shadow-sm px-8 py-8 rounded">
                        <p className="text-md font-bold text-gray-500 mb-3">Business</p>
                          <p className="text-4xl font-bold text-gray-700">
                            $<span 
                            className="bg-gradient-to-br from-blue-500 to-red-500 bg-clip-text text-transparent">
                                {businessPrice}
                            </span>/mo
                        </p>
                    </div>
                </div>

                {/* Slider */}
                <div className="w-full max-w-xl flex flex-col items-center gap-8">
                    <p className="text-center text-gray-600 text-lg font-semibold">
                        <span 
                            className="bg-gradient-to-br from-blue-500 to-red-500 bg-clip-text text-transparent text-2xl font-bold">
                                {productsCount}</span> Products
                    </p>

                    <div className="w-full">
                        <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm text-gray-600 font-semibold">1</span>
                            <input
                                className="flex-1 h-2 appearance-none bg-gradient-to-r from-blue-500 to-red-500  rounded-lg cursor-pointer" 
                                type="range" 
                                min="1" 
                                max="50" 
                                value={productsCount} 
                                onChange={(e) => setProductsCount(parseInt(e.target.value))} />
                            <span className="text-xs sm:text-sm text-gray-600 font-semibold">50</span>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col items-center gap-4">
                    <p className="text-gray-700 font-semibold">Ready to get started?</p>

                     <button 
                        className="px-4 py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300">
                            Get Started
                    </button>
                </div>
            </div>
        </Section>
    )
}

export default PricingSection
