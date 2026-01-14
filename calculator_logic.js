// V7 APPROACH: No size multipliers needed!
// All items have complete size data, just direct lookup!

// Current selected size
let currentSize = 'small';

// Selection state
let selectedItems = {
  base: null,
  flavors: [],
  mixins: []
};

// Initialize calculator
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    initializeCalculator();
  }, 1000); // Wait for page to fully load
});

function initializeCalculator() {
  // Add click handlers ONLY to menu tiles with calculator data attributes
  const calculatorTiles = document.querySelectorAll('.menu-tile_component[data-type]');
  calculatorTiles.forEach(tile => {
    // Remove any existing modal event listeners for calculator items
    tile.removeAttribute('role');
    tile.removeAttribute('aria-modal');
    tile.removeAttribute('aria-labelledby');
    tile.removeAttribute('aria-describedby');

    // Add calculator click handler
    tile.addEventListener('click', handleTileClick);
  });

  // Initialize size button handlers
  initializeSizeButtons();

  updateDisplay();
  console.log('✅ Nutrition calculator initialized');
  console.log(`📊 Calculator items: ${calculatorTiles.length}`);
  console.log('🎯 Selection rules: 1 base (required), up to 2 flavors, up to 3 mix-ins');
}

function initializeSizeButtons() {
  const sizeButtons = document.querySelectorAll('.size-btn');
  sizeButtons.forEach(button => {
    button.addEventListener('click', handleSizeSelection);
  });
}

function handleSizeSelection(event) {
  const button = event.currentTarget;
  const size = button.dataset.size;

  // Update selected size
  currentSize = size;

  // Update button states
  document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');

  // Recalculate nutrition totals AND update individual items
  updateNutritionTotals();
  updateNutritionBreakdown(); // ✅ NEW: Updates individual item nutrition values

  console.log(`Size changed to: ${size}`);
}

function handleTileClick(event) {
  event.preventDefault();
  event.stopPropagation();

  const tile = event.currentTarget;
  const type = tile.dataset.type;
  const id = tile.dataset.id;
  const name = tile.dataset.name;

  // Only proceed if tile has calculator data attributes
  if (!type || !id || !name) {
    return; // Let original modal behavior work for non-calculator items
  }

  console.log('Calculator selection:', type, id, name);

  if (tile.classList.contains('disabled')) {
    return;
  }

  if (type === 'base') {
    handleBaseSelection(tile, id, name);
  } else if (type === 'flavor') {
    handleFlavorSelection(tile, id, name);
  } else if (type === 'mixins') {
    handleMixinSelection(tile, id, name);
  }

  updateDisplay();
  updateSelectionLimits();
}

function handleBaseSelection(tile, id, name) {
  if (tile.classList.contains('selected')) {
    // Cannot deselect base - it's required
    return;
  }

  // Clear previous base selection
  document.querySelectorAll('[data-type="base"]').forEach(t => t.classList.remove('selected'));

  // Select new base
  tile.classList.add('selected');
  selectedItems.base = { id, name, type: 'base' };
  console.log('Base selected:', name);
}

function handleFlavorSelection(tile, id, name) {
  if (tile.classList.contains('selected')) {
    // Deselect flavor
    tile.classList.remove('selected');
    selectedItems.flavors = selectedItems.flavors.filter(f => f.id !== id);
    console.log('Flavor deselected:', name);
  } else if (selectedItems.flavors.length < 2) {
    // Select flavor (max 2 allowed)
    tile.classList.add('selected');
    selectedItems.flavors.push({ id, name, type: 'flavor' });
    console.log('Flavor selected:', name, `(${selectedItems.flavors.length}/2)`);
  } else {
    console.log('Cannot select more flavors - limit reached (2/2)');
  }
}

function handleMixinSelection(tile, id, name) {
  if (tile.classList.contains('selected')) {
    // Deselect mix-in
    tile.classList.remove('selected');
    selectedItems.mixins = selectedItems.mixins.filter(m => m.id !== id);
    console.log('Mix-in deselected:', name);
  } else if (selectedItems.mixins.length < 3) {
    // Select mix-in (max 3 allowed)
    tile.classList.add('selected');
    selectedItems.mixins.push({ id, name, type: 'mixins' });
    console.log('Mix-in selected:', name, `(${selectedItems.mixins.length}/3)`);
  } else {
    console.log('Cannot select more mix-ins - limit reached (3/3)');
  }
}

