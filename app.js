/* ══════════════════════════════════════════════════
   AutoLux — Premium Car Rental JavaScript
   ══════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const CARS = [
  // ── LUXURY ──
  {
    id: 1, name: 'Continental GT', brand: 'Bentley', category: 'luxury',
    emoji: '🏎', price: 350, fuel: 'gasoline', transmission: 'automatic',
    seats: 4, rating: 4.9, reviews: 128,
    specs: { engine: '6.0L W12', power: '626 HP', topSpeed: '207 mph', acceleration: '3.6s 0-60' },
    desc: 'The Bentley Continental GT is the pinnacle of grand touring — handcrafted in Crewe with the finest materials and breathtaking performance.',
    available: true, year: 2024, mileage: 'Unlimited', tag: 'Most Popular'
  },
  {
    id: 2, name: 'Phantom VIII', brand: 'Rolls-Royce', category: 'luxury',
    emoji: '🚘', price: 480, fuel: 'gasoline', transmission: 'automatic',
    seats: 5, rating: 5.0, reviews: 94,
    specs: { engine: '6.75L V12', power: '563 HP', topSpeed: '155 mph', acceleration: '5.1s 0-60' },
    desc: 'The Rolls-Royce Phantom is more than a car — it is an event. Experience effortless luxury in the world\'s greatest motor car.',
    available: true, year: 2024, mileage: 'Unlimited', tag: 'Ultra Luxury'
  },
  {
    id: 3, name: 'S-Class S580', brand: 'Mercedes-Benz', category: 'luxury',
    emoji: '🚗', price: 220, fuel: 'hybrid', transmission: 'automatic',
    seats: 5, rating: 4.8, reviews: 342,
    specs: { engine: '4.0L V8', power: '496 HP', topSpeed: '155 mph', acceleration: '4.4s 0-60' },
    desc: 'The Mercedes S-Class defines automotive luxury with its massaging seats, air suspension, and cutting-edge MBUX Hyperscreen.',
    available: true, year: 2024, mileage: 'Unlimited', tag: 'Best Seller'
  },
  {
    id: 4, name: '7 Series 760i', brand: 'BMW', category: 'luxury',
    emoji: '🚙', price: 195, fuel: 'hybrid', transmission: 'automatic',
    seats: 5, rating: 4.7, reviews: 218,
    specs: { engine: '4.4L V8', power: '536 HP', topSpeed: '155 mph', acceleration: '3.5s 0-60' },
    desc: 'BMW\'s flagship luxury sedan blends Bavarian engineering with opulent comfort, featuring Executive Lounge seating and Theatre Screen.',
    available: true, year: 2024, mileage: 'Unlimited', tag: null
  },
  {
    id: 5, name: 'Panamera Turbo S', brand: 'Porsche', category: 'luxury',
    emoji: '🏎', price: 275, fuel: 'hybrid', transmission: 'automatic',
    seats: 4, rating: 4.9, reviews: 176,
    specs: { engine: '4.0L V8', power: '690 HP', topSpeed: '196 mph', acceleration: '3.1s 0-60' },
    desc: 'The Porsche Panamera Turbo S E-Hybrid fuses supercar performance with executive comfort and plug-in hybrid efficiency.',
    available: true, year: 2024, mileage: 'Unlimited', tag: 'Performance'
  },
  {
    id: 6, name: 'A8 L 60 TFSI', brand: 'Audi', category: 'luxury',
    emoji: '🚗', price: 185, fuel: 'gasoline', transmission: 'automatic',
    seats: 5, rating: 4.7, reviews: 195,
    specs: { engine: '4.0L V8', power: '563 HP', topSpeed: '155 mph', acceleration: '3.6s 0-60' },
    desc: 'Audi\'s flagship A8 L features predictive active suspension, rear executive seats, and a stunning Virtual Cockpit Plus.',
    available: true, year: 2024, mileage: 'Unlimited', tag: null
  },

  // ── ECONOMY ──
  {
    id: 7, name: 'Corolla Hybrid', brand: 'Toyota', category: 'economy',
    emoji: '🚗', price: 55, fuel: 'hybrid', transmission: 'automatic',
    seats: 5, rating: 4.6, reviews: 891,
    specs: { engine: '1.8L Hybrid', power: '121 HP', topSpeed: '112 mph', acceleration: '9.5s 0-60' },
    desc: 'The Toyota Corolla Hybrid combines legendary reliability with impressive fuel economy — perfect for city cruising and long highway drives.',
    available: true, year: 2024, mileage: 'Unlimited', tag: 'Best Value'
  },
  {
    id: 8, name: 'Civic Touring', brand: 'Honda', category: 'economy',
    emoji: '🚙', price: 62, fuel: 'gasoline', transmission: 'automatic',
    seats: 5, rating: 4.5, reviews: 743,
    specs: { engine: '1.5L Turbo', power: '158 HP', topSpeed: '137 mph', acceleration: '7.2s 0-60' },
    desc: 'Honda Civic Touring delivers sporty handling, a premium interior, and a suite of safety tech for everyday excellence.',
    available: true, year: 2024, mileage: 'Unlimited', tag: null
  },
  {
    id: 9, name: 'Jetta GLI', brand: 'Volkswagen', category: 'economy',
    emoji: '🚗', price: 68, fuel: 'gasoline', transmission: 'manual',
    seats: 5, rating: 4.4, reviews: 412,
    specs: { engine: '2.0L Turbo', power: '228 HP', topSpeed: '130 mph', acceleration: '6.4s 0-60' },
    desc: 'The VW Jetta GLI brings German performance and refinement to an accessible price point — a driver\'s car with substance.',
    available: true, year: 2024, mileage: 'Unlimited', tag: null
  },
  {
    id: 10, name: 'Elantra N', brand: 'Hyundai', category: 'economy',
    emoji: '🚙', price: 58, fuel: 'gasoline', transmission: 'manual',
    seats: 5, rating: 4.5, reviews: 336,
    specs: { engine: '2.0L Turbo', power: '276 HP', topSpeed: '155 mph', acceleration: '5.3s 0-60' },
    desc: 'Hyundai\'s pocket rocket — the Elantra N packs genuine hot-hatch performance into an economy package.',
    available: true, year: 2024, mileage: 'Unlimited', tag: 'Hot Deal'
  },
  {
    id: 11, name: 'Mazda3 AWD', brand: 'Mazda', category: 'economy',
    emoji: '🚗', price: 72, fuel: 'gasoline', transmission: 'automatic',
    seats: 5, rating: 4.6, reviews: 508,
    specs: { engine: '2.5L Turbo', power: '250 HP', topSpeed: '140 mph', acceleration: '5.7s 0-60' },
    desc: 'The Mazda3 with AWD is the premium compact — refined styling, upscale interior, and the most engaging driving dynamics in its class.',
    available: true, year: 2024, mileage: 'Unlimited', tag: null
  },

  // ── SUV ──
  {
    id: 12, name: 'Escalade ESV', brand: 'Cadillac', category: 'suv',
    emoji: '🚐', price: 290, fuel: 'gasoline', transmission: 'automatic',
    seats: 7, rating: 4.8, reviews: 267,
    specs: { engine: '6.2L V8', power: '420 HP', topSpeed: '155 mph', acceleration: '5.9s 0-60' },
    desc: 'The Cadillac Escalade ESV sets the benchmark for full-size luxury SUVs with its massive OLED curved screen and opulent space.',
    available: true, year: 2024, mileage: 'Unlimited', tag: null
  },
  {
    id: 13, name: 'Range Rover Sport', brand: 'Land Rover', category: 'suv',
    emoji: '🚙', price: 240, fuel: 'hybrid', transmission: 'automatic',
    seats: 7, rating: 4.7, reviews: 321,
    specs: { engine: '3.0L I6', power: '395 HP', topSpeed: '155 mph', acceleration: '5.0s 0-60' },
    desc: 'The Range Rover Sport blends legendary all-terrain capability with refined luxury — equally at home on a mountain trail or city street.',
    available: true, year: 2024, mileage: 'Unlimited', tag: 'Premium SUV'
  },
  {
    id: 14, name: 'Model X Plaid', brand: 'Tesla', category: 'suv',
    emoji: '🚗', price: 210, fuel: 'electric', transmission: 'automatic',
    seats: 7, rating: 4.9, reviews: 489,
    specs: { engine: 'Tri-Motor EV', power: '1020 HP', topSpeed: '163 mph', acceleration: '2.5s 0-60' },
    desc: 'Tesla Model X Plaid redefines electric luxury with Falcon Wing doors, 396mi range, and tri-motor acceleration that defies physics.',
    available: true, year: 2024, mileage: 'Unlimited', tag: 'Electric'
  },
  {
    id: 15, name: 'BMW X7 M60i', brand: 'BMW', category: 'suv',
    emoji: '🚐', price: 225, fuel: 'gasoline', transmission: 'automatic',
    seats: 7, rating: 4.7, reviews: 198,
    specs: { engine: '4.4L V8', power: '523 HP', topSpeed: '155 mph', acceleration: '4.5s 0-60' },
    desc: 'The BMW X7 M60i is a flagship SUV that delivers thrilling V8 performance without sacrificing seven-seat luxury.',
    available: true, year: 2024, mileage: 'Unlimited', tag: null
  },

  // ── SPORTS ──
  {
    id: 16, name: '911 Carrera 4S', brand: 'Porsche', category: 'sports',
    emoji: '🏎', price: 310, fuel: 'gasoline', transmission: 'automatic',
    seats: 2, rating: 4.9, reviews: 312,
    specs: { engine: '3.0L Boxer', power: '443 HP', topSpeed: '190 mph', acceleration: '3.8s 0-60' },
    desc: 'The Porsche 911 is the benchmark of sports car perfection — decades of evolution crafted into a symphony of speed and precision.',
    available: true, year: 2024, mileage: 'Unlimited', tag: 'Iconic'
  },
  {
    id: 17, name: 'F8 Tributo', brand: 'Ferrari', category: 'sports',
    emoji: '🏎', price: 490, fuel: 'gasoline', transmission: 'automatic',
    seats: 2, rating: 5.0, reviews: 87,
    specs: { engine: '3.9L V8 Twin-Turbo', power: '710 HP', topSpeed: '211 mph', acceleration: '2.9s 0-60' },
    desc: 'The Ferrari F8 Tributo honors the most powerful V8 in Ferrari history. An experience unlike any other on four wheels.',
    available: true, year: 2024, mileage: 'Unlimited', tag: 'Supercar'
  },
  {
    id: 18, name: 'Huracán EVO', brand: 'Lamborghini', category: 'sports',
    emoji: '🏎', price: 470, fuel: 'gasoline', transmission: 'automatic',
    seats: 2, rating: 5.0, reviews: 76,
    specs: { engine: '5.2L V10', power: '631 HP', topSpeed: '202 mph', acceleration: '2.9s 0-60' },
    desc: 'Raw Italian supercar passion — the Lamborghini Huracán EVO with its naturally aspirated V10 is the purest expression of speed.',
    available: true, year: 2024, mileage: 'Unlimited', tag: 'Supercar'
  },

  // ── ELECTRIC ──
  {
    id: 19, name: 'Model S Plaid', brand: 'Tesla', category: 'electric',
    emoji: '🚗', price: 175, fuel: 'electric', transmission: 'automatic',
    seats: 5, rating: 4.9, reviews: 634,
    specs: { engine: 'Tri-Motor EV', power: '1020 HP', topSpeed: '200 mph', acceleration: '1.99s 0-60' },
    desc: 'The world\'s fastest production car under $200k. Model S Plaid delivers rocket-ship acceleration with 405 miles of EPA-rated range.',
    available: true, year: 2024, mileage: 'Unlimited', tag: 'Fastest EV'
  },
  {
    id: 20, name: 'EQS 580', brand: 'Mercedes-Benz', category: 'electric',
    emoji: '🚘', price: 155, fuel: 'electric', transmission: 'automatic',
    seats: 5, rating: 4.7, reviews: 278,
    specs: { engine: 'Dual-Motor EV', power: '516 HP', topSpeed: '130 mph', acceleration: '4.3s 0-60' },
    desc: 'Mercedes EQS 580 features a 56-inch Hyperscreen, 350mi range, and the quietest, most refined EV interior ever created.',
    available: true, year: 2024, mileage: 'Unlimited', tag: 'Premium EV'
  },
  {
    id: 21, name: 'Taycan Turbo S', brand: 'Porsche', category: 'electric',
    emoji: '🏎', price: 265, fuel: 'electric', transmission: 'automatic',
    seats: 4, rating: 4.9, reviews: 191,
    specs: { engine: 'Dual-Motor EV', power: '750 HP', topSpeed: '161 mph', acceleration: '2.6s 0-60' },
    desc: 'The Porsche Taycan Turbo S is proof that electric and exciting are not mutually exclusive — a masterpiece of engineering.',
    available: true, year: 2024, mileage: 'Unlimited', tag: 'Performance EV'
  }
];

const TESTIMONIALS = [
  {
    text: 'I rented the Bentley Continental for our anniversary trip. The experience was absolutely flawless — from the booking process to the delivery. AutoLux sets a new standard for car rentals.',
    author: 'James Anderson', role: 'CEO, TechVision Inc.', initials: 'JA', rating: 5
  },
  {
    text: 'As a frequent traveler, I\'ve used many rental services. AutoLux is in a league of its own. The Ferrari F8 was delivered to my hotel immaculate, and the concierge service was outstanding.',
    author: 'Sofia Laurent', role: 'Fashion Director, Vogue', initials: 'SL', rating: 5
  },
  {
    text: 'Needed a reliable car for a cross-country business trip. The Tesla Model S Plaid was perfect — zero-emission, incredibly fast, and the AutoLux team handled everything seamlessly.',
    author: 'Marcus Chen', role: 'Venture Capitalist', initials: 'MC', rating: 5
  },
  {
    text: 'The Rolls-Royce Phantom for my wedding day exceeded every expectation. My guests were speechless, and AutoLux\'s team made the entire experience stress-free and magical.',
    author: 'Victoria Harrington', role: 'Event Planner', initials: 'VH', rating: 5
  },
  {
    text: 'Exceptional service and pristine vehicles. The Range Rover Sport handled our mountain retreat trip beautifully. Already planning my next booking with AutoLux.',
    author: 'Daniel Rossetti', role: 'Architect', initials: 'DR', rating: 5
  }
];

const FAQS = [
  {
    q: 'What documents do I need to rent a car?',
    a: 'You\'ll need a valid driver\'s license (held for at least 2 years), a credit card in your name, and a valid passport or government-issued ID. International customers may also need an International Driving Permit.'
  },
  {
    q: 'Is insurance included in the rental price?',
    a: 'All rentals include basic insurance (Collision Damage Waiver and Third-Party Liability). For comprehensive coverage including theft protection and personal accident insurance, we recommend adding Premium Insurance as an add-on.'
  },
  {
    q: 'Can I pick up the car at a different location than I drop it off?',
    a: 'Yes! We offer one-way rentals at all our locations. A location fee may apply depending on the distance between pick-up and drop-off locations. You can select different locations in the booking form.'
  },
  {
    q: 'What is the minimum age requirement?',
    a: 'The minimum age is 21 years. Drivers aged 21–24 may be subject to a young driver surcharge of $25/day. For exotic and luxury vehicles, the minimum age is 25.'
  },
  {
    q: 'What is your cancellation policy?',
    a: 'You can cancel for free up to 48 hours before your scheduled pickup. Cancellations within 48 hours are subject to a one-day rental fee. No-shows are charged the full rental amount.'
  },
  {
    q: 'Are there mileage limits?',
    a: 'All our standard rentals include unlimited mileage. We believe in giving you the freedom to drive as far as your adventure takes you without worrying about mileage caps.'
  },
  {
    q: 'Do you offer delivery and collection services?',
    a: 'Absolutely! We offer complimentary delivery and collection within a 20-mile radius of our airport locations. Extended delivery to hotels, private residences, or yacht marinas is available for a small fee.'
  },
  {
    q: 'What fuel should I use?',
    a: 'Each vehicle comes with a full tank and should be returned full. The fuel type (gasoline, diesel, electric, or hybrid) is specified on your rental agreement and in the vehicle details.'
  }
];

/* ─────────────────────────────────────────
   STATE
───────────────────────────────────────── */
const state = {
  theme: localStorage.getItem('autolux-theme') || 'dark',
  favorites: JSON.parse(localStorage.getItem('autolux-favorites') || '[]'),
  compare: JSON.parse(localStorage.getItem('autolux-compare') || '[]'),
  history: JSON.parse(localStorage.getItem('autolux-history') || '[]'),
  filters: { category: 'all', fuel: '', trans: '', seats: '', price: 500, search: '' },
  sort: 'default',
  sliderIndex: 0,
  sliderTotal: TESTIMONIALS.length,
  sliderInterval: null
};

