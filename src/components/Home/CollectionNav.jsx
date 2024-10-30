import React from "react";

export const CollectionNav = () => {
    return (
        <div className="text-white mt-8 flex justify-center">
            <div className="flex items-center justify-start w-4/5">
                <h1 className="text-2xl font-bold">Popular Collections</h1>
                <div className="border-2 border-primaryTwo ml-4 px-3 py-2 rounded-md">
                    <details className="group w-full">
                        <summary className="rounded-lg marker:content-none cursor-pointer">
                            <span className="text-sm flex pr-1 items-center">
                                Last 24 Hours{" "}
                                <span className="pl-4">
                                    <svg
                                        className="w-5 h-5 transition group-open:rotate-90"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                        ></path>
                                    </svg>
                                </span>
                            </span>
                        </summary>
                        <div className="py-2 px-12 absolute opacity-100 bg-primaryTwo">
                            <p className="text-sm">1 Week</p>
                            <p className="text-sm">1 Month</p>
                            <p className="text-sm">1 Year</p>
                        </div>
                    </details>
                </div>
            </div>
            <div className="1/5 text-end">
                <button className="border-2 border-primaryTwo px-4 py-1 rounded-md">See All</button>
            </div>
        </div>
    )
}