function updateSelectionLimits() {
  // Handle flavor limits (max 2)
  const flavorTiles = document.querySelectorAll('[data-type="flavor"]');
  if (selectedItems.flavors.length >= 2) {
    // Disable unselected flavor tiles
    flavorTiles.forEach(tile => {
      if (!tile.classList.contains('selected')) {
        tile.classList.add('disabled');
      }
    });
  } else {
    // Enable all flavor tiles
    flavorTiles.forEach(tile => {
      tile.classList.remove('disabled');
    });
  }

  // Handle mix-in limits (max 3)
  const mixinTiles = document.querySelectorAll('[data-type="mixins"]');
  if (selectedItems.mixins.length >= 3) {
    // Disable unselected mix-in tiles
    mixinTiles.forEach(tile => {
      if (!tile.classList.contains('selected')) {
        tile.classList.add('disabled');
      }
    });
  } else {
    // Enable all mix-in tiles
    mixinTiles.forEach(tile => {
      tile.classList.remove('disabled');
    });
  }

  console.log(`Selection status: Base ${selectedItems.base ? 1 : 0}/1, Flavors ${selectedItems.flavors.length}/2, Mix-ins ${selectedItems.mixins.length}/3`);
}

function updateDisplay() {
  updateSizeSelectorVisibility();
  updateNutritionBreakdown();
  updateNutritionTotals();
}

function updateSizeSelectorVisibility() {
  const sizeSelector = document.getElementById('size-selector');
  if (selectedItems.base) {
    sizeSelector.style.display = 'block';
  } else {
    sizeSelector.style.display = 'none';
  }
}

function updateNutritionBreakdown() {
  const breakdownContainer = document.getElementById('nutrition-breakdown');
  const hasSelections = selectedItems.base || selectedItems.flavors.length > 0 || selectedItems.mixins.length > 0;

  if (!hasSelections) {
    breakdownContainer.innerHTML = `
      <div class="empty-selection-state">
        <div class="text-highlight is-menu">Start Building</div>
        <p>Select items from the menu above to see detailed nutrition information for each ingredient.</p>
      </div>
    `;
    return;
  }

  let breakdownHTML = '';

  // Add base details
  if (selectedItems.base) {
    const baseData = nutritionData.bases.find(b => b.id === selectedItems.base.id);
    if (baseData) {
      breakdownHTML += createIndividualItemHTML(baseData, 'Base');
    }
  }

  // Add flavor details
  selectedItems.flavors.forEach(flavor => {
    const flavorData = nutritionData.flavors.find(f => f.id === flavor.id);
    if (flavorData) {
      breakdownHTML += createIndividualItemHTML(flavorData, 'Flavor');
    }
  });

  // Add mixin details
  selectedItems.mixins.forEach(mixin => {
    const mixinData = nutritionData.mixins.find(m => m.id === mixin.id);
    if (mixinData) {
      breakdownHTML += createIndividualItemHTML(mixinData, 'Mix-in');
    }
  });

  breakdownContainer.innerHTML = breakdownHTML;
}

function createIndividualItemHTML(itemData, type) {
  // V7 APPROACH: ALL items have size data - direct lookup!
  let nutritionValues;

  if (itemData.sizes && itemData.sizes[currentSize]) {
    // Direct size lookup for ALL items (bases, flavors, mixins)
    nutritionValues = itemData.sizes[currentSize];
  } else {
    // Fallback (should not happen in V7)
    console.warn(`No size data found for ${itemData.name} - ${currentSize}`);
    nutritionValues = {
      calories: 0, total_fat: 0, saturated_fat: 0,
      cholesterol: 0, sodium: 0, protein: 0, sugar: 0
    };
  }

  return `
    <div class="individual-item">
      <div class="item-header">
        <div class="item-name">${itemData.name}</div>
        <div class="item-type-badge">${type}</div>
      </div>
      <div class="item-nutrition">
        <div class="item-nutrition-stat">
          <span class="item-nutrition-value">${nutritionValues.calories}</span>
          <div class="item-nutrition-label">Calories</div>
        </div>
        <div class="item-nutrition-stat">
          <span class="item-nutrition-value">${nutritionValues.protein}g</span>
          <div class="item-nutrition-label">Protein</div>
        </div>
        <div class="item-nutrition-stat">
          <span class="item-nutrition-value">${nutritionValues.total_fat}g</span>
          <div class="item-nutrition-label">Total Fat</div>
        </div>
        <div class="item-nutrition-stat">
          <span class="item-nutrition-value">${nutritionValues.saturated_fat}g</span>
          <div class="item-nutrition-label">Saturated Fat</div>
        </div>
        <div class="item-nutrition-stat">
          <span class="item-nutrition-value">${nutritionValues.cholesterol}mg</span>
          <div class="item-nutrition-label">Cholesterol</div>
        </div>
        <div class="item-nutrition-stat">
          <span class="item-nutrition-value">${nutritionValues.sodium}mg</span>
          <div class="item-nutrition-label">Sodium</div>
        </div>
        <div class="item-nutrition-stat">
          <span class="item-nutrition-value">${nutritionValues.sugar}g</span>
          <div class="item-nutrition-label">Sugar</div>
        </div>
      </div>
    </div>
  `;
}

