function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1; //asc or desc
  const body = table.tBodies[0];
  const rows = Array.from(body.querySelectorAll("tr"));

  const sortedRows = rows.sort((a, b) => {
    const aColText = a
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();
    const bColText = b
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Remove all existing TRs from the table
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }

  body.append(...sortedRows);

  table
    .querySelectorAll("th")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table th").forEach((head) => {
  head.addEventListener("click", () => {
    const tableElement = head.parentElement.parentElement.parentElement;
    const headerIndex = Array.prototype.indexOf.call(
      head.parentElement.children,
      head
    );
    const currentIsAscending = head.classList.contains("th-sort-asc");

    sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
  });
});
