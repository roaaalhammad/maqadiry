
const STORAGE_KEYS = {
  cart: "maqadiry_cart",
  checkoutDraft: "maqadiry_checkout_draft",
  lastOrder: "maqadiry_last_order"
};

const DELIVERY_FEE = 15;

const MEALS = [
  {
    id: "kabsa",
    name: "مقادير كبسة الدجاج",
    category: "سعودي",
    badge: "الأكثر شيوعًا",
    pricePerServing: 22,
    prepTime: 45,
    popularity: 98,
    image: "assets/kabsa.jpg",
    shortDescription: "أرز بسمتي متبل مع دجاج ومكونات أساسية مجهزة للطبخ المنزلي.",
    basicIngredients: ["دجاج", "أرز بسمتي", "بصل", "طماطم", "بهارات كبسة", "مكسرات"],
    servingSize: "حصة واحدة",
    allergens: "يحتوي على: مكسرات",
    nutrition: {
      calories: "520 سعرة",
      protein: "35 جم",
      carbs: "62 جم",
      fat: "14 جم",
      sodium: "720 ملجم",
      fiber: "4 جم"
    },
    hiddenExactQuantities: [
      "250 جم دجاج",
      "180 جم أرز بسمتي",
      "60 جم بصل",
      "70 جم طماطم",
      "12 جم بهارات كبسة",
      "15 جم مكسرات"
    ],
    hiddenRecipeSteps: [
      "اغسل الأرز وانقعه لفترة قصيرة.",
      "شوّح البصل ثم أضف قطع الدجاج والبهارات.",
      "أضف الطماطم ثم الأرز والماء واتركه حتى يكتمل النضج.",
      "زيّن الطبق بالمكسرات قبل التقديم."
    ]
  },
  {
    id: "mandi",
    name: "مقادير مندي اللحم",
    category: "سعودي",
    badge: "مميز",
    pricePerServing: 29,
    prepTime: 60,
    popularity: 92,
    image: "assets/mandi.jpg",
    shortDescription: "لحم متبل مع أرز بسمتي ومكونات مجهزة لتجربة مندي منزلية.",
    basicIngredients: ["لحم", "أرز بسمتي", "بصل", "طماطم", "بهارات مندي"],
    servingSize: "حصة واحدة",
    allergens: "لا توجد مسببات حساسية شائعة مذكورة",
    nutrition: {
      calories: "610 سعرة",
      protein: "33 جم",
      carbs: "58 جم",
      fat: "25 جم",
      sodium: "760 ملجم",
      fiber: "3 جم"
    },
    hiddenExactQuantities: [
      "240 جم لحم",
      "170 جم أرز بسمتي",
      "55 جم بصل",
      "60 جم طماطم",
      "10 جم بهارات مندي"
    ],
    hiddenRecipeSteps: [
      "تبّل اللحم واتركه ليتشرب النكهات.",
      "حضّر قاعدة البصل والطماطم والبهارات.",
      "أضف الأرز مع السائل المناسب واتركه حتى ينضج مع اللحم.",
      "قدّم الطبق بعد الراحة القصيرة."
    ]
  },
  {
    id: "jareesh",
    name: "جريش",
    category: "سعودي",
    badge: "تقليدي",
    pricePerServing: 18,
    prepTime: 55,
    popularity: 85,
    image: "assets/jareesh.jpg",
    shortDescription: "جريش مع لبن وبصل ومكونات أساسية متوازنة لطبخ منزلي سهل.",
    basicIngredients: ["جريش", "لبن", "بصل", "زبدة", "بهارات"],
    servingSize: "حصة واحدة",
    allergens: "يحتوي على: حليب، قمح",
    nutrition: {
      calories: "430 سعرة",
      protein: "16 جم",
      carbs: "54 جم",
      fat: "15 جم",
      sodium: "680 ملجم",
      fiber: "6 جم"
    },
    hiddenExactQuantities: [
      "170 جم جريش",
      "220 مل لبن",
      "45 جم بصل",
      "12 جم زبدة",
      "6 جم بهارات"
    ],
    hiddenRecipeSteps: [
      "اغسل الجريش جيدًا قبل الطبخ.",
      "اطبخ البصل ثم أضف الجريش والسائل.",
      "أضف اللبن والبهارات مع التحريك حتى يتجانس القوام.",
      "أنهِ الطبق بلمسة زبدة قبل التقديم."
    ]
  },
  {
    id: "burger",
    name: "مقادير البرجر",
    category: "غربي",
    badge: "مفضل للعائلة",
    pricePerServing: 24,
    prepTime: 25,
    popularity: 95,
    image: "assets/burger.jpg",
    shortDescription: "لحم برجر، خبز، وخضار ومكونات أساسية مجهزة للطبخ والتجميع.",
    basicIngredients: ["لحم برجر", "خبز برجر", "جبن", "خس", "طماطم", "صلصة"],
    servingSize: "حصة واحدة",
    allergens: "يحتوي على: حليب، قمح",
    nutrition: {
      calories: "560 سعرة",
      protein: "28 جم",
      carbs: "39 جم",
      fat: "30 جم",
      sodium: "810 ملجم",
      fiber: "3 جم"
    },
    hiddenExactQuantities: [
      "160 جم لحم برجر",
      "1 خبز برجر",
      "25 جم جبن",
      "20 جم خس",
      "25 جم طماطم",
      "18 جم صلصة"
    ],
    hiddenRecipeSteps: [
      "شكّل اللحم واطهه حتى يصل للنضج المناسب.",
      "حمّص الخبز بخفة.",
      "رتّب الخضار والجبن والصلصة داخل الخبز.",
      "قدّم مع الإضافات الجانبية المرفقة."
    ]
  },
  {
    id: "ribeye",
    name: "مقادير ريب آي ستيك",
    category: "غربي",
    badge: "فاخر",
    pricePerServing: 46,
    prepTime: 35,
    popularity: 78,
    image: "assets/steak.jpg",
    shortDescription: "قطعة ريب آي مع خضار وزبدة متبلة ومقادير مجهزة للطبخ.",
    basicIngredients: ["ريب آي", "فلفل", "زبدة", "ثوم", "بطاطس صغيرة"],
    servingSize: "حصة واحدة",
    allergens: "يحتوي على: حليب",
    nutrition: {
      calories: "640 سعرة",
      protein: "41 جم",
      carbs: "24 جم",
      fat: "42 جم",
      sodium: "590 ملجم",
      fiber: "3 جم"
    },
    hiddenExactQuantities: [
      "230 جم ريب آي",
      "18 جم زبدة",
      "8 جم ثوم",
      "90 جم بطاطس صغيرة",
      "20 جم فلفل ملون"
    ],
    hiddenRecipeSteps: [
      "اترك الستيك في حرارة الغرفة قليلًا ثم تبّله.",
      "حمّر الستيك على حرارة عالية حسب درجة النضج المطلوبة.",
      "أضف الزبدة والثوم في النهاية.",
      "قدّم مع البطاطس والخضار بعد الراحة القصيرة."
    ]
  },
  {
    id: "chicken-rice",
    name: "مقادير دجاج وأرز",
    category: "غربي",
    badge: "متوازن",
    pricePerServing: 21,
    prepTime: 30,
    popularity: 83,
    image: "assets/chicken-rice.jpg",
    shortDescription: "قطع دجاج مع أرز وخضار وتتبيلة خفيفة جاهزة للطبخ اليومي.",
    basicIngredients: ["دجاج", "أرز", "خضار مشكلة", "ثوم", "بهارات خفيفة"],
    servingSize: "حصة واحدة",
    allergens: "لا توجد مسببات حساسية شائعة مذكورة",
    nutrition: {
      calories: "490 سعرة",
      protein: "31 جم",
      carbs: "52 جم",
      fat: "15 جم",
      sodium: "620 ملجم",
      fiber: "4 جم"
    },
    hiddenExactQuantities: [
      "210 جم دجاج",
      "160 جم أرز",
      "80 جم خضار مشكلة",
      "7 جم ثوم",
      "6 جم بهارات"
    ],
    hiddenRecipeSteps: [
      "اطهُ الدجاج مع التتبيلة حتى يأخذ اللون المناسب.",
      "حضّر الأرز في قدر منفصل.",
      "أضف الخضار في آخر المرحلة للحفاظ على القوام.",
      "قدّم الدجاج فوق الأرز."
    ]
  },
  {
    id: "alfredo",
    name: "مقادير باستا ألفريدو",
    category: "إيطالي",
    badge: "كريمي",
    pricePerServing: 26,
    prepTime: 30,
    popularity: 88,
    image: "assets/alfredo.jpg",
    shortDescription: "باستا مع صلصة كريمية ودجاج وفطر ومقادير مجهزة للطبخ.",
    basicIngredients: ["باستا", "دجاج", "كريمة طبخ", "فطر", "جبن بارميزان"],
    servingSize: "حصة واحدة",
    allergens: "يحتوي على: حليب، قمح",
    nutrition: {
      calories: "590 سعرة",
      protein: "30 جم",
      carbs: "49 جم",
      fat: "28 جم",
      sodium: "770 ملجم",
      fiber: "3 جم"
    },
    hiddenExactQuantities: [
      "120 جم باستا",
      "140 جم دجاج",
      "95 مل كريمة طبخ",
      "60 جم فطر",
      "20 جم جبن بارميزان"
    ],
    hiddenRecipeSteps: [
      "اسلق الباستا حتى تنضج مع الاحتفاظ بقليل من ماء السلق.",
      "حضّر الدجاج والفطر في المقلاة.",
      "أضف الكريمة والجبن حتى تتماسك الصلصة.",
      "اخلط الباستا بالصلصة وقدّمها مباشرة."
    ]
  },
  {
    id: "sushi",
    name: "مقادير سوشي",
    category: "آسيوي",
    badge: "آسيوي",
    pricePerServing: 38,
    prepTime: 50,
    popularity: 76,
    image: "assets/sushi.jpg",
    shortDescription: "أرز سوشي، ورق نوري، وخضار ومكونات أساسية مجهزة للّف والتحضير.",
    basicIngredients: ["أرز سوشي", "ورق نوري", "خيار", "أفوكادو", "سمك أو بديل حسب الخيار"],
    servingSize: "حصة واحدة",
    allergens: "يحتوي على: سمك، صويا",
    nutrition: {
      calories: "410 سعرة",
      protein: "19 جم",
      carbs: "55 جم",
      fat: "11 جم",
      sodium: "700 ملجم",
      fiber: "5 جم"
    },
    hiddenExactQuantities: [
      "150 جم أرز سوشي",
      "4 أوراق نوري",
      "35 جم خيار",
      "40 جم أفوكادو",
      "110 جم سمك أو بديل"
    ],
    hiddenRecipeSteps: [
      "حضّر أرز السوشي حسب التعليمات المرسلة بعد الطلب.",
      "رتّب المكونات فوق ورق النوري.",
      "لف الرول بإحكام ثم قطعه لقطع متساوية.",
      "قدّمه مع الصلصات الجانبية المرفقة."
    ]
  },
  {
    id: "caesar",
    name: "مقادير سلطة سيزر",
    category: "إيطالي",
    badge: "خفيف",
    pricePerServing: 19,
    prepTime: 20,
    popularity: 81,
    image: "assets/caesar.jpg",
    shortDescription: "خس ودجاج وقطع خبز محمصة مع صلصة سيزر ومقادير مجهزة للتقديم.",
    basicIngredients: ["خس روماني", "دجاج", "خبز محمص", "جبن بارميزان", "صلصة سيزر"],
    servingSize: "حصة واحدة",
    allergens: "يحتوي على: بيض، حليب، قمح",
    nutrition: {
      calories: "360 سعرة",
      protein: "24 جم",
      carbs: "18 جم",
      fat: "20 جم",
      sodium: "690 ملجم",
      fiber: "4 جم"
    },
    hiddenExactQuantities: [
      "110 جم خس روماني",
      "120 جم دجاج",
      "30 جم خبز محمص",
      "15 جم جبن بارميزان",
      "28 جم صلصة سيزر"
    ],
    hiddenRecipeSteps: [
      "حضّر الدجاج حسب الدرجة المفضلة لديك.",
      "اخلط الخس مع الصلصة بخفة.",
      "أضف الخبز المحمص والجبن في النهاية.",
      "رتّب المكونات في طبق التقديم."
    ]
  }
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function getMeals() {
  return MEALS.slice();
}

function getMealById(id) {
  return MEALS.find((meal) => meal.id === id) || null;
}

function formatCurrency(value) {
  return `${Number(value || 0)} ريال`;
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getCart() {
  const rawCart = readStorage(STORAGE_KEYS.cart, []);
  return Array.isArray(rawCart) ? rawCart : [];
}

function saveCart(cart) {
  writeStorage(STORAGE_KEYS.cart, cart);
  updateCartCount();
}

function getCheckoutDraft() {
  return readStorage(STORAGE_KEYS.checkoutDraft, {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    district: "",
    address: "",
    orderNotes: "",
    deliveryNotes: "",
    deliveryTime: "",
    paymentMethod: ""
  });
}

function saveCheckoutDraft(draft) {
  writeStorage(STORAGE_KEYS.checkoutDraft, draft);
}

function getLastOrder() {
  return readStorage(STORAGE_KEYS.lastOrder, null);
}

function saveLastOrder(order) {
  writeStorage(STORAGE_KEYS.lastOrder, order);
}

function clearOrderData() {
  localStorage.removeItem(STORAGE_KEYS.cart);
  localStorage.removeItem(STORAGE_KEYS.checkoutDraft);
  updateCartCount();
}

function calculateSubtotal(cart = getCart()) {
  return cart.reduce((sum, item) => sum + ((Number(item.pricePerServing) || 0) * (Number(item.peopleCount) || 1)), 0);
}

function calculateTotal(cart = getCart()) {
  if (!cart.length) return 0;
  return calculateSubtotal(cart) + DELIVERY_FEE;
}

function getSubtotal(cart = getCart()) {
  return calculateSubtotal(cart);
}

function updateCartCount() {
  const count = getCart().length;
  $$("[data-cart-count]").forEach((node) => {
    node.textContent = String(count);
  });
}

function setActiveNav() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  $$("[data-nav]").forEach((link) => {
    const href = link.getAttribute("href");
    const isMealsContext = current === "meal-details.html" && href === "meals.html";
    link.classList.toggle("active", href === current || isMealsContext);
  });
  setupNavIndicator();
}

function setupNavIndicator() {
  const nav = $(".nav");
  if (!nav) return;

  let indicator = nav.querySelector(".nav-indicator");
  if (!indicator) {
    indicator = document.createElement("div");
    indicator.className = "nav-indicator";
    nav.appendChild(indicator);
  }

  function moveIndicatorTo(el) {
    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    indicator.style.left = (elRect.left - navRect.left) + "px";
    indicator.style.width = elRect.width + "px";
    indicator.style.opacity = "1";
  }

  const activeLink = nav.querySelector(".nav a.active");
  if (activeLink) moveIndicatorTo(activeLink);

  $$("[data-nav]").forEach((link) => {
    link.addEventListener("mouseenter", () => moveIndicatorTo(link));
    link.addEventListener("mouseleave", () => {
      const active = nav.querySelector(".nav a.active");
      if (active) moveIndicatorTo(active);
      else indicator.style.opacity = "0";
    });
  });
}

function showToast(message) {
  let stack = $(".toast-stack");
  if (!stack) {
    stack = document.createElement("div");
    stack.className = "toast-stack";
    document.body.appendChild(stack);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  stack.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
  }, 2200);
  setTimeout(() => toast.remove(), 2600);
}