/* ─────────────────────────────────────────
   LOADER
───────────────────────────────────────── */
function initLoader() {
  const bar = document.getElementById('loaderBar');
  let w = 0;
  const iv = setInterval(() => {
    w += Math.random() * 18 + 4;
    if (w >= 100) { w = 100; clearInterval(iv); }
    bar.style.width = w + '%';
  }, 80);

  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    initCounters();
  }, 1600);
}

/* ─────────────────────────────────────────
   THEME
───────────────────────────────────────── */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const icon = document.querySelector('.theme-icon');
  if (icon) icon.textContent = state.theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('autolux-theme', state.theme);
  applyTheme();
  showToast(state.theme === 'dark' ? '🌙 Dark mode enabled' : '☀️ Light mode enabled', 'info');
}

/* ─────────────────────────────────────────
   TOAST
───────────────────────────────────────── */
function showToast(message, type = 'success', duration = 3500) {
  const container = document.getElementById('toastContainer');
  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || '✅'}</span>
    <span class="toast-msg">${message}</span>
    <button class="toast-close" onclick="removeToast(this.parentElement)">✕</button>
  `;
  container.appendChild(toast);
  setTimeout(() => removeToast(toast), duration);
}

function removeToast(el) {
  if (!el || !el.parentElement) return;
  el.classList.add('removing');
  setTimeout(() => el.remove(), 300);
}

/* ─────────────────────────────────────────
   HEADER SCROLL
───────────────────────────────────────── */
function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
    document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}

/* ─────────────────────────────────────────
   HAMBURGER
───────────────────────────────────────── */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    links.classList.toggle('open');
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => {
      btn.classList.remove('active');
      links.classList.remove('open');
    });
  });
}

/* ─────────────────────────────────────────
   ACTIVE NAV LINK
───────────────────────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[data-section="${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(s => obs.observe(s));
}

/* ─────────────────────────────────────────
   PARTICLES
───────────────────────────────────────── */
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  const colors = ['#c9a227', '#e8c65a', '#a07d10', '#c0392b', '#3498db'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 5 + 2;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random() * 100}%;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration:${Math.random() * 12 + 8}s;
      animation-delay:${Math.random() * -15}s;
      opacity:${Math.random() * 0.4 + 0.1};
    `;
    container.appendChild(p);
  }
}

