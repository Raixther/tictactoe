const App = {
    $:{
        menu:document.querySelector('[data-id="menu"]'),
        menuItems:document.querySelector('.items')
    },

   init() {
    App.$.menu.addEventListener('click', ()=>{
        App.$.menuItems.classList.toggle('hidden');
        })
   }
}

window.addEventListener('load', App.init());
