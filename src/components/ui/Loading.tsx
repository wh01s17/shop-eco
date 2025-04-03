import React from 'react'

export const Loading = () => {
    return (
        <div className='flex justify-center items-center h-200 w-full'>
            <div className='w-50'>
                <svg
                    version="1.1"
                    id="L2"
                    x="0px"
                    y="0px"
                    viewBox="0 0 10 10"
                    enableBackground="new 0 0 10 10"
                    xmlSpace="preserve"
                >
                    <circle
                        fill="none"
                        stroke="#047857"
                        strokeWidth="0.4"
                        strokeMiterlimit="10"
                        cx="5"
                        cy="5"
                        r="4.8"
                    />
                    <line
                        fill="none"
                        strokeLinecap="round"
                        stroke="#047857"
                        strokeWidth="0.4"
                        strokeMiterlimit="10"
                        x1="5"
                        y1="5"
                        x2="8.5"
                        y2="5.05"
                    >
                        <animateTransform
                            attributeName="transform"
                            dur="2s"
                            type="rotate"
                            from="0 5 5"
                            to="360 5 5"
                            repeatCount="indefinite"
                        />
                    </line>
                    <line
                        fill="none"
                        strokeLinecap="round"
                        stroke="#047857"
                        strokeWidth="0.4"
                        strokeMiterlimit="10"
                        x1="5"
                        y1="5"
                        x2="4.95"
                        y2="7.4"
                    >
                        <animateTransform
                            attributeName="transform"
                            dur="15s"
                            type="rotate"
                            from="0 5 5"
                            to="360 5 5"
                            repeatCount="indefinite"
                        />
                    </line>
                </svg>
            </div>
        </div>
    )
}