function updateNutritionTotals() {
  let totals = {
    grams: 0,
    calories: 0, total_fat: 0,
    saturated_fat: 0,
    cholesterol: 0,
    sodium: 0,
    protein: 0,
    sugar: 0
  };

  // V7 APPROACH: Direct size lookup for ALL items

  // Add base nutrition (direct size lookup)
  if (selectedItems.base) {
    const baseData = nutritionData.bases.find(b => b.id === selectedItems.base.id);
    if (baseData && baseData.sizes && baseData.sizes[currentSize]) {
      const sizeData = baseData.sizes[currentSize];
      totals.grams += sizeData.grams;
      totals.calories += sizeData.calories;

      totals.total_fat += sizeData.total_fat;
      totals.saturated_fat += sizeData.saturated_fat;
      totals.cholesterol += sizeData.cholesterol;
      totals.sodium += sizeData.sodium;
      totals.protein += sizeData.protein;
      totals.sugar += sizeData.sugar;
    }
  }

  // Add flavor nutrition (direct size lookup)
  selectedItems.flavors.forEach(flavor => {
    const flavorData = nutritionData.flavors.find(f => f.id === flavor.id);
    if (flavorData && flavorData.sizes && flavorData.sizes[currentSize]) {
      const sizeData = flavorData.sizes[currentSize];
      totals.grams += sizeData.grams;
      totals.calories += sizeData.calories;

      totals.total_fat += sizeData.total_fat;
      totals.saturated_fat += sizeData.saturated_fat;
      totals.cholesterol += sizeData.cholesterol;
      totals.sodium += sizeData.sodium;
      totals.protein += sizeData.protein;
      totals.sugar += sizeData.sugar;
    }
  });

  // Add mixin nutrition (direct size lookup)
  selectedItems.mixins.forEach(mixin => {
    const mixinData = nutritionData.mixins.find(m => m.id === mixin.id);
    if (mixinData && mixinData.sizes && mixinData.sizes[currentSize]) {
      const sizeData = mixinData.sizes[currentSize];
      totals.grams += sizeData.grams;
      totals.calories += sizeData.calories;

      totals.total_fat += sizeData.total_fat;
      totals.saturated_fat += sizeData.saturated_fat;
      totals.cholesterol += sizeData.cholesterol;
      totals.sodium += sizeData.sodium;
      totals.protein += sizeData.protein;
      totals.sugar += sizeData.sugar;
    }
  });

  // Update display with all 9 nutrition values
  document.getElementById('total-calories').textContent = Math.round(totals.calories);

  document.getElementById('total-protein').textContent = `${Math.round(totals.protein)}g`;
  document.getElementById('total-fat').textContent = `${totals.total_fat.toFixed(1)}g`;
  document.getElementById('total-saturated-fat').textContent = `${totals.saturated_fat.toFixed(1)}g`;
  document.getElementById('total-cholesterol').textContent = `${Math.round(totals.cholesterol)}mg`;
  document.getElementById('total-sodium').textContent = `${totals.sodium.toFixed(1)}mg`;
  document.getElementById('total-sugar').textContent = `${Math.round(totals.sugar)}g`;
  document.getElementById('total-serving-size').textContent = `${Math.round(totals.grams)}g`;
}

