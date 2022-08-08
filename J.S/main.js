function AlternatingPages(value) {
    switch (value) {
      case "home":
        homePage();
        break;
      case "movies":
        moviesPage();
        break;
  
      case "Food_Drinks":
        Food_DrinksPage();
        break;
  
      case "movies_reviews":
        abutPage();
        break;
     
      case "contxt_us":
        contact_usPage();
        break;

      default: {
        homePage();
      }
    }
  }

  console.log(localStorage.getItem("page"));
window.addEventListener("load", () => {
    AlternatingPages(localStorage.getItem("page"))
})