function getItemPeopleLabel(count) {
  return `${count} ${count === 1 ? "شخص" : "أشخاص"}`;
}

function openMealDetails(id) {
  window.location.href = `meal-details.html?id=${encodeURIComponent(id)}`;
}

function createNutritionPreview(meal) {
  return `
    <div class="nutrition-preview">
      <span>السعرات: <strong class="nutrition-value">${meal.nutrition.calories}</strong></span>
      <span>البروتين: <strong class="nutrition-value">${meal.nutrition.protein}</strong></span>
      <span>الكربوهيدرات: <strong class="nutrition-value">${meal.nutrition.carbs}</strong></span>
    </div>
  `;
}


function getMealCardTitle(name) {
  return String(name || "").replace(/^مقادير\s+/, "").trim();
}

function createMealCard(meal) {
  return `
    <article class="meal-card" data-open-meal="${meal.id}" tabindex="0" role="button" aria-label="عرض تفاصيل ${meal.name}">
      <div class="meal-image" data-open-meal="${meal.id}">
        <img src="${meal.image}" alt="${meal.name}">
      </div>
      <div class="meal-body" data-open-meal="${meal.id}">
        <div class="meal-topline">
          <span class="tag green">${meal.category}</span>
          <span class="tag gold">${meal.badge || meal.servingSize}</span>
        </div>
        <div class="meal-copy" data-open-meal="${meal.id}">
          <h3 class="meal-title">${getMealCardTitle(meal.name)}</h3>
          <p class="meal-description">${meal.shortDescription}</p>
        </div>
        <div class="meal-meta">
          <div>
            <div class="mini-price">${meal.pricePerServing}</div>
            <div class="per-serving">ريال لكل حصة</div>
          </div>
          <div class="mini-meta"><i data-lucide="clock-3"></i><span class="numeric">${meal.prepTime}</span> دقيقة</div>
        </div>
        <div class="tags-wrap">
          ${meal.basicIngredients.slice(0, 3).map((ingredient) => `<span class="tag">${ingredient}</span>`).join("")}
        </div>
        ${createNutritionPreview(meal)}
        <div class="card-actions">
          <button class="button add-to-cart" type="button" data-add-to-cart="${meal.id}">أضف للسلة</button>
        </div>
      </div>
    </article>
  `;
}

