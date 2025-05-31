// monkey_patch_infinite_records.js

(function () {
  const oldConstructor = window.InfiniteRecords;

  if (typeof oldConstructor === "function") {
    window.InfiniteRecords = function PatchedInfiniteRecords(el) {
      if (!el || !el.dataset) {
        console.warn("Skipping InfiniteRecords init — missing container or dataset", el);
        return;
      }

      return new oldConstructor(el);
    };

    window.InfiniteRecords.prototype = oldConstructor.prototype;
  } else {
    console.warn("InfiniteRecords is not defined yet — monkey patch skipped");
  }
})();

