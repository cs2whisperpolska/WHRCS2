/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --cs-orange: #FFA500;
    --cs-yellow: #FFD700;
    --cs-blue: #1E90FF;
    --cs-dark: #1A1A2E;
    --cs-darker: #0F0F1E;
    --cs-gray: #2A2A3E;
    --text-light: #FFFFFF;
    --text-gray: #B9BBBE;
    --success-color: #00FF00;
    --primary-gradient: linear-gradient(135deg, #FFA500, #FFD700);
}

body {
    font-family: 'Rajdhani', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: var(--cs-dark);
    color: var(--text-light);
    overflow-x: hidden;
    line-height: 1.6;
    text-transform: uppercase;
}

/* Background Animation */
.background-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

.gradient-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
        var(--cs-darker) 0%, 
        var(--cs-dark) 35%, 
        var(--cs-gray) 70%, 
        var(--cs-orange) 100%);
    opacity: 0.9;
}

.crosshair-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        radial-gradient(circle at 25% 25%, rgba(255, 165, 0, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.1) 0%, transparent 50%);
}

.particles {
    position: absolute;
    width: 100%;
    height: 100%;
}

.particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--cs-yellow);
    border-radius: 50%;
    animation: float 25s infinite linear;
    opacity: 0.8;
}

.particle:nth-child(1) { top: 15%; left: 15%; animation-delay: 0s; }
.particle:nth-child(2) { top: 65%; left: 25%; animation-delay: 3s; }
.particle:nth-child(3) { top: 35%; left: 85%; animation-delay: 6s; }
.particle:nth-child(4) { top: 85%; left: 55%; animation-delay: 9s; }
.particle:nth-child(5) { top: 5%; left: 45%; animation-delay: 12s; }
.particle:nth-child(6) { top: 75%; left: 35%; animation-delay: 15s; }
.particle:nth-child(7) { top: 25%; left: 95%; animation-delay: 18s; }
.particle:nth-child(8) { top: 95%; left: 5%; animation-delay: 21s; }
.particle:nth-child(9) { top: 45%; left: 35%; animation-delay: 24s; }
.particle:nth-child(10) { top: 15%; left: 75%; animation-delay: 27s; }

@keyframes float {
    0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-100vh) translateX(150px) rotate(360deg); opacity: 0; }
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(15, 15, 30, 0.98);
    backdrop-filter: blur(15px);
    padding: 1rem 0;
    z-index: 1000;
    transition: all 0.3s ease;
    border-bottom: 2px solid var(--cs-orange);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-light);
    font-family: 'Rajdhani', sans-serif;
}

.nav-logo i {
    font-size: 2.2rem;
    color: var(--cs-orange);
    animation: crosshair-spin 3s infinite linear;
}

@keyframes crosshair-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav-links a {
    color: var(--text-gray);
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: 600;
    font-family: 'Rajdhani', sans-serif;
    letter-spacing: 1px;
}

.nav-links a:hover {
    color: var(--cs-orange);
    transform: scale(1.1);
}

.join-btn {
    background: var(--primary-gradient);
    color: var(--cs-darker) !important;
    padding: 0.7rem 1.8rem;
    border-radius: 25px;
    transition: all 0.3s ease;
    font-weight: 700;
    box-shadow: 0 4px 15px rgba(255, 165, 0, 0.3);
}

.join-btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(255, 165, 0, 0.5);
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 100px;
    position: relative;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="%23FFA500" stroke-width="2" opacity="0.1"/><line x1="50" y1="10" x2="50" y2="90" stroke="%23FFA500" stroke-width="1" opacity="0.1"/><line x1="10" y1="50" x2="90" y2="50" stroke="%23FFA500" stroke-width="1" opacity="0.1"/></svg>') no-repeat center;
    background-size: 300px;
    opacity: 0.1;
    animation: crosshair-float 4s ease-in-out infinite;
}

@keyframes crosshair-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.hero-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    padding: 0 2rem;
    align-items: center;
}

