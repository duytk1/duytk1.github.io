/**
 * Static portfolio — no React/Vite. Edit `projects` and constants below.
 * Asset paths are relative to the site root (works on GitHub Pages and local file://).
 */

const CONTACT_EMAIL = "duytk.job@gmail.com";
const CONTACT_EMAIL_SUBJECT = "Portfolio inquiry";

const projects = [
  {
    title: "SharkBot",
    description:
      "Sharkbot is a streaming assistant for Twitch and YouTube: a python based bot that handles chat, commands, events, optional AI replies and TTS in real time, and can bridge chat between platforms. It pairs with a small Flask app that serves OBS-friendly pages (chat overlay with 7TV emotes, TTS tools, links manager) and APIs backed by SQLite, plus optional Spotify “now playing” for overlays.",
    features: [
      "Custom commands",
      "Chat moderation",
      "Ad notifications",
      "Spotify integration",
      "Text to speech",
    ],
    featureImages: [
      "images/sharkbot-custom-commands.png",
      "images/sharkbot-chat-moderation.png",
      "images/sharkbot-ad-notifications.png",
      "images/sharkbot-spotify-integration.png",
      "images/sharkbot-text-to-speech.png",
    ],
    tags: ["Python", "JavaScript", "API", "SQL"],
    githubUrl: "https://github.com/duytk1/sharkbot",
    videoUrl: "videos/sharkbot-demo.mp4",
  },
  {
    title: "MineSweeper",
    description:
      "This is a desktop Minesweeper game in Java with a Swing GUI grid, mines, left-click to reveal, right-click to flag and safe first click.",
    features: [
      "Fully functioning board",
      "Custom sound effects",
      "Status notifications",
      "Score counter",
    ],
    featureImages: [
      "images/minesweeper-board.png",
      "images/minesweeper-custom-sound-effect.png",
      "images/minesweeper-status-notifications.png",
      "images/minesweeper-score-counter.png",
    ],
    tags: ["Java", "swing", "GUI", "OOP"],
    githubUrl: "https://github.com/duytk1/minesweeper",
    videoUrl: "videos/minesweeper-demo.mp4",
  },
  {
    title: "Project Three",
    description: "",
    features: [],
    featureImages: [],
    tags: [],
    githubUrl: "#",
    videoUrl: "videos/project-three-demo.mp4",
  },
  {
    title: "Project Four",
    description: "",
    features: [],
    featureImages: [],
    tags: [],
    githubUrl: "#",
    videoUrl: "videos/project-four-demo.mp4",
  },
];

function buildFeatureShowcase(features, featureImages) {
  const total = Math.min(features.length, featureImages.length);
  if (total === 0) return null;

  const wrap = document.createElement("div");
  wrap.className = "feature-showcase";

  const frame = document.createElement("div");
  frame.className = "feature-image-frame";
  const img = document.createElement("img");
  img.className = "feature-image";
  img.alt = "";
  frame.appendChild(img);

  const list = document.createElement("ul");
  list.className = "feature-list";

  let active = 0;

  function setActive(i) {
    active = i;
    img.src = featureImages[active];
    img.alt = `${features[active]} screenshot`;
    list.querySelectorAll("li").forEach((li, idx) => {
      li.classList.toggle("feature-active", idx === active);
    });
  }

  features.slice(0, total).forEach((feature, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "feature-item-button";
    btn.textContent = feature;
    btn.addEventListener("click", () => setActive(index));
    li.appendChild(btn);
    list.appendChild(li);
  });

  wrap.appendChild(list);
  wrap.appendChild(frame);
  setActive(0);

  if (total >= 2) {
    window.setInterval(() => {
      setActive((active + 1) % total);
    }, 3500);
  }

  return wrap;
}