/* ─────────────────────────────────────────
   ANIMATED COUNTERS
───────────────────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (!counters.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target);
      const duration = 1800;
      const step = target / (duration / 16);
      let current = 0;
      const iv = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(iv); }
        el.textContent = Math.floor(current).toLocaleString();
      }, 16);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
}

/* ─────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('.animate-slide-up, .animate-fade-up');
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.style.animationPlayState = 'running', i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => {
    el.style.animationPlayState = 'paused';
    obs.observe(el);
  });
}

/* ─────────────────────────────────────────
   CAR CARD RENDER
───────────────────────────────────────── */
function createCarCard(car) {
  const isFav = state.favorites.includes(car.id);
  const inCompare = state.compare.includes(car.id);
  const stars = '★'.repeat(Math.floor(car.rating)) + (car.rating % 1 >= 0.5 ? '⭐' : '');

  const card = document.createElement('div');
  card.className = 'car-card scroll-reveal';
  card.setAttribute('data-car-id', car.id);
  card.innerHTML = `
    <div class="car-card-image">
      <span class="car-emoji">${car.emoji}</span>
      <span class="car-category-tag tag-${car.category}">${car.category}</span>
      ${car.tag ? `<span style="position:absolute;bottom:10px;left:12px;background:rgba(201,162,39,0.15);border:1px solid rgba(201,162,39,0.3);color:var(--gold);font-size:.68rem;font-weight:700;padding:3px 8px;border-radius:5px;letter-spacing:.04em">${car.tag}</span>` : ''}
      <div class="car-card-actions">
        <button class="card-action-btn fav-btn ${isFav ? 'active' : ''}" data-id="${car.id}" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">${isFav ? '❤️' : '🤍'}</button>
        <button class="card-action-btn compare-btn ${inCompare ? 'active' : ''}" data-id="${car.id}" title="${inCompare ? 'Remove from compare' : 'Add to compare'}">⚖️</button>
        <button class="card-action-btn detail-btn" data-id="${car.id}" title="View Details">👁</button>
      </div>
    </div>
    <div class="car-card-body">
      <div class="car-card-name">${car.name}</div>
      <div class="car-card-brand">${car.brand} · ${car.year}</div>
      <div class="car-card-specs">
        <span class="car-spec"><span class="car-spec-icon">⛽</span>${cap(car.fuel)}</span>
        <span class="car-spec"><span class="car-spec-icon">⚙️</span>${cap(car.transmission)}</span>
        <span class="car-spec"><span class="car-spec-icon">👤</span>${car.seats} seats</span>
        <span class="car-spec"><span class="car-spec-icon">🏎</span>${car.specs.power}</span>
      </div>
      <div class="car-card-rating">
        <span class="stars">${'★'.repeat(Math.floor(car.rating))}</span>
        <span class="rating-num">${car.rating} (${car.reviews} reviews)</span>
      </div>
      <div class="car-card-footer">
        <div class="car-price">
          <span class="price-amount">$${car.price}</span>
          <span class="price-period">/day</span>
        </div>
        <button class="book-btn" data-id="${car.id}">Book Now</button>
      </div>
    </div>
  `;

  // Events
  card.querySelector('.fav-btn').addEventListener('click', e => { e.stopPropagation(); toggleFavorite(car.id); });
  card.querySelector('.compare-btn').addEventListener('click', e => { e.stopPropagation(); toggleCompare(car.id); });
  card.querySelector('.detail-btn').addEventListener('click', e => { e.stopPropagation(); openCarDetail(car.id); });
  card.querySelector('.book-btn').addEventListener('click', e => { e.stopPropagation(); bookCar(car.id); });
  card.addEventListener('click', () => openCarDetail(car.id));

  return card;
}

