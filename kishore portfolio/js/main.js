/* ==========================================================================
   Kishore Kumar A - Portfolio Interactive Logic
   ========================================================================== */

// --- Project Data Source (Mirrors PDF Content Exactly) ---
const projectsData = {
  digitalTwin: {
    id: 'digitalTwin',
    category: 'automation',
    isFeatured: true,
    eyebrow: 'Featured Course Project · Process Control',
    title: 'Digital Twin for Level Process',
    duration: 'Dec 2025 – Apr 2026',
    problem: 'Industrial level-control systems are usually tuned directly on live hardware, which is risky — a bad PID setting can damage equipment before anyone notices. For our Process Control course project, my team and I built a digital twin of a single-tank level process to see if control logic could be validated safely in a virtual environment first.',
    description: 'We spent the first few weeks comparing platforms — Factory I/O, Node-RED, LabVIEW, CODESYS — before settling on a Siemens S7-1200 PLC paired with Factory I/O. My part of the build was the integration layer: getting the Siemens S7 communication driver configured inside Factory I/O and mapping the PLC\'s tags to the virtual tank, fill valve, and discharge valve, so commands from the physical PLC actually moved the virtual process in real time. By the end, we had real-time bidirectional sync working — filling and draining on the PLC was accurately mirrored in Factory I/O, and the PID loop reached a stable "tuned" state, confirmed through trend plots in TIA Portal.',
    architecture: [
      'Factory I/O — 3D Virtual Single-Tank Process Plant',
      'Siemens S7-1200 PLC (Physical Controller Hardware)',
      'Siemens S7 Communication Driver & Tag Mapping Layer',
      'TIA Portal — PID Closed-Loop Algorithm & Trend Plots',
      'SCADA / HMI Real-Time Monitoring Interface'
    ],
    tech: ['Siemens S7-1200', 'TIA Portal', 'Factory I/O', 'PID Control', 'HMI', 'Process Control'],
    github: 'https://github.com/KishoreKumarA13/Digital-Twin-for-Level-Process',
    thumbnail: 'assets/digitalTwin_1.jpg',
    images: [
      { src: 'assets/digitalTwin_1.jpg', alt: 'Digital Twin PID loop tuning parameters and trend plots in TIA Portal' },
      { src: 'assets/digitalTwin_2.jpg', alt: 'Factory I/O 3D virtual tank system and tag mapping interface' }
    ]
  },

  smartPump: {
    id: 'smartPump',
    category: 'embedded',
    isFeatured: true,
    eyebrow: 'Featured Hardware Project · IoT Automation',
    title: 'IoT-Based Soil Moisture Monitoring & Pump Control',
    duration: 'Oct 2025 – Nov 2025',
    problem: 'Manual irrigation means someone has to physically check soil conditions and switch a pump on or off, which wastes both time and water when done inconsistently. I built a system that handles this two ways — manual control from a phone, and fully automatic control based on soil dryness — using an ESP32.',
    description: 'The circuit pairs the ESP32 with a relay module for safe switching and a soil moisture sensor on an analog input. My focus was the hardware side: working through the ESP32\'s GPIO, ADC, and power pins to wire the relay and sensor correctly, and understanding how its Wi-Fi connection to Blynk ties into controlling a physical pump safely. The firmware uses a Blynk virtual button for manual control (with an optional countdown timer) alongside a background routine that checks moisture every few seconds and switches the pump automatically once it drops below a set threshold. I tested it on a breadboard with a live potted plant rather than just simulating it, and both modes — manual and automatic — worked independently without interfering with each other.',
    architecture: [
      'Analog Soil Moisture Sensor Probe Array',
      'ESP32 Microcontroller (ADC & GPIO Management)',
      'Optoisolated Relay Module for Safe Pump Switching',
      'Blynk IoT Cloud Platform & Mobile Dashboard',
      'Automated Thresholding Routine & Countdown Timer'
    ],
    tech: ['ESP32', 'Soil Moisture Sensor', 'Blynk IoT', 'Relay-Controlled Pump', 'C / C++', 'Hardware Breadboard Testing'],
    github: 'https://github.com/KishoreKumarA13/IoT-Based-Soil-Moisture-Monitoring-and-Pump-Control',
    thumbnail: 'assets/smartPump_1.jpg',
    images: [
      { src: 'assets/smartPump_1.jpg', alt: 'ESP32 smart pump hardware breadboard setup with live potted plant' },
      { src: 'assets/smartPump_2.jpg', alt: 'Circuit wiring diagram for ESP32, sensor probe, and relay module' }
    ]
  },

  smartCrop: {
    id: 'smartCrop',
    category: 'ongoing',
    isFeatured: false,
    eyebrow: 'Ongoing Research Project · CMRG Government Funded',
    title: 'Smart Crop Prediction & Monitoring System using STM32 & ESP32',
    duration: 'Present',
    problem: 'Traditional soil analysis is slow, expensive, and fails to give farmers actionable real-time insights for crop selection and balanced fertilization, causing reduced yields and soil degradation.',
    description: 'Developing a smart agriculture platform using STM32, ESP32, and an 8-in-1 soil sensor to acquire real-time soil and environmental parameters, with long-range wireless data transmission and cloud-based remote monitoring. Integrating a Machine Learning model to predict suitable crops and generate fertilizer recommendations based on soil characteristics, while enhancing the existing prototype into a scalable precision agriculture solution through intelligent decision support.',
    architecture: [
      'Industrial 8-in-1 NPK Soil Sensor (RS-485 Modbus)',
      'STM32 Microcontroller Node (Data Acquisition & Validation)',
      'ESP32 Gateway Node with LoRa Long-Range Wireless Transmission',
      'Cloud-Based Telemetry & Remote Monitoring Platform',
      'Machine Learning Model for Crop & Fertilizer Recommendations'
    ],
    tech: ['STM32', 'ESP32', '8-in-1 Soil Sensor', 'Machine Learning', 'Cloud Monitoring', 'RS-485 / Modbus', 'LoRa'],
    github: 'https://github.com/KishoreKumarA13/Smart-Crop-Prediction-and-Monitoring-System',
    thumbnail: 'assets/smartCrop_1.jpg',
    images: [
      { src: 'assets/smartCrop_1.jpg', alt: 'System architecture diagram for STM32 + ESP32 smart crop platform' },
      { src: 'assets/smartCrop_2.jpg', alt: 'Experimental laboratory sensor testing and microcontroller interface' },
      { src: 'assets/smartCrop_3.jpg', alt: 'Machine Learning prediction dashboard and crop recommendation interface' }
    ]
  },

  assemblyQC: {
    id: 'assemblyQC',
    category: 'mini',
    isFeatured: false,
    eyebrow: 'Mini Project · Industrial Automation Systems',
    title: 'Automated Assembly and Quality Check Station',
    duration: 'Mar 2026',
    problem: 'Manual inspection on assembly lines is slow and inconsistent. For this Industrial Automation Systems project, my team and I simulated an automated station where parts get assembled, inspected for alignment, and sorted — accepted parts move on, rejected ones get diverted.',
    description: 'My part was building the Factory I/O scene itself: setting up the assembly and quality-check station with its sensors, the pick-and-place mechanism, the conveyor sections, and the reject bin, so the physical layout matched what the control logic needed to drive. The full cycle ran correctly in simulation, with working counters tracking accepted and rejected parts throughout.',
    architecture: [
      'Factory I/O 3D Industrial Assembly Environment',
      'Dual Two-Axis Pick-and-Place Pneumatic Manipulators',
      'Vision / Optical Alignment & Proximity Sensors',
      'Motorized Conveyors & Pneumatic Diverter Gate',
      'Control I/O Tag-Based Sequential State Logic Engine'
    ],
    tech: ['Factory I/O', 'Control I/O', 'Automation Logic', 'Pick-and-Place Robotics', 'Conveyor Sorting'],
    github: 'https://github.com/KishoreKumarA13/Automated-Assembly-and-Quality-Check-Station',
    thumbnail: 'assets/assemblyQC_1.jpg',
    images: [
      { src: 'assets/assemblyQC_1.jpg', alt: 'Factory I/O virtual assembly line with pick-and-place robots and reject bins' },
      { src: 'assets/assemblyQC_2.jpg', alt: 'Control I/O tag-based sequential logic engine driving the station' }
    ]
  },

  voltmeter: {
    id: 'voltmeter',
    category: 'mini',
    isFeatured: false,
    eyebrow: 'Hardware Mini Project · Analog Electronics',
    title: 'Multi-Range DC Voltage Measurement Circuit Using LM741',
    duration: 'Apr 2025',
    problem: 'This was my first hardware mini-project in college, and I didn\'t have much circuit-building experience going in. The goal was straightforward on paper: design a single op-amp circuit that could measure DC voltage across four different ranges — 1V, 5V, 10V, and 13V — using switchable gain.',
    description: 'We built it around an LM741 in non-inverting configuration, with a fixed feedback resistor and four selectable gain resistors chosen through a rotary switch, splitting the hands-on wiring and PCB soldering work between us. Most of the real learning was in the debugging — figuring out why a calculated gain wasn\'t showing up correctly on the meter, and tracing it back to a wiring issue rather than a design flaw. Once it was working, the measured output tracked the calculated values closely, with error between 0.82% and 1.13% across all four ranges — a solid outcome for a first attempt, and a useful lesson in how much of "getting a circuit to work" comes down to careful assembly, not just correct theory.',
    architecture: [
      'Rotary Switch Gain Selection Network (R1 to R4)',
      'LM741 Operational Amplifier (Non-Inverting Configuration)',
      'Precision Resistor Voltage Divider Feedback Loop',
      'Analog Meter Calibration Against Precision DC Supply & DMM'
    ],
    tech: ['LM741', 'Op-Amp Design', 'Proteus', 'Hardware Testing', 'PCB Soldering', 'Calibration'],
    github: 'https://github.com/KishoreKumarA13/Low-Voltage-DC-Voltmeter-Using-741-OpAmp',
    thumbnail: 'assets/voltmeter_1.jpg',
    images: [
      { src: 'assets/voltmeter_1.jpg', alt: 'Multi-range voltmeter circuit schematic diagram using LM741 op-amp' },
      { src: 'assets/voltmeter_2.jpg', alt: 'Bench calibration setup with precision DC power supply and multimeter' }
    ]
  },

  mazeSolver: {
    id: 'mazeSolver',
    category: 'mini',
    isFeatured: false,
    eyebrow: 'Digital Systems Lab · Hardware Logic',
    title: 'Maze Solver Robot using Digital Logic',
    duration: 'Apr 2025',
    problem: 'I wanted to see how far pure combinational logic could go for autonomous navigation — no microcontroller, no software, just gates and truth tables. For our Digital Systems Lab project, my partner and I built a robot that uses two IR sensors (front and right) to detect obstacles and decide its next move entirely through Boolean logic.',
    description: 'We worked out the truth table for the four possible sensor states and derived the logic driving each motor, implemented with a single NOT gate IC feeding an L293D motor driver. My part was the hardware integration — wiring the sensors, the logic IC, the motor driver, and the two DC motors together on the chassis so the derived logic actually reached the motors correctly. The robot executed all four defined behaviors correctly: moving forward when clear, turning slightly left when the right side was blocked, turning right when the front was blocked, and reversing with a left turn when both were blocked.',
    architecture: [
      'Dual Infrared (IR) Optical Obstacle Sensors (Front & Right)',
      'Combinational Boolean Logic Circuit (NOT Gate IC)',
      'L293D Dual H-Bridge Motor Driver IC',
      'Dual DC Gear Motors on Two-Wheel Robot Chassis',
      'Direct State-Table Hardware Navigation'
    ],
    tech: ['IR Sensors', 'Digital Logic Gates', 'Motor Driver Circuitry', 'Boolean Logic', 'L293D', 'Hardware Integration'],
    github: 'https://github.com/KishoreKumarA13',
    thumbnail: 'assets/mazeSolver_1.jpg',
    images: [
      { src: 'assets/mazeSolver_1.jpg', alt: 'Hardware prototype of the digital logic maze solver robot with IR sensors and L293D' }
    ]
  }
};

