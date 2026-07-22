(function () {
  function initFilter(root) {
    var buttons = Array.prototype.slice.call(
      root.querySelectorAll(".tag-filter__btn")
    );
    var list = document.querySelector("[data-tag-filter-list]");
    if (!list || buttons.length === 0) return;

    var items = Array.prototype.slice.call(list.children);
    var emptyEl = document.querySelector("[data-tag-filter-empty]");
    var activeTag = "";

    function itemTags(item) {
      var raw = item.getAttribute("data-tags");
      if (!raw) return [];
      try {
        var parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        return [];
      }
    }

    function apply(tag) {
      activeTag = tag || "";
      var visible = 0;

      items.forEach(function (item) {
        var tags = itemTags(item);
        var show = !activeTag || tags.indexOf(activeTag) !== -1;
        item.hidden = !show;
        if (show) visible += 1;
      });

      buttons.forEach(function (btn) {
        var selected = (btn.getAttribute("data-tag") || "") === activeTag;
        btn.classList.toggle("is-active", selected);
        btn.setAttribute("aria-pressed", selected ? "true" : "false");
      });

      if (emptyEl) {
        if (visible === 0) {
          emptyEl.removeAttribute("hidden");
        } else {
          emptyEl.setAttribute("hidden", "");
        }
      }
    }

    root.addEventListener("click", function (event) {
      var btn = event.target.closest(".tag-filter__btn");
      if (!btn || !root.contains(btn)) return;
      apply(btn.getAttribute("data-tag") || "");
    });

    apply("");
  }

  document.querySelectorAll("[data-tag-filter]").forEach(initFilter);
})();