function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

/* ─────────────────────────────────────────
   RENDER GRIDS
───────────────────────────────────────── */
function renderAllCars() {
  let cars = [...CARS];

  // Apply filters
  if (state.filters.category !== 'all') cars = cars.filter(c => c.category === state.filters.category);
  if (state.filters.fuel) cars = cars.filter(c => c.fuel === state.filters.fuel);
  if (state.filters.trans) cars = cars.filter(c => c.transmission === state.filters.trans);
  if (state.filters.seats) cars = cars.filter(c => c.seats === parseInt(state.filters.seats));
  if (state.filters.price < 500) cars = cars.filter(c => c.price <= state.filters.price);
  if (state.filters.search) {
    const q = state.filters.search.toLowerCase();
    cars = cars.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.brand.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
    );
  }

  // Sort
  switch (state.sort) {
    case 'price-asc': cars.sort((a, b) => a.price - b.price); break;
    case 'price-desc': cars.sort((a, b) => b.price - a.price); break;
    case 'name-asc': cars.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'rating-desc': cars.sort((a, b) => b.rating - a.rating); break;
  }

  const grid = document.getElementById('carGrid');
  const noResults = document.getElementById('noResults');
  const countEl = document.getElementById('resultsCount');
  grid.innerHTML = '';

  if (cars.length === 0) {
    noResults.classList.remove('hidden');
    countEl.textContent = 'No cars found';
  } else {
    noResults.classList.add('hidden');
    countEl.textContent = `Showing ${cars.length} car${cars.length !== 1 ? 's' : ''}`;
    cars.forEach(car => {
      grid.appendChild(createCarCard(car));
    });
    initRevealObserver();
  }
}

