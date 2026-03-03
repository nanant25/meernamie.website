function openFullImage(element) {
    const imgElement = element.querySelector('img');
    if (imgElement) {
        const imgSrc = imgElement.src;
        const fullImg = document.getElementById('fullImage');
        if (fullImg) {
            fullImg.src = imgSrc;
            var myImageModal = new bootstrap.Modal(document.getElementById('imageModal'));
            myImageModal.show();
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var menuCollapse = document.getElementById('navbar1');
    var navLinks = document.querySelectorAll('.nav-link');

    if (menuCollapse && typeof bootstrap !== 'undefined') {
        var bsCollapse = new bootstrap.Collapse(menuCollapse, { toggle: false });

        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                // ป้องกันไม่ให้เมนูหุบเมื่อกด Dropdown (Service/Performance)
                if (this.classList.contains('dropdown-toggle')) {
                    return; 
                }

                if (menuCollapse.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });

        // ให้เมนูหุบเมื่อกดเลือกรายการย่อยใน Dropdown
        var dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(function(item) {
            item.addEventListener('click', function() {
                if (menuCollapse.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });
    }
});