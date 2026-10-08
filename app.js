// SPORT BANT ONLINE - Main Application Script
// 54 ta Sport Turi, Murabbiylar profili, Onlayn Bron va Ro'yxatdan o'tish tizimi

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elementlar
  const sportsGrid = document.getElementById('sportsGrid');
  const categoryTabs = document.getElementById('categoryTabs');
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const sortSelect = document.getElementById('sortSelect');
  const currentResultsNum = document.getElementById('currentResultsNum');
  const statSportsCount = document.getElementById('statSportsCount');
  const statCoachesCount = document.getElementById('statCoachesCount');

  // Modal Elementlar
  const sportDetailModal = document.getElementById('sportDetailModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalSportImg = document.getElementById('modalSportImg');
  const modalSportTitle = document.getElementById('modalSportTitle');
  const modalSportIcon = document.getElementById('modalSportIcon');
  const modalSportCategory = document.getElementById('modalSportCategory');
  const modalSportBadge = document.getElementById('modalSportBadge');
  const modalSportPrice = document.getElementById('modalSportPrice');
  const modalSpecLocation = document.getElementById('modalSpecLocation');
  const modalSpecAge = document.getElementById('modalSpecAge');
  const modalFullDesc = document.getElementById('modalFullDesc');
  const modalRequirements = document.getElementById('modalRequirements');
  const modalCoachesList = document.getElementById('modalCoachesList');
  const formSportHeading = document.getElementById('formSportHeading');

  // Modal Tabs
  const modalTabBtns = document.querySelectorAll('.modal-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const btnGoToBookingTab = document.getElementById('btnGoToBookingTab');

  // Booking Form & Ticket
  const bookingFormContainer = document.getElementById('bookingFormContainer');
  const onlineBookingForm = document.getElementById('onlineBookingForm');
  const bookingCoachSelect = document.getElementById('bookingCoachSelect');
  const bookingTimeSlot = document.getElementById('bookingTimeSlot');
  const capacityAlertText = document.getElementById('capacityAlertText');
  const capacityFillBar = document.getElementById('capacityFillBar');
  const ticketGeneratedBox = document.getElementById('ticketGeneratedBox');
  const btnPrintTicket = document.getElementById('btnPrintTicket');
  const btnNewBookingAgain = document.getElementById('btnNewBookingAgain');

  // Drawer (Mening bronlarim)
  const bookingsDrawer = document.getElementById('bookingsDrawer');
  const btnOpenBookings = document.getElementById('btnOpenBookings');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerBookingsList = document.getElementById('drawerBookingsList');
  const bookingsCountBadge = document.getElementById('bookingsCountBadge');

  // Toast Container
  const toastContainer = document.getElementById('toastContainer');

  // Dastlabki holat
  let currentCategory = 'Barchasi';
  let searchQuery = '';
  let currentSort = 'id-asc';
  let activeSport = null;

  // LocalStorage dan bronlarni olish
  function getStoredBookings() {
    try {
      const data = localStorage.getItem('sport_online_bookings');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('LocalStorage xatosi:', e);
      return [];
    }
  }

  function saveStoredBookings(bookings) {
    try {
      localStorage.setItem('sport_online_bookings', JSON.stringify(bookings));
      updateBookingsBadge();
    } catch (e) {
      console.error('LocalStorage saqlashda xato:', e);
    }
  }

  function updateBookingsBadge() {
    const list = getStoredBookings();
    bookingsCountBadge.textContent = list.length;
  }

  // Toifalar (Kategoriyalar) tugmalarini chiqarish
  function initCategories() {
    categoryTabs.innerHTML = '';
    CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `cat-pill ${cat === currentCategory ? 'active' : ''}`;
      btn.textContent = cat;
      btn.dataset.category = cat;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = cat;
        renderSports();
      });
      categoryTabs.appendChild(btn);
    });
  }

  // Statistika hisobi
  function initStats() {
    statSportsCount.textContent = `${SPORTS_DATA.length} ta`;
    let totalCoaches = 0;
    SPORTS_DATA.forEach(s => {
      totalCoaches += (s.coaches ? s.coaches.length : 0);
    });
    statCoachesCount.textContent = `${totalCoaches}+ ta`;
  }

  // Sport kartalarini saralash va filtratsiyalash
  function getFilteredSports() {
    return SPORTS_DATA.filter(sport => {
      const matchesCategory = currentCategory === 'Barchasi' || sport.category === currentCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesName = sport.name.toLowerCase().includes(q);
      const matchesDesc = sport.description.toLowerCase().includes(q);
      const matchesCategoryName = sport.category.toLowerCase().includes(q);
      const matchesCoach = sport.coaches.some(c => 
        c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q)
      );

      return matchesCategory && (matchesName || matchesDesc || matchesCategoryName || matchesCoach);
    }).sort((a, b) => {
      if (currentSort === 'id-asc') return a.id - b.id;
      if (currentSort === 'name-asc') return a.name.localeCompare(b.name, 'uz');
      if (currentSort === 'price-asc') {
        const pA = parseInt(a.price.replace(/\D/g, '')) || 0;
        const pB = parseInt(b.price.replace(/\D/g, '')) || 0;
        return pA - pB;
      }
      if (currentSort === 'price-desc') {
        const pA = parseInt(a.price.replace(/\D/g, '')) || 0;
        const pB = parseInt(b.price.replace(/\D/g, '')) || 0;
        return pB - pA;
      }
      return 0;
    });
  }

  // 54 ta Sport Kartasini Chizish
  function renderSports() {
    const list = getFilteredSports();
    currentResultsNum.textContent = `${list.length} ta`;

    if (list.length === 0) {
      sportsGrid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🔎</div>
          <h3 style="font-size: 20px; color: var(--text-main); margin-bottom: 8px;">Hech qanday sport turi topilmadi</h3>
          <p style="color: var(--text-secondary); max-width: 440px; margin: 0 auto 18px;">
            "${searchQuery}" so'rovi bo'yicha hech qanday sport turi yoki murabbiy aniqlanmadi. Qidiruv so'zini o'zgartirib ko'ring.
          </p>
          <button class="cat-pill active" id="btnResetFilters" style="cursor: pointer;">Barcha sport turlarini ko'rish</button>
        </div>
      `;
      const btnReset = document.getElementById('btnResetFilters');
      if (btnReset) {
        btnReset.addEventListener('click', () => {
          searchInput.value = '';
          searchQuery = '';
          searchClearBtn.style.display = 'none';
          currentCategory = 'Barchasi';
          document.querySelectorAll('.cat-pill').forEach(b => {
            b.classList.toggle('active', b.dataset.category === 'Barchasi');
          });
          renderSports();
        });
      }
      return;
    }

    sportsGrid.innerHTML = '';
    list.forEach(sport => {
      const card = document.createElement('div');
      card.className = 'sport-card';

      // Murabbiylar rasmlari stacki
      const coachAvatars = sport.coaches.slice(0, 3).map(c => `
        <img src="${c.photo}" alt="${c.name}" class="coach-mini-avatar" title="${c.name} (${c.age} yosh)" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'">
      `).join('');

      // Murabbiy sig'imi (kamida 30 tadan boshlanadi)
      const minCapacity = Math.min(...sport.coaches.map(c => c.capacity));
      const firstCoachTime = sport.coaches[0]?.schedule[0]?.time || "08:00 — 10:00";

      card.innerHTML = `
        <div class="card-image-wrap">
          <img src="${sport.image}" alt="${sport.name}" class="card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=600&auto=format&fit=crop&q=80'">
          <div class="card-overlay"></div>
          
          <div class="card-top-badges">
            <span class="card-cat-badge">${sport.category}</span>
            <span class="card-feature-badge">${sport.badge || "Olimpiya"}</span>
          </div>

          <div class="card-sport-id">
            <div class="id-circle">#${sport.id}</div>
            <div class="sport-icon">${sport.icon}</div>
          </div>
        </div>

        <div class="card-body">
          <div class="card-title">
            <span>${sport.id}. ${sport.name}</span>
            <span class="card-price">${sport.price}</span>
          </div>

          <p class="card-desc">${sport.description}</p>

          <div class="card-coaches-preview">
            <div class="coaches-avatars-row">
              <div class="avatar-stack">
                ${coachAvatars}
              </div>
              <div class="capacity-badge-pill" title="Kamida 30 kishilik guruh">
                <span>👥</span> Guruh: ${minCapacity}+ o'rin
              </div>
            </div>
            <div class="coaches-label" style="margin-top: 8px;">
              Murabbiylar: <strong>${sport.coaches.map(c => c.name.split(' ')[0]).join(', ')}</strong>
            </div>
          </div>

          <div class="card-time-preview">
            <span>⏰ Vaqti:</span> ${firstCoachTime} va kechki guruhlar
          </div>

          <button class="btn-card-action" data-sport-id="${sport.id}">
            <span>Batafsil Oyna & Bron Qilish</span> ➔
          </button>
        </div>
      `;

      // Tugmaga bosganda alohida oynani ochish
      card.querySelector('.btn-card-action').addEventListener('click', () => {
        openSportModal(sport.id);
      });

      sportsGrid.appendChild(card);
    });
  }

  // ALOHIDA OYNA (DEDICATED MODAL) OCHISH
  function openSportModal(sportId, targetCoachId = null) {
    const sport = SPORTS_DATA.find(s => s.id === sportId);
    if (!sport) return;

    activeSport = sport;

    // Header va ma'lumotlarni to'ldirish
    modalSportImg.src = sport.image;
    modalSportImg.onerror = () => {
      modalSportImg.src = 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80';
    };
    modalSportTitle.textContent = `${sport.id}. ${sport.name}`;
    modalSportIcon.textContent = sport.icon;
    modalSportCategory.textContent = sport.category;
    modalSportBadge.textContent = sport.badge || "Olimpiya";
    modalSportPrice.textContent = sport.price;

    modalSpecLocation.textContent = sport.location;
    modalSpecAge.textContent = sport.ageLimit;
    modalFullDesc.textContent = sport.description;
    modalRequirements.textContent = sport.requirements || "Sport formasi, krossovka va shaxsiy gigiena vositalari talab qilinadi.";
    formSportHeading.textContent = `"${sport.name}" Bo'yicha Onlayn Bron va Ro'yxatdan O'tish`;

    // Murabbiylar kartalarini shakllantirish (yoshi, tajribasi, sig'im >= 30, vaqtlari)
    renderModalCoaches(sport);

    // Bron formasidagi selectlarni to'ldirish
    populateBookingFormSelects(sport, targetCoachId);

    // Formani tozalash va chiptani yashirish
    bookingFormContainer.style.display = 'block';
    ticketGeneratedBox.style.display = 'none';
    onlineBookingForm.reset();

    // Default sana bugungi sana yoki ertasiga
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const dateStr = today.toISOString().split('T')[0];
    document.getElementById('bookingDateStart').value = dateStr;

    // Agar ma'lum bir murabbiy ko'rsatilgan bo'lsa, booking tabiga o'tish
    if (targetCoachId) {
      switchModalTab('tab-booking');
    } else {
      switchModalTab('tab-overview');
    }

    // Modalni ochish
    sportDetailModal.classList.add('open');
    sportDetailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // Modal oynani yopish
  function closeSportModal() {
    sportDetailModal.classList.remove('open');
    sportDetailModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Modal tablarini almashtirish
  function switchModalTab(tabId) {
    modalTabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === tabId);
    });
  }

  // Murabbiylar ro'yxatini render qilish
  function renderModalCoaches(sport) {
    modalCoachesList.innerHTML = '';
    sport.coaches.forEach(coach => {
      const coachCard = document.createElement('div');
      coachCard.className = 'coach-full-card';

      // Vaqtlar pillari (Boshlanish va tugash vaqtlari)
      const timingPills = coach.schedule.map(sch => `
        <div class="timing-pill">
          <span>⏰ ${sch.time}</span>
          <span style="color: var(--text-secondary); font-size: 11px;">(${sch.label})</span>
          <span style="color: var(--accent-amber); font-size: 11px;">• ${sch.days}</span>
        </div>
      `).join('');

      // Sig'im ko'rsatkichi (kamida 30 tadan kam bo'lmasin)
      const remainingSlots = coach.capacity - coach.enrolled;

      coachCard.innerHTML = `
        <div class="coach-photo-box">
          <img src="${coach.photo}" alt="${coach.name}" class="coach-photo-img" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'">
          <div class="coach-certified-icon" title="Sertifikatlangan mutaxassis">✓</div>
        </div>

        <div class="coach-info-box">
          <div>
            <div class="coach-name">${coach.name}</div>
            <div class="coach-role-txt">${coach.role}</div>
          </div>

          <div class="coach-meta-badges">
            <span class="coach-badge-item age-badge">
              🎂 Yoshi: <strong>${coach.age} yosh</strong>
            </span>
            <span class="coach-badge-item">
              🏅 Tajriba: <strong>${coach.experience.split(',')[0]}</strong>
            </span>
            <span class="coach-badge-item capacity-badge">
              👥 Guruh sig'imi: <strong>${coach.capacity} kishi (30 tadan kam emas)</strong>
            </span>
            <span class="coach-badge-item" style="color: var(--accent-cyan); border-color: rgba(0,242,254,0.3);">
              🎟️ Bo'sh o'rin: <strong>${remainingSlots} ta qoldi</strong>
            </span>
          </div>

          <p class="coach-experience-txt">
            <strong>Yutuq va malaka:</strong> ${coach.experience}
          </p>

          <div class="coach-timings-strip">
            <div class="timing-strip-title">Mashg'ulot Boshlanish va Tugash Vaqtlari:</div>
            <div class="timing-pills-row">
              ${timingPills}
            </div>
          </div>
        </div>

        <div class="coach-action-box">
          <button class="btn-select-coach" data-coach-id="${coach.id}">
            ✍️ Shu Murabbiyga Yozilish
          </button>
        </div>
      `;

      // Murabbiyga yozilish tugmasi
      coachCard.querySelector('.btn-select-coach').addEventListener('click', () => {
        populateBookingFormSelects(sport, coach.id);
        switchModalTab('tab-booking');
      });

      modalCoachesList.appendChild(coachCard);
    });
  }

  // Bron formasi dropdownlarini to'ldirish
  function populateBookingFormSelects(sport, preselectedCoachId = null) {
    bookingCoachSelect.innerHTML = '';
    sport.coaches.forEach(coach => {
      const opt = document.createElement('option');
      opt.value = coach.id;
      opt.textContent = `${coach.name} (${coach.age} yosh, ${coach.capacity} kishilik guruh)`;
      if (preselectedCoachId && coach.id === preselectedCoachId) {
        opt.selected = true;
      }
      bookingCoachSelect.appendChild(opt);
    });

    // Vaqt oralig'ini yangilash
    updateTimeSlotsForSelectedCoach(sport);
  }

  // Tanlangan murabbiy uchun vaqt oraliqlarini yangilash
  function updateTimeSlotsForSelectedCoach(sport) {
    const selectedCoachId = bookingCoachSelect.value;
    const coach = sport.coaches.find(c => c.id === selectedCoachId) || sport.coaches[0];
    if (!coach) return;

    bookingTimeSlot.innerHTML = '';
    coach.schedule.forEach((sch, idx) => {
      const opt = document.createElement('option');
      opt.value = `${sch.time} | ${sch.days}`;
      opt.textContent = `⏰ ${sch.time} — ${sch.label} (${sch.days})`;
      if (idx === 0) opt.selected = true;
      bookingTimeSlot.appendChild(opt);
    });

    // Guruh sig'imi va bo'sh o'rinlar hisobi (30 tadan kam bo'lmasin)
    const pct = Math.round((coach.enrolled / coach.capacity) * 100);
    const available = coach.capacity - coach.enrolled;
    capacityAlertText.innerHTML = `
      <strong>${coach.name}</strong> guruhida jami sig'im: <strong>${coach.capacity} kishi</strong>. Bo'sh joylar: <strong>${available} ta</strong>
    `;
    capacityFillBar.style.width = `${pct}%`;
  }

  // Murabbiy o'zgarganda vaqtlarni qayta hisoblash
  bookingCoachSelect.addEventListener('change', () => {
    if (activeSport) {
      updateTimeSlotsForSelectedCoach(activeSport);
    }
  });

  // Modal Tab navigatsiyasi hodisasi
  modalTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchModalTab(btn.dataset.tab);
    });
  });

  if (btnGoToBookingTab) {
    btnGoToBookingTab.addEventListener('click', () => {
      switchModalTab('tab-coaches');
    });
  }

  // ONLAYN BRON QILISH FORMASI TOPSHIRILGANDA
  onlineBookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('bookingFullName').value.trim();
    const phone = document.getElementById('bookingPhone').value.trim();
    const birthDate = document.getElementById('bookingBirthDate').value.trim();
    const dateStart = document.getElementById('bookingDateStart').value;
    const notes = document.getElementById('bookingNotes').value.trim();

    if (!fullName || !phone || !dateStart) {
      showToast('Iltimos, barcha majburiy maydonlarni to\'ldiring!', 'error');
      return;
    }

    if (!activeSport) return;

    const selectedCoachId = bookingCoachSelect.value;
    const coach = activeSport.coaches.find(c => c.id === selectedCoachId) || activeSport.coaches[0];
    const timeVal = bookingTimeSlot.value;
    const [timeInterval, days] = timeVal.split('|').map(s => s.trim());

    // Yangi bron obyekti
    const bookingId = `SP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking = {
      id: bookingId,
      sportId: activeSport.id,
      sportName: activeSport.name,
      sportIcon: activeSport.icon,
      coachId: coach.id,
      coachName: coach.name,
      coachAge: coach.age,
      coachPhoto: coach.photo,
      capacity: coach.capacity,
      fullName: fullName,
      phone: phone,
      birthDate: birthDate,
      timeInterval: timeInterval,
      days: days,
      dateStart: dateStart,
      location: activeSport.location,
      price: activeSport.price,
      notes: notes,
      createdAt: new Date().toLocaleString('uz-UZ')
    };

    // LocalStorage ga saqlash
    const list = getStoredBookings();
    list.unshift(newBooking);
    saveStoredBookings(list);

    // Chiptani to'ldirish va ko'rsatish
    document.getElementById('ticketSportIcon').textContent = activeSport.icon;
    document.getElementById('ticketSportName').textContent = activeSport.name;
    document.getElementById('ticketId').textContent = `#${bookingId}`;
    document.getElementById('ticketUserName').textContent = fullName;
    document.getElementById('ticketUserPhone').textContent = phone;
    document.getElementById('ticketCoachName').textContent = `${coach.name} (${coach.age} yosh)`;
    document.getElementById('ticketTimeInterval').textContent = timeInterval;
    document.getElementById('ticketDays').textContent = days;
    document.getElementById('ticketCapacity').textContent = `${coach.capacity} kishilik guruh`;
    document.getElementById('ticketLocation').textContent = activeSport.location;

    bookingFormContainer.style.display = 'none';
    ticketGeneratedBox.style.display = 'block';

    showToast(`Tabriklaymiz! "${activeSport.name}" bo'yicha broningiz tasdiqlandi!`, 'success');
  });

  // Chiptani chop etish
  btnPrintTicket.addEventListener('click', () => {
    window.print();
  });

  // Yangi bron qilish tugmasi
  btnNewBookingAgain.addEventListener('click', () => {
    bookingFormContainer.style.display = 'block';
    ticketGeneratedBox.style.display = 'none';
    onlineBookingForm.reset();
  });

  // MENING BRONLARIM DRAWERINI RENDER QILISH
  function renderBookingsDrawer() {
    const list = getStoredBookings();
    if (list.length === 0) {
      drawerBookingsList.innerHTML = `
        <div class="empty-bookings-box">
          <div style="font-size: 48px; margin-bottom: 12px;">📭</div>
          <h4 style="color: var(--text-main); margin-bottom: 6px;">Hozircha faol bronlar yo'q</h4>
          <p style="font-size: 13px; color: var(--text-secondary);">
            54 ta sport turidan birini tanlab, uyda o'tirgan holda onlayn ro'yxatdan o'ting!
          </p>
        </div>
      `;
      return;
    }

    drawerBookingsList.innerHTML = '';
    list.forEach(item => {
      const bCard = document.createElement('div');
      bCard.className = 'booking-item-card';

      bCard.innerHTML = `
        <div class="booking-item-header">
          <div class="booking-item-sport">
            <span>${item.sportIcon}</span>
            <span>${item.sportName}</span>
          </div>
          <span class="booking-item-badge">✓ Faol Bron</span>
        </div>

        <div class="booking-item-meta">
          <div>Murabbiy: <strong>${item.coachName}</strong></div>
          <div>Vaqti: <strong style="color: var(--accent-cyan);">${item.timeInterval}</strong></div>
          <div>Kunlari: <strong>${item.days}</strong></div>
          <div>Boshlanish sanasi: <strong>${item.dateStart}</strong></div>
          <div>Bron ID: <span style="font-family: monospace; color: var(--accent-emerald);">#${item.id}</span></div>
        </div>

        <div class="booking-item-actions">
          <button class="btn-cancel-booking" data-id="${item.id}">❌ Bronni bekor qilish</button>
          <button class="cat-pill active" style="font-size: 11px; padding: 4px 12px;" data-id="${item.id}" id="btnViewPass-${item.id}">Chiptani ko'rish</button>
        </div>
      `;

      // Bekor qilish tugmasi
      bCard.querySelector('.btn-cancel-booking').addEventListener('click', () => {
        if (confirm(`Rostdan ham #${item.id} raqamli bronni bekor qilmoqchimisiz?`)) {
          const updated = getStoredBookings().filter(b => b.id !== item.id);
          saveStoredBookings(updated);
          renderBookingsDrawer();
          showToast('Bron muvaffaqiyatli bekor qilindi', 'info');
        }
      });

      // Chiptani ko'rish tugmasi
      bCard.querySelector(`#btnViewPass-${item.id}`).addEventListener('click', () => {
        bookingsDrawer.classList.remove('open');
        openSportModal(item.sportId, item.coachId);
        switchModalTab('tab-booking');
        
        // Chiptani chiqarish
        document.getElementById('ticketSportIcon').textContent = item.sportIcon;
        document.getElementById('ticketSportName').textContent = item.sportName;
        document.getElementById('ticketId').textContent = `#${item.id}`;
        document.getElementById('ticketUserName').textContent = item.fullName;
        document.getElementById('ticketUserPhone').textContent = item.phone;
        document.getElementById('ticketCoachName').textContent = item.coachName;
        document.getElementById('ticketTimeInterval').textContent = item.timeInterval;
        document.getElementById('ticketDays').textContent = item.days;
        document.getElementById('ticketCapacity').textContent = `${item.capacity} kishilik guruh`;
        document.getElementById('ticketLocation').textContent = item.location;

        bookingFormContainer.style.display = 'none';
        ticketGeneratedBox.style.display = 'block';
      });

      drawerBookingsList.appendChild(bCard);
    });
  }

  // Drawer ochish/yopish
  btnOpenBookings.addEventListener('click', () => {
    renderBookingsDrawer();
    bookingsDrawer.classList.add('open');
    bookingsDrawer.setAttribute('aria-hidden', 'false');
  });

  drawerCloseBtn.addEventListener('click', () => {
    bookingsDrawer.classList.remove('open');
    bookingsDrawer.setAttribute('aria-hidden', 'true');
  });

  bookingsDrawer.addEventListener('click', (e) => {
    if (e.target === bookingsDrawer) {
      bookingsDrawer.classList.remove('open');
      bookingsDrawer.setAttribute('aria-hidden', 'true');
    }
  });

  // Modal yopish hodisalari
  modalCloseBtn.addEventListener('click', closeSportModal);
  sportDetailModal.addEventListener('click', (e) => {
    if (e.target === sportDetailModal) {
      closeSportModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSportModal();
      bookingsDrawer.classList.remove('open');
    }
  });

  // Qidiruv maydoni hodisalari
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    searchClearBtn.style.display = searchQuery ? 'block' : 'none';
    renderSports();
  });

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClearBtn.style.display = 'none';
    renderSports();
    searchInput.focus();
  });

  // Saralash o'zgarganda
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderSports();
  });

  // Footer toifalar havolalari
  document.querySelectorAll('.footer-cat-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.dataset.cat;
      currentCategory = cat;
      document.querySelectorAll('.cat-pill').forEach(b => {
        b.classList.toggle('active', b.dataset.category === cat);
      });
      window.scrollTo({ top: document.getElementById('controlsPanel').offsetTop - 60, behavior: 'smooth' });
      renderSports();
    });
  });

  // Toast bildirishnoma ko'rsatish
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? '✅' : (type === 'error' ? '⚠️' : 'ℹ️');

    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // Dasturni ishga tushirish
  initCategories();
  initStats();
  renderSports();
  updateBookingsBadge();
});