// --- Certifications Data (From PDF) ---
const certsData = {
  microSensors: {
    title: 'A Brief Introduction to Micro-Sensors',
    issuer: 'NPTEL / IISER Bhopal',
    badge: 'Elite Silver Certificate (85%) · Top 5% Rank',
    description: 'Elite Silver Certificate (85%), ranked among the Top 5% of course participants nationwide. Comprehensive curriculum covering the fundamentals and applications of MEMS (Micro-Electro-Mechanical Systems) in precision pressure measurement, micro-machining, capacitive sensing, and accelerometers.',
    link: 'https://drive.google.com/file/d/18BsZk3LOJcLbLG7ApIjo7eaNUoaTtmKZ/view?usp=drivesdk'
  },
  industrialAutomation: {
    title: '3-Day Hands-On Skill Development Programme — Industrial Automation Using Siemens PLC and HMI',
    issuer: 'Skill Development Programme',
    badge: 'Hands-On Certified',
    description: 'Hands-on intensive exposure to Siemens S7 PLC hardware architecture, HMI screen configuration, ladder logic programming, and tag interfacing — practical knowledge that fed directly into building the Digital Twin for Level Process project.',
    link: 'https://drive.google.com/file/d/1rFJfYAfq9FMvTG1Q5vCPcTfss-c2l-Hn/view?usp=drivesdk'
  },
  smartBMS: {
    title: '3-Day Hands-On Skill Development Programme — Application of AI in Smart BMS for EV',
    issuer: 'Skill Development Programme',
    badge: 'EV & BMS Certified',
    description: 'Covered what a Battery Management System (BMS) is and where it is applied in modern electric mobility, how State of Charge (SOC) and State of Health (SOH) are estimated accurately using Kalman filters, and the fundamentals of autonomous vehicle powertrain architectures.',
    link: 'https://drive.google.com/file/d/1WyaCACNGPNQTCP7ri6qJvZ66owmFWj6b/view?usp=drivesdk'
  }
};