function searchMeals(meals, query) {
  const safeQuery = (query || "").trim().toLowerCase();
  if (!safeQuery) return meals;
  return meals.filter((meal) => {
    const haystack = [
      meal.name,
      meal.category,
      meal.shortDescription,
      meal.allergens,
      ...meal.basicIngredients
    ].join(" ").toLowerCase();
    return haystack.includes(safeQuery);
  });
}

function filterMeals(meals, filters) {
  return meals.filter((meal) => {
    const matchesCategory = !filters.category || filters.category === "الكل" || meal.category === filters.category;
    const matchesPrep = !filters.prep
      || (filters.prep === "lt30" && meal.prepTime < 30)
      || (filters.prep === "30to60" && meal.prepTime >= 30 && meal.prepTime <= 60)
      || (filters.prep === "gt60" && meal.prepTime > 60)
      || filters.prep === "";
    const matchesPrice = !filters.price
      || (filters.price === "10to25" && meal.pricePerServing >= 10 && meal.pricePerServing <= 25)
      || (filters.price === "26to40" && meal.pricePerServing >= 26 && meal.pricePerServing <= 40)
      || (filters.price === "gt40" && meal.pricePerServing > 40)
      || filters.price === "";
    return matchesCategory && matchesPrep && matchesPrice;
  });
}