function renderLuxuryCars() {
  const grid = document.getElementById('luxuryGrid');
  grid.innerHTML = '';
  CARS.filter(c => c.category === 'luxury').forEach(car => {
    grid.appendChild(createCarCard(car));
  });
  initRevealObserver();
}

function renderEconomyCars() {
  const grid = document.getElementById('economyGrid');
  grid.innerHTML = '';
  CARS.filter(c => c.category === 'economy').forEach(car => {
    grid.appendChild(createCarCard(car));
  });
  initRevealObserver();
}

function initRevealObserver() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => obs.observe(el));
}

/* ─────────────────────────────────────────
   FILTERS
───────────────────────────────────────── */
function initFilters() {
  // Category pills
  document.getElementById('categoryFilter').addEventListener('click', e => {
    if (!e.target.classList.contains('pill')) return;
    document.querySelectorAll('#categoryFilter .pill').forEach(p => p.classList.remove('active'));
    e.target.classList.add('active');
    state.filters.category = e.target.dataset.filter;
    renderAllCars();
  });

  document.getElementById('fuelFilter').addEventListener('change', e => {
    state.filters.fuel = e.target.value;
    renderAllCars();
  });
  document.getElementById('transFilter').addEventListener('change', e => {
    state.filters.trans = e.target.value;
    renderAllCars();
  });
  document.getElementById('seatsFilter').addEventListener('change', e => {
    state.filters.seats = e.target.value;
    renderAllCars();
  });
  document.getElementById('priceFilter').addEventListener('input', e => {
    state.filters.price = parseInt(e.target.value);
    document.getElementById('priceLabel').textContent = `$${state.filters.price}`;
    renderAllCars();
  });
  document.getElementById('sortSelect').addEventListener('change', e => {
    state.sort = e.target.value;
    renderAllCars();
  });

  // Search
  let searchTimer;
  document.getElementById('searchInput').addEventListener('input', e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.filters.search = e.target.value.trim();
      renderAllCars();
    }, 300);
  });

  // Clear
  document.getElementById('clearFilters').addEventListener('click', clearFilters);
  document.getElementById('resetFilters')?.addEventListener('click', clearFilters);
  document.getElementById('noResults').querySelector('.link-btn')?.addEventListener('click', clearFilters);
}

function clearFilters() {
  state.filters = { category: 'all', fuel: '', trans: '', seats: '', price: 500, search: '' };
  document.querySelectorAll('#categoryFilter .pill').forEach(p => p.classList.remove('active'));
  document.querySelector('#categoryFilter .pill[data-filter="all"]').classList.add('active');
  document.getElementById('fuelFilter').value = '';
  document.getElementById('transFilter').value = '';
  document.getElementById('seatsFilter').value = '';
  document.getElementById('priceFilter').value = 500;
  document.getElementById('priceLabel').textContent = '$500';
  document.getElementById('searchInput').value = '';
  document.getElementById('sortSelect').value = 'default';
  state.sort = 'default';
  renderAllCars();
  showToast('Filters cleared', 'info');
}

/* ─────────────────────────────────────────
   SEARCH BTN
───────────────────────────────────────── */
function initQuickSearch() {
  document.getElementById('searchBtn').addEventListener('click', () => {
    const q = document.getElementById('searchInput').value.trim();
    if (!q) {
      document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
      return;
    }
    state.filters.search = q;
    renderAllCars();
    document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
    showToast(`Searching for "${q}"`, 'info');
  });
}

/* ─────────────────────────────────────────
   FAVORITES
───────────────────────────────────────── */
function toggleFavorite(id) {
  const idx = state.favorites.indexOf(id);
  if (idx === -1) {
    if (state.favorites.length >= 10) { showToast('Favorites list is full (max 10)', 'warning'); return; }
    state.favorites.push(id);
    showToast('Added to favorites ❤️', 'success');
  } else {
    state.favorites.splice(idx, 1);
    showToast('Removed from favorites', 'info');
  }
  localStorage.setItem('autolux-favorites', JSON.stringify(state.favorites));
  updateFavBadge();
  updateAllCardButtons();
}

function updateFavBadge() {
  document.getElementById('favBadge').textContent = state.favorites.length;
}

function renderFavorites() {
  const body = document.getElementById('favModalBody');
  if (!state.favorites.length) {
    body.innerHTML = `<div class="fav-empty"><span>💔</span><p>No favorites yet. Browse our fleet and heart your favorites!</p></div>`;
    return;
  }
  const list = document.createElement('div');
  list.className = 'fav-list';
  state.favorites.forEach(id => {
    const car = CARS.find(c => c.id === id);
    if (!car) return;
    const item = document.createElement('div');
    item.className = 'fav-item';
    item.innerHTML = `
      <span class="fav-car-emoji">${car.emoji}</span>
      <div class="fav-info">
        <div class="fav-car-name">${car.brand} ${car.name}</div>
        <div class="fav-details">
          <span>${cap(car.category)}</span>
          <span>$${car.price}/day</span>
          <span>★ ${car.rating}</span>
        </div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="bookCar(${car.id});closeModal('favModal')">Book</button>
    `;
    list.appendChild(item);
  });
  body.innerHTML = '';
  body.appendChild(list);
}

/* ─────────────────────────────────────────
   COMPARE
───────────────────────────────────────── */
function toggleCompare(id) {
  const idx = state.compare.indexOf(id);
  if (idx === -1) {
    if (state.compare.length >= 3) { showToast('Can compare up to 3 cars', 'warning'); return; }
    state.compare.push(id);
    showToast(`Added to compare ⚖️`, 'success');
  } else {
    state.compare.splice(idx, 1);
    showToast('Removed from compare', 'info');
  }
  localStorage.setItem('autolux-compare', JSON.stringify(state.compare));
  updateCompareBadge();
  updateAllCardButtons();
}

function updateCompareBadge() {
  document.getElementById('compareBadge').textContent = state.compare.length;
}