function buildProjectCard(project, onOpenVideo) {
  const article = document.createElement("article");
  article.className = "project-card";

  const h2 = document.createElement("h2");
  h2.textContent = project.title;
  article.appendChild(h2);

  const desc = document.createElement("p");
  desc.textContent = project.description;
  article.appendChild(desc);

  const fi = project.featureImages ?? [];
  const ft = project.features ?? [];
  if (ft.length > 0 && fi.length > 0) {
    const ftLabel = document.createElement("p");
    ftLabel.className = "feature-title";
    ftLabel.textContent = "Featuring:";
    article.appendChild(ftLabel);
    const showcase = buildFeatureShowcase(ft, fi);
    if (showcase) article.appendChild(showcase);
  }

  const tags = document.createElement("ul");
  tags.className = "tags";
  (project.tags ?? []).forEach((tag) => {
    const li = document.createElement("li");
    li.textContent = tag;
    tags.appendChild(li);
  });
  article.appendChild(tags);

  const links = document.createElement("div");
  links.className = "links";

  const demoBtn = document.createElement("button");
  demoBtn.type = "button";
  demoBtn.className = "link-button";
  demoBtn.textContent = "Live Demo";
  demoBtn.addEventListener("click", () =>
    onOpenVideo({ title: project.title, url: project.videoUrl })
  );
  links.appendChild(demoBtn);

  const gh = document.createElement("a");
  gh.href = project.githubUrl;
  gh.className = "link-button";
  gh.target = "_blank";
  gh.rel = "noreferrer";
  gh.textContent = "GitHub";
  links.appendChild(gh);

  article.appendChild(links);
  return article;
}

function buildHeader() {
  const header = document.createElement("header");
  header.className = "site-header";
  const row = document.createElement("div");
  row.className = "container site-header-row";

  const h1 = document.createElement("h1");
  h1.className = "site-title";
  h1.append(document.createTextNode("David Truong "));
  const flag = document.createElement("img");
  flag.src = "images/canadian-flag.png";
  flag.alt = "Canada";
  flag.className = "site-title-flag";
  h1.appendChild(flag);

  const contact = document.createElement("div");
  contact.className = "site-header-contact";

  const phone = document.createElement("p");
  phone.className = "site-tagline";
  phone.textContent = "Phone: +1 (343) 463-9602";

  const emailP = document.createElement("p");
  emailP.className = "site-tagline";
  emailP.append("Email: ");
  const a = document.createElement("a");
  a.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_EMAIL_SUBJECT)}`;
  a.className = "site-contact-link";
  a.textContent = CONTACT_EMAIL;
  emailP.appendChild(a);

  contact.append(phone, emailP);
  row.append(h1, contact);
  header.appendChild(row);
  return header;
}

function setupVideoModal() {
  const backdrop = document.createElement("div");
  backdrop.className = "video-modal-backdrop";
  backdrop.hidden = true;
  backdrop.setAttribute("role", "presentation");

  const modal = document.createElement("div");
  modal.className = "video-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");

  const head = document.createElement("div");
  head.className = "video-modal-header";
  const title = document.createElement("h3");
  title.id = "video-modal-title";
  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "close-button";
  closeBtn.setAttribute("aria-label", "Close video player");
  closeBtn.textContent = "x";
  head.append(title, closeBtn);

  const video = document.createElement("video");
  video.className = "demo-video";
  video.setAttribute("controls", "");
  const source = document.createElement("source");
  source.type = "video/mp4";
  video.appendChild(source);
  video.append(" Your browser does not support the video tag.");

  modal.append(head, video);
  backdrop.appendChild(modal);

  function close() {
    backdrop.hidden = true;
    video.pause();
    source.removeAttribute("src");
    video.load();
    document.removeEventListener("keydown", onKey);
  }

  function onKey(e) {
    if (e.key === "Escape") close();
  }

  backdrop.addEventListener("click", close);
  modal.addEventListener("click", (e) => e.stopPropagation());
  closeBtn.addEventListener("click", close);

  function open({ title: t, url }) {
    title.textContent = `${t} Demo`;
    source.src = url;
    video.load();
    backdrop.hidden = false;
    video.play().catch(() => {});
    document.addEventListener("keydown", onKey);
  }

  document.body.appendChild(backdrop);
  return { open, close };
}

function main() {
  const root = document.getElementById("root");
  if (!root) return;

  const { open: openVideo } = setupVideoModal();

  const frag = document.createDocumentFragment();
  frag.appendChild(buildHeader());

  const mainEl = document.createElement("main");
  mainEl.className = "container";
  const section = document.createElement("section");
  section.className = "projects";
  section.setAttribute("aria-label", "Projects");

  projects.forEach((project) => {
    section.appendChild(buildProjectCard(project, openVideo));
  });

  mainEl.appendChild(section);
  frag.appendChild(mainEl);
  root.appendChild(frag);
}

main();