function sortMeals(meals, sortValue) {
  const sorted = meals.slice();
  if (sortValue === "low") {
    sorted.sort((a, b) => a.pricePerServing - b.pricePerServing);
  } else if (sortValue === "prep") {
    sorted.sort((a, b) => a.prepTime - b.prepTime);
  } else {
    sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  }
  return sorted;
}

function renderMeals(items = getMeals()) {
  const grid = $("#meals-grid");
  if (!grid) return;
  const resultsCount = $("#results-count");
  if (resultsCount) {
    resultsCount.textContent = `${items.length} ${items.length === 1 ? "نتيجة" : "نتائج"}`;
  }
  grid.innerHTML = items.length
    ? items.map((meal) => createMealCard(meal)).join("")
    : `<div class="card feedback-card"><h3>لا توجد نتائج مطابقة</h3><p>جرّب تعديل البحث أو الفلاتر للوصول إلى وجبة مناسبة.</p></div>`;
  bindMealCardActions(grid);
  if (window.lucide) lucide.createIcons();
}

function bindMealCardActions(scope = document) {
  $$("[data-open-meal]", scope).forEach((node) => {
    if (node.dataset.boundOpen === "true") return;
    node.dataset.boundOpen = "true";
    node.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-add-to-cart]");
      if (trigger) return;
      const id = node.dataset.openMeal || node.closest("[data-open-meal]")?.dataset.openMeal;
      if (id) openMealDetails(id);
    });
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const id = node.dataset.openMeal;
        if (id) openMealDetails(id);
      }
    });
  });

  $$("[data-add-to-cart]", scope).forEach((button) => {
    if (button.dataset.boundCart === "true") return;
    button.dataset.boundCart = "true";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      addToCart(button.dataset.addToCart, 1);
    });
  });
}

function renderMealsPage() {
  const grid = $("#meals-grid");
  if (!grid) return;
  const searchInput = $("#meal-search");
  const sortSelect = $("#sort-select");
  const prepInputs = $$("input[name='prep']");
  const priceInputs = $$("input[name='price']");
  const chips = $$("[data-category]");
  let activeCategory = "الكل";

  const apply = () => {
    const prep = $("input[name='prep']:checked")?.value || "";
    const price = $("input[name='price']:checked")?.value || "";
    const sortValue = sortSelect?.value || "popular";
    const searched = searchMeals(getMeals(), searchInput?.value || "");
    const filtered = filterMeals(searched, { category: activeCategory, prep, price });
    renderMeals(sortMeals(filtered, sortValue));
  };

  searchInput?.addEventListener("input", apply);
  sortSelect?.addEventListener("change", apply);
  prepInputs.forEach((input) => input.addEventListener("change", apply));
  priceInputs.forEach((input) => input.addEventListener("change", apply));
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      activeCategory = chip.dataset.category;
      chips.forEach((item) => item.classList.toggle("active", item === chip));
      apply();
    });
  });
  apply();
}

function buildCartItem(meal, peopleCount = 1, orderNotes = "") {
  return {
    id: meal.id,
    mealId: meal.id,
    name: meal.name,
    category: meal.category,
    pricePerServing: meal.pricePerServing,
    peopleCount: Math.max(1, Math.min(10, Number(peopleCount) || 1)),
    image: meal.image,
    shortDescription: meal.shortDescription,
    basicIngredients: meal.basicIngredients,
    allergens: meal.allergens,
    nutrition: meal.nutrition,
    prepTime: meal.prepTime,
    orderNotes
  };
}

function addToCart(mealId, peopleCount = 1, options = {}) {
  const meal = getMealById(mealId);
  if (!meal) return;
  const cart = getCart();
  const safePeople = Math.max(1, Math.min(10, Number(peopleCount) || 1));
  const existing = cart.find((item) => item.id === mealId);
  if (existing) {
    existing.peopleCount = Math.max(1, Math.min(10, existing.peopleCount + safePeople));
  } else {
    cart.push(buildCartItem(meal, safePeople));
  }
  saveCart(cart);
  showToast("تمت إضافة المنتج إلى السلة");
  if (options.showChoice !== false) {
    openCartChoiceModal();
  }
}

function updatePeopleCount(itemId, newCount) {
  const cart = getCart().map((item) => {
    if (item.id !== itemId) return item;
    return { ...item, peopleCount: Math.max(1, Math.min(10, Number(newCount) || 1)) };
  });
  saveCart(cart);
}

function removeFromCart(itemId) {
  saveCart(getCart().filter((item) => item.id !== itemId));
}

function saveItemOrderNotes(itemId, notes) {
  const cart = getCart().map((item) => item.id === itemId ? { ...item, orderNotes: notes } : item);
  saveCart(cart);
}

function cartSummaryTemplate(cart) {
  return `
    <div class="summary-box card">
      <h3>ملخص الطلب</h3>
      <div class="summary-row"><span>الإجمالي الفرعي</span><strong class="summary-value">${formatCurrency(calculateSubtotal(cart))}</strong></div>
      <div class="summary-row"><span>رسوم التوصيل</span><strong class="summary-value">${formatCurrency(DELIVERY_FEE)}</strong></div>
      <div class="total-row"><span>الإجمالي</span><span class="summary-value">${formatCurrency(calculateTotal(cart))}</span></div>
      <div class="helper-box">سيتم إرسال الوصفة والكميات التفصيلية عبر البريد الإلكتروني بعد إتمام الطلب.</div>
      <div class="summary-actions">
        <a class="button-outline" href="meals.html">متابعة التسوق</a>
        <a class="button" href="checkout.html">إتمام الطلب</a>
      </div>
    </div>
  `;
}

