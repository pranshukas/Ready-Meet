const notesToggle = document.getElementById("notes-toggle");
const closeNotes = document.getElementById("close-notes");

notesToggle.addEventListener("click", (e) => {
  const notes = document.querySelector(".notes");
  notes.classList.toggle("notes-active");
});

closeNotes.addEventListener("click", (e) => {
  const notes = document.querySelector(".notes");
  notes.classList.toggle("notes-active");
});

function downloadAsPdf() {
  var notes = document.getElementById("notes-text").value;
  if (notes.length === 0) {
    swal("Please write some text to download");
    return;
  }
  var doc = new jsPDF();
  doc.text(10, 15, doc.splitTextToSize(notes, 180));
  doc.save("Notes.pdf");
}
