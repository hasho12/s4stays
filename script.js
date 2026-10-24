/**
 * S for Stays — Production Frontend Logic
 * Pure Vanilla JavaScript | Zero External Dependencies | GitHub Pages Ready
 */

(function () {
  'use strict';

  /* ========================================================================
     1. OFFICIAL ROOM INVENTORY & BUSINESS CONFIGURATION
     ======================================================================== */
  const WHATSAPP_NUMBER = '923237402926';
  const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/XeJf2KEivaTyJujU7';

  const SUPPLIED_FACILITIES = [
    'Free Wi-Fi',
    'Hot and cold water',
    'Clean beds',
    'Electricity backup',
    'Main boulevard location',
    'Free parking',
    'Good washrooms'
  ];

  const ROOMS_DATA = {
    '201': {
      number: '201',
      title: 'Room 201',
      category: 'Studio Room',
      floorLabel: 'Second floor',
      floorGroup: 'Second Floor',
      images: ['assets/rooms/room-201.jpg'],
      description:
        'Second-floor Studio Room featuring clean beds, a good washroom with hot and cold water, free Wi-Fi, and electricity backup at our main boulevard property with free parking.'
    },
    '202': {
      number: '202',
      title: 'Room 202',
      category: 'Studio Room',
      floorLabel: 'Second floor',
      floorGroup: 'Second Floor',
      images: ['assets/rooms/room-202.jpg'],
      description:
        'Second-floor Studio Room featuring clean beds, a good washroom with hot and cold water, free Wi-Fi, and electricity backup at our main boulevard property with free parking.'
    },
    '203': {
      number: '203',
      title: 'Room 203',
      category: 'Studio Room',
      floorLabel: 'Second floor',
      floorGroup: 'Second Floor',
      images: ['assets/rooms/room-203.jpg'],
      description:
        'Second-floor Studio Room featuring clean beds, a good washroom with hot and cold water, free Wi-Fi, and electricity backup at our main boulevard property with free parking.'
    },
    '204': {
      number: '204',
      title: 'Room 204',
      category: '1-Bedroom Room',
      floorLabel: 'Second floor',
      floorGroup: 'Second Floor',
      images: ['assets/rooms/room-204.jpg'],
      description:
        'Second-floor 1-Bedroom Room featuring clean beds, a good washroom with hot and cold water, free Wi-Fi, and electricity backup at our main boulevard property with free parking.'
    },
    '301': {
      number: '301',
      title: 'Room 301',
      category: 'Studio Room',
      floorLabel: 'Third floor',
      floorGroup: 'Third Floor',
      images: ['assets/rooms/room-301.jpg'],
      description:
        'Third-floor Studio Room featuring clean beds, a good washroom with hot and cold water, free Wi-Fi, and electricity backup at our main boulevard property with free parking.'
    },
    '302': {
      number: '302',
      title: 'Room 302',
      category: 'Studio Room',
      floorLabel: 'Third floor',
      floorGroup: 'Third Floor',
      images: ['assets/rooms/room-302.jpg'],
      description:
        'Third-floor Studio Room featuring clean beds, a good washroom with hot and cold water, free Wi-Fi, and electricity backup at our main boulevard property with free parking.'
    },
    '303': {
      number: '303',
      title: 'Room 303',
      category: '1-Bedroom Room',
      floorLabel: 'Third floor',
      floorGroup: 'Third Floor',
      images: ['assets/rooms/room-303.jpg'],
      description:
        'Third-floor 1-Bedroom Room featuring clean beds, a good washroom with hot and cold water, free Wi-Fi, and electricity backup at our main boulevard property with free parking.'
    }
  };

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  /* ========================================================================
     2. GRACEFUL ROOM PHOTO MANAGEMENT (HANDLES MISSING OR 0-BYTE FILES)
     ======================================================================== */
  function attachImageHandler(slot) {
    const img = slot.querySelector('img.room-img');
    if (!img) return;

    function markLoaded() {
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        slot.classList.add('is-loaded');
        slot.classList.remove('is-placeholder');
      } else {
        markPlaceholder();
      }
    }

    function markPlaceholder() {
      slot.classList.remove('is-loaded');
      slot.classList.add('is-placeholder');
    }

    img.addEventListener('load', markLoaded);
    img.addEventListener('error', markPlaceholder);

    if (img.complete) {
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        markLoaded();
      } else {
        markPlaceholder();
      }
    }
  }

  function initAllMediaSlots(root = document) {
    const slots = root.querySelectorAll('[data-room-media]');
    slots.forEach(attachImageHandler);
  }

  /* ========================================================================
     3. HEADER, MOBILE NAVIGATION & SCROLL CONTROLS
     ======================================================================== */
  function initNavigation() {
    const header = document.getElementById('site-header');
    const navToggle = document.getElementById('nav-toggle');
    const primaryNav = document.getElementById('primary-navigation');
    const navLinks = document.querySelectorAll('.nav-link, .nav-mobile-cta a');
    const backToTopFab = document.getElementById('back-to-top');
    const footerTopBtn = document.getElementById('footer-top-btn');

    function closeMobileNav() {
      if (!navToggle || !primaryNav) return;
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation menu');
      primaryNav.classList.remove('is-open');
    }

    function toggleMobileNav() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileNav();
      } else {
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.setAttribute('aria-label', 'Close navigation menu');
        primaryNav.classList.add('is-open');
      }
    }

    if (navToggle) {
      navToggle.addEventListener('click', toggleMobileNav);
    }

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && primaryNav && primaryNav.classList.contains('is-open')) {
        closeMobileNav();
        navToggle.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (
        primaryNav &&
        primaryNav.classList.contains('is-open') &&
        !primaryNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        closeMobileNav();
      }
    });

    // Scroll state for header shadow & back-to-top visibility
    function onScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      if (header) {
        header.classList.toggle('is-scrolled', scrollY > 16);
      }
      if (backToTopFab) {
        if (scrollY > 520) {
          backToTopFab.removeAttribute('hidden');
        } else {
          backToTopFab.setAttribute('hidden', '');
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
      });
    }

    if (backToTopFab) backToTopFab.addEventListener('click', scrollToTop);
    if (footerTopBtn) footerTopBtn.addEventListener('click', scrollToTop);
  }

  /* ========================================================================
     4. ROOM CATEGORY FILTERING (ALL / STUDIO / 1-BEDROOM)
     ======================================================================== */
  function initRoomFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const roomCards = document.querySelectorAll('.room-card');
    const floorGroups = document.querySelectorAll('.floor-group');
    const emptyState = document.getElementById('rooms-empty-state');
    const resetFilterBtn = document.getElementById('reset-filter-btn');
    const filterStatus = document.getElementById('filter-status');

    function applyFilter(category) {
      filterBtns.forEach((btn) => {
        const isMatch = btn.getAttribute('data-filter') === category;
        btn.classList.toggle('active', isMatch);
        btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
      });

      let visibleCount = 0;

      roomCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        const shouldShow = category === 'all' || cardCategory === category;

        if (shouldShow) {
          card.removeAttribute('hidden');
          visibleCount += 1;
        } else {
          card.setAttribute('hidden', '');
        }
      });

      floorGroups.forEach((group) => {
        const visibleInFloor = group.querySelectorAll('.room-card:not([hidden])').length;
        if (visibleInFloor > 0) {
          group.removeAttribute('hidden');
        } else {
          group.setAttribute('hidden', '');
        }
      });

      if (emptyState) {
        if (visibleCount === 0) {
          emptyState.removeAttribute('hidden');
        } else {
          emptyState.setAttribute('hidden', '');
        }
      }

      if (filterStatus) {
        const label = category === 'all' ? 'all categories' : category + 's';
        filterStatus.textContent = `Showing ${visibleCount} room${visibleCount === 1 ? '' : 's'} for ${label}.`;
      }
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const selectedCategory = btn.getAttribute('data-filter');
        applyFilter(selectedCategory);
      });
    });

    if (resetFilterBtn) {
      resetFilterBtn.addEventListener('click', () => applyFilter('all'));
    }
  }

  /* ========================================================================
     5. ROOM DETAILS MODAL & SWIPEABLE GALLERY CAROUSEL
     ======================================================================== */
  function initRoomModal() {
    const modal = document.getElementById('room-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const modalTitle = document.getElementById('modal-room-title');
    const modalCategory = document.getElementById('modal-room-category');
    const modalFloor = document.getElementById('modal-room-floor');
    const modalDesc = document.getElementById('modal-room-desc');
    const modalInquireBtn = document.getElementById('modal-inquire-btn');
    const carouselViewport = document.getElementById('carousel-viewport');
    const carouselTrack = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const dotsContainer = document.getElementById('carousel-dots');
    const roomSelect = document.getElementById('selected-room');

    if (!modal) return;

    let activeRoomId = null;
    let lastFocusedElement = null;
    let currentSlideIndex = 0;
    let totalSlides = 1;
    let touchStartX = 0;
    let touchEndX = 0;

    function buildCarouselSlides(room) {
      carouselTrack.innerHTML = '';
      dotsContainer.innerHTML = '';

      const images = Array.isArray(room.images) && room.images.length > 0
        ? room.images
        : [`assets/rooms/room-${room.number}.jpg`];

      totalSlides = images.length;
      currentSlideIndex = 0;

      images.forEach((imgSrc, idx) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide media-slot';
        slide.setAttribute('data-room-media', '');
        slide.setAttribute('role', 'group');
        slide.setAttribute('aria-roledescription', 'slide');
        slide.setAttribute('aria-label', `Photo ${idx + 1} of ${totalSlides} for ${room.title}`);

        slide.innerHTML = `
          <img
            src="${imgSrc}"
            alt="${room.title} — ${room.category} on the ${room.floorLabel} at S for Stays"
            class="room-img"
            width="800"
            height="500"
          >
          <div class="image-placeholder">
            <svg class="placeholder-icon" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="16" rx="2"/>
              <path d="M3 15l5-5 4 4 3-3 6 6"/>
              <circle cx="8.5" cy="9.5" r="1.5"/>
            </svg>
            <span class="placeholder-text">Room photo coming soon</span>
            <span class="placeholder-subtext">Expected file: <code>${imgSrc}</code></span>
          </div>
        `;
        carouselTrack.appendChild(slide);

        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot';
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `View photo ${idx + 1}`);
        dot.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
      });

      initAllMediaSlots(carouselTrack);

      // Show arrows/dots only if multiple real photos are configured; hide if 1 photo
      if (totalSlides > 1) {
        prevBtn.removeAttribute('hidden');
        nextBtn.removeAttribute('hidden');
        dotsContainer.removeAttribute('hidden');
      } else {
        prevBtn.setAttribute('hidden', '');
        nextBtn.setAttribute('hidden', '');
        dotsContainer.setAttribute('hidden', '');
      }

      updateCarouselPosition();
    }

    function updateCarouselPosition() {
      carouselTrack.style.transform = `translate3d(-${currentSlideIndex * 100}%, 0, 0)`;
      const dots = dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((dot, idx) => {
        dot.setAttribute('aria-selected', idx === currentSlideIndex ? 'true' : 'false');
      });
    }

    function goToSlide(index) {
      if (totalSlides <= 1) return;
      currentSlideIndex = (index + totalSlides) % totalSlides;
      updateCarouselPosition();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlideIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlideIndex + 1));

    // Touch swipe support on carousel
    if (carouselViewport) {
      carouselViewport.addEventListener(
        'touchstart',
        (e) => {
          if (e.changedTouches && e.changedTouches[0]) {
            touchStartX = e.changedTouches[0].screenX;
          }
        },
        { passive: true }
      );

      carouselViewport.addEventListener(
        'touchend',
        (e) => {
          if (e.changedTouches && e.changedTouches[0]) {
            touchEndX = e.changedTouches[0].screenX;
            const deltaX = touchEndX - touchStartX;
            if (Math.abs(deltaX) > 40 && totalSlides > 1) {
              if (deltaX < 0) {
                goToSlide(currentSlideIndex + 1);
              } else {
                goToSlide(currentSlideIndex - 1);
              }
            }
          }
        },
        { passive: true }
      );

      carouselViewport.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          goToSlide(currentSlideIndex - 1);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          goToSlide(currentSlideIndex + 1);
        }
      });
    }

    function openModal(roomId, triggerEl) {
      const room = ROOMS_DATA[roomId];
      if (!room) return;

      activeRoomId = roomId;
      lastFocusedElement = triggerEl || document.activeElement;

      modalTitle.textContent = `Room ${room.number} — ${room.category}`;
      modalCategory.textContent = room.category;
      modalCategory.classList.toggle('badge-accent', room.category === '1-Bedroom Room');
      modalFloor.textContent = room.floorLabel;
      modalDesc.textContent = room.description;
      modalInquireBtn.querySelector('span').textContent = `Inquire About Room ${room.number}`;

      buildCarouselSlides(room);

      modal.removeAttribute('hidden');
      document.body.classList.add('modal-open');

      requestAnimationFrame(() => {
        modal.classList.add('is-active');
        closeBtn.focus();
      });
    }

    function closeModal() {
      if (modal.hasAttribute('hidden')) return;
      modal.classList.remove('is-active');
      document.body.classList.remove('modal-open');
      modal.setAttribute('hidden', '');

      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }

    // Attach listeners to all "View Room & Inquire" buttons
    document.querySelectorAll('[data-open-room]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const roomId = btn.getAttribute('data-open-room');
        openModal(roomId, btn);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Keyboard accessibility: Escape & Focus Trap
    document.addEventListener('keydown', (e) => {
      if (modal.hasAttribute('hidden')) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = modal.querySelectorAll(
          'button:not([hidden]):not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    // Selecting "Inquire About This Room" preselects exact room & scrolls to form
    if (modalInquireBtn) {
      modalInquireBtn.addEventListener('click', () => {
        const targetRoomId = activeRoomId;
        closeModal();

        if (roomSelect && targetRoomId) {
          roomSelect.value = targetRoomId;
          roomSelect.dispatchEvent(new Event('change', { bubbles: true }));
        }

        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
          });
        }

        const nameInput = document.getElementById('guest-name');
        setTimeout(() => {
          if (nameInput && !nameInput.value.trim()) {
            nameInput.focus();
          } else if (roomSelect) {
            roomSelect.focus();
          }
        }, 350);
      });
    }
  }

  /* ========================================================================
     6. LOCAL TIMEZONE DATE UTILITIES & WHATSAPP INQUIRY FORM
     ======================================================================== */
  function getTodayLocalISO() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function parseLocalDate(yyyyMmDd) {
    if (!yyyyMmDd || typeof yyyyMmDd !== 'string') return null;
    const parts = yyyyMmDd.split('-');
    if (parts.length !== 3) return null;
    const year = Number(parts[0]);
    const month = Number(parts[1]);
    const day = Number(parts[2]);
    if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) {
      return null;
    }
    const date = new Date(year, month - 1, day, 0, 0, 0, 0);
    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return null;
    }
    return date;
  }

  function calculateNights(checkInStr, checkOutStr) {
    const inDate = parseLocalDate(checkInStr);
    const outDate = parseLocalDate(checkOutStr);
    if (!inDate || !outDate) return null;
    const utcIn = Date.UTC(inDate.getFullYear(), inDate.getMonth(), inDate.getDate());
    const utcOut = Date.UTC(outDate.getFullYear(), outDate.getMonth(), outDate.getDate());
    const diffDays = Math.round((utcOut - utcIn) / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  function buildWhatsAppMessage(payload) {
    const room = ROOMS_DATA[payload.roomId];
    const phoneLine = payload.phone ? payload.phone : 'Not provided';
    const requestLine = payload.specialRequest ? payload.specialRequest : 'None';

    return [
      'Hello S for Stays,',
      'I would like to inquire about a room.',
      `Name: ${payload.fullName}`,
      `Room: Room ${room.number}`,
      `Room Category: ${room.category}`,
      `Floor: ${room.floorGroup}`,
      `Check-in: ${payload.checkIn}`,
      `Check-out: ${payload.checkOut}`,
      `Number of Nights: ${payload.nights}`,
      `Guests: ${payload.guests}`,
      `Phone: ${phoneLine}`,
      `Additional Request: ${requestLine}`,
      'Please share the availability and applicable price for these dates.',
      'Thank you.'
    ].join('\n');
  }

  function buildWhatsAppUrl(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  function initInquiryForm() {
    const form = document.getElementById('whatsapp-inquiry-form');
    if (!form) return;

    const nameInput = document.getElementById('guest-name');
    const roomSelect = document.getElementById('selected-room');
    const checkInInput = document.getElementById('check-in-date');
    const checkOutInput = document.getElementById('check-out-date');
    const guestsInput = document.getElementById('guest-count');
    const phoneInput = document.getElementById('guest-phone');
    const requestInput = document.getElementById('special-request');
    const nightsValueEl = document.getElementById('nights-value');

    // Set minimum selectable dates to current local date
    const todayISO = getTodayLocalISO();
    if (checkInInput) checkInInput.setAttribute('min', todayISO);
    if (checkOutInput) checkOutInput.setAttribute('min', todayISO);

    function setFieldError(inputEl, errorId, message) {
      const errorEl = document.getElementById(errorId);
      if (!inputEl || !errorEl) return;
      if (message) {
        inputEl.classList.add('is-invalid');
        inputEl.setAttribute('aria-invalid', 'true');
        errorEl.textContent = message;
        errorEl.removeAttribute('hidden');
      } else {
        inputEl.classList.remove('is-invalid');
        inputEl.removeAttribute('aria-invalid');
        errorEl.textContent = '';
        errorEl.setAttribute('hidden', '');
      }
    }

    function updateNightsDisplay() {
      const nights = calculateNights(checkInInput.value, checkOutInput.value);
      if (nights !== null && nights > 0) {
        nightsValueEl.textContent = `${nights} ${nights === 1 ? 'Night' : 'Nights'}`;
      } else if (nights !== null && nights <= 0) {
        nightsValueEl.textContent = 'Check-out must be after check-in';
      } else {
        nightsValueEl.textContent = 'Select check-in & check-out dates';
      }
    }

    function validateName() {
      const val = nameInput.value.trim();
      if (!val) {
        setFieldError(nameInput, 'guest-name-error', 'Please enter your full name.');
        return false;
      }
      setFieldError(nameInput, 'guest-name-error', '');
      return true;
    }

    function validateRoom() {
      const val = roomSelect.value;
      if (!val || !ROOMS_DATA[val]) {
        setFieldError(roomSelect, 'selected-room-error', 'Please select a room for your inquiry.');
        return false;
      }
      setFieldError(roomSelect, 'selected-room-error', '');
      return true;
    }

    function validateDates() {
      let valid = true;
      const todayDate = parseLocalDate(getTodayLocalISO());
      const inDate = parseLocalDate(checkInInput.value);
      const outDate = parseLocalDate(checkOutInput.value);

      if (!checkInInput.value || !inDate) {
        setFieldError(checkInInput, 'check-in-error', 'Please select a valid check-in date.');
        valid = false;
      } else if (inDate.getTime() < todayDate.getTime()) {
        setFieldError(checkInInput, 'check-in-error', 'Check-in date cannot be earlier than today.');
        valid = false;
      } else {
        setFieldError(checkInInput, 'check-in-error', '');
      }

      if (!checkOutInput.value || !outDate) {
        setFieldError(checkOutInput, 'check-out-error', 'Please select a valid check-out date.');
        valid = false;
      } else if (inDate && outDate.getTime() <= inDate.getTime()) {
        setFieldError(checkOutInput, 'check-out-error', 'Check-out date must be later than the check-in date.');
        valid = false;
      } else {
        setFieldError(checkOutInput, 'check-out-error', '');
      }

      updateNightsDisplay();
      return valid;
    }

    function validateGuests() {
      const raw = guestsInput.value.trim();
      const num = Number(raw);
      if (!raw || !Number.isInteger(num) || num < 1) {
        setFieldError(guestsInput, 'guest-count-error', 'Please enter a positive whole number of guests (1 or more).');
        return false;
      }
      setFieldError(guestsInput, 'guest-count-error', '');
      return true;
    }

    nameInput.addEventListener('input', () => {
      if (nameInput.classList.contains('is-invalid')) validateName();
    });
    roomSelect.addEventListener('change', validateRoom);

    checkInInput.addEventListener('change', () => {
      const inDate = parseLocalDate(checkInInput.value);
      if (inDate) {
        const nextDay = new Date(inDate.getFullYear(), inDate.getMonth(), inDate.getDate() + 1);
        const minOut = `${nextDay.getFullYear()}-${String(nextDay.getMonth() + 1).padStart(2, '0')}-${String(nextDay.getDate()).padStart(2, '0')}`;
        checkOutInput.setAttribute('min', minOut);
      }
      validateDates();
    });

    checkOutInput.addEventListener('change', validateDates);
    guestsInput.addEventListener('input', () => {
      if (guestsInput.classList.contains('is-invalid')) validateGuests();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameOk = validateName();
      const isRoomOk = validateRoom();
      const areDatesOk = validateDates();
      const areGuestsOk = validateGuests();

      if (!isNameOk || !isRoomOk || !areDatesOk || !areGuestsOk) {
        const firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const nights = calculateNights(checkInInput.value, checkOutInput.value);
      const payload = {
        fullName: nameInput.value.trim(),
        roomId: roomSelect.value,
        checkIn: checkInInput.value,
        checkOut: checkOutInput.value,
        nights: nights,
        guests: Number(guestsInput.value.trim()),
        phone: phoneInput.value.trim(),
        specialRequest: requestInput.value.trim()
      };

      const message = buildWhatsAppMessage(payload);
      const whatsappUrl = buildWhatsAppUrl(message);

      // Expose last generated inquiry on window for transparent testing/inspection
      window.__lastWhatsAppInquiry = {
        payload,
        message,
        url: whatsappUrl
      };

      // Do not clear form before opening WhatsApp.
      const popup = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (!popup) {
        window.location.href = whatsappUrl;
      }
    });
  }

  /* ========================================================================
     7. CINEMATIC UI: SCROLL REVEALS, 3D CARD TILT & MAGNETIC BUTTONS
     ======================================================================== */
  function initScrollReveal() {
    const sections = document.querySelectorAll('.reveal-section');
    if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
      sections.forEach((sec) => sec.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
  }

  function init3DTiltAndParallax() {
    if (prefersReducedMotion.matches || !supportsFinePointer.matches) return;

    // 1. 3D Room Card Tilt
    const tiltCards = document.querySelectorAll('[data-tilt-card]');
    tiltCards.forEach((card) => {
      const inner = card.querySelector('.room-card-inner');
      if (!inner) return;

      let rafId = null;

      card.addEventListener('pointermove', (e) => {
        if (e.pointerType === 'touch') return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const normX = x / rect.width - 0.5;
        const normY = y / rect.height - 0.5;

        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const rotateX = (-normY * 6).toFixed(2);
          const rotateY = (normX * 6).toFixed(2);
          inner.style.setProperty('--rx', `${rotateX}deg`);
          inner.style.setProperty('--ry', `${rotateY}deg`);
          inner.style.setProperty('--glare-x', `${(x / rect.width) * 100}%`);
          inner.style.setProperty('--glare-y', `${(y / rect.height) * 100}%`);
          inner.style.setProperty('--glare-opacity', '1');
        });
      });

      card.addEventListener('pointerleave', () => {
        if (rafId) cancelAnimationFrame(rafId);
        inner.style.setProperty('--rx', '0deg');
        inner.style.setProperty('--ry', '0deg');
        inner.style.setProperty('--glare-opacity', '0');
      });
    });

    // 2. Hero Stage Layered Parallax
    const heroStage = document.getElementById('hero-parallax-stage');
    if (heroStage) {
      heroStage.addEventListener('pointermove', (e) => {
        if (e.pointerType === 'touch') return;
        const rect = heroStage.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;
        heroStage.style.setProperty('--stage-x', `${(normX * 12).toFixed(1)}px`);
        heroStage.style.setProperty('--stage-y', `${(normY * 10).toFixed(1)}px`);
      });

      heroStage.addEventListener('pointerleave', () => {
        heroStage.style.setProperty('--stage-x', '0px');
        heroStage.style.setProperty('--stage-y', '0px');
      });
    }

    // 3. Subtle Magnetic Desktop Buttons
    const magneticButtons = document.querySelectorAll('[data-magnetic]');
    magneticButtons.forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        if (e.pointerType === 'touch') return;
        const rect = btn.getBoundingClientRect();
        const offsetX = (e.clientX - (rect.left + rect.width / 2)) * 0.14;
        const offsetY = (e.clientY - (rect.top + rect.height / 2)) * 0.18;
        btn.style.transform = `translate3d(${offsetX.toFixed(1)}px, ${offsetY.toFixed(1)}px, 0)`;
      });

      btn.addEventListener('pointerleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* ========================================================================
     8. INITIALIZATION
     ======================================================================== */
  function init() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      yearSpan.textContent = String(new Date().getFullYear());
    }

    initAllMediaSlots(document);
    initNavigation();
    initRoomFilters();
    initRoomModal();
    initInquiryForm();
    initScrollReveal();
    init3DTiltAndParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