function attachCartEvents(root) {
  $$("[data-remove]", root).forEach((button) => {
    button.addEventListener("click", () => {
      removeFromCart(button.dataset.remove);
      renderCart();
      showToast("تم حذف المنتج من السلة");
    });
  });

  $$("[data-qty-control]", root).forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.itemId;
      const current = Number(button.dataset.current || 1);
      const delta = Number(button.dataset.qtyControl || 0);
      updatePeopleCount(id, current + delta);
      renderCart();
    });
  });

  $$("[data-order-notes]", root).forEach((field) => {
    field.addEventListener("input", () => {
      saveItemOrderNotes(field.dataset.orderNotes, field.value);
    });
  });
}

function renderCart() {
  const root = $("#cart-root");
  if (!root) return;
  const cart = getCart();

  if (!cart.length) {
    root.innerHTML = `
      <div class="cart-title">
        <h1>السلة</h1>
        <span class="count-pill">0</span>
      </div>
      <div class="empty-state card">
        <h3>السلة فارغة</h3>
        <p>لم تتم إضافة أي مقادير بعد.</p>
        <a class="button" href="meals.html">استعرض القائمة</a>
      </div>
    `;
    return;
  }

  root.innerHTML = `
    <div class="cart-title">
      <h1>السلة</h1>
      <span class="count-pill">${cart.length}</span>
    </div>
    <div class="progress">
      <div class="step active"><span class="step-bullet">1</span><span>السلة</span></div>
      <div class="step-divider"></div>
      <div class="step"><span class="step-bullet">2</span><span>إتمام الطلب</span></div>
      <div class="step-divider"></div>
      <div class="step"><span class="step-bullet">3</span><span>التأكيد</span></div>
    </div>
    <div class="cart-layout">
      <section class="cart-stack">
        ${cart.map((item) => `
          <article class="card cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-content">
              <div class="meal-topline">
                <div>
                  <span class="tag green">${item.category}</span>
                  <h3 class="meal-title">${getMealCardTitle(item.name)}</h3>
                </div>
                <button class="button-danger" type="button" data-remove="${item.id}">إزالة</button>
              </div>
              <p class="meal-description">${item.shortDescription || getMealById(item.mealId || item.id)?.shortDescription || ""}</p>
              <div class="meal-meta">
                <div class="mini-meta"><strong>سعر الحصة:</strong><span class="summary-value">${formatCurrency(item.pricePerServing)}</span></div>
                <div class="mini-meta"><strong>الإجمالي:</strong><span class="summary-value">${formatCurrency(item.pricePerServing * item.peopleCount)}</span></div>
                <div class="mini-meta"><i data-lucide="clock-3"></i><span class="numeric">${item.prepTime}</span> دقيقة</div>
              </div>
              <div class="cart-inline-tools">
                <div class="people-selector">
                  <button type="button" data-qty-control="-1" data-item-id="${item.id}" data-current="${item.peopleCount}">−</button>
                  <span class="counter-value"><span class="numeric">${item.peopleCount}</span> أشخاص</span>
                  <button type="button" data-qty-control="1" data-item-id="${item.id}" data-current="${item.peopleCount}">+</button>
                </div>
              </div>
              <ul class="inline-list">
                ${(item.basicIngredients || []).slice(0, 5).map((ingredient) => `<li class="tag">${ingredient}</li>`).join("")}
              </ul>
              <div class="nutrition-preview cart-nutrition">
                <span>السعرات: <strong class="nutrition-value">${item.nutrition?.calories || "-"}</strong></span>
                <span>البروتين: <strong class="nutrition-value">${item.nutrition?.protein || "-"}</strong></span>
                <span>الكربوهيدرات: <strong class="nutrition-value">${item.nutrition?.carbs || "-"}</strong></span>
              </div>
              <div class="hint-text">مسببات الحساسية: ${item.allergens || "لا توجد مسببات حساسية شائعة مذكورة"}</div>
            </div>
          </article>
        `).join("")}

        <section class="card notes-card">
          <h2>ملاحظات الطلب</h2>
          <div class="cart-stack">
            ${cart.map((item) => `
              <div class="form-field">
                <label for="notes-${item.id}">${item.name}</label>
                <textarea class="textarea" id="notes-${item.id}" data-order-notes="${item.id}" placeholder="مثال: بدون مكسرات، تقليل البهارات، يرجى فصل المكونات.">${item.orderNotes || ""}</textarea>
              </div>
            `).join("")}
          </div>
        </section>
      </section>
      <aside class="checkout-stack">
        ${cartSummaryTemplate(cart)}
      </aside>
    </div>
  `;
  attachCartEvents(root);
  if (window.lucide) lucide.createIcons();
}

function renderCartPage() {
  renderCart();
}

function getOrderNotesSummary(cart) {
  const notes = cart.map((item) => item.orderNotes?.trim()).filter(Boolean);
  return notes.join(" | ");
}

function renderCheckoutSummary() {
  const cart = getCart();
  return `
    <aside class="checkout-stack">
      <div class="summary-box card">
        <h3>ملخص الطلب</h3>
        <div class="checkout-summary-list">
          ${cart.map((item) => `
            <div class="summary-item">
              <div>
                <strong>${getMealCardTitle(item.name)}</strong>
                <div class="hint-text"><span class="numeric">${item.peopleCount}</span> أشخاص</div>
                ${item.orderNotes ? `<div class="hint-text">ملاحظات الطلب: ${item.orderNotes}</div>` : ""}
              </div>
              <strong class="summary-value">${formatCurrency(item.pricePerServing * item.peopleCount)}</strong>
            </div>
          `).join("")}
        </div>
        <div class="summary-row"><span>الإجمالي الفرعي</span><strong class="summary-value">${formatCurrency(calculateSubtotal(cart))}</strong></div>
        <div class="summary-row"><span>رسوم التوصيل</span><strong class="summary-value">${formatCurrency(DELIVERY_FEE)}</strong></div>
        <div class="total-row"><span>الإجمالي</span><span class="summary-value">${formatCurrency(calculateTotal(cart))}</span></div>
        </div>
    </aside>
  `;
}