function renderCompare() {
  const body = document.getElementById('compareModalBody');
  if (!state.compare.length) {
    body.innerHTML = `<div class="compare-empty"><span>⚖️</span><p>No cars to compare yet. Add up to 3 cars from the fleet.</p></div>`;
    return;
  }
  const cars = state.compare.map(id => CARS.find(c => c.id === id)).filter(Boolean);

  const specs = [
    { label: 'Category', key: 'category', fmt: cap },
    { label: 'Price/day', key: 'price', fmt: v => `$${v}` },
    { label: 'Engine', key: c => c.specs.engine },
    { label: 'Power', key: c => c.specs.power },
    { label: 'Top Speed', key: c => c.specs.topSpeed },
    { label: '0–60 mph', key: c => c.specs.acceleration },
    { label: 'Fuel Type', key: 'fuel', fmt: cap },
    { label: 'Transmission', key: 'transmission', fmt: cap },
    { label: 'Seats', key: 'seats', fmt: v => `${v}` },
    { label: 'Rating', key: 'rating', fmt: v => `★ ${v}` },
    { label: 'Year', key: 'year', fmt: String }
  ];

  let html = `<div class="compare-grid">`;
  cars.forEach(car => {
    html += `
      <div class="compare-car-col">
        <div class="compare-car-header">
          <span class="compare-emoji">${car.emoji}</span>
          <div class="compare-car-name">${car.name}</div>
          <div class="compare-car-brand">${car.brand}</div>
        </div>
        <div class="compare-attrs">
    `;
    specs.forEach(sp => {
      const val = typeof sp.key === 'function' ? sp.key(car) : (sp.fmt ? sp.fmt(car[sp.key]) : car[sp.key]);
      html += `<div class="compare-attr"><span>${sp.label}</span><span>${val}</span></div>`;
    });
    html += `</div></div>`;
  });
  html += `</div>`;
  body.innerHTML = html;
}

/* ─────────────────────────────────────────
   UPDATE ALL CARD BUTTONS
───────────────────────────────────────── */
function updateAllCardButtons() {
  document.querySelectorAll('.fav-btn').forEach(btn => {
    const id = parseInt(btn.dataset.id);
    const isFav = state.favorites.includes(id);
    btn.classList.toggle('active', isFav);
    btn.textContent = isFav ? '❤️' : '🤍';
  });
  document.querySelectorAll('.compare-btn').forEach(btn => {
    const id = parseInt(btn.dataset.id);
    btn.classList.toggle('active', state.compare.includes(id));
  });
}

/* ─────────────────────────────────────────
   BOOKING HISTORY
───────────────────────────────────────── */
function addToHistory(booking) {
  state.history.unshift({ ...booking, id: Date.now(), status: 'confirmed', createdAt: new Date().toISOString() });
  if (state.history.length > 50) state.history.pop();
  localStorage.setItem('autolux-history', JSON.stringify(state.history));
}

