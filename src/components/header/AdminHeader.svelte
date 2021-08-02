<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
   <div class="container">
     <a class="navbar-brand" href="/admin/">
       <img src="/images/boi.svg" alt="..." height="36">
     </a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav ms-auto top-navbar">
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="/admin/">Admin Dashboard</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="./">Home</a>
         </li>
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Actions
           </a>
           <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
             <li><a class="dropdown-item" href="/admin/games">Games</a></li>
             <li><a class="dropdown-item" href="/admin/categories">Categories</a></li>
             <li>
               <hr class="dropdown-divider">
             </li>
             <li><a class="dropdown-item" href="/admin/logout">Logout</a></li>
           </ul>
         </li>
       </ul>
     </div>
   </div>
 </nav>

<style lang="scss">
 nav {
    font-size: 1.5rem;
 }
 .top-navbar {
    li {
       padding: 0 2rem;
       font-size: 1.5rem;
    }
 }
</style>