function collectDraftFromForm(form) {
  return {
    firstName: form.firstName.value.trim(),
    lastName: form.lastName.value.trim(),
    phone: form.phone.value.trim(),
    email: form.email.value.trim(),
    city: form.city.value.trim(),
    district: form.district.value.trim(),
    address: form.address.value.trim(),
    orderNotes: form.orderNotes.value.trim(),
    deliveryNotes: form.deliveryNotes.value.trim(),
    deliveryTime: form.deliveryTime.value,
    paymentMethod: form.paymentMethod.value
  };
}

function markFieldError(input, hasError) {
  const field = input.closest(".form-field");
  if (field) field.classList.toggle("field-error", hasError);
}

function validateCheckout() {
  const form = $("#checkout-form");
  if (!form) return false;
  const data = collectDraftFromForm(form);
  saveCheckoutDraft(data);

  const checks = [
    ["firstName", data.firstName.length > 0],
    ["lastName", data.lastName.length > 0],
    ["phone", data.phone.length > 0],
    ["email", data.email.length > 0],
    ["city", data.city.length > 0],
    ["district", data.district.length > 0],
    ["address", data.address.length > 0],
    ["paymentMethod", data.paymentMethod.length > 0]
  ];

  let isValid = true;
  checks.forEach(([name, okay]) => {
    const field = form.elements[name];
    if (field) markFieldError(field, !okay);
    if (!okay) isValid = false;
  });

  const errorBox = $("#checkout-error");
  if (errorBox) {
    errorBox.textContent = isValid ? "" : "يرجى استكمال جميع الحقول المطلوبة واختيار طريقة الدفع.";
    errorBox.classList.toggle("visible", !isValid);
  }
  return isValid;
}