.hero-content {
    animation: slideInLeft 1s ease;
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.cs-icon {
    font-size: 4rem;
    color: var(--cs-orange);
    margin-bottom: 1rem;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.hero-title {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    font-family: 'Rajdhani', sans-serif;
    letter-spacing: 2px;
}

.gradient-text {
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-description {
    font-size: 1.3rem;
    color: var(--text-gray);
    margin-bottom: 2rem;
    line-height: 1.6;
    font-family: 'Inter', sans-serif;
    text-transform: none;
}

.hero-stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    color: var(--cs-orange);
    font-family: 'Rajdhani', sans-serif;
}

.stat-label {
    font-size: 0.9rem;
    color: var(--text-gray);
    text-transform: none;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--primary-gradient);
    color: var(--cs-darker);
    padding: 1.2rem 2.5rem;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 700;
    transition: all 0.3s ease;
    animation: bounce 2s infinite;
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.1rem;
    letter-spacing: 1px;
    box-shadow: 0 8px 25px rgba(255, 165, 0, 0.3);
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.cta-button:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 35px rgba(255, 165, 0, 0.5);
}

.learn-more-btn {
    background: transparent;
    color: var(--text-light);
    border: 2px solid var(--cs-orange);
    padding: 1.2rem 2.5rem;
    border-radius: 30px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.1rem;
    letter-spacing: 1px;
}

.learn-more-btn:hover {
    background: var(--cs-orange);
    color: var(--cs-darker);
    transform: translateY(-3px);
}

/* Hero Image */
.hero-image {
    display: flex;
    justify-content: center;
    animation: slideInRight 1s ease;
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.floating-card {
    background: rgba(255, 165, 0, 0.1);
    backdrop-filter: blur(15px);
    border: 2px solid var(--cs-orange);
    border-radius: 20px;
    padding: 2.5rem;
    width: 320px;
    animation: floatCard 4s ease-in-out infinite;
    box-shadow: 0 10px 30px rgba(255, 165, 0, 0.2);
}

@keyframes floatCard {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-25px); }
}

.card-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.status-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--success-color);
    animation: blink 2s infinite;
    box-shadow: 0 0 10px var(--success-color);
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

.rank-display {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
}

.rank-icon {
    font-size: 2.5rem;
}

.rank-info strong {
    display: block;
    color: var(--cs-yellow);
    font-size: 1.1rem;
}

.rank-info small {
    color: var(--text-gray);
    text-transform: none;
}

.game-modes {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.mode-tag {
    background: rgba(255, 165, 0, 0.2);
    color: var(--cs-orange);
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: none;
}

/* Features Section */
.features {
    padding: 6rem 0;
    background: rgba(255, 165, 0, 0.02);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section-title {
    text-align: center;
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 3rem;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Rajdhani', sans-serif;
    letter-spacing: 2px;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: rgba(255, 165, 0, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 165, 0, 0.2);
    border-radius: 20px;
    padding: 2.5rem;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.feature-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 165, 0, 0.1), transparent);
    transform: rotate(45deg);
    transition: all 0.6s ease;
    opacity: 0;
}

.feature-card:hover::before {
    animation: shine 0.6s ease;
}

@keyframes shine {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); opacity: 0; }
}

.feature-card:hover {
    transform: translateY(-15px) scale(1.02);
    border-color: var(--cs-orange);
    box-shadow: 0 20px 40px rgba(255, 165, 0, 0.2);
}

.feature-icon {
    font-size: 3.5rem;
    color: var(--cs-orange);
    margin-bottom: 1.5rem;
    animation: icon-float 3s ease-in-out infinite;
}

@keyframes icon-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-light);
    font-family: 'Rajdhani', sans-serif;
    letter-spacing: 1px;
}

.feature-card p {
    color: var(--text-gray);
    line-height: 1.6;
    text-transform: none;
}

/* Ranks Section */
.ranks {
    padding: 6rem 0;
    background: rgba(255, 165, 0, 0.03);
}

.ranks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.rank-tier {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 2px solid;
    border-radius: 20px;
    padding: 2.5rem;
    text-align: center;
    transition: all 0.3s ease;
}

