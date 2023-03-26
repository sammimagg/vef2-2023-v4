import React from 'react';

type ButtonProps = {
  label: string,
  typeOf: "button" | "submit" | "reset" | undefined,
  color: string,
};

const Button: React.FC<ButtonProps> = ({ label, typeOf, color }) => {
    let colorOfButton;
    switch (color) {
        case "green":
            colorOfButton = "#00faaf";
            break;
        case "red":
            colorOfButton = " #ff736a ";
            break;
        case "yellow":
            colorOfButton = "#f1ff6a";
            break;
        case "blue":
            colorOfButton = "#10099f";
            break;
        default:
            colorOfButton = "#b6b6b6 ";
    }
    return (
        <button style={{ 
                height: 40,
                minWidth: 150,
                maxWidth: 250,
                backgroundColor: 'transparent',
                borderRadius: 6,
                border: `1px solid ${colorOfButton}`,
                color: colorOfButton,
                fontWeight: 600,
                transition: 'all 0.3s ease',
                cursor: 'pointer',

            }}
            type={typeOf}>
        {label}
        </button>
    );
};

export default Button;
