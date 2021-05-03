import React, { Fragment } from 'react';

const Loading = (): JSX.Element => {

    return (
        <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="400" height="400">
            
                <defs>
                    <clipPath id="water" transform="matrix(4.75 0 0 4.75 -5 -4)">
                    <path fill="none" stroke="rgba(43,19,10,1)" stroke-width="3" stroke-linecap="bevel" stroke-linejoin="bevel" opacity="1" d="M 16.409982681274414 34.69183349609375 L 58.182220458984375 34.71382141113281 C 60.45724105834961 34.65694046020508 61.992919921875 35.70924758911133 62.78926086425781 37.8707389831543 C 63.93962097167969 40.993133544921875 59.56544876098633 61.17202377319336 48.34095764160156 67.83656311035156 C 46.77919387817383 68.76384735107422 32.029815673828125 67.97793579101562 28.067941665649414 68.00906372070312 C 21.633947253754194 68.05961748889486 14.018213272094727 50.49201202392578 13.136992038594846 39.140107182706814 C 13.11823558807373 38.89848327636719 13.039761543273926 34.98174285888672 16.518698692321777 34.65559387207031 L 16.409982681274414 34.69183349609375 Z" transform="matrix(1 0 0 1 0 3.40128e-7)">
                        <animateTransform attributeName="transform" attributeType="XML" type="rotate" keyTimes="0;.26666666666666666;.5;.7333333333333333;1" values="0;-1.5;0;1;0" begin="0s" dur="3s" calcMode="linear" repeatCount="indefinite"></animateTransform>
                    </path>
                    </clipPath>
                </defs>
                <rect fill="#4e2e29" clip-path="url(#water)" width="400" height="400" x="0" y="50%">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" keyTimes="0;.26666666666666666;.5;.7333333333333333;1" values="0;1.5;0;-1;0" begin="0s" dur="3s" calcMode="linear" repeatCount="indefinite"></animateTransform>
                </rect>
                <text font-weight="bold" letter-spacing="3" x="45%" y="62%" font-size="2em" fill="#e9e2c3" font-family="Helvetica" text-anchor="middle">Loading...</text>

                <g transform="matrix(4.75 0 0 4.75 -5 -4)">
                    
                    <g transform="matrix(1,0,0,1,0,0)">
                    <path fill="none" stroke="rgba(43,19,10,1)" stroke-width="3" stroke-linecap="bevel" stroke-linejoin="bevel" opacity="1" d="M 16.409982681274414 34.69183349609375 L 58.182220458984375 34.71382141113281 C 60.45724105834961 34.65694046020508 61.992919921875 35.70924758911133 62.78926086425781 37.8707389831543 C 63.93962097167969 40.993133544921875 59.56544876098633 61.17202377319336 48.34095764160156 67.83656311035156 C 46.77919387817383 68.76384735107422 32.029815673828125 67.97793579101562 28.067941665649414 68.00906372070312 C 21.633947253754194 68.05961748889486 14.018213272094727 50.49201202392578 13.136992038594846 39.140107182706814 C 13.11823558807373 38.89848327636719 13.039761543273926 34.98174285888672 16.518698692321777 34.65559387207031 L 16.409982681274414 34.69183349609375 Z" transform="matrix(1 0 0 1 0 3.40128e-7)"></path>
                    <path fill="none" stroke="rgba(43,19,10,1)" stroke-width="3" stroke-linecap="butt" stroke-linejoin="miter" opacity="1" d="M 63.061824798583984 38.57170486450195 C 65.632750193278 38.245235443115234 67.79559326171875 38.30644734700521 69.55035400390625 38.755340576171875 C 72.1824951171875 39.428680419921875 73.21879577636719 41.204429626464844 73.72347259521484 42.59228515625 C 74.26886749267578 44.09211730957031 74.73758697509766 46.107391357421875 73.83523559570312 48.7942008972168 C 73.21309661865234 50.64667510986328 70.50337982177734 55.38882064819336 66.22374282405693 56.56180256468082 C 62.87295913696289 57.48019790649414 57.81061935424805 56.951297760009766 57.81061935424805 56.951297760009766" transform="matrix(1 0 0 1 0 0)"></path>
                    <rect transform="matrix(1 0 0 1 16.1868 73.0455)" width="42.3352" height="1.63587" fill="rgba(43,19,10,1)" stroke="rgba(43,19,10,0.98)" stroke-width="1" stroke-linecap="round" stroke-linejoin="bevel" opacity="1" x="0" rx="0" y="0"></rect>
                    <g transform="translate(0,8)">
                        <rect transform="matrix(1 0 0 1 23.8105 19.353)" width="1.36021" height="9.29472" fill="rgba(43,19,10,1)" stroke="rgba(43,19,10,0.98)" stroke-width="0.8846518672880502" stroke-linecap="round" stroke-linejoin="round" opacity="1" x="0" rx="0" y="0">
                        <animate attributeName="height" attributeType="XML" keyTimes="0;.05;.25;.45;.6;.8;.925;1" values="0;1;8;0;0;4;0;0" begin="0s" dur="4s" calcMode="linear" repeatCount="indefinite"></animate>
                        <animate attributeName="y" attributeType="XML" keyTimes="0;.05;.25;.45;.6;.8;.925;1" values="0;-1;-8;-8;0;-4;-4;0" begin="0s" dur="4s" calcMode="linear" repeatCount="indefinite"></animate>
                        </rect>
                        <rect transform="matrix(1 0 0 1 36.808 19.353)" width="1.36021" height="9.29472" fill="rgba(43,19,10,1)" stroke="rgba(43,19,10,0.98)" stroke-width="0.8846518672880502" stroke-linecap="round" stroke-linejoin="round" opacity="1" x="0" rx="0" y="0">
                        <animate attributeName="height" attributeType="XML" keyTimes="0;.225;.375;.55;.7;.825;1" values="0;0;10;0;0;10;0" begin="0s" dur="4s" calcMode="linear" repeatCount="indefinite"></animate>
                        <animate attributeName="y" attributeType="XML" keyTimes="0;.225;.375;.55;.7;.825;1" values="0;0;-10;-10;0;-10;-10" begin="0s" dur="4s" calcMode="linear" repeatCount="indefinite"></animate>
                        </rect>
                        <rect transform="matrix(1 0 0 1 49.8055 19.353)" width="1.36021" height="9.29472" fill="rgba(43,19,10,1)" stroke="rgba(43,19,10,0.98)" stroke-width="0.8846518672880502" stroke-linecap="round" stroke-linejoin="round" opacity="1" x="0" rx="0" y="0">
                        <animate attributeName="height" attributeType="XML" keyTimes="0;.125;.225;.35;.525;.625;.725;1" values="0;0;4;0;0;4;0;0" begin="0s" dur="4s" calcMode="linear" repeatCount="indefinite"></animate>
                        <animate attributeName="y" attributeType="XML" keyTimes="0;.125;.225;.35;.525;.625;.725;1" values="0;0;-4;-4;0;-4;-4;0" begin="0s" dur="4s" calcMode="linear" repeatCount="indefinite"></animate>
                        </rect>
                    </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Loading;