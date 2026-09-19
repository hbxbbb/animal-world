(() => {
  const animals = window.ANIMAL_WORLD;
  const regions = ["全部", "非洲", "亚洲", "欧洲", "北美洲", "南美洲", "大洋洲", "极地海洋"];
  const wingCopy = {
    非洲: "草原、裂谷与雨林",
    亚洲: "竹海、高原与季风林",
    欧洲: "针叶林与古老农场",
    北美洲: "大平原与河流",
    南美洲: "雨林、安第斯与湿地",
    大洋洲: "桉树、干旱与奇异单孔目",
    极地海洋: "海冰、鲸歌与远航"
  };

  const els = {
    gallery: document.getElementById("gallery"),
    empty: document.getElementById("empty"),
    filters: document.getElementById("filters"),
    wings: document.getElementById("wing-grid"),
    search: document.getElementById("search-input"),
    result: document.getElementById("result-line"),
    overlay: document.getElementById("overlay"),
    close: document.getElementById("close-sheet"),
    random: document.getElementById("random-btn"),
    heroImage: document.getElementById("hero-image"),
    heroName: document.getElementById("hero-name"),
    heroLatin: document.getElementById("hero-latin"),
    count: document.getElementById("stat-count")
  };

  let region = "全部";
  let query = "";

  const countByRegion = (name) =>
    animals.filter((item) => name === "全部" || item.region === name).length;

  function renderWings() {
    els.wings.innerHTML = regions
      .slice(1)
      .map(
        (name) => `
        <button class="wing" type="button" data-region="${name}">
          <small>展厅</small>
          <strong>${name}</strong>
          <b>${wingCopy[name]} · ${countByRegion(name)} 种</b>
        </button>`
      )
      .join("");
  }

  function renderFilters() {
    els.filters.innerHTML = regions
      .map(
        (name) =>
          `<button class="chip${name === region ? " active" : ""}" type="button" data-region="${name}">${name}</button>`
      )
      .join("");
  }

  function filtered() {
    const q = query.trim().toLowerCase();
    return animals.filter((item) => {
      const regionOk = region === "全部" || item.region === region;
      if (!regionOk) return false;
      if (!q) return true;
      return [item.name, item.latin, item.habitat, item.diet, item.summary]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }

  function renderGallery() {
    const list = filtered();
    els.result.textContent = query
      ? `找到 ${list.length} 种与“${query}”有关的动物`
      : region === "全部"
        ? `馆藏 ${list.length} 种，按大洲慢慢看`
        : `${region}展厅现有 ${list.length} 种`;

    els.empty.hidden = list.length > 0;
    els.gallery.innerHTML = list
      .map(
        (item) => `
        <button class="card" type="button" data-id="${item.id}">
          <img src="${item.thumb || item.image}" alt="${item.name}" loading="lazy" referrerpolicy="no-referrer" />
          <div class="card-body">
            <div class="region">${item.region} · ${item.habitat}</div>
            <h3>${item.name}</h3>
            <p class="latin">${item.latin}</p>
            <p>${item.summary}</p>
            <span class="badge ${item.statusLevel}">${item.status}</span>
          </div>
        </button>`
      )
      .join("");
  }

  function openAnimal(id) {
    const item = animals.find((entry) => entry.id === id);
    if (!item) return;
    document.getElementById("sheet-image").src = item.image;
    document.getElementById("sheet-image").alt = item.name;
    document.getElementById("sheet-image").referrerPolicy = "no-referrer";
    document.getElementById("sheet-region").textContent = `${item.region} / ${item.habitat}`;
    document.getElementById("sheet-name").textContent = item.name;
    document.getElementById("sheet-latin").textContent = item.latin;
    document.getElementById("sheet-story").textContent = item.story;
    document.getElementById("sheet-meta").innerHTML = [
      `食性 ${item.diet}`,
      `保护 ${item.status}`,
      item.region
    ]
      .map((text) => `<li>${text}</li>`)
      .join("");
    document.getElementById("sheet-facts").innerHTML = item.facts
      .map((fact) => `<li>${fact}</li>`)
      .join("");
    els.overlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeSheet() {
    els.overlay.hidden = true;
    document.body.style.overflow = "";
  }

  function setRegion(next) {
    region = next;
    document.querySelectorAll(".wing").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.region === next);
    });
    renderFilters();
    renderGallery();
    document.getElementById("atlas").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function setHero(item) {
    els.heroImage.src = item.image;
    els.heroImage.alt = item.name;
    els.heroName.textContent = item.name;
    els.heroLatin.textContent = item.latin;
    els.heroImage.onclick = () => openAnimal(item.id);
    els.heroImage.style.cursor = "pointer";
  }

  els.count.textContent = String(animals.length);
  renderWings();
  renderFilters();
  renderGallery();

  const featured = animals.filter((item) => item.featured);
  let heroIndex = 0;
  setHero(featured[0]);
  setInterval(() => {
    heroIndex = (heroIndex + 1) % featured.length;
    setHero(featured[heroIndex]);
  }, 7000);

  els.filters.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-region]");
    if (btn) setRegion(btn.dataset.region);
  });

  els.wings.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-region]");
    if (btn) setRegion(btn.dataset.region);
  });

  els.gallery.addEventListener("click", (event) => {
    const card = event.target.closest("[data-id]");
    if (card) openAnimal(card.dataset.id);
  });

  els.search.addEventListener("input", (event) => {
    query = event.target.value;
    renderGallery();
  });

  els.random.addEventListener("click", () => {
    const item = animals[Math.floor(Math.random() * animals.length)];
    setHero(item);
    openAnimal(item.id);
  });

  els.close.addEventListener("click", closeSheet);
  els.overlay.addEventListener("click", (event) => {
    if (event.target === els.overlay) closeSheet();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSheet();
  });
})();
