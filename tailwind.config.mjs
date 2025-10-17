/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				tertiary: 'var(--tertiary)',
				fourth: 'var(--fourth)',
				title: 'var(--title)',
				text: 'var(--text)',
				btnColor: 'var(--btn-color)',
				btnHover: 'var(--btn-hover-color)',
				btnBorder: 'var(--btn-border-color)',
			},
			keyframes: {
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-100%)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
				},
				'slide-out-right': {
					'0%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
					'100%': {
						opacity: '0',
						transform: 'translateX(100%)',
					},
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(100%)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
				},
				'fade-in-out': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9999)',
					},
					'5%': {
						opacity: '1',
					},
					'95%': {
						opacity: '1',
					},
					'100%': {
						opacity: '0',
						transform: 'scale(1.05)',
					},
				},
				'moveWaveLeftRight': {
					'0%': {
						transform: 'translateX(0)',
					},
					'100%': {
						transform: 'translateX(100px)',
					},
				},
				'moveWaveRightLeft': {
					'0%': {
						transform: 'translateX(100px)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
				'slideUp': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'60%': { transform: 'translateY(-10%)', opacity: '0.5' }, // Un pequeño "rebote"
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'floating': {
					'0%, 100%': { transform: 'translateY(0)' }, // Inicio y fin en la posición original
					'50%': { transform: 'translateY(-10px)' }, // Mitad del ciclo sube 10px
				},
				'pulse-grow': {
					'0%': { width: '40px', height: '40px', opacity: '0.8' },
					'50%': { width: '80px', height: '80px', opacity: '1' },
					'100%': { width: '40px', height: '40px', opacity: '0.8' },
				},
			},
			animation: {
				'slide-in-left': 'slide-in-left 1s ease',
				'slide-in-right': 'slide-in-right 1s ease',
				'slide-out-right': 'slide-out-right 1s ease',
				'fade-in-out': 'fade-in-out 15s infinite alternate ease-in-out',
				'moveWaveLeftRight': 'moveWaveLeftRight 6s ease-in-out alternate infinite',
				'moveWaveRightLeft': 'moveWaveRightLeft 6s ease-in-out alternate infinite',
				'slideUp': 'slideUp 1.5s ease-out', // Duración más larga y suavidad
				'floating': 'floating 3s ease-in-out infinite',
				'pulse-grow': 'pulse-grow 1.5s infinite ease-in-out',
			},
			backgroundImage: {
				'logobg': 'linear-gradient(65deg, rgba(255,255,255,0) 35%, rgba(252,252,252,1) 35%)',


			}
		},
	},
	plugins: [],
}