// --- Lightbox Gallery State ---
let currentGalleryImages = [];
let currentGalleryIndex = 0;

// --- DOM Loaded Setup ---
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initProjectTabs();
  initContactCopy();
  initKeyboardNav();
});

// --- Navbar Scroll Effect ---
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy active link highlighting
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// --- Mobile Navigation Menu ---
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.nav-menu');
  const links = document.querySelectorAll('.nav-link');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });

    links.forEach(l => {
      l.addEventListener('click', () => {
        menu.classList.remove('open');
      });
    });
  }
}

// --- Project Filtering Tabs ---
function initProjectTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.project-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        const isFeatured = card.getAttribute('data-featured') === 'true';

        if (filter === 'all') {
          card.style.display = 'flex';
        } else if (filter === 'featured') {
          card.style.display = isFeatured ? 'flex' : 'none';
        } else if (filter === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// --- Project Detail Modal ---
function openProjectModal(projectId) {
  const proj = projectsData[projectId];
  if (!proj) return;

  document.getElementById('pModalEyebrow').textContent = proj.eyebrow;
  document.getElementById('pModalTitle').textContent = proj.title;
  document.getElementById('pModalDuration').textContent = proj.duration;
  document.getElementById('pModalProblem').textContent = proj.problem;
  document.getElementById('pModalDesc').textContent = proj.description;

  // Architecture flow
  const archContainer = document.getElementById('pModalArch');
  archContainer.innerHTML = '';
  proj.architecture.forEach((step, idx) => {
    const stepEl = document.createElement('div');
    stepEl.className = 'arch-step-box';
    stepEl.innerHTML = `<span class="arch-step-num">${idx + 1}</span><span>${step}</span>`;
    archContainer.appendChild(stepEl);
  });

  // Tech Chips
  const chipsContainer = document.getElementById('pModalChips');
  chipsContainer.innerHTML = '';
  proj.tech.forEach(t => {
    const chip = document.createElement('span');
    chip.className = 'p-chip';
    chip.textContent = t;
    chipsContainer.appendChild(chip);
  });

  // Thumbnails for Gallery
  const imgGrid = document.getElementById('pModalImgGrid');
  imgGrid.innerHTML = '';
  if (proj.images && proj.images.length > 0) {
    proj.images.forEach((img, idx) => {
      const thumb = document.createElement('div');
      thumb.className = 'modal-img-thumb';
      thumb.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
      thumb.addEventListener('click', () => {
        openLightbox(proj.images, idx);
      });
      imgGrid.appendChild(thumb);
    });
    document.getElementById('pModalImagesWrap').style.display = 'block';
  } else {
    document.getElementById('pModalImagesWrap').style.display = 'none';
  }

  // Action buttons
  const actionsContainer = document.getElementById('pModalActions');
  actionsContainer.innerHTML = `
    <button class="btn btn-primary btn-sm" onclick="openLightbox(projectsData['${proj.id}'].images, 0)">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
      View High-Res Schematics
    </button>
    ${proj.github ? `
      <a class="btn btn-outline btn-sm" href="${proj.github}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        GitHub Repository
      </a>
    ` : ''}
    <button class="btn btn-outline btn-sm" onclick="closeProjectModal()">Close</button>
  `;

  document.getElementById('projectModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  document.getElementById('projectModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// --- Lightbox Gallery Controller ---
function openLightbox(imagesArray, startIndex = 0) {
  if (!imagesArray || imagesArray.length === 0) return;
  currentGalleryImages = imagesArray;
  currentGalleryIndex = startIndex;
  updateLightboxContent();

  document.getElementById('lightboxOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightboxOverlay').classList.remove('open');
  // Check if project modal is still open
  if (!document.getElementById('projectModalOverlay').classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function lightboxPrev(e) {
  if (e) e.stopPropagation();
  currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
  updateLightboxContent();
}

function lightboxNext(e) {
  if (e) e.stopPropagation();
  currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = currentGalleryImages[currentGalleryIndex];
  const imgEl = document.getElementById('lightboxImg');
  const captionEl = document.getElementById('lightboxCaption');
  const dotsEl = document.getElementById('lightboxDots');

  imgEl.src = item.src;
  imgEl.alt = item.alt || 'Project visual';
  captionEl.textContent = `${currentGalleryIndex + 1} / ${currentGalleryImages.length} — ${item.alt || ''}`;

  dotsEl.innerHTML = '';
  currentGalleryImages.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = `lightbox-dot ${idx === currentGalleryIndex ? 'active' : ''}`;
    dot.addEventListener('click', (ev) => {
      ev.stopPropagation();
      currentGalleryIndex = idx;
      updateLightboxContent();
    });
    dotsEl.appendChild(dot);
  });
}

// --- Internship Details Modal ---
function openInternshipModal() {
  document.getElementById('internshipModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeInternshipModal() {
  document.getElementById('internshipModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// --- Certification Modal ---
function openCertModal(certKey) {
  const cert = certsData[certKey];
  if (!cert) return;

  document.getElementById('certModalTitle').textContent = cert.title;
  document.getElementById('certModalIssuer').textContent = cert.issuer;
  document.getElementById('certModalBadge').textContent = cert.badge;
  document.getElementById('certModalDesc').textContent = cert.description;
  document.getElementById('certModalLink').href = cert.link;

  document.getElementById('certModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  document.getElementById('certModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// --- Backdrop Click Handlers ---
function handleBackdropClick(event, modalId, closeFunc) {
  if (event.target.id === modalId) {
    closeFunc();
  }
}

// --- Keyboard Navigation (Escape & Arrow Keys) ---
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.getElementById('lightboxOverlay').classList.contains('open')) {
        closeLightbox();
      } else if (document.getElementById('projectModalOverlay').classList.contains('open')) {
        closeProjectModal();
      } else if (document.getElementById('internshipModalOverlay').classList.contains('open')) {
        closeInternshipModal();
      } else if (document.getElementById('certModalOverlay').classList.contains('open')) {
        closeCertModal();
      }
    } else if (document.getElementById('lightboxOverlay').classList.contains('open')) {
      if (e.key === 'ArrowLeft') lightboxPrev();
      if (e.key === 'ArrowRight') lightboxNext();
    }
  });
}

// --- Copy to Clipboard with Toast Notification ---
function copyText(text, label = 'Copied to clipboard!') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label}`);
  }).catch(() => {
    showToast(`Copied: ${text}`);
  });
}

function initContactCopy() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Copied to clipboard!';
      copyText(textToCopy, label);
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}