.rank-tier.silver {
    border-color: #C0C0C0;
    background: rgba(192, 192, 192, 0.1);
}

.rank-tier.gold {
    border-color: #FFD700;
    background: rgba(255, 215, 0, 0.1);
}

.rank-tier.elite {
    border-color: #FFA500;
    background: rgba(255, 165, 0, 0.1);
}

.rank-tier:hover {
    transform: translateY(-10px) scale(1.05);
}

.rank-badge {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.rank-tier h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-light);
    font-family: 'Rajdhani', sans-serif;
}

.rank-tier p {
    color: var(--text-gray);
    margin-bottom: 1rem;
    text-transform: none;
}

.rank-stats {
    background: rgba(255, 165, 0, 0.2);
    color: var(--cs-orange);
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-weight: 600;
    display: inline-block;
}

/* Stats Section */
.stats {
    padding: 6rem 0;
    background: linear-gradient(135deg, rgba(255, 165, 0, 0.1), rgba(255, 215, 0, 0.1));
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    text-align: center;
}

.stat-item {
    padding: 2rem;
}

.stat-number {
    font-size: 3.5rem;
    font-weight: 800;
    color: var(--cs-orange);
    margin-bottom: 0.5rem;
    font-family: 'Rajdhani', sans-serif;
}

.stat-label {
    color: var(--text-gray);
    font-size: 1.1rem;
    text-transform: none;
}

/* CTA Section */
.cta {
    padding: 6rem 0;
    text-align: center;
    background: linear-gradient(135deg, var(--cs-orange), var(--cs-yellow));
    position: relative;
    overflow: hidden;
}

.cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="%23ffffff" opacity="0.1"/><circle cx="80" cy="80" r="2" fill="%23ffffff" opacity="0.1"/><circle cx="50" cy="10" r="1" fill="%23ffffff" opacity="0.1"/></svg>');
    animation: background-move 20s linear infinite;
}

@keyframes background-move {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100px); }
}

.cta-title {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: var(--cs-darker);
    font-family: 'Rajdhani', sans-serif;
    position: relative;
    z-index: 2;
}

.cta-text {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: var(--cs-darker);
    position: relative;
    z-index: 2;
}

.cta-features {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
}

.cta-feature {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--cs-darker);
    font-weight: 600;
}

.cta-feature i {
    color: var(--cs-darker);
}

.cta-button-large {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    background: var(--cs-darker);
    color: var(--cs-orange);
    padding: 1.5rem 3rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 700;
    transition: all 0.3s ease;
    animation: pulse 2s infinite;
    position: relative;
    z-index: 2;
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 1px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.cta-button-large:hover {
    transform: scale(1.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.cta-button-large span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.cta-button-large strong {
    font-size: 1.3rem;
}

.cta-button-large small {
    font-size: 0.9rem;
    opacity: 0.8;
    font-weight: 400;
    text-transform: none;
}

/* Footer */
.footer {
    background: var(--cs-darker);
    padding: 4rem 0 1rem;
    border-top: 2px solid var(--cs-orange);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
    margin-bottom: 1rem;
    color: var(--text-light);
    font-family: 'Rajdhani', sans-serif;
}

.footer-section h3 i {
    color: var(--cs-orange);
    margin-right: 0.5rem;
}

.footer-section a {
    display: block;
    color: var(--text-gray);
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;
    text-transform: none;
}

.footer-section a:hover {
    color: var(--cs-orange);
    transform: translateX(5px);
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: rgba(255, 165, 0, 0.2);
    border-radius: 50%;
    transition: all 0.3s ease;
    font-size: 1.2rem;
}

.social-links a:hover {
    background: var(--cs-orange);
    transform: translateY(-5px) scale(1.1);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 165, 0, 0.2);
    color: var(--text-gray);
    font-size: 0.9rem;
    text-transform: none;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-stats {
        justify-content: center;
    }
    
    .nav-links {
        display: none;
    }
    
    .hero-buttons {
        justify-content: center;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
    }
    
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .cta-features {
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .cta-button-large {
        padding: 1.2rem 2rem;
    }
}