function confirmationEmailPreview(order) {
  return `
    <section class="confirmation-card card">
      <h2>تم استلام طلبك بنجاح</h2>
      <p>تم استلام طلبك بنجاح، وسيتم إرسال الوصفة والكميات التفصيلية إلى بريدك الإلكتروني.</p>
      <div class="confirmation-meta">
        <div class="summary-row"><span>الاسم</span><strong>${order.customer.firstName} ${order.customer.lastName}</strong></div>
        <div class="summary-row"><span>البريد الإلكتروني</span><strong>${order.customer.email}</strong></div>
        <div class="summary-row"><span>طريقة الدفع</span><strong>${order.customer.paymentMethod}</strong></div>
      </div>
      <div class="form-section">
        <h3>معاينة تفاصيل ما بعد الطلب</h3>
        <div class="confirmation-list">
          ${order.items.map((item) => `
            <article class="confirmation-item">
              <h4>${getMealCardTitle(item.name)}</h4>
              <p><strong>عدد الأشخاص:</strong> <span class="numeric">${item.peopleCount}</span></p>
              <p><strong>الكميات التفصيلية:</strong> ${(getMealById(item.id)?.hiddenExactQuantities || []).join("، ")}</p>
              <p><strong>خطوات التحضير:</strong> ${(getMealById(item.id)?.hiddenRecipeSteps || []).join(" / ")}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function confirmOrder() {
  const form = $("#checkout-form");
  if (!form || !validateCheckout()) return;
  const cart = getCart();
  const customer = collectDraftFromForm(form);
  const mergedOrderNotes = customer.orderNotes || getOrderNotesSummary(cart);

  const order = {
    id: `ORD-${Date.now()}`,
    createdAt: new Date().toISOString(),
    customer: { ...customer, orderNotes: mergedOrderNotes },
    items: cart,
    subtotal: calculateSubtotal(cart),
    deliveryFee: DELIVERY_FEE,
    total: calculateTotal(cart)
  };

  saveLastOrder(order);
  clearOrderData();
  showToast("تم استلام طلبك بنجاح");
  renderCheckoutPage(true);
}

function renderCheckoutPage(forceConfirmation = false) {
  const root = $("#checkout-root");
  if (!root) return;
  const cart = getCart();
  const lastOrder = getLastOrder();
  const draft = getCheckoutDraft();

  if ((forceConfirmation || window.location.hash === "#confirmation") && lastOrder) {
    root.innerHTML = `
      <div class="checkout-title"><h1>تأكيد الطلب</h1></div>
      <div class="progress">
        <div class="step done"><span class="step-bullet">1</span><span>السلة</span></div>
        <div class="step-divider"></div>
        <div class="step done"><span class="step-bullet">2</span><span>إتمام الطلب</span></div>
        <div class="step-divider"></div>
        <div class="step active"><span class="step-bullet">3</span><span>التأكيد</span></div>
      </div>
      ${confirmationEmailPreview(lastOrder)}
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px">
        <a class="button" href="meals.html">استعرض القائمة</a>
        <a class="button-outline" href="index.html">العودة للرئيسية</a>
      </div>
    `;
    return;
  }

  if (!cart.length) {
    root.innerHTML = `
      <div class="checkout-title"><h1>إتمام الطلب</h1></div>
      <div class="empty-state card">
        <h3>السلة فارغة</h3>
        <p>أضف مقادير الوجبات أولًا قبل إتمام الطلب.</p>
        <a class="button" href="meals.html">استعرض القائمة</a>
      </div>
    `;
    return;
  }

  root.innerHTML = `
    <div class="checkout-title"><h1>إتمام الطلب</h1></div>
    <div class="progress">
      <div class="step done"><span class="step-bullet">1</span><span>السلة</span></div>
      <div class="step-divider"></div>
      <div class="step active"><span class="step-bullet">2</span><span>إتمام الطلب</span></div>
      <div class="step-divider"></div>
      <div class="step"><span class="step-bullet">3</span><span>التأكيد</span></div>
    </div>
    <div class="checkout-layout">
      <form class="card checkout-form" id="checkout-form" novalidate>
        <section class="form-section">
          <h2>بيانات العميل</h2>
          <div class="form-grid">
            <div class="form-field">
              <label for="firstName">الاسم الأول</label>
              <input class="input" id="firstName" name="firstName" value="${draft.firstName || ""}" placeholder="أدخل الاسم الأول">
              <div class="error-text">يرجى إدخال الاسم الأول.</div>
            </div>
            <div class="form-field">
              <label for="lastName">اسم العائلة</label>
              <input class="input" id="lastName" name="lastName" value="${draft.lastName || ""}" placeholder="أدخل اسم العائلة">
              <div class="error-text">يرجى إدخال اسم العائلة.</div>
            </div>
            <div class="form-field">
              <label for="phone">رقم الجوال</label>
              <input class="input" id="phone" name="phone" value="${draft.phone || ""}" inputmode="tel" placeholder="05xxxxxxxx">
              <div class="error-text">يرجى إدخال رقم الجوال.</div>
            </div>
            <div class="form-field">
              <label for="email">البريد الإلكتروني</label>
              <input class="input" id="email" name="email" value="${draft.email || ""}" inputmode="email" placeholder="name@example.com">
              <div class="error-text">يرجى إدخال البريد الإلكتروني.</div>
            </div>
            <div class="form-field">
              <label for="city">المدينة</label>
              <input class="input" id="city" name="city" value="${draft.city || ""}" placeholder="مثال: الرياض">
              <div class="error-text">يرجى إدخال المدينة.</div>
            </div>
            <div class="form-field">
              <label for="district">الحي</label>
              <input class="input" id="district" name="district" value="${draft.district || ""}" placeholder="مثال: النرجس">
              <div class="error-text">يرجى إدخال الحي.</div>
            </div>
            <div class="form-field full">
              <label for="address">العنوان التفصيلي</label>
              <input class="input" id="address" name="address" value="${draft.address || ""}" placeholder="الشارع، رقم المبنى، الشقة أو العلامة المميزة">
              <div class="error-text">يرجى إدخال العنوان التفصيلي.</div>
            </div>
          </div>
        </section>

        <section class="form-section">
          <h2>ملاحظات الطلب والتوصيل</h2>
          <div class="form-grid">
            <div class="form-field full">
              <label for="orderNotes">ملاحظات الطلب</label>
              <textarea class="textarea" id="orderNotes" name="orderNotes" placeholder="مثال: بدون مكسرات، تقليل البهارات، يرجى فصل المكونات.">${draft.orderNotes || getOrderNotesSummary(cart) || ""}</textarea>
            </div>
            <div class="form-field full">
              <label for="deliveryNotes">ملاحظات التوصيل</label>
              <textarea class="textarea" id="deliveryNotes" name="deliveryNotes" placeholder="مثال: الرجاء الاتصال عند الوصول، المدخل الخلفي، التوصيل بعد الساعة 6.">${draft.deliveryNotes || ""}</textarea>
            </div>
            <div class="form-field full">
              <label for="deliveryTime">وقت التوصيل</label>
              <select class="sort-select" id="deliveryTime" name="deliveryTime">
                <option value="">اختر وقت التوصيل</option>
                <option value="12 ظهرًا – 3 عصرًا" ${draft.deliveryTime === "12 ظهرًا – 3 عصرًا" ? "selected" : ""}>12 ظهرًا – 3 عصرًا</option>
                <option value="3 عصرًا – 6 مساءً" ${draft.deliveryTime === "3 عصرًا – 6 مساءً" ? "selected" : ""}>3 عصرًا – 6 مساءً</option>
                <option value="6 مساءً – 10 مساءً" ${draft.deliveryTime === "6 مساءً – 10 مساءً" ? "selected" : ""}>6 مساءً – 10 مساءً</option>
              </select>
            </div>
          </div>
        </section>

        <section class="form-section">
          <h2>طرق الدفع</h2>
          <div class="payment-options">
            <label class="payment-option"><input type="radio" name="paymentMethod" value="مدى" ${draft.paymentMethod === "مدى" ? "checked" : ""}><span>مدى</span></label>
            <label class="payment-option"><input type="radio" name="paymentMethod" value="Apple Pay" ${draft.paymentMethod === "Apple Pay" ? "checked" : ""}><span>Apple Pay</span></label>
            <label class="payment-option"><input type="radio" name="paymentMethod" value="الدفع عند الاستلام" ${draft.paymentMethod === "الدفع عند الاستلام" ? "checked" : ""}><span>الدفع عند الاستلام</span></label>
          </div>
          <div class="helper-box">الدفع في هذه النسخة تجريبي فقط، ولا تتم معالجة أي دفعات فعلية.</div>
          <div id="checkout-error" class="checkout-error" aria-live="polite"></div>
        </section>

        <button class="button full-width" type="submit">تأكيد الطلب</button>
      </form>
      ${renderCheckoutSummary()}
    </div>
  `;

  const form = $("#checkout-form");
  form?.addEventListener("input", () => saveCheckoutDraft(collectDraftFromForm(form)));
  form?.addEventListener("change", () => saveCheckoutDraft(collectDraftFromForm(form)));
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    confirmOrder();
  });
}

