import { animated } from '@react-spring/web';

const START = 'translate(350, 120) rotate(7) scale(1.47)';
const END = 'translate(120, 30) rotate(0) scale(1)';

export const RightMan = () => {
  return (
    <animated.g id="m_right" transform={END}>
      <g id="Head/Front">
        <g id="Head">
          <path
            id="Head_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M176.063 95.6323C170.156 98.4858 164.506 99.6093 161.983 98.7099C155.659 96.4549 157.219 72.7834 163.08 63.9301C168.94 55.0769 195.072 53.3697 194.687 71.9354C194.553 78.379 191.335 83.8467 186.925 88.1454L191.04 121.993L170.286 120.099L176.063 95.6323Z"
            fill="#B28B67"
          />
        </g>
        <path
          id="Hair"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M177.138 72.3882C175.586 69.5599 174.048 67.3702 171.914 65.9854C162.776 65.2964 161.857 63.5685 162.359 58.073C163.928 57.1563 169.29 55.8609 175.158 55.8944C178.206 55.3181 181.711 55.7986 184.972 57.5215C189.048 59.087 192.359 61.9593 193.489 66.8742C198.263 77.1322 193.039 86.8803 186.931 89.8157C185.555 87.8542 184.371 85.9668 183.325 84.1681C184.375 83.3169 185.093 82.0609 185.225 80.6108C185.486 77.7544 183.374 75.2268 180.509 74.9653C180.298 74.9461 180.089 74.9396 179.883 74.9453C179.428 78.5049 177.795 90.539 176.018 94.6087C173.923 99.4068 164.223 99.7466 160.878 99.4414C157.99 99.1777 158.337 96.46 158.586 94.5123C158.622 94.2318 158.655 93.9673 158.677 93.7284C158.723 93.2291 159.374 93.2899 160.11 93.3585C161.065 93.4476 162.163 93.55 162.263 92.457C162.372 91.2656 160.804 90.201 159.4 89.2484C158.525 88.654 157.713 88.1032 157.413 87.5924C156.467 85.9809 156.288 83.9075 157.924 84.0567C158.818 84.1383 159.997 84.764 161.417 85.5167C163.559 86.653 166.248 88.079 169.323 88.3596C174.405 88.8233 177.104 72.5918 177.138 72.3882Z"
          fill="#191847"
        />
      </g>
      <g id="Bottom/Skinny Jeans 1">
        <path
          id="Leg"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M189.877 196.293L135.672 296.35L103.694 373.361L89.0171 370.184L144.139 186.392L189.877 196.293Z"
          fill="#997659"
        />
        <path
          id="Leg_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M203.848 199.317C189.67 254.323 183.976 284.765 183.37 289.911C182.765 295.056 178.214 329.408 184.205 392.561L168.94 389.257C156.337 327.188 154.961 291.553 153.72 283.492C152.478 275.431 150.602 243.35 149.79 187.615L203.848 199.317Z"
          fill="#B28B67"
        />
        <path
          id="Pant"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M190.544 196.437C174.503 231.432 147.82 287.06 110.494 363.32L89.0275 358.673C105.342 275.638 123.868 222.673 143.958 186.353L190.544 196.437Z"
          fill="#69A1AC"
        />
        <path
          id="Pant_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M203.957 199.34C189.823 254.356 183.498 310.201 186.115 380.594L163.211 375.636C150.379 314.404 144.291 256.154 146.503 186.904L203.957 199.34Z"
          fill="#89C5CC"
        />
        <g id="Left Shoe">
          <path
            id="Shoe"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M184.001 404.03L185.9 391.548C185.997 390.914 185.481 390.354 184.84 390.345C177.178 390.231 167.925 384.609 167.925 384.609C156.359 389.521 141.255 389.724 135.611 389.605C134.407 389.58 133.423 390.587 133.5 391.788L133.757 395.811L164.079 402.374L181.767 406.203L184.001 404.03Z"
            fill="#191847"
          />
        </g>
        <g id="Right Shoe">
          <path
            id="Shoe_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M104.223 386.76L106.123 374.278C106.219 373.645 105.703 373.085 105.062 373.075C97.4005 372.962 88.147 367.339 88.147 367.339C76.5812 372.251 61.4774 372.455 55.8336 372.336C54.6296 372.311 53.645 373.317 53.722 374.519L53.9796 378.541L84.3013 385.105L101.989 388.934L104.223 386.76Z"
            fill="#191847"
          />
        </g>
      </g>
      <g id="Body/Long Sleeve 1">
        <path
          id="Skin"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.695 194.131L119.122 176.457L123.849 192.039L95.5024 200.837C86.9515 209.178 82.2875 212.554 81.5103 210.967C80.8551 209.629 81.5661 208.497 82.221 207.454C82.7311 206.642 83.2073 205.884 82.9769 205.124C82.451 203.391 77.2456 203.093 72.2937 203.021C67.3419 202.949 68.974 200.899 70.258 199.93C75.5509 197.393 82.0299 195.46 89.695 194.131ZM231.107 242.909C229.04 237.554 224.969 186.819 224.969 186.819L206.891 185.24C206.891 185.24 218.713 240.626 219.746 244.043C221.089 248.482 217.577 254.434 215.197 258.469C214.828 259.093 214.487 259.672 214.195 260.192C216.852 261.68 218.318 260.308 219.865 258.862C221.611 257.228 223.459 255.5 227.238 257.69C228.698 258.536 230.065 259.504 231.399 260.449C236.011 263.714 240.247 266.714 246.672 263.527C247.691 263.022 248.952 260.884 246.557 258.906C240.592 253.976 232.117 245.528 231.107 242.909Z"
          fill="#B28B67"
        />
        <path
          id="Coat Back"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M180.511 106.545L173.15 104.584C143.225 125.943 127.641 170.8 91.4144 192.01L98.6769 202.871C158.339 200.973 178.071 146.324 180.511 106.545Z"
          fill="#E87613"
        />
        <path
          id="Shirt"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M204.56 203.192C204.56 203.192 159.586 199.087 138.396 197.154C135.372 196.878 136.339 192.578 136.976 190.422C144.333 165.539 166.516 140.017 169.809 103.942L189.166 102.7C202.642 129.448 205.257 161.104 204.56 203.192Z"
          fill="#DDE3E9"
        />
        <path
          id="Coat Front"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M210.347 221.973C212.671 229.363 215.02 235.841 217.333 240.863L231.523 242.158C237.539 193.093 222.306 153.527 208.75 129.27C212.245 129.34 215.511 128.177 217.818 124.794C225.939 112.884 224.05 105.747 216.802 102.796C212.817 101.173 208.884 101.674 204.176 102.273C200.323 102.763 195.952 103.319 190.608 102.832C190.606 102.832 190.605 102.832 190.603 102.831C190.085 102.784 189.61 102.776 189.177 102.803L182.811 102.585C182.811 102.585 149.171 187.103 158.051 217.2L210.347 221.973Z"
          fill="#FF9B21"
        />
        <path
          id="Shade"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M210.347 221.973C207.298 212.276 204.292 201.009 201.47 189.398C198.905 201.667 195.382 213.902 190.801 220.189L210.347 221.973Z"
          fill="black"
          fillOpacity="0.1"
        />
      </g>
    </animated.g>
  );
};
