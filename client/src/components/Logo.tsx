interface LogoProps {
  variant?: 'full' | 'symbol';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo = ({ variant = 'full', className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  };

  if (variant === 'symbol') {
    return (
      <svg 
        viewBox="0 0 200 200" 
        className={`${sizeClasses[size]} ${className}`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Neural Network Symbol */}
        <g fill="#3B82F6">
          {/* Central vertical stem */}
          <rect x="95" y="60" width="10" height="80" rx="5" />
          
          {/* Top branch */}
          <rect x="95" y="60" width="30" height="8" rx="4" transform="rotate(30 100 64)" />
          <circle cx="120" cy="45" r="8" />
          
          {/* Top-right branch */}
          <rect x="105" y="75" width="25" height="8" rx="4" transform="rotate(45 110 79)" />
          <circle cx="125" cy="65" r="8" />
          
          {/* Right branch */}
          <rect x="105" y="95" width="30" height="8" rx="4" />
          <circle cx="145" cy="99" r="8" />
          
          {/* Bottom-right branch */}
          <rect x="105" y="115" width="25" height="8" rx="4" transform="rotate(-45 110 119)" />
          <circle cx="125" cy="135" r="8" />
          
          {/* Bottom branch */}
          <rect x="95" y="140" width="30" height="8" rx="4" transform="rotate(-30 100 144)" />
          <circle cx="120" cy="160" r="8" />
          
          {/* Left branch */}
          <rect x="65" y="95" width="30" height="8" rx="4" />
          <circle cx="55" cy="99" r="8" />
          
          {/* Top-left branch */}
          <rect x="75" y="75" width="25" height="8" rx="4" transform="rotate(-45 80 79)" />
          <circle cx="65" cy="65" r="8" />
          
          {/* Bottom-left branch */}
          <rect x="75" y="115" width="25" height="8" rx="4" transform="rotate(45 80 119)" />
          <circle cx="65" cy="135" r="8" />
          
          {/* Center node */}
          <circle cx="100" cy="100" r="10" />
        </g>
      </svg>
    );
  }

  return (
    <svg 
      viewBox="0 0 420 120" 
      className={`${sizeClasses[size]} ${className}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Symbol part (scaled down) */}
      <g fill="#3B82F6" transform="scale(0.6) translate(0, 10)">
        {/* Central vertical stem */}
        <rect x="45" y="30" width="10" height="60" rx="5" />
        
        {/* Branches and nodes */}
        <rect x="45" y="30" width="22" height="6" rx="3" transform="rotate(30 50 33)" />
        <circle cx="65" cy="22" r="6" />
        
        <rect x="55" y="42" width="18" height="6" rx="3" transform="rotate(45 55 45)" />
        <circle cx="70" cy="35" r="6" />
        
        <rect x="55" y="57" width="22" height="6" rx="3" />
        <circle cx="82" cy="60" r="6" />
        
        <rect x="55" y="72" width="18" height="6" rx="3" transform="rotate(-45 55 75)" />
        <circle cx="70" cy="85" r="6" />
        
        <rect x="45" y="90" width="22" height="6" rx="3" transform="rotate(-30 50 93)" />
        <circle cx="65" cy="100" r="6" />
        
        <rect x="25" y="57" width="22" height="6" rx="3" />
        <circle cx="20" cy="60" r="6" />
        
        <rect x="35" y="42" width="18" height="6" rx="3" transform="rotate(-45 35 45)" />
        <circle cx="30" cy="35" r="6" />
        
        <rect x="35" y="72" width="18" height="6" rx="3" transform="rotate(45 35 75)" />
        <circle cx="30" cy="85" r="6" />
        
        <circle cx="50" cy="60" r="8" />
      </g>
      
      {/* Outlined Text - Double stroke for clean outline effect */}
      <g fontFamily="Space Grotesk, sans-serif" fontSize="32" fontWeight="300" letterSpacing="1">
        {/* Outer stroke for BLOCKMIND */}
        <text x="120" y="48" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          BLOCKMIND
        </text>
        {/* Inner stroke for BLOCKMIND */}
        <text x="120" y="48" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          BLOCKMIND
        </text>
        
        {/* Outer stroke for LABS */}
        <text x="120" y="78" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          LABS
        </text>
        {/* Inner stroke for LABS */}
        <text x="120" y="78" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          LABS
        </text>
      </g>
      
      {/* Subtle accent line */}
      <rect x="120" y="82" width="280" height="1" fill="#3B82F6" opacity="0.4" />
    </svg>
  );
};

export default Logo;