function renderMealDetails() {
  const root = $("#meal-details-root");
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const meal = getMealById(id);

  if (!meal) {
    root.innerHTML = `
      <div class="empty-state card">
        <h1>الوجبة غير موجودة</h1>
        <p>تعذر العثور على الوجبة المطلوبة.</p>
        <a class="button" href="meals.html">العودة للقائمة</a>
      </div>
    `;
    return;
  }

  const defaultPeople = 2;
  const subtotal = meal.pricePerServing * defaultPeople;

  root.innerHTML = `
    <section class="container section-space">
      <div class="details-layout">
        <article class="card details-card">
          <div class="details-media">
            <img src="${meal.image}" alt="${meal.name}">
          </div>
          <div class="details-content">
            <div class="meal-topline">
              <span class="tag green">${meal.category}</span>
              <span class="tag gold">${meal.badge || "مقادير جاهزة للطبخ"}</span>
            </div>
            <h1 class="details-title">${getMealCardTitle(meal.name)}</h1>
            <p class="meal-description">${meal.shortDescription}</p>

            <div class="details-meta-grid">
              <div class="details-meta-card"><span>السعر لكل حصة</span><strong class="price">${formatCurrency(meal.pricePerServing)}</strong></div>
              <div class="details-meta-card"><span>وقت التحضير</span><strong><span class="numeric">${meal.prepTime}</span> دقيقة</strong></div>
              <div class="details-meta-card"><span>حجم الحصة</span><strong>${meal.servingSize}</strong></div>
            </div>

            <div class="details-counter-row">
              <div>
                <h3>عدد الأشخاص</h3>
                <div class="people-selector" data-details-picker data-value="${defaultPeople}">
                  <button type="button" data-action="decrease">−</button>
                  <span class="counter-value"><span class="numeric">${defaultPeople}</span> أشخاص</span>
                  <button type="button" data-action="increase">+</button>
                </div>
              </div>
              <div class="details-subtotal-box">
                <span>الإجمالي</span>
                <strong class="summary-value" data-details-subtotal>${formatCurrency(subtotal)}</strong>
              </div>
            </div>

            <section class="details-section">
              <h2>المكونات الأساسية</h2>
              <div class="tags-wrap">
                ${meal.basicIngredients.map((ingredient) => `<span class="tag">${ingredient}</span>`).join("")}
              </div>
            </section>

            <section class="details-section">
              <h2>القيم الغذائية التقريبية</h2>
              <div class="details-nutrition-grid">
                <div class="nutrition-item"><span>السعرات</span><div class="nutrition-value">${meal.nutrition.calories}</div></div>
                <div class="nutrition-item"><span>البروتين</span><div class="nutrition-value">${meal.nutrition.protein}</div></div>
                <div class="nutrition-item"><span>الكربوهيدرات</span><div class="nutrition-value">${meal.nutrition.carbs}</div></div>
                <div class="nutrition-item"><span>الدهون</span><div class="nutrition-value">${meal.nutrition.fat}</div></div>
                <div class="nutrition-item"><span>الصوديوم</span><div class="nutrition-value">${meal.nutrition.sodium}</div></div>
                <div class="nutrition-item"><span>الألياف</span><div class="nutrition-value">${meal.nutrition.fiber}</div></div>
              </div>
            </section>

            <section class="details-section">
              <h2>مسببات الحساسية</h2>
              <div class="helper-box">${meal.allergens}</div>
            </section>

            <div class="inline-note">القيم الغذائية تقريبية ومحسوبة لكل حصة، وقد تختلف حسب حجم المكونات وتوفرها.</div>
            <div class="inline-note">سيتم إرسال الوصفة والكميات التفصيلية عبر البريد الإلكتروني بعد إتمام الطلب.</div>

            <div class="details-actions">
              <button class="button" type="button" data-details-add="${meal.id}">أضف للسلة</button>
              <a class="button-outline" href="meals.html">العودة للقائمة</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  `;

  const picker = $("[data-details-picker]", root);
  const subtotalNode = $("[data-details-subtotal]", root);
  let peopleCount = defaultPeople;

  const renderPicker = () => {
    $(".counter-value", picker).innerHTML = `<span class="numeric">${peopleCount}</span> أشخاص`;
    subtotalNode.textContent = formatCurrency(meal.pricePerServing * peopleCount);
  };

  $$("button", picker).forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.action === "increase" && peopleCount < 10) peopleCount += 1;
      if (button.dataset.action === "decrease" && peopleCount > 1) peopleCount -= 1;
      renderPicker();
    });
  });

  $("[data-details-add]", root)?.addEventListener("click", () => {
    addToCart(meal.id, peopleCount);
  });

  renderPicker();
}


function ensureCartChoiceModal() {
  if ($("#cart-choice-modal")) return;
  const modal = document.createElement("div");
  modal.id = "cart-choice-modal";
  modal.className = "modal-overlay hidden";
  modal.innerHTML = `
    <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="cart-choice-title">
      <h3 id="cart-choice-title">تمت إضافة المقادير إلى السلة</h3>
      <p>يمكنك عرض السلة أو متابعة التسوق.</p>
      <div class="modal-actions">
        <a class="button" href="cart.html">عرض السلة</a>
        <button class="button-outline" type="button" data-close-cart-choice>متابعة التسوق</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeCartChoiceModal();
  });
  $("[data-close-cart-choice]", modal)?.addEventListener("click", closeCartChoiceModal);
}

function openCartChoiceModal() {
  ensureCartChoiceModal();
  $("#cart-choice-modal")?.classList.remove("hidden");
}

function closeCartChoiceModal() {
  $("#cart-choice-modal")?.classList.add("hidden");
}

function ensureLoginModal() {
  if ($("#login-modal")) return;
  const modal = document.createElement("div");
  modal.id = "login-modal";
  modal.className = "modal-overlay hidden";
  modal.innerHTML = `
    <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="login-modal-title">
      <h3 id="login-modal-title">تسجيل الدخول</h3>
      <p>تسجيل الدخول غير مفعّل في نسخة MVP</p>
      <button class="button" type="button" data-close-login>إغلاق</button>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeLoginModal();
  });
  $("[data-close-login]", modal)?.addEventListener("click", closeLoginModal);
}

function openLoginModal() {
  ensureLoginModal();
  ensureCartChoiceModal();
  $("#login-modal")?.classList.remove("hidden");
}

function closeLoginModal() {
  $("#login-modal")?.classList.add("hidden");
}

function bindLoginTriggers() {
  $$(".signin-pill").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openLoginModal();
    });
  });
}

function renderFeaturedMeals() {
  const root = $("#featured-meals");
  if (!root) return;
  root.innerHTML = getMeals().slice(0, 3).map((meal) => createMealCard(meal)).join("");
  bindMealCardActions(root);
  if (window.lucide) lucide.createIcons();
}

function initGlobal() {
  setActiveNav();
  updateCartCount();
  bindLoginTriggers();
  ensureLoginModal();
  if (window.lucide) {
    lucide.createIcons();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initGlobal();
  renderFeaturedMeals();
  renderMealsPage();
  renderMealDetails();
  renderCartPage();
  renderCheckoutPage();
});