function renderHistory() {
  const body = document.getElementById('historyModalBody');
  if (!state.history.length) {
    body.innerHTML = `<div class="history-empty"><span>📋</span><p>No bookings yet. Your rental history will appear here.</p></div>`;
    return;
  }
  const list = document.createElement('div');
  list.className = 'history-list';
  state.history.forEach(b => {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
      <span class="history-car-emoji">${b.emoji || '🚗'}</span>
      <div class="history-info">
        <div class="history-car-name">${b.carName}</div>
        <div class="history-details">
          <span>📅 ${b.pickup} → ${b.ret}</span>
          <span>👤 ${b.name}</span>
          <span>📍 ${b.location}</span>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
        <span class="history-total">$${b.total}</span>
        <span class="history-status status-${b.status}">${cap(b.status)}</span>
      </div>
    `;
    list.appendChild(item);
  });
  body.innerHTML = '';
  body.appendChild(list);
}

/* ─────────────────────────────────────────
   BOOKING FORM
───────────────────────────────────────── */
function initBookingForm() {
  // Populate car select
  const sel = document.getElementById('bookCar');
  CARS.forEach(car => {
    const opt = document.createElement('option');
    opt.value = car.id;
    opt.textContent = `${car.brand} ${car.name} — $${car.price}/day`;
    sel.appendChild(opt);
  });

  // Minimum date = today
  const today = new Date().toISOString().split('T')[0];
  ['bookPickup', 'bookReturn', 'durFrom', 'durTo'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.min = today;
  });

  // Recalculate on changes
  ['bookCar', 'bookPickup', 'bookReturn', 'addonGPS', 'addonSeat', 'addonInsurance', 'addonDriver', 'bookPickupLoc', 'bookReturnLoc'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', recalculate);
  });

  // Duration calculator
  ['durFrom', 'durTo'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', calcDuration);
  });

  // Sync quick search dates → booking form
  document.getElementById('pickupDate')?.addEventListener('change', e => {
    document.getElementById('bookPickup').value = e.target.value;
    recalculate();
  });
  document.getElementById('returnDate')?.addEventListener('change', e => {
    document.getElementById('bookReturn').value = e.target.value;
    recalculate();
  });

  // Submit
  document.getElementById('bookingForm').addEventListener('submit', handleBookingSubmit);
}

function recalculate() {
  const carId = parseInt(document.getElementById('bookCar').value);
  const car = CARS.find(c => c.id === carId);
  const pickup = document.getElementById('bookPickup').value;
  const ret = document.getElementById('bookReturn').value;
  const calcCarInfo = document.getElementById('calcCarInfo');
  const calcDays = document.getElementById('calcDays');
  const calcBaseRate = document.getElementById('calcBaseRate');
  const calcAddons = document.getElementById('calcAddons');
  const calcLocFee = document.getElementById('calcLocFee');
  const calcTotal = document.getElementById('calcTotal');

  if (!car) {
    calcCarInfo.innerHTML = `<p class="calc-placeholder">Select a car to see pricing details</p>`;
    ['calcDays','calcBaseRate','calcAddons','calcLocFee','calcTotal'].forEach(id => document.getElementById(id).textContent = '—');
    return;
  }

  calcCarInfo.innerHTML = `
    <div style="display:flex;align-items:center;gap:14px;width:100%">
      <span style="font-size:2.2rem">${car.emoji}</span>
      <div>
        <div style="font-weight:700;font-size:.95rem">${car.brand} ${car.name}</div>
        <div style="font-size:.82rem;color:var(--text-muted)">${cap(car.category)} · $${car.price}/day</div>
      </div>
    </div>
  `;

  let days = 0;
  if (pickup && ret) {
    const d1 = new Date(pickup), d2 = new Date(ret);
    days = Math.max(0, Math.round((d2 - d1) / 86400000));
  }

  const addons = ['addonGPS','addonSeat','addonInsurance','addonDriver'].reduce((sum, id) => {
    const el = document.getElementById(id);
    return el?.checked ? sum + parseInt(el.value) : sum;
  }, 0);

  const differentLoc = document.getElementById('bookReturnLoc').value !== '';
  const locFee = differentLoc ? 75 : 0;

  const base = car.price * days;
  const addonsTotal = addons * days;
  const total = base + addonsTotal + locFee;

  calcDays.textContent = days > 0 ? `${days} day${days !== 1 ? 's' : ''}` : '—';
  calcBaseRate.textContent = days > 0 ? `$${base.toFixed(2)}` : '—';
  calcAddons.textContent = addons > 0 ? `+$${addonsTotal.toFixed(2)}` : '$0.00';
  calcLocFee.textContent = locFee > 0 ? `+$${locFee.toFixed(2)}` : '$0.00';
  calcTotal.textContent = days > 0 ? `$${total.toFixed(2)}` : '—';
}

function calcDuration() {
  const from = document.getElementById('durFrom').value;
  const to = document.getElementById('durTo').value;
  const result = document.getElementById('durationResult');
  if (!from || !to) { result.textContent = 'Select dates to calculate rental duration'; return; }
  const d1 = new Date(from), d2 = new Date(to);
  const diff = Math.round((d2 - d1) / 86400000);
  if (diff <= 0) { result.textContent = 'Return date must be after pick-up date'; return; }
  const weeks = Math.floor(diff / 7);
  const days = diff % 7;
  let text = `Rental duration: ${diff} day${diff !== 1 ? 's' : ''}`;
  if (weeks > 0) text += ` (${weeks}w ${days}d)`;
  result.textContent = text;
}

function handleBookingSubmit(e) {
  e.preventDefault();
  const form = e.target;

  // Validation
  const required = ['bookFirstName','bookLastName','bookEmail','bookPhone','bookCar','bookPickup','bookReturn','bookPickupLoc'];
  let valid = true;
  required.forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      el.classList.add('error');
      valid = false;
    } else {
      el.classList.remove('error');
    }
  });

  if (!valid) { showToast('Please fill in all required fields', 'error'); return; }

  const pickup = document.getElementById('bookPickup').value;
  const ret = document.getElementById('bookReturn').value;
  if (new Date(ret) <= new Date(pickup)) {
    document.getElementById('bookReturn').classList.add('error');
    showToast('Return date must be after pick-up date', 'error');
    return;
  }

  const carId = parseInt(document.getElementById('bookCar').value);
  const car = CARS.find(c => c.id === carId);
  const days = Math.round((new Date(ret) - new Date(pickup)) / 86400000);
  const addons = ['addonGPS','addonSeat','addonInsurance','addonDriver'].reduce((sum, id) => {
    const el = document.getElementById(id);
    return el?.checked ? sum + parseInt(el.value) : sum;
  }, 0);
  const locFee = document.getElementById('bookReturnLoc').value ? 75 : 0;
  const total = car.price * days + addons * days + locFee;

  const booking = {
    carName: `${car.brand} ${car.name}`,
    emoji: car.emoji,
    pickup, ret,
    name: `${document.getElementById('bookFirstName').value} ${document.getElementById('bookLastName').value}`,
    email: document.getElementById('bookEmail').value,
    location: document.getElementById('bookPickupLoc').value,
    days, total: total.toFixed(2)
  };

  addToHistory(booking);

  // Animate button
  const btn = document.getElementById('bookSubmitBtn');
  btn.innerHTML = '<span>✅ Booking Confirmed!</span>';
  btn.style.background = 'linear-gradient(135deg,#27ae60,#2ecc71)';
  btn.disabled = true;

  showToast(`🎉 Booking confirmed for ${car.brand} ${car.name}!`, 'success', 5000);

  setTimeout(() => {
    form.reset();
    btn.innerHTML = '<span>Confirm Booking</span>';
    btn.style.background = '';
    btn.disabled = false;
    recalculate();
  }, 3000);
}

/* ─────────────────────────────────────────
   BOOK CAR (FROM CARD)
───────────────────────────────────────── */
function bookCar(id) {
  document.getElementById('bookCar').value = id;
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  recalculate();
  showToast('Car selected for booking ✓', 'success');
}

/* ─────────────────────────────────────────
   CAR DETAIL MODAL
───────────────────────────────────────── */
function openCarDetail(id) {
  const car = CARS.find(c => c.id === id);
  if (!car) return;
  document.getElementById('carDetailTitle').textContent = `${car.brand} ${car.name}`;
  document.getElementById('carDetailBody').innerHTML = `
    <div class="car-detail-layout">
      <div class="car-detail-visual">${car.emoji}</div>
      <div class="car-detail-info">
        <div>
          <div class="car-detail-name">${car.name}</div>
          <div class="car-detail-brand">${car.brand} · ${car.year}</div>
        </div>
        <div class="car-detail-price">$${car.price}<span style="font-size:1rem;font-weight:400;color:var(--text-muted)">/day</span></div>
        <div class="car-card-rating">
          <span class="stars">${'★'.repeat(Math.floor(car.rating))}</span>
          <span class="rating-num">${car.rating} · ${car.reviews} reviews</span>
        </div>
        <div class="car-detail-specs">
          <div class="car-detail-spec"><span class="detail-spec-icon">🏎</span><div class="detail-spec-info"><span class="detail-spec-label">Engine</span><span class="detail-spec-value">${car.specs.engine}</span></div></div>
          <div class="car-detail-spec"><span class="detail-spec-icon">⚡</span><div class="detail-spec-info"><span class="detail-spec-label">Power</span><span class="detail-spec-value">${car.specs.power}</span></div></div>
          <div class="car-detail-spec"><span class="detail-spec-icon">🚀</span><div class="detail-spec-info"><span class="detail-spec-label">0-60 mph</span><span class="detail-spec-value">${car.specs.acceleration}</span></div></div>
          <div class="car-detail-spec"><span class="detail-spec-icon">🏁</span><div class="detail-spec-info"><span class="detail-spec-label">Top Speed</span><span class="detail-spec-value">${car.specs.topSpeed}</span></div></div>
          <div class="car-detail-spec"><span class="detail-spec-icon">⛽</span><div class="detail-spec-info"><span class="detail-spec-label">Fuel Type</span><span class="detail-spec-value">${cap(car.fuel)}</span></div></div>
          <div class="car-detail-spec"><span class="detail-spec-icon">⚙️</span><div class="detail-spec-info"><span class="detail-spec-label">Transmission</span><span class="detail-spec-value">${cap(car.transmission)}</span></div></div>
          <div class="car-detail-spec"><span class="detail-spec-icon">👤</span><div class="detail-spec-info"><span class="detail-spec-label">Seats</span><span class="detail-spec-value">${car.seats}</span></div></div>
          <div class="car-detail-spec"><span class="detail-spec-icon">🛣️</span><div class="detail-spec-info"><span class="detail-spec-label">Mileage</span><span class="detail-spec-value">${car.mileage}</span></div></div>
        </div>
        <p class="car-detail-desc">${car.desc}</p>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:8px">
          <button class="btn btn-primary" onclick="bookCar(${car.id});closeModal('carDetailModal')">Book Now — $${car.price}/day</button>
          <button class="btn btn-outline" onclick="toggleFavorite(${car.id});showToast('${state.favorites.includes(car.id) ? 'Removed from' : 'Added to'} favorites','info')">${state.favorites.includes(car.id) ? '❤️ Saved' : '🤍 Save'}</button>
        </div>
      </div>
    </div>
  `;
  openModal('carDetailModal');
}

/* ─────────────────────────────────────────
   MODALS
───────────────────────────────────────── */
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

function initModals() {
  // Fav
  document.getElementById('favBtn').addEventListener('click', () => {
    renderFavorites();
    openModal('favModal');
  });
  document.getElementById('favModalClose').addEventListener('click', () => closeModal('favModal'));

  // Compare
  document.getElementById('compareBtn').addEventListener('click', () => {
    renderCompare();
    openModal('compareModal');
  });
  document.getElementById('compareModalClose').addEventListener('click', () => closeModal('compareModal'));

  // History
  document.getElementById('historyBtn').addEventListener('click', () => {
    renderHistory();
    openModal('historyModal');
  });
  document.getElementById('historyModalClose').addEventListener('click', () => closeModal('historyModal'));
  document.getElementById('clearHistoryBtn').addEventListener('click', () => {
    state.history = [];
    localStorage.removeItem('autolux-history');
    renderHistory();
    showToast('Booking history cleared', 'info');
  });

  // Car Detail
  document.getElementById('carDetailClose').addEventListener('click', () => closeModal('carDetailModal'));

  // Close on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
    }
  });
}

/* ─────────────────────────────────────────
   TESTIMONIALS SLIDER
───────────────────────────────────────── */
function initTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  const dotsContainer = document.getElementById('sliderDots');

  TESTIMONIALS.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <div class="testimonial-quote">"</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t.initials}</div>
        <div>
          <div class="author-name">${t.author}</div>
          <div class="author-role">${t.role}</div>
        </div>
        <div style="margin-left:auto" class="testimonial-rating">${'★'.repeat(t.rating)}</div>
      </div>
    `;
    track.appendChild(card);

    const dot = document.createElement('button');
    dot.className = `slider-dot${i === 0 ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  document.getElementById('sliderPrev').addEventListener('click', () => goToSlide((state.sliderIndex - 1 + state.sliderTotal) % state.sliderTotal));
  document.getElementById('sliderNext').addEventListener('click', () => goToSlide((state.sliderIndex + 1) % state.sliderTotal));

  state.sliderInterval = setInterval(() => {
    goToSlide((state.sliderIndex + 1) % state.sliderTotal);
  }, 5000);
}

function goToSlide(idx) {
  state.sliderIndex = idx;
  document.getElementById('testimonialsTrack').style.transform = `translateX(-${idx * 100}%)`;
  document.querySelectorAll('.slider-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}

/* ─────────────────────────────────────────
   FAQ
───────────────────────────────────────── */
function initFAQ() {
  const list = document.getElementById('faqList');
  FAQS.forEach((faq, i) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML = `
      <button class="faq-question" id="faq-q-${i}">
        <span>${faq.q}</span>
        <span class="faq-arrow">▼</span>
      </button>
      <div class="faq-answer" id="faq-a-${i}">
        <div class="faq-answer-inner">${faq.a}</div>
      </div>
    `;
    item.querySelector('.faq-question').addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
    list.appendChild(item);
  });
}

/* ─────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────── */
function initContactForm() {
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const fields = ['ctName','ctEmail','ctSubject','ctMessage'];
    let valid = true;
    fields.forEach(id => {
      const el = document.getElementById(id);
      if (!el.value.trim()) { el.classList.add('error'); valid = false; }
      else el.classList.remove('error');
    });
    if (!valid) { showToast('Please fill all required fields', 'error'); return; }
    showToast('Message sent! We\'ll get back to you within 24 hours 📬', 'success', 5000);
    e.target.reset();
  });
}

/* ─────────────────────────────────────────
   BACK TO TOP
───────────────────────────────────────── */
function initBackToTop() {
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─────────────────────────────────────────
   NAV SMOOTH SCROLL
───────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
function init() {
  applyTheme();
  initLoader();
  initHeader();
  initHamburger();
  initActiveNav();
  initParticles();
  initScrollReveal();
  initFilters();
  initQuickSearch();
  initModals();
  initBookingForm();
  initTestimonials();
  initFAQ();
  initContactForm();
  initBackToTop();
  initSmoothScroll();

  // Render car grids
  renderAllCars();
  renderLuxuryCars();
  renderEconomyCars();

  // Update badges from saved state
  updateFavBadge();
  updateCompareBadge();

  // Theme toggle
  document.getElementById('darkModeToggle').addEventListener('click', toggleTheme);

  // Global bookCar accessible
  window.bookCar = bookCar;
  window.toggleFavorite = toggleFavorite;
  window.closeModal = closeModal;
  window.showToast = showToast;
  window.removeToast = removeToast;
}

document.addEventListener('DOMContentLoaded', init);
