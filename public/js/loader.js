window.onload = function () {
  const loader = document.createElement("div");
  loader.classList.add("card-wrapper");
  loader.innerHTML = `
    <div class="card-loader">
        <div class="spinner">
        <div class="spinner-item"></div>
        <div class="spinner-item"></div>
        <div class="spinner-item"></div>
        <div class="spinner-item"></div>
        </div>
        <p>Loading ....</p>
    </div>`;
  document.body.appendChild(loader);
  setTimeout(() => {
    loader.remove();
  }, 2000);
};

swal({
  title: "You are Currently in the Waiting Room!",
  text: "Please Click the Green (Join the Meeting) Button to Enter the Meeting ...",
  icon: "info",
});
